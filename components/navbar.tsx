"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/language-context";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

const LOGO_URL =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/753F2E3C-3CDB-4A85-BD6A-5DB0F9999C73-u3LzeIs3PNKVhlm4etlkSSvG0hJqKT.png";
const WA_LINK = "https://wa.me/6589418791";

const serviceLinks = [
  {
    href: "/wealth",
    zh: "事业不顺 · 财运不稳",
    en: "Wealth & Career",
  },
  {
    href: "/healing",
    zh: "感情不顺 · 情感疗愈",
    en: "Healing & Relationships",
  },
  {
    href: "/decision",
    zh: "战略决策 · 关键判断",
    en: "Strategy & Decisions",
  },
  {
    href: "/space-clearing",
    zh: "空间能量净化",
    en: "Space Clearing",
  },
];

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const ctaText = t("你好启明大师，我想先判断我目前的问题方向。", "Hello Master Qiming, I would like to identify which problem path fits my situation first.");

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[oklch(0.88_0.018_70)] bg-[oklch(0.97_0.012_75/0.97)] shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="group flex items-center gap-3">
          <img
            src={LOGO_URL}
            alt="Qiming Feng Shui Logo"
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 md:h-12"
          />
          <span
            style={{
              fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
            }}
            className="hidden text-lg font-semibold tracking-wide text-[oklch(0.15_0.02_60)] transition-colors duration-300 group-hover:text-[oklch(0.60_0.08_65)] sm:block md:text-xl"
          >
            {t("奇明風水", "QiMing Feng Shui")}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="/"
            className="text-sm font-medium tracking-wide text-[oklch(0.35_0.02_60)] transition-colors duration-300 hover:text-[oklch(0.60_0.08_65)]"
            style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}
          >
            {t("首页", "Home")}
          </Link>

          <div className="group relative">
            <button
              type="button"
              className="inline-flex items-center gap-1 text-sm font-medium tracking-wide text-[oklch(0.35_0.02_60)] transition-colors duration-300 hover:text-[oklch(0.60_0.08_65)]"
              style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}
            >
              {t("服务", "Services")}
              <ChevronDown size={15} />
            </button>

            <div className="invisible absolute left-1/2 top-full z-50 mt-4 w-72 -translate-x-1/2 border border-[oklch(0.88_0.018_70)] bg-[oklch(0.97_0.012_75)] p-2 opacity-0 shadow-[0_18px_50px_rgba(0,0,0,0.10)] transition-all duration-200 group-hover:visible group-hover:opacity-100">
              {serviceLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-sm text-[oklch(0.28_0.02_60)] transition-colors duration-300 hover:bg-white hover:text-[oklch(0.60_0.08_65)]"
                  style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}
                >
                  {t(item.zh, item.en)}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/insights"
            className="text-sm font-medium tracking-wide text-[oklch(0.35_0.02_60)] transition-colors duration-300 hover:text-[oklch(0.60_0.08_65)]"
            style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}
          >
            {t("洞察", "Insights")}
          </Link>

          <a
            href={`${WA_LINK}?text=${encodeURIComponent(
              t("你好启明大师，我想咨询。", "Hello Master Qiming, I would like to enquire.")
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium tracking-wide text-[oklch(0.35_0.02_60)] transition-colors duration-300 hover:text-[oklch(0.60_0.08_65)]"
            style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}
          >
            {t("联系", "Contact")}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "zh" ? "en" : "zh")}
            className="hidden border border-[oklch(0.88_0.018_70)] px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-[oklch(0.50_0.02_65)] transition-colors duration-300 hover:border-[oklch(0.60_0.08_65)] hover:text-[oklch(0.60_0.08_65)] md:flex"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            {lang === "zh" ? "EN" : "中文"}
          </button>

          <a
            href={`${WA_LINK}?text=${encodeURIComponent(ctaText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] md:flex"
            style={{
              fontFamily: "var(--font-lato), sans-serif",
              background: "oklch(0.72 0.12 70)",
              color: "oklch(0.06 0.02 60)",
              letterSpacing: "0.1em",
            }}
          >
            {t("立即判断问题", "Assess My Situation")}
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-[oklch(0.15_0.02_60)] lg:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-[oklch(0.88_0.018_70)] bg-[oklch(0.97_0.012_75)] px-6 py-6 lg:hidden">
          <div className="space-y-2">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="block border-b border-[oklch(0.92_0.015_70)] py-3 text-base font-medium text-[oklch(0.25_0.02_60)] transition-colors hover:text-[oklch(0.60_0.08_65)]"
              style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}
            >
              {t("首页", "Home")}
            </Link>

            <button
              type="button"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex w-full items-center justify-between border-b border-[oklch(0.92_0.015_70)] py-3 text-left text-base font-medium text-[oklch(0.25_0.02_60)]"
              style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}
            >
              <span>{t("服务", "Services")}</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {mobileServicesOpen && (
              <div className="space-y-1 pb-2">
                {serviceLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      setMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    className="block py-2 pl-4 text-sm text-[oklch(0.38_0.02_60)] transition-colors hover:text-[oklch(0.60_0.08_65)]"
                    style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}
                  >
                    {t(item.zh, item.en)}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/insights"
              onClick={() => setMenuOpen(false)}
              className="block border-b border-[oklch(0.92_0.015_70)] py-3 text-base font-medium text-[oklch(0.25_0.02_60)] transition-colors hover:text-[oklch(0.60_0.08_65)]"
              style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}
            >
              {t("洞察", "Insights")}
            </Link>

            <a
              href={`${WA_LINK}?text=${encodeURIComponent(
                t("你好启明大师，我想咨询。", "Hello Master Qiming, I would like to enquire.")
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="block border-b border-[oklch(0.92_0.015_70)] py-3 text-base font-medium text-[oklch(0.25_0.02_60)] transition-colors hover:text-[oklch(0.60_0.08_65)]"
              style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}
            >
              {t("联系", "Contact")}
            </a>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              onClick={() => {
                setLang(lang === "zh" ? "en" : "zh");
                setMenuOpen(false);
              }}
              className="flex-1 border border-[oklch(0.60_0.08_65)] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[oklch(0.60_0.08_65)]"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              {lang === "zh" ? "English" : "中文"}
            </button>

            <a
              href={`${WA_LINK}?text=${encodeURIComponent(ctaText)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex-1 px-4 py-2 text-center text-xs font-bold uppercase tracking-widest"
              style={{
                fontFamily: "var(--font-lato), sans-serif",
                background: "oklch(0.72 0.12 70)",
                color: "oklch(0.06 0.02 60)",
              }}
            >
              {t("立即判断问题", "Assess My Situation")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
