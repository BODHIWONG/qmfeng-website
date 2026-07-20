"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";

const LOGO_URL = "/logo-qimen-strategy.jpg";
const COURSE_REGISTRATION_LINK = "/course-registration?course=qimen-foundation&batch=2026-09-19";

const advisoryLinks = [
  {
    href: "/enterprise-strategic-advisory",
    zh: "创业老板事业陪跑",
    en: "Founder Business Advisory",
    descZh: "经营瓶颈、战略重点与长期陪跑",
    descEn: "Business bottlenecks, priorities and retainer support",
  },
  {
    href: "/founder-wealth-investment-advisory",
    zh: "财富周期与投资决策",
    en: "Wealth Cycle & Investment Decisions",
    descZh: "事业周期、投资时机与风险判断",
    descEn: "Business cycle, timing and risk review",
  },
  {
    href: "/executive-career-transition-advisory",
    zh: "高管事业转型",
    en: "Executive Career Transition",
    descZh: "转职、创业与关键关系规划",
    descEn: "Career moves, entrepreneurship and strategic networks",
  },
  {
    href: "/decision",
    zh: "个人重大决策",
    en: "Major Personal Decisions",
    descZh: "事业、合作、人生方向与关键选择",
    descEn: "Career, partnership and major life choices",
  },
  {
    href: "/relationship-clarity-reading-singapore",
    zh: "情感关系决策",
    en: "Relationship Decisions",
    descZh: "关系局势、边界与下一步方向",
    descEn: "Relationship dynamics, boundaries and next steps",
  },
];

const primaryLinks = [
  { href: "/insights", zh: "案例与洞察", en: "Insights" },
  { href: "/founder", zh: "关于黄启明", en: "About" },
];

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => setLang(lang === "zh" ? "en" : "zh");
  const navTextClass = scrolled
    ? "text-white/82 hover:text-yellow-400"
    : "text-[#2a2118]/78 hover:text-[#a8753f]";
  const brandTextClass = scrolled ? "text-white" : "text-[#241b14]";
  const mobileIconClass = scrolled ? "text-white" : "text-[#241b14]";

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-black/95 shadow-lg backdrop-blur-md"
          : "border-b border-[#d7c4ad]/25 bg-[#f7f1e7]/88 backdrop-blur-md"
      }`}
    >
      <div className="container flex items-center justify-between py-3 md:py-4">
        <Link href="/" className="flex items-center gap-3">
          <img
            src={LOGO_URL}
            alt="启明遁甲决策智库 Qimen Strategy Singapore logo"
            className="h-12 w-auto object-contain md:h-14"
          />
          <div className="hidden leading-tight sm:block">
            <div className={`text-sm font-semibold tracking-wider md:text-base ${brandTextClass}`}>
              QIMEN STRATEGY
            </div>
            <div className="mt-1 text-[0.62rem] tracking-[0.14em] text-yellow-600 md:text-[0.68rem]">
              启明遁甲决策智库
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-3 lg:flex xl:gap-5">
          <Link href="/" className={`text-sm transition-colors ${navTextClass}`}>
            {lang === "zh" ? "首页" : "Home"}
          </Link>

          <Link href="/courses" className={`text-sm font-semibold transition-colors ${navTextClass}`}>
            {lang === "zh" ? "奇门课程" : "Courses"}
          </Link>

          <div className="group relative py-3">
            <button type="button" className={`inline-flex items-center gap-1 text-sm transition-colors ${navTextClass}`}>
              {lang === "zh" ? "企业陪跑与顾问" : "Advisory"}
              <ChevronDown size={14} />
            </button>
            <div className="invisible absolute left-1/2 top-full w-[430px] -translate-x-1/2 border border-[#d6ad63]/30 bg-black/98 p-3 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
              {advisoryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block border-b border-white/8 px-4 py-3 last:border-b-0 hover:bg-[#d6ad63]/10"
                >
                  <p className="text-sm font-semibold text-[#f4dfb0]">
                    {lang === "zh" ? link.zh : link.en}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/48">
                    {lang === "zh" ? link.descZh : link.descEn}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {primaryLinks.map((link) => (
            <Link key={link.href} href={link.href} className={`text-sm transition-colors ${navTextClass}`}>
              {lang === "zh" ? link.zh : link.en}
            </Link>
          ))}

          <button
            type="button"
            onClick={toggleLanguage}
            className={`border px-3 py-2 text-xs font-semibold tracking-[0.16em] transition-all ${
              scrolled
                ? "border-white/25 text-white/75 hover:border-yellow-500 hover:text-yellow-500"
                : "border-[#c5ad91]/55 text-[#4a3a2a]/70 hover:border-[#a8753f] hover:text-[#a8753f]"
            }`}
            aria-label="Switch language"
          >
            {lang === "zh" ? "EN" : "中文"}
          </button>

          <Link
            href={COURSE_REGISTRATION_LINK}
            className="bg-yellow-600 px-5 py-2.5 text-sm font-semibold text-black transition-all hover:bg-yellow-500"
          >
            {lang === "zh" ? "课程报名" : "Register"}
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={toggleLanguage}
            className={`border px-2.5 py-1.5 text-[0.65rem] font-semibold tracking-[0.16em] ${
              scrolled ? "border-white/25 text-white/80" : "border-[#c5ad91]/55 text-[#4a3a2a]/75"
            }`}
            aria-label="Switch language"
          >
            {lang === "zh" ? "EN" : "中"}
          </button>
          <button
            className={mobileIconClass}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="max-h-[calc(100vh-72px)] overflow-y-auto bg-black px-6 pb-7 lg:hidden">
          <Link href="/" className="block border-b border-white/10 py-4 text-white/85" onClick={() => setIsOpen(false)}>
            {lang === "zh" ? "首页" : "Home"}
          </Link>
          <Link href="/courses" className="block border-b border-white/10 py-4 font-semibold text-[#f4dfb0]" onClick={() => setIsOpen(false)}>
            {lang === "zh" ? "奇门课程｜第一入口" : "Qi Men Courses"}
          </Link>
          <Link href={COURSE_REGISTRATION_LINK} className="block border-b border-white/10 py-4 text-[#d6ad63]" onClick={() => setIsOpen(false)}>
            {lang === "zh" ? "选择班次并报名" : "Select Batch & Register"}
          </Link>
          <p className="pt-5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#d6ad63]">
            {lang === "zh" ? "企业陪跑与顾问" : "Advisory"}
          </p>
          {advisoryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block border-b border-white/8 py-3"
              onClick={() => setIsOpen(false)}
            >
              <p className="text-sm font-semibold text-white/85">{lang === "zh" ? link.zh : link.en}</p>
              <p className="mt-1 text-xs text-white/45">{lang === "zh" ? link.descZh : link.descEn}</p>
            </Link>
          ))}
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block border-b border-white/8 py-4 text-white/82"
              onClick={() => setIsOpen(false)}
            >
              {lang === "zh" ? link.zh : link.en}
            </Link>
          ))}
          <Link
            href={COURSE_REGISTRATION_LINK}
            className="mt-5 block bg-[#d6ad63] px-5 py-3 text-center font-semibold text-black"
            onClick={() => setIsOpen(false)}
          >
            {lang === "zh" ? "课程报名" : "Register for a Course"}
          </Link>
        </div>
      )}
    </nav>
  );
}
