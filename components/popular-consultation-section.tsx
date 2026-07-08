"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, HeartHandshake } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function PopularConsultationSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-[oklch(0.97_0.012_75)] pb-16 md:pb-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="overflow-hidden border border-[oklch(0.84_0.04_72)] bg-white shadow-[0_18px_60px_rgba(83,59,24,0.08)]"
        >
          <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-[oklch(0.90_0.02_75)] bg-[oklch(0.15_0.025_60)] p-8 text-white md:border-b-0 md:border-r md:border-[oklch(0.42_0.07_70)] md:p-10">
              <div className="mb-7 flex h-14 w-14 items-center justify-center border border-[oklch(0.72_0.12_70)] text-[oklch(0.82_0.12_75)]">
                <HeartHandshake size={26} />
              </div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[oklch(0.78_0.12_75)]">
                {t("热门咨询入口", "Popular Consultation Area")}
              </p>
              <h2
                className="text-3xl font-bold leading-tight md:text-5xl"
                style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
              >
                {t("感情与婚姻决策咨询", "Relationship & Marriage Decision Advisory")}
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/68 md:text-base">
                {t(
                  "当一段关系走到十字路口，真正困难的往往不是感情本身，而是接下来该如何决定。",
                  "When a relationship reaches a crossroads, the real difficulty is often the decision that follows."
                )}
              </p>
            </div>

            <div className="flex flex-col justify-between p-8 md:p-10">
              <div>
                <p className="text-sm leading-7 text-[oklch(0.35_0.025_60)] md:text-base md:leading-8">
                  {t(
                    "这是一项私密的一对一奇门遁甲决策咨询，适合正在面对感情不确定、婚姻方向、复合、分开、关系消耗或重要情感选择的人士。启明遁甲帮助你在行动前看清关系局势、对方状态、时机与下一步方向。",
                    "This private one-to-one Qi Men Dun Jia advisory is suitable for clients facing relationship uncertainty, marriage direction, reconciliation, separation, emotional exhaustion or an important relationship decision. Qimen Strategy helps you understand the relationship dynamics, the other person’s position, timing and next-step direction before you act."
                  )}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {[
                    t("复合或分开", "Reconcile or Separate"),
                    t("婚姻方向", "Marriage Direction"),
                    t("关系消耗", "Emotional Exhaustion"),
                    t("下一步选择", "Next Step"),
                  ].map((item) => (
                    <span
                      key={item}
                      className="border border-[oklch(0.82_0.05_75)] bg-[oklch(0.98_0.015_78)] px-4 py-2 text-xs font-semibold text-[oklch(0.34_0.035_65)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 border-t border-[oklch(0.90_0.02_75)] pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm font-semibold text-[oklch(0.44_0.035_65)]">
                  {t("私密预约制咨询", "Private advisory by appointment")}
                </p>
                <Link
                  href="/relationship-clarity-reading-singapore"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[oklch(0.30_0.03_70)] transition-colors hover:text-[oklch(0.60_0.08_65)]"
                >
                  {t("查看关系决策咨询", "View Relationship Advisory")}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
