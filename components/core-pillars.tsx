"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { ArrowRight } from "lucide-react";

const WA_BASE = "https://wa.me/message/55HSHDNBMWPLA1";

const PILLARS = [
  {
    id: 1,
    emoji: "💰",
    titleZh: "财富 · 旺运策略",
    titleEn: "Financial Strategy",
    painZh: "生意不顺？财运不稳？投资踌躇？",
    painEn: "Is your business struggling? Wealth uncertain?",
    solutionZh: "用风水与八字，提升财运、规避风险、把握关键时机",
    solutionEn: "Enhance prosperity and mitigate risks through Feng Shui & Bazi readings",
    waMsg: "Hello Master Huang, I'd like to discuss a Financial Strategy consultation to improve my business and wealth.",
    gradient: "from-[oklch(0.20_0.03_45)] to-[oklch(0.12_0.02_50)]",
    accentColor: "oklch(0.72 0.12 70)",
  },
  {
    id: 2,
    emoji: "❤️",
    titleZh: "情感 · 心理能量疗愈",
    titleEn: "Wellness & Healing",
    painZh: "情绪低落？焦虑内耗？感情受阻？",
    painEn: "Feeling overwhelmed? Emotionally exhausted?",
    solutionZh: "清华积极心理学 × 传统命理智慧，独创「能量心理调频」疗法",
    solutionEn: "Tsinghua Positive Psychology × Traditional Metaphysics — our unique Energy-Psychology Alignment method",
    badge: "清华积极心理学认证",
    badgeEn: "Tsinghua Certified",
    waMsg: "你好启明大师，我希望咨询关于心理能量调频与积极心理学指导。",
    gradient: "from-[oklch(0.18_0.05_145)] to-[oklch(0.12_0.03_140)]",
    accentColor: "oklch(0.55 0.12 145)",
  },
  {
    id: 3,
    emoji: "⚡",
    titleZh: "空间 · 能量调整",
    titleEn: "Space Optimisation",
    painZh: "睡眠差？家宅不安？店铺气场弱？",
    painEn: "Poor sleep or feeling depleted at home?",
    solutionZh: "清除负能量、重置气场、打造财富磁场",
    solutionEn: "Cleanse negative energy and revitalise your environment",
    waMsg: "Hello Master Huang, I'd like a Space Energy consultation to improve my home and office environment.",
    gradient: "from-[oklch(0.18_0.05_250)] to-[oklch(0.12_0.02_240)]",
    accentColor: "oklch(0.70 0.12 250)",
  },
];

export default function CorePillars() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-[oklch(0.08_0.02_60)]">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-10 h-px bg-[oklch(0.60_0.08_65)]" />
            <span
              className="text-[0.65rem] tracking-[0.25em] uppercase font-semibold"
              style={{ fontFamily: "var(--font-lato), sans-serif", color: "oklch(0.60 0.08 65)" }}
            >
              {t("三大核心服务", "Three Core Services")}
            </span>
            <div className="w-10 h-px bg-[oklch(0.60_0.08_65)]" />
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
            style={{
              fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
              color: "oklch(0.92 0.01 75)",
            }}
          >
            {t("您的困扰，我们的专长", "Your Concerns, Our Expertise")}
          </h2>
        </motion.div>

        {/* Three Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative p-8 md:p-10 bg-gradient-to-b ${pillar.gradient} border border-[oklch(0.25_0.02_60)] hover:border-[oklch(0.40_0.04_65)] transition-all duration-500 group`}
            >
              {/* Emoji Icon + Badge */}
              <div className="flex items-start justify-between mb-6">
                <div className="text-5xl">{pillar.emoji}</div>
                {pillar.badge && (
                  <span
                    className="text-[0.6rem] px-2 py-1 tracking-wider uppercase font-semibold"
                    style={{
                      fontFamily: "var(--font-lato), sans-serif",
                      background: "oklch(0.45 0.08 145 / 0.2)",
                      color: "oklch(0.70 0.10 145)",
                      border: "1px solid oklch(0.45 0.08 145 / 0.3)",
                    }}
                  >
                    {t(pillar.badge, pillar.badgeEn)}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3
                className="text-xl md:text-2xl font-bold mb-6"
                style={{
                  fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
                  color: pillar.accentColor,
                }}
              >
                {t(pillar.titleZh, pillar.titleEn)}
              </h3>

              {/* Pain Point */}
              <p
                className="text-base md:text-lg mb-3 font-medium"
                style={{
                  fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
                  color: "oklch(0.85 0.01 75)",
                }}
              >
                {t(pillar.painZh, pillar.painEn)}
              </p>

              {/* Solution */}
              <p
                className="text-sm mb-8 leading-relaxed"
                style={{
                  fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
                  color: "oklch(0.60 0.02 70)",
                }}
              >
                {t(pillar.solutionZh, pillar.solutionEn)}
              </p>

              {/* WhatsApp CTA */}
              <a
                href={`${WA_BASE}?text=${encodeURIComponent(pillar.waMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-widest transition-all duration-300 group-hover:gap-3"
                style={{
                  fontFamily: "var(--font-lato), sans-serif",
                  background: pillar.accentColor,
                  color: "oklch(0.08 0.02 60)",
                }}
              >
                {t("立即咨询", "WhatsApp Now")}
                <ArrowRight size={14} />
              </a>

              {/* Decorative Corner */}
              <div
                className="absolute top-0 right-0 w-16 h-16 opacity-20"
                style={{
                  background: `linear-gradient(135deg, ${pillar.accentColor} 0%, transparent 60%)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 md:mt-16 text-center"
        >
          <p
            className="text-xs tracking-widest uppercase"
            style={{ fontFamily: "var(--font-lato), sans-serif", color: "oklch(0.50 0.02 65)" }}
          >
            {t(
              "16年专业经验 · 5000+满意客户 · Bedok实体工作室",
              "16+ Years Experience · 5000+ Happy Clients · Bedok Physical Studio"
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
