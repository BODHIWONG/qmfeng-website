"use client";

import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";

const LOGO_URL = "/logo-qimen-strategy.jpg";
const WA_LINK = "https://wa.me/6589418791";

const serviceLinks = [
  { href: "/singapore-qi-men-dun-jia-consultant", zh: "新加坡奇门遁甲", en: "Qi Men Dun Jia Singapore" },
  { href: "/enterprise-strategic-advisory", zh: "企业战略顾问", en: "Enterprise Advisory" },
  { href: "/qimen-strategy-business", zh: "启明遁甲", en: "Qimen Strategy" },
  { href: "/insights", zh: "案例智库", en: "Case Library" },
  { href: "/founder", zh: "创始人", en: "Founder" },
];

const insightLinks = [
  { href: "/singapore-qi-men-dun-jia-consultant", zh: "奇门遁甲决策顾问", en: "Qi Men Dun Jia Consultant" },
  { href: "/enterprise-strategic-advisory", zh: "企业战略决策顾问", en: "Enterprise Strategic Advisory" },
  { href: "/insights/qimen-strategy-is-decision-intelligence-not-fatalism", zh: "决策情报方法论", en: "Decision Intelligence" },
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
              <img src={LOGO_URL} alt="Qimen Strategy Singapore Qi Men Dun Jia Logo" className="h-14 w-14 object-contain" />
              <div>
                <p className="text-lg font-bold uppercase tracking-[0.12em] text-white" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}>
                  Qimen Strategy
                </p>
                <p className="mt-1 text-[0.65rem] tracking-[0.25em] text-[#d6ad63]">启明遁甲</p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-white/55" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}>
              {t(
                "启明遁甲 Qimen Strategy 是新加坡的奇门遁甲战略决策顾问品牌，面向企业主、创始人、高管、投资者与个人重大决策客户，提供商业决策、投资判断、人事合作、事业方向及住宅/办公室风水调理支持。",
                "Qimen Strategy, also known as 启明遁甲, is a Singapore-based Qi Men Dun Jia strategic decision advisory brand for business owners, founders, executives, investors and individuals, covering business decisions, investment timing, people assessment, career direction and Feng Shui alignment."
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
              {t("预约奇门遁甲决策顾问", "Book Qimen Strategy Advisory")}
            </p>
            <div className="space-y-3 text-xs text-white/50" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}>
              <p>Blk 210 New Upper Changi Road #01-729<br />Singapore 460210</p>
              <p>{t("营业时间：每日 10:00 — 20:00", "Hours: Daily 10:00 — 20:00")}</p>
              <a href={`${WA_LINK}?text=${encodeURIComponent("Hello Qimen Strategy, I would like to book a Qi Men Dun Jia strategic decision advisory session in Singapore.")}`} target="_blank" rel="noopener noreferrer" className="inline-block font-semibold text-[#d6ad63] transition-colors duration-300 hover:text-[#f4dfb0]">
                {t("预约奇门遁甲决策顾问", "Book Qimen Strategy Advisory")} →
              </a>
            </div>
          </div>
        </div>

        <div className="mb-8 h-px bg-gradient-to-r from-transparent via-[#c89a45]/40 to-transparent" />
        <div className="mb-8 py-6 text-center">
          <p className="text-sm italic leading-relaxed text-white/55" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}>
            {t('"关键决策前，先看清全局。"', '"See the Whole Game Before You Decide."')}
          </p>
        </div>
        <div className="mb-6 h-px bg-gradient-to-r from-transparent via-[#c89a45]/25 to-transparent" />
        <div className="flex flex-col items-center justify-between gap-3 text-[0.65rem] text-white/35 md:flex-row" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
          <p>© {new Date().getFullYear()} Qimen Strategy · 启明遁甲 · Qiming Feng Shui Wisdom Pte. Ltd.</p>
          <p>{t("本网站内容仅供战略参考。最终判断与决定由客户自行作出。", "Content on this website is for strategic reference only. Final judgment and decisions remain the client’s own responsibility.")}</p>
        </div>
      </div>
    </footer>
  );
}
