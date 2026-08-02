"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen, BriefcaseBusiness, UserRound, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { useLocalizedHref } from "@/hooks/use-localized-href";

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
    icon: UserRound,
    eyebrowZh: "八字 · 奇门 · 重大决策 · 感情",
    eyebrowEn: "Bazi, Qi Men, Major Decisions & Relationships",
    titleZh: "个人咨询服务",
    titleEn: "Personal Advisory",
    bodyZh: "面向个人客户提供八字命理分析、奇门遁甲咨询、重大决策咨询、感情婚姻及其他生活优化服务。先说明情况，再由顾问协助匹配。",
    bodyEn: "Personal advisory including Bazi Analysis, Qi Men Dun Jia consultation, Major Decision Consultation, relationship and marriage advisory, and other life-optimisation services. Share the situation first and the consultant will help match the service.",
    featuresZh: ["八字命理分析", "奇门遁甲咨询", "重大决策咨询", "感情婚姻与人生选择"],
    featuresEn: ["Bazi Analysis", "Qi Men Dun Jia Consultation", "Major Decision Consultation", "Relationship, Marriage & Life Choices"],
    href: "/personal-advisory",
    ctaZh: "查看个人咨询",
    ctaEn: "Explore Personal Advisory",
  },
  {
    number: "02",
    icon: BriefcaseBusiness,
    eyebrowZh: "企业主与关键经营决策",
    eyebrowEn: "Founder & Business Decision Advisory",
    titleZh: "企业战略顾问",
    titleEn: "Business Strategic Advisory",
    bodyZh: "面向创业老板、企业主与高管，聚焦经营瓶颈、战略重点、合作人事、商业风水与重大经营选择，并通过阶段复盘持续校准方向。",
    bodyEn: "Strategic advisory for founders, business owners and executives navigating business bottlenecks, priorities, partnerships, people issues, Commercial Feng Shui and major operating decisions.",
    featuresZh: ["经营瓶颈与战略重点", "投资、合作与人事判断", "办公室、工厂与企业办公大楼风水", "90天试行与长期陪跑"],
    featuresEn: ["Bottlenecks & Strategic Priorities", "Investment, People & Partnership", "Office, Factory & Corporate Building Feng Shui", "90-Day & Ongoing Advisory"],
    href: "/enterprise-strategic-advisory",
    ctaZh: "了解企业顾问",
    ctaEn: "Explore Business Advisory",
    secondaryHref: "/commercial-feng-shui",
    secondaryCtaZh: "了解商业风水",
    secondaryCtaEn: "Explore Commercial Feng Shui",
  },
  {
    number: "03",
    icon: BookOpen,
    eyebrowZh: "奇门遁甲实战教学",
    eyebrowEn: "Practical Qi Men Education",
    titleZh: "奇门遁甲实战课程",
    titleEn: "Qi Men Dun Jia Courses",
    bodyZh: "从基础框架、读局顺序到案例分析与实际练习，帮助学员系统建立奇门遁甲的理解与应用能力。",
    bodyEn: "Structured learning from core framework and chart-reading sequence to case analysis and guided practical exercises.",
    featuresZh: ["基础 · 中级 · 高级 · 弟子班", "周末小班教学", "案例分析与实战练习"],
    featuresEn: ["Four-Level Pathway", "Weekend Small Groups", "Cases & Guided Practice"],
    href: "/courses",
    ctaZh: "查看课程体系",
    ctaEn: "Explore Courses",
    secondaryHref: "/course-registration?course=qimen-foundation&batch=2026-09-19",
    secondaryCtaZh: "选择班次并报名",
    secondaryCtaEn: "Select Batch & Register",
  },
];

export default function ServiceCards() {
  const { lang, t } = useLanguage();
  const localizeHref = useLocalizedHref();

  return (
    <section id="services" className="bg-[oklch(0.97_0.012_75)] py-16 md:py-24">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto mb-12 max-w-4xl text-center md:mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[oklch(0.60_0.08_65)]">{t("三大核心业务支柱", "Three Core Business Pillars")}</p>
          <h2 className="mb-5 text-3xl font-bold leading-tight md:text-5xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.15 0.02 60)" }}>
            {t("个人咨询、企业战略顾问与奇门课程", "Personal Advisory, Business Strategic Advisory and Qi Men Education")}
          </h2>
          <p className="text-sm leading-7 text-[oklch(0.42_0.02_60)] md:text-base">
            {t("三条路径服务不同需求。请先选择大方向，具体服务由顾问进一步说明。", "The three pathways serve different needs. Choose the general direction first and the consultant will explain the suitable service.")}
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const features = lang === "zh" ? pillar.featuresZh : pillar.featuresEn;
            return (
              <motion.article key={pillar.number} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: index * 0.08 }} className="group flex h-full flex-col border border-[oklch(0.78_0.055_70)] bg-[oklch(0.10_0.02_60)] p-7 text-white shadow-[0_22px_65px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d6ad63] hover:shadow-[0_28px_75px_rgba(0,0,0,0.18)] md:p-8">
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-14 w-14 items-center justify-center border border-[#d6ad63]/55 text-[#d6ad63]"><Icon size={25} /></div>
                  <span className="text-4xl font-semibold text-white/10">{pillar.number}</span>
                </div>
                <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#d6ad63]">{t(pillar.eyebrowZh, pillar.eyebrowEn)}</p>
                <h3 className="mt-3 text-3xl font-semibold leading-tight text-[#f4dfb0]" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>{t(pillar.titleZh, pillar.titleEn)}</h3>
                <p className="mt-5 text-sm leading-7 text-white/65">{t(pillar.bodyZh, pillar.bodyEn)}</p>
                <div className="mt-6 space-y-3 border-t border-white/10 pt-6">
                  {features.map((feature) => <p key={feature} className="flex items-start gap-3 text-sm leading-6 text-white/72"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d6ad63]" />{feature}</p>)}
                </div>
                <div className="mt-auto flex flex-col gap-3 pt-8">
                  <Link href={localizeHref(pillar.href)} className="inline-flex items-center justify-between border border-[#d6ad63]/65 px-5 py-3.5 text-sm font-bold text-[#f4dfb0] transition hover:bg-[#d6ad63] hover:text-black">
                    {t(pillar.ctaZh, pillar.ctaEn)}<ArrowRight size={16} />
                  </Link>
                  {pillar.secondaryHref && <Link href={localizeHref(pillar.secondaryHref)} className="inline-flex items-center justify-between px-1 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white/48 transition hover:text-[#d6ad63]">{t(pillar.secondaryCtaZh || "", pillar.secondaryCtaEn || "")}<ArrowRight size={14} /></Link>}
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-10 border-l-2 border-[#d6ad63] bg-white px-6 py-5 text-sm leading-7 text-[oklch(0.38_0.02_60)] shadow-sm">
          {t("不确定适合哪一条路径？请先说明目前的情况，我们会协助匹配个人咨询、企业顾问、商业风水或奇门课程。", "Not sure which pathway fits? Share the current situation and we will help match you with Personal Advisory, Business Advisory, Commercial Feng Shui or a Qi Men course.")}
        </div>
      </div>
    </section>
  );
}
