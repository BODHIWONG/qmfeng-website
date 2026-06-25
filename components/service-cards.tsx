"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { Activity, ArrowRight, Building2, Compass, type LucideIcon } from "lucide-react";

type ServiceCard = {
  id: number;
  icon: LucideIcon;
  titleZh: string;
  titleEn: string;
  visualSubZh: string;
  visualSubEn: string;
  painZh: string;
  painEn: string;
  audienceZh: string;
  audienceEn: string;
  feeZh: string;
  feeEn: string;
  href: string;
  recommended?: boolean;
};

const services: ServiceCard[] = [
  {
    id: 1,
    icon: Building2,
    titleZh: "企业战略健康诊断",
    titleEn: "Enterprise Strategic Diagnostic",
    visualSubZh: "方向 · 人事 · 现金流 · 空间支持力",
    visualSubEn: "Direction · People · Cash Flow · Space Support",
    painZh:
      "适合生意卡住、扩张犹豫、客户流动变慢、团队内耗或企业方向不清的企业主。先看清系统性失衡点，再决定扩张、收缩、调整或转型。",
    painEn:
      "For business owners facing stagnation, expansion hesitation, slower client flow, team friction or unclear direction. Identify the deeper imbalance before expansion, contraction, adjustment or transformation.",
    audienceZh: "核心价值：在投入更多资金、时间与信任前，看清时机、方向、人事与环境是否支持下一步。",
    audienceEn:
      "Core value: before committing more capital, time and trust, clarify whether timing, direction, people and environment support the next step.",
    feeZh: "S$3,996 起",
    feeEn: "From S$3,996",
    href: "/enterprise-strategic-health-diagnostic",
    recommended: true,
  },
  {
    id: 2,
    icon: Activity,
    titleZh: "个人重大决策咨询",
    titleEn: "Personal Major Decision Advisory",
    visualSubZh: "事业 · 关系 · 搬迁 · 投资 · 家庭",
    visualSubEn: "Career · Relationship · Move · Investment · Family",
    painZh:
      "适合事业、关系、财富节奏、搬迁、家庭选择或人生方向出现卡点的人。通过奇门遁甲看清当前阶段的阻力、风险信号与下一步选择。",
    painEn:
      "For clients facing key choices in career, relationships, wealth rhythm, relocation, family matters or life direction. Review the current resistance, risk signals and next-step choices through Qi Men Dun Jia.",
    audienceZh: "核心价值：不是替你决定，而是帮助你在关键选择前看清局势、方向与代价。",
    audienceEn:
      "Core value: not deciding for you, but helping you see the situation, direction and cost before a key choice.",
    feeZh: "S$396 起",
    feeEn: "From S$396",
    href: "/personal-life-state-diagnostic",
  },
  {
    id: 3,
    icon: Compass,
    titleZh: "风水与空间能量调衡",
    titleEn: "Feng Shui & Space Alignment",
    visualSubZh: "办公室 · 商铺 · 住宅 · 决策环境",
    visualSubEn: "Office · Shop · Residence · Decision Environment",
    painZh:
      "适合企业空间、商铺、办公室、住宅或企业主个人空间需要重新调整的人。重点不只是摆设，而是让环境、状态与行动节奏形成支持系统。",
    painEn:
      "For business spaces, shops, offices, residences or founder environments that need realignment. The focus is not decoration, but building a support system between environment, state and action rhythm.",
    audienceZh: "核心价值：让空间支持稳定状态、清晰判断与长期发展。",
    audienceEn:
      "Core value: make the environment support steadier state, clearer judgment and long-term growth.",
    feeZh: "预约制顾问",
    feeEn: "By Appointment",
    href: "/enterprise-strategic-advisory",
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
            {t("三大核心顾问入口", "Three Core Advisory Pathways")}
          </p>

          <h2
            className="mb-5 text-3xl font-bold leading-tight md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.15 0.02 60)" }}
          >
            {t("不是所有问题都要硬冲，先看清卡在哪里", "Do Not Push Blindly. First See Where the Block Is")}
          </h2>

          <p
            className="text-sm leading-7 md:text-base"
            style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif", color: "oklch(0.42 0.02 60)" }}
          >
            {t(
              "有些客户是生意卡住，有些是合作关系不明，有些是家宅或办公室气场不稳，也有人是在感情、事业、搬迁或投资前犹豫不决。启明遁甲先帮助你看清问题属于企业、个人，还是空间环境，再决定下一步如何布局。",
              "Some clients are stuck in business, some face unclear partnerships, some feel their home or office environment is not supporting them, and others hesitate before relationship, career, relocation or investment decisions. Qimen Strategy first helps you identify whether the issue belongs to business, personal decision-making or space environment before deciding the next alignment."
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 xl:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
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
                  <div className="absolute right-4 top-4 bg-[oklch(0.72_0.12_70)] px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white">
                    {t("企业优先", "Core")}
                  </div>
                )}

                <div className="border-b border-[oklch(0.90_0.02_75)] bg-[oklch(0.98_0.015_78)] p-8">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center border border-[oklch(0.70_0.10_70)] text-[oklch(0.60_0.08_65)]">
                    <Icon size={22} />
                  </div>
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[oklch(0.58_0.08_65)]">
                    Qimen Strategy
                  </p>
                  <h3 className="text-2xl font-bold leading-tight text-[oklch(0.16_0.02_60)]">
                    {t(service.titleZh, service.titleEn)}
                  </h3>
                  <p className="mt-3 text-sm font-semibold text-[oklch(0.55_0.08_65)]">
                    {t(service.visualSubZh, service.visualSubEn)}
                  </p>
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <p className="text-sm leading-7 text-[oklch(0.36_0.02_60)]">
                    {t(service.painZh, service.painEn)}
                  </p>

                  <p className="mt-5 border-l-2 border-[oklch(0.60_0.08_65)] pl-4 text-sm font-semibold leading-7 text-[oklch(0.24_0.02_60)]">
                    {t(service.audienceZh, service.audienceEn)}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-[oklch(0.90_0.02_75)] pt-6">
                    <p className="text-sm font-bold text-[oklch(0.58_0.08_65)]">
                      {t(service.feeZh, service.feeEn)}
                    </p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[oklch(0.30_0.03_70)] transition-colors hover:text-[oklch(0.60_0.08_65)]"
                    >
                      {t("查看详情", "Details")}
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
