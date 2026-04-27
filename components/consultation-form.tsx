"use client";

import { useLanguage } from "@/contexts/language-context";

const FORM_ENDPOINT = "https://formsubmit.co/info@qmfeng.com";
const THANK_YOU_URL = "https://www.qmfeng.com/thank-you";
const WA_LINK = "https://wa.me/6589418791";

const consultationTypes = [
  { zh: "事业财富", en: "Career & Wealth" },
  { zh: "情感疗愈", en: "Relationship Healing" },
  { zh: "战略决策", en: "Strategic Decision" },
  { zh: "空间能量净化", en: "Space Energy Purification" },
  { zh: "八字命理", en: "Bazi Analysis" },
  { zh: "其他", en: "Others" },
];

export default function ConsultationForm() {
  const { lang, t } = useLanguage();

  return (
    <section className="border border-[oklch(0.24_0.025_60)] bg-[oklch(0.12_0.018_60)] p-6 md:p-8">
      <div className="mb-6 max-w-2xl">
        <p
          className="mb-3 text-[0.62rem] font-bold uppercase tracking-[0.24em] text-[oklch(0.62_0.09_68)]"
          style={{ fontFamily: "var(--font-lato), sans-serif" }}
        >
          {t("轻量预约", "Quick Consultation Request")}
        </p>

        <h2
          className="mb-3 text-2xl font-bold leading-tight text-[oklch(0.95_0.01_75)] md:text-3xl"
          style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
        >
          {t("先留下问题，我们协助判断", "Leave Your Question for Initial Review")}
        </h2>

        <p
          className="text-sm leading-7 text-[oklch(0.66_0.018_70)]"
          style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}
        >
          {t(
            "不方便马上 WhatsApp 的客户，可以先提交姓名、联系方式与咨询方向。我们会根据您的问题，协助判断适合哪一种咨询。",
            "If you are not ready to message on WhatsApp immediately, leave your name, contact and consultation direction. We will review the situation and advise the suitable consultation path."
          )}
        </p>
      </div>

      <form action={FORM_ENDPOINT} method="POST" className="grid gap-4 md:grid-cols-2">
        <input type="hidden" name="_subject" value="New consultation lead from qmfeng.com" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value={THANK_YOU_URL} />
        <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

        <label className="block">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[oklch(0.55_0.02_70)]">
            {t("姓名", "Name")}
          </span>
          <input
            required
            name="name"
            className="w-full border border-[oklch(0.25_0.02_60)] bg-black/25 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-[oklch(0.38_0.015_70)] focus:border-[oklch(0.62_0.09_68)]"
            placeholder={t("请输入姓名", "Your name")}
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[oklch(0.55_0.02_70)]">
            {t("WhatsApp / 电话", "WhatsApp / Phone")}
          </span>
          <input
            required
            name="contact"
            className="w-full border border-[oklch(0.25_0.02_60)] bg-black/25 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-[oklch(0.38_0.015_70)] focus:border-[oklch(0.62_0.09_68)]"
            placeholder={t("例如 +65 9123 4567", "e.g. +65 9123 4567")}
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[oklch(0.55_0.02_70)]">
            {t("咨询方向", "Consultation Type")}
          </span>
          <select
            required
            name="consultation_type"
            defaultValue=""
            className="w-full border border-[oklch(0.25_0.02_60)] bg-black/25 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[oklch(0.62_0.09_68)]"
          >
            <option value="" disabled>
              {t("请选择方向", "Select a direction")}
            </option>
            {consultationTypes.map((item) => (
              <option key={item.en} value={item.en} className="bg-[oklch(0.12_0.018_60)]">
                {lang === "zh" ? item.zh : item.en}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[oklch(0.55_0.02_70)]">
            {t("方便联系时间", "Preferred Contact Time")}
          </span>
          <input
            name="preferred_contact_time"
            className="w-full border border-[oklch(0.25_0.02_60)] bg-black/25 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-[oklch(0.38_0.015_70)] focus:border-[oklch(0.62_0.09_68)]"
            placeholder={t("例如 今天晚上 / 明天下午", "e.g. Tonight / Tomorrow afternoon")}
          />
        </label>

        <label className="block md:col-span-2">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[oklch(0.55_0.02_70)]">
            {t("简单描述", "Brief Situation")}
          </span>
          <textarea
            required
            name="brief_situation"
            rows={4}
            className="w-full resize-none border border-[oklch(0.25_0.02_60)] bg-black/25 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-[oklch(0.38_0.015_70)] focus:border-[oklch(0.62_0.09_68)]"
            placeholder={t("简单写下目前最困扰您的问题", "Briefly describe the main issue you are facing")}
          />
        </label>

        <div className="flex flex-col gap-3 md:col-span-2 md:flex-row md:items-center">
          <button
            type="submit"
            className="inline-flex justify-center bg-[oklch(0.72_0.12_70)] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[oklch(0.08_0.02_60)] transition-opacity hover:opacity-90"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            {t("提交初步咨询", "Submit Consultation Request")}
          </button>

          <a
            href={`${WA_LINK}?text=${encodeURIComponent(
              t("你好启明大师，我想先判断我的问题方向。", "Hello Master Qiming, I would like to identify which consultation path fits my situation.")
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-[oklch(0.62_0.09_68)] underline-offset-4 hover:underline"
          >
            {t("也可以直接 WhatsApp 咨询", "Or message directly on WhatsApp")}
          </a>
        </div>
      </form>
    </section>
  );
}
