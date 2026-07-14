import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { insightPosts, getInsightPost } from "@/lib/insights-data";
import { qimenDiagnosticPosts, getQimenDiagnosticPost } from "@/lib/qimen-diagnostic-posts";
import { qimenCaseLibraryPosts, getQimenCaseLibraryPost } from "@/lib/qimen-case-library-posts";
import { qimenSingaporeBilingualPosts, getQimenSingaporeBilingualPost } from "@/lib/qimen-singapore-bilingual-posts";
import { qimenDunJiaFoundationPosts, getQimenDunJiaFoundationPost } from "@/lib/qimen-dun-jia-foundation-post";
import { qimenSingaporeSeoPosts, getQimenSingaporeSeoPost } from "@/lib/qimen-singapore-seo-posts";
import { qimenRelationshipSeoPosts, getQimenRelationshipSeoPost } from "@/lib/qimen-relationship-seo-posts";
import { qimenRelationshipCaseReflectionPosts, getQimenRelationshipCaseReflectionPost } from "@/lib/qimen-relationship-case-reflections";
import { qimenEmotionalClarityPosts, getQimenEmotionalClarityPost } from "@/lib/qimen-emotional-clarity-posts";
import { qimenStrategyDecisionIntelligencePosts, getQimenStrategyDecisionIntelligencePost } from "@/lib/qimen-strategy-decision-intelligence-post";
import { qimenStrategyModernDecisionMakingPosts, getQimenStrategyModernDecisionMakingPost } from "@/lib/qimen-strategy-modern-decision-making-post";
import { spaceEnergyBlogPosts, getSpaceEnergyBlogPost } from "@/lib/space-energy-blog-posts";
import { executiveWellnessPosts, getExecutiveWellnessPost } from "@/lib/executive-wellness-posts";
import { qimenStrategyPositioningPosts, getQimenStrategyPositioningPost } from "@/lib/qimen-strategy-positioning-post";
import { qimenWuweiStrategyPosts, getQimenWuweiStrategyPost } from "@/lib/qimen-wuwei-strategy-post";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

type InsightDetailProps = {
  params: Promise<{ slug: string }>;
};

const allDynamicPosts = [
  ...qimenEmotionalClarityPosts,
  ...qimenRelationshipCaseReflectionPosts,
  ...qimenWuweiStrategyPosts,
  ...qimenDiagnosticPosts,
  ...qimenRelationshipSeoPosts,
  ...qimenSingaporeSeoPosts,
  ...qimenStrategyModernDecisionMakingPosts,
  ...qimenCaseLibraryPosts,
  ...qimenStrategyDecisionIntelligencePosts,
  ...qimenStrategyPositioningPosts,
  ...executiveWellnessPosts,
  ...qimenDunJiaFoundationPosts,
  ...spaceEnergyBlogPosts,
  ...qimenSingaporeBilingualPosts,
  ...insightPosts,
];

function findPost(slug: string) {
  return (
    getQimenEmotionalClarityPost(slug) ??
    getQimenRelationshipCaseReflectionPost(slug) ??
    getQimenWuweiStrategyPost(slug) ??
    getQimenDiagnosticPost(slug) ??
    getQimenRelationshipSeoPost(slug) ??
    getQimenSingaporeSeoPost(slug) ??
    getQimenStrategyModernDecisionMakingPost(slug) ??
    getQimenCaseLibraryPost(slug) ??
    getQimenStrategyDecisionIntelligencePost(slug) ??
    getQimenStrategyPositioningPost(slug) ??
    getExecutiveWellnessPost(slug) ??
    getQimenDunJiaFoundationPost(slug) ??
    getSpaceEnergyBlogPost(slug) ??
    getQimenSingaporeBilingualPost(slug) ??
    getInsightPost(slug)
  );
}

export function generateStaticParams() {
  return allDynamicPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: InsightDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const post = findPost(slug);

  if (!post) {
    return { title: "Article Not Found | Qimen Strategy Singapore" };
  }

  const url = `https://www.qmfeng.com/insights/${post.slug}`;

  return {
    title: `${post.title} | Qimen Strategy Singapore`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      siteName: "Qimen Strategy Singapore",
      locale: "en_SG",
      publishedTime: post.date,
      tags: post.keywords,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

function renderParagraph(content: string, index: number, category: string) {
  if (content.startsWith("## ")) {
    return (
      <h2
        key={index}
        className="pt-7 text-2xl font-bold leading-tight text-[oklch(0.96_0.01_75)] md:text-3xl"
      >
        {content.slice(3)}
      </h2>
    );
  }

  if (content.startsWith("- ")) {
    return (
      <div key={index} className="flex items-start gap-3 pl-1">
        <span className="mt-1 font-bold text-[oklch(0.60_0.08_65)]">•</span>
        <p>{content.slice(2)}</p>
      </div>
    );
  }

  if (content.startsWith("📩 ")) {
    const isRelationshipPost = category.toLowerCase().includes("relationship");
    const whatsappText = isRelationshipPost
      ? "Hello Qimen Strategy, I would like to book a private relationship consultation."
      : "Hello Qimen Strategy, I would like to book a confidential Qi Men Dun Jia Strategic Decision Advisory consultation.";

    return (
      <a
        key={index}
        href={`https://wa.me/6589593499?text=${encodeURIComponent(whatsappText)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center justify-center border border-[oklch(0.60_0.08_65)] bg-[oklch(0.60_0.08_65)] px-6 py-3 text-sm font-bold uppercase tracking-[0.1em] text-[oklch(0.08_0.02_60)] transition-colors hover:bg-transparent hover:text-[oklch(0.72_0.12_70)]"
      >
        {content}
      </a>
    );
  }

  return <p key={index}>{content}</p>;
}

export default async function InsightDetail({ params }: InsightDetailProps) {
  const { slug } = await params;
  const post = findPost(slug);

  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-[oklch(0.08_0.02_60)] text-white">
      <Navbar />
      <div className="mx-auto max-w-3xl px-6 pb-20 pt-32">
        <div className="mb-4 inline-block bg-[oklch(0.60_0.08_65)] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[oklch(0.08_0.02_60)]">
          {post.category}
        </div>
        <h1 className="mb-4 text-3xl font-bold leading-tight md:text-4xl">{post.title}</h1>
        <div className="mb-8 text-sm text-gray-400">{post.date} · {post.readTime}</div>
        <div className="mb-10 flex flex-wrap gap-2">
          {post.keywords.map((keyword) => (
            <span key={keyword} className="border border-[oklch(0.25_0.02_60)] px-2 py-1 text-[0.58rem] uppercase tracking-[0.08em] text-[oklch(0.55_0.02_70)]">
              {keyword}
            </span>
          ))}
        </div>
        <div className="space-y-5 text-[15px] leading-relaxed text-gray-300 md:text-base">
          {post.paragraphs.map((paragraph, index) => renderParagraph(paragraph, index, post.category))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
