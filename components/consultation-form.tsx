"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { AlertCircle, Loader2, Send } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/language-context";
import { collectBrowserAttribution } from "@/lib/consultation/attribution";
import {
  CONSULTATION_TYPES,
  type ConsultationSubmissionResponse,
  type ConsultationType,
} from "@/lib/consultation/types";
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

type ConsultationFormProps = {
  defaultConsultationType?: ConsultationType;
  className?: string;
};

const TYPE_LABELS: Record<ConsultationType, { zh: string; en: string }> = {
  "Business Advisory": { zh: "企业战略顾问", en: "Business Advisory" },
  "Personal Decision": { zh: "个人重大决策", en: "Personal Decision" },
  Relationship: { zh: "感情与婚姻", en: "Relationship" },
  Career: { zh: "事业与职业", en: "Career" },
  "Qi Men Dun Jia": { zh: "奇门遁甲咨询", en: "Qi Men Dun Jia" },
  Bazi: { zh: "八字命理分析", en: "Bazi" },
  "Feng Shui": { zh: "风水咨询", en: "Feng Shui" },
  Course: { zh: "课程咨询", en: "Course" },
  Other: { zh: "其他", en: "Other" },
};

const QUERY_TYPE_MAP: Record<string, ConsultationType> = {
  business: "Business Advisory",
  "business-advisory": "Business Advisory",
  personal: "Personal Decision",
  "personal-decision": "Personal Decision",
  relationship: "Relationship",
  career: "Career",
  qimen: "Qi Men Dun Jia",
  "qi-men-dun-jia": "Qi Men Dun Jia",
  bazi: "Bazi",
  "feng-shui": "Feng Shui",
  course: "Course",
  other: "Other",
};

function makeIdempotencyKey() {
  if (typeof globalThis.crypto?.randomUUID === "function") return globalThis.crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export default function ConsultationForm({
  defaultConsultationType,
  className = "",
}: ConsultationFormProps) {
  const { t } = useLanguage();
  const pathname = usePathname();
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
  const [confirmedReference, setConfirmedReference] = useState("");

  useEffect(() => {
    idempotencyKey.current = makeIdempotencyKey();
    const params = new URLSearchParams(window.location.search);
    const requested = (params.get("type") || params.get("consultation") || "").trim();
    const exact = CONSULTATION_TYPES.find((item) => item.toLowerCase() === requested.toLowerCase());
    const mapped = QUERY_TYPE_MAP[requested.toLowerCase()];
    const selected = exact || mapped;
    if (selected) setForm((current) => ({ ...current, consultationType: selected }));
  }, []);

  const inputClass =
    "w-full border bg-white/8 px-4 py-3.5 text-white outline-none transition placeholder:text-white/30 focus:border-[#d6ad63]";
  const borderClass = (field: FieldName) =>
    fieldErrors[field] ? "border-red-400/70" : "border-white/15";

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    if (key in fieldErrors) {
      setFieldErrors((current) => ({ ...current, [key]: undefined }));
    }
    if (formError) setFormError("");
  }

  function translatedFieldErrors(errors: FieldErrors): FieldErrors {
    const translated: FieldErrors = {};
    if (errors.name) translated.name = t("请填写姓名。", "Please enter your name.");
    if (errors.phone) translated.phone = t("请输入有效的电话号码，并包括国家代码。", "Please enter a valid phone number, including the country code.");
    if (errors.email) translated.email = t("请输入有效的电邮地址。", "Please enter a valid email address.");
    if (errors.consultationType) translated.consultationType = t("请选择咨询类型。", "Please select a consultation type.");
    if (errors.message) translated.message = t("请简要说明你的情况，至少填写10个字。", "Please provide a little more detail about your enquiry.");
    if (errors.consent) translated.consent = t("请确认个人资料使用同意。", "Please confirm the privacy consent.");
    return translated;
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
  if (validation.success === false) {
    setFieldErrors(translatedFieldErrors(validation.fieldErrors));
    setFormError(t("请检查标示的项目。", "Please check the highlighted fields."));
    return;
  }

  setSubmitting(true);
  let reference = "";

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = (await response.json().catch(() => null)) as ConsultationSubmissionResponse | null;

    if (!response.ok || !result?.ok || !result.reference) {
      if (result?.fieldErrors) setFieldErrors(translatedFieldErrors(result.fieldErrors));
      throw new Error("SUBMISSION_FAILED");
    }

    reference = result.reference;
  } catch {
    setFormError(
      t(
        "目前无法提交。你的资料仍保留在表格中，请稍后再试，或直接通过WhatsApp联系我们。",
        "We could not submit your enquiry at this moment. Your information remains in the form. Please try again or contact us directly on WhatsApp."
      )
    );
    setSubmitting(false);
    return;
  }

  setConfirmedReference(reference);

  try {
    sessionStorage.setItem(
      "qimen-contact-success",
      JSON.stringify({
        reference,
        consultationType: form.consultationType,
        recordedAt: Date.now(),
      })
    );
  } catch {
    // A confirmed submission must remain successful if browser storage is unavailable.
  }

  const locale = pathname.startsWith("/zh") ? "zh" : pathname.startsWith("/en") ? "en" : "";
  const successPath = locale ? `/${locale}/contact-success` : "/contact-success";
  const successUrl = `${successPath}?ref=${encodeURIComponent(reference)}`;

  try {
    window.location.assign(successUrl);
  } catch {
    setSubmitting(false);
  }
}

  if (confirmedReference) {
  return (
    <div role="status" className={`border border-[#d6ad63]/35 bg-[#0d0b09] p-6 text-white shadow-2xl md:p-8 ${className}`}>
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d6ad63]">
        {t("咨询申请已收到", "Enquiry Received")}
      </p>
      <h2 className="mt-4 text-3xl font-semibold text-[#f4dfb0]">
        {t("谢谢，我们已经收到你的咨询。", "Thank you. We have received your enquiry.")}
      </h2>
      <p className="mt-4 text-sm leading-7 text-white/65">
        {t(
          "即使浏览器未能跳转，你的提交仍然有效。我们会在一个工作日内联系你。",
          "Even if the browser could not redirect, your submission is confirmed. We will contact you within one business day."
        )}
      </p>
      <p className="mt-5 text-sm font-semibold text-[#d6ad63]">
        {t("参考编号", "Reference")}: {confirmedReference}
      </p>
    </div>
  );
}

return (
  <form
      onSubmit={submit}
      noValidate
      className={`border border-[#d6ad63]/35 bg-[#0d0b09] p-6 shadow-2xl md:p-8 ${className}`}
    >
      <input
        name="website"
        value={form.website}
        onChange={(event) => update("website", event.target.value)}
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-white/82">{t("姓名 *", "Name *")}</span>
          <input
            name="name"
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            autoComplete="name"
            maxLength={120}
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
            className={`${inputClass} ${borderClass("name")}`}
            placeholder={t("你的姓名", "Your name")}
          />
          {fieldErrors.name && <p id="contact-name-error" className="mt-2 text-xs text-red-200">{fieldErrors.name}</p>}
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-white/82">{t("电话 / WhatsApp *", "Phone / WhatsApp *")}</span>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={(event) => update("phone", event.target.value)}
            autoComplete="tel"
            inputMode="tel"
            maxLength={40}
            aria-invalid={Boolean(fieldErrors.phone)}
            aria-describedby={fieldErrors.phone ? "contact-phone-error" : undefined}
            className={`${inputClass} ${borderClass("phone")}`}
            placeholder={t("例如：+65 8959 3499", "e.g. +65 8959 3499")}
          />
          {fieldErrors.phone && <p id="contact-phone-error" className="mt-2 text-xs text-red-200">{fieldErrors.phone}</p>}
        </label>
      </div>

      <label className="mt-5 block">
        <span className="mb-2 block text-sm font-semibold text-white/82">Email *</span>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={(event) => update("email", event.target.value)}
          autoComplete="email"
          inputMode="email"
          maxLength={254}
          aria-invalid={Boolean(fieldErrors.email)}
          aria-describedby={fieldErrors.email ? "contact-email-error" : undefined}
          className={`${inputClass} ${borderClass("email")}`}
          placeholder="name@example.com"
        />
        {fieldErrors.email && <p id="contact-email-error" className="mt-2 text-xs text-red-200">{fieldErrors.email}</p>}
      </label>

      <label className="mt-5 block">
        <span className="mb-2 block text-sm font-semibold text-white/82">{t("咨询类型 *", "Consultation Type *")}</span>
        <select
          name="consultationType"
          value={form.consultationType}
          onChange={(event) => update("consultationType", event.target.value as ConsultationType | "")}
          aria-invalid={Boolean(fieldErrors.consultationType)}
          aria-describedby={fieldErrors.consultationType ? "contact-type-error" : undefined}
          className={`${inputClass} ${borderClass("consultationType")} bg-[#11100e]`}
        >
          <option value="">{t("请选择", "Select")}</option>
          {CONSULTATION_TYPES.map((type) => (
            <option key={type} value={type}>
              {t(TYPE_LABELS[type].zh, TYPE_LABELS[type].en)}
            </option>
          ))}
        </select>
        {fieldErrors.consultationType && <p id="contact-type-error" className="mt-2 text-xs text-red-200">{fieldErrors.consultationType}</p>}
      </label>

      <label className="mt-5 block">
        <span className="mb-2 block text-sm font-semibold text-white/82">{t("简要说明 *", "Message *")}</span>
        <textarea
          name="message"
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
          rows={6}
          maxLength={3000}
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? "contact-message-error" : undefined}
          className={`${inputClass} ${borderClass("message")} resize-y`}
          placeholder={t(
            "请简要说明目前的情况，以及希望进一步了解的事项。首次咨询不需要填写出生资料。",
            "Briefly describe your current situation and what you would like to understand. Birth details are not required for the first enquiry."
          )}
        />
        <div className="mt-2 flex justify-between gap-4 text-xs text-white/38">
          <span>{t("首次咨询只收集必要资料。", "Only essential information is collected at this stage.")}</span>
          <span>{form.message.length}/3000</span>
        </div>
        {fieldErrors.message && <p id="contact-message-error" className="mt-2 text-xs text-red-200">{fieldErrors.message}</p>}
      </label>

      <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-white/62">
        <input
          name="consent"
          type="checkbox"
          checked={form.consent}
          onChange={(event) => update("consent", event.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 accent-[#d6ad63]"
          aria-invalid={Boolean(fieldErrors.consent)}
        />
        <span>
          {t(
            "我同意启明遁甲为处理本次咨询而收集和使用以上资料，并已阅读",
            "I consent to Qimen Strategy collecting and using the above information to process this enquiry, and I have read the"
          )}{" "}
          <Link href="/privacy" className="text-[#d6ad63] underline underline-offset-4">
            {t("隐私政策", "Privacy Policy")}
          </Link>
          。
        </span>
      </label>
      {fieldErrors.consent && <p className="mt-2 text-xs text-red-200">{fieldErrors.consent}</p>}

      {form.consultationType === "Course" && (
        <p className="mt-5 border-l-2 border-[#d6ad63] pl-4 text-sm leading-6 text-white/58">
          {t("需要直接选择课程班次和报名？", "Ready to select a course batch and register?")}{" "}
          <Link href="/course-registration" className="font-semibold text-[#d6ad63] underline underline-offset-4">
            {t("进入课程报名页面", "Go to Course Registration")}
          </Link>
        </p>
      )}

      {formError && (
        <div role="alert" className="mt-5 flex items-start gap-3 border border-red-400/35 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
          <AlertCircle size={18} className="mt-0.5 shrink-0" />
          <div>
            <p>{formError}</p>
            <a
              href="https://wa.me/6589593499?text=Hello%20Qimen%20Strategy%2C%20I%20am%20unable%20to%20submit%20the%20website%20enquiry%20form.%20My%20enquiry%20is%3A"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block font-semibold text-[#f4dfb0] underline underline-offset-4"
            >
              {t("改用WhatsApp联系", "Contact us on WhatsApp")}
            </a>
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 inline-flex w-full items-center justify-center gap-3 bg-[#d6ad63] px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black transition hover:bg-[#f4dfb0] disabled:cursor-not-allowed disabled:opacity-65"
      >
        {submitting ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
        {submitting ? t("正在安全提交…", "Submitting securely…") : t("提交咨询", "Submit Enquiry")}
      </button>
    </form>
  );
}
