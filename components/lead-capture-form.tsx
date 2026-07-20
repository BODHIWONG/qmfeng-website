"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, CheckCircle2, AlertCircle } from "lucide-react";
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
    const payload = {
      name: String(formData.get("name") || "").trim(),
      whatsapp: String(formData.get("whatsapp") || "").trim(),
      profile: String(formData.get("profile") || "").trim(),
      pathway: String(formData.get("pathway") || "").trim(),
      industry: String(formData.get("industry") || "").trim(),
      teamSize: String(formData.get("teamSize") || "").trim(),
      decisionDeadline: String(formData.get("decisionDeadline") || "").trim(),
      engagement: String(formData.get("engagement") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      source: "Qimen Website Qualified Enquiry Form",
      website: String(formData.get("website") || "").trim(),
      consent: formData.get("consent") === "yes",
    };

    if (!payload.name || !payload.whatsapp || !payload.profile || !payload.pathway || !payload.consent) {
      setStatus("error");
      setError(t("请填写姓名、WhatsApp、身份、咨询方向，并确认个人资料使用同意。", "Please complete your name, WhatsApp, profile, advisory pathway and privacy consent."));
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
      setError(t("提交失败。请直接通过 WhatsApp 联系我们。", "Submission failed. Please contact us directly via WhatsApp."));
    }
  }

  return (
    <section id="enquiry" className="relative overflow-hidden bg-[oklch(0.12_0.02_60)] py-20 md:py-28">
      <div className="absolute inset-0 opacity-25" style={{ background: "radial-gradient(circle at top, oklch(0.72 0.12 70 / 0.16), transparent 48%)" }} />
      <div className="container relative">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[oklch(0.72_0.12_70)]">{t("顾问申请", "Advisory Application")}</p>
            <h2 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
              {t("先说明你面对的决定，而不是只问价格", "Start with the decision, not only the price")}
            </h2>
            <p className="max-w-xl text-base leading-8 text-white/75 md:text-lg">
              {t(
                "请简单说明你的身份、行业、团队规模、当前最重要的问题和决策时间。我们会先判断你更适合单次重大决策咨询、90天事业陪跑、长期顾问，还是每周奇门课程。",
                "Briefly share your role, industry, team size, current decision and deadline. We will first assess whether a single decision session, 90-day founder support, ongoing advisory or the weekly Qi Men course is the appropriate next step."
              )}
            </p>
            <div className="mt-7 border-l-2 border-[oklch(0.72_0.12_70)] pl-5 text-sm leading-7 text-white/58">
              <p>{t("正式WhatsApp：+65 8959 3499", "Official WhatsApp: +65 8959 3499")}</p>
              <Link href="/qi-men-dun-jia-course-singapore" className="mt-3 inline-block font-semibold text-[oklch(0.72_0.12_70)]">
                {t("查看每周课程 →", "View Weekly Courses →")}
              </Link>
            </div>
          </motion.div>

          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border border-[oklch(0.72_0.12_70_/_0.35)] bg-[oklch(0.08_0.02_60_/_0.88)] p-6 shadow-2xl md:p-8">
            <input name="website" type="text" tabIndex={-1} autoComplete="off" className="hidden" />

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-white/80">{t("姓名", "Name")}</span>
                <input name="name" required className="w-full border border-white/15 bg-white/8 px-4 py-3 text-white outline-none focus:border-[oklch(0.72_0.12_70)]" placeholder={t("你的姓名", "Your name")} />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-white/80">WhatsApp</span>
                <input name="whatsapp" required className="w-full border border-white/15 bg-white/8 px-4 py-3 text-white outline-none focus:border-[oklch(0.72_0.12_70)]" placeholder={t("包含国家区号", "Include country code")} />
              </label>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-white/80">{t("你的身份", "Your profile")}</span>
                <select name="profile" required defaultValue="" className="w-full border border-white/15 bg-[oklch(0.10_0.02_60)] px-4 py-3 text-white outline-none focus:border-[oklch(0.72_0.12_70)]">
                  <option value="" disabled>{t("请选择", "Select")}</option>
                  <option value="Founder / Business Owner">{t("创业者 / 企业主", "Founder / Business Owner")}</option>
                  <option value="Senior Executive / Professional">{t("高管 / 专业人士", "Senior Executive / Professional")}</option>
                  <option value="Individual Major Decision">{t("个人重大决策", "Individual Major Decision")}</option>
                  <option value="Course Learner">{t("课程学员", "Course Learner")}</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-white/80">{t("咨询方向", "Advisory pathway")}</span>
                <select name="pathway" required defaultValue="" className="w-full border border-white/15 bg-[oklch(0.10_0.02_60)] px-4 py-3 text-white outline-none focus:border-[oklch(0.72_0.12_70)]">
                  <option value="" disabled>{t("请选择", "Select")}</option>
                  <option value="Founder Business Advisory">{t("创业老板事业陪跑", "Founder Business Advisory")}</option>
                  <option value="Wealth and Investment Decision Support">{t("财富周期与投资决策辅助", "Wealth & Investment Decision Support")}</option>
                  <option value="Executive Career Transition">{t("高管事业转型", "Executive Career Transition")}</option>
                  <option value="Relationship and Major Life Decision">{t("情感与重大决策", "Relationship & Major Life Decision")}</option>
                  <option value="Weekly Qi Men Course">{t("每周奇门课程", "Weekly Qi Men Course")}</option>
                  <option value="Not Sure">{t("暂不确定", "Not Sure")}</option>
                </select>
              </label>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-white/80">{t("行业 / 职业", "Industry / Profession")}</span>
                <input name="industry" className="w-full border border-white/15 bg-white/8 px-4 py-3 text-white outline-none focus:border-[oklch(0.72_0.12_70)]" placeholder={t("例如教育、餐饮、金融", "e.g. education, F&B, finance")} />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-white/80">{t("团队规模", "Team size")}</span>
                <select name="teamSize" defaultValue="" className="w-full border border-white/15 bg-[oklch(0.10_0.02_60)] px-4 py-3 text-white outline-none focus:border-[oklch(0.72_0.12_70)]">
                  <option value="">{t("不适用 / 未填写", "Not applicable / Prefer not to say")}</option>
                  <option value="Solo">1</option><option value="2-5">2–5</option><option value="6-20">6–20</option><option value="21-50">21–50</option><option value="51+">51+</option>
                </select>
              </label>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-white/80">{t("决策时间", "Decision deadline")}</span>
                <select name="decisionDeadline" defaultValue="" className="w-full border border-white/15 bg-[oklch(0.10_0.02_60)] px-4 py-3 text-white outline-none focus:border-[oklch(0.72_0.12_70)]">
                  <option value="">{t("请选择", "Select")}</option>
                  <option value="Within 7 days">{t("7天内", "Within 7 days")}</option><option value="Within 30 days">{t("30天内", "Within 30 days")}</option><option value="Within 90 days">{t("90天内", "Within 90 days")}</option><option value="Long-term planning">{t("长期规划", "Long-term planning")}</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-white/80">{t("希望的合作方式", "Preferred engagement")}</span>
                <select name="engagement" defaultValue="" className="w-full border border-white/15 bg-[oklch(0.10_0.02_60)] px-4 py-3 text-white outline-none focus:border-[oklch(0.72_0.12_70)]">
                  <option value="">{t("暂不确定", "Not sure yet")}</option>
                  <option value="Single Decision Consultation">{t("单次重大决策咨询", "Single Decision Consultation")}</option><option value="90-Day Advisory">{t("90天事业陪跑", "90-Day Advisory")}</option><option value="Ongoing Advisory">{t("长期顾问", "Ongoing Advisory")}</option><option value="Weekly Course">{t("每周课程", "Weekly Course")}</option>
                </select>
              </label>
            </div>

            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-semibold text-white/80">{t("当前最重要的问题", "Your most important current decision")}</span>
              <textarea name="message" rows={5} className="w-full resize-none border border-white/15 bg-white/8 px-4 py-3 text-white outline-none focus:border-[oklch(0.72_0.12_70)]" placeholder={t("请说明背景、你正在比较的选择，以及最担心的风险。", "Briefly explain the background, options you are comparing and the risk you are most concerned about.")} />
            </label>

            <label className="mt-4 flex items-start gap-3 text-xs leading-6 text-white/58">
              <input name="consent" value="yes" type="checkbox" required className="mt-1 h-4 w-4 accent-[oklch(0.72_0.12_70)]" />
              <span>{t("我同意根据", "I agree to the ")}<Link href="/privacy" className="font-semibold text-[oklch(0.72_0.12_70)]">{t("隐私政策", "Privacy Policy")}</Link>{t("处理本次咨询并通过WhatsApp联系我。", " for processing this enquiry and contacting me through WhatsApp.")}</span>
            </label>

            <button type="submit" disabled={status === "submitting"} className="mt-6 inline-flex w-full items-center justify-center gap-3 bg-[oklch(0.72_0.12_70)] px-6 py-4 text-sm font-bold uppercase tracking-wider text-[oklch(0.06_0.02_60)] disabled:opacity-70">
              {status === "submitting" ? <MessageCircle size={18} className="animate-pulse" /> : <Send size={18} />}
              {status === "submitting" ? t("提交中...", "Submitting...") : t("提交顾问申请", "Submit Advisory Application")}
            </button>

            {status === "success" && <div className="mt-4 flex items-start gap-3 border border-emerald-400/30 bg-emerald-400/10 p-4 text-sm leading-6 text-emerald-100"><CheckCircle2 size={18} />{t("谢谢。我们会先评估适合的服务路径，再通过WhatsApp联系你。", "Thank you. We will assess the appropriate pathway before contacting you on WhatsApp.")}</div>}
            {status === "error" && <div className="mt-4 flex items-start gap-3 border border-red-400/30 bg-red-400/10 p-4 text-sm leading-6 text-red-100"><AlertCircle size={18} />{error}</div>}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
