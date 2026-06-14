"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, CheckCircle2, AlertCircle } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

type Status = "idle" | "submitting" | "success" | "error";

export default function LeadCaptureForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      whatsapp: String(formData.get("whatsapp") || "").trim(),
      service: String(formData.get("service") || "First-Time Qimen Strategy Consultation S$168"),
      message: String(formData.get("message") || "").trim(),
      source: "Qimen Website Lead Form",
      website: String(formData.get("website") || "").trim(),
    };

    if (!payload.name || !payload.whatsapp) {
      setStatus("error");
      setError(t("请填写姓名和 WhatsApp 号码。", "Please enter your name and WhatsApp number."));
      return;
    }

    try {
      const response = await fetch("/api/qimen-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.ok) {
        throw new Error(result?.error || "Submission failed");
      }

      form.reset();
      setStatus("success");
    } catch (submissionError) {
      setStatus("error");
      setError(
        t(
          "提交失败。请直接通过 WhatsApp 联系我们。",
          "Submission failed. Please contact us directly via WhatsApp."
        )
      );
    }
  }

  return (
    <section id="enquiry" className="relative overflow-hidden bg-[oklch(0.12_0.02_60)] py-20 md:py-28">
      <div className="absolute inset-0 opacity-25" style={{ background: "radial-gradient(circle at top, oklch(0.72 0.12 70 / 0.16), transparent 48%)" }} />
      <div className="container relative">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[oklch(0.72_0.12_70)]">
              {t("提交咨询", "Submit an Enquiry")}
            </p>
            <h2
              className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
            >
              {t("先从一次完整咨询开始", "Start with one complete consultation")}
            </h2>
            <p className="max-w-xl text-base leading-8 text-white/75 md:text-lg">
              {t(
                "首次客户可选择 S$168 奇门决策咨询。填写你的姓名、WhatsApp 与当前问题，我们会通过 WhatsApp 与你确认预约。",
                "First-time clients may start with the S$168 Qimen Strategy consultation. Leave your name, WhatsApp number and current question, and we will confirm your appointment via WhatsApp."
              )}
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border border-[oklch(0.72_0.12_70_/_0.35)] bg-[oklch(0.08_0.02_60_/_0.88)] p-6 shadow-2xl md:p-8"
          >
            <input name="website" type="text" tabIndex={-1} autoComplete="off" className="hidden" />

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-white/80">{t("姓名", "Name")}</span>
                <input
                  name="name"
                  required
                  className="w-full border border-white/15 bg-white/8 px-4 py-3 text-white outline-none transition focus:border-[oklch(0.72_0.12_70)]"
                  placeholder={t("你的姓名", "Your name")}
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-white/80">WhatsApp</span>
                <input
                  name="whatsapp"
                  required
                  className="w-full border border-white/15 bg-white/8 px-4 py-3 text-white outline-none transition focus:border-[oklch(0.72_0.12_70)]"
                  placeholder="+65 8941 8791"
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-semibold text-white/80">{t("咨询项目", "Service")}</span>
              <select
                name="service"
                className="w-full border border-white/15 bg-[oklch(0.10_0.02_60)] px-4 py-3 text-white outline-none transition focus:border-[oklch(0.72_0.12_70)]"
                defaultValue="First-Time Qimen Strategy Consultation S$168"
              >
                <option value="First-Time Qimen Strategy Consultation S$168">{t("首次奇门决策咨询 S$168", "First-Time Qimen Strategy Consultation S$168")}</option>
                <option value="Qimen Strategy Consultation">{t("启明遁甲 / Qimen Strategy", "Qimen Strategy Consultation")}</option>
                <option value="Feng Shui Alignment">{t("风水布局 / Feng Shui Alignment", "Feng Shui Alignment")}</option>
                <option value="Space Clearing Energy Reset">{t("空间净化 / Energy Reset", "Space Clearing · Energy Reset")}</option>
                <option value="Other Consultation">{t("其他咨询", "Other Consultation")}</option>
              </select>
            </label>

            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-semibold text-white/80">{t("你的问题", "Your question")}</span>
              <textarea
                name="message"
                rows={5}
                className="w-full resize-none border border-white/15 bg-white/8 px-4 py-3 text-white outline-none transition focus:border-[oklch(0.72_0.12_70)]"
                placeholder={t("请简单说明你当前面对的决定、事业、合作、空间或人生问题。", "Briefly describe the decision, business, partnership, space or life issue you are facing.")}
              />
            </label>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-6 inline-flex w-full items-center justify-center gap-3 bg-[oklch(0.72_0.12_70)] px-6 py-4 text-sm font-bold uppercase tracking-wider text-[oklch(0.06_0.02_60)] transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "submitting" ? <MessageCircle size={18} className="animate-pulse" /> : <Send size={18} />}
              {status === "submitting" ? t("提交中...", "Submitting...") : t("提交咨询", "Submit Enquiry")}
            </button>

            {status === "success" && (
              <div className="mt-4 flex items-start gap-3 border border-emerald-400/30 bg-emerald-400/10 p-4 text-sm leading-6 text-emerald-100">
                <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0" />
                {t(
                  "谢谢。我们已收到你的咨询，会尽快通过 WhatsApp 联系你。",
                  "Thank you. We have received your request and will contact you via WhatsApp shortly."
                )}
              </div>
            )}

            {status === "error" && (
              <div className="mt-4 flex items-start gap-3 border border-red-400/30 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
                <AlertCircle size={18} className="mt-0.5 flex-shrink-0" />
                {error}
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
