import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = {
  registrantName?: string; phone?: string; email?: string; participantCount?: number | string;
  participantNames?: string; courseId?: string; courseBatch?: string; batchId?: string;
  amountPaid?: string; paymentReference?: string; paymentStatus?: string; notes?: string;
  website?: string; pageUrl?: string; referrer?: string; userAgent?: string; utm?: Record<string, string>;
};

const CATALOG = {
  "qimen-foundation": { name: "Qi Men Dun Jia Foundation Course", zh: "奇门遁甲基础课程", fee: 990 },
  "number-energy": { name: "Number Energy & Phone Number Selection Course", zh: "数字能量与手机号码课程", fee: null },
  "bazi-foundation": { name: "Bazi Life Structure Foundation Course", zh: "八字命理基础课程", fee: null },
  "feng-shui-layout": { name: "Feng Shui Layout & Space Alignment Course", zh: "風水布局实战课程", fee: null },
} as const;

function clean(value: unknown, max = 2000) { return typeof value === "string" ? value.trim().slice(0, max) : ""; }
function cleanRecord(value: unknown) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  return Object.fromEntries(Object.entries(value as Record<string, unknown>).map(([k, v]) => [k.slice(0, 80), clean(v, 300)]));
}
function registrationId() {
  return `QMC-${new Date().toISOString().slice(0, 10).replace(/-/g, "")}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
}
function message(r: Record<string, unknown>) {
  return [
    `Registration ID: ${r.registrationId}`, `Received: ${r.receivedAt}`,
    `Course: ${r.courseName} / ${r.courseNameZh}`, `Batch: ${r.courseBatch}`,
    `Registrant: ${r.registrantName}`, `WhatsApp: ${r.phone}`, `Email: ${r.email || "-"}`,
    `Participants: ${r.participantCount}`, `Participant Names: ${r.participantNames}`,
    `Fee Per Participant: ${r.courseFeePerParticipant ?? "To be confirmed"}`,
    `Expected Total: ${r.expectedTotal ?? "To be confirmed"}`, `Payment Status: ${r.paymentStatus || "-"}`,
    `Amount Paid: ${r.amountPaid || "-"}`, `PayNow Reference: ${r.paymentReference || "-"}`,
    `Notes: ${r.notes || "-"}`, `Page: ${r.pageUrl || "-"}`,
  ].join("\n");
}

async function dedicated(url: string, record: Record<string, unknown>) {
  const response = await fetch(url, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(record), cache: "no-store" });
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
  endpoint.searchParams.set("payload", JSON.stringify(record));
  const response = await fetch(endpoint.toString(), { method: "GET", cache: "no-store" });
  if (!response.ok) throw new Error(`Lead webhook returned ${response.status}`);
  return "lead_webhook";
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Payload;
    if (clean(body.website, 200)) return NextResponse.json({ ok: true, registrationId: registrationId() });

    const courseId = clean(body.courseId, 100) as keyof typeof CATALOG;
    const course = CATALOG[courseId];
    if (!course) return NextResponse.json({ ok: false, error: "Please select a valid course." }, { status: 400 });

    const participantCount = Math.min(Math.max(Number(body.participantCount) || 1, 1), 20);
    const record = {
      registrationId: registrationId(), receivedAt: new Date().toISOString(), source: "qmfeng.com/course-registration",
      courseId, courseName: course.name, courseNameZh: course.zh, batchId: clean(body.batchId, 100),
      courseBatch: clean(body.courseBatch, 300), courseFeePerParticipant: course.fee,
      expectedTotal: course.fee ? course.fee * participantCount : null,
      registrantName: clean(body.registrantName, 200), phone: clean(body.phone, 100), email: clean(body.email, 200),
      participantCount, participantNames: clean(body.participantNames, 1000), paymentStatus: clean(body.paymentStatus, 100),
      amountPaid: clean(body.amountPaid, 100), paymentReference: clean(body.paymentReference, 200), notes: clean(body.notes, 1000),
      companyName: "QIMING FENG SHUI WISDOM PTE. LTD.", payNowUen: "202313112R",
      pageUrl: clean(body.pageUrl, 1000), referrer: clean(body.referrer, 1000), userAgent: clean(body.userAgent, 500), utm: cleanRecord(body.utm),
    };

    if (!record.registrantName || !record.phone || !record.participantNames || !record.courseBatch) {
      return NextResponse.json({ ok: false, error: "Name, WhatsApp, participant name(s), course and batch are required." }, { status: 400 });
    }

    const courseWebhook = process.env.COURSE_REGISTRATION_WEBHOOK_URL;
    const leadWebhook = process.env.QIMEN_LEADS_WEBHOOK_URL || process.env.APPOINTMENT_WEBHOOK_URL;
    if (!courseWebhook && !leadWebhook) {
      return NextResponse.json({ ok: false, error: "Registration storage is not configured. Please contact us on WhatsApp." }, { status: 500 });
    }

    let destination = "";
    try { destination = courseWebhook ? await dedicated(courseWebhook, record) : await lead(leadWebhook!, record); }
    catch (primary) { if (courseWebhook && leadWebhook) destination = await lead(leadWebhook, record); else throw primary; }

    console.info("[QimenCourseRegistrationStored]", { registrationId: record.registrationId, destination, courseId, batchId: record.batchId });
    return NextResponse.json({ ok: true, registrationId: record.registrationId, receivedAt: record.receivedAt, destination });
  } catch (error) {
    console.error("[QimenCourseRegistrationError]", error);
    return NextResponse.json({ ok: false, error: "Unable to store the registration. Please try again or contact us on WhatsApp." }, { status: 502 });
  }
}
