"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { ArrowRight, BookOpen, Building2, HeartHandshake, type LucideIcon } from "lucide-react";

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
    titleZh: "企业决策顾问 / 年度陪跑",
    titleEn: "Enterprise Decision Advisory",
    visualSubZh: "战略方向 · 人事合作 · 年度节奏 · 空间支持",
    visualSubEn: "Strategy · People · Annual Rhythm · Space Support",
    painZh:
      "适合企业主、管理层与创业者，在扩张、收缩、合作、人事、现金流、年度规划或关键商业选择前，先看清时机、方向、人事与环境支持力。",
    painEn:
      "For business owners, leaders and entrepreneurs before expansion, contraction, partnership, people decisions, cash-flow planning, annual direction or important commercial choices.",
    audienceZh: "核心价值：把奇门遁甲判断、商业实战经验与空间风水支持结合，形成长期决策陪跑。",
    audienceEn:
      "Core value: combine Qi Men Dun Jia insight, practical business experience and Feng Shui support into long-term decision advisory.",
    feeZh: "年度顾问 / 预约制",
    feeEn: "Annual Advisory / By Appointment",
    href: "/enterprise-strategic-advisory",
    recommended: true,
  },
  {
    id: 2,
    icon: HeartHandshake,
    titleZh: "婚姻情感 / 关系决策",
    titleEn: "Relationship Decision Advisory",
    visualSubZh: "婚姻压力 · 第三者 · 信任危机 · 去留选择",
    visualSubEn: "Marriage Stress · Affair Concerns · Trust Issues · Stay or Leave",
    painZh:
      "适合正在面对感情困惑、婚姻压力、第三者问题、复合分开、信任危机，或不确定该继续、等待、沟通还是放手的客户。",
    painEn:
      "For clients facing relationship confusion, marriage stress, affair concerns, reconciliation, separation, trust issues or the question of whether to stay, wait, communicate or let go.",
    audienceZh: "核心价值：在情绪之外，看清关系局势、对方状态、时机与下一步方向。",
    audienceEn:
      "Core value: look beyond emotion and understand the relationship dynamics, the other person’s position, timing and next direction.",
    feeZh: "S$396 起",
    feeEn: "From S$396",
    href: "/relationship-clarity-reading-singapore",
  },
  {
    id: 3,
    icon: BookOpen,
    titleZh: "奇门风水 / 奇门遁甲课程",
    titleEn: "Qi Men Feng Shui & Course",
    visualSubZh: "空间调衡 · 奇门风水 · 系统研修 · 真实案例",
    visualSubEn: "Space Alignment · Qi Men Feng Shui · Training · Real Cases",
    painZh:
      "适合需要住宅、商铺、办公室空间调整的人，也适合希望系统学习奇门遁甲、理解排盘读局与实际应用的学员。",
    painEn:
      "For clients needing residential, retail or office space alignment, and for learners who want structured Qi Men Dun Jia training with chart reading and real case application.",
    audienceZh: "核心价值：让环境支持状态与行动，也让学习者建立看清局势、择时布局与辅助决策的能力。",
    audienceEn:
      "Core value: make the environment support state and action, while helping learners build the ability to read situations, timing and decision patterns.",
    feeZh: "顾问 / 课程预约制",
    feeEn: "Advisory / Course by Appointment",
    href: "/singapore-qi-men-dun-jia-consultant",
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
            {t("三大核心业务", "Three Core Advisory Pillars")}
          </p>

          <h2
            className="mb-5 text-3xl font-bold leading-tight md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.15 0.02 60)" }}
          >
            {t("以奇门遁甲为核心，服务企业、关系与空间决策", "Qi Men Dun Jia-Based Advisory for Business, Relationships and Space")}
          </h2>

          <p
            className="text-sm leading-7 md:text-base"
            style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif", color: "oklch(0.42 0.02 60)" }}
          >
            {t(
              "启明遁甲决策智库不是单一风水店，而是以奇门遁甲为核心方法，结合商业实战、关系判断与空间调衡，协助客户在关键选择前看清局势、时机、人事与下一步方向。",
              "Qimen Strategy is not a single-service Feng Shui shop. It uses Qi Men Dun Jia as the core method, combined with business experience, relationship judgment and space alignment, to help clients see timing, people dynamics and next steps before important decisions."
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 xl:gap-7">
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
                    {t("核心业务", "Core")}
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
