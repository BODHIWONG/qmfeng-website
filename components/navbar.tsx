"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";

const LOGO_URL = "/logo-qimen-strategy.jpg";
const WA_LINK =
  "https://wa.me/6589593499?text=Hello%20Qimen%20Strategy%2C%20I%20would%20like%20to%20submit%20a%20private%20advisory%20enquiry.";

const navigation = [
  { href: "/", zh: "首页", en: "Home" },
  { href: "/advisory", zh: "顾问服务", en: "Advisory" },
  { href: "/qi-men-dun-jia-course-singapore", zh: "每周课程", en: "Weekly Courses" },
  { href: "/insights", zh: "案例洞察", en: "Insights" },
  { href: "/founder", zh: "关于黄启明", en: "Founder" },
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
  const navTextClass = scrolled ? "text-white/80 hover:text-yellow-400" : "text-[#2a2118]/78 hover:text-[#a8753f]";
  const brandTextClass = scrolled ? "text-white" : "text-[#241b14]";
  const mobileIconClass = scrolled ? "text-white" : "text-[#241b14]";

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-black/95 shadow-lg backdrop-blur-md" : "border-b border-[#d7c4ad]/25 bg-[#f7f1e7]/76 backdrop-blur-sm"
      }`}
    >
      <div className="container flex items-center justify-between py-4 md:py-5">
        <Link href="/" className="flex items-center gap-4" aria-label="Qimen Strategy Home">
          <img
            src={LOGO_URL}
            alt="Qimen Strategy Singapore and 启明遁甲决策智库 logo"
            className="h-14 w-auto object-contain md:h-16"
          />
          <div className="hidden leading-tight sm:block">
            <div className={`text-base font-semibold tracking-wider md:text-lg ${brandTextClass}`}>QIMEN STRATEGY</div>
            <div className="mt-1 text-[0.68rem] tracking-[0.12em] text-yellow-600 md:text-xs">启明遁甲决策智库</div>
          </div>
        </Link>

        <div className="hidden items-center gap-3 md:flex xl:gap-5">
          {navigation.map((link) => (
            <Link key={link.href} href={link.href} className={`text-sm transition-colors ${navTextClass}`}>
              {lang === "zh" ? link.zh : link.en}
            </Link>
          ))}
          <button
            type="button"
            onClick={toggleLanguage}
            className={`border px-3 py-2 text-xs font-semibold tracking-[0.18em] transition-all ${
              scrolled
                ? "border-white/25 text-white/75 hover:border-yellow-500 hover:text-yellow-500"
                : "border-[#c5ad91]/55 text-[#4a3a2a]/70 hover:border-[#a8753f] hover:text-[#a8753f]"
            }`}
            aria-label="Switch language"
          >
            {lang === "zh" ? "EN" : "中文"}
          </button>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-conversion="navbar_advisory_application"
            className="border border-yellow-600 px-5 py-2 text-sm text-yellow-600 transition-all hover:bg-yellow-600 hover:text-black"
          >
            {lang === "zh" ? "申请咨询" : "Apply"}
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
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
            type="button"
            className={mobileIconClass}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="bg-black px-6 pb-6 md:hidden">
          {navigation.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block border-b border-white/8 py-3 text-white/80"
              onClick={() => setIsOpen(false)}
            >
              {lang === "zh" ? link.zh : link.en}
            </Link>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-conversion="mobile_navbar_advisory_application"
            className="mt-5 block border border-yellow-500 px-4 py-3 text-center font-semibold text-yellow-500"
          >
            {lang === "zh" ? "申请咨询：+65 8959 3499" : "Apply for Advisory"}
          </a>
        </div>
      )}
    </nav>
  );
}
