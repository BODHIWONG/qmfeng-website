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
      <div className="absolute inset-0">
        <img
          src={BG_IMAGE}
          alt="QiMing Feng Shui"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.04_0.02_60/0.7)] via-[oklch(0.06_0.02_60/0.85)] to-[oklch(0.06_0.02_60)]" />
      </div>

      <div className="relative container pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-px bg-[oklch(0.72_0.12_70)]" />
            <span className="text-[0.7rem] tracking-[0.3em] uppercase font-semibold text-[oklch(0.72_0.12_70)]">
              {t("奇明風水", "QIMING FENG SHUI")}
            </span>
            <div className="w-8 h-px bg-[oklch(0.72_0.12_70)]" />
          </motion.div>

          {/* NEW HERO CORE LINE */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6"
            style={{
              fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
              color: "oklch(0.98 0.01 75)",
            }}
          >
            {t(
              "以奇门洞察时局，以风水稳住格局",
              "Qi Men Dun Jia & Feng Shui for Clear Decisions, Stable Wealth and Real Change"
            )}
          </motion.h1>

          {/* SUPPORT LINE */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl mb-6"
            style={{ color: "oklch(0.72 0.10 70)" }}
          >
            {t(
              "为你做对关键决策，走稳每一步",
              "Make the right decisions at the right time"
            )}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm md:text-base mb-6 text-[oklch(0.60_0.02_70)]"
          >
            {t(
              "运用奇门遁甲 · 风水布局 · 八字命理",
              "Using Qi Men Dun Jia · Feng Shui · Bazi"
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-4 mb-10"
          >
            <span className="text-2xl md:text-3xl font-bold text-[oklch(0.72_0.12_70)]">
              From $288
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 font-bold uppercase tracking-wider bg-[oklch(0.72_0.12_70)] text-black"
            >
              {t("立即咨询", "Consult Now")}
              <ArrowRight size={18} />
            </a>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 border border-[oklch(0.72_0.12_70)] text-[oklch(0.72_0.12_70)]"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
