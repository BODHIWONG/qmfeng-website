"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { AlertCircle, Loader2, Send } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/language-context";
import { collectBrowserAttribution } from "@/lib/consultation/attribution";
import { type ConsultationSubmissionResponse, type ConsultationType } from "@/lib/consultation/types";
import { validateConsultationSubmission } from "@/lib/consultation/validation";

type FieldName = "name" | "phone" | "email" | "consultationType" | "message" | "consent";
type FieldErrors = Partial<Record<FieldName, string>>;

type FormState = {
  name: string;
  phone: string;
  email: string;
  consultationType: ConsultationType | "";
  message: string;
  consent: boolean;
  website: string;
};

type Props = { defaultConsultationType?: ConsultationType; className?: string };

const DISPLAY_TYPES: ConsultationType[] = [
  "Business Advisory",
  "Chairman & Founder Advisory",
  "Family Business & Succession",
  "Personal Decision",
  "Other",
];

const TYPE_LABELS: Partial<Record<ConsultationType, { zh: string; en: string }>> = {
  "Business Advisory": { zh: "企业战略顾问", en: "Enterprise Strategic Advisory" },
  "Chairman & Founder Advisory": { zh: "董事长与创始人顾问", en: "Chairman & Founder Advisory" },
  "Family Business & Succession": { zh: "家族企业与传承", en: "Family Business & Succession" },
  "Personal Decision": { zh: "决策咨询 S$398 / S$698 / S$998", en: "Decision Consultation S$398 / S$698 / S$998" },
  Other: { zh: "其他", en: "Other" },
};

const QUERY_TYPE_MAP: Record<string, ConsultationType> = {
  business: "Business Advisory",
  "business-advisory": "Business Advisory",
  chairman: "Chairman & Founder Advisory",
  founder: "Chairman & Founder Advisory",
  succession: "Family Business & Succession",
  family: "Family Business & Succession",
  personal: "Personal Decision",
  decision: "Personal Decision",
  other: "Other",
};

function makeIdempotencyKey() {
  if (typeof globalThis.crypto?.randomUUID === "function") return globalThis.crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export default function ConsultationForm({ defaultConsultationType, className = "" }: Props) {
  const { t } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();
  const idempotencyKey = useRef("");
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    consultationType: defaultConsultationType || "",
    message: "",
    consent: false,
    website: "",
  });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    idempotencyKey.current = makeIdempotencyKey();
    const params = new URLSearchParams(window.location.search);
    const requested = (params.get("type") || params.get("consultation") || "").trim().toLowerCase();
    const selected = QUERY_TYPE_MAP[requested];
    if (selected) setForm((current) => ({ ...current, consultationType: selected }));
  }, []);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    setFieldErrors((current) => ({ ...current, [key]: undefined }));
    setFormError("");
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError("");
    setFieldErrors({});
    const payload = {
      ...form,
      idempotencyKey: idempotencyKey.current || makeIdempotencyKey(),
      attribution: collectBrowserAttribution(),
    };
    const validation = validateConsultationSubmission(payload);
    if (!validation.success) {
      setFieldErrors(validation.fieldErrors);
      setFormError(t("请检查标示的项目。", "Please check the highlighted fields."));
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => null)) as ConsultationSubmissionResponse | null;
      if (!response.ok || !result?.ok || !result.reference) throw new Error(result?.error || "SUBMISSION_FAILED");
      sessionStorage.setItem("qimen-contact-success", JSON.stringify({ reference: result.reference, consultationType: form.consultationType, recordedAt: Date.now() }));
      const locale = pathname.startsWith("/zh") ? "zh" : pathname.startsWith("/en") ? "en" : "";
      router.push(`${locale ? `/${locale}` : ""}/contact-success?ref=${encodeURIComponent(result.reference)}`);
    } catch {
      setFormError(t("目前无法提交，请稍后再试或直接通过WhatsApp联系我们。", "We could not submit your enquiry. Please try again or contact us on WhatsApp."));
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass = "w-full border border-white/15 bg-white/8 px-4 py-3.5 text-white outline-none placeholder:text-white/30 focus:border-[#d6ad63]";

  return (
    <form onSubmit={submit} noValidate className={`border border-[#d6ad63]/35 bg-[#0d0b09] p-6 shadow-2xl md:p-8 ${className}`}>
      <input name="website" value={form.website} onChange={(e) => update("website", e.target.value)} tabIndex={-1} autoComplete="off" className="hidden" />

      <div className="mb-7">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d6ad63]">{t("私密咨询申请", "Private Consultation Request")}</p>
        <h2 className="mt-3 text-2xl font-semibold text-[#f4dfb0]">{t("请简要说明您正在面对的决定或情况。", "Tell us briefly about the decision or situation you are facing.")}</h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label><span className="mb-2 block text-sm font-semibold text-white/82">{t("姓名 *", "Name *")}</span><input className={inputClass} value={form.name} onChange={(e) => update("name", e.target.value)} autoComplete="name" /></label>
        <label><span className="mb-2 block text-sm font-semibold text-white/82">{t("电话 / WhatsApp *", "Phone / WhatsApp *")}</span><input className={inputClass} value={form.phone} onChange={(e) => update("phone", e.target.value)} autoComplete="tel" /></label>
      </div>

      <label className="mt-5 block"><span className="mb-2 block text-sm font-semibold text-white/82">Email *</span><input className={inputClass} type="email" value={form.email} onChange={(e) => update("email", e.target.value)} autoComplete="email" /></label>

      <label className="mt-5 block">
        <span className="mb-2 block text-sm font-semibold text-white/82">{t("咨询方向 *", "Advisory Area *")}</span>
        <select className={`${inputClass} bg-[#11100e]`} value={form.consultationType} onChange={(e) => update("consultationType", e.target.value as ConsultationType | "")}>
          <option value="">{t("请选择", "Select")}</option>
          {DISPLAY_TYPES.map((type) => <option key={type} value={type}>{t(TYPE_LABELS[type]?.zh || type, TYPE_LABELS[type]?.en || type)}</option>)}
        </select>
      </label>

      <label className="mt-5 block">
        <span className="mb-2 block text-sm font-semibold text-white/82">{t("您希望讨论的决定或情况 *", "Decision or Situation *")}</span>
        <textarea className={`${inputClass} min-h-36 resize-y`} value={form.message} onChange={(e) => update("message", e.target.value)} placeholder={t("例如：正在考虑新市场、合伙、关键人事、接班安排，或个人重大选择。", "For example: a new market, partnership, key hire, succession issue or major personal decision.")} />
      </label>

      <label className="mt-5 flex items-start gap-3 text-xs leading-6 text-white/55">
        <input type="checkbox" checked={form.consent} onChange={(e) => update("consent", e.target.checked)} className="mt-1" />
        <span>{t("我同意启明遁甲为处理本次咨询而使用我提交的资料。", "I consent to Qimen Strategy using the information submitted to respond to this enquiry.")}</span>
      </label>

      {Object.keys(fieldErrors).length > 0 && <p className="mt-4 text-xs text-red-200">{t("请完整填写必填项目。", "Please complete the required fields.")}</p>}
      {formError && <div className="mt-4 flex gap-2 border border-red-400/30 bg-red-500/10 p-3 text-sm text-red-100"><AlertCircle size={17} className="shrink-0" />{formError}</div>}

      <button disabled={submitting} className="mt-7 inline-flex w-full items-center justify-center gap-3 bg-[#d6ad63] px-6 py-4 text-sm font-bold uppercase tracking-[0.1em] text-black disabled:opacity-60">
        {submitting ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}{t("提交私密咨询", "Submit Private Consultation")}
      </button>
      <p className="mt-4 text-center text-xs text-white/38">{t("所有企业、董事长及家族企业咨询均按实际范围私密评估。", "Enterprise, Chairman and Family Business engagements are scoped privately.")}</p>
    </form>
  );
}
