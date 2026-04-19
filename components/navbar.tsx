"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/language-context";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const LOGO_URL = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/753F2E3C-3CDB-4A85-BD6A-5DB0F9999C73-u3LzeIs3PNKVhlm4etlkSSvG0hJqKT.png";
const WA_LINK = "https://wa.me/message/55HSHDNBMWPLA1";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#services", zh: "服务", en: "Services" },
    { href: "#cases", zh: "案例", en: "Results" },
    { href: "#products", zh: "产品", en: "Products" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[oklch(0.97_0.012_75/0.97)] backdrop-blur-md shadow-sm border-b border-[oklch(0.88_0.018_70)]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src={LOGO_URL}
            alt="Qiming Feng Shui Logo"
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
            className="hidden sm:block text-lg md:text-xl font-semibold text-[oklch(0.15_0.02_60)] tracking-wide group-hover:text-[oklch(0.60_0.08_65)] transition-colors duration-300"
          >
            {t("奇明風水", "QiMing Feng Shui")}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => 
            (link as { isPage?: boolean }).isPage ? (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[oklch(0.35_0.02_60)] hover:text-[oklch(0.60_0.08_65)] transition-colors duration-300 tracking-wide"
                style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}
              >
                {t(link.zh, link.en)}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[oklch(0.35_0.02_60)] hover:text-[oklch(0.60_0.08_65)] transition-colors duration-300 tracking-wide"
                style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}
              >
                {t(link.zh, link.en)}
              </a>
            )
          )}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "zh" ? "en" : "zh")}
            className="hidden md:flex items-center gap-1 text-xs font-semibold tracking-widest uppercase text-[oklch(0.50_0.02_65)] hover:text-[oklch(0.60_0.08_65)] transition-colors duration-300 border border-[oklch(0.88_0.018_70)] px-3 py-1.5 hover:border-[oklch(0.60_0.08_65)]"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            {lang === "zh" ? "EN" : "中文"}
          </button>

          {/* Book Now CTA */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-5 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:scale-[1.02]"
            style={{
              fontFamily: "var(--font-lato), sans-serif",
              background: "oklch(0.72 0.12 70)",
              color: "oklch(0.06 0.02 60)",
              letterSpacing: "0.1em",
            }}
          >
            {t("立即预约", "Book Now")}
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-[oklch(0.15_0.02_60)]"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[oklch(0.97_0.012_75)] border-t border-[oklch(0.88_0.018_70)] px-6 py-6 space-y-4">
          {navLinks.map((link) => 
            (link as { isPage?: boolean }).isPage ? (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-base font-medium text-[oklch(0.25_0.02_60)] hover:text-[oklch(0.60_0.08_65)] transition-colors py-2 border-b border-[oklch(0.92_0.015_70)]"
                style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}
              >
                {t(link.zh, link.en)}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-base font-medium text-[oklch(0.25_0.02_60)] hover:text-[oklch(0.60_0.08_65)] transition-colors py-2 border-b border-[oklch(0.92_0.015_70)]"
                style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}
              >
                {t(link.zh, link.en)}
              </a>
            )
          )}
          <div className="flex gap-3 pt-2">
            <button
              onClick={() => {
                setLang(lang === "zh" ? "en" : "zh");
                setMenuOpen(false);
              }}
              className="text-xs py-2 px-4 flex-1 border border-[oklch(0.60_0.08_65)] text-[oklch(0.60_0.08_65)] font-bold uppercase tracking-widest"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              {lang === "zh" ? "English" : "中文"}
            </button>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs py-2 px-4 flex-1 text-center font-bold uppercase tracking-widest"
              style={{
                fontFamily: "var(--font-lato), sans-serif",
                background: "oklch(0.72 0.12 70)",
                color: "oklch(0.06 0.02 60)",
              }}
            >
              {t("立即预约", "Book Now")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
