"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";

const LOGO_URL = "/logo-qimen-strategy.jpg";
const WA_LINK = "https://wa.me/6589418791";

const serviceLinks = [
  { href: "/decision", zh: "奇门决策", en: "Qimen Strategy" },
  { href: "/wealth", zh: "事业财富", en: "Wealth & Career" },
  { href: "/healing", zh: "关系调和", en: "Relationship Alignment" },
  { href: "/space-clearing", zh: "空间调频", en: "Space Alignment" },
  { href: "/insights", zh: "战略洞察", en: "Strategic Insights" },
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
    ? "text-white/80 hover:text-yellow-400"
    : "text-[#2a2118]/78 hover:text-[#a8753f]";

  const brandTextClass = scrolled ? "text-white" : "text-[#241b14]";
  const mobileIconClass = scrolled ? "text-white" : "text-[#241b14]";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md shadow-lg"
          : "bg-[#f7f1e7]/72 backdrop-blur-sm border-b border-[#d7c4ad]/25"
      }`}
    >
      <div className="container flex items-center justify-between py-4 md:py-5">
        <Link href="/" className="flex items-center gap-4">
          <img
            src={LOGO_URL}
            alt="Qimen Strategy Singapore Logo"
            className="h-14 w-auto object-contain md:h-16"
          />
          <div className="hidden sm:block leading-tight">
            <div className={`text-base font-semibold tracking-wider md:text-lg ${brandTextClass}`}>
              QIMEN STRATEGY
            </div>
            <div className="text-xs tracking-[0.28em] text-yellow-600 md:text-sm">
              启明遁甲
            </div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6 lg:gap-7">
          {serviceLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${navTextClass}`}
            >
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
            className="px-5 py-2 border border-yellow-600 text-yellow-600 text-sm hover:bg-yellow-600 hover:text-black transition-all"
          >
            WhatsApp
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
            className={mobileIconClass}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black px-6 pb-6">
          {serviceLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-white/80"
              onClick={() => setIsOpen(false)}
            >
              {lang === "zh" ? link.zh : link.en}
            </Link>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 text-yellow-500"
          >
            {lang === "zh" ? "WhatsApp 咨询" : "WhatsApp Consultation"}
          </a>
        </div>
      )}
    </nav>
  );
}
