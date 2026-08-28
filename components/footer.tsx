"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { useLocalizedHref } from "@/hooks/use-localized-href";

const LOGO_URL = "/logo-qimen-strategy.jpg";
const CONSULTATION_WHATSAPP =
  "https://wa.me/6589593499?text=Hi%20Qimen%20Strategy%2C%20I%27d%20like%20to%20ask%20about%20a%20consultation.%20My%20current%20situation%20is%3A";

const decisionLinks = [
  { href: "/decision-consultation", zh: "决策咨询 · S$398 / S$698 / S$998", en: "Decision Consultation · S$398 / S$698 / S$998" },
  { href: "/personal-advisory", zh: "个人重大决策", en: "Individual Major Decisions" },
  { href: "/relationship-clarity-reading-singapore", zh: "关系与婚姻决策", en: "Relationship & Marriage Decisions" },
  { href: "/executive-career-transition-advisory", zh: "事业与高管转型", en: "Career & Executive Transition" },
];

const advisoryLinks = [
  { href: "/enterprise-strategic-advisory", zh: "企业战略顾问与长期陪跑", en: "Enterprise Strategic Advisory" },
  { href: "/chairman-founder-advisory", zh: "董事长与创始人顾问", en: "Chairman & Founder Advisory" },
  { href: "/family-business-succession", zh: "家族企业与二代传承", en: "Family Business & Succession" },
  { href: "/founder-wealth-investment-advisory", zh: "财富周期与投资决策", en: "Wealth & Investment Decisions" },
];

const methodologyLinks = [
  { href: "/enterprise-strategic-advisory#methodology", zh: "Reality × Qimen", en: "Reality × Qimen" },
  { href: "/enterprise-strategic-advisory#methodology", zh: "靶心理论 · Target Theory", en: "Target Theory · 靶心理论" },
  { href: "/enterprise-strategic-advisory#methodology", zh: "陀螺理论 · Gyroscope Theory", en: "Gyroscope Theory · 陀螺理论" },
  { href: "/commercial-feng-shui", zh: "战略环境与风水（专业能力）", en: "Strategic Environment & Feng Shui (Capability)" },
];

const companyLinks = [
  { href: "/founder", zh: "关于创始人", en: "About the Founder" },
  { href: "/insights", zh: "案例与洞察", en: "Cases & Insights" },
  { href: "/courses", zh: "奇门教育", en: "Qimen Education" },
  { href: "/privacy", zh: "隐私政策", en: "Privacy Policy" },
  { href: "/terms", zh: "服务条款", en: "Terms of Service" },
];

export default function Footer() {
  const { t } = useLanguage();
  const localizeHref = useLocalizedHref();

  const renderLinks = (links: typeof decisionLinks) => (
    <div className="space-y-2.5">
      {links.map((link) => (
        <Link key={`${link.href}-${link.zh}`} href={localizeHref(link.href)} className="block text-xs leading-5 text-white/50 transition-colors hover:text-[#d6ad63]">
          {t(link.zh, link.en)}
        </Link>
      ))}
    </div>
  );

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
                "启明遁甲立足新加坡，为企业主、领导者与家族企业提供战略决策顾问服务。我们融合现实商业经验与奇门决策分析，从方向、人事、时机、传承与执行等维度，为重大决策提供更完整的视角。",
                "Qimen Strategy is a Singapore-based strategic decision advisory practice for business owners, leaders and family enterprises, combining practical business experience with Qimen-based decision analysis."
              )}
            </p>
            <p className="mt-5 text-sm font-semibold italic text-[#d6ad63]">
              {t("重大决策之前，先看全局。", "See the Whole Game Before You Decide.")}
            </p>
          </div>

          <div>
            <p className="mb-4 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#d6ad63]">{t("决策咨询", "Decision Advisory")}</p>
            {renderLinks(decisionLinks)}
          </div>

          <div>
            <p className="mb-4 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#d6ad63]">{t("企业与家族顾问", "Enterprise & Family Advisory")}</p>
            {renderLinks(advisoryLinks)}
          </div>

          <div>
            <p className="mb-4 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#d6ad63]">{t("方法论与能力", "Methodology & Capabilities")}</p>
            {renderLinks(methodologyLinks)}
          </div>

          <div>
            <p className="mb-4 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#d6ad63]">{t("公司与洞察", "Company & Insights")}</p>
            {renderLinks(companyLinks)}
          </div>
        </div>

        <div className="grid gap-7 border-y border-[#c89a45]/20 py-8 md:grid-cols-2 md:items-center">
          <div className="text-xs leading-6 text-white/50">
            <p className="font-semibold text-[#d6ad63]">QIMING FENG SHUI WISDOM PTE. LTD.</p>
            <p className="mt-2">Blk 210 New Upper Changi Road #01-729, Singapore 460210</p>
            <p>Official WhatsApp: +65 8959 3499 · Hours: Daily 10:00–20:00</p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <a href={CONSULTATION_WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center bg-[#d6ad63] px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-black hover:bg-[#f4dfb0]">
              {t("申请私密咨询", "Request a Private Consultation")}
            </a>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold">
              <Link href={localizeHref("/enterprise-strategic-advisory")} className="text-white/48 transition hover:text-[#d6ad63]">
                {t("企业战略顾问 →", "Enterprise Advisory →")}
              </Link>
              <Link href={localizeHref("/family-business-succession")} className="text-white/48 transition hover:text-[#d6ad63]">
                {t("家族企业与传承 →", "Family Business & Succession →")}
              </Link>
              <Link href={localizeHref("/decision-consultation")} className="text-white/48 transition hover:text-[#d6ad63]">
                {t("决策咨询 →", "Decision Consultation →")}
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-center text-[0.65rem] leading-5 text-white/35 md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} Qimen Strategy · 启明遁甲决策智库 · Qiming Feng Shui Wisdom Pte. Ltd.</p>
          <p className="max-w-2xl md:text-right">
            {t(
              "战略与个人咨询提供决策支持，不保证特定结果，也不替代金融、法律、医疗、心理或其他受监管的专业意见。风水仅在与商业空间、办公环境或重要空间决策相关时，作为辅助专业能力纳入分析。",
              "Strategic and individual advisory provides decision support, does not guarantee specific outcomes and does not replace regulated professional advice. Feng Shui is incorporated only where relevant as a supporting capability for business premises, workplace environments or significant spatial decisions."
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
