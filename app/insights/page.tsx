"use client";

import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { insightPosts } from "@/lib/insights-data";
import { qimenCaseLibraryPosts } from "@/lib/qimen-case-library-posts";
import { qimenSingaporeBilingualPosts } from "@/lib/qimen-singapore-bilingual-posts";
import { qimenDunJiaFoundationPosts } from "@/lib/qimen-dun-jia-foundation-post";
import { qimenStrategyPositioningPosts } from "@/lib/qimen-strategy-positioning-post";
import { qimenStrategyDecisionIntelligencePosts } from "@/lib/qimen-strategy-decision-intelligence-post";
import { applyInsightPostOverrides } from "@/lib/insights-overrides";

const allPosts = [
  ...qimenStrategyDecisionIntelligencePosts,
  ...qimenCaseLibraryPosts,
  ...qimenStrategyPositioningPosts,
  ...qimenDunJiaFoundationPosts,
  ...qimenSingaporeBilingualPosts,
  ...insightPosts,
]
  .map((post) => applyInsightPostOverrides(post))
  .filter((post) => {
    const text = `${post.title} ${post.excerpt} ${post.category} ${post.keywords.join(" ")}`.toLowerCase();
    const excluded = ["space clearing", "space energy", "sleep", "relationship", "emotional", "feng shui wealth"];
    return !excluded.some((term) => text.includes(term));
  });

function InsightsContent() {
  return (
    <div className="min-h-screen bg-[oklch(0.08_0.02_60)] text-white">
      <Navbar />

      <main className="container pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="mb-12 max-w-4xl">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-8 bg-[oklch(0.60_0.08_65)]" />
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[oklch(0.60_0.08_65)]">
              启明智库
            </span>
          </div>

          <h1 className="mb-5 text-4xl font-bold leading-tight md:text-6xl">
            Qimen Strategy Insights
          </h1>

          <p className="text-base leading-relaxed text-[oklch(0.72_0.02_70)] md:text-lg">
            Modern Eastern strategic insights on timing, direction, human decisions, business clarity, environment and Qimen Strategy perspectives by Master Huang Qiming.
          </p>

          <div className="mt-8 grid gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[oklch(0.72_0.12_70)] sm:grid-cols-4">
            <div className="border border-[oklch(0.60_0.08_65/0.35)] px-4 py-3">Decision Intelligence</div>
            <div className="border border-[oklch(0.60_0.08_65/0.35)] px-4 py-3">Strategic Timing</div>
            <div className="border border-[oklch(0.60_0.08_65/0.35)] px-4 py-3">Human Dynamics</div>
            <div className="border border-[oklch(0.60_0.08_65/0.35)] px-4 py-3">Environmental Alignment</div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allPosts.map((post) => (
            <article
              key={post.slug}
              className="border border-[oklch(0.20_0.02_60)] bg-[oklch(0.12_0.02_60)] p-6 transition-colors hover:border-[oklch(0.60_0.08_65)]"
            >
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="bg-[oklch(0.60_0.08_65)] px-2 py-1 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-[oklch(0.08_0.02_60)]">
                  {post.category}
                </span>
              </div>

              <h2 className="mb-3 text-xl font-bold leading-snug text-[oklch(0.96_0.01_75)]">
                {post.title}
              </h2>

              <div className="mb-4 flex items-center gap-4 text-xs text-[oklch(0.55_0.02_70)]">
                <span className="flex items-center gap-1.5"><Calendar size={12} />{post.date}</span>
                <span className="flex items-center gap-1.5"><Clock size={12} />{post.readTime}</span>
              </div>

              <p className="mb-5 text-sm leading-relaxed text-[oklch(0.68_0.02_70)]">
                {post.excerpt}
              </p>

              <div className="mb-5 flex flex-wrap gap-2">
                {post.keywords.slice(0, 3).map((keyword) => (
                  <span key={keyword} className="border border-[oklch(0.25_0.02_60)] px-2 py-1 text-[0.58rem] uppercase tracking-[0.08em] text-[oklch(0.55_0.02_70)]">
                    {keyword}
                  </span>
                ))}
              </div>

              <Link
                href={`/insights/${post.slug}`}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[oklch(0.60_0.08_65)] transition-all hover:gap-3"
              >
                Read Insight <ArrowRight size={12} />
              </Link>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function InsightsPage() {
  return (
    <LanguageProvider>
      <InsightsContent />
    </LanguageProvider>
  );
}
