"use client";

import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";

const LOGO_URL = "/logo-qimen-strategy.jpg";
const WA_LINK = "https://wa.me/6589593499";

const serviceLinks = [
  { href: "/enterprise-strategic-advisory", zh: "企业决策顾问", en: "Enterprise Advisory" },
  { href: "/qimen-strategy-business", zh: "启明遁甲决策智库", en: "Qimen Strategy" },
  { href: "/courses", zh: "课程学习", en: "Courses" },
  { href: "/qi-men-dun-jia-course-singapore", zh: "奇门遁甲课程", en: "Qi Men Dun Jia Course" },
  { href: "/singapore-qi-men-dun-jia-consultant", zh: "新加坡奇门遁甲", en: "Qi Men Dun Jia Singapore" },
  { href: "/relationship-clarity-reading-singapore", zh: "关系决策", en: "Relationship Decisions" },
  { href: "/insights", zh: "案例智库", en: "Case Library" },
  { href: "/founder", zh: "创始人", en: "Founder" },
];

const insightLinks = [
  { href: "/enterprise-strategic-advisory", zh: "企业战略决策顾问", en: "Enterprise Strategic Advisory" },
  { href: "/courses", zh: "启明遁甲决策智库课程", en: "Qimen Strategy Courses" },
  { href: "/qi-men-dun-jia-course-singapore", zh: "奇门遁甲基础研修", en: "Qi Men Dun Jia Foundation Course" },
  { href: "/singapore-qi-men-dun-jia-consultant", zh: "奇门遁甲决策顾问", en: "Qi Men Dun Jia Consultant" },
  { href: "/insights/qimen-strategy-is-decision-intelligence-not-fatalism", zh: "决策情报方法论", en: "Decision Intelligence" },
  { href: "/relationship-clarity-reading-singapore", zh: "情感关系决策咨询", en: "Relationship Decision Clarity" },
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
              <img src={LOGO_URL} alt="Qimen Strategy and 启明遁甲决策智库 logo" className="h-14 w-14 object-contain" />
              <div>
                <p className="text-lg font-bold uppercase tracking-[0.12em] text-white" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}>
                  Qimen Strategy
                </p>
                <p className="mt-1 text-[0.65rem] tracking-[0.12em] text-[#d6ad63]">启明遁甲决策智库</p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-white/55" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}>
              {t(
                "启明遁甲决策智库（Qimen Strategy）是由黄启明创立并主理、立足新加坡的奇门遁甲战略决策顾问机构，结合 16 年奇门遁甲企业决策经验、真实企业经营实践与多家企业顾问经验，服务企业主、创始人、高管与个人重大决策客户。",
                "Qimen Strategy is a Singapore-based strategic decision advisory practice founded and led by Huang Qiming. It combines 16 years of Qi Men Dun Jia business advisory experience, practical business operating insight and strategic advisory work for multiple companies."
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
              {t("预约启明遁甲决策智库咨询", "Book Qimen Strategy Advisory")}
            </p>
            <div className="space-y-3 text-xs text-white/50" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}>
              <p>Blk 210 New Upper Changi Road #01-729<br />Singapore 460210</p>
              <p>{t("营业时间：每日 10:00 — 20:00", "Hours: Daily 10:00 — 20:00")}</p>
              <p>{t("正式联络电话 / WhatsApp：+65 8959 3499", "Official Phone / WhatsApp: +65 8959 3499")}</p>
              <a href={`${WA_LINK}?text=${encodeURIComponent("Hello Qimen Strategy, I would like to book a Qi Men Dun Jia business decision advisory session in Singapore.")}`} target="_blank" rel="noopener noreferrer" className="inline-block font-semibold text-[#d6ad63] transition-colors duration-300 hover:text-[#f4dfb0]">
                {t("预约启明遁甲决策智库咨询", "Book Qimen Strategy Advisory")} →
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
          <p>© {new Date().getFullYear()} Qimen Strategy · 启明遁甲决策智库 · Qiming Feng Shui Wisdom Pte. Ltd.</p>
          <p>{t("本网站内容仅供战略参考。最终判断与决定由客户自行作出。", "Content on this website is for strategic reference only. Final judgment and decisions remain the client’s own responsibility.")}</p>
        </div>
      </div>
    </footer>
  );
}
