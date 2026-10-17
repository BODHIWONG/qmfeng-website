"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Compass, Building2, Handshake } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { useLocalizedHref } from "@/hooks/use-localized-href";

const pillars = [
  {
    number: "01",
    icon: Compass,
    titleZh: "奇门遁甲决策分析",
    titleEn: "Qimen Dunjia Decision Analysis",
    bodyZh: "面向个人与企业的重要选择，包括事业方向、合作关系、投资与项目判断、关键人事及行动时机。以奇门遁甲提供分析视角，并结合现实条件梳理可考虑的选项与风险。",
    bodyEn: "For important personal and business decisions, including career direction, partnerships, investment and project choices, key people and timing. Qimen Dunjia provides an additional analytical perspective alongside real-world constraints, options and risks.",
    href: "/personal-advisory",
    ctaZh: "了解决策咨询",
    ctaEn: "Explore Decision Analysis",
  },
  {
    number: "02",
    icon: Building2,
    titleZh: "个人与企业风水布局",
    titleEn: "Personal & Business Feng Shui",
    bodyZh: "为住宅、办公室、店铺及企业经营空间提供风水评估与布局建议，结合实际用途、空间动线、使用者需求及经营场景，制定可执行的优化方向。",
    bodyEn: "Feng Shui assessment and layout guidance for homes, offices, retail units and business premises, tailored to how the space is used, movement through the environment, occupants' needs and business operations.",
    href: "/commercial-feng-shui",
    ctaZh: "了解风水布局",
    ctaEn: "Explore Feng Shui Planning",
  },
  {
    number: "03",
    icon: Handshake,
    titleZh: "企业长期陪跑",
    titleEn: "Long-term Business Advisory",
    bodyZh: "面向希望持续优化经营的企业主，围绕阶段目标、重大决策、团队与合作、空间调整及执行复盘建立长期顾问关系。服务范围与频率根据企业实际需求共同确定。",
    bodyEn: "Ongoing advisory for business owners who want structured support with priorities, major decisions, teams and partnerships, spatial changes and execution reviews. Scope and cadence are tailored to the business's needs.",
    href: "/enterprise-strategic-advisory",
    ctaZh: "了解企业顾问服务",
    ctaEn: "Explore Business Advisory",
  },
];

export default function ServiceCards() {
  const { t } = useLanguage();
  const localizeHref = useLocalizedHref();

  return (
    <section id="services" className="bg-[oklch(0.97_0.012_75)] py-20 md:py-28">
      <div className="container">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[oklch(0.60_0.08_65)]">{t("启明遁甲 · 三大核心业务", "Qimen Strategy · Three Core Services")}</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
            {t("从看清决策，到优化空间，再到长期陪跑", "From Decision Clarity to Spatial Planning and Ongoing Support")}
          </h2>
          <p className="mt-5 text-base leading-8 text-[oklch(0.42_0.02_60)]">
            {t("三项服务分别回应不同需求，也可以按实际情况组合：先分析问题，再优化空间，或通过长期顾问关系持续跟进企业发展。", "Each service addresses a distinct need and can be combined when appropriate: analyse the decision, optimise the space, or maintain continuity through an ongoing advisory relationship.")}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.article key={pillar.number} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="flex min-h-[430px] flex-col border border-[#d8c6aa] bg-[#17130f] p-8 text-white shadow-[0_22px_60px_rgba(0,0,0,0.10)]">
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center border border-[#d6ad63]/55 text-[#d6ad63]"><Icon size={25} /></div>
                  <span className="text-4xl font-semibold text-white/10">{pillar.number}</span>
                </div>
                <h3 className="mt-8 text-3xl font-semibold leading-tight text-[#f4dfb0]" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>{t(pillar.titleZh, pillar.titleEn)}</h3>
                <p className="mt-5 text-sm leading-7 text-white/66">{t(pillar.bodyZh, pillar.bodyEn)}</p>
                <Link href={localizeHref(pillar.href)} className="mt-auto inline-flex items-center justify-between border border-[#d6ad63]/60 px-5 py-3.5 text-sm font-bold text-[#f4dfb0] hover:bg-[#d6ad63] hover:text-black">
                  {t(pillar.ctaZh, pillar.ctaEn)}<ArrowRight size={16} />
                </Link>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-5 border border-[#d8c6aa] bg-white px-6 py-6 text-center md:flex-row md:text-left">
          <div>
            <p className="font-bold text-[#2a2118]">{t("服务范围清晰，合作方式灵活", "Clear Scope, Flexible Engagement")}</p>
            <p className="mt-1 text-sm text-[#6b5a48]">{t("可从单次决策咨询或风水评估开始；企业长期陪跑则按目标、范围与服务频率定制。", "Start with a focused decision consultation or Feng Shui assessment. Ongoing business advisory is scoped around objectives, needs and cadence.")}</p>
          </div>
          <Link href={localizeHref("/contact")} className="inline-flex items-center gap-2 text-sm font-bold text-[#8a642f]">{t("讨论适合的服务", "Discuss the Right Service")}<ArrowRight size={16} /></Link>
        </div>
      </div>
    </section>
  );
}
