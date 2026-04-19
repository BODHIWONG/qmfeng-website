"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { TrendingUp, Sparkles, Gem, ArrowRight } from "lucide-react";

const QIMEN_COMPASS = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21711776224675_.pic_hd.jpg-e4KblAWrbDj5x5doZNK2XS1KduaUCr.png";
const GOD_OF_WEALTH = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21611776220612_.pic_hd.jpg-hejKHLcxZs2TYWp6aij5M4iQBddg4y.png";
const CONSULTATION = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21561776220244_.pic_hd.jpg-A2mUb6jdzzo9sPeAf89CAZJciwROLk.png";

export default function GoldenTriangle() {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: TrendingUp,
      labelZh: "刚",
      labelEn: "Yang",
      tagZh: "奇门战略",
      tagEn: "Strategic Planning",
      titleZh: "商业与财富",
      titleEn: "Investment & Risk Navigation",
      descZh: "不出户已知天下。奇门遁甲决策、避险增财，为精英阶层提供确定性。",
      descEn: "Data-driven timing analysis for business decisions. Navigate investments, partnerships, and career pivots with precision — the logic behind the mystery.",
      img: QIMEN_COMPASS,
      href: "#strategy",
      color: "oklch(0.60 0.08 65)",
    },
    {
      icon: Sparkles,
      labelZh: "柔",
      labelEn: "Yin",
      tagZh: "能量净化",
      tagEn: "Space Purification",
      titleZh: "身心与情感",
      titleEn: "Wellness & Relationship Reset",
      descZh: "天赋修行十载。为疲惫的灵魂和空间，带去智慧之光与能量重组。",
      descEn: "Cleanse unseen energies to create a sanctuary for health, sleep, and relationships — where science meets intuition.",
      img: CONSULTATION,
      href: "#clearing",
      color: "oklch(0.55 0.10 200)",
    },
    {
      icon: Gem,
      labelZh: "器",
      labelEn: "Form",
      tagZh: "匠心臻品",
      tagEn: "Curated Collection",
      titleZh: "能量美学",
      titleEn: "Aesthetic Energy Objects",
      descZh: "既是艺术陈设，也是能量载体。铜师傅艺术品、定制手链、能量法器。",
      descEn: "Functional art pieces that anchor positive energy. Museum-quality craftsmanship meets metaphysical purpose.",
      img: GOD_OF_WEALTH,
      href: "#products",
      color: "oklch(0.50 0.12 30)",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[oklch(0.08_0.02_60)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, oklch(0.60 0.08 65) 1px, transparent 0)`,
        backgroundSize: "40px 40px"
      }} />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-[oklch(0.60_0.08_65)]" />
            <span className="text-xs tracking-[0.3em] uppercase text-[oklch(0.65_0.10_65)] font-bold"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}>
              {t("品牌三大支柱", "Three Pillars")}
            </span>
            <div className="w-12 h-px bg-[oklch(0.60_0.08_65)]" />
          </div>

          <h2 className="font-bold leading-tight mb-4"
            style={{
              fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              color: "oklch(0.95 0.03 75)",
              textShadow: "0 2px 4px rgba(0,0,0,0.3)"
            }}>
            {t("黄金三角", "The Golden Triangle")}
          </h2>

          <p className="text-base max-w-2xl mx-auto leading-relaxed"
            style={{
              fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
              color: "oklch(0.60 0.03 70)"
            }}>
            {t(
              "高端智库（懂赚钱、懂避险）× 身心家园（懂疗愈、有温度）× 能量载体。一刚一柔，阴阳平衡，十六年深厚积淀的全貌。",
              "Logic behind the mystery. 16 years of precision-tested methods combining ancient wisdom with modern analysis — for those who value results over superstition."
            )}
          </p>
        </motion.div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-4">
          {pillars.map((pillar, i) => (
            <motion.a
              key={i}
              href={pillar.href}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative flex flex-col bg-[oklch(0.12_0.02_60)] overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img
                  src={pillar.img}
                  alt={t(pillar.titleZh, pillar.titleEn)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.02_60)] via-transparent to-transparent" />

                {/* Yang/Yin Label */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="w-8 h-8 flex items-center justify-center text-lg font-bold"
                    style={{ 
                      fontFamily: "var(--font-noto-serif), serif",
                      color: pillar.color,
                      border: `1px solid ${pillar.color}`
                    }}>
                    {pillar.labelZh}
                  </span>
                  <span className="text-[0.55rem] tracking-[0.2em] uppercase"
                    style={{ fontFamily: "var(--font-lato), sans-serif", color: pillar.color }}>
                    {pillar.labelEn}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <pillar.icon size={16} style={{ color: pillar.color }} />
                  <span className="text-[0.6rem] tracking-[0.2em] uppercase font-semibold"
                    style={{ fontFamily: "var(--font-lato), sans-serif", color: pillar.color }}>
                    {t(pillar.tagZh, pillar.tagEn)}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-2"
                  style={{
                    fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
                    color: "oklch(0.92 0.02 75)"
                  }}>
                  {t(pillar.titleZh, pillar.titleEn)}
                </h3>

                <p className="text-sm leading-relaxed flex-1"
                  style={{
                    fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
                    color: "oklch(0.60 0.03 70)"
                  }}>
                  {t(pillar.descZh, pillar.descEn)}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase transition-all duration-300 group-hover:gap-4"
                  style={{
                    fontFamily: "var(--font-lato), sans-serif",
                    letterSpacing: "0.12em",
                    color: pillar.color
                  }}>
                  {t("了解详情", "Learn More")} <ArrowRight size={12} />
                </div>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border border-transparent group-hover:border-[oklch(0.60_0.08_65)] transition-colors duration-300 pointer-events-none" />
            </motion.a>
          ))}
        </div>

        {/* Balance Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-sm italic"
            style={{
              fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
              color: "oklch(0.50 0.04 65)"
            }}>
            {t(
              "「一阴一阳之谓道」——《易经》",
              "\"The alternation of Yin and Yang is called the Tao.\" — I Ching"
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
