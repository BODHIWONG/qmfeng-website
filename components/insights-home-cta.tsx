import Link from "next/link";
import { ArrowRight } from "lucide-react";

const topics = [
  "Business Timing",
  "BTO / Condo Feng Shui",
  "Space Energy Purification",
  "Relationship Clarity",
];

export default function InsightsHomeCTA() {
  return (
    <section className="bg-[oklch(0.08_0.02_60)] py-16 md:py-24">
      <div className="container">
        <div className="relative overflow-hidden border border-[oklch(0.28_0.03_70)] bg-[oklch(0.10_0.02_60)] px-6 py-10 md:px-12 md:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(218,165,70,0.12),transparent_34%),radial-gradient(circle_at_85%_80%,rgba(218,165,70,0.08),transparent_32%)]" />

          <div className="relative grid gap-10 md:grid-cols-[1.35fr_0.65fr] md:items-center">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[oklch(0.72_0.12_70)]">
                Qi Men Dun Jia Singapore · 奇门遁甲新加坡
              </p>

              <h2 className="mb-5 max-w-4xl text-3xl font-bold leading-tight text-white md:text-5xl">
                Learn the timing before making a major life, wealth or business decision.
              </h2>

              <p className="mb-7 max-w-3xl text-sm leading-7 text-[oklch(0.74_0.02_70)] md:text-base">
                Read practical Chinese and English insights from Master Huang Qiming of QiMing Feng Shui｜奇明風水 on Qi Men Dun Jia, Feng Shui Singapore, Bazi, space energy purification, career direction, property selection and relationship clarity.
              </p>

              <div className="mb-8 flex flex-wrap gap-2">
                {topics.map((topic) => (
                  <span
                    key={topic}
                    className="border border-[oklch(0.32_0.03_70)] bg-black/20 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[oklch(0.72_0.12_70)]"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <Link
                href="/insights"
                className="inline-flex items-center gap-2 bg-[oklch(0.72_0.12_70)] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[oklch(0.08_0.02_60)] transition-all hover:gap-3 hover:opacity-90"
              >
                Explore Qi Men Articles <ArrowRight size={14} />
              </Link>
            </div>

            <div className="border border-[oklch(0.28_0.03_70)] bg-black/25 p-6 text-left">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[oklch(0.72_0.12_70)]">
                Why Read Before Consulting?
              </p>

              <p className="text-sm leading-7 text-[oklch(0.76_0.02_70)]">
                These articles help you understand whether your issue is mainly about timing, space, personal pattern, relationship energy or business risk — before booking a deeper consultation with Master Qiming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
