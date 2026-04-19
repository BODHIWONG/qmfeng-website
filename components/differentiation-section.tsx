"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { Target, Shield, TrendingUp, Briefcase, Heart, Compass } from "lucide-react";

const benefits = [
  { icon: Target, labelZh: "预测结果", labelEn: "Predict Outcomes" },
  { icon: Shield, labelZh: "规避风险", labelEn: "Avoid Risks" },
  { icon: TrendingUp, labelZh: "做出更好决策", labelEn: "Make Better Decisions" },
];

const useCases = [
  { icon: Briefcase, labelZh: "商业决策", labelEn: "Business Decisions" },
  { icon: TrendingUp, labelZh: "投资判断", labelEn: "Investments" },
  { icon: Heart, labelZh: "感情关系", labelEn: "Relationships" },
  { icon: Compass, labelZh: "人生方向", labelEn: "Life Direction" },
];

export default function DifferentiationSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-[oklch(0.06_0.02_60)]">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="text-xs tracking-[0.25em] uppercase mb-4"
              style={{
                fontFamily: "var(--font-lato), sans-serif",
                color: "oklch(0.72 0.12 70)",
              }}
            >
              {t("差异化定位", "What Makes Us Different")}
            </p>
            
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
              style={{
                fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
                color: "oklch(0.98 0.01 75)",
              }}
            >
              {t(
                "这不是传统风水",
                "This Is NOT Traditional Feng Shui"
              )}
            </h2>

            <p
              className="text-xl md:text-2xl mb-12"
              style={{
                fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
                color: "oklch(0.72 0.10 70)",
              }}
            >
              {t(
                "这是一套预测与掌控结果的策略系统",
                "This Is a Strategic System to Predict & Control Outcomes"
              )}
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg leading-relaxed mb-12 max-w-3xl mx-auto"
            style={{
              fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
              color: "oklch(0.65 0.02 70)",
            }}
          >
            {t(
              "融合奇门遁甲、八字命理与能量调和，我们帮助您：",
              "Combining Qimen Dunjia, Bazi and Energy Alignment, we help you:"
            )}
          </motion.p>

          {/* Benefits - 3 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-3 gap-6 md:gap-12 mb-16"
          >
            {benefits.map((benefit, i) => (
              <div key={i} className="flex flex-col items-center">
                <div
                  className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-4"
                  style={{
                    background: "oklch(0.72 0.12 70 / 0.1)",
                    border: "1px solid oklch(0.72 0.12 70 / 0.3)",
                  }}
                >
                  <benefit.icon size={28} className="text-[oklch(0.72_0.12_70)]" />
                </div>
                <p
                  className="text-sm md:text-base font-semibold"
                  style={{
                    fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
                    color: "oklch(0.90 0.02 70)",
                  }}
                >
                  {t(benefit.labelZh, benefit.labelEn)}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Use Cases */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p
              className="text-xs tracking-[0.2em] uppercase mb-6"
              style={{
                fontFamily: "var(--font-lato), sans-serif",
                color: "oklch(0.55 0.02 70)",
              }}
            >
              {t("适用于", "Used For")}
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              {useCases.map((useCase, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-5 py-3"
                  style={{
                    background: "oklch(0.10 0.02 60)",
                    border: "1px solid oklch(0.20 0.02 60)",
                  }}
                >
                  <useCase.icon size={16} className="text-[oklch(0.72_0.10_70)]" />
                  <span
                    className="text-sm"
                    style={{
                      fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
                      color: "oklch(0.75 0.02 70)",
                    }}
                  >
                    {t(useCase.labelZh, useCase.labelEn)}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
