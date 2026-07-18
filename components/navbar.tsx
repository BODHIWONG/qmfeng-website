"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";

const LOGO_URL = "/logo-qimen-strategy.jpg";
const WA_LINK =
  "https://wa.me/6589593499?text=Hello%20Qimen%20Strategy%2C%20I%20would%20like%20to%20consult%20about%20Qi%20Men%20Dun%20Jia%20Strategic%20Decision%20Advisory%20in%20Singapore.";

const serviceLinks = [
  { href: "/", zh: "首页", en: "Home" },
  { href: "/enterprise-strategic-advisory", zh: "企业决策", en: "Enterprise Advisory" },
  { href: "/relationship-clarity-reading-singapore", zh: "关系决策", en: "Relationship Advisory" },
  { href: "/singapore-qi-men-dun-jia-consultant", zh: "奇门风水与课程", en: "Qi Men Feng Shui & Course" },
  { href: "/insights", zh: "案例", en: "Cases" },
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
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-black/95 shadow-lg backdrop-blur-md"
          : "border-b border-[#d7c4ad]/25 bg-[#f7f1e7]/72 backdrop-blur-sm"
      }`}
    >
      <div className="container flex items-center justify-between py-4 md:py-5">
        <Link href="/" className="flex items-center gap-4">
          <img
            src={LOGO_URL}
            alt="启明遁甲决策智库 Qimen Strategy Singapore Logo"
            className="h-14 w-auto object-contain md:h-16"
          />
          <div className="hidden leading-tight sm:block">
            <div className={`text-base font-semibold tracking-wider md:text-lg ${brandTextClass}`}>
              QIMEN STRATEGY
            </div>
            <div className="text-[0.62rem] tracking-[0.15em] text-yellow-600 md:text-xs">
              启明遁甲决策智库
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-3 md:flex xl:gap-5">
          {serviceLinks.map((link, index) => (
            <Link key={`${link.href}-${index}`} href={link.href} className={`text-sm transition-colors ${navTextClass}`}>
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
            className="border border-yellow-600 px-5 py-2 text-sm text-yellow-600 transition-all hover:bg-yellow-600 hover:text-black"
          >
            {lang === "zh" ? "预约咨询" : "Book"}
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
        <div className="bg-black px-6 pb-6 md:hidden">
          {serviceLinks.map((link, index) => (
            <Link
              key={`${link.href}-${index}`}
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
            className="mt-4 block text-yellow-500"
          >
            {lang === "zh" ? "预约咨询：+65 8959 3499" : "Book Consultation: +65 8959 3499"}
          </a>
        </div>
      )}
    </nav>
  );
}
