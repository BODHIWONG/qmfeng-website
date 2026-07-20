import type { Metadata } from "next";
import Link from "next/link";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";

const WA_LINK =
  "https://wa.me/6589593499?text=Hello%20Qimen%20Strategy%2C%20I%20would%20like%20to%20enquire%20about%20Executive%20Career%20Transition%20Advisory.%20My%20current%20role%20is%3A%20____.%20The%20decision%20I%20am%20facing%20is%3A%20____.%20My%20deadline%20is%3A%20____.";

export const metadata: Metadata = {
  title: "Executive Career Transition Advisory Singapore｜高管事业转型",
  description:
    "Private Qimen Strategy advisory for executives and senior professionals considering promotion, job change, entrepreneurship, partnership, leadership transition or a major career redirection.",
  keywords: [
    "Executive career transition Singapore",
    "Senior executive career advisory Singapore",
    "Career change decision Singapore",
    "Executive entrepreneurship decision",
    "Career strategy consultant Singapore",
    "高管事业转型",
    "高管跳槽决策",
    "贵人运规划",
    "关键关系规划",
    "启明遁甲决策智库",
  ],
  alternates: { canonical: "https://www.qmfeng.com/executive-career-transition-advisory" },
};

const scenarios = [
  ["Stay or Leave", "留任还是离开", "Whether the current organisation still supports your growth, authority, health and long-term direction."],
  ["Accept a New Role", "是否接受新职位", "Compare title, reporting line, culture, decision power, hidden expectations and transition timing."],
  ["Move into Entrepreneurship", "是否转向创业", "Review readiness, financial runway, partner structure, market timing and personal capacity."],
  ["Choose Between Platforms", "如何选择平台", "Assess which organisation, industry or market gives stronger alignment and sustainable development."],
  ["Promotion & Leadership", "升迁与领导角色", "Review timing, stakeholder dynamics, internal support and the responsibilities behind the opportunity."],
  ["Strategic Network", "关键关系与贵人助力", "Identify mentors, sponsors, decision-makers and relationships that require clearer positioning or boundaries."],
];

const reviewAreas = [
  ["Direction", "方向", "What career path best fits the next stage: deepen, shift, lead, partner or build independently?"],
  ["Timing", "时机", "When should preparation, negotiation, resignation, onboarding or launch take place?"],
  ["Platform", "平台", "Does the organisation, industry, role and operating environment support your strengths and long-term value?"],
  ["People", "人事", "Which stakeholders, mentors, sponsors, partners or reporting relationships will influence the transition?"],
  ["Risk", "风险", "What are the financial, reputational, political, contractual and personal downside risks?"],
  ["Action Plan", "行动计划", "What must be clarified, negotiated, prepared or protected before the transition?"],
];

const boundaries = [
  "This is a strategic decision-support service, not recruitment, job placement, legal representation or psychological treatment.",
  "No promotion, job offer, salary outcome, business success or specific relationship outcome is guaranteed.",
  "Employment contracts, non-compete clauses, immigration, tax and legal matters should be reviewed by appropriately qualified professionals.",
  "The client remains responsible for factual verification, negotiation, final decisions and implementation.",
];

export default function ExecutiveCareerTransitionAdvisoryPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main>
          <section className="relative overflow-hidden px-4 pb-20 pt-32 md:pb-28 md:pt-40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(214,173,99,0.24),transparent_35%),linear-gradient(135deg,rgba(244,223,176,0.07),transparent_43%)]" />
            <div className="container relative mx-auto max-w-6xl">
              <p className="text-xs font-bold uppercase tracking-[0.30em] text-[#d6ad63]">Executive Advisory · Singapore</p>
              <h1 className="mt-5 max-w-5xl text-4xl font-semibold uppercase leading-[0.98] tracking-[0.04em] text-[#f4dfb0] md:text-7xl">
                Executive Career Transition Advisory
              </h1>
              <h2 className="mt-5 max-w-5xl text-3xl font-semibold leading-tight tracking-[0.1em] text-[#e2bd6b] md:text-5xl">
                职场高管事业转型与关键关系规划
              </h2>
              <p className="mt-7 max-w-4xl text-xl font-semibold leading-9 text-[#d6ad63] md:text-3xl">
                A senior career move should be judged by more than title and salary.
              </p>
              <p className="mt-7 max-w-4xl text-base leading-8 text-white/74 md:text-lg">
                Qimen Strategy supports executives, senior professionals and business leaders before major career transitions. The review considers direction, timing, platform fit, stakeholder dynamics, financial risk and the relationships that may support or constrain the next stage.
              </p>
              <p className="mt-4 max-w-4xl text-base leading-8 text-white/62 md:text-lg">
                高管转型往往同时涉及职位、收入、家庭、声誉、组织政治与未来发展。咨询重点不是告诉你“跳还是不跳”，而是帮助你看清不同选择背后的真实代价、关键人物、时间窗口与准备条件。
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#d6ad63] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-black hover:bg-[#f4dfb0]">
                  Enquire Privately
                </a>
                <a href="#scope" className="inline-flex items-center justify-center border border-[#d6ad63]/70 px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#f4dfb0] hover:bg-[#d6ad63]/10">
                  View Transition Scope
                </a>
              </div>
            </div>
          </section>

          <section id="scope" className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-20 md:py-28">
            <div className="container mx-auto max-w-6xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Common Transition Decisions</p>
              <h2 className="mt-4 max-w-4xl text-3xl font-semibold text-[#f4dfb0] md:text-5xl">
                Designed for a defined career decision with real consequences.
              </h2>
              <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {scenarios.map(([title, zh, body]) => (
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
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Transition Framework</p>
              <h2 className="mt-4 max-w-4xl text-3xl font-semibold text-[#f4dfb0] md:text-5xl">
                Six dimensions before changing role, platform or identity.
              </h2>
              <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {reviewAreas.map(([title, zh, body], index) => (
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
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Mentors, Sponsors & Strategic Networks</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl">
                  “贵人运” should become a practical relationship strategy.
                </h2>
                <p className="mt-6 text-base leading-8 text-white/66">
                  In professional settings, support often comes through mentors, sponsors, decision-makers, trusted peers and strategic partners. The advisory helps clarify which relationships require visibility, reciprocity, boundaries, evidence of value or a different communication approach. It does not promise that any specific person will provide an opportunity.
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
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Private Executive Advisory</p>
              <h2 className="mt-5 text-3xl font-semibold text-[#f4dfb0] md:text-5xl">
                Do not leave a stable platform before understanding what the next one requires.
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/68">
                Briefly share your current role, the options you are considering, the decision deadline and the main risk you want to avoid. We will first confirm whether the matter is suitable for a focused session.
              </p>
              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#d6ad63] px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-black hover:bg-[#f4dfb0]">
                  Send Career Context
                </a>
                <Link href="/decision" className="inline-flex items-center justify-center border border-[#d6ad63]/70 px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#f4dfb0] hover:bg-[#d6ad63]/10">
                  Major Decision Consultation
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
