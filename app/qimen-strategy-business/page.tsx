import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Qimen Strategy for Business Singapore",
  description:
    "Qimen Strategy for business and life decisions in Singapore. Learn how timing, direction, people dynamics and environment shape clearer decisions.",
  alternates: {
    canonical: "https://www.qmfeng.com/qimen-strategy-business",
  },
};

const pillars = [
  {
    title: "Timing",
    zh: "时机",
    body: "Important decisions are affected by timing. Qimen Strategy helps clients pause, observe and decide when to move, wait or adjust direction.",
  },
  {
    title: "Direction",
    zh: "方向",
    body: "A clear direction reduces waste. The work is to read the current situation before choosing the next move.",
  },
  {
    title: "People",
    zh: "人事",
    body: "Partnerships, teams and negotiations all carry visible and hidden dynamics. Better decisions require better reading of people.",
  },
  {
    title: "Environment",
    zh: "环境",
    body: "Homes, offices and shops influence focus, confidence and momentum. Space alignment supports better action.",
  },
];

export default function QimenStrategyBusinessPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden px-4 py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(214,173,99,0.22),transparent_34%)]" />
        <div className="container relative mx-auto max-w-6xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.36em] text-[#d6ad63]">
            Singapore · Strategic Insight for Business
          </p>
          <h1 className="max-w-5xl text-5xl font-semibold uppercase leading-[0.95] tracking-[0.06em] text-[#f4dfb0] md:text-7xl lg:text-8xl">
            Qimen Strategy
          </h1>
          <h2 className="mt-5 text-3xl font-semibold tracking-[0.28em] text-[#e2bd6b] md:text-5xl">
            启明遁甲
          </h2>
          <p className="mt-6 text-2xl font-semibold uppercase tracking-[0.24em] text-[#d6ad63] md:text-4xl">
            See the Whole Game
          </p>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/78 md:text-xl">
            Qimen Strategy is a modern decision approach rooted in Qi Men Dun Jia. It helps business owners and individuals read timing, direction, people and environment before important decisions.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/70">
            启明遁甲以奇门决策为核心，结合战略咨询、风水布局与能量调和，帮助客户在事业、合作、转型与人生关键节点前看清全局。
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/6589418791?text=Hello%20Master%20Qiming%2C%20I%20would%20like%20to%20book%20a%20Qimen%20Strategy%20consultation."
              className="inline-flex items-center justify-center bg-[#d6ad63] px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-[#f4dfb0]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Strategy Session
            </a>
            <Link href="/" className="inline-flex items-center justify-center border border-[#d6ad63]/70 px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#f4dfb0] transition hover:bg-[#d6ad63]/10">
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#d6ad63]">Core Services</p>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {["奇门决策", "战略咨询", "风水布局", "能量疗愈"].map((service) => (
              <div key={service} className="border border-[#d6ad63]/30 bg-white/[0.03] p-6 text-center">
                <p className="text-2xl font-semibold tracking-[0.18em] text-[#f4dfb0]">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[#d6ad63]">What is Qimen Strategy?</p>
            <h2 className="text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl">
              A strategic decision system for business, life direction and space alignment.
            </h2>
            <p className="mt-6 text-base leading-8 text-white/72 md:text-lg">
              Many mistakes are not caused by lack of effort. They come from unclear timing, wrong direction, weak people dynamics or an environment that does not support clarity.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="border border-[#d6ad63]/20 bg-white/[0.035] p-8">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#d6ad63]">
                  {pillar.title} · {pillar.zh}
                </p>
                <p className="mt-5 text-base leading-8 text-white/72">{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
