"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { useLocalizedHref } from "@/hooks/use-localized-href";

const BG_IMAGE = "/master-home-hero.png";

export default function HeroSimple() {
  const { t } = useLanguage();
  const localizeHref = useLocalizedHref();

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <img src={BG_IMAGE} alt={t("黄启明｜启明遁甲创始人", "Qiming Huang, Founder of Qimen Strategy")} className="h-full w-full object-cover object-center opacity-72" loading="eager" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/38 via-black/78 to-black/98" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/95" />
      </div>

      <div className="relative container flex min-h-screen items-center pb-20 pt-32 md:pt-40">
        <div className="ml-auto w-full max-w-5xl">
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">
            Qimen Strategy · Strategic Decision Advisory
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 }} className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.98] text-[#f4dfb0] sm:text-6xl lg:text-7xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
            {t("重大决策之前，先看全局。", "See the Whole Game Before You Decide.")}
          </motion.h1>
          <motion.h2 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="mt-7 max-w-4xl text-xl font-semibold leading-relaxed text-white/88 md:text-2xl">
            {t("为企业主、领导者与家族企业提供战略决策顾问服务。", "Strategic Decision Advisory for Business Owners, Leaders & Family Enterprises.")}
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="mt-6 max-w-3xl text-base leading-8 text-white/66 md:text-lg">
            {t("融合现实商业经验与奇门决策分析，从战略、人事、时机与传承等多个维度，为重要决策提供另一重视角。", "Qimen Strategy combines practical business experience with Qimen-based decision analysis to provide an additional perspective on strategy, people, timing and succession.")}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href={localizeHref("/contact")} className="inline-flex items-center justify-center gap-3 bg-[#d0a14a] px-7 py-4 text-sm font-bold uppercase tracking-[0.1em] text-black hover:bg-[#e2bd6b]">
              {t("申请私密咨询", "Request a Private Consultation")}<ArrowRight size={17} />
            </Link>
            <Link href="#services" className="inline-flex items-center justify-center gap-2 border border-white/20 px-7 py-4 text-sm font-semibold text-white/82 hover:border-[#d6ad63] hover:text-[#f4dfb0]">
              {t("了解顾问服务", "Explore Our Advisory Services")}<ArrowRight size={16} />
            </Link>
          </motion.div>
          <div className="mt-10 grid max-w-4xl grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-4">
            {[t("战略", "Strategy"), t("人事", "People"), t("时机", "Timing"), t("传承", "Succession")].map((item) => <div key={item} className="bg-black/65 px-5 py-4 text-center text-xs font-bold uppercase tracking-[0.14em] text-[#e8cc91]">{item}</div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
