"use client";

import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";

const LOGO_URL = "/logo-qimen-strategy.jpg";
const WA_LINK = "https://wa.me/6589593499";

const advisoryLinks = [
  { href: "/advisory", zh: "顾问服务总览", en: "Advisory Overview" },
  { href: "/founder-business-advisory", zh: "创业老板事业陪跑", en: "Founder Business Advisory" },
  { href: "/wealth-cycle-investment-decision", zh: "财富与投资决策辅助", en: "Wealth & Investment Support" },
  { href: "/executive-career-transition", zh: "高管事业转型", en: "Executive Career Transition" },
  { href: "/relationship-clarity-reading-singapore", zh: "情感与重大决策", en: "Relationship Decisions" },
];

const learningLinks = [
  { href: "/qi-men-dun-jia-course-singapore", zh: "每周奇门基础课程", en: "Weekly Qi Men Course" },
  { href: "/course-registration", zh: "课程报名与付款", en: "Course Registration" },
  { href: "/courses", zh: "课程体系", en: "Course Pathways" },
  { href: "/insights", zh: "案例与洞察", en: "Cases & Insights" },
  { href: "/founder", zh: "关于黄启明", en: "About Huang Qiming" },
];

const legalLinks = [
  { href: "/privacy", zh: "隐私政策", en: "Privacy Policy" },
  { href: "/terms", zh: "服务条款与免责声明", en: "Terms & Disclaimer" },
  { href: "/course-policy", zh: "课程转班与取消政策", en: "Course Policy" },
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
                <p className="text-lg font-bold uppercase tracking-[0.12em] text-white">Qimen Strategy</p>
                <p className="mt-1 text-[0.65rem] tracking-[0.12em] text-[#d6ad63]">启明遁甲决策智库</p>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-white/55">
              {t(
                "启明遁甲决策智库立足新加坡，聚焦两大业务：为创业老板、高管与个人提供重大决策支持；每周开设奇门遁甲基础课程。由创始人黄启明主理。",
                "Qimen Strategy is a Singapore-based practice focused on two core areas: strategic decision advisory for founders, executives and individuals, and weekly Qi Men Dun Jia foundation courses led by Founder Huang Qiming."
              )}
            </p>
          </div>

          <div>
            <p className="mb-4 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#d6ad63]">{t("顾问服务", "Advisory")}</p>
            <div className="space-y-2.5">
              {advisoryLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block text-xs text-white/50 transition-colors hover:text-[#d6ad63]">
                  {t(link.zh, link.en)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#d6ad63]">{t("课程与资源", "Learning & Resources")}</p>
            <div className="space-y-2.5">
              {learningLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block text-xs text-white/50 transition-colors hover:text-[#d6ad63]">
                  {t(link.zh, link.en)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#d6ad63]">{t("联络与政策", "Contact & Policies")}</p>
            <div className="space-y-3 text-xs text-white/50">
              <p>Blk 210 New Upper Changi Road #01-729<br />Singapore 460210</p>
              <p>{t("营业时间：每日 10:00 — 20:00", "Hours: Daily 10:00 — 20:00")}</p>
              <p>{t("WhatsApp：+65 8959 3499", "WhatsApp: +65 8959 3499")}</p>
              <a
                href={`${WA_LINK}?text=${encodeURIComponent("Hello Qimen Strategy, I would like to submit a private advisory enquiry.")}`}
                target="_blank"
                rel="noopener noreferrer"
                data-conversion="footer_private_enquiry"
                className="inline-block font-semibold text-[#d6ad63] transition-colors hover:text-[#f4dfb0]"
              >
                {t("申请顾问咨询", "Apply for Advisory")} →
              </a>
              <div className="space-y-2 pt-2">
                {legalLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block text-white/42 transition-colors hover:text-[#d6ad63]">
                    {t(link.zh, link.en)}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 h-px bg-gradient-to-r from-transparent via-[#c89a45]/25 to-transparent" />
        <div className="flex flex-col items-center justify-between gap-3 text-[0.65rem] text-white/35 md:flex-row">
          <p>© {new Date().getFullYear()} Qimen Strategy · 启明遁甲决策智库 · Qiming Feng Shui Wisdom Pte. Ltd.</p>
          <p>{t("顾问内容仅供决策参考；课程内容仅供学习。最终决定与行动由客户自行负责。", "Advisory content is for decision reference and course content is for learning. Final decisions and actions remain the client's responsibility.")}</p>
        </div>
      </div>
    </footer>
  );
}
