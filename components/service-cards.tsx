"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { Activity, ArrowRight, BookOpen, Building2, Compass, type LucideIcon } from "lucide-react";

type ServiceCard = {
  id: number;
  icon: LucideIcon;
  titleZh: string;
  titleEn: string;
  visualSubZh: string;
  visualSubEn: string;
  painZh: string;
  painEn: string;
  audienceZh: string;
  audienceEn: string;
  feeZh: string;
  feeEn: string;
  href: string;
  recommended?: boolean;
};

const services: ServiceCard[] = [
  {
    id: 1,
    icon: Building2,
    titleZh: "婚姻关系判断",
    titleEn: "Marriage Relationship Clarity",
    visualSubZh: "婚姻压力 · 关系卡点 · 修复空间",
    visualSubEn: "Marriage Stress · Relationship Blockage · Room to Repair",
    painZh:
      "适合正在面对婚姻压力、长期冷淡、沟通失效或关系走不下去的女性。先看清关系是否还有修复空间、对方状态如何，以及真正卡住的问题在哪里。",
    painEn:
      "For women facing marriage stress, emotional distance, failed communication or a relationship that feels stuck. Clarify whether there is room to repair, the other person’s position and where the real blockage lies.",
    audienceZh: "核心价值：在情绪最乱的时候，先看清关系局势，再决定沟通、等待、修复或转身。",
    audienceEn:
      "Core value: when emotions are unsettled, understand the relationship situation before deciding whether to communicate, wait, repair or step away.",
    feeZh: "S$396 起",
    feeEn: "From S$396",
    href: "/relationship-clarity-reading-singapore",
    recommended: true,
  },
  {
    id: 2,
    icon: Activity,
    titleZh: "第三者与信任危机",
    titleEn: "Affair & Trust Issues",
    visualSubZh: "婚外情 · 第三者 · 怀疑与不安",
    visualSubEn: "Affair · Third Party · Doubt & Uncertainty",
    painZh:
      "适合面对婚外情、第三者介入、关系隐瞒、反复怀疑或信任破裂的客户。通过奇门遁甲看清关系中的真实阻力、隐藏状态与下一步处理方向。",
    painEn:
      "For clients facing affair concerns, third-party involvement, hidden relationship dynamics, repeated doubts or broken trust. Use Qi Men Dun Jia to review hidden patterns, real obstacles and the next direction.",
    audienceZh: "核心价值：不是冲动追问结果，而是在关键时刻看清事实结构、时机与处理代价。",
    audienceEn:
      "Core value: not reacting impulsively, but understanding the structure, timing and cost of action at a critical moment.",
    feeZh: "S$396 起",
    feeEn: "From S$396",
    href: "/relationship-clarity-reading-singapore",
  },
  {
    id: 3,
    icon: Compass,
    titleZh: "该继续还是放手",
    titleEn: "Stay or Leave Decision",
    visualSubZh: "继续 · 等待 · 沟通 · 放下",
    visualSubEn: "Stay · Wait · Talk · Let Go",
    painZh:
      "适合已经反复纠结、放不下又看不到方向的人。帮助你判断继续、等待、主动沟通或放手的时机、风险与后续走向。",
    painEn:
      "For those repeatedly torn between holding on and letting go. Review the timing, risks and likely direction before choosing to stay, wait, communicate or move on.",
    audienceZh: "核心价值：把反复消耗的情绪，转化为更清晰、更稳妥的关系判断。",
    audienceEn:
      "Core value: turn emotional exhaustion into clearer and steadier relationship judgment.",
    feeZh: "S$396 起",
    feeEn: "From S$396",
    href: "/relationship-clarity-reading-singapore",
  },
  {
    id: 4,
    icon: BookOpen,
    titleZh: "女性情感决策咨询",
    titleEn: "Women’s Relationship Advisory",
    visualSubZh: "私密咨询 · 情绪整理 · 方向判断",
    visualSubEn: "Private Advisory · Emotional Clarity · Direction",
    painZh:
      "适合在感情中感到委屈、混乱、不安、反复内耗，或需要为未来关系做重要决定的女性。咨询重点是帮助你看清局势，而不是替你做决定。",
    painEn:
      "For women feeling hurt, confused, insecure or emotionally drained in a relationship, especially before an important relationship decision. The focus is to help you see clearly, not to decide for you.",
    audienceZh: "核心价值：在关系压力之下，重新找回判断力、边界感与下一步方向。",
    audienceEn:
      "Core value: regain judgment, boundaries and next-step direction under relationship pressure.",
    feeZh: "私密预约制",
    feeEn: "Private Appointment",
    href: "/relationship-clarity-reading-singapore",
  },
];

export default function ServiceCards() {
  const { t } = useLanguage();

  return (
    <section id="services" className="bg-[oklch(0.97_0.012_75)] py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-4xl text-center md:mb-16"
        >
          <p
            className="mb-3 text-xs uppercase tracking-[0.25em]"
            style={{ fontFamily: "var(--font-lato), sans-serif", color: "oklch(0.60 0.08 65)" }}
          >
            {t("婚姻情感决策入口", "Relationship Advisory Focus")}
          </p>

          <h2
            className="mb-5 text-3xl font-bold leading-tight md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.15 0.02 60)" }}
          >
            {t("感情走到十字路口，先看清局势，再做决定", "When Love Reaches a Crossroads, See Clearly Before You Decide")}
          </h2>

          <p
            className="text-sm leading-7 md:text-base"
            style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif", color: "oklch(0.42 0.02 60)" }}
          >
            {t(
              "适合正在面对婚姻压力、感情困惑、第三者问题、信任危机，或不确定该继续、等待、沟通还是放手的女性客户。启明遁甲帮助你在情绪之外，看清关系中的时机、人事与下一步方向。",
              "For women facing marriage stress, relationship confusion, affair concerns, trust issues, or the difficult question of whether to stay, wait, communicate or let go. Qimen Strategy helps you look beyond emotion and see timing, people dynamics and the next direction more clearly."
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 xl:gap-7">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative flex flex-col overflow-hidden border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)] ${
                  service.recommended
                    ? "border-[oklch(0.72_0.12_70)] shadow-[0_16px_44px_rgba(190,134,40,0.14)]"
                    : "border-[oklch(0.88_0.018_70)] hover:border-[oklch(0.60_0.08_65)]"
                }`}
              >
                {service.recommended && (
                  <div className="absolute right-4 top-4 bg-[oklch(0.72_0.12_70)] px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white">
                    {t("重点入口", "Featured")}
                  </div>
                )}

                <div className="border-b border-[oklch(0.90_0.02_75)] bg-[oklch(0.98_0.015_78)] p-8">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center border border-[oklch(0.70_0.10_70)] text-[oklch(0.60_0.08_65)]">
                    <Icon size={22} />
                  </div>
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[oklch(0.58_0.08_65)]">
                    Qimen Strategy
                  </p>
                  <h3 className="text-2xl font-bold leading-tight text-[oklch(0.16_0.02_60)]">
                    {t(service.titleZh, service.titleEn)}
                  </h3>
                  <p className="mt-3 text-sm font-semibold text-[oklch(0.55_0.08_65)]">
                    {t(service.visualSubZh, service.visualSubEn)}
                  </p>
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <p className="text-sm leading-7 text-[oklch(0.36_0.02_60)]">
                    {t(service.painZh, service.painEn)}
                  </p>

                  <p className="mt-5 border-l-2 border-[oklch(0.60_0.08_65)] pl-4 text-sm font-semibold leading-7 text-[oklch(0.24_0.02_60)]">
                    {t(service.audienceZh, service.audienceEn)}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-[oklch(0.90_0.02_75)] pt-6">
                    <p className="text-sm font-bold text-[oklch(0.58_0.08_65)]">
                      {t(service.feeZh, service.feeEn)}
                    </p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[oklch(0.30_0.03_70)] transition-colors hover:text-[oklch(0.60_0.08_65)]"
                    >
                      {t("查看详情", "Details")}
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
