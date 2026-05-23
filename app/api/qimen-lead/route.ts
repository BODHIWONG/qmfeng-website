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
  const service = asString(record.service) || "Qimen Strategy Consultation";
  const message = asString(record.message);
  const source = asString(record.source) || "Qimen Website";
  const website = asString(record.website);

  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !whatsapp) {
    return NextResponse.json({ ok: false, error: "Name and WhatsApp are required." }, { status: 400 });
  }

  const target = process.env.QIMEN_LEADS_WEBHOOK_URL || process.env.APPOINTMENT_WEBHOOK_URL;

  if (!target) {
    return NextResponse.json({ ok: false, error: "Lead destination is not configured." }, { status: 500 });
  }

  const endpoint = new URL(target);
  endpoint.searchParams.set("name", name);
  endpoint.searchParams.set("whatsapp", whatsapp);
  endpoint.searchParams.set("service", service);
  endpoint.searchParams.set("message", message);
  endpoint.searchParams.set("source", source);

  const result = await fetch(endpoint.toString(), { method: "GET", cache: "no-store" });

  if (!result.ok) {
    return NextResponse.json({ ok: false, error: "Lead submission failed." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
