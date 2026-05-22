import { NextRequest, NextResponse } from "next/server";

type AppointmentPayload = {
  name?: string;
  phone?: string;
  email?: string;
  consultationType?: string;
  decisionArea?: string;
  timeframe?: string;
  language?: string;
  background?: string;
  pageUrl?: string;
  referrer?: string;
  userAgent?: string;
  utm?: Record<string, string>;
};

function clean(value: unknown) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, 2000);
}

function cleanRecord(value: unknown) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};

  return Object.fromEntries(
    Object.entries(value as Record<string, unknown>).map(([key, entry]) => [
      key.slice(0, 80),
      clean(entry).slice(0, 300),
    ]),
  );
}

function createLeadId() {
  const datePart = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const randomPart = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `QMS-${datePart}-${randomPart}`;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as AppointmentPayload;

    const lead = {
      leadId: createLeadId(),
      receivedAt: new Date().toISOString(),
      source: "qmfeng.com/appointment",
      name: clean(body.name),
      phone: clean(body.phone),
      email: clean(body.email),
      consultationType: clean(body.consultationType),
      decisionArea: clean(body.decisionArea),
      timeframe: clean(body.timeframe),
      language: clean(body.language),
      background: clean(body.background),
      pageUrl: clean(body.pageUrl),
      referrer: clean(body.referrer),
      userAgent: clean(body.userAgent),
      utm: cleanRecord(body.utm),
    };

    if (!lead.name || !lead.phone || !lead.background) {
      return NextResponse.json(
        { ok: false, error: "Name, WhatsApp / Phone and Background / Question are required." },
        { status: 400 },
      );
    }

    const webhookUrl = process.env.APPOINTMENT_WEBHOOK_URL;

    if (webhookUrl) {
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(lead),
        cache: "no-store",
      });

      if (!webhookResponse.ok) {
        console.error("[QimenAppointmentLeadWebhookFailed]", {
          leadId: lead.leadId,
          status: webhookResponse.status,
        });
      }
    }

    console.info("[QimenAppointmentLead]", JSON.stringify(lead));

    return NextResponse.json({
      ok: true,
      leadId: lead.leadId,
      receivedAt: lead.receivedAt,
      webhookConfigured: Boolean(webhookUrl),
    });
  } catch (error) {
    console.error("[QimenAppointmentLeadError]", error);

    return NextResponse.json(
      { ok: false, error: "Unable to submit the appointment request. Please try again." },
      { status: 500 },
    );
  }
}
