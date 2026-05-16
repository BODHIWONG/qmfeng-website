import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Qimen Strategy Executive Advisory Singapore｜启明遁甲企业战略顾问",
  description:
    "Qimen Strategy Singapore executive decision advisory programs by Master Huang Qiming. Pricing: S$980 single advisory, S$2,800 quarterly retainer, S$9,800 annual advisory, and premium strategic projects from S$25,000.",
  alternates: {
    canonical: "https://www.qmfeng.com/qimen-strategy-business",
  },
};

const WA_LINK =
  "https://wa.me/6589418791?text=Hello%20Master%20Qiming%2C%20I%20would%20like%20to%20book%20a%20private%20Qimen%20Strategy%20briefing.";

const programs = [
  {
    no: "01",
    title: "Single Executive Advisory",
    zh: "单项战略决策咨询",
    price: "S$980",
    unit: "/ session",
    body: "One critical decision. Clear insight. Confident move.",
    bodyZh: "适合单一重大决策判断。",
    points: ["Private 1-on-1 consultation", "Qimen Strategy analysis", "Actionable recommendation"],
    tag: "Best for one critical decision",
  },
  {
    no: "02",
    title: "Quarterly Executive Retainer",
    zh: "季度企业战略顾问",
    price: "S$2,800",
    unit: "/ quarter",
    body: "Ongoing guidance for business owners.",
    bodyZh: "企业主最推荐起步方案。",
    points: ["Quarterly business review", "Up to 3 advisory cases", "Priority response within 48h"],
    tag: "Most Recommended",
    featured: true,
  },
  {
    no: "03",
    title: "Annual Executive Advisory",
    zh: "年度企业战略幕僚",
    price: "S$9,800",
    unit: "/ year",
    body: "Founder-level ongoing advisory support.",
    bodyZh: "创始人级长期顾问支持。",
    points: ["Annual strategy planning", "Quarterly strategic review", "Up to 2 priority sessions / month"],
    tag: "Founder-level advisory",
  },
  {
    no: "04",
    title: "Premium Strategic Execution",
    zh: "顶层战略项目顾问",
    price: "From S$25,000",
    unit: "/ project",
    body: "For major strategic projects and business expansion.",
    bodyZh: "适用于重大商业项目。",
    points: ["End-to-end strategic advisory", "Expansion and transformation", "High-value strategic support"],
    tag: "For major projects",
  },
];

const pillars = [
  ["Timing", "时机", "When to move, wait, adjust or redirect."],
  ["Direction", "方向", "Which path is more aligned and less draining."],
  ["People", "人事", "How partnerships, teams and decision dynamics affect the outcome."],
  ["Environment", "环境", "How space and context support or weaken action."],
];

export default function QimenStrategyBusinessPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden px-4 py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(214,173,99,0.22),transparent_34%)]" />
        <div className="container relative mx-auto max-w-6xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.36em] text-[#d6ad63]">
            Qimen Strategy Singapore · Executive Decision Advisory
          </p>
          <h1 className="max-w-5xl text-4xl font-semibold uppercase leading-[0.98] tracking-[0.05em] text-[#f4dfb0] md:text-7xl">
            Executive Decision Advisory
          </h1>
          <h2 className="mt-5 text-3xl font-semibold tracking-[0.18em] text-[#e2bd6b] md:text-5xl">
            企业主战略决策顾问方案
          </h2>
          <p className="mt-6 text-lg font-semibold uppercase tracking-[0.20em] text-[#d6ad63] md:text-2xl">
            See Timing · Direction · People · Environment Before You Decide
          </p>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/78 md:text-xl">
            A confidential executive advisory system for business owners facing high-stakes decisions. Rooted in Qi Men Dun Jia, translated into modern strategic decision-making.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/70">
            为企业主重大决策而设的私密战略顾问系统。启明遁甲不是娱乐化算命，而是帮助客户在关键时刻看清时机、方向、人事与环境格局。
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={WA_LINK}
              className="inline-flex items-center justify-center bg-[#d6ad63] px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-[#f4dfb0]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Private Strategy Briefing
            </a>
            <Link href="/decision" className="inline-flex items-center justify-center border border-[#d6ad63]/70 px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#f4dfb0] transition hover:bg-[#d6ad63]/10">
              Single Advisory S$980
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#d6ad63]">Official Advisory Pricing</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {programs.map((program) => (
              <article
                key={program.no}
                className={`relative flex flex-col border p-6 ${
                  program.featured
                    ? "border-[#d6ad63] bg-[#d6ad63]/10 shadow-[0_0_45px_rgba(214,173,99,0.16)]"
                    : "border-[#d6ad63]/25 bg-white/[0.035]"
                }`}
              >
                {program.featured && (
                  <div className="mb-4 w-fit bg-[#d6ad63] px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-black">
                    Most Recommended
                  </div>
                )}
                <p className="text-sm font-bold text-[#d6ad63]">{program.no}</p>
                <h3 className="mt-3 text-2xl font-semibold leading-tight text-[#f4dfb0]">{program.title}</h3>
                <p className="mt-2 text-lg font-semibold text-[#d6ad63]">{program.zh}</p>
                <p className="mt-5 text-sm leading-6 text-white/76">{program.body}</p>
                <p className="mt-1 text-sm leading-6 text-white/64">{program.bodyZh}</p>
                <ul className="mt-5 space-y-2 text-sm text-white/72">
                  {program.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <p className="text-4xl font-bold text-[#f4dfb0]">{program.price}</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.14em] text-white/58">{program.unit}</p>
                  <p className="mt-4 border border-[#d6ad63]/35 px-3 py-2 text-center text-xs font-bold uppercase tracking-[0.12em] text-[#d6ad63]">
                    {program.tag}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex flex-col items-center justify-between gap-4 border border-[#d6ad63]/50 bg-black p-5 md:flex-row">
            <div>
              <p className="text-lg font-bold uppercase tracking-[0.14em] text-[#d6ad63]">Priority Upgrade · 加急优先处理</p>
              <p className="mt-1 text-sm text-white/66">For urgent cases requiring priority review and recommended action timing.</p>
            </div>
            <p className="text-4xl font-bold text-[#f4dfb0]">S$1,500 <span className="text-base text-white/60">/ case</span></p>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[#d6ad63]">The Four Decision Dimensions</p>
            <h2 className="text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl">
              The advisory work focuses on timing, direction, people and environment.
            </h2>
            <p className="mt-6 text-base leading-8 text-white/72 md:text-lg">
              Many mistakes are not caused by lack of effort. They come from unclear timing, wrong direction, weak people dynamics or an environment that does not support clarity.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {pillars.map(([title, zh, body]) => (
              <article key={title} className="border border-[#d6ad63]/20 bg-white/[0.035] p-8">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#d6ad63]">
                  {title} · {zh}
                </p>
                <p className="mt-5 text-base leading-8 text-white/72">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
