"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import {
  ArrowRight,
  TrendingUp,
  Heart,
  Compass,
  Zap,
  X,
  type LucideIcon,
} from "lucide-react";

const WA_LINK = "https://wa.me/6589418791";

type ServiceCard = {
  id: number;
  icon: LucideIcon;
  titleZh: string;
  titleEn: string;
  painZh: string;
  painEn: string;
  descZh: string;
  descEn: string;
  badgeZh: string;
  badgeEn: string;
  bulletZh: string[];
  bulletEn: string[];
  price: string;
  ctaZh: string;
  ctaEn: string;
  waMsg: string;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  imageSrc: string;
  imageAltZh: string;
  imageAltEn: string;
  detailTitleZh: string;
  detailTitleEn: string;
  detailDescZh: string;
  detailDescEn: string;
};

const services: ServiceCard[] = [
  {
    id: 1,
    icon: TrendingUp,
    titleZh: "事业不顺 · 财运不稳",
    titleEn: "Career Blocks & Unstable Wealth",
    painZh: "明明很努力，却总是留不住钱、抓不准机会，关键时候还容易判断失误。",
    painEn:
      "You work hard, yet money slips away, opportunities stay unclear, and key decisions often go wrong.",
    descZh:
      "通过奇门遁甲、风水布局与八字分析，帮助你看清时机、稳住财富、减少试错。适合事业瓶颈、收入起伏、投资犹豫与合作判断不清的人群。",
    descEn:
      "Using Qi Men Dun Jia, Feng Shui, and Bazi analysis to help you read timing, stabilize wealth, and reduce costly mistakes. Ideal for career stagnation, unstable income, investment hesitation, and unclear partnership decisions.",
    badgeZh: "赚钱与避险",
    badgeEn: "Wealth & Risk Control",
    bulletZh: ["事业方向判断", "财运与漏财点分析", "投资合作时机建议"],
    bulletEn: [
      "Career direction guidance",
      "Wealth leakage analysis",
      "Timing for investment and partnerships",
    ],
    price: "$288+",
    ctaZh: "预约财富咨询",
    ctaEn: "Book Wealth Consultation",
    waMsg: "你好启明大师，我想咨询事业不顺、财运不稳的问题。",
    accentColor: "oklch(0.72 0.12 70)",
    accentBg: "oklch(0.97 0.03 85)",
    accentBorder: "oklch(0.90 0.04 80)",
    imageSrc: "/Wealth.png",
    imageAltZh: "事业财富服务展示图",
    imageAltEn: "Career and wealth service visual",
    detailTitleZh: "事业与财富优化",
    detailTitleEn: "Career & Wealth Guidance",
    detailDescZh:
      "适合事业瓶颈、收入波动、投资犹豫、合作判断不清的人群。通过奇门遁甲、风水与命理系统，帮助客户在关键节点减少误判，稳住财富方向。",
    detailDescEn:
      "Designed for people facing career stagnation, unstable income, investment hesitation, or unclear partnership decisions. Through Qi Men Dun Jia, Feng Shui, and destiny analysis, Master Qiming helps reduce costly mistakes and stabilise your path forward.",
  },
  {
    id: 2,
    icon: Heart,
    titleZh: "感情不顺 · 情感疗愈",
    titleEn: "Relationship Struggles & Emotional Healing",
    painZh: "关系反复受伤、情绪长期内耗，明明想放下，却始终走不出来。",
    painEn:
      "Relationship wounds and emotional exhaustion keep repeating, even when you truly want to move on.",
    descZh:
      "结合清华大学积极心理学指导背景、多年易学疗愈经验与能量心理调频，帮助你修复情感创伤，重建内在力量与关系磁场。",
    descEn:
      "Combining a Tsinghua positive psychology background, years of Yi-based healing experience, and Energy Psychology Alignment to help you heal relationship wounds and rebuild inner strength.",
    badgeZh: "关系修复与内在重建",
    badgeEn: "Healing & Inner Reset",
    bulletZh: ["情感创伤修复", "关系失衡调理", "内耗与情绪改善"],
    bulletEn: [
      "Relationship healing",
      "Emotional balance support",
      "Inner exhaustion recovery",
    ],
    price: "$288+",
    ctaZh: "预约疗愈咨询",
    ctaEn: "Book Healing Consultation",
    waMsg: "你好启明大师，我想咨询感情不顺和情感疗愈问题。",
    accentColor: "oklch(0.68 0.14 20)",
    accentBg: "oklch(0.96 0.03 25)",
    accentBorder: "oklch(0.89 0.05 25)",
    imageSrc: "/Emotional.png",
    imageAltZh: "情感疗愈服务展示图",
    imageAltEn: "Emotional healing service visual",
    detailTitleZh: "情感疗愈与关系修复",
    detailTitleEn: "Emotional Healing & Relationship Support",
    detailDescZh:
      "适合感情反复受伤、长期内耗、睡眠受影响、走不出情绪困局的人群。帮助你从关系创伤与内在失衡中慢慢恢复，重建情绪稳定与内在力量。",
    detailDescEn:
      "Suitable for people experiencing relationship wounds, emotional exhaustion, poor sleep, or difficulty moving on. This service helps restore emotional balance, inner calm, and a stronger sense of self.",
  },
  {
    id: 3,
    icon: Compass,
    titleZh: "战略决策 · 关键判断",
    titleEn: "Strategic Decisions & Critical Timing",
    painZh: "面对合作、投资、转型或人生抉择，最怕方向选错，一步错、步步耗损。",
    painEn:
      "In business, investment, transitions, or life choices, one wrong move can lead to long-term loss.",
    descZh:
      "适用于企业主、管理者与关键转折期个人。通过奇门遁甲与整体格局判断，帮助你在关键节点做更稳、更准、更有利的选择。",
    descEn:
      "Designed for business owners, decision-makers, and individuals at major turning points. Master Qiming uses Qi Men Dun Jia and pattern analysis to support clearer and more advantageous decisions.",
    badgeZh: "企业与个人决策",
    badgeEn: "Business & Personal Strategy",
    bulletZh: ["企业合作判断", "投资转型分析", "人生方向决策"],
    bulletEn: [
      "Business decision support",
      "Investment and transition analysis",
      "Life direction clarity",
    ],
    price: "$388+",
    ctaZh: "预约决策咨询",
    ctaEn: "Book Strategy Consultation",
    waMsg: "你好启明大师，我想咨询战略决策与关键判断问题。",
    accentColor: "oklch(0.62 0.10 230)",
    accentBg: "oklch(0.96 0.02 240)",
    accentBorder: "oklch(0.88 0.03 235)",
    imageSrc: "/Strategic.png",
    imageAltZh: "战略决策服务展示图",
    imageAltEn: "Strategic decision service visual",
    detailTitleZh: "战略决策与关键判断",
    detailTitleEn: "Strategic Decision Guidance",
    detailDescZh:
      "适用于企业经营、投资时机、重大合作、跳槽转型、人生方向选择等关键节点。重点不只是判断吉凶，而是帮助你做更稳、更准、更有利的决策。",
    detailDescEn:
      "Suitable for business operations, investment timing, major partnerships, career transitions, and key life decisions. The focus is not just prediction, but helping you make stronger and more advantageous choices.",
  },
  {
    id: 4,
    icon: Zap,
    titleZh: "空间能量净化",
    titleEn: "Space Energy Clearing",
    painZh:
      "空间压抑、睡眠变差、情绪沉重，久住久待后，整个人的状态会被环境慢慢拖弱。",
    painEn:
      "A draining space can quietly affect your sleep, mood, energy, and daily wellbeing over time.",
    descZh:
      "针对家宅与办公空间的耗能、压迫、杂乱磁场问题，启明大师通过多年空间感知与净化经验，帮助改善睡眠、情绪、专注力与整体生活状态。",
    descEn:
      "For homes and workplaces with heavy, draining, or chaotic energy, Master Qiming uses years of space-sensing and clearing practice to improve sleep, mood, focus, and overall wellbeing.",
    badgeZh: "睡眠 · 情绪 · 状态改善",
    badgeEn: "Sleep · Mood · Wellbeing",
    bulletZh: ["空间负能量净化", "睡眠与情绪改善", "家宅与办公状态优化"],
    bulletEn: [
      "Space energy clearing",
      "Sleep and mood improvement",
      "Home and office optimization",
    ],
    price: "$288+",
    ctaZh: "预约空间净化",
    ctaEn: "Book Space Clearing",
    waMsg: "你好启明大师，我想咨询空间能量净化服务。",
    accentColor: "oklch(0.60 0.08 65)",
    accentBg: "oklch(0.96 0.02 75)",
    accentBorder: "oklch(0.88 0.03 70)",
    imageSrc: "/Space.png",
    imageAltZh: "空间能量净化展示图",
    imageAltEn: "Space energy clearing visual",
    detailTitleZh: "空间能量净化",
    detailTitleEn: "Space Energy Clearing",
    detailDescZh:
      "适合家宅压抑、睡眠变差、情绪沉重、空间久住不顺的情况。通过空间磁场净化与重整，帮助改善居住与办公状态，让人更容易恢复平静与专注。",
    detailDescEn:
      "Ideal for spaces that feel heavy, draining, emotionally oppressive, or difficult to rest in. This service helps reset the environment to support better sleep, mood, and daily wellbeing.",
  },
];

export default function ServiceCards() {
  const { t } = useLanguage();
  const [activeService, setActiveService] = useState<ServiceCard | null>(null);

  return (
    <section id="services" className="bg-[oklch(0.97_0.012_75)] py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-4xl text-center md:mb-16"
        >
          <p
            className="mb-3 text-xs uppercase tracking-[0.25em]"
            style={{
              fontFamily: "var(--font-lato), sans-serif",
              color: "oklch(0.60 0.08 65)",
            }}
          >
            {t("四大核心咨询方向", "Four Core Consultation Areas")}
          </p>

          <h2
            className="mb-5 text-3xl font-bold leading-tight md:text-5xl"
            style={{
              fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
              color: "oklch(0.15 0.02 60)",
            }}
          >
            {t("你现在最需要解决的，是哪一个？", "Which Area Needs Your Attention Most?")}
          </h2>

          <p
            className="text-sm leading-7 md:text-base"
            style={{
              fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
              color: "oklch(0.42 0.02 60)",
            }}
          >
            {t(
              "很多问题表面看是事业、感情或空间状态，背后往往是时机、环境与能量共同作用的结果。启明大师结合奇门遁甲、风水与命理系统，为你提供更清晰、更稳妥的判断。",
              "Many problems that appear to be about career, relationships, or the energy of a space are often shaped by timing, environment, and unseen energetic patterns. Master Qiming combines Qi Men Dun Jia, Feng Shui, and destiny analysis to offer clearer and steadier guidance."
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative flex flex-col overflow-hidden border border-[oklch(0.88_0.018_70)] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[oklch(0.60_0.08_65)] hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
            >
              <div
                className="absolute inset-x-0 top-0 z-10 h-[3px]"
                style={{ background: service.accentColor }}
              />

              <div className="relative h-56 w-full overflow-hidden md:h-64">
                <img
                  src={service.imageSrc}
                  alt={t(service.imageAltZh, service.imageAltEn)}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-8 xl:p-10">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center"
                    style={{
                      background: service.accentBg,
                      border: `1px solid ${service.accentBorder}`,
                    }}
                  >
                    <service.icon size={28} style={{ color: service.accentColor }} />
                  </div>

                  <span
                    className="px-2.5 py-1 text-right text-[0.65rem] font-semibold uppercase tracking-[0.16em]"
                    style={{
                      fontFamily: "var(--font-lato), sans-serif",
                      background: service.accentBg,
                      color: service.accentColor,
                      border: `1px solid ${service.accentBorder}`,
                    }}
                  >
                    {t(service.badgeZh, service.badgeEn)}
                  </span>
                </div>

                <h3
                  className="mb-4 text-2xl font-bold leading-[1.15] md:text-[30px]"
                  style={{
                    fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
                    color: "oklch(0.15 0.02 60)",
                  }}
                >
                  {t(service.titleZh, service.titleEn)}
                </h3>

                <p
                  className="mb-3 text-[15px] font-semibold md:text-[17px]"
                  style={{
                    fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
                    color: service.accentColor,
                  }}
                >
                  {t(service.painZh, service.painEn)}
                </p>

                <p
                  className="mb-5 text-sm md:text-[15px]"
                  style={{
                    fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
                    color: "oklch(0.48 0.02 60)",
                    lineHeight: 1.75,
                  }}
                >
                  {t(service.descZh, service.descEn)}
                </p>

                <ul className="mb-6 flex-grow space-y-2.5">
                  {(t(service.bulletZh, service.bulletEn) as string[]).map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm"
                      style={{
                        fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
                        color: "oklch(0.38 0.02 60)",
                      }}
                    >
                      <span
                        className="mt-[1px] text-sm leading-none"
                        style={{ color: service.accentColor }}
                      >
                        &#10003;
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <p
                  className="mb-5 text-2xl font-bold md:text-[30px]"
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    color: "oklch(0.15 0.02 60)",
                  }}
                >
                  {t(`${service.price} 起`, `From ${service.price}`)}
                </p>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => setActiveService(service)}
                    className="flex w-full items-center justify-center gap-2 border py-4 text-sm font-bold uppercase tracking-[0.12em] transition-all duration-300 hover:opacity-90"
                    style={{
                      fontFamily: "var(--font-lato), sans-serif",
                      borderColor: service.accentColor,
                      color: service.accentColor,
                      background: "transparent",
                    }}
                  >
                    {t("查看案例", "View Example")}
                  </button>

                  <a
                    href={`${WA_LINK}?text=${encodeURIComponent(service.waMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 py-4 text-sm font-bold uppercase tracking-[0.14em] transition-all duration-300 hover:opacity-90 hover:shadow-[0_10px_25px_rgba(0,0,0,0.12)]"
                    style={{
                      fontFamily: "var(--font-lato), sans-serif",
                      background: service.accentColor,
                      color: "oklch(0.98 0.005 75)",
                    }}
                  >
                    {t(service.ctaZh, service.ctaEn)}
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeService && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveService(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl overflow-hidden bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveService(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-black">
                  <img
                    src={activeService.imageSrc}
                    alt={t(activeService.imageAltZh, activeService.imageAltEn)}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-6 md:p-8">
                  <p
                    className="mb-3 text-xs uppercase tracking-[0.22em]"
                    style={{
                      fontFamily: "var(--font-lato), sans-serif",
                      color: activeService.accentColor,
                    }}
                  >
                    {t(activeService.badgeZh, activeService.badgeEn)}
                  </p>

                  <h3
                    className="mb-4 text-2xl font-bold md:text-4xl"
                    style={{
                      fontFamily:
                        "var(--font-cormorant), var(--font-noto-serif), serif",
                      color: "oklch(0.15 0.02 60)",
                    }}
                  >
                    {t(activeService.detailTitleZh, activeService.detailTitleEn)}
                  </h3>

                  <p
                    className="mb-6 text-sm leading-7 md:text-base"
                    style={{
                      fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
                      color: "oklch(0.42 0.02 60)",
                    }}
                  >
                    {t(activeService.detailDescZh, activeService.detailDescEn)}
                  </p>

                  <a
                    href={`${WA_LINK}?text=${encodeURIComponent(activeService.waMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] transition-all duration-300 hover:opacity-90"
                    style={{
                      fontFamily: "var(--font-lato), sans-serif",
                      background: activeService.accentColor,
                      color: "oklch(0.98 0.005 75)",
                    }}
                  >
                    {t(activeService.ctaZh, activeService.ctaEn)}
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
