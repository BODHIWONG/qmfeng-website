"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, BriefcaseBusiness } from "lucide-react";
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
        <div className="mx-auto max-w-5xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-[oklch(0.72_0.12_70)]"
          >
            Qimen Strategy Advisory · Qimen Strategy Academy
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
          >
            {t("选择你现在真正需要的路径", "Choose the pathway you actually need now")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/70 md:text-lg"
          >
            {t(
              "正在面对经营瓶颈、投资、高管转型或个人重大选择，可申请私密顾问评估；希望系统学习奇门遁甲，可直接查看每周课程与可选班次。",
              "Apply for private advisory when facing business bottlenecks, investment, executive transition or a major personal decision. Choose the academy pathway when you want structured weekly Qi Men Dun Jia training."
            )}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/enterprise-strategic-advisory"
              className="inline-flex w-full items-center justify-center gap-3 bg-[oklch(0.72_0.12_70)] px-9 py-5 text-sm font-bold uppercase tracking-[0.13em] text-[oklch(0.06_0.02_60)] transition hover:scale-[1.02] sm:w-auto"
            >
              <BriefcaseBusiness size={20} />
              {t("申请顾问服务", "Apply for Advisory")}
            </Link>
            <Link
              href="/courses"
              className="inline-flex w-full items-center justify-center gap-3 border-2 border-[oklch(0.72_0.12_70)] px-9 py-5 text-sm font-bold uppercase tracking-[0.13em] text-[oklch(0.72_0.12_70)] transition hover:bg-[oklch(0.72_0.12_70)] hover:text-[oklch(0.06_0.02_60)] sm:w-auto"
            >
              <BookOpen size={20} />
              {t("查看每周课程", "View Weekly Courses")}
              <ArrowRight size={18} />
            </Link>
          </motion.div>
          <p className="mt-7 text-sm font-semibold text-[oklch(0.72_0.12_70)]">WhatsApp: +65 8959 3499 · Bedok, Singapore</p>
        </div>
      </div>
    </section>
  );
}
