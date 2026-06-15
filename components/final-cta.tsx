"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { ArrowRight, MessageCircle, Calendar } from "lucide-react";

const WA_LINK =
  "https://wa.me/6589593499?text=Hello%20Master%20Qiming%2C%20I%20would%20like%20to%20book%20a%20private%20Qimen%20Strategy%20session.";

export default function FinalCTA() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-[oklch(0.06_0.02_60)] py-20 md:py-28">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.72 0.12 70 / 0.1) 0%, transparent 70%)",
        }}
      />

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-[oklch(0.72_0.12_70)]"
          >
            {t("预约私密奇门决策咨询", "Book a Private Qimen Strategy Session")}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
            style={{
              fontFamily:
                "var(--font-cormorant), var(--font-noto-serif), serif",
            }}
          >
            {t(
              "关键决定前，先看清局势",
              "See the situation clearly before you decide"
            )}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mb-5 max-w-2xl text-base leading-8 text-white/76 md:text-lg"
          >
            {t(
              "如果你正在面对合作、投资、转型、任用、签约或人生方向选择，可以先通过一次私密奇门决策咨询，看清时机、方向、人事关系与风险结构。",
              "If you are facing a partnership, investment, transition, appointment, contract or major life-direction choice, a private Qimen Strategy session can help you read timing, direction, people dynamics and risk structure before action."
            )}
          </motion.p>

          <p className="mb-10 text-sm font-semibold text-[oklch(0.72_0.12_70)]">
            {t("正式联络电话 / WhatsApp：+65 8959 3499", "Official Phone / WhatsApp: +65 8959 3499")}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 px-10 py-5 text-base font-bold uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] sm:w-auto"
              style={{
                fontFamily: "var(--font-lato), sans-serif",
                background: "oklch(0.72 0.12 70)",
                color: "oklch(0.06 0.02 60)",
                boxShadow: "0 4px 30px oklch(0.72 0.12 70 / 0.3)",
              }}
            >
              <MessageCircle size={20} />
              {t("WhatsApp 预约", "Book on WhatsApp")}
            </a>

            <a
              href="/qimen-strategy-business"
              className="inline-flex w-full items-center justify-center gap-3 border-2 border-[oklch(0.72_0.12_70)] px-10 py-5 text-base font-bold uppercase tracking-wider text-[oklch(0.72_0.12_70)] transition-all duration-300 hover:bg-[oklch(0.72_0.12_70)] hover:text-[oklch(0.06_0.02_60)] sm:w-auto"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              <Calendar size={20} />
              {t("查看顾问方案", "View Advisory Programs")}
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
