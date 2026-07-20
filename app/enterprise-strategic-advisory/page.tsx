import type { Metadata } from "next";
import Link from "next/link";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";

const WA_LINK =
  "https://wa.me/6589593499?text=Hello%20Qimen%20Strategy%2C%20I%20would%20like%20to%20apply%20for%20Founder%20Business%20Advisory.%20My%20industry%20is%3A%20____.%20My%20team%20size%20is%3A%20____.%20The%20main%20issue%20I%20need%20to%20solve%20is%3A%20____.";

export const metadata: Metadata = {
  title: "Founder Business Advisory Singapore｜创业老板事业陪跑",
  description:
    "Qimen Strategy Singapore provides private founder business advisory for entrepreneurs and business owners facing growth bottlenecks, strategic transition, people issues, partnership decisions and major resource commitments.",
  keywords: [
    "Founder business advisory Singapore",
    "Business owner advisory Singapore",
    "Entrepreneur strategic advisory Singapore",
    "Business coaching Singapore",
    "Founder decision support",
    "创业老板事业陪跑",
    "企业主战略顾问",
    "创业者决策顾问",
    "启明遁甲决策智库",
  ],
  alternates: { canonical: "https://www.qmfeng.com/enterprise-strategic-advisory" },
  openGraph: {
    title: "Founder Business Advisory Singapore｜Qimen Strategy",
    description:
      "Private strategic decision support for founders navigating business bottlenecks, transition, people, partnership and high-stakes decisions.",
    url: "https://www.qmfeng.com/enterprise-strategic-advisory",
    type: "website",
    siteName: "Qimen Strategy Singapore｜启明遁甲决策智库",
    locale: "en_SG",
  },
};

const situations = [
  ["Growth Has Stalled", "增长停滞", "The business remains busy, but revenue, margin or owner capacity is no longer improving."],
  ["Too Many Priorities", "重点失焦", "Several projects, products or channels compete for attention, capital and management energy."],
  ["Owner Dependency", "过度依赖老板", "The company cannot move without the founder personally making every important decision."],
  ["People & Partnership Pressure", "人事与合作压力", "Key staff, partners, suppliers or investors create uncertainty that affects execution."],
  ["Transformation or Expansion", "转型或扩张", "The founder must decide whether to expand, restructure, enter a new market or change direction."],
  ["Decision Fatigue", "决策疲劳", "Continuous pressure makes it difficult to separate facts, emotion, timing and risk."],
];

const scope = [
  {
    no: "01",
    title: "Founder & Business Diagnostic",
    zh: "企业主与经营现状诊断",
    body:
      "Clarify the current business stage, the founder's decision load, operational bottlenecks and the one issue that most needs to be solved first.",
  },
  {
    no: "02",
    title: "Strategic Priority Review",
    zh: "战略重点与资源排序",
    body:
      "Compare growth paths, projects, channels and commitments so limited capital, time and management attention are directed to the highest-priority work.",
  },
  {
    no: "03",
    title: "People & Partnership Assessment",
    zh: "团队、人事与合作判断",
    body:
      "Review key relationships, responsibility boundaries, cooperation structure and hidden friction before deeper commitment or major personnel changes.",
  },
  {
    no: "04",
    title: "Timing & Major Decision Support",
    zh: "时机与重大决策支持",
    body:
      "Assess whether to move, hold, delay, restructure or withdraw before expansion, investment, signing, relocation or business transformation.",
  },
  {
    no: "05",
    title: "Execution Review",
    zh: "执行复盘与阶段调整",
    body:
      "Review what has changed, what remains blocked and which action should be continued, corrected or stopped during the advisory period.",
  },
  {
    no: "06",
    title: "Founder Decision State",
    zh: "企业主决策状态",
    body:
      "Help the founder separate urgency from importance, reduce reactive decision-making and maintain steadier judgment under pressure.",
  },
];

const pathways = [
  {
    label: "START",
    title: "Founder Strategic Diagnostic",
    zh: "企业主战略诊断",
    body: "A focused starting point for one urgent business bottleneck, major decision or strategic direction question.",
    bullets: ["Background and priority review", "One defined strategic issue", "Risk and next-step summary"],
  },
  {
    label: "90 DAYS",
    title: "90-Day Founder Advisory Trial",
    zh: "90天企业主顾问试行计划",
    body: "A structured trial period for founders who need decision support, follow-through and practical review before committing to a longer retainer.",
    bullets: ["Monthly strategic review", "Key decision support by arrangement", "WhatsApp progress follow-up", "End-of-period evaluation"],
    featured: true,
  },
  {
    label: "LONG TERM",
    title: "Annual Founder Advisory Retainer",
    zh: "年度企业主事业陪跑",
    body: "Long-term private advisory for founders facing repeated high-stakes decisions across business direction, people, partnership, timing and environment.",
    bullets: ["Annual direction review", "Scheduled strategic reviews", "Major decision support", "Priority access by scope"],
  },
];

const boundaries = [
  "Qimen Strategy provides decision support and structured strategic reflection; it does not manage the company on the founder's behalf.",
  "No revenue, profit, investment return or business outcome is guaranteed.",
  "Financial, accounting, tax, legal and regulated investment matters should also be reviewed by appropriately qualified professionals.",
  "Final decisions, implementation and commercial responsibility remain with the client.",
  "Confidential business information is handled privately and case sharing requires permission and anonymisation.",
];

export default function EnterpriseStrategicAdvisoryPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main>
          <section className="relative overflow-hidden px-4 pb-20 pt-32 md:pb-28 md:pt-40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(214,173,99,0.24),transparent_35%),linear-gradient(135deg,rgba(244,223,176,0.07),transparent_43%)]" />
            <div className="container relative mx-auto max-w-6xl">
              <p className="text-xs font-bold uppercase tracking-[0.30em] text-[#d6ad63]">
                Qimen Strategy Founder Advisory · Singapore
              </p>
              <h1 className="mt-5 max-w-5xl text-4xl font-semibold uppercase leading-[0.98] tracking-[0.045em] text-[#f4dfb0] md:text-7xl">
                Founder Business Advisory
              </h1>
              <h2 className="mt-5 text-3xl font-semibold tracking-[0.12em] text-[#e2bd6b] md:text-5xl">
                创业老板事业陪跑
              </h2>
              <p className="mt-7 max-w-4xl text-xl font-semibold leading-9 text-[#d6ad63] md:text-3xl">
                The founder does not need more noise. The founder needs clearer priorities before the next move.
              </p>
              <p className="mt-7 max-w-4xl text-base leading-8 text-white/76 md:text-lg">
                Qimen Strategy supports founders and business owners who are facing stalled growth, strategic transition, people pressure, partnership uncertainty or repeated high-stakes decisions. The work combines practical business judgment with Qi Men Dun Jia analysis of timing, people, environment and risk.
              </p>
              <p className="mt-4 max-w-4xl text-base leading-8 text-white/64 md:text-lg">
                启明遁甲决策智库不以一次简单判断为终点，而是帮助创业老板找出当前真正的经营卡点，重新排序战略重点，在投资、合作、团队、扩张与转型等关键节点持续复盘，减少盲目试错。
              </p>
              <div className="mt-9 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {["经营瓶颈诊断", "战略重点排序", "团队合作判断", "重大决策陪跑"].map((item) => (
                  <div key={item} className="border border-[#d6ad63]/25 bg-black/30 p-4 text-sm font-semibold text-[#f4dfb0]">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#d6ad63] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-black hover:bg-[#f4dfb0]">
                  Apply for Founder Advisory
                </a>
                <a href="#pathways" className="inline-flex items-center justify-center border border-[#d6ad63]/70 px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#f4dfb0] hover:bg-[#d6ad63]/10">
                  View Advisory Pathways
                </a>
              </div>
              <p className="mt-4 text-sm text-white/48">Private application · Online or in person at Bedok · Scope confirmed before engagement</p>
            </div>
          </section>

          <section className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-20 md:py-28">
            <div className="container mx-auto max-w-6xl">
              <div className="max-w-4xl">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">When Founders Usually Apply</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl">
                  A business can be active and still be strategically stuck.
                </h2>
                <p className="mt-6 text-base leading-8 text-white/68 md:text-lg">
                  The most expensive problem is often not lack of effort. It is committing more money, time and people before the real bottleneck has been identified.
                </p>
              </div>
              <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {situations.map(([title, zh, body]) => (
                  <article key={title} className="border border-[#d6ad63]/20 bg-black/35 p-6">
                    <h3 className="text-xl font-semibold text-[#f4dfb0]">{title}</h3>
                    <p className="mt-2 font-semibold text-[#d6ad63]">{zh}</p>
                    <p className="mt-4 text-sm leading-7 text-white/62">{body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 py-20 md:py-28">
            <div className="container mx-auto max-w-6xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Advisory Scope</p>
              <h2 className="mt-4 max-w-4xl text-3xl font-semibold text-[#f4dfb0] md:text-5xl">
                Six areas reviewed around the founder and the business.
              </h2>
              <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {scope.map((item) => (
                  <article key={item.no} className="border border-[#d6ad63]/20 bg-white/[0.035] p-7">
                    <p className="text-sm font-bold text-[#d6ad63]">{item.no}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-[#f4dfb0]">{item.title}</h3>
                    <p className="mt-2 text-lg font-semibold text-[#d6ad63]">{item.zh}</p>
                    <p className="mt-5 text-sm leading-7 text-white/66">{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="pathways" className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-20 md:py-28">
            <div className="container mx-auto max-w-6xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Engagement Pathways</p>
              <h2 className="mt-4 max-w-4xl text-3xl font-semibold text-[#f4dfb0] md:text-5xl">
                Start with the level of support the situation actually requires.
              </h2>
              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                {pathways.map((item) => (
                  <article key={item.title} className={`flex h-full flex-col border p-7 ${item.featured ? "border-[#d6ad63] bg-[#d6ad63]/10 shadow-[0_0_48px_rgba(214,173,99,0.13)]" : "border-[#d6ad63]/22 bg-black/35"}`}>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d6ad63]">{item.label}</p>
                    <h3 className="mt-4 text-2xl font-semibold text-[#f4dfb0]">{item.title}</h3>
                    <p className="mt-2 text-lg font-semibold text-[#d6ad63]">{item.zh}</p>
                    <p className="mt-5 text-sm leading-7 text-white/64">{item.body}</p>
                    <div className="mt-6 space-y-3 text-sm text-white/70">
                      {item.bullets.map((bullet) => <p key={bullet}>• {bullet}</p>)}
                    </div>
                    <p className="mt-auto pt-8 text-xs font-bold uppercase tracking-[0.16em] text-[#f4dfb0]">By application · Scope-based proposal</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 py-20 md:py-28">
            <div className="container mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">How to Apply</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl">
                  Begin with the business context, not a vague question.
                </h2>
                <p className="mt-6 text-base leading-8 text-white/68">
                  Please briefly provide your industry, company stage, team size, the most important issue you want to solve and the decision deadline. We will first determine whether a single diagnostic, a 90-day trial or a longer engagement is appropriate.
                </p>
              </div>
              <div className="border border-[#d6ad63]/25 bg-white/[0.035] p-7 md:p-9">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d6ad63]">Professional Boundaries</p>
                <div className="mt-6 space-y-4 text-sm leading-7 text-white/66">
                  {boundaries.map((item) => <p key={item}>• {item}</p>)}
                </div>
              </div>
            </div>
          </section>

          <section className="border-t border-[#d6ad63]/20 bg-[#070707] px-4 py-20">
            <div className="container mx-auto max-w-5xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Private Founder Advisory</p>
              <h2 className="mt-5 text-3xl font-semibold text-[#f4dfb0] md:text-5xl">
                Before adding more resources, identify the decision that matters most.
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/66 md:text-lg">
                Submit your industry, team size and current priority through WhatsApp. Advisory scope and availability will be confirmed after an initial fit review.
              </p>
              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#d6ad63] px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-black hover:bg-[#f4dfb0]">
                  Apply via WhatsApp
                </a>
                <Link href="/insights/business-sales-no-profit-qimen-strategy-singapore" className="inline-flex items-center justify-center border border-[#d6ad63]/70 px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#f4dfb0] hover:bg-[#d6ad63]/10">
                  Read Business Case Study
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </LanguageProvider>
  );
}
