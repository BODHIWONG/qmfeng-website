"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { ArrowRight, TrendingUp, Heart, Zap } from "lucide-react";

const services = [
  {
    id: 1,
    icon: TrendingUp,
    titleZh: "财富与风险策略",
    titleEn: "Wealth & Risk Strategy",
    painZh: "别再做赔钱的决定。开始做赚钱的决定。",
    painEn: "Stop Making Costly Decisions. Start Making Profitable Ones.",
    descZh: "融合奇门遁甲、风水布局与八字解析三大玄学体系，精准分析投资时机、合作对象、方向选择。让每一个关键决策都有据可依。",
    descEn: "Integrating Qimen Dunjia, Feng Shui layout and Bazi analysis — three core metaphysical systems — to precisely analyze investment timing, partnerships, and strategic direction.",
    bulletZh: ["奇门遁甲时机预测", "风水布局财运优化", "八字命局深度解析"],
    bulletEn: ["Qimen Dunjia timing prediction", "Feng Shui wealth optimization", "Bazi life destiny analysis"],
    price: "$288",
    ctaZh: "检测财运",
    ctaEn: "Check My Wealth Luck",
    waMsg: "Hello Master Huang, I'd like to check my wealth luck and book a consultation.",
    accentColor: "oklch(0.72 0.12 70)",
  },
  {
  id: 2,
  icon: Heart,
  titleZh: "高端女性情感修复与能量重建",
  titleEn: "Relationship Healing & Energy Reset",
  painZh: "修复关系创伤，重建女性能量与吸引力。",
  painEn: "Heal relationship wounds and restore feminine energy.",
  descZh: "结合清华大学积极心理学指导师背景、多年易学疗愈经验与独创「能量心理调频」，帮助女性走出情感消耗与关系失衡。",
  descEn: "Combining a Tsinghua positive psychology background, years of Yi-based healing experience, and the original Energy Psychology Alignment method to help women recover from emotional depletion and relationship imbalance.",
  badgeZh: "独创能量心理调频",
  badgeEn: "Original Energy Psychology Alignment",
  bulletZh: ["情感创伤修复", "女性能量重建", "失恋与单身调理"],
  bulletEn: ["Relationship healing", "Feminine energy reset", "Heartbreak and singlehood support"],
  price: "$288+",
  ctaZh: "预约私密咨询",
  ctaEn: "Book Private Consultation",
  waMsg: "你好启明大师，我想咨询高端女性情感修复与能量重建服务。",
  accentColor: "oklch(0.55 0.12 145)",
},
  {
    id: 3,
    icon: Zap,
    titleZh: "空间能量净化",
    titleEn: "Space Energy Clearing",
    painZh: "改变空间 → 改变人生方向",
    painEn: "Change Your Space → Change Your Life Direction",
    descZh: "空间能量净化是启明大师在16年深厚修行中觉醒的独特天赋。大师通过独特的感官与磁场共振，能够敏锐捕捉空间中肉眼不可见的能量淤积与负面频率。",
    descEn: "Space energy clearing is Master Huang's unique gift awakened through 16+ years of deep cultivation. Through extraordinary sensory perception and magnetic field resonance, he detects invisible energy blockages and negative frequencies.",
    badgeZh: "每周仅开放3个名额",
    badgeEn: "Only 3 Slots Per Week",
    bulletZh: ["16年修行觉醒天赋", "磁场共振感知能力", "远程空间能量诊断"],
    bulletEn: ["16-year cultivated gift", "Magnetic field perception", "Remote energy diagnosis"],
    price: "$488",
    ctaZh: "预约空间净化",
    ctaEn: "Book Space Clearing",
    waMsg: "Hello Master Huang, I'd like to book a space energy clearing session.",
    accentColor: "oklch(0.55 0.12 250)",
  },
];

export default function ServiceCards() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-16 md:py-24 bg-[oklch(0.97_0.012_75)]">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <p
            className="text-xs tracking-[0.25em] uppercase mb-3"
            style={{
              fontFamily: "var(--font-lato), sans-serif",
              color: "oklch(0.60 0.08 65)",
            }}
          >
            {t("核心服务", "Core Services")}
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{
              fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
              color: "oklch(0.15 0.02 60)",
            }}
          >
            {t("选择您的咨询方向", "Choose Your Path")}
          </h2>
        </motion.div>

        {/* Three Column Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-6 md:p-8 border border-[oklch(0.88_0.018_70)] bg-white hover:border-[oklch(0.60_0.08_65)] transition-all duration-300 group flex flex-col"
            >
              {/* Icon + Badge */}
              <div className="flex items-start justify-between mb-6">
                <div
                  className="w-14 h-14 flex items-center justify-center"
                  style={{
                    background: `${service.accentColor}15`,
                    border: `1px solid ${service.accentColor}30`,
                  }}
                >
                  <service.icon size={28} style={{ color: service.accentColor }} />
                </div>
                {service.badgeZh && (
                  <span
                    className="text-[0.6rem] px-2 py-1 tracking-wider uppercase font-semibold"
                    style={{
                      fontFamily: "var(--font-lato), sans-serif",
                      background: `${service.accentColor}15`,
                      color: service.accentColor,
                      border: `1px solid ${service.accentColor}30`,
                    }}
                  >
                    {t(service.badgeZh, service.badgeEn)}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3
                className="text-xl md:text-2xl font-bold mb-4"
                style={{
                  fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
                  color: "oklch(0.15 0.02 60)",
                }}
              >
                {t(service.titleZh, service.titleEn)}
              </h3>

              {/* Pain Point */}
              <p
                className="text-base md:text-lg font-semibold mb-3"
                style={{
                  fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
                  color: service.accentColor,
                }}
              >
                {t(service.painZh, service.painEn)}
              </p>

              {/* Description */}
              <p
                className="text-sm mb-4"
                style={{
                  fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
                  color: "oklch(0.50 0.02 60)",
                  lineHeight: 1.6,
                }}
              >
                {t(service.descZh, service.descEn)}
              </p>

              {/* Bullet Points */}
              <ul className="space-y-2 mb-6 flex-grow">
                {(t(service.bulletZh, service.bulletEn) as string[]).map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-xs"
                    style={{
                      fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
                      color: "oklch(0.40 0.02 60)",
                    }}
                  >
                    <span style={{ color: service.accentColor }}>&#10003;</span>
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Price */}
              <p
                className="text-3xl font-bold mb-6"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  color: "oklch(0.15 0.02 60)",
                }}
              >
                From {service.price}
              </p>

              {/* CTA Button */}
              <a
                href={`https://wa.me/6589418791?text=${encodeURIComponent(service.waMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:opacity-90"
                style={{
                  fontFamily: "var(--font-lato), sans-serif",
                  background: service.accentColor,
                  color: "oklch(0.98 0.005 75)",
                }}
              >
                {t(service.ctaZh, service.ctaEn)}
                <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
