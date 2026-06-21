"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import {
  Activity,
  ArrowRight,
  Building2,
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
  visualZh: string;
  visualEn: string;
  visualSubZh: string;
  visualSubEn: string;
  painZh: string;
  painEn: string;
  audienceZh: string;
  audienceEn: string;
  feeZh: string;
  feeEn: string;
  href: string;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  recommended?: boolean;
};

const services: ServiceCard[] = [
  {
    id: 1,
    icon: Activity,
    titleZh: "个人运势与状态诊断",
    titleEn: "Personal Luck & Life-State Diagnostic",
    visualZh: "个人运势与状态诊断",
    visualEn: "Life-State Diagnostic",
    visualSubZh: "运势节奏 · 状态卡点 · 下一步方向",
    visualSubEn: "Momentum · State Blocks · Next Direction",
    painZh:
      "适合事业、感情、财运、睡眠状态、情绪能量或人生方向出现卡点的人，通过综合诊断看清当前阶段的主要阻力、风险信号与下一步选择。",
    painEn:
      "For clients facing blocks in career, relationships, wealth flow, sleep, emotional energy or life direction, reviewing current resistance, risk signals and next-step choices.",
    audienceZh: "核心价值：不是医疗诊断，而是人生状态、运势节奏与决策方向的综合评估。",
    audienceEn:
      "Core value: not medical diagnosis, but an advisory review of life state, momentum and decision direction.",
    feeZh: "S$396 起",
    feeEn: "From S$396",
    href: "/personal-life-state-diagnostic",
    accentColor: "oklch(0.60 0.08 65)",
    accentBg: "oklch(0.96 0.02 75)",
    accentBorder: "oklch(0.88 0.03 70)",
  },
  {
    id: 2,
    icon: Building2,
    titleZh: "企业战略健康诊断",
    titleEn: "Enterprise Strategic Health Diagnostic",
    visualZh: "企业战略健康诊断",
    visualEn: "Enterprise Strategic Health Diagnostic",
    visualSubZh: "方向 · 人事 · 现金流 · 空间支持力",
    visualSubEn: "Direction · People · Cashflow · Space Support",
    painZh:
      "专为企业主、创始人与管理层设计，诊断企业方向、经营节奏、客户流动、人事合作、空间支持力与未来 3–12 个月关键风险。",
    painEn:
      "Designed for business owners, founders and management teams to review business direction, operating rhythm, client flow, people dynamics, space support and 3–12 month risks.",
    audienceZh: "核心价值：企业卡住时，先找出系统性失衡点，再决定扩张、收缩、调整或转型。",
    audienceEn:
      "Core value: when the business is stuck, identify systemic imbalance before expansion, contraction, adjustment or transformation.",
    feeZh: "S$3,966 起",
    feeEn: "From S$3,966",
    href: "/enterprise-strategic-health-diagnostic",
    accentColor: "oklch(0.72 0.12 70)",
    accentBg: "oklch(0.97 0.03 85)",
    accentBorder: "oklch(0.90 0.04 80)",
    recommended: true,
  },
  {
    id: 3,
    icon: TrendingUp,
    titleZh: "年度战略预判",
    titleEn: "Annual Strategic Forecast",
    visualZh: "年度战略预判",
    visualEn: "Annual Strategic Forecast",
    visualSubZh: "年度方向 · 月度趋势 · 关键时机",
    visualSubEn: "Annual Direction · Monthly Trends · Key Timing",
    painZh:
      "为企业主判断一整年的战略节奏，包括年度总体发展方向、企业核心定位、年度批语、12个月月度趋势判断与关键月份提醒。",
    painEn:
      "A yearly strategic reading for business owners, covering overall development direction, core positioning, annual guidance, monthly trend reading and key timing reminders.",
    audienceZh: "核心价值：提前看清什么时候进、什么时候守、什么时候调整，减少错误时机带来的高成本试错。",
    audienceEn:
      "Core value: know when to move, hold, adjust and avoid high-cost decisions caused by wrong timing.",
    feeZh: "根据范围确认",
    feeEn: "Based on Scope",
    href: "/enterprise-strategic-advisory",
    accentColor: "oklch(0.60 0.08 65)",
    accentBg: "oklch(0.96 0.02 75)",
    accentBorder: "oklch(0.88 0.03 70)",
  },
  {
    id: 4,
    icon: Crown,
    titleZh: "企业与个人风水布局",
    titleEn: "Feng Shui Alignment for Business & Founder",
    visualZh: "企业与个人风水布局",
    visualEn: "Business & Founder Feng Shui Alignment",
    visualSubZh: "企业空间 · 个人住宅 · 决策环境",
    visualSubEn: "Business Space · Residence · Decision Environment",
    painZh:
      "结合企业办公室、商铺、商业空间与企业主个人住宅进行风水布局，协助稳定经营环境、财富承载、决策状态与企业发展势能。",
    painEn:
      "A combined Feng Shui review of the business space and the founder's personal residence to support decision clarity, wealth flow, stability and business momentum.",
    audienceZh: "核心价值：让企业空间与企业主个人状态形成更稳定的支持系统。",
    audienceEn: "Core value: align the business environment and the founder's personal field to support more stable growth.",
    feeZh: "预约制顾问",
    feeEn: "By Appointment",
    href: "/enterprise-strategic-advisory",
    accentColor: "oklch(0.72 0.12 70)",
    accentBg: "oklch(0.97 0.03 85)",
    accentBorder: "oklch(0.90 0.04 80)",
  },
  {
    id: 5,
    icon: Gem,
    titleZh: "人事与合作关系判断",
    titleEn: "People & Partnership Assessment",
    visualZh: "人事与合作关系判断",
    visualEn: "People & Partnership Assessment",
    visualSubZh: "管理层 · 供应链 · 合作伙伴",
    visualSubEn: "Management · Supply Chain · Partners",
    painZh:
      "协助企业主判断管理层、核心员工、供应链、合作伙伴与关键人事关系，识别助力、阻力与潜在风险。",
    painEn:
      "Assessment of management, key employees, suppliers, cooperation partners and important business relationships before deeper commitment.",
    audienceZh: "核心价值：看清谁是助力，谁是风险，谁不适合进入企业核心局。",
    audienceEn: "Core value: know who supports the business, who creates risk and who should not enter the core structure.",
    feeZh: "私密判断",
    feeEn: "Private Review",
    href: "/enterprise-strategic-advisory",
    accentColor: "oklch(0.64 0.09 70)",
    accentBg: "oklch(0.96 0.02 75)",
    accentBorder: "oklch(0.88 0.03 70)",
  },
  {
    id: 6,
    icon: Zap,
    titleZh: "企业主战略陪跑顾问",
    titleEn: "Founder Strategic Advisory",
    visualZh: "企业主战略陪跑顾问",
    visualEn: "Founder Strategic Advisory",
    visualSubZh: "扩张 · 投资 · 签约 · 转型",
    visualSubEn: "Expansion · Investment · Signing · Transformation",
    painZh:
      "长期陪伴企业主在扩张、投资、签约、搬迁、合作、团队调整与业务转型等重大节点做出战略判断。",
    painEn:
      "Long-term strategic advisory support for founders during major decisions such as expansion, investment, relocation, cooperation, signing, restructuring and transformation.",
    audienceZh: "核心价值：在重大行动前，帮助企业主看清时机、方向、人和与环境，减少盲动，提高决策稳定性。",
    audienceEn:
      "Core value: support the founder before major decisions with clearer timing, direction, people judgment and environmental awareness.",
    feeZh: "长期顾问",
    feeEn: "Retainer Advisory",
    href: "/enterprise-strategic-advisory",
    accentColor: "oklch(0.60 0.08 65)",
    accentBg: "oklch(0.96 0.02 75)",
    accentBorder: "oklch(0.88 0.03 70)",
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
            {t("诊断与企业战略决策顾问服务", "Diagnostic & Enterprise Strategic Decision Advisory")}
          </p>

          <h2
            className="mb-5 text-3xl font-bold leading-tight md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.15 0.02 60)" }}
          >
            {t("关键决策前，先看清全局", "See the Whole Game Before You Decide")}
          </h2>

          <p
            className="text-sm leading-7 md:text-base"
            style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif", color: "oklch(0.42 0.02 60)" }}
          >
            {t(
              "启明遁甲以 16 年奇门决策实战经验为根基，结合个人状态诊断、企业战略健康诊断、年度战略预判、企业风水布局、人事合作判断及重大决策陪跑，长期服务企业主、创始人与关键决策者。",
              "QIMEN STRATEGY supports business owners, founders and key decision-makers through personal life-state diagnostics, enterprise strategic health diagnostics, annual strategic forecasting, Feng Shui alignment, people assessment and major decision advisory."
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
                  {t("核心入口", "Core Entry")}
                </div>
              )}

              <div className="absolute inset-x-0 top-0 z-10 h-[3px]" style={{ background: service.accentColor }} />

              <div className="relative aspect-video w-full overflow-hidden bg-black">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(214,173,99,0.22),transparent_32%),linear-gradient(135deg,#090704,#19120a_45%,#050403)]" />
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, rgba(214,173,99,.12) 1px, transparent 1px), linear-gradient(0deg, rgba(214,173,99,.08) 1px, transparent 1px)",
                    backgroundSize: "42px 42px",
                  }}
                />
                <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
                  <p className="mb-3 text-[0.62rem] font-bold uppercase tracking-[0.24em] text-[oklch(0.72_0.12_70)]">
                    QIMEN STRATEGY
                  </p>
                  <h3 className="max-w-[92%] text-2xl font-bold leading-tight text-[#f4dfb0] md:text-3xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
                    {t(service.visualZh, service.visualEn)}
                  </h3>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/70 md:text-sm">
                    {t(service.visualSubZh, service.visualSubEn)}
                  </p>
                </div>
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

                <div className="mt-auto flex items-center justify-between gap-4 border-t border-[oklch(0.88_0.018_70)] pt-6">
                  <p
                    className="text-sm font-bold uppercase tracking-[0.14em] md:text-base"
                    style={{ fontFamily: "var(--font-lato), sans-serif", color: service.accentColor }}
                  >
                    {t(service.feeZh, service.feeEn)}
                  </p>

                  <Link
                    href={service.href}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] transition-all duration-300 hover:opacity-90 hover:shadow-[0_10px_25px_rgba(0,0,0,0.12)]"
                    style={{ fontFamily: "var(--font-lato), sans-serif", background: service.accentColor, color: "oklch(0.98 0.005 75)" }}
                  >
                    {t("查看详情", "View Details")}
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
                {t("企业主私人战略顾问", "Private Founder Strategic Advisory")}
              </p>
              <p className="text-sm text-white/72">
                {t("适用于企业健康诊断、年度预判、企业风水、人事合作判断与重大决策陪跑。", "For enterprise diagnostics, annual strategy, Feng Shui alignment, people assessment and major decision advisory.")}
              </p>
            </div>
          </div>
          <Link
            href="/enterprise-strategic-advisory"
            className="text-sm font-bold uppercase tracking-[0.14em] text-[oklch(0.72_0.12_70)] transition hover:text-white"
          >
            {t("查看企业战略顾问", "View Enterprise Advisory")} →
          </Link>
        </div>
      </div>
    </section>
  );
}
