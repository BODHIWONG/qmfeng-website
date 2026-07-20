"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";

const LOGO_URL = "/logo-qimen-strategy.jpg";
const WA_LINK = "https://wa.me/6589593499";

const advisoryLinks = [
  { href: "/enterprise-strategic-advisory", zh: "创业老板事业陪跑", en: "Founder Business Advisory" },
  { href: "/founder-wealth-investment-advisory", zh: "财富周期与投资决策", en: "Wealth & Investment Decisions" },
  { href: "/executive-career-transition-advisory", zh: "高管事业转型", en: "Executive Career Transition" },
  { href: "/decision", zh: "个人重大决策", en: "Major Personal Decisions" },
  { href: "/relationship-clarity-reading-singapore", zh: "情感关系决策", en: "Relationship Decisions" },
];

const academyLinks = [
  { href: "/courses", zh: "课程体系", en: "Course Pathways" },
  { href: "/qi-men-dun-jia-course-singapore", zh: "奇门遁甲基础课程", en: "Qi Men Foundation Course" },
  { href: "/course-registration?course=qimen-foundation&batch=2026-09-19", zh: "选择班次并报名", en: "Select Batch & Register" },
  { href: "/course-policy", zh: "课程报名政策", en: "Course Registration Policy" },
];

const companyLinks = [
  { href: "/founder", zh: "关于黄启明", en: "About Huang Qiming" },
  { href: "/insights", zh: "案例与洞察", en: "Cases & Insights" },
  { href: "/privacy", zh: "隐私政策", en: "Privacy Policy" },
  { href: "/terms", zh: "服务条款", en: "Terms of Service" },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-[#c89a45]/20 bg-black">
      <div className="container py-12 md:py-16">
        <div className="mb-12 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-5 flex items-center gap-3">
              <img src={LOGO_URL} alt="Qimen Strategy and 启明遁甲决策智库 logo" className="h-14 w-14 object-contain" />
              <div>
                <p className="text-lg font-bold uppercase tracking-[0.12em] text-white">Qimen Strategy</p>
                <p className="mt-1 text-[0.65rem] tracking-[0.12em] text-[#d6ad63]">启明遁甲决策智库</p>
              </div>
            </div>
            <p className="max-w-md text-xs leading-7 text-white/55">
              {t(
                "启明遁甲决策智库立足新加坡，专注创业老板事业陪跑、财富周期与投资决策辅助、高管事业转型、个人情感与重大决策支持，并通过启明遁甲研修体系持续开展每周课程。",
                "Qimen Strategy is a Singapore-based strategic decision advisory practice supporting founders, entrepreneurs, executives and individuals before major business, investment, career and life decisions. Qimen Strategy Academy provides structured weekly Qi Men Dun Jia courses."
              )}
            </p>
            <p className="mt-5 text-sm font-semibold italic text-[#d6ad63]">See the Whole Game Before You Decide.</p>
          </div>

          <div>
            <p className="mb-4 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#d6ad63]">{t("顾问服务", "Advisory")}</p>
            <div className="space-y-2.5">
              {advisoryLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block text-xs leading-5 text-white/50 transition-colors hover:text-[#d6ad63]">
                  {t(link.zh, link.en)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#d6ad63]">{t("启明遁甲研修", "Academy")}</p>
            <div className="space-y-2.5">
              {academyLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block text-xs leading-5 text-white/50 transition-colors hover:text-[#d6ad63]">
                  {t(link.zh, link.en)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#d6ad63]">{t("公司与政策", "Company & Policies")}</p>
            <div className="space-y-2.5">
              {companyLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block text-xs leading-5 text-white/50 transition-colors hover:text-[#d6ad63]">
                  {t(link.zh, link.en)}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-7 border-y border-[#c89a45]/20 py-8 md:grid-cols-2 md:items-center">
          <div className="text-xs leading-6 text-white/50">
            <p className="font-semibold text-[#d6ad63]">QIMING FENG SHUI WISDOM PTE. LTD.</p>
            <p className="mt-2">Blk 210 New Upper Changi Road #01-729, Singapore 460210</p>
            <p>Official WhatsApp: +65 8959 3499 · Hours: Daily 10:00–20:00</p>
          </div>
          <div className="md:text-right">
            <a
              href={`${WA_LINK}?text=${encodeURIComponent("Hello Qimen Strategy, I would like to apply for a private strategic advisory consultation.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-[#d6ad63] px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-black hover:bg-[#f4dfb0]"
            >
              {t("申请顾问咨询", "Apply for Advisory")}
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-center text-[0.65rem] leading-5 text-white/35 md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} Qimen Strategy · 启明遁甲决策智库 · Qiming Feng Shui Wisdom Pte. Ltd.</p>
          <p className="max-w-2xl md:text-right">
            {t(
              "本网站提供战略判断、教育与决策参考，不保证特定结果，也不替代金融、法律、医疗、心理或其他受监管的专业意见。",
              "This website provides strategic decision support and education. No specific outcome is guaranteed, and it does not replace financial, legal, medical, psychological or other regulated professional advice."
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
