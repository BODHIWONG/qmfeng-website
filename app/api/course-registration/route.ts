import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const DEFAULT_COURSE_FROM = "Qimen Strategy <registration@qmfeng.com>";
const DEFAULT_REPLY_TO = "info@qmfeng.com";

type Payload = {
  registrantName?: string;
  phone?: string;
  email?: string;
  participantCount?: number | string;
  participantNames?: string;
  courseId?: string;
  courseBatch?: string;
  courseBatchStatus?: string;
  batchId?: string;
  amountPaid?: string;
  paymentReference?: string;
  paymentStatus?: string;
  notes?: string;
  website?: string;
  pageUrl?: string;
  referrer?: string;
  userAgent?: string;
  utm?: Record<string, string>;
  acceptedPolicy?: boolean;
};

type DeliveryResult = {
  destination: string;
  ok: boolean;
  detail?: string;
};

type EmailDeliveryResult = {
  ok: boolean;
  detail: string;
  id?: string;
  from?: string;
  status?: number;
};

type CourseMode = "weekly" | "interest" | "application";

const CATALOG = {
  "qimen-foundation": {
    name: "Qi Men Dun Jia Foundation Course",
    zh: "奇门遁甲基础课程",
    fee: 990,
    mode: "weekly" as CourseMode,
  },
  "qimen-intermediate": {
    name: "Qi Men Dun Jia Intermediate Course",
    zh: "奇门遁甲中级课程",
    fee: null,
    mode: "interest" as CourseMode,
  },
  "qimen-advanced": {
    name: "Qi Men Dun Jia Advanced Course",
    zh: "奇门遁甲高级课程",
    fee: null,
    mode: "interest" as CourseMode,
  },
  "qimen-disciple": {
    name: "Qi Men Dun Jia Disciple Programme",
    zh: "奇门遁甲弟子班",
    fee: null,
    mode: "application" as CourseMode,
  },
  "number-energy": {
    name: "Number Energy & Phone Number Selection Course",
    zh: "数字能量与手机号码课程",
    fee: null,
    mode: "interest" as CourseMode,
  },
  "bazi-foundation": {
    name: "Bazi Life Structure Foundation Course",
    zh: "八字命理基础课程",
    fee: null,
    mode: "interest" as CourseMode,
  },
  "feng-shui-layout": {
    name: "Feng Shui Layout & Space Alignment Course",
    zh: "風水布局实战课程",
    fee: null,
    mode: "interest" as CourseMode,
  },
} as const;

function clean(value: unknown, max = 2000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function cleanRecord(value: unknown) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  return Object.fromEntries(
    Object.entries(value as Record<string, unknown>).map(([key, item]) => [key.slice(0, 80), clean(item, 300)])
  );
}

function registrationId() {
  return `QMC-${new Date().toISOString().slice(0, 10).replace(/-/g, "")}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
}

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function message(record: Record<string, unknown>) {
  return [
    `Registration ID: ${record.registrationId}`,
    `Received: ${record.receivedAt}`,
    `Course: ${record.courseName} / ${record.courseNameZh}`,
    `Registration Mode: ${record.registrationMode}`,
    `Batch / Status: ${record.courseBatch}`,
    `Registrant: ${record.registrantName}`,
    `WhatsApp: ${record.phone}`,
    `Email: ${record.email || "-"}`,
    `Participants: ${record.participantCount}`,
    `Participant Names: ${record.participantNames}`,
    `Fee Per Participant: ${record.courseFeePerParticipant ?? "To be confirmed"}`,
    `Expected Total: ${record.expectedTotal ?? "To be confirmed"}`,
    `Payment Status: ${record.paymentStatus || "-"}`,
    `Amount Paid: ${record.amountPaid || "-"}`,
    `PayNow Reference: ${record.paymentReference || "-"}`,
    `Policy Accepted: ${record.acceptedPolicy ? "Yes" : "No"}`,
    `Learning Background / Notes: ${record.notes || "-"}`,
    `Page: ${record.pageUrl || "-"}`,
  ].join("\n");
}

function emailHtml(record: Record<string, unknown>, internal: boolean) {
  const isApplication = record.registrationMode === "application";
  const isInterest = record.registrationMode === "interest";
  const title = internal
    ? isApplication
      ? "New Disciple Programme Application"
      : isInterest
        ? "New Course Interest Registration"
        : "New Course Registration"
    : isApplication
      ? "Disciple Programme Application Received"
      : isInterest
        ? "Course Interest Registration Received"
        : "Course Registration Received";
  const intro = internal
    ? "A new course submission has been received through qmfeng.com."
    : isApplication
      ? "Thank you for submitting your interest in the Qi Men Dun Jia Disciple Programme. Admission is subject to assessment and written confirmation."
      : isInterest
        ? "Thank you for registering your interest. Dates, fees and admission are not confirmed until Qimen Strategy Academy contacts you in writing."
        : "Thank you for submitting your course registration. Your place is not confirmed until payment has been verified and written confirmation has been issued.";

  const rows = [
    ["Reference", record.registrationId],
    ["Course", `${record.courseName} / ${record.courseNameZh}`],
    ["Registration Mode", record.registrationMode],
    ["Batch / Status", record.courseBatch],
    ["Registrant", record.registrantName],
    ["WhatsApp", record.phone],
    ["Email", record.email || "-"],
    ["Participants", record.participantCount],
    ["Participant Names", record.participantNames],
    ["Expected Total", record.expectedTotal ? `S$${record.expectedTotal}` : "To be confirmed"],
    ["Payment Status", record.paymentStatus || "-"],
    ["Amount Paid", record.amountPaid || "-"],
    ["PayNow Reference", record.paymentReference || "-"],
    ["Learning Background / Notes", record.notes || "-"],
  ];

  return `<!doctype html>
<html>
  <body style="margin:0;background:#f7f1e7;font-family:Arial,sans-serif;color:#1c1712;">
    <div style="max-width:680px;margin:0 auto;padding:32px 20px;">
      <div style="background:#111;padding:28px;color:#fff;border-top:4px solid #d6ad63;">
        <div style="font-size:12px;letter-spacing:2px;color:#d6ad63;font-weight:700;">QIMEN STRATEGY ACADEMY</div>
        <h1 style="margin:12px 0 0;font-size:28px;">${title}</h1>
      </div>
      <div style="background:#fff;padding:28px;border:1px solid #e3d8ca;">
        <p style="line-height:1.7;margin-top:0;">${intro}</p>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          ${rows
            .map(
              ([label, value]) => `<tr>
                <td style="width:34%;padding:10px;border-bottom:1px solid #eee;font-weight:700;vertical-align:top;">${escapeHtml(label)}</td>
                <td style="padding:10px;border-bottom:1px solid #eee;vertical-align:top;">${escapeHtml(value)}</td>
              </tr>`
            )
            .join("")}
        </table>
        <p style="margin:24px 0 0;line-height:1.7;">Official WhatsApp: +65 8959 3499<br>Location: Blk 210 New Upper Changi Road #01-729, Singapore 460210</p>
      </div>
    </div>
  </body>
</html>`;
}

async function dedicated(url: string, record: Record<string, unknown>) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(record),
    cache: "no-store",
  });
  if (!response.ok) throw new Error(`Course webhook returned ${response.status}`);
  return "course_webhook";
}

async function lead(url: string, record: Record<string, unknown>) {
  const endpoint = new URL(url);
  endpoint.searchParams.set("name", String(record.registrantName || ""));
  endpoint.searchParams.set("whatsapp", String(record.phone || ""));
  endpoint.searchParams.set("email", String(record.email || ""));
  endpoint.searchParams.set("service", `${record.courseName} | ${record.courseBatch}`);
  endpoint.searchParams.set("message", message(record));
  endpoint.searchParams.set("source", "Qimen Course Registration");
  endpoint.searchParams.set("registration_id", String(record.registrationId || ""));
  endpoint.searchParams.set("course_id", String(record.courseId || ""));
  endpoint.searchParams.set("batch_id", String(record.batchId || ""));
  endpoint.searchParams.set("registration_mode", String(record.registrationMode || ""));
  endpoint.searchParams.set("policy_accepted", record.acceptedPolicy ? "yes" : "no");
  endpoint.searchParams.set("notification_email", clean(process.env.COURSE_ADMIN_EMAIL, 300) || DEFAULT_REPLY_TO);
  endpoint.searchParams.set("payload", JSON.stringify(record));
  const response = await fetch(endpoint.toString(), { method: "GET", cache: "no-store" });
  if (!response.ok) throw new Error(`Lead webhook returned ${response.status}`);
  return "lead_webhook";
}

function emailAddressFromSender(sender: string) {
  const angleMatch = sender.match(/<([^<>]+)>/);
  return clean(angleMatch?.[1] || sender, 300).toLowerCase();
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function attemptResend(args: {
  apiKey: string;
  from: string;
  to: string;
  subject: string;
  html: string;
  replyTo: string;
}): Promise<EmailDeliveryResult> {
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        authorization: `Bearer ${args.apiKey}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        from: args.from,
        to: [args.to],
        subject: args.subject,
        html: args.html,
        reply_to: args.replyTo,
      }),
      cache: "no-store",
    });

    const raw = await response.text().catch(() => "");
    let parsed: { id?: string; message?: string; name?: string } = {};
    try {
      parsed = raw ? JSON.parse(raw) : {};
    } catch {
      parsed = {};
    }

    if (!response.ok) {
      console.error("[QimenCourseEmailResendRejected]", {
        status: response.status,
        from: args.from,
        toDomain: args.to.split("@")[1] || "unknown",
        response: raw.slice(0, 500),
      });
      return {
        ok: false,
        detail: `resend_${response.status}`,
        status: response.status,
        from: args.from,
      };
    }

    return {
      ok: true,
      detail: "sent",
      id: parsed.id,
      status: response.status,
      from: args.from,
    };
  } catch (error) {
    console.error("[QimenCourseEmailNetworkError]", {
      from: args.from,
      toDomain: args.to.split("@")[1] || "unknown",
      error: error instanceof Error ? error.message : "unknown_error",
    });
    return {
      ok: false,
      detail: "resend_network_error",
      from: args.from,
    };
  }
}

async function sendResendEmail(args: { to: string; subject: string; html: string }): Promise<EmailDeliveryResult> {
  const apiKey = clean(process.env.RESEND_API_KEY, 500);
  if (!apiKey) {
    console.error("[QimenCourseEmailConfigurationError]", { missing: "RESEND_API_KEY" });
    return { ok: false, detail: "missing_resend_api_key" };
  }

  const to = clean(args.to, 300).toLowerCase();
  if (!isValidEmail(to)) {
    return { ok: false, detail: "invalid_recipient_email" };
  }

  const configuredFrom = clean(process.env.COURSE_EMAIL_FROM, 300);
  const senderCandidates = Array.from(
    new Set([configuredFrom, DEFAULT_COURSE_FROM].filter((value) => value && isValidEmail(emailAddressFromSender(value))))
  );
  const replyToCandidate = clean(process.env.COURSE_REPLY_TO, 300) || DEFAULT_REPLY_TO;
  const replyTo = isValidEmail(replyToCandidate) ? replyToCandidate : DEFAULT_REPLY_TO;

  if (!configuredFrom) {
    console.warn("[QimenCourseEmailConfigurationFallback]", {
      missing: "COURSE_EMAIL_FROM",
      fallback: DEFAULT_COURSE_FROM,
    });
  }

  let lastResult: EmailDeliveryResult = { ok: false, detail: "no_valid_sender" };
  for (const from of senderCandidates) {
    const result = await attemptResend({
      apiKey,
      from,
      to,
      subject: args.subject,
      html: args.html,
      replyTo,
    });
    if (result.ok) return result;
    lastResult = result;

    // Retry with the verified-domain fallback only when the configured sender is rejected.
    if (result.status && ![403, 422].includes(result.status)) break;
  }

  return lastResult;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Payload;
    if (clean(body.website, 200)) return NextResponse.json({ ok: true, registrationId: registrationId() });

    const courseId = clean(body.courseId, 100) as keyof typeof CATALOG;
    const course = CATALOG[courseId];
    if (!course) return NextResponse.json({ ok: false, error: "Please select a valid course." }, { status: 400 });
    if (body.acceptedPolicy !== true) {
      return NextResponse.json({ ok: false, error: "Please accept the course policy and privacy terms." }, { status: 400 });
    }

    const participantCount = Math.min(Math.max(Number(body.participantCount) || 1, 1), 20);
    const record = {
      registrationId: registrationId(),
      receivedAt: new Date().toISOString(),
      source: "qmfeng.com/course-registration",
      courseId,
      courseName: course.name,
      courseNameZh: course.zh,
      registrationMode: course.mode,
      batchId: clean(body.batchId, 100),
      courseBatch: clean(body.courseBatch, 300),
      courseBatchStatus: clean(body.courseBatchStatus, 50),
      courseFeePerParticipant: course.fee,
      expectedTotal: course.fee ? course.fee * participantCount : null,
      registrantName: clean(body.registrantName, 200),
      phone: clean(body.phone, 100),
      email: clean(body.email, 300).toLowerCase(),
      participantCount,
      participantNames: clean(body.participantNames, 1000),
      paymentStatus: course.mode === "weekly" ? clean(body.paymentStatus, 100) : "Not applicable",
      amountPaid: course.mode === "weekly" ? clean(body.amountPaid, 100) : "",
      paymentReference: course.mode === "weekly" ? clean(body.paymentReference, 200) : "",
      notes: clean(body.notes, 1500),
      acceptedPolicy: true,
      companyName: "QIMING FENG SHUI WISDOM PTE. LTD.",
      payNowUen: "202313112R",
      pageUrl: clean(body.pageUrl, 1000),
      referrer: clean(body.referrer, 1000),
      userAgent: clean(body.userAgent, 500),
      utm: cleanRecord(body.utm),
    };

    if (!record.registrantName || !record.phone || !record.email || !record.participantNames || !record.courseBatch) {
      return NextResponse.json(
        { ok: false, error: "Name, WhatsApp, email, participant name(s), course and registration type are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(record.email)) {
      return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
    }

    if (course.mode !== "weekly" && !record.notes) {
      return NextResponse.json(
        { ok: false, error: "Please share your current learning background and goals for this course level." },
        { status: 400 }
      );
    }

    const courseWebhook = process.env.COURSE_REGISTRATION_WEBHOOK_URL;
    const leadWebhook = process.env.QIMEN_LEADS_WEBHOOK_URL || process.env.APPOINTMENT_WEBHOOK_URL;
    if (!courseWebhook && !leadWebhook) {
      return NextResponse.json(
        { ok: false, error: "Registration storage is not configured. Please contact us on WhatsApp." },
        { status: 500 }
      );
    }

    const storageDeliveries: DeliveryResult[] = [];

    if (courseWebhook) {
      try {
        storageDeliveries.push({ destination: await dedicated(courseWebhook, record), ok: true });
      } catch (error) {
        storageDeliveries.push({
          destination: "course_webhook",
          ok: false,
          detail: error instanceof Error ? error.message : "unknown_error",
        });
      }
    }

    if (leadWebhook) {
      try {
        storageDeliveries.push({ destination: await lead(leadWebhook, record), ok: true });
      } catch (error) {
        storageDeliveries.push({
          destination: "lead_webhook",
          ok: false,
          detail: error instanceof Error ? error.message : "unknown_error",
        });
      }
    }

    if (!storageDeliveries.some((delivery) => delivery.ok)) {
      throw new Error("All registration storage destinations failed.");
    }

    const configuredAdminEmail = clean(process.env.COURSE_ADMIN_EMAIL, 300).toLowerCase();
    const adminEmail = isValidEmail(configuredAdminEmail) ? configuredAdminEmail : DEFAULT_REPLY_TO;
    if (!configuredAdminEmail || adminEmail !== configuredAdminEmail) {
      console.warn("[QimenCourseAdminEmailFallback]", {
        configured: Boolean(configuredAdminEmail),
        fallback: DEFAULT_REPLY_TO,
      });
    }

    const subjectPrefix = course.mode === "application"
      ? "New Disciple Programme Application"
      : course.mode === "interest"
        ? "New Course Interest Registration"
        : "New Course Registration";
    const registrantSubjectPrefix = course.mode === "application"
      ? "Disciple Programme Application Received"
      : course.mode === "interest"
        ? "Course Interest Registration Received"
        : "Course Registration Received";

    const [adminDelivery, registrantDelivery] = await Promise.all([
      sendResendEmail({
        to: adminEmail,
        subject: `${subjectPrefix} ${record.registrationId}`,
        html: emailHtml(record, true),
      }),
      sendResendEmail({
        to: record.email,
        subject: `${registrantSubjectPrefix} — ${record.registrationId}`,
        html: emailHtml(record, false),
      }),
    ]);

    const emailDeliveryOk = adminDelivery.ok && registrantDelivery.ok;

    console.info("[QimenCourseRegistrationStored]", {
      registrationId: record.registrationId,
      storageDeliveries,
      emailConfiguration: {
        resendApiKeyConfigured: Boolean(clean(process.env.RESEND_API_KEY, 500)),
        courseEmailFromConfigured: Boolean(clean(process.env.COURSE_EMAIL_FROM, 300)),
        courseAdminEmailConfigured: Boolean(configuredAdminEmail),
      },
      adminEmail: adminDelivery,
      registrantEmail: registrantDelivery,
      emailDeliveryOk,
      courseId,
      registrationMode: course.mode,
      batchId: record.batchId,
    });

    return NextResponse.json({
      ok: true,
      registrationId: record.registrationId,
      receivedAt: record.receivedAt,
      storageDeliveries,
      emailDeliveryOk,
      notifications: {
        adminEmail: adminDelivery,
        registrantEmail: registrantDelivery,
      },
    });
  } catch (error) {
    console.error("[QimenCourseRegistrationError]", error);
    return NextResponse.json(
      { ok: false, error: "Unable to store the registration. Please try again or contact us on WhatsApp." },
      { status: 502 }
    );
  }
}
