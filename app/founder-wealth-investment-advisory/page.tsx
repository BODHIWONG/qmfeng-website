import type { Metadata } from "next";
import Link from "next/link";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";

const WA_LINK =
  "https://wa.me/6589593499?text=Hello%20Qimen%20Strategy%2C%20I%20would%20like%20to%20enquire%20about%20Founder%20Wealth%20Cycle%20and%20Investment%20Decision%20Advisory.%20The%20decision%20I%20am%20facing%20is%3A%20____.%20My%20decision%20deadline%20is%3A%20____.";

export const metadata: Metadata = {
  title: "Founder Wealth Cycle & Investment Decision Advisory Singapore",
  description:
    "Private Qimen Strategy advisory for entrepreneurs reviewing business cycles, capital commitment, investment timing, partnership structure, resource allocation and risk before major decisions.",
  keywords: [
    "Investment decision support Singapore",
    "Founder wealth cycle advisory",
    "Business investment timing Singapore",
    "Entrepreneur investment decision",
    "Partnership risk assessment Singapore",
    "创业者财运周期",
    "投资决策辅助",
    "财富周期判断",
    "启明遁甲决策智库",
  ],
  alternates: { canonical: "https://www.qmfeng.com/founder-wealth-investment-advisory" },
};

const decisions = [
  ["Increase Capital", "是否继续追加资金", "Review whether more capital is supported by the current business stage, operating structure and risk capacity."],
  ["Enter a New Project", "是否进入新项目", "Compare the opportunity, timing, resource cost and impact on the founder's existing business."],
  ["Accept a Partnership", "是否接受合作", "Review people dynamics, responsibility boundaries, control, information transparency and exit conditions."],
  ["Expand or Hold", "扩张还是守成", "Assess whether the present cycle supports expansion, consolidation, restructuring or delay."],
  ["Allocate Resources", "如何配置资源", "Clarify which project, channel or business unit should receive priority attention and capital."],
  ["Continue or Stop", "继续还是止损", "Separate emotional attachment and sunk cost from evidence, timing, future capacity and downside risk."],
];

const framework = [
  ["Cycle", "周期", "What stage is the founder, business or project currently in: growth, consolidation, transition or decline?"],
  ["Timing", "时机", "Is the present window more suitable for action, preparation, negotiation, delay or withdrawal?"],
  ["People", "人事", "Who controls information, money, execution and customer relationships, and where may friction arise?"],
  ["Structure", "结构", "How are ownership, responsibility, profit, cost, liability and exit arrangements defined?"],
  ["Risk", "风险", "What is the downside if the assumption is wrong, and what evidence or protection is still missing?"],
  ["Action", "行动", "What should be verified, negotiated, limited, postponed or completed before commitment?"],
];

const boundaries = [
  "This service provides supplementary decision support and does not provide regulated financial advice, securities recommendations or instructions to buy or sell investments.",
  "No investment return, business profit, capital preservation or specific outcome is guaranteed.",
  "Financial statements, contracts, tax implications, legal liability and investment suitability should be reviewed by appropriately qualified professionals.",
  "The client remains responsible for verification, due diligence, final decisions and implementation.",
];

export default function FounderWealthInvestmentAdvisoryPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main>
          <section className="relative overflow-hidden px-4 pb-20 pt-32 md:pb-28 md:pt-40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(214,173,99,0.25),transparent_35%),linear-gradient(135deg,rgba(244,223,176,0.07),transparent_43%)]" />
            <div className="container relative mx-auto max-w-6xl">
              <p className="text-xs font-bold uppercase tracking-[0.30em] text-[#d6ad63]">Founder Decision Advisory · Singapore</p>
              <h1 className="mt-5 max-w-5xl text-4xl font-semibold uppercase leading-[0.98] tracking-[0.04em] text-[#f4dfb0] md:text-7xl">
                Wealth Cycle & Investment Decision Advisory
              </h1>
              <h2 className="mt-5 max-w-5xl text-3xl font-semibold leading-tight tracking-[0.1em] text-[#e2bd6b] md:text-5xl">
                创业者财富周期与投资决策辅助
              </h2>
              <p className="mt-7 max-w-4xl text-xl font-semibold leading-9 text-[#d6ad63] md:text-3xl">
                Before committing capital, examine the cycle, the people, the structure and the downside.
              </p>
              <p className="mt-7 max-w-4xl text-base leading-8 text-white/74 md:text-lg">
                This private advisory is designed for entrepreneurs and business owners facing a major capital, project, partnership or resource-allocation decision. It applies Qi Men Dun Jia together with practical commercial review to identify timing, people dynamics, structural gaps and risk questions that require verification.
              </p>
              <p className="mt-4 max-w-4xl text-base leading-8 text-white/62 md:text-lg">
                重点不是预测“能不能赚”，而是在投入资金、时间与信用之前，帮助你看清当前事业周期、合作结构、资源消耗、关键人员与最坏情况下的承受能力。
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#d6ad63] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-black hover:bg-[#f4dfb0]">
                  Enquire Privately
                </a>
                <a href="#scope" className="inline-flex items-center justify-center border border-[#d6ad63]/70 px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#f4dfb0] hover:bg-[#d6ad63]/10">
                  View Decision Scope
                </a>
              </div>
            </div>
          </section>

          <section id="scope" className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-20 md:py-28">
            <div className="container mx-auto max-w-6xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Common Decisions</p>
              <h2 className="mt-4 max-w-4xl text-3xl font-semibold text-[#f4dfb0] md:text-5xl">
                Suitable for one defined, high-stakes commercial decision.
              </h2>
              <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {decisions.map(([title, zh, body]) => (
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
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Decision Framework</p>
              <h2 className="mt-4 max-w-4xl text-3xl font-semibold text-[#f4dfb0] md:text-5xl">
                Six questions before money and resources are committed.
              </h2>
              <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {framework.map(([title, zh, body], index) => (
                  <article key={title} className="border border-[#d6ad63]/20 bg-white/[0.035] p-7">
                    <p className="text-sm font-bold text-[#d6ad63]">{String(index + 1).padStart(2, "0")}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-[#f4dfb0]">{title} · {zh}</h3>
                    <p className="mt-5 text-sm leading-7 text-white/66">{body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-20 md:py-28">
            <div className="container mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">What to Prepare</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl">
                  Bring the real decision and the available evidence.
                </h2>
                <p className="mt-6 text-base leading-8 text-white/66">
                  Please prepare the decision options, expected capital commitment, decision deadline, key people involved, available contracts or summaries, and the main outcome you are trying to protect. Sensitive documents should only be shared after scope and confidentiality are confirmed.
                </p>
              </div>
              <div className="border border-[#d6ad63]/25 bg-black/35 p-7 md:p-9">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d6ad63]">Professional Boundaries</p>
                <div className="mt-6 space-y-4 text-sm leading-7 text-white/66">
                  {boundaries.map((item) => <p key={item}>• {item}</p>)}
                </div>
              </div>
            </div>
          </section>

          <section className="px-4 py-20">
            <div className="container mx-auto max-w-5xl border border-[#d6ad63]/35 bg-[#d6ad63]/10 p-8 text-center md:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Private Decision Review</p>
              <h2 className="mt-5 text-3xl font-semibold text-[#f4dfb0] md:text-5xl">
                A good opportunity can still be the wrong commitment at the wrong time.
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/68">
                Briefly share the decision, the people involved and your deadline. We will first confirm whether the matter is suitable for a single decision session or a broader founder advisory engagement.
              </p>
              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#d6ad63] px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-black hover:bg-[#f4dfb0]">
                  Send Decision Context
                </a>
                <Link href="/enterprise-strategic-advisory" className="inline-flex items-center justify-center border border-[#d6ad63]/70 px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#f4dfb0] hover:bg-[#d6ad63]/10">
                  Founder Business Advisory
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
