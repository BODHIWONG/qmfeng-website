import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function InsightsHomeCTA() {
  return (
    <section className="bg-[oklch(0.08_0.02_60)] py-16 md:py-24">
      <div className="container">
        <div className="border border-[oklch(0.28_0.03_70)] bg-[oklch(0.12_0.02_60)] px-6 py-10 text-center md:px-12 md:py-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[oklch(0.72_0.12_70)]">
            Qi Men Dun Jia Insights
          </p>

          <h2 className="mb-5 text-3xl font-bold leading-tight text-white md:text-5xl">
            Before making an important decision, understand the timing first.
          </h2>

          <p className="mx-auto mb-8 max-w-3xl text-sm leading-7 text-[oklch(0.72_0.02_70)] md:text-base">
            Read practical articles from QiMing Feng Shui｜奇明風水 on Qi Men Dun Jia Singapore, Feng Shui Singapore, Bazi, space energy purification, business decisions, wealth direction and relationship clarity.
          </p>

          <Link
            href="/insights"
            className="inline-flex items-center gap-2 bg-[oklch(0.72_0.12_70)] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[oklch(0.08_0.02_60)] transition-all hover:gap-3 hover:opacity-90"
          >
            Explore Articles <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
