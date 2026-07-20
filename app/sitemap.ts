import type { MetadataRoute } from "next";
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
import { qimenStrategyPositioningPosts } from "@/lib/qimen-strategy-positioning-post";
import { qimenStrategyDecisionIntelligencePosts } from "@/lib/qimen-strategy-decision-intelligence-post";
import { qimenStrategyModernDecisionMakingPosts } from "@/lib/qimen-strategy-modern-decision-making-post";
import { qimenWuweiStrategyPosts } from "@/lib/qimen-wuwei-strategy-post";
import { applyInsightPostOverrides } from "@/lib/insights-overrides";

const baseUrl = "https://www.qmfeng.com";

const corePages = [
  "/",
  "/advisory",
  "/founder-business-advisory",
  "/wealth-cycle-investment-decision",
  "/executive-career-transition",
  "/relationship-clarity-reading-singapore",
  "/decision",
  "/courses",
  "/qi-men-dun-jia-course-singapore",
  "/course-registration",
  "/singapore-qi-men-dun-jia-consultant",
  "/founder",
  "/insights",
  "/privacy",
  "/terms",
  "/course-policy",
];

const allPosts = [
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
].map((post) => applyInsightPostOverrides(post));

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pageEntries = corePages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency:
      path === "/" || path === "/qi-men-dun-jia-course-singapore"
        ? "weekly"
        : path === "/privacy" || path === "/terms" || path === "/course-policy"
          ? "yearly"
          : "monthly",
    priority:
      path === "/"
        ? 1
        : ["/advisory", "/founder-business-advisory", "/qi-men-dun-jia-course-singapore"].includes(path)
          ? 0.95
          : path === "/privacy" || path === "/terms" || path === "/course-policy"
            ? 0.3
            : 0.8,
  })) satisfies MetadataRoute.Sitemap;

  const insightEntries = allPosts.map((post) => ({
    url: `${baseUrl}/insights/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : now,
    changeFrequency: "monthly",
    priority: post.category.toLowerCase().includes("business") ? 0.75 : 0.65,
  })) satisfies MetadataRoute.Sitemap;

  return [...pageEntries, ...insightEntries];
}
