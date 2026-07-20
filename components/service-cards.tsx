"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  CircleDollarSign,
  Compass,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

type AdvisoryPathway = {
  icon: LucideIcon;
  titleZh: string;
  titleEn: string;
  focusZh: string;
  focusEn: string;
  bodyZh: string;
  bodyEn: string;
  href: string;
  featured?: boolean;
};

const advisoryPathways: AdvisoryPathway[] = [
  {
    icon: Building2,
    titleZh: "创业老板事业陪跑",
    titleEn: "Founder Business Advisory",
    focusZh: "经营瓶颈 · 战略重点 · 团队与合作 · 长期复盘",
    focusEn: "Business Bottlenecks · Priorities · People · Retainer Support",
    bodyZh:
      "面向创业老板与企业主，在生意卡住、增长停滞、团队失衡、合作不清或进入关键转型期时，提供阶段性诊断、重大决策支持与持续复盘。",
    bodyEn:
      "For founders and business owners navigating stalled growth, operational pressure, people issues, partnership uncertainty or a critical transition stage.",
    href: "/enterprise-strategic-advisory",
    featured: true,
  },
  {
    icon: CircleDollarSign,
    titleZh: "财富周期与投资决策辅助",
    titleEn: "Wealth Cycle & Investment Decisions",
    focusZh: "事业周期 · 投资时机 · 合作结构 · 风险边界",
    focusEn: "Business Cycle · Investment Timing · Structure · Risk Boundaries",
    bodyZh:
      "帮助创业者在扩大投入、进入新项目、接受合作、配置资源或判断去留前，审视当前周期、关键人员、机会成本与潜在风险。",
    bodyEn:
      "For entrepreneurs reviewing capital commitment, new projects, partnerships, resource allocation and investment-related timing before action.",
    href: "/founder-wealth-investment-advisory",
  },
  {
    icon: BriefcaseBusiness,
    titleZh: "高管事业转型与关键关系规划",
    titleEn: "Executive Career Transition",
    focusZh: "转职 · 创业 · 平台选择 · 贵人助力与关键关系",
    focusEn: "Career Move · Entrepreneurship · Platform Choice · Strategic Network",
    bodyZh:
      "适合处在升迁、跳槽、转型、创业或合伙节点的高管与专业人士，帮助判断方向、节奏、平台匹配度及关键支持关系。",
    bodyEn:
      "For senior executives and professionals considering promotion, job change, entrepreneurship, partnership or a major career redirection.",
    href: "/executive-career-transition-advisory",
  },
  {
    icon: Compass,
    titleZh: "个人情感与重大决策支持",
    titleEn: "Relationship & Major Life Decisions",
    focusZh: "关系去留 · 人生方向 · 合作选择 · 关键行动",
    focusEn: "Relationship Direction · Life Choices · Partnership · Major Action",
    bodyZh:
      "当情感、事业、家庭与人生方向交织在一起时，以一个核心问题为中心，帮助你看清局势、边界、时机与下一步选择。",
    bodyEn:
      "A focused decision review when relationship, career, family and major life choices become difficult to separate or judge clearly.",
    href: "/decision",
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
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[oklch(0.60_0.08_65)]">
            {t("课程第一，企业陪跑第二", "Courses First, Advisory as the Advanced Pathway")}
          </p>
          <h2
            className="mb-5 text-3xl font-bold leading-tight md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.15 0.02 60)" }}
          >
            {t(
              "先建立系统认知，再进入真实经营与重大决策支持",
              "Learn the System First, Then Apply It to Real Decisions"
            )}
          </h2>
          <p className="text-sm leading-7 text-[oklch(0.42_0.02_60)] md:text-base">
            {t(
              "每周奇门课程是启明遁甲决策智库的第一入口。学员先通过系统学习理解奇门框架、读局顺序与案例应用；当创业老板面对真实经营瓶颈、投资、人事或转型问题时，再进入企业陪跑与战略顾问服务。",
              "Weekly Qi Men courses are the primary entry point into Qimen Strategy. Learners first build a structured understanding of the framework and its practical use. Founders facing real business bottlenecks, investment, people or transition decisions may then progress into strategic advisory."
            )}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden border border-[oklch(0.66_0.09_70)] bg-[oklch(0.12_0.02_60)] text-white shadow-[0_22px_70px_rgba(0,0,0,0.14)]"
        >
          <div className="grid md:grid-cols-[0.72fr_1.28fr]">
            <div className="flex min-h-[300px] items-center justify-center border-b border-white/10 bg-[radial-gradient(circle_at_center,rgba(214,173,99,0.22),transparent_58%)] p-10 md:border-b-0 md:border-r">
              <div className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#d6ad63]/60 text-[#e2bd6b]">
                  <BookOpen size={34} />
                </div>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-[#d6ad63]">Qimen Strategy Academy</p>
                <p className="mt-3 text-3xl font-semibold text-[#f4dfb0]">每周奇门课程</p>
                <span className="mt-5 inline-block bg-[#d6ad63] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-black">
                  {t("第一业务入口", "Primary Entry")}
                </span>
              </div>
            </div>
            <div className="p-8 md:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d6ad63]">Regular Saturday–Sunday Intakes</p>
              <h3 className="mt-4 text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl">
                {t("从零基础开始，建立清晰、系统、可应用的奇门判断框架。", "Build a Clear and Practical Qi Men Foundation from the Beginning.")}
              </h3>
              <p className="mt-6 max-w-3xl text-sm leading-8 text-white/68 md:text-base">
                {t(
                  "两天小班教学，涵盖奇门基础框架、九宫、八门、九星、八神、取用神、宫位关系、读局顺序与真实案例。课程不仅是教学产品，也是客户了解启明遁甲方法、专业边界与工作方式的主要入口。",
                  "The two-day small-group course covers the core framework, Nine Palaces, Eight Doors, Nine Stars, Eight Deities, useful-god selection, palace relationships, chart-reading sequence and practical cases. It is also the main way for clients to understand Qimen Strategy's method, professional boundaries and approach."
                )}
              </p>
              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link href="/qi-men-dun-jia-course-singapore" className="inline-flex items-center justify-center bg-[#d6ad63] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.13em] text-black hover:bg-[#f4dfb0]">
                  {t("查看课程详情", "View Course Details")}
                </Link>
                <Link href="/course-registration?course=qimen-foundation&batch=2026-09-19" className="inline-flex items-center justify-center border border-[#d6ad63]/70 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.13em] text-[#f4dfb0] hover:bg-[#d6ad63]/10">
                  {t("选择班次并报名", "Select Batch & Register")}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mb-14 mt-16 flex items-end justify-between gap-6 border-b border-[oklch(0.84_0.025_70)] pb-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[oklch(0.60_0.08_65)]">
              Qimen Strategy Advisory
            </p>
            <h3 className="mt-2 text-2xl font-bold text-[oklch(0.16_0.02_60)] md:text-4xl">
              {t("企业陪跑与重大决策支持", "Founder Advisory & Major Decision Support")}
            </h3>
          </div>
          <p className="hidden max-w-md text-right text-sm leading-6 text-[oklch(0.46_0.02_60)] md:block">
            {t("课程建立认知，顾问服务解决真实经营与重大决策问题。", "Courses build understanding; advisory addresses real business and high-stakes decisions.")}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {advisoryPathways.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.href}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className={`relative flex h-full flex-col border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)] md:p-8 ${
                  service.featured
                    ? "border-[oklch(0.70_0.10_70)] shadow-[0_16px_44px_rgba(190,134,40,0.12)]"
                    : "border-[oklch(0.87_0.018_70)] hover:border-[oklch(0.60_0.08_65)]"
                }`}
              >
                {service.featured && (
                  <div className="absolute right-5 top-5 bg-[oklch(0.72_0.12_70)] px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white">
                    {t("第二增长引擎", "Advanced Pathway")}
                  </div>
                )}
                <div className="flex h-12 w-12 items-center justify-center border border-[oklch(0.70_0.10_70)] text-[oklch(0.60_0.08_65)]">
                  <Icon size={22} />
                </div>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[oklch(0.58_0.08_65)]">
                  {service.titleEn}
                </p>
                <h3 className="mt-2 pr-12 text-2xl font-bold leading-tight text-[oklch(0.16_0.02_60)]">
                  {service.titleZh}
                </h3>
                <p className="mt-4 text-sm font-semibold leading-7 text-[oklch(0.55_0.08_65)]">
                  {t(service.focusZh, service.focusEn)}
                </p>
                <p className="mt-5 text-sm leading-7 text-[oklch(0.36_0.02_60)]">
                  {t(service.bodyZh, service.bodyEn)}
                </p>
                <Link
                  href={service.href}
                  className="mt-auto inline-flex items-center gap-2 pt-7 text-xs font-bold uppercase tracking-[0.16em] text-[oklch(0.30_0.03_70)] transition-colors hover:text-[oklch(0.60_0.08_65)]"
                >
                  {t("查看服务详情", "View Advisory")}
                  <ArrowRight size={14} />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
