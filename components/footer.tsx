"use client";

import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";

const LOGO_URL = "/logo-qimen-strategy.jpg";
const WA_LINK = "https://wa.me/6589418791";

const serviceLinks = [
  { href: "/qimen-strategy-business", zh: "启明遁甲", en: "Qimen Strategy" },
  { href: "/decision", zh: "单项奇门决策", en: "Single Qimen Session" },
  { href: "/qimen-strategy-business", zh: "顾问方案", en: "Advisory Programs" },
  { href: "/founder", zh: "黄启明大师", en: "Founder" },
];

const insightLinks = [
  { href: "/insights/qimen-strategy-strategic-wisdom-decision-method", zh: "战略智慧决策方法", en: "Strategic Wisdom Method" },
  { href: "/insights/qimen-dunjia-decision-making", zh: "奇门遁甲与决策", en: "Qimen Decision-Making" },
  { href: "/insights", zh: "战略洞察中心", en: "Strategic Insights" },
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
                "启明遁甲由黄启明大师主理，是一套以奇门遁甲为根基的战略智慧决策方法，帮助企业主与个人在关键行动前看清时机、方向、人事关系与局势风险。",
                "Qimen Strategy is led by Master Huang Qiming. It is a Strategic Wisdom Decision Method rooted in Qi Men Dun Jia, helping business owners and individuals read timing, direction, people dynamics and risk before important decisions."
              )}
            </p>
          </div>

          <div>
            <p className="mb-4 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#d6ad63]" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
              {t("核心入口", "Core Pages")}
            </p>
            <div className="space-y-2.5">
              {serviceLinks.map((link, index) => (
                <Link key={`${link.href}-${index}`} href={link.href} className="block text-xs text-white/50 transition-colors duration-300 hover:text-[#d6ad63]" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}>
                  {t(link.zh, link.en)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#d6ad63]" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
              {t("战略洞察", "Strategic Insights")}
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
              {t("预约私密奇门决策咨询", "Book Private Session")}
            </p>
            <div className="space-y-3 text-xs text-white/50" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}>
              <p>Blk 210 New Upper Changi Road #01-729<br />Singapore 460210</p>
              <p>{t("营业时间：每日 10:00 — 20:00", "Hours: Daily 10:00 — 20:00")}</p>
              <a href={`${WA_LINK}?text=${encodeURIComponent("Hello Master Qiming, I would like to book a private Qimen Strategy session.")}`} target="_blank" rel="noopener noreferrer" className="inline-block font-semibold text-[#d6ad63] transition-colors duration-300 hover:text-[#f4dfb0]">
                {t("预约启明遁甲私密咨询", "Book a Qimen Strategy Session")} →
              </a>
            </div>
          </div>
        </div>

        <div className="mb-8 h-px bg-gradient-to-r from-transparent via-[#c89a45]/40 to-transparent" />
        <div className="mb-8 py-6 text-center">
          <p className="text-sm italic leading-relaxed text-white/55" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}>
            {t('"关键决定前，先看清局势。"', '"See the situation clearly before you decide."')}
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
