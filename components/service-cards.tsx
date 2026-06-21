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
    icon: Building2,
    titleZh: "企业奇门战略诊断",
    titleEn: "Business Qi Men Strategic Diagnosis",
    visualZh: "企业奇门战略诊断",
    visualEn: "Business Qi Men Diagnosis",
    visualSubZh: "生意卡点 · 方向判断 · 行动节奏",
    visualSubEn: "Business Blocks · Direction · Action Timing",
    painZh:
      "适合生意卡住、扩张犹豫、客户流动变慢或企业方向不清的企业主，通过奇门遁甲看清当前局势、主要阻力与下一步行动方向。",
    painEn:
      "For business owners facing stagnation, expansion hesitation, slower client flow or unclear direction, using Qi Men Dun Jia to read the current situation, main resistance and next strategic move.",
    audienceZh: "核心价值：先看清时机、方向、人事与行动节奏，再决定进、守、调、转或暂缓。",
    audienceEn:
      "Core value: read timing, direction, people dynamics and action rhythm before deciding whether to move, hold, adjust, transform or wait.",
    feeZh: "S$3,996 起",
    feeEn: "From S$3,996",
    href: "/enterprise-strategic-health-diagnostic",
    accentColor: "oklch(0.72 0.12 70)",
    accentBg: "oklch(0.97 0.03 85)",
    accentBorder: "oklch(0.90 0.04 80)",
    recommended: true,
  },
  {
    id: 2,
    icon: Crown,
    titleZh: "企业风水与空间布局",
    titleEn: "Business Feng Shui Alignment",
    visualZh: "企业风水与空间布局",
    visualEn: "Business Feng Shui Alignment",
    visualSubZh: "办公室 · 商铺 · 企业主住宅 · 决策环境",
    visualSubEn: "Office · Shop · Founder Residence · Decision Environment",
    painZh:
      "结合企业办公室、商铺、商业空间与企业主住宅进行风水布局，协助稳定经营环境、团队状态、决策清晰度与企业发展势能。",
    painEn:
      "A Feng Shui review of office, shop, business space and founder residence to support operating environment, team state, decision clarity and business momentum.",
    audienceZh: "核心价值：让企业空间、企业主状态与经营节奏形成更稳定的支持系统。",
    audienceEn:
      "Core value: align the business environment, founder state and operating rhythm into a stronger support system.",
    feeZh: "预约制顾问",
    feeEn: "By Appointment",
    href: "/enterprise-strategic-advisory",
    accentColor: "oklch(0.72 0.12 70)",
    accentBg: "oklch(0.97 0.03 85)",
    accentBorder: "oklch(0.90 0.04 80)",
  },
  {
    id: 3,
    icon: Gem,
    titleZh: "合作与人事判断",
    titleEn: "Partnership & People Assessment",
    visualZh: "合作与人事判断",
    visualEn: "Partnership & People Assessment",
    visualSubZh: "合伙人 · 股东 · 核心员工 · 供应链",
    visualSubEn: "Partners · Shareholders · Key Staff · Suppliers",
    painZh:
      "协助企业主判断合伙人、股东、核心员工、供应链、合作对象与关键人事关系，识别助力、阻力、消耗与潜在问题。",
    painEn:
      "Assessment of partners, shareholders, key employees, suppliers, cooperation targets and important business relationships to identify support, resistance, drain and potential issues.",
    audienceZh: "核心价值：看清谁是助力，谁是阻力，谁不适合进入企业核心结构。",
    audienceEn:
      "Core value: know who supports the business, who creates resistance and who should not enter the core structure.",
    feeZh: "私密判断",
    feeEn: "Private Review",
    href: "/enterprise-strategic-advisory",
    accentColor: "oklch(0.64 0.09 70)",
    accentBg: "oklch(0.96 0.02 75)",
    accentBorder: "oklch(0.88 0.03 70)",
  },
  {
    id: 4,
    icon: TrendingUp,
    titleZh: "年度企业趋势与战略预判",
    titleEn: "Annual Business Forecast & Strategy",
    visualZh: "年度企业趋势与战略预判",
    visualEn: "Annual Business Forecast",
    visualSubZh: "年度方向 · 月度趋势 · 关键时机",
    visualSubEn: "Annual Direction · Monthly Trends · Key Timing",
    painZh:
      "为企业主判断一整年的经营节奏，包括年度总体方向、核心定位、关键月份、扩张节奏、合作窗口与调整节点。",
    painEn:
      "A yearly strategic reading for business owners, covering annual direction, core positioning, key months, expansion rhythm, partnership windows and adjustment points.",
    audienceZh: "核心价值：提前看清什么时候进、什么时候守、什么时候调整，减少错误时机带来的高成本试错。",
    audienceEn:
      "Core value: know when to move, hold and adjust, reducing high-cost trial and error caused by wrong timing.",
    feeZh: "根据范围确认",
    feeEn: "Based on Scope",
    href: "/enterprise-strategic-advisory",
    accentColor: "oklch(0.60 0.08 65)",
    accentBg: "oklch(0.96 0.02 75)",
    accentBorder: "oklch(0.88 0.03 70)",
  },
  {
    id: 5,
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
  {
    id: 6,
    icon: Activity,
    titleZh: "个人重大决策咨询",
    titleEn: "Personal Major Decision Advisory",
    visualZh: "个人重大决策咨询",
    visualEn: "Personal Major Decisions",
    visualSubZh: "事业 · 关系 · 搬迁 · 投资 · 家庭",
    visualSubEn: "Career · Relationship · Move · Investment · Family",
    painZh:
      "适合事业、关系、搬家、家庭选择或人生方向出现卡点的人，通过奇门遁甲看清当前阶段的主要阻力、信号与下一步选择。",
    painEn:
      "For clients facing major choices in career, relationships, relocation, family matters or life direction, reviewing current resistance, signals and next-step choices through Qi Men Dun Jia.",
    audienceZh: "核心价值：不是替你决定，而是帮助你在关键选择前看清局势与方向。",
    audienceEn:
      "Core value: not deciding for you, but helping you see the situation and direction before a key choice.",
    feeZh: "S$396 起",
    feeEn: "From S$396",
    href: "/personal-life-state-diagnostic",
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
            {t("奇门遁甲企业决策顾问服务", "Qi Men Dun Jia Business Decision Advisory")}
          </p>

          <h2
            className="mb-5 text-3xl font-bold leading-tight md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.15 0.02 60)" }}
          >
            {t("生意卡住？合作不明？关键决策前，先看清全局", "Business Stuck? Partnership Unclear? See the Whole Game Before You Decide")}
          </h2>

          <p
            className="text-sm leading-7 md:text-base"
            style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif", color: "oklch(0.42 0.02 60)" }}
          >
            {t(
              "启明遁甲以奇门遁甲为核心方法，结合 16 年企业决策顾问经验、两家企业 18 年稳健运营实战背书与多家企业战略决策顾问经验，服务企业主、创始人与关键决策者。",
              "QIMEN STRATEGY uses Qi Men Dun Jia as the core decision method, supported by 16 years of business advisory experience, practical backing from two businesses operating steadily for 18 years, and strategic advisory work for multiple companies."
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
                {t("启明大师企业奇门顾问", "Master Qiming Business Qi Men Advisory")}
              </p>
              <p className="text-sm text-white/72">
                {t("适用于企业奇门诊断、年度预判、企业风水、人事合作判断与重大决策陪跑。", "For business Qi Men diagnosis, annual forecast, Feng Shui alignment, people assessment and major decision advisory.")}
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
