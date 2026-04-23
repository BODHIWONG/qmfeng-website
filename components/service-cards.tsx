"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import {
  ArrowRight,
  TrendingUp,
  Heart,
  Compass,
  Zap,
  type LucideIcon,
} from "lucide-react";

type ServiceCard = {
  id: number;
  icon: LucideIcon;
  titleZh: string;
  titleEn: string;
  painZh: string;
  painEn: string;
  audienceZh: string;
  audienceEn: string;
  priceZh: string;
  priceEn: string;
  ctaZh: string;
  ctaEn: string;
  href: string;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  imageSrc: string;
  imageAltZh: string;
  imageAltEn: string;
};

const services: ServiceCard[] = [
  {
    id: 1,
    icon: TrendingUp,
    titleZh: "事业不顺 · 财运不稳",
    titleEn: "Career Struggles · Unstable Wealth",
    painZh: "明明很努力，却总是收入不稳、机会反复，关键时候还容易判断失误。",
    painEn:
      "You work hard, yet income stays unstable, opportunities slip, and important decisions often feel off.",
    audienceZh: "适合：事业瓶颈、收入波动、创业转型、投资合作判断不清的人。",
    audienceEn:
      "For career stagnation, unstable income, entrepreneurship, business expansion, and unclear investment or partnership decisions.",
    priceZh: "$288 起",
    priceEn: "From $288",
    ctaZh: "了解此类问题",
    ctaEn: "Explore This Path",
    href: "/wealth",
    accentColor: "oklch(0.72 0.12 70)",
    accentBg: "oklch(0.97 0.03 85)",
    accentBorder: "oklch(0.90 0.04 80)",
    imageSrc: "/Wealth.png",
    imageAltZh: "事业财富服务展示图",
    imageAltEn: "Career and wealth service visual",
  },
  {
    id: 2,
    icon: Heart,
    titleZh: "感情不顺 · 情感疗愈",
    titleEn: "Emotional Healing · Relationship Balance",
    painZh: "关系反复受伤、情绪长期内耗，想放下却始终走不出来。",
    painEn:
      "Relationship wounds and emotional exhaustion keep repeating, even when you want to move forward.",
    audienceZh: "适合：感情反复、婚姻压力、分手修复、长期内耗与情绪困扰的人。",
    audienceEn:
      "For repeated relationship struggles, marriage stress, break-up recovery, emotional exhaustion, and inner imbalance.",
    priceZh: "$288 起",
    priceEn: "From $288",
    ctaZh: "了解此类问题",
    ctaEn: "Explore This Path",
    href: "/healing",
    accentColor: "oklch(0.68 0.14 20)",
    accentBg: "oklch(0.96 0.03 25)",
    accentBorder: "oklch(0.89 0.05 25)",
    imageSrc: "/Emotional.png",
    imageAltZh: "情感疗愈服务展示图",
    imageAltEn: "Emotional healing service visual",
  },
  {
    id: 3,
    icon: Compass,
    titleZh: "战略决策 · 关键判断",
    titleEn: "Strategic Decisions · Critical Timing",
    painZh: "面对合作、投资、转型或人生抉择，最怕方向选错，一步错、步步耗损。",
    painEn:
      "In business, investment, transitions, or major life choices, one wrong decision can create long-term loss.",
    audienceZh: "适合：企业主、管理层、创业者，以及正处于关键转折期的人。",
    audienceEn:
      "For business owners, leaders, entrepreneurs, and individuals facing major turning points.",
    priceZh: "$388 起",
    priceEn: "From $388",
    ctaZh: "了解此类问题",
    ctaEn: "Explore This Path",
    href: "/decision",
    accentColor: "oklch(0.62 0.10 230)",
    accentBg: "oklch(0.96 0.02 240)",
    accentBorder: "oklch(0.88 0.03 235)",
    imageSrc: "/Strategic.png",
    imageAltZh: "战略决策服务展示图",
    imageAltEn: "Strategic decision service visual",
  },
  {
    id: 4,
    icon: Zap,
    titleZh: "空间能量净化",
    titleEn: "Space Energy Clearing",
    painZh: "空间压抑、睡眠变差、情绪沉重，久住之后整个人的状态都会被拖弱。",
    painEn:
      "A draining space can quietly affect your sleep, mood, focus, and daily wellbeing over time.",
    audienceZh: "适合：家宅压抑、睡眠变差、办公室状态不顺、长期感觉空间沉重的人。",
    audienceEn:
      "For people facing heavy home energy, poor sleep, workplace stagnation, and spaces that feel draining or oppressive.",
    priceZh: "$288 起",
    priceEn: "From $288",
    ctaZh: "了解此类问题",
    ctaEn: "Explore This Path",
    href: "/space-clearing",
    accentColor: "oklch(0.60 0.08 65)",
    accentBg: "oklch(0.96 0.02 75)",
    accentBorder: "oklch(0.88 0.03 70)",
    imageSrc: "/Space.png",
    imageAltZh: "空间能量净化展示图",
    imageAltEn: "Space energy clearing visual",
  },
];

export default function ServiceCards() {
  const { t } = useLanguage();

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
            {t("四大核心咨询方向", "Four Core Consultation Paths")}
          </p>

          <h2
            className="mb-5 text-3xl font-bold leading-tight md:text-5xl"
            style={{
              fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
              color: "oklch(0.15 0.02 60)",
            }}
          >
            {t("你现在最需要解决的，是哪一个？", "Which Problem Needs Attention First?")}
          </h2>

          <p
            className="text-sm leading-7 md:text-base"
            style={{
              fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
              color: "oklch(0.42 0.02 60)",
            }}
          >
            {t(
              "很多问题表面看是事业、感情或空间状态，背后往往是时机、环境与能量共同作用的结果。先判断问题类型，再决定如何布局，效率会高得多。",
              "Many problems that appear to be about career, relationships, or space are often shaped by timing, environment, and energy together. The first step is not guessing. It is identifying the real category of the problem."
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
                    {service.priceEn}
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
                  className="mb-6 text-sm md:text-[15px]"
                  style={{
                    fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
                    color: "oklch(0.48 0.02 60)",
                    lineHeight: 1.75,
                  }}
                >
                  {t(service.audienceZh, service.audienceEn)}
                </p>

                <div className="mt-auto flex items-center justify-between gap-4">
                  <p
                    className="text-xl font-bold md:text-2xl"
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      color: "oklch(0.15 0.02 60)",
                    }}
                  >
                    {t(service.priceZh, service.priceEn)}
                  </p>

                  <Link
                    href={service.href}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] transition-all duration-300 hover:opacity-90 hover:shadow-[0_10px_25px_rgba(0,0,0,0.12)]"
                    style={{
                      fontFamily: "var(--font-lato), sans-serif",
                      background: service.accentColor,
                      color: "oklch(0.98 0.005 75)",
                    }}
                  >
                    {t(service.ctaZh, service.ctaEn)}
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
