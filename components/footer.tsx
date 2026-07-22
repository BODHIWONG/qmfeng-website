"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";

const LOGO_URL = "/logo-qimen-strategy.jpg";
const COURSE_REGISTRATION_LINK = "/course-registration?course=qimen-foundation&batch=2026-09-19";

const academyLinks = [
  { href: "/courses", zh: "课程体系", en: "Course Pathways" },
  { href: "/qi-men-dun-jia-course-singapore", zh: "奇门遁甲基础课程", en: "Qi Men Foundation Course" },
  { href: COURSE_REGISTRATION_LINK, zh: "选择班次并报名", en: "Select Batch & Register" },
  { href: "/course-policy", zh: "课程报名政策", en: "Course Registration Policy" },
];

const businessLinks = [
  { href: "/enterprise-strategic-advisory", zh: "创业老板事业陪跑", en: "Founder Business Advisory" },
  { href: "/founder-wealth-investment-advisory", zh: "财富周期与投资决策", en: "Wealth & Investment Decisions" },
  { href: "/executive-career-transition-advisory", zh: "高管事业转型", en: "Executive Career Transition" },
];

const personalLinks = [
  { href: "/personal-advisory", zh: "个人咨询总览", en: "Personal Advisory Overview" },
  { href: "/decision", zh: "个人重大决策", en: "Major Personal Decisions" },
  { href: "/relationship-clarity-reading-singapore", zh: "感情与婚姻咨询", en: "Relationship & Marriage Advisory" },
  { href: "/personal-advisory#date-selection", zh: "择日服务", en: "Auspicious Date Selection" },
  { href: "/personal-advisory#mobile-number", zh: "吉祥手机号码选择", en: "Mobile Number Selection" },
  { href: "/personal-advisory#home-feng-shui", zh: "居家风水与空间净化", en: "Home Feng Shui & Space Clearing" },
];

const companyLinks = [
  { href: "/founder", zh: "关于启明老师", en: "About Mr.Qiming" },
  { href: "/insights", zh: "案例与洞察", en: "Cases & Insights" },
  { href: "/privacy", zh: "隐私政策", en: "Privacy Policy" },
  { href: "/terms", zh: "服务条款", en: "Terms of Service" },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-[#c89a45]/20 bg-black">
      <div className="container py-12 md:py-16">
        <div className="mb-12 grid gap-10 md:grid-cols-2 lg:grid-cols-6">
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
                "启明遁甲决策智库立足新加坡，以奇门遁甲实战课程、企业战略陪跑与个人咨询服务为三大核心业务，为学习者、企业主、专业人士与个人客户提供清晰、专业、按需匹配的支持。",
                "Qimen Strategy is a Singapore-based practice built around three core pillars: practical Qi Men Dun Jia education, business strategic advisory and private personal consultation."
              )}
            </p>
            <p className="mt-5 text-sm font-semibold italic text-[#d6ad63]">See the Bigger Picture Before You Decide.</p>
          </div>

          <div>
            <p className="mb-4 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#d6ad63]">{t("奇门课程", "Qi Men Courses")}</p>
            <div className="space-y-2.5">
              {academyLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block text-xs leading-5 text-white/50 transition-colors hover:text-[#d6ad63]">
                  {t(link.zh, link.en)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#d6ad63]">{t("企业陪跑", "Business Advisory")}</p>
            <div className="space-y-2.5">
              {businessLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block text-xs leading-5 text-white/50 transition-colors hover:text-[#d6ad63]">
                  {t(link.zh, link.en)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#d6ad63]">{t("个人咨询", "Personal Advisory")}</p>
            <div className="space-y-2.5">
              {personalLinks.map((link) => (
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
          <div className="flex flex-col gap-3 md:items-end">
            <Link href={COURSE_REGISTRATION_LINK} className="inline-flex justify-center bg-[#d6ad63] px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-black hover:bg-[#f4dfb0]">
              {t("课程报名", "Register for a Course")}
            </Link>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold">
              <Link href="/enterprise-strategic-advisory" className="text-white/48 transition hover:text-[#d6ad63]">
                {t("了解企业陪跑 →", "Business Advisory →")}
              </Link>
              <Link href="/personal-advisory" className="text-white/48 transition hover:text-[#d6ad63]">
                {t("查看个人咨询 →", "Personal Advisory →")}
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-center text-[0.65rem] leading-5 text-white/35 md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} Qimen Strategy · 启明遁甲决策智库 · Qiming Feng Shui Wisdom Pte. Ltd.</p>
          <p className="max-w-2xl md:text-right">
            {t(
              "课程用于学习与能力建设；企业及个人咨询提供判断与行动参考，不保证特定结果，也不替代金融、法律、医疗、心理或其他受监管的专业意见。",
              "Courses are for learning and capability building. Business and personal advisory provides decision support, does not guarantee specific outcomes and does not replace regulated financial, legal, medical, psychological or other professional advice."
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
