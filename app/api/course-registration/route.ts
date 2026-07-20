import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

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

const CATALOG = {
  "qimen-foundation": { name: "Qi Men Dun Jia Foundation Course", zh: "奇门遁甲基础课程", fee: 990 },
  "number-energy": { name: "Number Energy & Phone Number Selection Course", zh: "数字能量与手机号码课程", fee: null },
  "bazi-foundation": { name: "Bazi Life Structure Foundation Course", zh: "八字命理基础课程", fee: null },
  "feng-shui-layout": { name: "Feng Shui Layout & Space Alignment Course", zh: "風水布局实战课程", fee: null },
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
    `Batch: ${record.courseBatch}`,
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
    `Notes: ${record.notes || "-"}`,
    `Page: ${record.pageUrl || "-"}`,
  ].join("\n");
}

function emailHtml(record: Record<string, unknown>, internal: boolean) {
  const title = internal ? "New Course Registration" : "Course Registration Received";
  const intro = internal
    ? "A new course registration has been submitted through qmfeng.com."
    : "Thank you for submitting your course registration. Your place is not confirmed until payment has been verified and written confirmation has been issued.";

  const rows = [
    ["Reference", record.registrationId],
    ["Course", `${record.courseName} / ${record.courseNameZh}`],
    ["Batch", record.courseBatch],
    ["Registrant", record.registrantName],
    ["WhatsApp", record.phone],
    ["Email", record.email || "-"],
    ["Participants", record.participantCount],
    ["Participant Names", record.participantNames],
    ["Expected Total", record.expectedTotal ? `S$${record.expectedTotal}` : "To be confirmed"],
    ["Payment Status", record.paymentStatus || "-"],
    ["Amount Paid", record.amountPaid || "-"],
    ["PayNow Reference", record.paymentReference || "-"],
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
  endpoint.searchParams.set("policy_accepted", record.acceptedPolicy ? "yes" : "no");
  endpoint.searchParams.set("notification_email", process.env.COURSE_ADMIN_EMAIL || "info@qmfeng.com");
  endpoint.searchParams.set("payload", JSON.stringify(record));
  const response = await fetch(endpoint.toString(), { method: "GET", cache: "no-store" });
  if (!response.ok) throw new Error(`Lead webhook returned ${response.status}`);
  return "lead_webhook";
}

async function sendResendEmail(args: { to: string; subject: string; html: string }) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.COURSE_EMAIL_FROM;
  if (!apiKey || !from) {
    return { ok: false, detail: "not_configured" };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${apiKey}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({ from, to: [args.to], subject: args.subject, html: args.html }),
    cache: "no-store",
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    return { ok: false, detail: `resend_${response.status}:${detail.slice(0, 240)}` };
  }

  return { ok: true, detail: "sent" };
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
      batchId: clean(body.batchId, 100),
      courseBatch: clean(body.courseBatch, 300),
      courseBatchStatus: clean(body.courseBatchStatus, 50),
      courseFeePerParticipant: course.fee,
      expectedTotal: course.fee ? course.fee * participantCount : null,
      registrantName: clean(body.registrantName, 200),
      phone: clean(body.phone, 100),
      email: clean(body.email, 200),
      participantCount,
      participantNames: clean(body.participantNames, 1000),
      paymentStatus: clean(body.paymentStatus, 100),
      amountPaid: clean(body.amountPaid, 100),
      paymentReference: clean(body.paymentReference, 200),
      notes: clean(body.notes, 1000),
      acceptedPolicy: true,
      companyName: "QIMING FENG SHUI WISDOM PTE. LTD.",
      payNowUen: "202313112R",
      pageUrl: clean(body.pageUrl, 1000),
      referrer: clean(body.referrer, 1000),
      userAgent: clean(body.userAgent, 500),
      utm: cleanRecord(body.utm),
    };

    if (!record.registrantName || !record.phone || !record.participantNames || !record.courseBatch) {
      return NextResponse.json(
        { ok: false, error: "Name, WhatsApp, participant name(s), course and batch are required." },
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

    const adminEmail = process.env.COURSE_ADMIN_EMAIL || "info@qmfeng.com";
    const adminDelivery = await sendResendEmail({
      to: adminEmail,
      subject: `New Course Registration ${record.registrationId}`,
      html: emailHtml(record, true),
    });

    const registrantDelivery = record.email
      ? await sendResendEmail({
          to: record.email,
          subject: `Course Registration Received — ${record.registrationId}`,
          html: emailHtml(record, false),
        })
      : { ok: false, detail: "email_not_provided" };

    console.info("[QimenCourseRegistrationStored]", {
      registrationId: record.registrationId,
      storageDeliveries,
      adminEmail: adminDelivery,
      registrantEmail: registrantDelivery,
      courseId,
      batchId: record.batchId,
    });

    return NextResponse.json({
      ok: true,
      registrationId: record.registrationId,
      receivedAt: record.receivedAt,
      storageDeliveries,
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
