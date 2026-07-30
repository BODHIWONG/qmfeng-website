"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, BriefcaseBusiness, MessageCircle } from "lucide-react";
import Link from "next/link";

const BG_IMAGE = "/master-home-hero.png";

const searchIntents = [
  { en: "Qi Men Dun Jia", zh: "奇门遁甲" },
  { en: "Bazi & Feng Shui", zh: "八字命理 · 风水" },
  { en: "Relationship & Career", zh: "感情 · 事业" },
  { en: "Business Decisions", zh: "企业经营 · 重大决策" },
];

export default function HeroSimple() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <img
          src={BG_IMAGE}
          alt="Huang Qiming, Qi Men Dun Jia consultant and strategic decision advisor in Singapore"
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
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d6ad63]">
              Qimen Strategy · Singapore
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="max-w-5xl text-4xl font-semibold leading-[1.02] tracking-[0.02em] text-[#f4dfb0] drop-shadow-[0_8px_28px_rgba(0,0,0,0.62)] sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
          >
            Qi Men Dun Jia Consultation, Courses & Strategic Advisory in Singapore
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-4xl text-2xl font-semibold leading-tight tracking-[0.06em] text-[#e2bd6b] md:text-4xl"
            style={{ fontFamily: "var(--font-noto-serif), var(--font-cormorant), serif" }}
          >
            奇门遁甲咨询 · 实战课程 · 八字风水 · 企业与个人重大决策
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.16 }}
            className="mt-6 max-w-4xl text-xl font-semibold leading-tight tracking-[0.05em] text-[#f1d38a] md:text-3xl"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
          >
            See the Whole Game Before You Decide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22 }}
            className="mt-8 max-w-4xl border-l-2 border-[#d0a14a] bg-black/42 px-5 py-5 text-sm leading-7 text-white/84 backdrop-blur-sm md:text-base md:leading-8"
          >
            <p>
              For relationship, career, business and important life decisions, Qimen Strategy helps you examine timing, people, direction, environment and risk before you act.
            </p>
            <p className="mt-3 text-white/70">
              面对感情、事业、生意与人生重要选择，先看清局势、时机、方向与风险，再做决定。新加坡 Bedok 可面谈，也提供线上咨询。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-7 flex max-w-5xl flex-wrap gap-x-6 gap-y-3 border-y border-[#c89a45]/20 py-4"
          >
            {searchIntents.map((item) => (
              <div key={item.en} className="flex items-center gap-2 text-sm text-white/78">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d6ad63]" />
                <span className="font-semibold text-[#efd79e]">{item.en}</span>
                <span className="text-white/55">{item.zh}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
          >
            <a
              href="https://wa.me/6589593499?text=Hi%20Qimen%20Strategy%2C%20I%27d%20like%20to%20ask%20about%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#d0a14a] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black shadow-[0_18px_46px_rgba(198,139,48,0.24)] transition-all duration-300 hover:scale-[1.02] hover:bg-[#e2bd6b]"
            >
              <MessageCircle size={18} />
              WhatsApp Consultation
              <ArrowRight size={17} />
            </a>
            <Link
              href="/courses"
              className="inline-flex items-center justify-center gap-3 border border-[#c89a45] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#f4dfb0] transition-colors duration-300 hover:bg-[#c89a45]/10"
            >
              <BookOpen size={18} />
              Explore Qi Men Courses
            </Link>
            <Link
              href="/enterprise-strategic-advisory"
              className="inline-flex items-center justify-center gap-3 px-2 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white/76 transition-colors duration-300 hover:text-[#f4dfb0]"
            >
              <BriefcaseBusiness size={18} />
              Business Advisory
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
