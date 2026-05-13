"use client";

import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";

const LOGO_URL = "/logo-qimen-strategy.jpg";
const WA_LINK = "https://wa.me/6589418791";

const serviceLinks = [
  { href: "/decision", zh: "奇门决策", en: "Qimen Strategy" },
  { href: "/wealth", zh: "企业与财富决策", en: "Business & Wealth" },
  { href: "/healing", zh: "关系与人生方向", en: "Life & Relationships" },
  { href: "/space-clearing", zh: "空间与环境调频", en: "Space Alignment" },
];

const insightLinks = [
  { href: "/insights/qimen-strategy-ai-era", zh: "什么是 Qimen Strategy", en: "What Is Qimen Strategy" },
  { href: "/insights/qimen-strategy-for-business-owners", zh: "企业主奇门决策", en: "For Business Owners" },
  { href: "/insights/why-timing-matters-more-than-effort", zh: "为什么时机比努力更重要", en: "Why Timing Matters" },
  { href: "/insights/qimen-strategy-vs-traditional-fortune-telling", zh: "奇门决策与传统算命", en: "Not Fortune Telling" },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-[#c89a45]/20 bg-black">
      <div className="container py-12 md:py-16">
        <div className="mb-12 grid gap-10 md:grid-cols-4">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <img src={LOGO_URL} alt="Qimen Strategy Singapore Logo" className="h-14 w-14 object-contain" />
              <div>
                <p className="text-lg font-bold uppercase tracking-[0.12em] text-white" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}>
                  Qimen Strategy
                </p>
                <p className="mt-1 text-[0.65rem] tracking-[0.25em] text-[#d6ad63]">启明遁甲</p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-white/55" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}>
              {t(
                "启明遁甲以奇门决策为核心，结合奇门遁甲、风水布局、时机判断、人与环境分析，帮助新加坡客户在事业、合作、财富与人生转折前看清全局。",
                "Qimen Strategy is an Eastern Strategic Decision Intelligence system based in Singapore, helping clients read timing, direction, people dynamics and environmental alignment before important business and life decisions."
              )}
            </p>

            <p className="mt-4 text-[0.65rem] uppercase tracking-[0.18em] text-white/35">
              Powered by Qiming Feng Shui Singapore
            </p>
          </div>

          <div>
            <p className="mb-4 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#d6ad63]" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
              {t("核心路径", "Core Paths")}
            </p>
            <div className="space-y-2.5">
              {serviceLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block text-xs text-white/50 transition-colors duration-300 hover:text-[#d6ad63]" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}>
                  {t(link.zh, link.en)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#d6ad63]" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
              {t("权威洞察", "Authority Insights")}
            </p>
            <div className="space-y-2.5">
              {insightLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block text-xs text-white/50 transition-colors duration-300 hover:text-[#d6ad63]" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}>
                  {t(link.zh, link.en)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#d6ad63]" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
              {t("新加坡咨询", "Singapore Consultation")}
            </p>
            <div className="space-y-3 text-xs text-white/50" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}>
              <p>Blk 210 New Upper Changi Road #01-729<br />Singapore 460210</p>
              <p>{t("营业时间：每日 10:00 — 20:00", "Hours: Daily 10:00 — 20:00")}</p>
              <a href={`${WA_LINK}?text=${encodeURIComponent("Hello Master Qiming, I would like to book a Qimen Strategy consultation.")}`} target="_blank" rel="noopener noreferrer" className="inline-block font-semibold text-[#d6ad63] transition-colors duration-300 hover:text-[#f4dfb0]">
                {t("预约奇门决策咨询", "Book a Qimen Strategy Session")} →
              </a>
            </div>
          </div>
        </div>

        <div className="mb-8 h-px bg-gradient-to-r from-transparent via-[#c89a45]/40 to-transparent" />
        <div className="mb-8 py-6 text-center">
          <p className="text-sm italic leading-relaxed text-white/55" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}>
            {t('"先看清局势，再决定方向。"', '"See the bigger picture before you decide."')}
          </p>
        </div>
        <div className="mb-6 h-px bg-gradient-to-r from-transparent via-[#c89a45]/25 to-transparent" />
        <div className="flex flex-col items-center justify-between gap-3 text-[0.65rem] text-white/35 md:flex-row" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
          <p>© {new Date().getFullYear()} Qimen Strategy · 启明遁甲</p>
          <p>{t("本网站内容仅供参考。最终判断与决定由您自己作出。", "Content on this website is for reference only. Final judgment and decisions remain your own.")}</p>
        </div>
      </div>
    </footer>
  );
}
