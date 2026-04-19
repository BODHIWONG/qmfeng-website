"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { ArrowRight, MessageCircle, Calendar } from "lucide-react";

const WA_LINK = "https://wa.me/6589418791?text=Hello%20Master%20Huang%2C%20I%27d%20like%20to%20book%20a%20consultation%20today.";

export default function FinalCTA() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-[oklch(0.06_0.02_60)] relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at center, oklch(0.72 0.12 70 / 0.1) 0%, transparent 70%)",
        }}
      />

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            style={{
              fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
              color: "oklch(0.98 0.01 75)",
            }}
          >
            {t(
              "别等问题恶化",
              "Don't Wait Until Problems Get Worse"
            )}
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
            style={{
              fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
              color: "oklch(0.72 0.10 70)",
            }}
          >
            {t(
              "运势可以改变 — 但时机很重要",
              "Your Luck Can Change — But Timing Matters"
            )}
          </motion.p>

          {/* Price */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-4 mb-10"
          >
            <span
              className="text-3xl md:text-4xl font-bold"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                color: "oklch(0.72 0.12 70)",
              }}
            >
              From $288
            </span>
            <span
              className="text-sm px-3 py-1"
              style={{
                fontFamily: "var(--font-lato), sans-serif",
                background: "oklch(0.72 0.12 70 / 0.15)",
                color: "oklch(0.72 0.12 70)",
                border: "1px solid oklch(0.72 0.12 70 / 0.3)",
              }}
            >
              {t("每日限额", "Limited Daily Slots")}
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary CTA */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 text-base font-bold uppercase tracking-wider transition-all duration-300 hover:scale-[1.02]"
              style={{
                fontFamily: "var(--font-lato), sans-serif",
                background: "oklch(0.72 0.12 70)",
                color: "oklch(0.06 0.02 60)",
                boxShadow: "0 4px 30px oklch(0.72 0.12 70 / 0.3)",
              }}
            >
              <MessageCircle size={20} />
              {t("WhatsApp 大师", "WhatsApp Master Now")}
            </a>

            {/* Secondary CTA */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 text-base font-bold uppercase tracking-wider transition-all duration-300 hover:bg-[oklch(0.72_0.12_70)] hover:text-[oklch(0.06_0.02_60)]"
              style={{
                fontFamily: "var(--font-lato), sans-serif",
                background: "transparent",
                color: "oklch(0.72 0.12 70)",
                border: "2px solid oklch(0.72 0.12 70)",
              }}
            >
              <Calendar size={20} />
              {t("立即预约", "Book My Consultation Today")}
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
