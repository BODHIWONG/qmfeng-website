"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import {
  Target,
  Shield,
  TrendingUp,
  Briefcase,
  Users,
  Compass,
  AlertTriangle,
  MessageCircle,
} from "lucide-react";

const WA_LINK = "https://wa.me/6589418791";

const benefits = [
  {
    icon: Target,
    labelZh: "该不该动",
    labelEn: "Should You Move?",
    descZh: "判断当前时机是否支持行动。有些机会表面很好，实际却是消耗。",
    descEn: "Read whether the timing supports action. Some opportunities look attractive but quietly drain resources.",
  },
  {
    icon: Compass,
    labelZh: "往哪里动",
    labelEn: "Where to Move?",
    descZh: "看清真正的突破口。方向没看清，越努力，损耗越大。",
    descEn: "Identify the real opening. When direction is unclear, more effort can create greater loss.",
  },
  {
    icon: Shield,
    labelZh: "和谁一起动",
    labelEn: "Who to Move With?",
    descZh: "识别人事关系与隐藏风险。人不稳，局就不稳。",
    descEn: "Read people dynamics and hidden risk. When the people are unstable, the whole structure becomes unstable.",
  },
];

const useCases = [
  {
    icon: Briefcase,
    labelZh: "商业方向",
    labelEn: "Business Direction",
    descZh: "是否继续当前路线，还是调整、转型或停止消耗。",
    descEn: "Whether to continue, adjust, transform or stop unnecessary loss.",
  },
  {
    icon: TrendingUp,
    labelZh: "投资扩张",
    labelEn: "Investment & Expansion",
    descZh: "是否适合开店、扩大团队、投入广告或进入新市场。",
    descEn: "Whether to open, expand, advertise or enter a new market.",
  },
  {
    icon: Users,
    labelZh: "合作人事",
    labelEn: "Partnership & People",
    descZh: "判断合伙人、关键员工与团队关系是否稳定可靠。",
    descEn: "Assess partners, key people and team stability before committing trust.",
  },
  {
    icon: AlertTriangle,
    labelZh: "风险转型",
    labelEn: "Risk & Transition",
    descZh: "看清当前是进攻、守成、等待、谈判，还是撤退止损。",
    descEn: "See whether to advance, hold, wait, negotiate or withdraw.",
  },
  {
    icon: Compass,
    labelZh: "人生选择",
    labelEn: "Life Strategy",
    descZh: "事业、家庭、教育、搬迁与个人方向的重大决定。",
    descEn: "Important decisions around career, family, education, relocation and personal direction.",
  },
];

export default function DifferentiationSection() {
  const { t } = useLanguage();
  const ctaMessage = t(
    "黄启明大师您好，我想预约一次启明遁甲关键决策分析。",
    "Hi Master Huang, I would like to book a Qimen Strategy decision clarity session."
  );

  return (
    <section className="bg-[oklch(0.06_0.02_60)] py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-5xl text-center">
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
              {t("启明遁甲 · 关键行动前的决策清晰度", "Qimen Strategy · Strategic Clarity Before You Move")}
            </p>

            <h2
              className="mx-auto mb-6 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
              style={{
                fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
                color: "oklch(0.98 0.01 75)",
              }}
            >
              {t(
                "在投入时间、金钱与信任之前，先看清局势",
                "Before You Invest Time, Money and Trust, See the Whole Situation"
              )}
            </h2>

            <p
              className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed md:text-2xl"
              style={{
                fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
                color: "oklch(0.72 0.10 70)",
              }}
            >
              {t(
                "启明遁甲 Qimen Strategy 帮助企业主、创业者、高管与个人，在商业合作、投资扩张、团队人事与人生重大选择前，看清时机、方向、人事关系与隐藏风险。",
                "Qimen Strategy helps business owners, founders, executives and individuals read timing, direction, people dynamics and hidden risk before partnerships, expansion, team decisions and major life choices."
              )}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-10 max-w-3xl space-y-5 text-base leading-relaxed md:text-lg"
            style={{
              fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
              color: "oklch(0.65 0.02 70)",
            }}
          >
            <p>
              {t(
                "黄启明大师以 16+ 年奇门遁甲、风水布局与实战咨询经验，帮助客户在关键行动前做出更清醒的判断。",
                "With 16+ years of practical experience in Qi Men Dun Jia, Feng Shui alignment and strategic consultation, Master Huang Qiming helps clients make clearer decisions before important moves."
              )}
            </p>
            <p>
              {t(
                "很多失败，并不是因为不努力，而是因为时机未到却急着推进，方向已经偏了却继续投入，合作对象不稳却过早相信，环境形成阻力却误以为只是暂时困难。",
                "Many failures do not happen because people lack effort. They happen because the timing is immature, the direction has shifted, the wrong people are trusted too early, or resistance in the environment is mistaken as a temporary obstacle."
              )}
            </p>
            <p className="font-semibold text-[oklch(0.84_0.04_70)]">
              {t(
                "启明遁甲的价值，不是给你一句模糊的安慰，而是在行动之前，帮助你看清：该进，还是该守；该谈，还是该停；该换人，还是该换方向；该继续投入，还是及时止损。",
                "The value of Qimen Strategy is not vague comfort. It helps you see whether to advance or hold, negotiate or stop, change people or direction, continue investing or cut losses in time."
              )}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-14 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href={`${WA_LINK}?text=${encodeURIComponent(ctaMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border border-[oklch(0.72_0.12_70/0.55)] bg-[oklch(0.60_0.08_65)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[oklch(0.98_0.005_75)] shadow-lg transition-all duration-300 hover:bg-[oklch(0.68_0.10_70)]"
              style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}
            >
              <MessageCircle size={17} />
              {t("预约关键决策分析", "Book a Qimen Strategy Session")}
            </a>
            <p
              className="text-xs uppercase tracking-[0.18em]"
              style={{ fontFamily: "var(--font-lato), sans-serif", color: "oklch(0.55 0.02 70)" }}
            >
              {t("Get Strategic Clarity Before You Move", "Get Strategic Clarity Before You Move")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16 grid grid-cols-1 gap-5 sm:grid-cols-3 md:gap-7"
          >
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="flex flex-col items-center border border-[oklch(0.20_0.02_60)] bg-[oklch(0.10_0.02_60/0.55)] px-5 py-7 transition-all duration-300 hover:border-[oklch(0.72_0.12_70/0.45)] hover:bg-[oklch(0.12_0.025_60)]"
              >
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
                  className="mb-3 text-base font-semibold md:text-lg"
                  style={{
                    fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
                    color: "oklch(0.92 0.02 70)",
                  }}
                >
                  {t(benefit.labelZh, benefit.labelEn)}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif", color: "oklch(0.58 0.02 70)" }}
                >
                  {t(benefit.descZh, benefit.descEn)}
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
              {t("适用于以下关键决策场景", "Used For Critical Decision Scenarios")}
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {useCases.map((useCase, i) => (
                <div
                  key={i}
                  className="group border border-[oklch(0.20_0.02_60)] bg-[oklch(0.10_0.02_60)] p-5 text-left transition-all duration-300 hover:border-[oklch(0.72_0.12_70/0.45)] hover:bg-[oklch(0.12_0.025_60)]"
                >
                  <div className="mb-3 flex items-center gap-2">
                    <useCase.icon size={16} className="text-[oklch(0.72_0.10_70)]" />
                    <span
                      className="text-sm font-semibold text-[oklch(0.84_0.02_70)]"
                      style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}
                    >
                      {t(useCase.labelZh, useCase.labelEn)}
                    </span>
                  </div>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif", color: "oklch(0.55 0.02 70)" }}
                  >
                    {t(useCase.descZh, useCase.descEn)}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
