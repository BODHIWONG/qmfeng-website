import "server-only";

import type { ConsultationSubmission, LeadSource } from "@/lib/consultation/types";
import { deriveLeadSource } from "@/lib/consultation/attribution";
import { normalizePhone } from "@/lib/consultation/validation";
import { getZohoRuntimeConfig, zohoCrmRequest } from "@/lib/zoho/client";

type FieldMap = {
  name: string;
  phone: string;
  email: string;
  message: string;
  leadSource: string;
  consultationType: string;
  submissionId: string;
  pageUrl: string;
};

type ZohoRecord = Record<string, unknown> & { id?: string };
type ZohoSearchResponse = { data?: ZohoRecord[] };
type ZohoWriteResponse = {
  data?: Array<{
    status?: string;
    code?: string;
    message?: string;
    action?: string;
    details?: { id?: string };
  }>;
};

type IdentityResolution = {
  existing: ZohoRecord | null;
  conflict: boolean;
};

export type ZohoLeadResult = {
  recordId: string;
  action: "insert" | "update";
  leadSource: LeadSource;
  identityConflict: boolean;
};

const DEFAULT_FIELD_MAP: FieldMap = {
  name: "Last_Name",
  phone: "Phone",
  email: "Email",
  message: "Description",
  leadSource: "Lead_Source",
  consultationType: "",
  submissionId: "",
  pageUrl: "",
};

function parseJsonRecord(value: string | undefined): Record<string, unknown> {
  if (!value?.trim()) return {};
  try {
    const parsed = JSON.parse(value);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed)
      ? (parsed as Record<string, unknown>)
      : {};
  } catch {
    throw new Error("ZOHO_INVALID_JSON_CONFIGURATION");
  }
}

function parseTriggerList(value: string | undefined) {
  if (!value?.trim()) return undefined;
  try {
    const parsed = JSON.parse(value);
    if (!Array.isArray(parsed) || !parsed.every((item) => typeof item === "string")) {
      throw new Error("invalid");
    }
    return parsed.map((item) => item.trim()).filter(Boolean);
  } catch {
    throw new Error("ZOHO_INVALID_TRIGGER_CONFIGURATION");
  }
}

function getFieldMap(): FieldMap {
  const configured = parseJsonRecord(process.env.ZOHO_CRM_FIELD_MAP_JSON);
  return {
    name: typeof configured.name === "string" ? configured.name : DEFAULT_FIELD_MAP.name,
    phone: typeof configured.phone === "string" ? configured.phone : DEFAULT_FIELD_MAP.phone,
    email: typeof configured.email === "string" ? configured.email : DEFAULT_FIELD_MAP.email,
    message: typeof configured.message === "string" ? configured.message : DEFAULT_FIELD_MAP.message,
    leadSource:
      typeof configured.leadSource === "string" ? configured.leadSource : DEFAULT_FIELD_MAP.leadSource,
    consultationType:
      typeof configured.consultationType === "string"
        ? configured.consultationType
        : DEFAULT_FIELD_MAP.consultationType,
    submissionId:
      typeof configured.submissionId === "string" ? configured.submissionId : DEFAULT_FIELD_MAP.submissionId,
    pageUrl: typeof configured.pageUrl === "string" ? configured.pageUrl : DEFAULT_FIELD_MAP.pageUrl,
  };
}

function mapLeadSource(source: LeadSource) {
  const configured = parseJsonRecord(process.env.ZOHO_CRM_LEAD_SOURCE_MAP_JSON);
  const mapped = configured[source];
  return typeof mapped === "string" && mapped.trim() ? mapped.trim() : source;
}

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function description(args: {
  submission: ConsultationSubmission;
  source: LeadSource;
  reference: string;
  existing?: string;
  identityConflict: boolean;
}) {
  const { submission, source, reference, existing, identityConflict } = args;
  const attribution = submission.attribution;
  const block = [
    `Website enquiry reference: ${reference}`,
    `Received: ${new Date().toISOString()}`,
    `Consultation type: ${submission.consultationType}`,
    `Lead source: ${source}`,
    identityConflict
      ? "CRM identity review: Manual review required because email and phone did not resolve to one unambiguous CRM record."
      : "",
    `Message: ${submission.message}`,
    `Current page: ${attribution.pageUrl || attribution.pagePath || "qmfeng.com"}`,
    `Current referrer: ${attribution.referrer || "-"}`,
    `First landing page: ${attribution.firstLandingPage || "-"}`,
    `First referrer: ${attribution.firstReferrer || "-"}`,
    `UTM source: ${attribution.utmSource || "-"}`,
    `UTM medium: ${attribution.utmMedium || "-"}`,
    `UTM campaign: ${attribution.utmCampaign || "-"}`,
    `UTM term: ${attribution.utmTerm || "-"}`,
    `UTM content: ${attribution.utmContent || "-"}`,
    `GCLID: ${attribution.gclid || "-"}`,
    `GBRAID: ${attribution.gbraid || "-"}`,
    `WBRAID: ${attribution.wbraid || "-"}`,
  ].filter(Boolean).join("\n");

  return existing ? `${existing.trim()}\n\n--- New website enquiry ---\n${block}`.slice(-32000) : block;
}

function uniqueRecords(records: ZohoRecord[]) {
  const byId = new Map<string, ZohoRecord>();
  for (const record of records) {
    if (record.id) byId.set(record.id, record);
  }
  return [...byId.values()];
}

function exactMatches(
  records: ZohoRecord[],
  kind: "email" | "phone",
  value: string,
  fields: FieldMap
) {
  const wantedEmail = value.toLowerCase();
  const wantedPhone = normalizePhone(value);

  return uniqueRecords(records.filter((record) => {
    if (kind === "email") {
      return Boolean(fields.email && text(record[fields.email]).toLowerCase() === wantedEmail);
    }
    return Boolean(fields.phone && normalizePhone(text(record[fields.phone])) === wantedPhone);
  }));
}

async function searchExactRecords(
  kind: "email" | "phone",
  value: string,
  fields: FieldMap
) {
  const config = getZohoRuntimeConfig();
  if (!config) throw new Error("ZOHO_NOT_CONFIGURED");

  const query = new URLSearchParams({ [kind]: value, per_page: "20" });
  const response = await zohoCrmRequest<ZohoSearchResponse>(
    `${config.moduleApiName}/search?${query.toString()}`,
    { method: "GET" }
  );
  return exactMatches(response.data?.data || [], kind, value, fields);
}

async function resolveIdentity(
  submission: ConsultationSubmission,
  fields: FieldMap
): Promise<IdentityResolution> {
  const [emailMatches, phoneMatches] = await Promise.all([
    searchExactRecords("email", submission.email, fields),
    searchExactRecords("phone", submission.phone, fields),
  ]);

  if (emailMatches.length > 1 || phoneMatches.length > 1) {
    return { existing: null, conflict: true };
  }

  const emailRecord = emailMatches[0] || null;
  const phoneRecord = phoneMatches[0] || null;

  if (emailRecord && phoneRecord) {
    return emailRecord.id === phoneRecord.id
      ? { existing: emailRecord, conflict: false }
      : { existing: null, conflict: true };
  }

  if (emailRecord) {
    const existingPhone = fields.phone ? normalizePhone(text(emailRecord[fields.phone])) : "";
    const submittedPhone = normalizePhone(submission.phone);
    return existingPhone && existingPhone !== submittedPhone
      ? { existing: null, conflict: true }
      : { existing: emailRecord, conflict: false };
  }

  if (phoneRecord) {
    const existingEmail = fields.email ? text(phoneRecord[fields.email]).toLowerCase() : "";
    const submittedEmail = submission.email.toLowerCase();
    return existingEmail && existingEmail !== submittedEmail
      ? { existing: null, conflict: true }
      : { existing: phoneRecord, conflict: false };
  }

  return { existing: null, conflict: false };
}

function buildRecord(args: {
  submission: ConsultationSubmission;
  fields: FieldMap;
  source: LeadSource;
  reference: string;
  existing?: ZohoRecord | null;
  identityConflict: boolean;
}) {
  const { submission, fields, source, reference, existing, identityConflict } = args;
  const isInsert = !existing;
  const record: Record<string, unknown> = isInsert
    ? { ...parseJsonRecord(process.env.ZOHO_CRM_STATIC_FIELDS_JSON) }
    : {};

  if (isInsert && fields.name) record[fields.name] = submission.name;
  if (isInsert && fields.phone) record[fields.phone] = submission.phone;
  if (isInsert && fields.email) record[fields.email] = submission.email;
  if (isInsert && fields.leadSource) record[fields.leadSource] = mapLeadSource(source);
  if (fields.consultationType) record[fields.consultationType] = submission.consultationType;
  if (fields.submissionId) record[fields.submissionId] = reference;
  if (fields.pageUrl) record[fields.pageUrl] = submission.attribution.pageUrl || submission.attribution.pagePath;
  if (fields.message) {
    record[fields.message] = description({
      submission,
      source,
      reference,
      existing: existing ? text(existing[fields.message]) : "",
      identityConflict,
    });
  }

  const layoutId = process.env.ZOHO_CRM_LAYOUT_ID?.trim();
  if (isInsert && layoutId) record.Layout = { id: layoutId };

  return record;
}

function writeBody(record: Record<string, unknown>) {
  const body: Record<string, unknown> = { data: [record] };
  const trigger = parseTriggerList(process.env.ZOHO_CRM_TRIGGERS_JSON);
  if (trigger) body.trigger = trigger;
  return body;
}

function readWriteResult(payload: ZohoWriteResponse | null) {
  const item = payload?.data?.[0];
  if (!item || item.status !== "success" || !item.details?.id) {
    throw new Error(`ZOHO_WRITE_REJECTED:${item?.code || item?.message || "UNKNOWN"}`);
  }
  return item;
}

export async function submitConsultationToZoho(
  submission: ConsultationSubmission,
  reference: string
): Promise<ZohoLeadResult> {
  const config = getZohoRuntimeConfig();
  if (!config) throw new Error("ZOHO_NOT_CONFIGURED");

  const fields = getFieldMap();
  const source = deriveLeadSource(submission.attribution);
  const identity = await resolveIdentity(submission, fields);
  const record = buildRecord({
    submission,
    fields,
    source,
    reference,
    existing: identity.existing,
    identityConflict: identity.conflict,
  });

  if (identity.existing?.id) {
    const response = await zohoCrmRequest<ZohoWriteResponse>(
      `${config.moduleApiName}/${identity.existing.id}`,
      {
        method: "PUT",
        body: JSON.stringify(writeBody(record)),
      }
    );
    const result = readWriteResult(response.data);
    return {
      recordId: result.details!.id!,
      action: "update",
      leadSource: source,
      identityConflict: false,
    };
  }

  const body = writeBody(record);
  const assignmentRuleId = process.env.ZOHO_CRM_ASSIGNMENT_RULE_ID?.trim();
  if (assignmentRuleId) body.lar_id = assignmentRuleId;

  const response = await zohoCrmRequest<ZohoWriteResponse>(config.moduleApiName, {
    method: "POST",
    body: JSON.stringify(body),
  });
  const result = readWriteResult(response.data);
  return {
    recordId: result.details!.id!,
    action: "insert",
    leadSource: source,
    identityConflict: identity.conflict,
  };
}
