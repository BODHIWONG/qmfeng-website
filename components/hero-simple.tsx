"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const WA_LINK =
  "https://wa.me/6589418791?text=Hello%20Master%20Qiming%2C%20I%20would%20like%20to%20book%20a%20private%20Qimen%20Strategy%20briefing.";

const BG_IMAGE = "/master-home-hero.png";

export default function HeroSimple() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <img
          src={BG_IMAGE}
          alt="Master Huang Qiming Qimen Strategy Singapore strategic decision consultation"
          className="h-full w-full object-cover object-center opacity-82"
          loading="eager"
          fetchPriority="high"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/72 to-black/96" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/92" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(212,164,82,0.12),transparent_34%)]" />

        <div className="absolute right-[-12%] top-1/2 hidden h-[980px] w-[980px] -translate-y-1/2 rounded-full border border-[#d6ad63]/10 opacity-60 lg:block" />
        <div className="absolute right-[-8%] top-1/2 hidden h-[760px] w-[760px] -translate-y-1/2 rounded-full border border-[#d6ad63]/10 opacity-50 lg:block" />
        <div className="absolute right-[-4%] top-1/2 hidden h-[540px] w-[540px] -translate-y-1/2 rounded-full border border-[#d6ad63]/10 opacity-40 lg:block" />
        <div className="absolute right-[8%] top-[18%] hidden h-[70%] w-px rotate-45 bg-[#d6ad63]/10 lg:block" />
        <div className="absolute right-[8%] top-[18%] hidden h-[70%] w-px -rotate-45 bg-[#d6ad63]/10 lg:block" />
      </div>

      <div className="relative container flex min-h-screen items-center pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="ml-auto w-full max-w-5xl text-left">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-6 inline-flex items-center gap-4"
          >
            <span className="h-px w-10 bg-[#c89a45]" />
            <span
              className="text-xs font-semibold uppercase tracking-[0.32em] text-[#d6ad63]"
              style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}
            >
              Singapore · Strategic Wisdom Decision Method
            </span>
            <span className="hidden h-px w-10 bg-[#c89a45] sm:block" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="max-w-5xl text-5xl font-semibold uppercase leading-[0.92] tracking-[0.08em] text-[#f4dfb0] drop-shadow-[0_8px_28px_rgba(0,0,0,0.62)] sm:text-6xl md:text-7xl lg:text-[8rem]"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
          >
            Qimen Strategy
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-4 text-3xl font-semibold tracking-[0.26em] text-[#e2bd6b] md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
          >
            启明遁甲
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.16 }}
            className="mt-6 text-2xl font-semibold uppercase tracking-[0.28em] text-[#f1d38a] md:text-4xl"
            style={{ fontFamily: "var(--font-lato), var(--font-noto-serif), sans-serif" }}
          >
            Strategic Wisdom for Critical Decisions
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.2 }}
            className="mt-5 max-w-3xl text-lg leading-8 text-white/86 md:text-2xl"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
          >
            战略智慧决策方法 · 奇门决策咨询 · See the Whole Game
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24 }}
            className="mt-8 max-w-2xl border-l-2 border-[#d0a14a] bg-black/38 px-5 py-4 text-sm font-semibold leading-7 text-[#f1d38a] backdrop-blur-sm md:text-base"
            style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}
          >
            Led by Master Huang Qiming · 16+ years of Qi Men Dun Jia practice and strategic decision advisory experience
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28 }}
            className="mt-7 max-w-3xl text-base leading-8 text-white/82 md:text-lg"
            style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}
          >
            Qimen Strategy helps business owners, founders and individuals see timing, direction, people dynamics and risk before important decisions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-3 max-w-3xl text-sm leading-7 text-white/70 md:text-base"
            style={{ fontFamily: "var(--font-noto-sans), var(--font-lato), sans-serif" }}
          >
            启明遁甲以奇门决策为核心，帮助企业主与个人在关键行动前，看清时机、方向、人事关系与局势风险，做出更清醒的战略判断。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="mt-9 grid max-w-4xl grid-cols-2 gap-4 border-y border-[#c89a45]/30 py-5 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#e6c785] md:grid-cols-4"
            style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}
          >
            <span>时机判断</span>
            <span>方向选择</span>
            <span>人事关系</span>
            <span>局势风险</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="mt-8"
          >
            <div
              className="text-3xl font-semibold tracking-wide text-[#e2bd6b] md:text-4xl"
              style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
            >
              Qimen Decision Advisory From S$980
            </div>
            <p className="mt-2 text-sm text-white/75 md:text-base">
              See timing, direction, people and risk before your next move.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.46 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#d0a14a] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black shadow-[0_18px_46px_rgba(198,139,48,0.24)] transition-all duration-300 hover:scale-[1.02] hover:bg-[#e2bd6b]"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              <MessageCircle size={18} />
              Book a Private Qimen Strategy Session
            </a>

            <a
              href="/qimen-strategy-business"
              className="inline-flex items-center justify-center gap-3 border border-[#c89a45] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#f4dfb0] transition-colors duration-300 hover:bg-[#c89a45]/10"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              View Qimen Strategy Programs
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
