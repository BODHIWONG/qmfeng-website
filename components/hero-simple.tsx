"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { ArrowRight, MessageCircle } from "lucide-react";

const WA_LINK =
  "https://wa.me/6589418791?text=Hello%20Master%20Qiming%2C%20I%20would%20like%20to%20book%20a%20professional%20consultation.";

const BG_IMAGE = "/master-home-hero.png";

export default function HeroSimple() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={BG_IMAGE}
          alt="Master Huang Qiming Qi Men Dun Jia and Feng Shui consultation in Singapore"
          className="h-full w-full object-cover object-center opacity-85"
        />

        {/* Premium black-gold overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/58 to-black/95" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_45%,rgba(212,164,82,0.08),transparent_38%)]" />
      </div>

      {/* Content */}
      <div className="relative container flex min-h-screen items-center pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="ml-auto w-full max-w-3xl text-left">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-6 inline-flex items-center gap-4"
          >
            <span className="h-px w-10 bg-[#c89a45]" />
            <span
              className="text-xs font-semibold tracking-[0.28em] text-[#d6ad63]"
              style={{
                fontFamily:
                  "var(--font-lato), var(--font-noto-sans), sans-serif",
              }}
            >
              {t("奇明風水 · 新加坡", "QIMING FENG SHUI · SINGAPORE")}
            </span>
            <span className="hidden h-px w-10 bg-[#c89a45] sm:block" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="max-w-3xl text-4xl font-semibold leading-tight text-[#f4dfb0] drop-shadow-[0_8px_28px_rgba(0,0,0,0.62)] sm:text-5xl md:text-6xl"
            style={{
              fontFamily:
                "var(--font-cormorant), var(--font-noto-serif), serif",
            }}
          >
            {t(
              "以奇门洞察时局，以风水稳住格局",
              "See the Timing with Qi Men, Steady the Situation with Feng Shui"
            )}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.14 }}
            className="mt-5 max-w-2xl border-l-2 border-[#d0a14a] bg-black/35 px-4 py-3 text-sm font-semibold leading-7 text-[#f1d38a] backdrop-blur-sm md:text-base"
            style={{
              fontFamily:
                "var(--font-lato), var(--font-noto-sans), sans-serif",
            }}
          >
            {t(
              "由黄启明大师主理｜16+年奇门遁甲、风水布局与空间能量净化实战经验",
              "Led by Master Huang Qiming | 16+ years in Qi Men Dun Jia, Feng Shui layout and space energy purification"
            )}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="mt-7 max-w-2xl text-base leading-8 text-white/85 md:text-lg"
            style={{
              fontFamily:
                "var(--font-lato), var(--font-noto-sans), sans-serif",
            }}
          >
            {t(
              "结合清华大学积极心理学培训认证，为事业财富、情感关系、空间能量与人生决策，提供清晰判断与落地布局。",
              "Combining Tsinghua University Positive Psychology Training Certification with traditional Chinese metaphysics, we provide clear guidance and actionable solutions for wealth, relationships, space energy, and major life decisions."
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-7 flex flex-wrap gap-x-5 gap-y-3 border-y border-[#c89a45]/30 py-4 text-sm font-medium tracking-wide text-[#e6c785]"
            style={{
              fontFamily:
                "var(--font-lato), var(--font-noto-sans), sans-serif",
            }}
          >
            <span>{t("16+年实战经验", "16+ Years Practice")}</span>
            <span className="text-[#c89a45]">·</span>
            <span>{t("清华大学积极心理学培训认证", "Tsinghua Positive Psychology Certification")}</span>
            <span className="text-[#c89a45]">·</span>
            <span>{t("新加坡本地服务", "Singapore Local Service")}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="mt-8"
          >
            <div
              className="text-3xl font-semibold tracking-wide text-[#e2bd6b] md:text-4xl"
              style={{
                fontFamily:
                  "var(--font-cormorant), var(--font-noto-serif), serif",
              }}
            >
              {t("专业咨询 From $288", "Consultation From $288")}
            </div>

            <p className="mt-2 text-sm text-white/75 md:text-base">
              {t(
                "风水 / 奇门 / 空间能量判断与布局建议起",
                "Feng Shui / Qi Men / Space Energy guidance and layout recommendations"
              )}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.44 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#d0a14a] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black shadow-[0_18px_46px_rgba(198,139,48,0.24)] transition-all duration-300 hover:scale-[1.02] hover:bg-[#e2bd6b]"
              style={{
                fontFamily: "var(--font-lato), sans-serif",
              }}
            >
              <MessageCircle size={18} />
              {t("WhatsApp 立即咨询", "WhatsApp Consultation")}
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center gap-3 border border-[#c89a45] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#f4dfb0] transition-colors duration-300 hover:bg-[#c89a45]/10"
              style={{
                fontFamily: "var(--font-lato), sans-serif",
              }}
            >
              {t("查看服务与价格", "View Services & Pricing")}
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
