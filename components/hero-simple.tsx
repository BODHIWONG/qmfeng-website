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
            QIMEN STRATEGY · SINGAPORE
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 }} className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.98] text-[#f4dfb0] sm:text-6xl lg:text-7xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
            {t("以奇门观势，以布局应局，以陪跑助企业走得更稳。", "Read the Situation. Align the Space. Build with Ongoing Advisory.")}
          </motion.h1>
          <motion.h2 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="mt-7 max-w-4xl text-xl font-semibold leading-relaxed text-white/88 md:text-2xl">
            {t("立足新加坡，专注个人与企业决策分析、风水布局及企业长期陪跑。", "Singapore-based advisory for personal and business decisions, Feng Shui planning, and long-term business support.")}
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="mt-6 max-w-3xl text-base leading-8 text-white/66 md:text-lg">
            {t("启明遁甲以奇门遁甲作为决策分析的特色方法，结合实际经营背景与空间需求，为个人、企业主及管理团队提供更有结构的观察视角与行动参考。", "Qimen Strategy applies Qimen Dunjia as a distinctive decision-analysis framework, alongside real business context and spatial needs, to help individuals, founders and leadership teams assess options and plan their next steps.")}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href={localizeHref("/contact")} className="inline-flex items-center justify-center gap-3 bg-[#d0a14a] px-7 py-4 text-sm font-bold uppercase tracking-[0.1em] text-black hover:bg-[#e2bd6b]">
              {t("预约初步沟通", "Arrange an Initial Conversation")}<ArrowRight size={17} />
            </Link>
            <Link href="#services" className="inline-flex items-center justify-center gap-2 border border-white/20 px-7 py-4 text-sm font-semibold text-white/82 hover:border-[#d6ad63] hover:text-[#f4dfb0]">
              {t("了解三大核心业务", "Explore Our Three Core Services")}<ArrowRight size={16} />
            </Link>
          </motion.div>
          <div className="mt-10 grid max-w-4xl grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
            {[t("奇门遁甲决策分析", "Qimen Decision Analysis"), t("个人与企业风水布局", "Personal & Business Feng Shui"), t("企业长期陪跑", "Long-term Business Advisory")].map((item) => <div key={item} className="bg-black/65 px-4 py-4 text-center text-xs font-bold leading-5 uppercase tracking-[0.08em] text-[#e8cc91]">{item}</div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
