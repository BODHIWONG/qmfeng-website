"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { Brain, Compass, MapPinned, ShieldCheck, Sparkles, Building2, ArrowRight } from "lucide-react";
import Link from "next/link";

const MASTER_IMAGE = "/master-qiming-about.jpg";

const authorityPoints = [
  {
    icon: Compass,
    zh: "启明遁甲 Qimen Strategy 创始人",
    en: "Founder of Qimen Strategy",
    descZh: "将奇门遁甲重新定位为现代人的战略决策系统，而不是传统意义上的算命工具。",
    descEn: "Repositioning Qi Men Dun Jia as a modern strategic decision system, not merely a fortune-telling practice.",
  },
  {
    icon: Sparkles,
    zh: "16+ 年传统术数与实战咨询经验",
    en: "16+ Years of Practice & Consulting Experience",
    descZh: "长期深耕奇门遁甲、风水布局、八字命理、空间能量调和与真实个案咨询。",
    descEn: "Long-term practice in Qi Men Dun Jia, Feng Shui alignment, Bazi, space energy alignment and real-world consultations.",
  },
  {
    icon: Brain,
    zh: "清华大学积极心理学培训背景",
    en: "Tsinghua Positive Psychology Training Background",
    descZh: "结合积极心理学视角，帮助客户不只看局势，也稳定内在状态与决策清晰度。",
    descEn: "Integrating positive psychology perspectives to support not only situational clarity, but also inner stability and decision clarity.",
  },
  {
    icon: Building2,
    zh: "新加坡本地企业与空间经验",
    en: "Singapore Local Business & Space Expertise",
    descZh: "熟悉 HDB、Condo、办公室、店铺与商业空间在新加坡真实生活中的使用场景。",
    descEn: "Familiar with HDB, condo, office, retail and commercial space needs in Singapore’s real-life environment.",
  },
];

const specialties = [
  { zh: "奇门决策", en: "Qimen Strategy" },
  { zh: "企业与人生关键判断", en: "Business & Life Decisions" },
  { zh: "风水布局", en: "Feng Shui Alignment" },
  { zh: "空间能量调和", en: "Space Energy Alignment" },
  { zh: "情绪与关系卡点", en: "Emotional & Relationship Blocks" },
  { zh: "时机、方向与人事判断", en: "Timing, Direction & Human Dynamics" },
];

export default function FounderAuthoritySection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-[oklch(0.09_0.02_60)] py-20 text-white md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,oklch(0.72_0.12_70/0.12),transparent_36%)]" />
      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md overflow-hidden border border-[oklch(0.72_0.12_70/0.28)] bg-black shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
              <img
                src={MASTER_IMAGE}
                alt="Master Huang Qiming, Founder of Qimen Strategy in Singapore"
                className="aspect-[4/5] w-full object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/60 to-transparent p-7">
                <p className="text-3xl font-semibold text-[oklch(0.98_0.01_75)]" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
                  {t("黄启明大师", "Master Huang Qiming")}
                </p>
                <p className="mt-2 text-sm font-semibold tracking-[0.18em] text-[oklch(0.72_0.12_70)]">
                  {t("启明遁甲创始人", "Founder of Qimen Strategy")}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[oklch(0.72_0.12_70)]">
              {t("创始人权威", "Founder Authority")}
            </p>

            <h2 className="mb-6 text-4xl font-bold leading-tight text-[oklch(0.98_0.01_75)] md:text-6xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
              {t("不是看热闹的玄学，而是看清局势的东方战略判断。", "Not Mysticism for Curiosity, but Eastern Strategic Judgment for Clarity.")}
            </h2>

            <p className="mb-8 max-w-3xl text-base leading-8 text-white/74 md:text-lg">
              {t(
                "黄启明大师是启明遁甲 Qimen Strategy 的创始人，立足新加坡，长期将奇门遁甲、风水布局、八字命理、空间能量调和与积极心理学视角结合，用于事业财富、合作判断、关系卡点、空间布局与人生关键选择。其核心并非制造神秘感，而是帮助客户看清当下为什么卡住，以及下一步应该如何更稳、更准地行动。",
                "Master Huang Qiming is the founder of Qimen Strategy, based in Singapore. His work integrates Qi Men Dun Jia, Feng Shui alignment, Bazi, space energy alignment and positive psychology perspectives for career, wealth, partnership judgment, relationship blocks, spatial decisions and major life choices. The purpose is not to create mystery, but to help clients understand why they are stuck and how to move forward with greater clarity, timing and strategic awareness."
              )}
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {authorityPoints.map((item) => (
                <div key={item.zh} className="border border-[oklch(0.72_0.12_70/0.20)] bg-[oklch(0.12_0.02_60/0.72)] p-5 backdrop-blur">
                  <item.icon className="mb-4 text-[oklch(0.72_0.12_70)]" size={23} />
                  <h3 className="mb-2 text-base font-semibold text-[oklch(0.96_0.01_75)]">
                    {t(item.zh, item.en)}
                  </h3>
                  <p className="text-sm leading-7 text-white/62">
                    {t(item.descZh, item.descEn)}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {specialties.map((item) => (
                <span key={item.zh} className="border border-[oklch(0.72_0.12_70/0.30)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[oklch(0.78_0.10_70)]">
                  {t(item.zh, item.en)}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/decision" className="inline-flex items-center justify-center gap-3 bg-[oklch(0.72_0.12_70)] px-7 py-3 text-sm font-bold uppercase tracking-[0.14em] text-black transition hover:opacity-90">
                {t("了解奇门决策", "Explore Qimen Strategy")}
                <ArrowRight size={17} />
              </Link>
              <Link href="/insights" className="inline-flex items-center justify-center gap-3 border border-[oklch(0.72_0.12_70/0.45)] px-7 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[oklch(0.82_0.10_70)] transition hover:bg-[oklch(0.72_0.12_70/0.10)]">
                {t("阅读战略洞察", "Read Strategic Insights")}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
