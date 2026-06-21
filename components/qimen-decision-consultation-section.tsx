"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeDollarSign, CheckCircle2, Clock3, MessageCircle, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

const WA_LINK = [
  "https://wa.me/6589593499",
  "text=Hello%20Qimen%20Strategy%2C%20I%20would%20like%20to%20book%20a%20Qimen%20Decision%20Consultation%20from%20S%24396.",
].join("?");

const includedItems = [
  { zh: "完整奇门决策分析", en: "Full Qimen Strategy reading" },
  { zh: "当前局势、问题关键与下一步判断", en: "Current situation, core issue and next-step guidance" },
  { zh: "45–60 分钟私密咨询与问答", en: "45–60 minutes private consultation with Q&A" },
];

const boundaryItems = [
  {
    zh: "基础奇门决策咨询 S$396 起，最终费用会根据问题复杂度、是否涉及企业决策、多人关系或后续顾问支持确认。",
    en: "Qimen Decision Consultation starts from S$396. The final fee depends on the complexity of the issue, whether it involves business decisions, multiple parties or follow-up advisory support.",
  },
  {
    zh: "不包含完整年度规划、企业长期陪跑、详细风水布局或正式书面报告。",
    en: "This does not include a full annual plan, long-term business retainer, detailed Feng Shui layout or formal written report.",
  },
];

export default function QimenDecisionConsultationSection() {
  const { t } = useLanguage();

  return (
    <section id="qimen-decision-consultation" className="relative overflow-hidden bg-white py-16 md:py-24">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(circle at top right, oklch(0.72 0.12 70 / 0.13), transparent 38%), linear-gradient(180deg, oklch(0.97 0.012 75), white 44%)",
        }}
      />

      <div className="container relative">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-[oklch(0.88_0.03_70)] bg-[oklch(0.98_0.012_75)] p-7 md:p-10"
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[oklch(0.60_0.08_65)]">
              {t("奇门决策咨询", "Qimen Decision Consultation")}
            </p>

            <h2 className="mb-5 text-3xl font-bold leading-tight text-[oklch(0.15_0.02_60)] md:text-5xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
              {t("先看清局势，再决定下一步", "Understand the situation before your next move")}
            </h2>

            <p className="mb-7 text-base leading-8 text-[oklch(0.40_0.02_60)] md:text-lg">
              {t(
                "通过启明遁甲 Qimen Strategy 的奇门决策咨询，看清当前问题、关键阻力、关系实质、风险结构与下一步选择。适用于企业、事业、合作、情感关系与人生方向等重大判断。",
                "Through Qimen Strategy consultation, clarify the current issue, key obstacles, relationship dynamics, risk structure and next practical step. Suitable for major decisions involving business, career, partnership, relationships and life direction."
              )}
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="border border-[oklch(0.86_0.035_70)] bg-white p-5">
                <BadgeDollarSign className="mb-3 text-[oklch(0.60_0.08_65)]" size={26} />
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[oklch(0.50_0.03_60)]">{t("费用", "Rate")}</p>
                <p className="mt-2 text-3xl font-bold text-[oklch(0.15_0.02_60)]">S$396 起</p>
              </div>

              <div className="border border-[oklch(0.86_0.035_70)] bg-white p-5">
                <Clock3 className="mb-3 text-[oklch(0.60_0.08_65)]" size={26} />
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[oklch(0.50_0.03_60)]">{t("时长", "Duration")}</p>
                <p className="mt-2 text-2xl font-bold text-[oklch(0.15_0.02_60)]">45–60 min</p>
              </div>

              <div className="border border-[oklch(0.86_0.035_70)] bg-white p-5">
                <ShieldCheck className="mb-3 text-[oklch(0.60_0.08_65)]" size={26} />
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[oklch(0.50_0.03_60)]">{t("对象", "For")}</p>
                <p className="mt-2 text-lg font-bold leading-tight text-[oklch(0.15_0.02_60)]">{t("决策客户", "Decision Clients")}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="flex flex-col justify-between border border-[oklch(0.72_0.12_70_/_0.42)] bg-[oklch(0.08_0.02_60)] p-7 shadow-[0_24px_70px_rgba(0,0,0,0.16)] md:p-10"
          >
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[oklch(0.72_0.12_70)]">QIMEN STRATEGY</p>
              <h3 className="mb-6 text-2xl font-bold leading-tight text-white md:text-4xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
                {t("S$396 起包含什么？", "What does From S$396 include?")}
              </h3>

              <div className="space-y-4">
                {includedItems.map((item) => (
                  <div key={item.en} className="flex gap-3 text-white/82">
                    <CheckCircle2 className="mt-1 flex-shrink-0 text-[oklch(0.72_0.12_70)]" size={19} />
                    <p className="text-sm leading-7 md:text-base">{t(item.zh, item.en)}</p>
                  </div>
                ))}
              </div>

              <div className="my-7 h-px bg-white/12" />

              <div className="space-y-3">
                {boundaryItems.map((item) => (
                  <p key={item.en} className="text-sm leading-7 text-white/64">{t(item.zh, item.en)}</p>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex flex-1 items-center justify-center gap-3 bg-[oklch(0.72_0.12_70)] px-6 py-4 text-sm font-bold uppercase tracking-wider text-[oklch(0.06_0.02_60)] transition hover:scale-[1.01]">
                <MessageCircle size={18} />
                {t("预约奇门决策", "Book Qimen Decision")}
              </a>

              <a href="#enquiry" className="inline-flex flex-1 items-center justify-center gap-3 border border-[oklch(0.72_0.12_70)] px-6 py-4 text-sm font-bold uppercase tracking-wider text-[oklch(0.72_0.12_70)] transition hover:bg-[oklch(0.72_0.12_70)] hover:text-[oklch(0.06_0.02_60)]">
                {t("提交问题", "Submit Question")}
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
