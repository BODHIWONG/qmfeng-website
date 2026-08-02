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

export type ZohoLeadResult = {
  recordId: string;
  action: "insert" | "update";
  leadSource: LeadSource;
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
}) {
  const { submission, source, reference, existing } = args;
  const attribution = submission.attribution;
  const block = [
    `Website enquiry reference: ${reference}`,
    `Received: ${new Date().toISOString()}`,
    `Consultation type: ${submission.consultationType}`,
    `Lead source: ${source}`,
    `Message: ${submission.message}`,
    `Page: ${attribution.pageUrl || attribution.pagePath || "qmfeng.com"}`,
    `Referrer: ${attribution.referrer || "-"}`,
    `UTM source: ${attribution.utmSource || "-"}`,
    `UTM medium: ${attribution.utmMedium || "-"}`,
    `UTM campaign: ${attribution.utmCampaign || "-"}`,
    `UTM term: ${attribution.utmTerm || "-"}`,
    `UTM content: ${attribution.utmContent || "-"}`,
    `Google click ID present: ${Boolean(attribution.gclid || attribution.gbraid || attribution.wbraid) ? "yes" : "no"}`,
  ].join("\n");

  return existing ? `${existing.trim()}\n\n--- New website enquiry ---\n${block}`.slice(-32000) : block;
}

function exactRecordMatch(records: ZohoRecord[], submission: ConsultationSubmission, fields: FieldMap) {
  const wantedEmail = submission.email.toLowerCase();
  const wantedPhone = normalizePhone(submission.phone);

  return records.find((record) => {
    const recordEmail = fields.email ? text(record[fields.email]).toLowerCase() : "";
    const recordPhone = fields.phone ? normalizePhone(text(record[fields.phone])) : "";
    return Boolean((wantedEmail && recordEmail === wantedEmail) || (wantedPhone && recordPhone === wantedPhone));
  });
}

async function searchExistingRecord(submission: ConsultationSubmission, fields: FieldMap) {
  const config = getZohoRuntimeConfig();
  if (!config) throw new Error("ZOHO_NOT_CONFIGURED");

  const searches: Array<["email" | "phone", string]> = [];
  if (submission.email) searches.push(["email", submission.email]);
  if (submission.phone) searches.push(["phone", submission.phone]);

  for (const [key, value] of searches) {
    const query = new URLSearchParams({ [key]: value, per_page: "20" });
    const response = await zohoCrmRequest<ZohoSearchResponse>(
      `${config.moduleApiName}/search?${query.toString()}`,
      { method: "GET" }
    );
    const records = response.data?.data || [];
    const exact = exactRecordMatch(records, submission, fields);
    if (exact?.id) return exact;
  }

  return null;
}

function buildRecord(args: {
  submission: ConsultationSubmission;
  fields: FieldMap;
  source: LeadSource;
  reference: string;
  existing?: ZohoRecord | null;
}) {
  const { submission, fields, source, reference, existing } = args;
  const staticFields = parseJsonRecord(process.env.ZOHO_CRM_STATIC_FIELDS_JSON);
  const record: Record<string, unknown> = { ...staticFields };

  if (fields.name) record[fields.name] = submission.name;
  if (fields.phone) record[fields.phone] = submission.phone;
  if (fields.email && submission.email) record[fields.email] = submission.email;
  if (fields.consultationType) record[fields.consultationType] = submission.consultationType;
  if (fields.leadSource) record[fields.leadSource] = mapLeadSource(source);
  if (fields.submissionId) record[fields.submissionId] = reference;
  if (fields.pageUrl) record[fields.pageUrl] = submission.attribution.pageUrl || submission.attribution.pagePath;
  if (fields.message) {
    record[fields.message] = description({
      submission,
      source,
      reference,
      existing: existing ? text(existing[fields.message]) : "",
    });
  }

  const layoutId = process.env.ZOHO_CRM_LAYOUT_ID?.trim();
  if (layoutId) record.Layout = { id: layoutId };

  return record;
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
  const existing = await searchExistingRecord(submission, fields);
  const record = buildRecord({ submission, fields, source, reference, existing });

  if (existing?.id) {
    const response = await zohoCrmRequest<ZohoWriteResponse>(
      `${config.moduleApiName}/${existing.id}`,
      {
        method: "PUT",
        body: JSON.stringify({ data: [record] }),
      }
    );
    const result = readWriteResult(response.data);
    return { recordId: result.details!.id!, action: "update", leadSource: source };
  }

  const assignmentRuleId = process.env.ZOHO_CRM_ASSIGNMENT_RULE_ID?.trim();
  const body: Record<string, unknown> = { data: [record] };
  if (assignmentRuleId) body.lar_id = assignmentRuleId;

  const response = await zohoCrmRequest<ZohoWriteResponse>(config.moduleApiName, {
    method: "POST",
    body: JSON.stringify(body),
  });
  const result = readWriteResult(response.data);
  return { recordId: result.details!.id!, action: "insert", leadSource: source };
}
