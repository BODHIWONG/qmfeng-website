import { NextRequest, NextResponse } from "next/server";

type CourseRegistrationPayload = {
  registrantName?: string;
  phone?: string;
  email?: string;
  participantCount?: number | string;
  participantNames?: string;
  courseDate?: string;
  amountPaid?: string;
  paymentReference?: string;
  paymentStatus?: string;
  notes?: string;
  pageUrl?: string;
  referrer?: string;
  userAgent?: string;
  utm?: Record<string, string>;
};

function clean(value: unknown, maxLength = 2000) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function cleanRecord(value: unknown) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};

  return Object.fromEntries(
    Object.entries(value as Record<string, unknown>).map(([key, entry]) => [
      key.slice(0, 80),
      clean(entry, 300),
    ]),
  );
}

function createRegistrationId() {
  const datePart = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const randomPart = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `QMC-${datePart}-${randomPart}`;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as CourseRegistrationPayload;
    const participantCount = Math.min(Math.max(Number(body.participantCount) || 1, 1), 20);

    const registration = {
      registrationId: createRegistrationId(),
      receivedAt: new Date().toISOString(),
      source: "qmfeng.com/course-registration",
      courseName: "Qi Men Dun Jia Foundation Course",
      courseFeePerParticipant: 990,
      registrantName: clean(body.registrantName, 200),
      phone: clean(body.phone, 100),
      email: clean(body.email, 200),
      participantCount,
      participantNames: clean(body.participantNames, 1000),
      courseDate: clean(body.courseDate, 200),
      amountPaid: clean(body.amountPaid, 100),
      paymentReference: clean(body.paymentReference, 200),
      paymentStatus: clean(body.paymentStatus, 100),
      notes: clean(body.notes, 2000),
      companyName: "QIMING FENG SHUI WISDOM PTE. LTD.",
      payNowUen: "202313112R",
      pageUrl: clean(body.pageUrl, 1000),
      referrer: clean(body.referrer, 1000),
      userAgent: clean(body.userAgent, 1000),
      utm: cleanRecord(body.utm),
    };

    if (!registration.registrantName || !registration.phone || !registration.participantNames || !registration.courseDate) {
      return NextResponse.json(
        {
          ok: false,
          error: "Registrant name, WhatsApp / phone, participant name(s), and course date are required.",
        },
        { status: 400 },
      );
    }

    const webhookUrl = process.env.COURSE_REGISTRATION_WEBHOOK_URL || process.env.APPOINTMENT_WEBHOOK_URL;

    if (webhookUrl) {
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(registration),
        cache: "no-store",
      });

      if (!webhookResponse.ok) {
        console.error("[QimenCourseRegistrationWebhookFailed]", {
          registrationId: registration.registrationId,
          status: webhookResponse.status,
        });
      }
    }

    console.info("[QimenCourseRegistration]", JSON.stringify(registration));

    return NextResponse.json({
      ok: true,
      registrationId: registration.registrationId,
      receivedAt: registration.receivedAt,
      webhookConfigured: Boolean(webhookUrl),
    });
  } catch (error) {
    console.error("[QimenCourseRegistrationError]", error);

    return NextResponse.json(
      { ok: false, error: "Unable to submit the course registration. Please try again." },
      { status: 500 },
    );
  }
}
