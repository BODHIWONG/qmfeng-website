"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import {
  Clock3,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Brain,
  Building2,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

const gold = "oklch(0.72 0.12 70)";
const MASTER_IMAGE = "/master-home-hero.png";
const WA_LINK =
  "https://wa.me/6589418791?text=Hello%20Master%20Qiming%2C%20I%20would%20like%20to%20understand%20Qi%20Men%20Dun%20Jia%20and%20Feng%20Shui%20consultation.";

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
    <section className="relative overflow-hidden bg-black py-20 text-white md:py-28">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, oklch(0.72 0.12 70 / 0.55), transparent)" }}
      />
      <div className="absolute -top-40 right-1/4 h-80 w-80 rounded-full bg-[oklch(0.72_0.12_70/0.08)] blur-3xl" />

      <div className="container relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="mb-4 text-xs uppercase tracking-[0.28em]"
              style={{ fontFamily: "var(--font-lato), sans-serif", color: gold }}
            >
              {t("奇门遁甲 · 黄启明大师", "Qi Men Dun Jia · Master Huang Qiming")}
            </p>

            <h2
              className="mb-5 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
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
              className="max-w-2xl text-base leading-relaxed md:text-lg"
              style={{
                fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
                color: "oklch(0.76 0.025 70)",
              }}
            >
              {t(
                "奇门遁甲自古被称为“帝王之术”。它的核心不在于神秘，而在于通过时间、空间、方位、人物与事件之间的关系，判断趋势、识别风险，并找到更适合行动的时机与方向。",
                "Known historically as a strategic art, Qi Men Dun Jia studies the relationship between time, space, direction, people and events to reveal timing, risks and clearer action paths."
              )}
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {qimenPoints.map((item) => (
                <div
                  key={item.zh}
                  className="rounded-2xl border border-[oklch(0.72_0.12_70/0.20)] bg-[oklch(0.09_0.018_60/0.78)] p-4 backdrop-blur"
                >
                  <item.icon className="mb-3 text-[oklch(0.72_0.12_70)]" size={21} />
                  <p className="mb-1 text-sm font-semibold text-[oklch(0.94_0.015_75)]">
                    {t(item.zh, item.en)}
                  </p>
                  <p className="text-xs leading-relaxed text-[oklch(0.68_0.02_70)]">
                    {t(item.descZh, item.descEn)}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-[oklch(0.72_0.12_70/0.22)] bg-[linear-gradient(135deg,oklch(0.10_0.02_60/0.92),oklch(0.065_0.018_60/0.92))] p-6">
              <h3
                className="mb-3 text-2xl font-semibold"
                style={{
                  fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
                  color: "oklch(0.96 0.01 75)",
                }}
              >
                {t("关于黄启明大师", "About Master Huang Qiming")}
              </h3>
              <p className="text-sm leading-relaxed text-[oklch(0.74_0.025_70)] md:text-base">
                {t(
                  "黄启明大师长期深耕奇门遁甲、风水布局、八字命理与空间能量调整，拥有16+年传统术数与能量修行经验。大师同时具备清华大学积极心理学指导师背景，并创立「能量心理调频」方法，帮助客户不只看清外在局势，也稳定内在状态，重新建立人生方向感。",
                  "Master Huang Qiming has over 16 years of practice in Qi Men Dun Jia, Feng Shui, Bazi and space energy alignment. With a background as a Tsinghua University positive psychology instructor, he integrates Eastern metaphysics with emotional and mental energy alignment for clearer inner and outer direction."
                )}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full px-7 py-3 text-sm font-bold text-black transition hover:opacity-90"
                style={{ background: gold }}
              >
                <MessageCircle size={18} />
                {t("WhatsApp 咨询黄启明大师", "Consult Master Huang on WhatsApp")}
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[oklch(0.72_0.12_70/0.45)] px-7 py-3 text-sm font-bold text-[oklch(0.88_0.08_70)] transition hover:bg-[oklch(0.72_0.12_70/0.10)]"
              >
                {t("了解四大咨询方向", "Explore Core Services")}
                <ArrowRight size={17} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-[oklch(0.72_0.12_70/0.25)] bg-[oklch(0.08_0.018_60)] shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
              <img
                src={MASTER_IMAGE}
                alt="Master Huang Qiming practising Qi Men Dun Jia and Feng Shui in Singapore"
                className="aspect-[4/3] w-full object-cover object-left md:aspect-[16/13]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                <p className="text-xs uppercase tracking-[0.24em] text-[oklch(0.78_0.10_70)]">
                  {t("Qiming Feng Shui Singapore", "Qiming Feng Shui Singapore")}
                </p>
                <p
                  className="mt-2 text-2xl font-semibold text-[oklch(0.98_0.01_75)]"
                  style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
                >
                  {t("以奇门看时局，以风水稳格局", "See Timing with Qi Men, Steady Life with Feng Shui")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 grid gap-4 md:grid-cols-3"
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
      </div>
    </section>
  );
}
