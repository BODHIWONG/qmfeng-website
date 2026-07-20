"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, MessageCircle } from "lucide-react";
import Link from "next/link";

const WA_LINK =
  "https://wa.me/6589593499?text=Hello%20Qimen%20Strategy%2C%20I%20would%20like%20to%20submit%20a%20private%20strategic%20decision%20advisory%20enquiry.";

const BG_IMAGE = "/master-home-hero.png";

export default function HeroSimple() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <img
          src={BG_IMAGE}
          alt="Huang Qiming, Founder and Strategic Decision Advisor of Qimen Strategy Singapore"
          className="h-full w-full object-cover object-center opacity-82"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/76 to-black/96" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/24 via-transparent to-black/94" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(212,164,82,0.12),transparent_34%)]" />
        <div className="absolute right-[-12%] top-1/2 hidden h-[980px] w-[980px] -translate-y-1/2 rounded-full border border-[#d6ad63]/10 opacity-60 lg:block" />
        <div className="absolute right-[-8%] top-1/2 hidden h-[760px] w-[760px] -translate-y-1/2 rounded-full border border-[#d6ad63]/10 opacity-50 lg:block" />
        <div className="absolute right-[-4%] top-1/2 hidden h-[540px] w-[540px] -translate-y-1/2 rounded-full border border-[#d6ad63]/10 opacity-40 lg:block" />
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
              className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d6ad63]"
              style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}
            >
              Singapore · Strategic Advisory & Weekly Courses
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="max-w-5xl text-4xl font-semibold uppercase leading-[0.98] tracking-[0.04em] text-[#f4dfb0] drop-shadow-[0_8px_28px_rgba(0,0,0,0.62)] sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
          >
            Strategic Decision Advisory for Founders, Executives & Major Life Decisions
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-5 max-w-5xl text-2xl font-semibold leading-tight text-[#e2bd6b] md:text-4xl"
            style={{ fontFamily: "var(--font-noto-serif), var(--font-cormorant), serif" }}
          >
            创业老板事业陪跑｜财富与投资决策｜高管转型｜情感与重大选择
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.16 }}
            className="mt-6 max-w-4xl text-2xl font-semibold leading-tight tracking-[0.06em] text-[#f1d38a] md:text-4xl"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
          >
            See the Whole Game Before You Decide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22 }}
            className="mt-8 max-w-4xl border-l-2 border-[#d0a14a] bg-black/38 px-5 py-4 text-sm font-semibold leading-7 text-[#f1d38a] backdrop-blur-sm md:text-base"
            style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}
          >
            Advisory: founders · investment decisions · executive transitions · relationship clarity
            <br />
            Academy: weekly Qi Men Dun Jia foundation classes in Singapore
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28 }}
            className="mt-7 max-w-4xl text-base leading-8 text-white/82 md:text-lg"
            style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}
          >
            Qimen Strategy combines Qi Men Dun Jia with practical commercial judgment, people assessment and structured decision review. The purpose is not to replace evidence or professional advice, but to help decision-makers identify timing, priorities, people dynamics and risk before committing more time, capital and energy.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-3 max-w-4xl text-sm leading-7 text-white/70 md:text-base"
            style={{ fontFamily: "var(--font-noto-sans), var(--font-lato), sans-serif" }}
          >
            启明遁甲决策智库以奇门遁甲为核心判断方法，结合真实企业经营、人事合作与重大决策经验，为创业老板、高管与个人提供清晰、克制、负责任的决策支持；同时每周开设奇门遁甲基础课程。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="mt-9 grid max-w-5xl grid-cols-2 gap-4 border-y border-[#c89a45]/30 py-5 text-center text-xs font-semibold uppercase tracking-[0.12em] text-[#e6c785] md:grid-cols-5 md:text-sm"
            style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}
          >
            <span>Founder · 创业老板</span>
            <span>Investment · 投资</span>
            <span>Executive · 高管</span>
            <span>Relationship · 情感</span>
            <span>Weekly Course · 每周课程</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.46 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
          >
            <Link
              href="/advisory"
              className="inline-flex items-center justify-center gap-3 bg-[#d0a14a] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black shadow-[0_18px_46px_rgba(198,139,48,0.24)] transition-all duration-300 hover:scale-[1.02] hover:bg-[#e2bd6b]"
            >
              Explore Advisory
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/qi-men-dun-jia-course-singapore"
              className="inline-flex items-center justify-center gap-3 border border-[#c89a45] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#f4dfb0] transition-colors duration-300 hover:bg-[#c89a45]/10"
            >
              <BookOpen size={18} />
              View Weekly Courses
            </Link>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-conversion="homepage_private_enquiry"
              className="inline-flex items-center justify-center gap-3 px-5 py-4 text-sm font-semibold text-white/75 transition hover:text-[#f4dfb0]"
            >
              <MessageCircle size={18} />
              WhatsApp Private Enquiry
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
