"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { ArrowRight, MessageCircle, Clock } from "lucide-react";

const WA_LINK = "https://wa.me/6589418791?text=Hello%20Master%20Huang%2C%20I%27d%20like%20to%20check%20my%20luck%20and%20book%20a%20consultation.";
const BG_IMAGE = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21551776220031_.pic_hd.jpg-GNpRqM2kWn8vIJ6dVMuaQl1bbVlyvR.png";

export default function HeroSimple() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[oklch(0.06_0.02_60)]">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={BG_IMAGE}
          alt="QiMing Feng Shui"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.04_0.02_60/0.7)] via-[oklch(0.06_0.02_60/0.85)] to-[oklch(0.06_0.02_60)]" />
      </div>

      {/* Content */}
      <div className="relative container pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Brand Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-px bg-[oklch(0.72_0.12_70)]" />
            <span
              className="text-[0.7rem] tracking-[0.3em] uppercase font-semibold"
              style={{
                fontFamily: "var(--font-lato), sans-serif",
                color: "oklch(0.72 0.12 70)",
              }}
            >
              {t("奇明風水", "QIMING FENG SHUI")}
            </span>
            <div className="w-8 h-px bg-[oklch(0.72_0.12_70)]" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] mb-6"
            style={{
              fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
              color: "oklch(0.98 0.01 75)",
            }}
          >
            {t(
              "趁早修正你的运势",
              "Fix Your Luck Before It Gets Worse"
            )}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl mb-4"
            style={{
              fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
              color: "oklch(0.72 0.10 70)",
            }}
          >
            {t(
              "旺财 · 避险 · 重置能量",
              "Make Money. Avoid Loss. Reset Your Energy."
            )}
          </motion.p>

          {/* Method Line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm md:text-base mb-6"
            style={{
              fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
              color: "oklch(0.60 0.02 70)",
            }}
          >
            {t(
              "运用奇门遁甲 · 风水布局 · 八字命理",
              "Using Qimen, Feng Shui & Bazi Strategy"
            )}
          </motion.p>

          {/* Trust Line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base md:text-lg mb-8 italic"
            style={{
              fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
              color: "oklch(0.55 0.03 70)",
            }}
          >
            {t(
              "大多数问题并非巧合 — 而是能量失衡",
              "Most Problems Are NOT Coincidence — They Are Energy Misalignment"
            )}
          </motion.p>

          {/* Price Anchor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-4 mb-10"
          >
            <span
              className="text-2xl md:text-3xl font-bold"
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            {/* Primary CTA */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold uppercase tracking-wider transition-all duration-300 hover:scale-[1.02]"
              style={{
                fontFamily: "var(--font-lato), sans-serif",
                background: "oklch(0.72 0.12 70)",
                color: "oklch(0.06 0.02 60)",
                boxShadow: "0 4px 30px oklch(0.72 0.12 70 / 0.3)",
              }}
            >
              {t("立即检测运势", "Check My Luck Now")}
              <ArrowRight size={18} />
            </a>

            {/* Secondary CTA */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold uppercase tracking-wider transition-all duration-300 hover:bg-[oklch(0.72_0.12_70)] hover:text-[oklch(0.06_0.02_60)]"
              style={{
                fontFamily: "var(--font-lato), sans-serif",
                background: "transparent",
                color: "oklch(0.72 0.12 70)",
                border: "2px solid oklch(0.72 0.12 70)",
              }}
            >
              <MessageCircle size={18} />
              {t("WhatsApp 大师", "WhatsApp Master Now")}
            </a>
          </motion.div>

          {/* Third CTA - Text Link */}
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm underline underline-offset-4 transition-colors hover:text-[oklch(0.72_0.12_70)]"
            style={{
              fontFamily: "var(--font-lato), sans-serif",
              color: "oklch(0.55 0.02 70)",
            }}
          >
            {t("做决定前先咨询", "Get Advice Before Making a Decision")}
          </motion.a>

          {/* Urgency Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 inline-flex items-center gap-3 px-5 py-3"
            style={{
              background: "oklch(0.12 0.02 60)",
              border: "1px solid oklch(0.25 0.02 60)",
            }}
          >
            <Clock size={16} className="text-[oklch(0.72_0.12_70)]" />
            <span
              className="text-sm font-semibold"
              style={{
                fontFamily: "var(--font-lato), sans-serif",
                color: "oklch(0.80 0.02 70)",
              }}
            >
              {t("每日仅限5位客户", "Only 5 Clients Per Day")}
            </span>
            <span
              className="text-xs px-2 py-0.5 animate-pulse"
              style={{
                fontFamily: "var(--font-lato), sans-serif",
                background: "oklch(0.55 0.15 25)",
                color: "oklch(0.98 0.01 75)",
              }}
            >
              {t("今日即将约满", "Today Almost Full")}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
