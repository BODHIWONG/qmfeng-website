"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, BriefcaseBusiness } from "lucide-react";
import Link from "next/link";

const BG_IMAGE = "/master-home-hero.png";

export default function HeroSimple() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <img
          src={BG_IMAGE}
          alt="Huang Qiming, Founder and Strategic Decision Advisor of Qimen Strategy Singapore"
          className="h-full w-full object-cover object-center opacity-80"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/78 to-black/98" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(212,164,82,0.13),transparent_34%)]" />
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
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d6ad63]">
              Singapore · Founder Advisory · Qimen Strategy Academy
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="max-w-5xl text-4xl font-semibold uppercase leading-[0.98] tracking-[0.045em] text-[#f4dfb0] drop-shadow-[0_8px_28px_rgba(0,0,0,0.62)] sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
          >
            Strategic Decision Advisory for Founders, Executives & Major Life Transitions
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-4xl text-2xl font-semibold leading-tight tracking-[0.08em] text-[#e2bd6b] md:text-4xl"
            style={{ fontFamily: "var(--font-noto-serif), var(--font-cormorant), serif" }}
          >
            创业老板事业陪跑 · 财富与投资决策 · 高管转型 · 个人重大选择
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.16 }}
            className="mt-6 max-w-4xl text-2xl font-semibold leading-tight tracking-[0.06em] text-[#f1d38a] md:text-3xl"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
          >
            See the Whole Game Before You Decide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22 }}
            className="mt-8 max-w-4xl border-l-2 border-[#d0a14a] bg-black/42 px-5 py-5 text-sm leading-7 text-white/82 backdrop-blur-sm md:text-base md:leading-8"
          >
            <p>
              Qimen Strategy supports founders, entrepreneurs and senior executives before high-stakes decisions involving business direction, investment, partnerships, career transition and personal life choices.
            </p>
            <p className="mt-3 text-white/68">
              启明遁甲决策智库以奇门遁甲为核心，结合真实商业判断、人事关系、环境条件与行动节奏，为创业老板提供长期事业陪跑，也为高管与个人在关键转型和重大选择前提供清晰的决策参考。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              ["Founder Advisory", "创业老板事业陪跑"],
              ["Wealth & Investment", "财富周期与投资决策"],
              ["Executive Transition", "高管事业转型"],
              ["Weekly Courses", "每周奇门课程"],
            ].map(([en, zh]) => (
              <div key={en} className="border border-[#c89a45]/30 bg-black/25 px-4 py-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#e6c785]">{en}</p>
                <p className="mt-2 text-sm text-white/72">{zh}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/enterprise-strategic-advisory"
              className="inline-flex items-center justify-center gap-3 bg-[#d0a14a] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black shadow-[0_18px_46px_rgba(198,139,48,0.24)] transition-all duration-300 hover:scale-[1.02] hover:bg-[#e2bd6b]"
            >
              <BriefcaseBusiness size={18} />
              Apply for Founder Advisory
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center justify-center gap-3 border border-[#c89a45] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#f4dfb0] transition-colors duration-300 hover:bg-[#c89a45]/10"
            >
              <BookOpen size={18} />
              View Weekly Courses
              <ArrowRight size={17} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
