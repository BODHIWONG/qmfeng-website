"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, BriefcaseBusiness, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { useLocalizedHref } from "@/hooks/use-localized-href";

const CONSULTATION_WHATSAPP =
  "https://wa.me/6589593499?text=Hi%20Qimen%20Strategy%2C%20I%27d%20like%20to%20ask%20about%20a%20consultation.%20My%20current%20situation%20is%3A";

export default function FinalCTA() {
  const { t } = useLanguage();
  const localizeHref = useLocalizedHref();

  return (
    <section className="relative overflow-hidden bg-[oklch(0.06_0.02_60)] py-20 md:py-28">
      <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at center, oklch(0.72 0.12 70 / 0.12) 0%, transparent 70%)" }} />
      <div className="container relative">
        <div className="mx-auto max-w-6xl text-center">
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[oklch(0.72_0.12_70)]">
            {t("个人咨询 · 企业顾问 · 奇门课程", "Personal Advisory · Business Advisory · Qi Men Courses")}
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
            {t("不确定适合哪一种服务？先说明你正在面对的问题", "Not Sure Which Service Fits? Start With the Situation You Are Facing")}
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto mt-6 max-w-4xl text-base leading-8 text-white/70 md:text-lg">
            {t("通过WhatsApp简要说明当前情况，我们会先协助判断更适合八字命理分析、奇门遁甲咨询、企业战略顾问，还是奇门课程。", "Briefly share your current situation on WhatsApp. We will first help identify whether Bazi Analysis, a Qi Men Dun Jia consultation, Business Strategic Advisory or a Qi Men course is the appropriate pathway.")}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 grid gap-4 md:grid-cols-3">
            <a href={CONSULTATION_WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 border-2 border-[oklch(0.72_0.12_70)] bg-[oklch(0.72_0.12_70)] px-7 py-5 text-sm font-bold uppercase tracking-[0.11em] text-[oklch(0.06_0.02_60)] transition hover:scale-[1.02]">
              <MessageCircle size={20} />{t("WhatsApp咨询", "WhatsApp Consultation")}<ArrowRight size={18} />
            </a>
            <Link href={localizeHref("/enterprise-strategic-advisory")} className="inline-flex items-center justify-center gap-3 border-2 border-[oklch(0.72_0.12_70)] px-7 py-5 text-sm font-bold uppercase tracking-[0.11em] text-[oklch(0.72_0.12_70)] transition hover:bg-[oklch(0.72_0.12_70)] hover:text-[oklch(0.06_0.02_60)]">
              <BriefcaseBusiness size={20} />{t("企业顾问", "Business Advisory")}
            </Link>
            <Link href={localizeHref("/courses")} className="inline-flex items-center justify-center gap-3 border-2 border-[oklch(0.72_0.12_70)] px-7 py-5 text-sm font-bold uppercase tracking-[0.11em] text-[oklch(0.72_0.12_70)] transition hover:bg-[oklch(0.72_0.12_70)] hover:text-[oklch(0.06_0.02_60)]">
              <BookOpen size={20} />{t("奇门课程", "Qi Men Courses")}
            </Link>
          </motion.div>
          <p className="mt-7 text-sm font-semibold text-[oklch(0.72_0.12_70)]">WhatsApp: +65 8959 3499 · Bedok, Singapore</p>
        </div>
      </div>
    </section>
  );
}
