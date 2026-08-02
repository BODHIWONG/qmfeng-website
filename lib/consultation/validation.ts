import {
  CONSULTATION_TYPES,
  type ConsultationAttribution,
  type ConsultationSubmission,
  type ConsultationType,
} from "@/lib/consultation/types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_ALLOWED_PATTERN = /^[+\d\s().-]+$/;

const LIMITS = {
  name: 120,
  phone: 40,
  email: 254,
  message: 3000,
  attribution: 500,
  idempotencyKey: 100,
} as const;

function cleanText(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function cleanAttribution(value: unknown): ConsultationAttribution {
  const record = value && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : {};

  return {
    pageUrl: cleanText(record.pageUrl, LIMITS.attribution),
    pagePath: cleanText(record.pagePath, 300),
    referrer: cleanText(record.referrer, LIMITS.attribution),
    firstLandingPage: cleanText(record.firstLandingPage, LIMITS.attribution),
    firstReferrer: cleanText(record.firstReferrer, LIMITS.attribution),
    utmSource: cleanText(record.utmSource, 150),
    utmMedium: cleanText(record.utmMedium, 150),
    utmCampaign: cleanText(record.utmCampaign, 250),
    utmTerm: cleanText(record.utmTerm, 250),
    utmContent: cleanText(record.utmContent, 250),
    gclid: cleanText(record.gclid, 300),
    gbraid: cleanText(record.gbraid, 300),
    wbraid: cleanText(record.wbraid, 300),
    sourceOverride: cleanText(record.sourceOverride, 100),
  };
}

export function normalizePhone(value: string) {
  return value.replace(/[^\d+]/g, "").replace(/(?!^)\+/g, "");
}

export function isConsultationType(value: string): value is ConsultationType {
  return CONSULTATION_TYPES.includes(value as ConsultationType);
}

export type ConsultationValidationResult =
  | { success: true; data: ConsultationSubmission }
  | {
      success: false;
      fieldErrors: Partial<
        Record<"name" | "phone" | "email" | "consultationType" | "message" | "consent", string>
      >;
    };

export function validateConsultationSubmission(input: unknown): ConsultationValidationResult {
  const record = input && typeof input === "object" && !Array.isArray(input)
    ? (input as Record<string, unknown>)
    : {};

  const name = cleanText(record.name, LIMITS.name);
  const phone = cleanText(record.phone, LIMITS.phone);
  const email = cleanText(record.email, LIMITS.email).toLowerCase();
  const consultationType = cleanText(record.consultationType, 80);
  const message = cleanText(record.message, LIMITS.message);
  const consent = record.consent === true;
  const website = cleanText(record.website, 300);
  const idempotencyKey = cleanText(record.idempotencyKey, LIMITS.idempotencyKey);
  const normalizedPhone = normalizePhone(phone);

  const fieldErrors: Partial<
    Record<"name" | "phone" | "email" | "consultationType" | "message" | "consent", string>
  > = {};

  if (name.length < 2) fieldErrors.name = "Please enter your name.";
  if (
    !phone ||
    !PHONE_ALLOWED_PATTERN.test(phone) ||
    normalizedPhone.replace(/\D/g, "").length < 7 ||
    normalizedPhone.replace(/\D/g, "").length > 18
  ) {
    fieldErrors.phone = "Please enter a valid phone number, including the country code.";
  }
  if (!email || !EMAIL_PATTERN.test(email)) fieldErrors.email = "Please enter a valid email address.";
  if (!isConsultationType(consultationType)) fieldErrors.consultationType = "Please select a consultation type.";
  if (message.length < 10) fieldErrors.message = "Please provide a little more detail about your enquiry.";
  if (!consent) fieldErrors.consent = "Please confirm the privacy consent.";

  if (Object.keys(fieldErrors).length > 0) return { success: false, fieldErrors };

  return {
    success: true,
    data: {
      name,
      phone: normalizedPhone,
      email,
      consultationType: consultationType as ConsultationType,
      message,
      consent,
      website,
      idempotencyKey,
      attribution: cleanAttribution(record.attribution),
    },
  };
}
