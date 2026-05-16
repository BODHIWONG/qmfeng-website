"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { Target, Shield, TrendingUp, Briefcase, Users, Compass, AlertTriangle } from "lucide-react";

const benefits = [
  { icon: Target, labelZh: "看清时机", labelEn: "Read Timing" },
  { icon: Compass, labelZh: "判断方向", labelEn: "Clarify Direction" },
  { icon: Shield, labelZh: "识别风险", labelEn: "Map Risk" },
];

const useCases = [
  { icon: Briefcase, labelZh: "商业决策", labelEn: "Business Decisions" },
  { icon: TrendingUp, labelZh: "投资与扩张", labelEn: "Investment & Expansion" },
  { icon: Users, labelZh: "合作与人事", labelEn: "Partnerships & People" },
  { icon: AlertTriangle, labelZh: "风险与转型", labelEn: "Risk & Transition" },
  { icon: Compass, labelZh: "人生方向", labelEn: "Life Direction" },
];

export default function DifferentiationSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-[oklch(0.06_0.02_60)] py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="mb-4 text-xs uppercase tracking-[0.25em]"
              style={{ fontFamily: "var(--font-lato), sans-serif", color: "oklch(0.72 0.12 70)" }}
            >
              {t("为什么是启明遁甲", "Why Qimen Strategy")}
            </p>

            <h2
              className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl"
              style={{
                fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
                color: "oklch(0.98 0.01 75)",
              }}
            >
              {t("不是娱乐化算命，而是东方智慧决策系统", "Not Fortune Telling — An Eastern Wisdom Decision System")}
            </h2>

            <p
              className="mb-12 text-xl md:text-2xl"
              style={{
                fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
                color: "oklch(0.72 0.10 70)",
              }}
            >
              {t(
                "以奇门遁甲为根基，转化为现代关键决策前的战略判断。",
                "Rooted in Qi Men Dun Jia, translated into strategic judgment before critical decisions."
              )}
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-12 max-w-3xl text-base leading-relaxed md:text-lg"
            style={{
              fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
              color: "oklch(0.65 0.02 70)",
            }}
          >
            {t(
              "黄启明大师以 16+ 年奇门遁甲实战经验，帮助企业主、创始人、高管与个人在关键行动前，看清时机、方向、人事关系与局势风险。启明遁甲的重点不是制造神秘，而是提供更清醒、更可执行的决策视角。",
              "With 16+ years of practical Qi Men Dun Jia experience, Master Huang Qiming helps business owners, founders, executives and individuals read timing, direction, people dynamics and risk before important moves. Qimen Strategy is not about creating mystery; it is about clearer, more actionable strategic perspective."
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16 grid grid-cols-3 gap-6 md:gap-12"
          >
            {benefits.map((benefit, i) => (
              <div key={i} className="flex flex-col items-center">
                <div
                  className="mb-4 flex h-14 w-14 items-center justify-center md:h-16 md:w-16"
                  style={{
                    background: "oklch(0.72 0.12 70 / 0.1)",
                    border: "1px solid oklch(0.72 0.12 70 / 0.3)",
                  }}
                >
                  <benefit.icon size={28} className="text-[oklch(0.72_0.12_70)]" />
                </div>
                <p
                  className="text-sm font-semibold md:text-base"
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p
              className="mb-6 text-xs uppercase tracking-[0.2em]"
              style={{ fontFamily: "var(--font-lato), sans-serif", color: "oklch(0.55 0.02 70)" }}
            >
              {t("适用于关键决策场景", "Used For Critical Decision Scenarios")}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {useCases.map((useCase, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-5 py-3"
                  style={{ background: "oklch(0.10 0.02 60)", border: "1px solid oklch(0.20 0.02 60)" }}
                >
                  <useCase.icon size={16} className="text-[oklch(0.72_0.10_70)]" />
                  <span
                    className="text-sm"
                    style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif", color: "oklch(0.75 0.02 70)" }}
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
