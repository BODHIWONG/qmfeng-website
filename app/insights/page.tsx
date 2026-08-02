"use client";

import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { insightPosts } from "@/lib/insights-data";
import { qimenDiagnosticPosts } from "@/lib/qimen-diagnostic-posts";
import { qimenCaseLibraryPosts } from "@/lib/qimen-case-library-posts";
import { qimenSingaporeBilingualPosts } from "@/lib/qimen-singapore-bilingual-posts";
import { qimenDunJiaFoundationPosts } from "@/lib/qimen-dun-jia-foundation-post";
import { qimenSingaporeSeoPosts } from "@/lib/qimen-singapore-seo-posts";
import { qimenRelationshipSeoPosts } from "@/lib/qimen-relationship-seo-posts";
import { qimenRelationshipCaseReflectionPosts } from "@/lib/qimen-relationship-case-reflections";
import { qimenEmotionalClarityPosts } from "@/lib/qimen-emotional-clarity-posts";
import { qimenBusinessCaseStudyPosts } from "@/lib/qimen-business-case-study-posts";
import { zouShimingBusinessDecisionPosts } from "@/lib/zou-shiming-business-decision-post";
import { qimenStrategyPositioningPosts } from "@/lib/qimen-strategy-positioning-post";
import { qimenStrategyDecisionIntelligencePosts } from "@/lib/qimen-strategy-decision-intelligence-post";
import { qimenStrategyModernDecisionMakingPosts } from "@/lib/qimen-strategy-modern-decision-making-post";
import { qimenWuweiStrategyPosts } from "@/lib/qimen-wuwei-strategy-post";
import { qimenLifeCrossroadsDecisionAdvisoryPosts } from "@/lib/qimen-life-crossroads-decision-advisory-post";
import { applyInsightPostOverrides } from "@/lib/insights-overrides";
import { isRedirectedInsightSlug } from "@/lib/redirected-insight-slugs";

const contentHubs = [
  {
    title: "Qi Men Dun Jia Consultation Singapore",
    description: "Consultation pathway, suitability and what to do before booking.",
    href: "/decision",
  },
  {
    title: "Relationship Decision & Emotional Clarity",
    description: "Private advisory for relationship, marriage and next-step decisions.",
    href: "/relationship-clarity-reading-singapore",
  },
  {
    title: "Career & Personal Decision Advisory",
    description: "Bazi, Qi Men and major decision support for personal direction.",
    href: "/personal-advisory",
  },
  {
    title: "Business Decision Advisory for Founders",
    description: "Strategic decision support for business owners and executives.",
    href: "/enterprise-strategic-advisory",
  },
  {
    title: "Qi Men Dun Jia Courses Singapore",
    description: "Practical learning pathways from foundation to advanced study.",
    href: "/courses",
  },
];

const allPosts = [
  ...qimenLifeCrossroadsDecisionAdvisoryPosts,
  ...zouShimingBusinessDecisionPosts,
  ...qimenBusinessCaseStudyPosts,
  ...qimenEmotionalClarityPosts,
  ...qimenRelationshipCaseReflectionPosts,
  ...qimenWuweiStrategyPosts,
  ...qimenDiagnosticPosts,
  ...qimenRelationshipSeoPosts,
  ...qimenSingaporeSeoPosts,
  ...qimenStrategyModernDecisionMakingPosts,
  ...qimenStrategyDecisionIntelligencePosts,
  ...qimenCaseLibraryPosts,
  ...qimenStrategyPositioningPosts,
  ...qimenDunJiaFoundationPosts,
  ...qimenSingaporeBilingualPosts,
  ...insightPosts,
]
  .map((post) => applyInsightPostOverrides(post))
  .filter((post) => !isRedirectedInsightSlug(post.slug))
  .filter((post) => {
    const isRelationshipClarity =
      post.category.toLowerCase().includes("relationship") ||
      post.keywords.some((keyword) => keyword.toLowerCase().includes("relationship clarity"));

    const isEmotionalClarity =
      post.category.toLowerCase().includes("emotional clarity") ||
      post.keywords.some((keyword) => keyword.toLowerCase().includes("emotional clarity"));

    if (isRelationshipClarity || isEmotionalClarity) return true;

    const text = `${post.title} ${post.excerpt} ${post.category} ${post.keywords.join(" ")}`.toLowerCase();
    const excluded = ["space clearing", "space energy", "sleep", "relationship", "emotional", "feng shui wealth"];
    return !excluded.some((term) => text.includes(term));
  })
  .filter((post, index, posts) => posts.findIndex((item) => item.slug === post.slug) === index);

function InsightsContent() {
  return (
    <div className="min-h-screen bg-[oklch(0.08_0.02_60)] text-white">
      <Navbar />

      <main className="container pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="mb-12 max-w-4xl">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-8 bg-[oklch(0.60_0.08_65)]" />
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[oklch(0.60_0.08_65)]">
              Qimen Strategy Insights
            </span>
          </div>

          <h1 className="mb-5 text-4xl font-bold leading-tight md:text-6xl">
            Cases, Decision Insights and Practical Qi Men Perspectives
          </h1>

          <p className="text-base leading-relaxed text-[oklch(0.72_0.02_70)] md:text-lg">
            Start with one of the five core topics below, then explore selected articles and case reflections based on practical client and business situations.
          </p>
        </div>

        <section aria-labelledby="content-hubs" className="mb-16">
          <h2 id="content-hubs" className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-[oklch(0.72_0.12_70)]">
            Core Topics
          </h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {contentHubs.map((hub) => (
              <Link
                key={hub.href}
                href={hub.href}
                className="group flex min-h-48 flex-col border border-[oklch(0.25_0.02_60)] bg-[oklch(0.11_0.02_60)] p-5 transition hover:border-[oklch(0.60_0.08_65)]"
              >
                <h3 className="text-lg font-bold leading-snug text-[oklch(0.96_0.01_75)]">{hub.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-6 text-[oklch(0.66_0.02_70)]">{hub.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[oklch(0.60_0.08_65)] group-hover:gap-3">
                  Explore <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section aria-labelledby="latest-insights">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[oklch(0.60_0.08_65)]">Selected Library</p>
              <h2 id="latest-insights" className="mt-3 text-3xl font-bold text-[oklch(0.96_0.01_75)] md:text-4xl">
                Latest Insights
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allPosts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col border border-[oklch(0.20_0.02_60)] bg-[oklch(0.12_0.02_60)] p-6 transition-colors hover:border-[oklch(0.60_0.08_65)]"
              >
                <div className="mb-4">
                  <span className="bg-[oklch(0.60_0.08_65)] px-2 py-1 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-[oklch(0.08_0.02_60)]">
                    {post.category}
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-bold leading-snug text-[oklch(0.96_0.01_75)]">
                  {post.title}
                </h3>

                <div className="mb-4 flex items-center gap-4 text-xs text-[oklch(0.55_0.02_70)]">
                  <span className="flex items-center gap-1.5"><Calendar size={12} />{post.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={12} />{post.readTime}</span>
                </div>

                <p className="mb-6 flex-1 text-sm leading-relaxed text-[oklch(0.68_0.02_70)]">
                  {post.excerpt}
                </p>

                <Link
                  href={`/insights/${post.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[oklch(0.60_0.08_65)] transition-all hover:gap-3"
                >
                  Read Insight <ArrowRight size={12} />
                </Link>
              </article>
            ))}
          </div>
        </section>
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
