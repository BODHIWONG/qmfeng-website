export const CONSULTATION_TYPES = [
  "Business Advisory",
  "Personal Decision",
  "Relationship",
  "Career",
  "Qi Men Dun Jia",
  "Bazi",
  "Feng Shui",
  "Course",
  "Other",
] as const;

export type ConsultationType = (typeof CONSULTATION_TYPES)[number];

export const LEAD_SOURCES = [
  "Google Ads",
  "Organic Search",
  "Website",
  "Facebook",
  "Instagram",
  "TikTok",
  "LinkedIn",
  "Referral",
  "Walk-in",
  "Existing Client",
  "Other",
] as const;

export type LeadSource = (typeof LEAD_SOURCES)[number];

export type ConsultationAttribution = {
  pageUrl: string;
  pagePath: string;
  referrer: string;
  firstLandingPage: string;
  firstReferrer: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmTerm: string;
  utmContent: string;
  gclid: string;
  gbraid: string;
  wbraid: string;
  sourceOverride: string;
};

export type ConsultationSubmission = {
  name: string;
  phone: string;
  email: string;
  consultationType: ConsultationType;
  message: string;
  consent: boolean;
  website: string;
  idempotencyKey: string;
  attribution: ConsultationAttribution;
};

export type ConsultationSubmissionResponse = {
  ok: boolean;
  reference?: string;
  duplicate?: boolean;
  error?: string;
  fieldErrors?: Partial<Record<"name" | "phone" | "email" | "consultationType" | "message" | "consent", string>>;
};
