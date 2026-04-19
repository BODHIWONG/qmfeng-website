"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { Clock, Zap, ArrowRight } from "lucide-react";

const WA_LINK = "https://wa.me/6589418791?text=Hello%20Master%20Huang%2C%20I%27d%20like%20to%20book%20a%20consultation.";

export default function UrgencySection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-[oklch(0.06_0.02_60)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, oklch(0.72 0.10 70) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-[oklch(0.72_0.10_70/0.4)] bg-[oklch(0.72_0.10_70/0.1)]">
            <Zap size={16} className="text-[oklch(0.72_0.10_70)]" />
            <span
              className="text-sm font-bold tracking-wider uppercase"
              style={{
                fontFamily: "var(--font-lato), sans-serif",
                color: "oklch(0.72 0.10 70)",
              }}
            >
              {t("限时预约", "Limited Availability")}
            </span>
          </div>

          {/* Main Headline */}
          <h2
            className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
            style={{
              fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
              color: "oklch(0.95 0.01 75)",
            }}
          >
            {t("每日仅限5位咨询名额", "Only 5 Consultation Slots Per Day")}
          </h2>

          <p
            className="text-base md:text-lg mb-8 max-w-xl mx-auto"
            style={{
              fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
              color: "oklch(0.65 0.02 70)",
            }}
          >
            {t(
              "为确保每位客户获得最专注的服务，黄启明大师每日仅接受5位预约。热门时段经常提前一周满额，建议尽早预约。",
              "To ensure focused attention for every client, Master Huang accepts only 5 consultations daily. Popular slots often fill up a week in advance — book early to secure your preferred time."
            )}
          </p>

          {/* Time Indicator */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-[oklch(0.60_0.08_65)]" />
              <span
                className="text-sm"
                style={{
                  fontFamily: "var(--font-lato), sans-serif",
                  color: "oklch(0.60 0.02 70)",
                }}
              >
                {t("预约后24小时内回复", "Response within 24 hours")}
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-10 py-4 text-base font-bold uppercase tracking-wider transition-all duration-300"
            style={{
              fontFamily: "var(--font-lato), sans-serif",
              background: "oklch(0.72 0.10 70)",
              color: "oklch(0.08 0.02 60)",
            }}
          >
            {t("立即预约咨询", "Book Your Slot Now")}
            <ArrowRight size={18} />
          </motion.a>

          {/* Subtext */}
          <p
            className="text-xs mt-4"
            style={{
              fontFamily: "var(--font-lato), sans-serif",
              color: "oklch(0.50 0.02 70)",
            }}
          >
            {t("WhatsApp直达 · 无需等待", "Direct WhatsApp · No waiting")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
