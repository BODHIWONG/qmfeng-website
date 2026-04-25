"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import {
  Compass,
  Clock3,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Brain,
  Building2,
} from "lucide-react";

const gold = "oklch(0.72 0.12 70)";

const qimenPoints = [
  {
    icon: Clock3,
    zh: "判断时机",
    en: "Timing Clarity",
    descZh: "看清当下是否适合行动、调整、合作或暂停。",
    descEn: "Understand whether it is the right moment to act, adjust, cooperate or pause.",
  },
  {
    icon: MapPinned,
    zh: "看清方向",
    en: "Direction Awareness",
    descZh: "从方位、空间与局势关系中，寻找更有利的突破点。",
    descEn: "Identify more supportive directions through space, timing and situational patterns.",
  },
  {
    icon: ShieldCheck,
    zh: "识别风险",
    en: "Risk Awareness",
    descZh: "提前看见事业、财富、关系或合作中的潜在阻力。",
    descEn: "Recognise hidden resistance in career, wealth, relationships or partnerships.",
  },
];

const trustItems = [
  {
    icon: Sparkles,
    zh: "16+ 年实战经验",
    en: "16+ Years of Practice",
    descZh: "长期深耕奇门遁甲、风水布局、八字命理与空间能量调整。",
    descEn: "Long-term practice in Qi Men Dun Jia, Feng Shui, Bazi and space energy alignment.",
  },
  {
    icon: Building2,
    zh: "新加坡本地服务",
    en: "Singapore Local Expertise",
    descZh: "熟悉 HDB、Condo、办公室与商业空间的真实使用场景。",
    descEn: "Familiar with HDB, condo, office and commercial space needs in Singapore.",
  },
  {
    icon: Brain,
    zh: "心理学 + 东方智慧",
    en: "Psychology + Eastern Wisdom",
    descZh: "结合清华大学积极心理学指导师背景与传统术数实践，帮助客户稳定内在状态与外在方向。",
    descEn: "Combining positive psychology training with Eastern metaphysics to support inner stability and clearer direction.",
  },
];

export default function QimenMasterSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-[oklch(0.055_0.018_60)]">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, oklch(0.72 0.12 70 / 0.55), transparent)" }}
      />
      <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[oklch(0.72_0.12_70/0.08)] blur-3xl" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p
            className="mb-4 text-xs uppercase tracking-[0.28em]"
            style={{
              fontFamily: "var(--font-lato), sans-serif",
              color: gold,
            }}
          >
            {t("奇门遁甲 · 黄启明大师", "Qi Men Dun Jia · Master Huang Qiming")}
          </p>

          <h2
            className="mb-5 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
            style={{
              fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
              color: "oklch(0.98 0.01 75)",
            }}
          >
            {t(
              "奇门遁甲，不只是预测，而是一套东方决策系统",
              "Qi Men Dun Jia Is Not Only Prediction — It Is an Eastern Decision System"
            )}
          </h2>

          <p
            className="mx-auto max-w-3xl text-base leading-relaxed md:text-lg"
            style={{
              fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
              color: "oklch(0.73 0.025 70)",
            }}
          >
            {t(
              "奇门遁甲自古被称为“帝王之术”。它的核心不在于神秘，而在于通过时间、空间、方位、人物与事件之间的关系，判断趋势、识别风险，并找到更适合行动的时机与方向。",
              "Known historically as a strategic art, Qi Men Dun Jia studies the relationship between time, space, direction, people and events to reveal timing, risks and clearer action paths."
            )}
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-[oklch(0.72_0.12_70/0.24)] bg-[linear-gradient(135deg,oklch(0.095_0.02_60),oklch(0.065_0.018_60))] p-7 md:p-8"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[oklch(0.72_0.12_70/0.35)] bg-[oklch(0.72_0.12_70/0.10)]">
              <Compass className="text-[oklch(0.72_0.12_70)]" size={24} />
            </div>
            <h3
              className="mb-2 text-2xl font-semibold"
              style={{
                fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
                color: "oklch(0.96 0.01 75)",
              }}
            >
              {t("什么是奇门遁甲？", "What Is Qi Men Dun Jia?")}
            </h3>
            <p
              className="mb-6 text-sm leading-relaxed md:text-base"
              style={{
                fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
                color: "oklch(0.72 0.025 70)",
              }}
            >
              {t(
                "它不是简单的“算命”，而是一套结合天时、地利、人和的判断系统。通过分析时间盘、方位、能量流动与事件关系，帮助个人和企业主在事业、财富、感情、投资与合作中看清局势。",
                "It is not simple fortune-telling. It is a structured way to understand timing, direction and hidden patterns behind important life and business decisions."
              )}
            </p>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {qimenPoints.map((item) => (
                <div
                  key={item.zh}
                  className="rounded-xl border border-[oklch(0.72_0.12_70/0.16)] bg-black/20 p-4"
                >
                  <item.icon className="mb-3 text-[oklch(0.72_0.12_70)]" size={20} />
                  <p className="mb-1 text-sm font-semibold text-[oklch(0.92_0.015_75)]">
                    {t(item.zh, item.en)}
                  </p>
                  <p className="text-xs leading-relaxed text-[oklch(0.66_0.02_70)]">
                    {t(item.descZh, item.descEn)}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-[oklch(0.72_0.12_70/0.24)] bg-[linear-gradient(135deg,oklch(0.095_0.02_60),oklch(0.065_0.018_60))] p-7 md:p-8"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[oklch(0.72_0.12_70/0.35)] bg-[oklch(0.72_0.12_70/0.10)]">
              <Sparkles className="text-[oklch(0.72_0.12_70)]" size={24} />
            </div>
            <h3
              className="mb-2 text-2xl font-semibold"
              style={{
                fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
                color: "oklch(0.96 0.01 75)",
              }}
            >
              {t("关于黄启明大师", "About Master Huang Qiming")}
            </h3>
            <p
              className="mb-5 text-sm leading-relaxed md:text-base"
              style={{
                fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
                color: "oklch(0.72 0.025 70)",
              }}
            >
              {t(
                "黄启明大师长期深耕奇门遁甲、风水布局、八字命理与空间能量调整，拥有16+年传统术数与能量修行经验，为新加坡及东南亚客户提供事业财富、情感关系、战略决策与空间调整咨询。",
                "Master Huang Qiming has over 16 years of practice in Qi Men Dun Jia, Feng Shui, Bazi and space energy alignment, serving clients in Singapore and Southeast Asia."
              )}
            </p>
            <p
              className="text-sm leading-relaxed md:text-base"
              style={{
                fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
                color: "oklch(0.72 0.025 70)",
              }}
            >
              {t(
                "大师同时具备清华大学积极心理学指导师背景，并创立「能量心理调频」方法，将奇门、风水、命理与心理能量调整结合，帮助客户不只看清外在局势，也稳定内在状态，重新建立人生方向感。",
                "With a background as a Tsinghua University positive psychology instructor, he integrates Eastern metaphysics with emotional and mental energy alignment for clearer inner and outer direction."
              )}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 grid gap-4 md:grid-cols-3"
        >
          {trustItems.map((item) => (
            <div
              key={item.zh}
              className="rounded-2xl border border-[oklch(0.72_0.12_70/0.18)] bg-[oklch(0.08_0.018_60)] p-5"
            >
              <item.icon className="mb-4 text-[oklch(0.72_0.12_70)]" size={22} />
              <p className="mb-1 font-semibold text-[oklch(0.94_0.015_75)]">
                {t(item.zh, item.en)}
              </p>
              <p className="text-sm leading-relaxed text-[oklch(0.66_0.02_70)]">
                {t(item.descZh, item.descEn)}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="https://wa.me/6589418791"
            className="rounded-full px-7 py-3 text-sm font-semibold text-black transition hover:opacity-90"
            style={{ background: gold }}
          >
            {t("WhatsApp 咨询黄启明大师", "Consult Master Huang on WhatsApp")}
          </a>
          <a
            href="#services"
            className="rounded-full border border-[oklch(0.72_0.12_70/0.45)] px-7 py-3 text-sm font-semibold text-[oklch(0.86_0.08_70)] transition hover:bg-[oklch(0.72_0.12_70/0.10)]"
          >
            {t("了解四大咨询方向", "Explore Core Services")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
