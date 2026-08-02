"use client";

import { ArrowRight, BriefcaseBusiness, Compass, MessageCircle, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";

const FOUNDER_IMAGE = "/master-qiming-about.jpg";
const CONSULTATION_WHATSAPP =
  "https://wa.me/6589593499?text=Hello%20Qimen%20Strategy%2C%20I%20would%20like%20to%20arrange%20a%20private%20consultation.%20My%20current%20situation%20is%3A";

const credentials = [
  {
    value: "16+",
    zh: "年奇门遁甲实战经验",
    en: "Years of Practical Qi Men Dun Jia",
  },
  {
    value: "18",
    zh: "年企业运营与管理经验",
    en: "Years of Business Operations Experience",
  },
  {
    value: "1-to-1",
    zh: "私密咨询｜Bedok或线上",
    en: "Private Advisory · Bedok or Online",
  },
];

const strengths = [
  {
    icon: Compass,
    titleZh: "奇门实战判断",
    titleEn: "Practical Qi Men Insight",
    bodyZh: "结合客户当下情况与具体盘面，帮助客户看清局势与下一步方向。",
    bodyEn: "Review the client’s current situation together with the specific chart to clarify the next direction.",
  },
  {
    icon: BriefcaseBusiness,
    titleZh: "理解企业现实",
    titleEn: "Grounded in Business Reality",
    bodyZh: "长期企业运营经验，使咨询能够理解现金流、人事、合作、执行与扩张压力。",
    bodyEn: "Long-term operating experience brings practical understanding of cash flow, people, partnerships, execution and growth pressure.",
  },
  {
    icon: ShieldCheck,
    titleZh: "专业边界清楚",
    titleEn: "Clear Professional Boundaries",
    bodyZh: "提供判断、风险提示与行动参考，不夸大结果，也不强迫客户购买物品或摆件。",
    bodyEn: "Provides decision reference and risk awareness without exaggerated guarantees or pressure to purchase products or objects.",
  },
];

export default function FounderProfileContent() {
  const { t } = useLanguage();

  return (
    <main className="bg-[#050403] text-white">
      <section className="relative overflow-hidden border-b border-[#d6ad63]/20 px-4 pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(214,173,99,0.18),transparent_34%)]" />
        <div className="container relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d6ad63]">
              {t("启明老师｜启明遁甲创始人", "Huang Qiming · Founder of Qimen Strategy")}
            </p>
            <h1
              className="mt-6 text-5xl font-semibold leading-[0.98] text-[#f4dfb0] md:text-7xl"
              style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
            >
              {t("黄启明", "Huang Qiming")}
            </h1>
            <p className="mt-5 text-xl font-semibold leading-tight text-[#e2bd6b] md:text-3xl">
              {t("企业战略决策顾问｜奇门遁甲实战课程主讲", "Business Strategic Advisor · Practical Qi Men Dun Jia Instructor")}
            </p>
            <p className="mt-8 max-w-3xl text-base leading-8 text-white/72 md:text-lg">
              {t(
                "黄启明拥有16年以上奇门遁甲实战经验，以及18年企业运营与管理经验。他创立启明遁甲 Qimen Strategy，希望把奇门遁甲从模糊的传统表达，转化为客户在事业、感情、生意与人生重要选择前可以理解和使用的判断参考。",
                "Huang Qiming has more than 16 years of practical Qi Men Dun Jia experience and 18 years of business operations and management experience. He founded Qimen Strategy to present Qi Men Dun Jia as a clear decision reference for career, relationship, business and other important life choices."
              )}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={CONSULTATION_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#d6ad63] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black hover:bg-[#f4dfb0]"
              >
                <MessageCircle size={18} />
                {t("WhatsApp私密咨询", "WhatsApp Private Consultation")}
              </a>
              <Link
                href="/enterprise-strategic-advisory"
                className="inline-flex items-center justify-center gap-3 border border-[#d6ad63]/65 px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#f4dfb0] hover:bg-[#d6ad63]/10"
              >
                {t("了解企业顾问", "Business Advisory")}
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border border-[#d6ad63]/30 bg-[#0b0907] shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
            <img
              src={FOUNDER_IMAGE}
              alt={t("黄启明｜启明遁甲创始人", "Huang Qiming, Founder of Qimen Strategy")}
              className="aspect-[4/5] w-full object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent p-6 md:p-7">
              <p className="text-3xl font-semibold text-[#f4dfb0]" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
                {t("黄启明", "Huang Qiming")}
              </p>
              <p className="mt-2 text-sm font-semibold leading-6 text-[#d6ad63]">
                {t("启明遁甲创始人｜企业战略决策顾问", "Founder of Qimen Strategy · Business Strategic Advisor")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d6ad63]/15 bg-[#0a0806] px-4 py-12">
        <div className="container mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {credentials.map((item) => (
            <div key={item.value} className="border border-[#d6ad63]/20 bg-white/[0.025] p-6">
              <p className="text-4xl font-semibold text-[#f4dfb0]">{item.value}</p>
              <p className="mt-2 text-sm leading-6 text-white/58">{t(item.zh, item.en)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">
              {t("为什么启明遁甲不同", "Why Qimen Strategy Is Different")}
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
              {t("既看盘，也理解现实中的经营、关系与执行", "Chart Insight Combined With Real Business, Relationship and Execution Context")}
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {strengths.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.titleEn} className="border border-[#d6ad63]/20 bg-white/[0.03] p-7">
                  <Icon className="text-[#d6ad63]" size={24} />
                  <h3 className="mt-5 text-2xl font-semibold text-[#f4dfb0]">{t(item.titleZh, item.titleEn)}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/62">{t(item.bodyZh, item.bodyEn)}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-[#d6ad63]/20 bg-black px-4 py-20 text-center md:py-24">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold text-[#f4dfb0] md:text-5xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
            {t("面对重要选择，先说明你正在经历什么", "Facing an Important Choice? Start by Sharing the Situation")}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/62">
            {t("不确定适合哪一种服务也没关系。通过WhatsApp简要说明情况，顾问会协助匹配。", "You do not need to know which service fits. Briefly share the situation through WhatsApp and the consultant will help match the appropriate pathway.")}
          </p>
          <a
            href={CONSULTATION_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-3 bg-[#d6ad63] px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black hover:bg-[#f4dfb0]"
          >
            <MessageCircle size={18} />
            {t("WhatsApp咨询", "WhatsApp Consultation")}
          </a>
        </div>
      </section>
    </main>
  );
}
