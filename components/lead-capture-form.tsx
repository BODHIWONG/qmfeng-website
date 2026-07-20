"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, MessageCircle, Send } from "lucide-react";
import Link from "next/link";
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
    const consent = formData.get("consent") === "on";

    const payload = {
      name: String(formData.get("name") || "").trim(),
      whatsapp: String(formData.get("whatsapp") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      clientType: String(formData.get("clientType") || "").trim(),
      industry: String(formData.get("industry") || "").trim(),
      teamSize: String(formData.get("teamSize") || "").trim(),
      service: String(formData.get("service") || "").trim(),
      deadline: String(formData.get("deadline") || "").trim(),
      supportType: String(formData.get("supportType") || "").trim(),
      meetingMode: String(formData.get("meetingMode") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      source: `Qimen Website Advisory Application · ${typeof window !== "undefined" ? window.location.pathname : "/"}`,
      website: String(formData.get("website") || "").trim(),
      consent,
    };

    if (!payload.name || !payload.whatsapp || !payload.clientType || !payload.service || !payload.message) {
      setStatus("error");
      setError(t("请填写所有必填项目。", "Please complete all required fields."));
      return;
    }

    if (!consent) {
      setStatus("error");
      setError(t("请确认个人资料使用同意。", "Please confirm the personal-data consent."));
      return;
    }

    try {
      const response = await fetch("/api/qimen-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);
      if (!response.ok || !result?.ok) throw new Error(result?.error || "Submission failed");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setError(
        t(
          "提交失败。请直接通过 WhatsApp +65 8959 3499 联系我们。",
          "Submission failed. Please contact us directly via WhatsApp at +65 8959 3499."
        )
      );
    }
  }

  const inputClass =
    "w-full border border-white/15 bg-white/8 px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:border-[oklch(0.72_0.12_70)]";
  const selectClass =
    "w-full border border-white/15 bg-[oklch(0.10_0.02_60)] px-4 py-3 text-white outline-none transition focus:border-[oklch(0.72_0.12_70)]";

  return (
    <section id="enquiry" className="relative overflow-hidden bg-[oklch(0.12_0.02_60)] py-20 md:py-28">
      <div className="absolute inset-0 opacity-25" style={{ background: "radial-gradient(circle at top, oklch(0.72 0.12 70 / 0.16), transparent 48%)" }} />
      <div className="container relative">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[oklch(0.72_0.12_70)]">
              {t("顾问申请", "Advisory Application")}
            </p>
            <h2 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
              {t("先说明你的真实处境，我们再判断适合哪一种支持。", "Share the real situation first. We will assess which advisory pathway fits.")}
            </h2>
            <p className="max-w-xl text-base leading-8 text-white/72 md:text-lg">
              {t(
                "此表格主要用于创业老板、高管与个人重大决策咨询的初步筛选。请简要说明你的身份、行业、当前最想解决的问题与决策时间。课程报名请直接进入课程报名页面。",
                "This form is for founders, executives and individuals applying for strategic decision support. Briefly share your role, industry, most important issue and decision deadline. Course learners should use the dedicated course registration page."
              )}
            </p>
            <div className="mt-7 space-y-3 border-l-2 border-[#d6ad63] pl-5 text-sm leading-7 text-white/62">
              <p>{t("企业主：请填写行业、团队规模与当前经营卡点。", "Founders: include industry, team size and the current business bottleneck.")}</p>
              <p>{t("高管：请填写当前职位、考虑中的选项与决定期限。", "Executives: include current role, available options and decision deadline.")}</p>
              <p>{t("个人：请围绕一个最重要的决定说明背景。", "Individuals: focus the application on one most important decision.")}</p>
            </div>
            <Link href="/course-registration?course=qimen-foundation&batch=2026-09-19" className="mt-7 inline-flex border border-[#d6ad63]/60 px-5 py-3 text-sm font-semibold text-[#f4dfb0] hover:bg-[#d6ad63]/10">
              {t("奇门课程报名 →", "Qi Men Course Registration →")}
            </Link>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border border-[oklch(0.72_0.12_70_/_0.35)] bg-[oklch(0.08_0.02_60_/_0.9)] p-6 shadow-2xl md:p-8"
          >
            <input name="website" type="text" tabIndex={-1} autoComplete="off" className="hidden" />

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-white/80">{t("姓名 *", "Name *")}</span>
                <input name="name" required className={inputClass} placeholder={t("你的姓名", "Your name")} />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-white/80">WhatsApp *</span>
                <input name="whatsapp" required className={inputClass} placeholder={t("含国家代码", "Include country code")} />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-white/80">Email</span>
                <input name="email" type="email" className={inputClass} placeholder="name@example.com" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-white/80">{t("你的身份 *", "Your role *")}</span>
                <select name="clientType" required className={selectClass} defaultValue="">
                  <option value="" disabled>{t("请选择", "Select")}</option>
                  <option value="Founder / Business Owner">{t("创业者 / 企业主", "Founder / Business Owner")}</option>
                  <option value="Senior Executive / Professional">{t("高管 / 专业人士", "Senior Executive / Professional")}</option>
                  <option value="Individual Major Decision">{t("个人重大决策", "Individual Major Decision")}</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-white/80">{t("行业 / 当前职位", "Industry / Current role")}</span>
                <input name="industry" className={inputClass} placeholder={t("例如：教育、餐饮、科技、财务总监", "e.g. Education, F&B, Technology, Finance Director")} />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-white/80">{t("团队规模", "Team size")}</span>
                <select name="teamSize" className={selectClass} defaultValue="Not applicable">
                  <option value="Not applicable">{t("不适用 / 个人", "Not applicable / Individual")}</option>
                  <option value="1-5">1–5</option>
                  <option value="6-20">6–20</option>
                  <option value="21-50">21–50</option>
                  <option value="51-200">51–200</option>
                  <option value="200+">200+</option>
                </select>
              </label>
            </div>

            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-semibold text-white/80">{t("申请的服务 *", "Advisory pathway *")}</span>
              <select name="service" required className={selectClass} defaultValue="">
                <option value="" disabled>{t("请选择", "Select")}</option>
                <option value="Founder Business Advisory">{t("创业老板事业陪跑", "Founder Business Advisory")}</option>
                <option value="Wealth Cycle & Investment Decision Advisory">{t("财富周期与投资决策辅助", "Wealth Cycle & Investment Decision Advisory")}</option>
                <option value="Executive Career Transition Advisory">{t("高管事业转型与关键关系规划", "Executive Career Transition Advisory")}</option>
                <option value="Relationship Decision Clarity">{t("情感关系决策", "Relationship Decision Clarity")}</option>
                <option value="Major Personal Decision Consultation">{t("个人重大决策咨询", "Major Personal Decision Consultation")}</option>
                <option value="Not Sure Need Assessment">{t("不确定，请先评估", "Not sure — please assess")}</option>
              </select>
            </label>

            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-white/80">{t("决定期限", "Decision deadline")}</span>
                <input name="deadline" className={inputClass} placeholder={t("例如：两周内", "e.g. within 2 weeks")} />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-white/80">{t("支持方式", "Support type")}</span>
                <select name="supportType" className={selectClass} defaultValue="Not sure">
                  <option value="Single Session">{t("单次判断", "Single session")}</option>
                  <option value="90-Day Trial">{t("90天试行计划", "90-day trial")}</option>
                  <option value="Long-Term Retainer">{t("长期陪跑", "Long-term retainer")}</option>
                  <option value="Not sure">{t("不确定", "Not sure")}</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-white/80">{t("咨询形式", "Meeting mode")}</span>
                <select name="meetingMode" className={selectClass} defaultValue="Either">
                  <option value="In person at Bedok">{t("Bedok 面谈", "In person at Bedok")}</option>
                  <option value="Online">{t("线上", "Online")}</option>
                  <option value="Either">{t("都可以", "Either")}</option>
                </select>
              </label>
            </div>

            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-semibold text-white/80">{t("当前最想解决的问题 *", "Most important issue *")}</span>
              <textarea
                name="message"
                required
                rows={6}
                className={`${inputClass} resize-none`}
                placeholder={t(
                  "请说明目前的处境、你正在考虑的选项、最担心的风险，以及你希望在什么时候作出决定。",
                  "Describe the current situation, options you are considering, the main risk you want to avoid and when a decision is required."
                )}
              />
            </label>

            <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-white/62">
              <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 accent-[#d6ad63]" />
              <span>
                {t("我同意启明遁甲决策智库为处理本次咨询申请而收集和使用以上资料，并已阅读", "I consent to Qimen Strategy collecting and using the above information to process this enquiry, and I have read the ")}
                <Link href="/privacy" className="ml-1 text-[#d6ad63] underline underline-offset-4">
                  {t("隐私政策", "Privacy Policy")}
                </Link>
                。
              </span>
            </label>

            <button type="submit" disabled={status === "submitting"} className="mt-6 inline-flex w-full items-center justify-center gap-3 bg-[oklch(0.72_0.12_70)] px-6 py-4 text-sm font-bold uppercase tracking-wider text-[oklch(0.06_0.02_60)] transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70">
              {status === "submitting" ? <MessageCircle size={18} className="animate-pulse" /> : <Send size={18} />}
              {status === "submitting" ? t("提交中...", "Submitting...") : t("提交顾问申请", "Submit Advisory Application")}
            </button>

            {status === "success" && (
              <div className="mt-4 flex items-start gap-3 border border-emerald-400/30 bg-emerald-400/10 p-4 text-sm leading-6 text-emerald-100">
                <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0" />
                {t("谢谢。我们已收到你的申请，会通过 WhatsApp 进行初步适配沟通。", "Thank you. We have received your application and will contact you on WhatsApp for an initial fit review.")}
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
