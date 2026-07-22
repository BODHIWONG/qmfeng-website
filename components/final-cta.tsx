"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, BriefcaseBusiness, UserRound } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";

export default function FinalCTA() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-[oklch(0.06_0.02_60)] py-20 md:py-28">
      <div
        className="absolute inset-0 opacity-30"
        style={{ background: "radial-gradient(ellipse at center, oklch(0.72 0.12 70 / 0.12) 0%, transparent 70%)" }}
      />
      <div className="container relative">
        <div className="mx-auto max-w-6xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[oklch(0.72_0.12_70)]"
          >
            Qi Men Courses · Business Advisory · Personal Advisory
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
          >
            {t("选择最符合你当前需要的服务路径", "Choose the Pathway That Matches Your Current Need")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-4xl text-base leading-8 text-white/70 md:text-lg"
          >
            {t(
              "希望系统学习，可进入奇门课程；正在处理经营瓶颈、投资、人事或转型问题，可申请企业陪跑；面对感情婚姻、个人重大决策、择日、手机号码、居家风水或空间净化需求，可查看个人咨询服务。",
              "Choose practical Qi Men education for structured learning, business advisory for high-stakes commercial decisions, or personal advisory for relationships, important life decisions, date selection, mobile number selection, residential Feng Shui and space clearing."
            )}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 grid gap-4 md:grid-cols-3"
          >
            <Link
              href="/courses"
              className="inline-flex items-center justify-center gap-3 border-2 border-[oklch(0.72_0.12_70)] bg-[oklch(0.72_0.12_70)] px-7 py-5 text-sm font-bold uppercase tracking-[0.11em] text-[oklch(0.06_0.02_60)] transition hover:scale-[1.02]"
            >
              <BookOpen size={20} />
              {t("奇门课程", "Qi Men Courses")}
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/enterprise-strategic-advisory"
              className="inline-flex items-center justify-center gap-3 border-2 border-[oklch(0.72_0.12_70)] px-7 py-5 text-sm font-bold uppercase tracking-[0.11em] text-[oklch(0.72_0.12_70)] transition hover:bg-[oklch(0.72_0.12_70)] hover:text-[oklch(0.06_0.02_60)]"
            >
              <BriefcaseBusiness size={20} />
              {t("企业陪跑", "Business Advisory")}
            </Link>
            <Link
              href="/personal-advisory"
              className="inline-flex items-center justify-center gap-3 border-2 border-[oklch(0.72_0.12_70)] px-7 py-5 text-sm font-bold uppercase tracking-[0.11em] text-[oklch(0.72_0.12_70)] transition hover:bg-[oklch(0.72_0.12_70)] hover:text-[oklch(0.06_0.02_60)]"
            >
              <UserRound size={20} />
              {t("个人咨询", "Personal Advisory")}
            </Link>
          </motion.div>
          <p className="mt-7 text-sm font-semibold text-[oklch(0.72_0.12_70)]">WhatsApp: +65 8959 3499 · Bedok, Singapore</p>
        </div>
      </div>
    </section>
  );
}
