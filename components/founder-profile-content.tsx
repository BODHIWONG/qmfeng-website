"use client";

import { ArrowRight, BriefcaseBusiness, Compass, ShieldCheck } from "lucide-react";
import Link from "next/link";
import MethodologySignature from "@/components/methodology-signature";
import { useLanguage } from "@/contexts/language-context";
import { useLocalizedHref } from "@/hooks/use-localized-href";

const FOUNDER_IMAGE = "/master-qiming-about.jpg";

const credentials = [
  { value: "18", zh: "年企业运营与管理经验", en: "Years of Business Operations & Management" },
  { value: "16+", zh: "年奇门遁甲实战经验", en: "Years of Practical Qi Men Dun Jia" },
  { value: "SG", zh: "新加坡｜中英文私密顾问", en: "Singapore · English & Chinese Advisory" },
];

const strengths = [
  {
    icon: BriefcaseBusiness,
    titleZh: "理解企业现实",
    titleEn: "Grounded in Business Reality",
    bodyZh: "18年企业运营与管理经验，使顾问工作能够落回现金流、人事、合作、执行、扩张与组织现实。",
    bodyEn: "18 years in business operations and management keeps the advisory grounded in cash flow, people, partnerships, execution, growth and organisational reality.",
  },
  {
    icon: Compass,
    titleZh: "Reality × Qimen",
    titleEn: "Reality × Qimen",
    bodyZh: "奇门不是替代商业判断，而是增加一重视角，用于观察时机、关系、动能、阻力与潜在机会。",
    bodyEn: "Qimen does not replace business judgement. It adds another lens for timing, relationships, momentum, resistance and emerging opportunity.",
  },
  {
    icon: ShieldCheck,
    titleZh: "独立、克制、边界清楚",
    titleEn: "Independent, Discreet, Clearly Bounded",
    bodyZh: "提供独立判断与风险视角，不代替法律、财务、税务或受监管专业意见，最终决定始终属于客户。",
    bodyEn: "Provides independent perspective and risk awareness without replacing legal, financial, tax or regulated professional advice. The final decision remains with the client.",
  },
];

export default function FounderProfileContent() {
  const { t } = useLanguage();
  const localizeHref = useLocalizedHref();

  return (
    <main className="bg-[#050403] text-white">
      <section className="relative overflow-hidden border-b border-[#d6ad63]/20 px-4 pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(214,173,99,0.18),transparent_34%)]" />
        <div className="container relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d6ad63]">Huang Qiming · Founder, Qimen Strategy</p>
            <h1 className="mt-6 text-5xl font-semibold leading-[0.98] text-[#f4dfb0] md:text-7xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
              {t("黄启明", "Huang Qiming")}
            </h1>
            <p className="mt-5 text-xl font-semibold leading-tight text-[#e2bd6b] md:text-3xl">
              {t("战略决策顾问｜Business Experience × Qimen Insight", "Strategic Decision Advisor · Business Experience × Qimen Insight")}
            </p>
            <p className="mt-8 max-w-3xl text-base leading-8 text-white/72 md:text-lg">
              {t(
                "黄启明拥有约18年企业运营与管理经验，以及16年以上奇门遁甲实战经验。他创立 Qimen Strategy，希望把现实商业判断与东方决策智慧放在同一张桌面上，帮助企业主、领导者与家族企业在重大承诺之前看得更完整。",
                "Huang Qiming brings approximately 18 years of business operations and management experience together with more than 16 years of practical Qi Men Dun Jia. He founded Qimen Strategy to place real-world business judgement and Eastern decision intelligence on the same table, helping business owners, leaders and family enterprises see more before major commitments are made."
              )}
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/60">
              {t("核心工作不是替客户决定，而是帮助客户找到真正的决策靶心，并在方向确定之后持续校准战略轴心。", "The role is not to decide for the client, but to help identify the true decision bullseye and continuously calibrate the strategic axis after direction is chosen.")}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link href={localizeHref("/contact")} className="inline-flex items-center justify-center gap-3 bg-[#d6ad63] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black hover:bg-[#f4dfb0]">
                {t("申请私密咨询", "Request a Private Consultation")}<ArrowRight size={17} />
              </Link>
              <Link href={localizeHref("/enterprise-strategic-advisory")} className="inline-flex items-center justify-center gap-3 border border-[#d6ad63]/65 px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#f4dfb0] hover:bg-[#d6ad63]/10">
                {t("了解企业顾问", "Explore Enterprise Advisory")}<ArrowRight size={17} />
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border border-[#d6ad63]/30 bg-[#0b0907] shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
            <img src={FOUNDER_IMAGE} alt={t("黄启明｜Qimen Strategy创始人", "Huang Qiming, Founder of Qimen Strategy")} className="aspect-[4/5] w-full object-cover object-center" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent p-6 md:p-7">
              <p className="text-3xl font-semibold text-[#f4dfb0]" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>{t("黄启明", "Huang Qiming")}</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-[#d6ad63]">Founder, Qimen Strategy · Strategic Decision Advisor</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d6ad63]/15 bg-[#0a0806] px-4 py-12">
        <div className="container mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {credentials.map((item) => (
            <div key={item.value} className="border border-[#d6ad63]/20 bg-white/[0.025] p-6">
              <p className="text-4xl font-semibold text-[#f4dfb0]">{item.value}</p>
              <p className="mt-2 text-sm leading-6 text-white/58">{t(item.zh, item.en)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">{t("一个独立的决策视角", "An Independent Decision Perspective")}</p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
              {t("既理解现实，也保留另一重观察局势的方法。", "Grounded in Reality, With Another Lens on the Situation.")}
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/62">
              {t("员工有立场，合作伙伴有利益，家人有情绪，不同专业顾问也会从各自学科出发。Qimen Strategy 的角色，是在这些声音之外，为决策者提供一个独立、私密、跨维度的思考空间。", "Employees have positions, partners have interests, families have emotions, and professional advisers naturally see through their own disciplines. Qimen Strategy provides an independent, confidential space in which the decision-maker can examine the wider situation across those perspectives.")}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {strengths.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.titleEn} className="border border-[#d6ad63]/20 bg-white/[0.03] p-7">
                  <Icon className="text-[#d6ad63]" size={24} />
                  <h3 className="mt-5 text-2xl font-semibold text-[#f4dfb0]">{t(item.titleZh, item.titleEn)}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/62">{t(item.bodyZh, item.bodyEn)}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <MethodologySignature />

      <section className="border-t border-[#d6ad63]/20 bg-black px-4 py-20 text-center md:py-24">
        <div className="container mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d6ad63]">We advise. You decide.</p>
          <h2 className="mt-5 text-3xl font-semibold text-[#f4dfb0] md:text-5xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
            {t("重要决定之前，先把真正的问题看清。", "Before the Major Decision, See the Real Problem Clearly.")}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/62">
            {t("如果你正在面对企业方向、合作、人事、传承或其他重大决定，可以先通过私密咨询说明背景与决策节点。", "If you are facing a major decision involving business direction, partnerships, people, succession or another high-stakes matter, begin with a confidential conversation about the context and decision point.")}
          </p>
          <Link href={localizeHref("/contact")} className="mt-8 inline-flex items-center justify-center gap-3 bg-[#d6ad63] px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black hover:bg-[#f4dfb0]">
            {t("申请私密咨询", "Request a Private Consultation")}<ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
