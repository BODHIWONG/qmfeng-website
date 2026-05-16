"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

const cases = [
  {
    num: "01",
    titleZh: "企业合作前 · 关键判断",
    titleEn: "Before Partnership · Critical Review",
    descZh: "客户面对一项重要合作机会，表面条件优厚，但内心一直犹豫。启明大师以奇门决策判断合作时机、人事关系与隐藏阻力，帮助客户看清该合作中的消耗点与风险节奏。客户最终调整谈判条件，避免了后续更高成本的错误承诺。",
    descEn: "A client faced an important partnership with attractive surface conditions but persistent hesitation. Through Qimen Strategy, Master Qiming reviewed timing, people dynamics and hidden resistance, helping the client see the potential drain and risk rhythm. The client adjusted the negotiation terms and avoided a higher-cost commitment.",
    metricLabelZh: "决策价值",
    metricLabelEn: "Decision Value",
    metricZh: "合作风险提前识别，谈判条件重新调整",
    metricEn: "Partnership risk identified before commitment",
  },
  {
    num: "02",
    titleZh: "业务转型前 · 方向选择",
    titleEn: "Before Business Transition · Direction Choice",
    descZh: "一位企业主计划转型新业务，但同时面对多个方向，迟迟无法决定。启明大师通过奇门局势判断，比较不同路径的时机、资源消耗与后续风险，帮助客户把优先级重新排序，先守住核心业务，再逐步推进新方向。",
    descEn: "A business owner planned to transition into a new direction but was caught between several options. Using Qimen Strategy, Master Qiming compared timing, resource cost and risk patterns across the paths, helping the client reorder priorities, protect the core business first and move into the new direction step by step.",
    metricLabelZh: "战略价值",
    metricLabelEn: "Strategic Value",
    metricZh: "方向排序更清晰，减少盲目转型消耗",
    metricEn: "Clearer priorities and reduced transition waste",
  },
  {
    num: "03",
    titleZh: "重大行动前 · 时机判断",
    titleEn: "Before Major Action · Timing Review",
    descZh: "客户准备快速推进一项重要计划，但局势中存在明显未稳定因素。启明大师从时机、人物、行动节奏与潜在阻力中判断，当下不宜贸然推进，而应先调整内部条件。客户延后行动并重新准备，后续执行节奏明显更稳。",
    descEn: "A client was ready to move quickly on an important plan, but the situation still carried unstable factors. Master Qiming reviewed timing, key people, action rhythm and hidden resistance, advising against rushing and recommending internal preparation first. The client delayed the move, prepared more fully and later executed with a steadier rhythm.",
    metricLabelZh: "行动价值",
    metricLabelEn: "Action Value",
    metricZh: "避免贸然推进，行动节奏更稳",
    metricEn: "Avoided rushed action and improved execution rhythm",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function CasesSection() {
  const { t } = useLanguage();

  return (
    <section id="cases" className="bg-[oklch(0.98_0.01_70)] py-20 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl md:mb-20"
        >
          <p className="mb-4 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-[oklch(0.60_0.08_65)]" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
            {t("奇门决策案例", "Qimen Strategy Case Studies")}
          </p>
          <h2 className="mb-4 text-4xl font-bold leading-tight md:text-5xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.15_0.02_60)" }}>
            {t("真实决策场景，清晰判断价值", "Real Decision Scenarios, Clear Strategic Value")}
          </h2>
          <p className="text-base leading-relaxed text-[oklch(0.50_0.02_65)]" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}>
            {t(
              "以下案例以匿名方式呈现，重点不是夸大结果，而是展示启明遁甲如何在关键行动前帮助客户看清时机、方向、人事关系与局势风险。",
              "The following anonymised cases do not exaggerate outcomes. They show how Qimen Strategy helps clients read timing, direction, people dynamics and risk before critical action."
            )}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="group"
            >
              <div className="flex h-full flex-col border border-[oklch(0.25_0.02_60)] bg-white p-8">
                <div
                  className="mb-6 text-6xl font-bold opacity-15"
                  style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.60_0.08_65)" }}
                >
                  {c.num}
                </div>

                <h3 className="mb-4 text-lg font-bold leading-snug md:text-xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.15_0.02_60)" }}>
                  {t(c.titleZh, c.titleEn)}
                </h3>

                <p className="mb-6 flex-grow text-sm leading-relaxed text-[oklch(0.45_0.02_60)]" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}>
                  {t(c.descZh, c.descEn)}
                </p>

                <div className="border-t border-[oklch(0.90_0.01_70)] pt-4">
                  <p className="mb-2 text-base font-bold md:text-lg" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.60_0.08_65)" }}>
                    {t(c.metricLabelZh, c.metricLabelEn)}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[oklch(0.55_0.02_65)]" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
                    {t(c.metricZh, c.metricEn)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
