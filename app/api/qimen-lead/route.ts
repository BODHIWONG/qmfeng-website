import { NextResponse } from "next/server";

export const runtime = "nodejs";

function asString(input: unknown) {
  return typeof input === "string" ? input.trim() : "";
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const record = body as Record<string, unknown>;
  const name = asString(record.name);
  const whatsapp = asString(record.whatsapp);
  const email = asString(record.email);
  const clientType = asString(record.clientType);
  const industry = asString(record.industry);
  const teamSize = asString(record.teamSize);
  const service = asString(record.service) || "Qimen Strategy Advisory";
  const deadline = asString(record.deadline);
  const supportType = asString(record.supportType);
  const meetingMode = asString(record.meetingMode);
  const message = asString(record.message);
  const source = asString(record.source) || "Qimen Website Advisory Application";
  const website = asString(record.website);
  const consent = record.consent === true;

  if (website) return NextResponse.json({ ok: true });

  if (!name || !whatsapp || !clientType || !service || !message || !consent) {
    return NextResponse.json(
      { ok: false, error: "Required fields and personal-data consent are missing." },
      { status: 400 }
    );
  }

  const target = process.env.QIMEN_LEADS_WEBHOOK_URL || process.env.APPOINTMENT_WEBHOOK_URL;

  if (!target) {
    return NextResponse.json({ ok: false, error: "Lead destination is not configured." }, { status: 500 });
  }

  const endpoint = new URL(target);
  const fields: Record<string, string> = {
    name,
    whatsapp,
    email,
    clientType,
    industry,
    teamSize,
    service,
    deadline,
    supportType,
    meetingMode,
    message,
    source,
    consent: "yes",
    submittedAt: new Date().toISOString(),
  };

  Object.entries(fields).forEach(([key, value]) => endpoint.searchParams.set(key, value));

  const result = await fetch(endpoint.toString(), { method: "GET", cache: "no-store" });

  if (!result.ok) {
    return NextResponse.json({ ok: false, error: "Lead submission failed." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
