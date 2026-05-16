import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Qimen Strategy Advisory Singapore｜启明遁甲奇门决策顾问",
  description:
    "启明遁甲 Qimen Strategy 奇门决策顾问方案。黄启明大师以 16 年奇门决策实战经验，长期服务企业主与个人关键决策。",
  alternates: {
    canonical: "https://www.qmfeng.com/qimen-strategy-business",
  },
};

const WA_LINK =
  "https://wa.me/6589418791?text=Hello%20Master%20Qiming%2C%20I%20would%20like%20to%20book%20a%20private%20Qimen%20Strategy%20session.";

const programs = [
  {
    no: "01",
    title: "Single Qimen Strategy Session",
    zh: "单项奇门决策咨询",
    price: "S$980",
    unit: "/ session",
    body: "One critical decision. Clear situation. Better next move.",
    bodyZh: "适合一个关键决定前的局势判断。",
    points: ["Private 1-on-1 consultation", "Timing, direction, people and risk review", "Action-oriented recommendation"],
    tag: "For one critical decision",
  },
  {
    no: "02",
    title: "Quarterly Qimen Strategy Advisory",
    zh: "季度奇门决策顾问",
    price: "S$2,800",
    unit: "/ quarter",
    body: "Ongoing Qimen decision support for business owners.",
    bodyZh: "企业主最推荐起步方案。",
    points: ["Quarterly decision review", "Up to 3 advisory cases", "Priority response within 48h"],
    tag: "Most Recommended",
    featured: true,
  },
  {
    no: "03",
    title: "Annual Qimen Strategy Advisory",
    zh: "年度奇门决策顾问",
    price: "S$9,800",
    unit: "/ year",
    body: "Long-term decision support for founders and business owners.",
    bodyZh: "适合长期重大决策与阶段性复盘。",
    points: ["Annual direction review", "Quarterly decision review", "Up to 2 priority sessions / month"],
    tag: "Long-term advisory",
  },
  {
    no: "04",
    title: "Major Project Qimen Strategy Advisory",
    zh: "重大项目奇门决策顾问",
    price: "From S$25,000",
    unit: "/ project",
    body: "For major business projects, transformation and high-value decisions.",
    bodyZh: "适用于重大商业项目与高价值决策。",
    points: ["Project-based Qimen decision advisory", "Expansion and transformation review", "High-value strategic support"],
    tag: "For major projects",
  },
];

const pillars = [
  ["Timing", "时机", "When to move, wait, adjust or redirect."],
  ["Direction", "方向", "Which path is more aligned and less draining."],
  ["People", "人事", "How partnerships, teams and key people affect the outcome."],
  ["Risk", "风险", "Where hidden resistance, blind spots and decision costs may appear."],
];

export default function QimenStrategyBusinessPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden px-4 py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(214,173,99,0.22),transparent_34%)]" />
        <div className="container relative mx-auto max-w-6xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.36em] text-[#d6ad63]">
            Qimen Strategy Singapore · Strategic Wisdom Decision Method
          </p>
          <h1 className="max-w-5xl text-4xl font-semibold uppercase leading-[0.98] tracking-[0.05em] text-[#f4dfb0] md:text-7xl">
            Qimen Strategy Advisory
          </h1>
          <h2 className="mt-5 text-3xl font-semibold tracking-[0.18em] text-[#e2bd6b] md:text-5xl">
            启明遁甲 · 奇门决策顾问方案
          </h2>
          <p className="mt-6 text-lg font-semibold uppercase tracking-[0.20em] text-[#d6ad63] md:text-2xl">
            See Timing · Direction · People · Risk Before You Decide
          </p>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/78 md:text-xl">
            A private Qimen Strategy advisory approach for business owners and individuals facing critical decisions. Rooted in Qi Men Dun Jia, shaped into practical strategic judgment before action.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/70">
            启明遁甲以奇门决策咨询为核心，帮助企业主与个人在合作、投资、转型、任用、签约或人生方向选择前，看清时机、方向、人事关系与风险结构。
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={WA_LINK}
              className="inline-flex items-center justify-center bg-[#d6ad63] px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-[#f4dfb0]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Private Qimen Strategy Session
            </a>
            <Link href="/decision" className="inline-flex items-center justify-center border border-[#d6ad63]/70 px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#f4dfb0] transition hover:bg-[#d6ad63]/10">
              View Single Advisory
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#d6ad63]">Qimen Strategy Advisory Pricing</p>
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
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[#d6ad63]">Four Decision Dimensions</p>
            <h2 className="text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl">
              The advisory work focuses on timing, direction, people and risk.
            </h2>
            <p className="mt-6 text-base leading-8 text-white/72 md:text-lg">
              Many mistakes are not caused by lack of effort. They come from unclear timing, wrong direction, weak people dynamics or hidden risk that has not been recognised early enough.
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

          <div className="mt-12 border border-[#d6ad63]/25 bg-white/[0.035] p-6 text-sm leading-7 text-white/62">
            <p>
              Advisory note: Qimen Strategy provides strategic judgment and decision reference. Final decisions and actions remain the client’s responsibility. No guaranteed business, legal, financial or personal outcome is promised.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
