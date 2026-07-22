"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen, BriefcaseBusiness, UserRound, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

type Pillar = {
  number: string;
  icon: LucideIcon;
  eyebrowZh: string;
  eyebrowEn: string;
  titleZh: string;
  titleEn: string;
  bodyZh: string;
  bodyEn: string;
  featuresZh: string[];
  featuresEn: string[];
  href: string;
  ctaZh: string;
  ctaEn: string;
  secondaryHref?: string;
  secondaryCtaZh?: string;
  secondaryCtaEn?: string;
};

const pillars: Pillar[] = [
  {
    number: "01",
    icon: BookOpen,
    eyebrowZh: "奇门遁甲实战教学",
    eyebrowEn: "Practical Qi Men Education",
    titleZh: "奇门遁甲实战课程",
    titleEn: "Qi Men Dun Jia Courses",
    bodyZh:
      "从基础框架、读局顺序到案例分析与实际练习，帮助学员系统建立奇门遁甲的理解与应用能力。",
    bodyEn:
      "Structured learning from core framework and chart-reading sequence to case analysis and guided practical exercises.",
    featuresZh: ["基础 · 中级 · 高级 · 弟子班", "周末小班教学", "案例分析与实战练习"],
    featuresEn: ["Four-Level Pathway", "Weekend Small Groups", "Cases & Guided Practice"],
    href: "/courses",
    ctaZh: "查看课程体系",
    ctaEn: "Explore Courses",
    secondaryHref: "/course-registration?course=qimen-foundation&batch=2026-09-19",
    secondaryCtaZh: "选择班次并报名",
    secondaryCtaEn: "Select Batch & Register",
  },
  {
    number: "02",
    icon: BriefcaseBusiness,
    eyebrowZh: "企业主高价值顾问",
    eyebrowEn: "Founder Strategic Advisory",
    titleZh: "企业战略陪跑",
    titleEn: "Business Strategic Advisory",
    bodyZh:
      "为创业老板、企业主与高管提供经营瓶颈诊断、战略重点排序、重大决策判断与阶段性持续复盘。",
    bodyEn:
      "Strategic support for founders, business owners and executives facing bottlenecks, major decisions, people issues and transition pressure.",
    featuresZh: ["经营瓶颈与战略诊断", "投资、合作与人事判断", "90天试行与年度陪跑"],
    featuresEn: ["Business Diagnosis", "Investment, People & Partnership", "90-Day & Annual Advisory"],
    href: "/enterprise-strategic-advisory",
    ctaZh: "了解企业陪跑",
    ctaEn: "Explore Business Advisory",
  },
  {
    number: "03",
    icon: UserRound,
    eyebrowZh: "个人重大决策与生活优化",
    eyebrowEn: "Personal Decision & Life Advisory",
    titleZh: "个人咨询服务",
    titleEn: "Personal Advisory Services",
    bodyZh:
      "面向正在经历重要人生选择、关系变化、行动安排或居住环境调整的个人客户，提供私密、清晰、按需匹配的咨询支持。",
    bodyEn:
      "Private advisory for individuals facing important life choices, relationship changes, action planning or residential environment concerns.",
    featuresZh: ["感情婚姻与人生选择", "择日与手机号码选择", "居家风水与空间净化"],
    featuresEn: ["Relationship & Life Decisions", "Date & Mobile Number Selection", "Home Feng Shui & Space Clearing"],
    href: "/personal-advisory",
    ctaZh: "查看个人咨询",
    ctaEn: "Explore Personal Advisory",
  },
];

export default function ServiceCards() {
  const { lang, t } = useLanguage();

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
            {t("三大核心业务支柱", "Three Core Business Pillars")}
          </p>
          <h2
            className="mb-5 text-3xl font-bold leading-tight md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.15 0.02 60)" }}
          >
            {t(
              "奇门课程、企业陪跑与个人咨询，共同构成启明遁甲当前的服务体系",
              "Education, Business Advisory and Personal Consultation in One Integrated Qimen Strategy System"
            )}
          </h2>
          <p className="text-sm leading-7 text-[oklch(0.42_0.02_60)] md:text-base">
            {t(
              "三类服务面向不同阶段与不同需求，但都围绕同一个核心：在重要行动前，看清时机、方向、人事、环境与风险，再作出更清晰的选择。",
              "Each pathway serves a different need, but all share one purpose: to clarify timing, direction, people dynamics, environment and risk before important action."
            )}
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const features = lang === "zh" ? pillar.featuresZh : pillar.featuresEn;
            return (
              <motion.article
                key={pillar.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group flex h-full flex-col border border-[oklch(0.78_0.055_70)] bg-[oklch(0.10_0.02_60)] p-7 text-white shadow-[0_22px_65px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d6ad63] hover:shadow-[0_28px_75px_rgba(0,0,0,0.18)] md:p-8"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-14 w-14 items-center justify-center border border-[#d6ad63]/55 text-[#d6ad63]">
                    <Icon size={25} />
                  </div>
                  <span className="text-4xl font-semibold text-white/10">{pillar.number}</span>
                </div>

                <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#d6ad63]">
                  {t(pillar.eyebrowZh, pillar.eyebrowEn)}
                </p>
                <h3
                  className="mt-3 text-3xl font-semibold leading-tight text-[#f4dfb0]"
                  style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
                >
                  {t(pillar.titleZh, pillar.titleEn)}
                </h3>
                <p className="mt-5 text-sm leading-7 text-white/65">{t(pillar.bodyZh, pillar.bodyEn)}</p>

                <div className="mt-6 space-y-3 border-t border-white/10 pt-6">
                  {features.map((feature) => (
                    <p key={feature} className="flex items-start gap-3 text-sm leading-6 text-white/72">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d6ad63]" />
                      {feature}
                    </p>
                  ))}
                </div>

                <div className="mt-auto flex flex-col gap-3 pt-8">
                  <Link
                    href={pillar.href}
                    className="inline-flex items-center justify-between border border-[#d6ad63]/65 px-5 py-3.5 text-sm font-bold text-[#f4dfb0] transition hover:bg-[#d6ad63] hover:text-black"
                  >
                    {t(pillar.ctaZh, pillar.ctaEn)}
                    <ArrowRight size={16} />
                  </Link>
                  {pillar.secondaryHref && (
                    <Link
                      href={pillar.secondaryHref}
                      className="inline-flex items-center justify-between px-1 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white/48 transition hover:text-[#d6ad63]"
                    >
                      {t(pillar.secondaryCtaZh || "", pillar.secondaryCtaEn || "")}
                      <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-10 border-l-2 border-[#d6ad63] bg-white px-6 py-5 text-sm leading-7 text-[oklch(0.38_0.02_60)] shadow-sm">
          {t(
            "不确定适合哪一类服务？可先说明你的身份、当前问题与希望作出决定的时间，我们会协助你匹配课程、企业顾问或个人咨询路径。",
            "Not sure which pathway fits? Share your role, current situation and decision timeline, and we will help match you with the appropriate course, business advisory or personal consultation pathway."
          )}
        </div>
      </div>
    </section>
  );
}
