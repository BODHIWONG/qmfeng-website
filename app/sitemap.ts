import type { MetadataRoute } from "next";
import { insightPosts } from "@/lib/insights-data";
import { qimenDiagnosticPosts } from "@/lib/qimen-diagnostic-posts";
import { qimenCaseLibraryPosts } from "@/lib/qimen-case-library-posts";
import { qimenSingaporeBilingualPosts } from "@/lib/qimen-singapore-bilingual-posts";
import { qimenDunJiaFoundationPosts } from "@/lib/qimen-dun-jia-foundation-post";
import { qimenSingaporeSeoPosts } from "@/lib/qimen-singapore-seo-posts";
import { qimenRelationshipSeoPosts } from "@/lib/qimen-relationship-seo-posts";
import { qimenStrategyPositioningPosts } from "@/lib/qimen-strategy-positioning-post";
import { qimenStrategyDecisionIntelligencePosts } from "@/lib/qimen-strategy-decision-intelligence-post";
import { qimenStrategyModernDecisionMakingPosts } from "@/lib/qimen-strategy-modern-decision-making-post";
import { qimenWuweiStrategyPosts } from "@/lib/qimen-wuwei-strategy-post";
import { applyInsightPostOverrides } from "@/lib/insights-overrides";

const baseUrl = "https://www.qmfeng.com";

const corePages = [
  "/",
  "/courses",
  "/singapore-qi-men-dun-jia-consultant",
  "/qi-men-dun-jia-course-singapore",
  "/enterprise-strategic-advisory",
  "/enterprise-strategic-health-diagnostic",
  "/qimen-strategy-business",
  "/personal-life-state-diagnostic",
  "/relationship-clarity-reading-singapore",
  "/decision",
  "/founder",
  "/insights",
];

const allPosts = [
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
].map((post) => applyInsightPostOverrides(post));

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pageEntries = corePages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/courses" || path.includes("enterprise") || path.includes("course") ? 0.9 : 0.8,
  })) satisfies MetadataRoute.Sitemap;

  const insightEntries = allPosts.map((post) => ({
    url: `${baseUrl}/insights/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : now,
    changeFrequency: "monthly",
    priority: 0.65,
  })) satisfies MetadataRoute.Sitemap;

  return [...pageEntries, ...insightEntries];
}
