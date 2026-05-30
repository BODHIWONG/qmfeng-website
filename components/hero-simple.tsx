"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const WA_LINK =
  "https://wa.me/6589418791?text=Hello%20Master%20Qiming%2C%20I%20would%20like%20to%20consult%20about%20Enterprise%20Strategic%20Decision%20Advisory.";

const BG_IMAGE = "/master-home-hero.png";

export default function HeroSimple() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <img
          src={BG_IMAGE}
          alt="Master Huang Qiming Enterprise Strategic Decision Advisory Singapore"
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
              Singapore · Enterprise Strategic Decision Advisory
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
            className="mt-6 text-2xl font-semibold uppercase tracking-[0.18em] text-[#f1d38a] md:text-4xl"
            style={{ fontFamily: "var(--font-lato), var(--font-noto-serif), sans-serif" }}
          >
            Enterprise Strategic Decision Advisory
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.18 }}
            className="mt-3 text-xl font-semibold tracking-[0.18em] text-[#e2bd6b] md:text-3xl"
            style={{ fontFamily: "var(--font-noto-serif), var(--font-cormorant), serif" }}
          >
            企业战略决策顾问
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.22 }}
            className="mt-5 max-w-4xl text-lg leading-8 text-white/86 md:text-2xl"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
          >
            See the Whole Game Before You Decide · 关键决策前，先看清全局
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.26 }}
            className="mt-8 max-w-4xl border-l-2 border-[#d0a14a] bg-black/38 px-5 py-4 text-sm font-semibold leading-7 text-[#f1d38a] backdrop-blur-sm md:text-base"
            style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}
          >
            Annual Strategy · Feng Shui Alignment · People Assessment · Founder Advisory
            <br />
            年度战略预判 · 企业风水布局 · 人事合作判断 · 重大决策陪跑
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="mt-7 max-w-4xl text-base leading-8 text-white/82 md:text-lg"
            style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}
          >
            QIMEN STRATEGY is an Enterprise Strategic Decision Advisory system rooted in 16+ years of Qi Men decision practice. We support business owners, founders and key decision-makers through annual strategic forecasting, business and personal Feng Shui alignment, people and partnership assessment, and major decision advisory.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-3 max-w-4xl text-sm leading-7 text-white/70 md:text-base"
            style={{ fontFamily: "var(--font-noto-sans), var(--font-lato), sans-serif" }}
          >
            启明遁甲以 16 年奇门决策实战经验为根基，结合年度战略预判、企业与个人风水布局、人事合作关系判断及重大决策陪跑，长期服务企业主、创始人与关键决策者。所有咨询均采用预约制，并根据具体问题背景、决策难度与服务范围进行私密判断及顾问安排。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="mt-9 grid max-w-5xl grid-cols-2 gap-4 border-y border-[#c89a45]/30 py-5 text-center text-sm font-semibold uppercase tracking-[0.14em] text-[#e6c785] md:grid-cols-5"
            style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}
          >
            <span>Timing · 天时</span>
            <span>Environment · 地利</span>
            <span>People · 人和</span>
            <span>Inner Mastery · 修为</span>
            <span>Growth · 成长</span>
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
              Book Consultation
            </a>

            <a
              href="/enterprise-strategic-advisory"
              className="inline-flex items-center justify-center gap-3 border border-[#c89a45] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#f4dfb0] transition-colors duration-300 hover:bg-[#c89a45]/10"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              Enterprise Advisory
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
