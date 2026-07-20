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
  const profile = asString(record.profile);
  const pathway = asString(record.pathway) || asString(record.service) || "Qimen Strategy Advisory";
  const industry = asString(record.industry);
  const teamSize = asString(record.teamSize);
  const decisionDeadline = asString(record.decisionDeadline);
  const engagement = asString(record.engagement);
  const originalMessage = asString(record.message);
  const source = asString(record.source) || "Qimen Website";
  const website = asString(record.website);
  const consent = record.consent === true;

  if (website) return NextResponse.json({ ok: true });

  if (!name || !whatsapp || !profile || !pathway || !consent) {
    return NextResponse.json(
      { ok: false, error: "Name, WhatsApp, profile, pathway and privacy consent are required." },
      { status: 400 }
    );
  }

  const target = process.env.QIMEN_LEADS_WEBHOOK_URL || process.env.APPOINTMENT_WEBHOOK_URL;
  if (!target) {
    return NextResponse.json({ ok: false, error: "Lead destination is not configured." }, { status: 500 });
  }

  const summary = [
    `Profile: ${profile}`,
    `Pathway: ${pathway}`,
    industry ? `Industry: ${industry}` : "",
    teamSize ? `Team Size: ${teamSize}` : "",
    decisionDeadline ? `Decision Deadline: ${decisionDeadline}` : "",
    engagement ? `Preferred Engagement: ${engagement}` : "",
    originalMessage ? `Decision / Message: ${originalMessage}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const endpoint = new URL(target);
  endpoint.searchParams.set("name", name);
  endpoint.searchParams.set("whatsapp", whatsapp);
  endpoint.searchParams.set("service", pathway);
  endpoint.searchParams.set("message", summary);
  endpoint.searchParams.set("source", source);
  endpoint.searchParams.set("profile", profile);
  endpoint.searchParams.set("pathway", pathway);
  endpoint.searchParams.set("industry", industry);
  endpoint.searchParams.set("teamSize", teamSize);
  endpoint.searchParams.set("decisionDeadline", decisionDeadline);
  endpoint.searchParams.set("engagement", engagement);
  endpoint.searchParams.set("consent", "yes");

  const result = await fetch(endpoint.toString(), { method: "GET", cache: "no-store" });
  if (!result.ok) {
    return NextResponse.json({ ok: false, error: "Lead submission failed." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
