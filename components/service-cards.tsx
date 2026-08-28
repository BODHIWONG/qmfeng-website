"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Building2, UsersRound } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { useLocalizedHref } from "@/hooks/use-localized-href";

const pillars = [
  {
    number: "01",
    icon: BriefcaseBusiness,
    titleZh: "企业战略顾问",
    titleEn: "Enterprise Strategic Advisory",
    bodyZh: "服务企业主与创始人，聚焦方向、扩张、合作、投资、关键人事与重大经营时机。",
    bodyEn: "For founders and business owners navigating direction, expansion, partnerships, investment, key people and critical timing.",
    href: "/enterprise-strategic-advisory",
    ctaZh: "了解企业战略顾问",
    ctaEn: "Explore Enterprise Advisory",
  },
  {
    number: "02",
    icon: Building2,
    titleZh: "董事长与创始人顾问",
    titleEn: "Chairman & Founder Advisory",
    bodyZh: "为承担重大责任的领导者提供独立、私密的决策支持，在重要承诺作出之前多看一层。",
    bodyEn: "Independent and confidential decision support for leaders carrying significant responsibility before major commitments are made.",
    href: "/chairman-founder-advisory",
    ctaZh: "了解董事长顾问",
    ctaEn: "Explore Chairman Advisory",
  },
  {
    number: "03",
    icon: UsersRound,
    titleZh: "家族企业与传承",
    titleEn: "Family Business & Succession",
    bodyZh: "围绕接班准备、创始人与二代对齐、角色权责、领导力交接与长期延续提供决策支持。",
    bodyEn: "Advisory on succession readiness, founder-successor alignment, roles, authority, leadership transition and long-term continuity.",
    href: "/family-business-succession",
    ctaZh: "了解家族企业传承",
    ctaEn: "Explore Family Business Advisory",
  },
];

export default function ServiceCards() {
  const { t } = useLanguage();
  const localizeHref = useLocalizedHref();

  return (
    <section id="services" className="bg-[oklch(0.97_0.012_75)] py-20 md:py-28">
      <div className="container">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[oklch(0.60_0.08_65)]">{t("战略决策顾问", "Strategic Decision Advisory")}</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
            {t("为重要决策提供更完整的视角", "A Wider Field of View for Important Decisions")}
          </h2>
          <p className="mt-5 text-base leading-8 text-[oklch(0.42_0.02_60)]">
            {t("我们不替客户做决定。我们帮助决策者在战略、人、时机与传承之间，看见可能被忽略的变量。", "We do not make decisions for clients. We help decision-makers see variables that may be overlooked across strategy, people, timing and succession.")}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.article key={pillar.number} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="flex min-h-[390px] flex-col border border-[#d8c6aa] bg-[#17130f] p-8 text-white shadow-[0_22px_60px_rgba(0,0,0,0.10)]">
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
            <p className="font-bold text-[#2a2118]">{t("个人重大决策", "Individual Decisions")}</p>
            <p className="mt-1 text-sm text-[#6b5a48]">{t("S$398 · S$698 · S$998 三档决策咨询，根据问题复杂度选择。", "S$398 · S$698 · S$998 decision consultations, selected by decision complexity.")}</p>
          </div>
          <Link href={localizeHref("/personal-advisory")} className="inline-flex items-center gap-2 text-sm font-bold text-[#8a642f]">{t("查看决策咨询", "View Decision Consultation")}<ArrowRight size={16} /></Link>
        </div>
      </div>
    </section>
  );
}
