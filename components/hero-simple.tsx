"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const WA_LINK =
  "https://wa.me/6589593499?text=Hello%20Qimen%20Strategy%2C%20I%20would%20like%20to%20book%20a%20private%20Qi%20Men%20Dun%20Jia%20consultation%20in%20Singapore.";

const BG_IMAGE = "/master-home-hero.png";

export default function HeroSimple() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <img
          src={BG_IMAGE}
          alt="启明遁甲决策智库 Qimen Strategy Singapore consultation by Huang Qiming"
          className="h-full w-full object-cover object-center opacity-82"
          loading="eager"
          fetchPriority="high"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/74 to-black/96" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/24 via-transparent to-black/94" />
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
              Singapore · Qi Men Dun Jia Consultation · Qimen Strategy
            </span>
            <span className="hidden h-px w-10 bg-[#c89a45] sm:block" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="max-w-5xl text-4xl font-semibold uppercase leading-[0.98] tracking-[0.06em] text-[#f4dfb0] drop-shadow-[0_8px_28px_rgba(0,0,0,0.62)] sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
          >
            Qi Men Dun Jia Consultation in Singapore
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-5 text-2xl font-semibold tracking-[0.12em] text-[#e2bd6b] md:text-4xl"
            style={{ fontFamily: "var(--font-noto-serif), var(--font-cormorant), serif" }}
          >
            新加坡奇门遁甲咨询｜启明遁甲决策智库 · Qimen Strategy
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.16 }}
            className="mt-6 max-w-4xl text-2xl font-semibold leading-tight tracking-[0.08em] text-[#f1d38a] md:text-4xl"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
          >
            Before you decide, review timing, direction, people and risk.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22 }}
            className="mt-8 max-w-4xl border-l-2 border-[#d0a14a] bg-black/38 px-5 py-4 text-sm font-semibold leading-7 text-[#f1d38a] backdrop-blur-sm md:text-base"
            style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}
          >
            Private advisory for business, career, relationship, Feng Shui and major life decisions
            <br />
            事业 · 合作 · 感情 · 风水 · 重大人生选择｜先看清局势，再决定下一步
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28 }}
            className="mt-7 max-w-4xl text-base leading-8 text-white/82 md:text-lg"
            style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}
          >
            Qimen Strategy helps business owners, founders, executives and individuals gain clearer insight before important action. We apply Qi Men Dun Jia together with strategic Feng Shui, people assessment and practical decision advisory.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-3 max-w-4xl text-sm leading-7 text-white/70 md:text-base"
            style={{ fontFamily: "var(--font-noto-sans), var(--font-lato), sans-serif" }}
          >
            启明遁甲决策智库以奇门遁甲为核心判断方法，结合战略风水布局、空间能量调衡、人事合作分析与重大决策陪跑，协助客户在投资、扩张、任用、搬迁、签约及关系选择前，看清时机、方向、人事关系与风险结构。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="mt-9 grid max-w-5xl grid-cols-2 gap-4 border-y border-[#c89a45]/30 py-5 text-center text-sm font-semibold uppercase tracking-[0.14em] text-[#e6c785] md:grid-cols-5"
            style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}
          >
            <span>Business · 企业</span>
            <span>Career · 事业</span>
            <span>Relationship · 关系</span>
            <span>Feng Shui · 风水</span>
            <span>Course · 课程</span>
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
              WhatsApp Private Consultation
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center gap-3 border border-[#c89a45] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#f4dfb0] transition-colors duration-300 hover:bg-[#c89a45]/10"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              Choose Your Pathway
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
