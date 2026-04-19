"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

const cases = [
  {
    num: "01",
    titleZh: "HDB 新组屋 · 转运格局",
    titleEn: "New HDB Unit · Transformation Layout",
    descZh: "一位住户搬入新HDB后，总感到疲惫无力，家人关系紧张。大师通过八字分析，发现卧室布局触犯了「死门」之象，建议调整床位和文昌位，加入特定能量摆件。搬家后三个月，住户反馈精力明显改善，家庭氛围和谐。",
    descEn: "A family moved into a new HDB unit but experienced constant fatigue and family tension. Master Qiming's Bazi analysis revealed the bedroom triggered a 'death sector' pattern. After adjusting bed placement and activating the Wenchang corner with curated artifacts, the family reported renewed energy and improved harmony within three months.",
    metricLabel: "+340%",
    metric: "Energy Level & Family Harmony Improvement",
  },
  {
    num: "02",
    titleZh: "中心商业区 · 办公室旺财",
    titleEn: "CBD Office · Prosperity Layout",
    descZh: "一家创业型企业在中心商业区租赁了办公室，但三个月内业绩停滞。大师勘察发现收银台对着走廊「泄气」，建议重新布局并放置铜师傅招财神像。同时根据CEO的八字选择最优的「贵人方位」安排办公桌。实施后的半年，企业营收增长45%。",
    descEn: "A startup's CBD office faced stagnant revenue for three months despite good market conditions. Master Qiming's site visit revealed the 'money flow' was leaking toward the corridor. After repositioning desks, installing Tongshifu bronze prosperity deities, and placing the CEO's desk in his personal 'Noble Person sector' via Bazi analysis, revenue surged 45% within six months.",
    metricLabel: "+45%",
    metric: "Revenue Growth (6 Months)",
  },
  {
    num: "03",
    titleZh: "豪宅能量净化 · 情感疗愈",
    titleEn: "Luxury Residence · Emotional Healing",
    descZh: "一位高净值客户的别墅虽装修豪华，但家人频繁争吵，业主深感压抑。大师通过奇门遁甲精准定位了宅内的「困顿之地」和「生机之地」，建议进行空间净化，并通过选择吉日进行能量仪式。处理后两周内，客户反馈家庭气场明显改善，每个人都感到放松和开放。",
    descEn: "Despite luxurious decor, a HNW family's home bred constant conflict and emotional exhaustion. Using Qimen Dunjia analysis, Master Qiming identified the 'stagnation zones' and 'vital zones' within the residence. After precise space clearing ceremonies conducted on an auspicious date, the family reported palpable shift in energy within two weeks—everyone felt more relaxed and emotionally open.",
    metricLabel: "100%",
    metric: "Family Satisfaction & Peace Restored",
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
    <section id="cases" className="py-20 md:py-32 bg-[oklch(0.98_0.01_70)]">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20 max-w-2xl"
        >
          <p className="text-[0.6rem] tracking-[0.25em] uppercase mb-4 font-semibold text-[oklch(0.60_0.08_65)]" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
            {t("案例见证", "Case Studies")}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.15_0.02_60)" }}>
            {t("真实改变，数据说话", "Real Transformations, Measurable Results")}
          </h2>
          <p className="text-base leading-relaxed text-[oklch(0.50_0.02_65)]" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}>
            {t(
              "这些案例来自16年服务过的5000多位客户。每一个故事都是一次能量的觉醒，每一个数据都是人生轨迹的改变。",
              "Drawn from 16 years serving 5000+ clients. Each case represents an energy awakening; each metric reflects a life transformed."
            )}
          </p>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-3 gap-8">
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
              <div className="bg-white p-8 h-full flex flex-col border border-[oklch(0.25_0.02_60)]">
                {/* Case Number */}
                <div
                  className="text-6xl font-bold mb-6 opacity-15"
                  style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.60_0.08_65)" }}
                >
                  {c.num}
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold mb-4 leading-snug" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.15_0.02_60)" }}>
                  {t(c.titleZh, c.titleEn)}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-6 text-[oklch(0.45_0.02_60)] flex-grow" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}>
                  {t(c.descZh, c.descEn)}
                </p>

                {/* Metric */}
                <div className="border-t border-[oklch(0.90_0.01_70)] pt-4">
                  <p className="text-2xl md:text-3xl font-bold mb-1" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.60_0.08_65)" }}>
                    {c.metricLabel}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[oklch(0.55_0.02_65)]" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
                    {t(c.metric, c.metric)}
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
