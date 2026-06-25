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
      service: String(formData.get("service") || "Enterprise Strategic Diagnostic From S$3996"),
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
              {t("提交咨询", "Send an Enquiry")}
            </p>
            <h2
              className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
            >
              {t("把你现在卡住的问题，先发给我们", "Tell us what is currently blocking you")}
            </h2>
            <p className="max-w-xl text-base leading-8 text-white/75 md:text-lg">
              {t(
                "不需要写得很复杂。简单说明你现在面对的是生意、合作、人事、风水空间，还是个人重大选择。我们会根据情况，通过 WhatsApp 回复你适合从哪一种咨询开始。正式 WhatsApp：+65 8959 3499。",
                "You do not need to write a long explanation. Briefly tell us whether your issue is about business, partnership, people, Feng Shui space or a major personal decision. We will reply on WhatsApp and advise which consultation pathway is most suitable. Official WhatsApp: +65 8959 3499."
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
                  placeholder={t("你的 WhatsApp 号码", "Your WhatsApp number")}
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-semibold text-white/80">{t("你现在最接近哪一种情况？", "Which situation is closest to yours?")}</span>
              <select
                name="service"
                className="w-full border border-white/15 bg-[oklch(0.10_0.02_60)] px-4 py-3 text-white outline-none transition focus:border-[oklch(0.72_0.12_70)]"
                defaultValue="Enterprise Strategic Diagnostic From S$3996"
              >
                <option value="Enterprise Strategic Diagnostic From S$3996">{t("生意或企业卡住，需要企业战略健康诊断 S$3,996 起", "Business is stuck — Enterprise Strategic Diagnostic From S$3,996")}</option>
                <option value="Personal Major Decision Advisory From S$396">{t("事业、关系、搬迁或人生选择，需要个人重大决策咨询 S$396 起", "Career, relationship, relocation or life choice — Personal Major Decision Advisory From S$396")}</option>
                <option value="Feng Shui and Space Alignment">{t("办公室、商铺或住宅气场不稳，需要风水与空间能量调衡", "Office, shop or home feels unsupported — Feng Shui & Space Alignment")}</option>
                <option value="Not Sure Need Assessment">{t("我不确定，请先帮我判断适合哪一种咨询", "Not sure — please advise which consultation fits")}</option>
              </select>
            </label>

            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-semibold text-white/80">{t("你的问题", "Your question")}</span>
              <textarea
                name="message"
                rows={5}
                className="w-full resize-none border border-white/15 bg-white/8 px-4 py-3 text-white outline-none transition focus:border-[oklch(0.72_0.12_70)]"
                placeholder={t("例如：最近生意卡住、合作对象不确定、准备投资/搬迁/签约、家里或办公室感觉不顺，或感情事业需要做决定。", "For example: business is stuck, partner is uncertain, preparing for investment/relocation/signing, home or office feels blocked, or a relationship/career decision needs clarity.")}
              />
            </label>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-6 inline-flex w-full items-center justify-center gap-3 bg-[oklch(0.72_0.12_70)] px-6 py-4 text-sm font-bold uppercase tracking-wider text-[oklch(0.06_0.02_60)] transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "submitting" ? <MessageCircle size={18} className="animate-pulse" /> : <Send size={18} />}
              {status === "submitting" ? t("提交中...", "Submitting...") : t("提交咨询，WhatsApp 回复", "Send Enquiry for WhatsApp Reply")}
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
