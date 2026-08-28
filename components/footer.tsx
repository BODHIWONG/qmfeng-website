"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { useLocalizedHref } from "@/hooks/use-localized-href";

const LOGO_URL = "/logo-qimen-strategy.jpg";

const advisoryLinks = [
  { href: "/enterprise-strategic-advisory", zh: "企业战略顾问", en: "Enterprise Strategic Advisory" },
  { href: "/chairman-founder-advisory", zh: "董事长与创始人顾问", en: "Chairman & Founder Advisory" },
  { href: "/family-business-succession", zh: "家族企业与传承", en: "Family Business & Succession" },
  { href: "/decision-consultation", zh: "决策咨询", en: "Decision Consultation" },
];

const insightLinks = [
  { href: "/insights", zh: "决策与战略洞察", en: "Decision & Strategy Insights" },
  { href: "/cases", zh: "案例研究", en: "Case Studies" },
  { href: "/enterprise-strategic-advisory", zh: "Reality × Qimen", en: "Reality × Qimen" },
  { href: "/family-business-succession", zh: "家族企业与传承", en: "Family Enterprise & Succession" },
];

const companyLinks = [
  { href: "/founder", zh: "关于黄启明", en: "About Qiming Huang" },
  { href: "/enterprise-strategic-advisory", zh: "我们的方法", en: "Our Approach" },
  { href: "/privacy", zh: "隐私政策", en: "Privacy Policy" },
  { href: "/terms", zh: "服务条款", en: "Terms of Service" },
];

export default function Footer() {
  const { t } = useLanguage();
  const localizeHref = useLocalizedHref();

  return (
    <footer className="border-t border-[#c89a45]/20 bg-black">
      <div className="container py-12 md:py-16">
        <div className="mb-12 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-5 flex items-center gap-3">
              <img src={LOGO_URL} alt="Qimen Strategy logo" className="h-14 w-14 object-contain" />
              <div>
                <p className="text-lg font-bold uppercase tracking-[0.12em] text-white">Qimen Strategy</p>
                <p className="mt-1 text-[0.65rem] tracking-[0.12em] text-[#d6ad63]">启明遁甲 · Strategic Decision Advisory</p>
              </div>
            </div>
            <p className="max-w-md text-xs leading-7 text-white/55">
              {t(
                "启明遁甲立足新加坡，为企业主、领导者与家族企业提供战略决策顾问服务。融合现实商业经验与奇门决策分析，从战略、人事、时机与传承等维度，为重大决策提供另一重视角。",
                "Qimen Strategy is a Singapore-based strategic decision advisory practice for business owners, leaders and family enterprises, combining practical business experience with Qimen-based decision analysis."
              )}
            </p>
            <p className="mt-5 text-sm font-semibold italic text-[#d6ad63]">
              {t("重大决策之前，先看全局。", "See the Whole Game Before You Decide.")}
            </p>
          </div>

          <div>
            <p className="mb-4 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#d6ad63]">{t("顾问服务", "Advisory")}</p>
            <div className="space-y-2.5">
              {advisoryLinks.map((link) => (
                <Link key={link.href} href={localizeHref(link.href)} className="block text-xs leading-5 text-white/50 transition-colors hover:text-[#d6ad63]">{t(link.zh, link.en)}</Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#d6ad63]">{t("洞察", "Insights")}</p>
            <div className="space-y-2.5">
              {insightLinks.map((link) => (
                <Link key={`${link.href}-${link.en}`} href={localizeHref(link.href)} className="block text-xs leading-5 text-white/50 transition-colors hover:text-[#d6ad63]">{t(link.zh, link.en)}</Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#d6ad63]">{t("公司", "Company")}</p>
            <div className="space-y-2.5">
              {companyLinks.map((link) => (
                <Link key={`${link.href}-${link.en}`} href={localizeHref(link.href)} className="block text-xs leading-5 text-white/50 transition-colors hover:text-[#d6ad63]">{t(link.zh, link.en)}</Link>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-7 border-y border-[#c89a45]/20 py-8 md:grid-cols-2 md:items-center">
          <div className="text-xs leading-6 text-white/50">
            <p className="font-semibold text-[#d6ad63]">QIMING FENG SHUI WISDOM PTE. LTD.</p>
            <p className="mt-2">Blk 210 New Upper Changi Road #01-729, Singapore 460210</p>
            <p>Singapore · In Person · Online</p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <Link href={localizeHref("/private-consultation")} className="inline-flex justify-center bg-[#d6ad63] px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-black hover:bg-[#f4dfb0]">
              {t("预约私密沟通", "Request a Private Conversation")}
            </Link>
            <p className="text-xs font-semibold text-white/45">{t("我们提供建议，最终由您决定。", "We Advise. You Decide.")}</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-center text-[0.65rem] leading-5 text-white/35 md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} Qimen Strategy · 启明遁甲 · Qiming Feng Shui Wisdom Pte. Ltd.</p>
          <p className="max-w-2xl md:text-right">
            {t(
              "启明遁甲提供重大决策的补充视角，不替代法律、财务、税务、投资、医疗或其他受监管的专业意见。最终决策由客户自行作出。",
              "Qimen Strategy provides an additional perspective for important decisions and does not replace legal, financial, tax, investment, medical or other regulated professional advice. Final decisions remain with the client."
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
