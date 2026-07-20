"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { ArrowRight, BookOpen, Building2, Briefcase, HeartHandshake, LineChart, type LucideIcon } from "lucide-react";

type ServiceCard = {
  id: number;
  icon: LucideIcon;
  engineZh: string;
  engineEn: string;
  titleZh: string;
  titleEn: string;
  visualSubZh: string;
  visualSubEn: string;
  painZh: string;
  painEn: string;
  valueZh: string;
  valueEn: string;
  href: string;
  featured?: boolean;
};

const services: ServiceCard[] = [
  {
    id: 1,
    icon: Building2,
    engineZh: "决策顾问",
    engineEn: "Advisory",
    titleZh: "创业老板事业陪跑",
    titleEn: "Founder Business Advisory",
    visualSubZh: "经营瓶颈 · 增长重点 · 团队合作 · 90天陪跑",
    visualSubEn: "Bottlenecks · Growth · People · 90-Day Support",
    painZh: "适合生意很忙却难以突破、正在扩张或转型、团队与合作问题反复，或需要长期外部战略判断的创业老板。",
    painEn: "For founders facing business bottlenecks, expansion, transition, people issues, partnership risk or the need for ongoing strategic support.",
    valueZh: "核心价值：减少高成本试错，建立更清晰的经营优先级与决策节奏。",
    valueEn: "Core value: reduce high-cost mistakes and build a clearer decision rhythm.",
    href: "/founder-business-advisory",
    featured: true,
  },
  {
    id: 2,
    icon: LineChart,
    engineZh: "决策顾问",
    engineEn: "Advisory",
    titleZh: "财富周期与投资决策辅助",
    titleEn: "Wealth & Investment Decision Support",
    visualSubZh: "事业周期 · 投资时机 · 资金承载 · 合作风险",
    visualSubEn: "Cycle · Timing · Capital · Partnership Risk",
    painZh: "适合重大投资、业务扩张、项目投入、合作出资或资产决策前，需要增加一层时机、人物与风险判断的创业者。",
    painEn: "For entrepreneurs before major investment, expansion, project funding, partnership or capital-allocation decisions.",
    valueZh: "核心价值：不是承诺收益，而是在投入资金前看清条件、盲点与下行风险。",
    valueEn: "Core value: clarify conditions, blind spots and downside risk before capital is committed.",
    href: "/wealth-cycle-investment-decision",
  },
  {
    id: 3,
    icon: Briefcase,
    engineZh: "决策顾问",
    engineEn: "Advisory",
    titleZh: "高管事业转型与关键关系规划",
    titleEn: "Executive Career Transition",
    visualSubZh: "留任跳槽 · 平台选择 · 权责关系 · 贵人助力",
    visualSubEn: "Stay or Move · Role Fit · Authority · Strategic Network",
    painZh: "适合正在面对晋升、跳槽、跨行业、创业、组织关系或关键支持者问题的高管与专业人士。",
    painEn: "For executives facing promotion, job change, industry transition, entrepreneurship, organisational dynamics or strategic relationship decisions.",
    valueZh: "核心价值：比较不同职业路径，并形成更稳健的90天转型行动路线。",
    valueEn: "Core value: compare career pathways and define a steadier 90-day transition roadmap.",
    href: "/executive-career-transition",
  },
  {
    id: 4,
    icon: HeartHandshake,
    engineZh: "决策顾问",
    engineEn: "Advisory",
    titleZh: "个人情感与重大决策支持",
    titleEn: "Relationship & Major Life Decisions",
    visualSubZh: "婚姻关系 · 去留选择 · 家庭压力 · 人生方向",
    visualSubEn: "Relationship · Stay or Leave · Family · Life Direction",
    painZh: "适合感情、婚姻、家庭与人生方向反复不清，希望在情绪之外看清局势、边界、时机与下一步的人。",
    painEn: "For clients facing relationship, marriage, family or major life-direction uncertainty.",
    valueZh: "核心价值：提供私密、克制、有边界的重大关系与人生决策参考。",
    valueEn: "Core value: private, responsible and clearly bounded decision support.",
    href: "/relationship-clarity-reading-singapore",
  },
  {
    id: 5,
    icon: BookOpen,
    engineZh: "启明研修",
    engineEn: "Academy",
    titleZh: "每周奇门遁甲基础课程",
    titleEn: "Weekly Qi Men Dun Jia Course",
    visualSubZh: "每周六日 · 两天小班 · 零基础 · 实战案例",
    visualSubEn: "Weekly Weekend · 2 Days · Beginners · Real Cases",
    painZh: "适合希望从基础建立完整框架，学习九宫、八门、九星、八神、读局顺序与实际应用的学员。",
    painEn: "For learners who want a structured foundation in chart reading, symbols, reading sequence and practical application.",
    valueZh: "核心价值：每周稳定开班，建立可持续的课程与复训体系。",
    valueEn: "Core value: consistent weekly intakes with a structured learning pathway.",
    href: "/qi-men-dun-jia-course-singapore",
    featured: true,
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
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[oklch(0.60_0.08_65)]">
            {t("两大业务引擎", "Two Core Business Engines")}
          </p>
          <h2
            className="mb-5 text-3xl font-bold leading-tight md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.15 0.02 60)" }}
          >
            {t("高价值决策顾问＋每周奇门课程", "Strategic Advisory + Weekly Qi Men Courses")}
          </h2>
          <p className="text-sm leading-7 text-[oklch(0.42_0.02_60)] md:text-base">
            {t(
              "启明遁甲决策智库未来聚焦两条主线：为创业老板、高管与个人提供重大决策支持；同时建立每周稳定开课的奇门遁甲研修体系。风水、空间与人事判断作为顾问系统的支持能力，不再作为割裂的单项定位。",
              "Qimen Strategy focuses on two clear engines: high-value decision advisory for founders, executives and individuals, and a consistent weekly Qi Men Dun Jia learning system. Feng Shui, space and people assessment remain supporting capabilities within the advisory framework."
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-7">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className={`relative flex flex-col overflow-hidden border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)] ${
                  service.featured
                    ? "border-[oklch(0.72_0.12_70)] shadow-[0_16px_44px_rgba(190,134,40,0.14)]"
                    : "border-[oklch(0.88_0.018_70)] hover:border-[oklch(0.60_0.08_65)]"
                }`}
              >
                <div className="border-b border-[oklch(0.90_0.02_75)] bg-[oklch(0.98_0.015_78)] p-8">
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-12 w-12 items-center justify-center border border-[oklch(0.70_0.10_70)] text-[oklch(0.60_0.08_65)]">
                      <Icon size={22} />
                    </div>
                    <span className="bg-[oklch(0.72_0.12_70)] px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white">
                      {t(service.engineZh, service.engineEn)}
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold leading-tight text-[oklch(0.16_0.02_60)]">
                    {t(service.titleZh, service.titleEn)}
                  </h3>
                  <p className="mt-3 text-sm font-semibold text-[oklch(0.55_0.08_65)]">
                    {t(service.visualSubZh, service.visualSubEn)}
                  </p>
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <p className="text-sm leading-7 text-[oklch(0.36_0.02_60)]">{t(service.painZh, service.painEn)}</p>
                  <p className="mt-5 border-l-2 border-[oklch(0.60_0.08_65)] pl-4 text-sm font-semibold leading-7 text-[oklch(0.24_0.02_60)]">
                    {t(service.valueZh, service.valueEn)}
                  </p>
                  <div className="mt-auto border-t border-[oklch(0.90_0.02_75)] pt-6">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[oklch(0.30_0.03_70)] transition-colors hover:text-[oklch(0.60_0.08_65)]"
                    >
                      {t("查看详情", "View Details")}
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
