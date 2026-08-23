import { createHash, randomBytes } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { deriveLeadSource } from "@/lib/consultation/attribution";
import type {
  ConsultationSubmission,
  ConsultationSubmissionResponse,
} from "@/lib/consultation/types";
import { validateConsultationSubmission } from "@/lib/consultation/validation";
import { isZohoConfigured } from "@/lib/zoho/client";
import { submitConsultationToZoho } from "@/lib/zoho/leads";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 24_000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const IDEMPOTENCY_TTL_MS = 10 * 60 * 1000;
const EXTERNAL_REQUEST_TIMEOUT_MS = 8_000;

type CachedResponse = {
  expiresAt: number;
  response: ConsultationSubmissionResponse;
};

type ContactRuntimeCache = typeof globalThis & {
  __qimenContactRateLimits?: Map<string, number[]>;
  __qimenContactResponses?: Map<string, CachedResponse>;
  __qimenContactInFlight?: Map<string, Promise<ConsultationSubmissionResponse>>;
};

const runtimeCache = globalThis as ContactRuntimeCache;
const rateLimits = runtimeCache.__qimenContactRateLimits || new Map<string, number[]>();
const cachedResponses = runtimeCache.__qimenContactResponses || new Map<string, CachedResponse>();
const inFlight = runtimeCache.__qimenContactInFlight || new Map<string, Promise<ConsultationSubmissionResponse>>();
runtimeCache.__qimenContactRateLimits = rateLimits;
runtimeCache.__qimenContactResponses = cachedResponses;
runtimeCache.__qimenContactInFlight = inFlight;

function clientIp(request: NextRequest) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip")?.trim() ||
    "unknown"
  );
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (rateLimits.get(ip) || []).filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  rateLimits.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX;
}

function cleanupCaches() {
  const now = Date.now();
  for (const [key, item] of cachedResponses.entries()) {
    if (item.expiresAt <= now) cachedResponses.delete(key);
  }
  for (const [ip, entries] of rateLimits.entries()) {
    const recent = entries.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);
    if (recent.length) rateLimits.set(ip, recent);
    else rateLimits.delete(ip);
  }
}

function referenceId() {
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  return `QML-${date}-${randomBytes(3).toString("hex").toUpperCase()}`;
}

function idempotencyKey(submission: ConsultationSubmission, ip: string) {
  if (submission.idempotencyKey) return `client:${submission.idempotencyKey}`;
  return `fingerprint:${createHash("sha256")
    .update([ip, submission.phone, submission.email, submission.consultationType, submission.message].join("|"))
    .digest("hex")}`;
}

function httpsWebhookUrl(value: string) {
  let endpoint: URL;
  try {
    endpoint = new URL(value);
  } catch {
    throw new Error("LEAD_DESTINATION_INVALID");
  }
  if (endpoint.protocol !== "https:") throw new Error("LEAD_DESTINATION_INVALID");
  return endpoint;
}

async function submitToLegacyWebhook(submission: ConsultationSubmission, reference: string) {
  const target = process.env.QIMEN_LEADS_WEBHOOK_URL?.trim() || process.env.APPOINTMENT_WEBHOOK_URL?.trim();
  if (!target) throw new Error("LEAD_DESTINATION_NOT_CONFIGURED");

  const source = deriveLeadSource(submission.attribution);
  const payload = {
    name: submission.name,
    whatsapp: submission.phone,
    phone: submission.phone,
    email: submission.email,
    service: submission.consultationType,
    consultationType: submission.consultationType,
    message: submission.message,
    source,
    pageUrl: submission.attribution.pageUrl || submission.attribution.pagePath,
    referrer: submission.attribution.referrer,
    firstLandingPage: submission.attribution.firstLandingPage,
    firstReferrer: submission.attribution.firstReferrer,
    utm: {
      source: submission.attribution.utmSource,
      medium: submission.attribution.utmMedium,
      campaign: submission.attribution.utmCampaign,
      term: submission.attribution.utmTerm,
      content: submission.attribution.utmContent,
    },
    clickIds: {
      gclid: submission.attribution.gclid,
      gbraid: submission.attribution.gbraid,
      wbraid: submission.attribution.wbraid,
    },
    reference,
    consent: true,
    submittedAt: new Date().toISOString(),
  };

  const response = await fetch(httpsWebhookUrl(target), {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
    cache: "no-store",
    signal: AbortSignal.timeout(EXTERNAL_REQUEST_TIMEOUT_MS),
  });

  if (!response.ok) throw new Error(`LEAD_WEBHOOK_FAILED:${response.status}`);
}

async function processSubmission(
  submission: ConsultationSubmission,
  reference: string
): Promise<ConsultationSubmissionResponse> {
  if (isZohoConfigured()) {
    const result = await submitConsultationToZoho(submission, reference);
    console.info("[QimenContactSubmitted]", {
      reference,
      destination: "zoho_crm",
      action: result.action,
      leadSource: result.leadSource,
      identityConflict: result.identityConflict,
    });
    return { ok: true, reference, duplicate: result.action === "update" };
  }

  await submitToLegacyWebhook(submission, reference);
  console.warn("[QimenContactWebhookFallback]", {
    reference,
    reason: "zoho_not_configured",
  });
  return { ok: true, reference };
}

export async function POST(request: NextRequest) {
  cleanupCaches();

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json<ConsultationSubmissionResponse>(
      { ok: false, error: "The enquiry is too large. Please shorten the message and try again." },
      { status: 413 }
    );
  }

  const rawText = await request.text();
  if (Buffer.byteLength(rawText, "utf8") > MAX_BODY_BYTES) {
    return NextResponse.json<ConsultationSubmissionResponse>(
      { ok: false, error: "The enquiry is too large. Please shorten the message and try again." },
      { status: 413 }
    );
  }

  let raw: unknown;
  try {
    raw = JSON.parse(rawText);
  } catch {
    raw = null;
  }

  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return NextResponse.json<ConsultationSubmissionResponse>(
      { ok: false, error: "Please check the form and try again." },
      { status: 400 }
    );
  }

  const rawRecord = raw as Record<string, unknown>;
  if (typeof rawRecord.website === "string" && rawRecord.website.trim()) {
    return NextResponse.json<ConsultationSubmissionResponse>({ ok: true });
  }

  const validation = validateConsultationSubmission(raw);
  if (validation.success === false) {
    return NextResponse.json<ConsultationSubmissionResponse>(
      {
        ok: false,
        error: "Please correct the highlighted fields.",
        fieldErrors: validation.fieldErrors,
      },
      { status: 400 }
    );
  }

  const ip = clientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json<ConsultationSubmissionResponse>(
      {
        ok: false,
        error: "Too many attempts were received. Please wait a few minutes or contact us on WhatsApp.",
      },
      { status: 429, headers: { "Retry-After": "600" } }
    );
  }

  const key = idempotencyKey(validation.data, ip);
  const cached = cachedResponses.get(key);
  if (cached && cached.expiresAt > Date.now()) {
    return NextResponse.json({ ...cached.response, duplicate: true });
  }

  const active = inFlight.get(key);
  if (active) {
    const result = await active;
    return NextResponse.json({ ...result, duplicate: true });
  }

  const reference = referenceId();
  const task = processSubmission(validation.data, reference);
  inFlight.set(key, task);

  try {
    const response = await task;
    cachedResponses.set(key, { response, expiresAt: Date.now() + IDEMPOTENCY_TTL_MS });
    return NextResponse.json(response);
  } catch (error) {
    const errorCode = error instanceof Error ? error.message.split(":")[0] : "UNKNOWN";
    console.error("[QimenContactSubmissionError]", { reference, errorCode });
    return NextResponse.json<ConsultationSubmissionResponse>(
      {
        ok: false,
        error:
          "We could not submit your enquiry at this moment. Your information has not been cleared. Please try again or contact us directly on WhatsApp.",
      },
      { status: 502 }
    );
  } finally {
    inFlight.delete(key);
  }
}
