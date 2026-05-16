"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import {
  ArrowRight,
  Crown,
  Gem,
  TrendingUp,
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
  recommended?: boolean;
};

const services: ServiceCard[] = [
  {
    id: 1,
    icon: Crown,
    titleZh: "单项奇门决策咨询",
    titleEn: "Single Qimen Strategy Session",
    painZh: "针对一个关键商业或人生决定，看清时机、方向、人事与风险。",
    painEn:
      "For one critical business or life decision, clarify timing, direction, people dynamics and risk.",
    audienceZh: "适合：合作、投资、签约、任用、转型或重大方向判断。",
    audienceEn:
      "For partnership, investment, signing, key appointment, transition or major direction decisions.",
    priceZh: "S$980 / 次",
    priceEn: "S$980 / session",
    ctaZh: "查看单项咨询",
    ctaEn: "View Session",
    href: "/decision",
    accentColor: "oklch(0.60 0.08 65)",
    accentBg: "oklch(0.96 0.02 75)",
    accentBorder: "oklch(0.88 0.03 70)",
    imageSrc: "/Strategic.png",
    imageAltZh: "单项奇门决策咨询",
    imageAltEn: "Single Qimen Strategy session visual",
  },
  {
    id: 2,
    icon: TrendingUp,
    titleZh: "季度奇门决策顾问",
    titleEn: "Quarterly Qimen Strategy Advisory",
    painZh: "企业主推荐起步方案，用季度陪伴式咨询支持持续关键决策。",
    painEn:
      "The recommended starting point for business owners who need ongoing decision support across a quarter.",
    audienceZh: "适合：企业转型、业务扩张、团队调整、合作谈判与阶段性复盘。",
    audienceEn:
      "For business transition, expansion, team adjustment, negotiation and quarterly decision review.",
    priceZh: "S$2,800 / 季度",
    priceEn: "S$2,800 / quarter",
    ctaZh: "查看季度顾问",
    ctaEn: "View Quarterly Advisory",
    href: "/qimen-strategy-business",
    accentColor: "oklch(0.72 0.12 70)",
    accentBg: "oklch(0.97 0.03 85)",
    accentBorder: "oklch(0.90 0.04 80)",
    imageSrc: "/Wealth.png",
    imageAltZh: "季度奇门决策顾问",
    imageAltEn: "Quarterly Qimen Strategy advisory visual",
    recommended: true,
  },
  {
    id: 3,
    icon: Crown,
    titleZh: "年度奇门决策顾问",
    titleEn: "Annual Qimen Strategy Advisory",
    painZh: "为企业主、创始人与长期决策者提供持续判断支持。",
    painEn:
      "Ongoing decision advisory support for business owners, founders and long-term decision makers.",
    audienceZh: "适合：年度规划、季度复盘、关键合作、任用、扩张与长期方向。",
    audienceEn:
      "For annual planning, quarterly reviews, key partnerships, appointments, expansion and long-term direction.",
    priceZh: "S$9,800 / 年度",
    priceEn: "S$9,800 / year",
    ctaZh: "查看年度顾问",
    ctaEn: "View Annual Advisory",
    href: "/qimen-strategy-business",
    accentColor: "oklch(0.64 0.09 70)",
    accentBg: "oklch(0.96 0.02 75)",
    accentBorder: "oklch(0.88 0.03 70)",
    imageSrc: "/Emotional.png",
    imageAltZh: "年度奇门决策顾问",
    imageAltEn: "Annual Qimen Strategy advisory visual",
  },
  {
    id: 4,
    icon: Gem,
    titleZh: "重大项目奇门决策顾问",
    titleEn: "Major Project Qimen Strategy Advisory",
    painZh: "针对重大商业项目、转型升级、跨境拓展与高价值战略布局。",
    painEn:
      "For major business projects, transformation, cross-border expansion and high-value strategic moves.",
    audienceZh: "适合：重大项目、企业重组、品牌升级与高标的合作。",
    audienceEn:
      "For major projects, restructuring, brand transformation and high-value partnerships.",
    priceZh: "S$25,000 起 / 项目",
    priceEn: "From S$25,000 / project",
    ctaZh: "查看项目顾问",
    ctaEn: "View Project Advisory",
    href: "/qimen-strategy-business",
    accentColor: "oklch(0.60 0.08 65)",
    accentBg: "oklch(0.96 0.02 75)",
    accentBorder: "oklch(0.88 0.03 70)",
    imageSrc: "/Space.png",
    imageAltZh: "重大项目奇门决策顾问",
    imageAltEn: "Major project Qimen Strategy advisory visual",
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
            style={{ fontFamily: "var(--font-lato), sans-serif", color: "oklch(0.60 0.08 65)" }}
          >
            {t("奇门决策顾问方案", "Qimen Strategy Advisory Programs")}
          </p>

          <h2
            className="mb-5 text-3xl font-bold leading-tight md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.15 0.02 60)" }}
          >
            {t("关键决定前，先看清局势", "See the Situation Clearly Before You Decide")}
          </h2>

          <p
            className="text-sm leading-7 md:text-base"
            style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif", color: "oklch(0.42 0.02 60)" }}
          >
            {t(
              "启明遁甲以 16 年奇门决策实战经验为根基，长期服务企业主与个人关键决策。所有咨询均为预约制，根据问题背景进行私密判断。",
              "Qimen Strategy is rooted in 16 years of practical Qimen decision advisory experience, serving business owners and individuals facing critical decisions. All sessions are by appointment and based on private context review."
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
              className={`relative flex flex-col overflow-hidden border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)] ${
                service.recommended
                  ? "border-[oklch(0.72_0.12_70)] shadow-[0_16px_44px_rgba(190,134,40,0.14)]"
                  : "border-[oklch(0.88_0.018_70)] hover:border-[oklch(0.60_0.08_65)]"
              }`}
            >
              {service.recommended && (
                <div className="absolute right-5 top-5 z-20 bg-[oklch(0.72_0.12_70)] px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-black">
                  {t("最推荐", "Most Recommended")}
                </div>
              )}

              <div className="absolute inset-x-0 top-0 z-10 h-[3px]" style={{ background: service.accentColor }} />

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
                    style={{ background: service.accentBg, border: `1px solid ${service.accentBorder}` }}
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
                    {t("预约制", "By Appointment")}
                  </span>
                </div>

                <h3
                  className="mb-4 text-2xl font-bold leading-[1.15] md:text-[30px]"
                  style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.15 0.02 60)" }}
                >
                  {t(service.titleZh, service.titleEn)}
                </h3>

                <p
                  className="mb-3 text-[15px] font-semibold md:text-[17px]"
                  style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif", color: service.accentColor }}
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
                    style={{ fontFamily: "var(--font-cormorant), serif", color: "oklch(0.15 0.02 60)" }}
                  >
                    {t(service.priceZh, service.priceEn)}
                  </p>

                  <Link
                    href={service.href}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] transition-all duration-300 hover:opacity-90 hover:shadow-[0_10px_25px_rgba(0,0,0,0.12)]"
                    style={{ fontFamily: "var(--font-lato), sans-serif", background: service.accentColor, color: "oklch(0.98 0.005 75)" }}
                  >
                    {t(service.ctaZh, service.ctaEn)}
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border border-[oklch(0.72_0.12_70)] bg-black px-6 py-5 text-center text-white md:flex-row md:text-left">
          <div className="flex items-center gap-3">
            <Zap className="text-[oklch(0.72_0.12_70)]" size={24} />
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[oklch(0.72_0.12_70)]">
                {t("加急优先处理", "Priority Upgrade")}
              </p>
              <p className="text-sm text-white/72">
                {t("适用于紧急个案，优先复盘并提供行动时机建议。", "For urgent cases requiring priority review and recommended action timing.")}
              </p>
            </div>
          </div>
          <p className="text-2xl font-bold text-[oklch(0.72_0.12_70)]">S$1,500 / case</p>
        </div>
      </div>
    </section>
  );
}
