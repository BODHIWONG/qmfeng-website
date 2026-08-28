"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { useLocalizedHref } from "@/hooks/use-localized-href";

const CONSULTATION_WHATSAPP =
  "https://wa.me/6589593499?text=Hi%20Qimen%20Strategy%2C%20I%27d%20like%20to%20arrange%20a%20private%20conversation.%20My%20current%20situation%20is%3A";

const advisoryLinks = [
  { href: "/enterprise-strategic-advisory", zh: "企业战略顾问", en: "Enterprise Strategic Advisory" },
  { href: "/chairman-founder-advisory", zh: "董事长与创始人顾问", en: "Chairman & Founder Advisory" },
  { href: "/family-business-succession", zh: "家族企业与传承", en: "Family Business & Succession" },
  { href: "/personal-advisory", zh: "决策咨询", en: "Decision Consultation" },
];

const insightLinks = [
  { href: "/insights", zh: "决策与战略洞察", en: "Decision & Strategy Insights" },
  { href: "/enterprise-strategic-advisory", zh: "Reality × Qimen", en: "Reality × Qimen" },
  { href: "/family-business-succession", zh: "家族企业与接班", en: "Family Business & Succession" },
  { href: "/insights", zh: "启明遁甲观点", en: "Qimen Perspectives" },
];

const companyLinks = [
  { href: "/founder", zh: "关于黄启明", en: "About Huang Qiming" },
  { href: "/enterprise-strategic-advisory", zh: "我们的方法", en: "Our Approach" },
  { href: "/insights", zh: "案例研究", en: "Case Studies" },
  { href: "/contact", zh: "预约私密沟通", en: "Request a Private Conversation" },
];

export default function Footer() {
  const { t } = useLanguage();
  const localizeHref = useLocalizedHref();

  return (
    <footer className="border-t border-[#c89a45]/20 bg-black">
      <div className="container py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.85fr_0.85fr_0.85fr]">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center border border-[#d6ad63]/45 text-[#d6ad63]">
                <div className="grid h-7 w-7 grid-cols-3 gap-[2px]">
                  {Array.from({ length: 9 }).map((_, index) => (
                    <span key={index} className={index === 4 ? "bg-[#d6ad63]" : "border border-[#d6ad63]/45"} />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-lg font-bold uppercase tracking-[0.12em] text-white">Qimen Strategy</p>
                <p className="mt-1 text-[0.65rem] tracking-[0.12em] text-[#d6ad63]">Strategic Decision Advisory</p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/52">
              {t(
                "启明遁甲立足新加坡，为企业主、领导者与家族企业提供战略决策顾问服务。我们结合现实商业经验与奇门决策分析，帮助决策者在重大承诺之前看见更完整的局势。",
                "Singapore-based strategic decision advisory for business owners, leaders and family enterprises, combining practical business experience with Qimen-based decision analysis."
              )}
            </p>
            <p className="mt-5 text-sm font-semibold text-[#d6ad63]">
              {t("重大决策之前，先看全局。", "See the Whole Game Before You Decide.")}
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/32">Reality × Qimen · Target Theory · Gyroscope Theory</p>
          </div>

          <div>
            <p className="mb-4 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#d6ad63]">{t("顾问服务", "Advisory")}</p>
            <div className="space-y-2.5">
              {advisoryLinks.map((link) => (
                <Link key={link.href} href={localizeHref(link.href)} className="block text-xs leading-5 text-white/50 transition hover:text-[#d6ad63]">
                  {t(link.zh, link.en)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#d6ad63]">{t("洞察", "Insights")}</p>
            <div className="space-y-2.5">
              {insightLinks.map((link) => (
                <Link key={`${link.href}-${link.en}`} href={localizeHref(link.href)} className="block text-xs leading-5 text-white/50 transition hover:text-[#d6ad63]">
                  {t(link.zh, link.en)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#d6ad63]">{t("公司", "Company")}</p>
            <div className="space-y-2.5">
              {companyLinks.map((link) => (
                <Link key={`${link.href}-${link.en}`} href={localizeHref(link.href)} className="block text-xs leading-5 text-white/50 transition hover:text-[#d6ad63]">
                  {t(link.zh, link.en)}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-7 border-y border-[#c89a45]/20 py-8 md:grid-cols-2 md:items-center">
          <div className="text-xs leading-6 text-white/45">
            <p className="font-semibold text-[#d6ad63]">QIMING FENG SHUI WISDOM PTE. LTD.</p>
            <p className="mt-2">Blk 210 New Upper Changi Road #01-729, Singapore 460210</p>
            <p>Singapore · In Person · Online · WhatsApp +65 8959 3499</p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <Link href={localizeHref("/contact")} className="inline-flex justify-center bg-[#d6ad63] px-6 py-3 text-sm font-bold uppercase tracking-[0.1em] text-black hover:bg-[#f4dfb0]">
              {t("预约私密沟通", "Request a Private Conversation")}
            </Link>
            <a href={CONSULTATION_WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-white/42 transition hover:text-[#d6ad63]">
              {t("WhatsApp 联系 →", "WhatsApp →")}
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-center text-[0.65rem] leading-5 text-white/32 md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} Qimen Strategy · 启明遁甲 · Qiming Feng Shui Wisdom Pte. Ltd.</p>
          <p className="max-w-2xl md:text-right">
            {t(
              "启明遁甲提供战略决策视角，不替代法律、财务、税务、投资、医疗或其他受监管的专业意见。最终决定由客户自行作出。",
              "Qimen Strategy provides an additional strategic decision-making perspective and does not replace legal, financial, tax, investment, medical or other regulated professional advice. Final decisions remain with the client."
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
