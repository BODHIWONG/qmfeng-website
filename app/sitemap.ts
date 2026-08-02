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
import { zouShimingBusinessDecisionPosts } from "@/lib/zou-shiming-business-decision-post";
import { qimenStrategyPositioningPosts } from "@/lib/qimen-strategy-positioning-post";
import { qimenStrategyDecisionIntelligencePosts } from "@/lib/qimen-strategy-decision-intelligence-post";
import { qimenStrategyModernDecisionMakingPosts } from "@/lib/qimen-strategy-modern-decision-making-post";
import { qimenWuweiStrategyPosts } from "@/lib/qimen-wuwei-strategy-post";
import { qimenLifeCrossroadsDecisionAdvisoryPosts } from "@/lib/qimen-life-crossroads-decision-advisory-post";
import { applyInsightPostOverrides } from "@/lib/insights-overrides";
import { isRedirectedInsightSlug } from "@/lib/redirected-insight-slugs";

const baseUrl = "https://www.qmfeng.com";

const localizedRoutes = [
  "",
  "/personal-advisory",
  "/decision",
  "/relationship-clarity-reading-singapore",
  "/enterprise-strategic-advisory",
  "/courses",
  "/insights",
  "/founder",
];

const localizedPages = ["en", "zh"].flatMap((locale) =>
  localizedRoutes.map((path) => `/${locale}${path}`)
);

const legacyAndSupportingPages = [
  "/",
  "/enterprise-strategic-advisory",
  "/founder-wealth-investment-advisory",
  "/executive-career-transition-advisory",
  "/personal-advisory",
  "/decision",
  "/relationship-clarity-reading-singapore",
  "/courses",
  "/qi-men-dun-jia-course-singapore",
  "/singapore-qi-men-dun-jia-consultant",
  "/founder",
  "/insights",
  "/privacy",
  "/terms",
  "/course-policy",
];

const corePages = [...localizedPages, ...legacyAndSupportingPages];

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
  .filter((post, index, posts) => posts.findIndex((item) => item.slug === post.slug) === index);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pageEntries = corePages.map((path) => {
    const isLocalized = path.startsWith("/en") || path.startsWith("/zh");
    const isHomepage = path === "/en" || path === "/zh";
    const isCoreAdvisory = [
      "/enterprise-strategic-advisory",
      "/personal-advisory",
      "/decision",
      "/relationship-clarity-reading-singapore",
    ].some((route) => path.endsWith(route));
    const isCourse = path.includes("course") || path.endsWith("/courses");
    const isPolicy = ["/privacy", "/terms", "/course-policy"].includes(path);
    const isFrequentlyUpdated = isHomepage || path.endsWith("/courses") || path.endsWith("/insights");

    const entry: MetadataRoute.Sitemap[number] = {
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency: isFrequentlyUpdated ? "weekly" : isPolicy ? "yearly" : "monthly",
      priority: isHomepage ? 1 : isLocalized && (isCoreAdvisory || isCourse) ? 0.9 : path === "/" ? 0.7 : isCoreAdvisory || isCourse ? 0.75 : isPolicy ? 0.4 : 0.7,
    };

    const localeMatch = path.match(/^\/(en|zh)(.*)$/);
    if (localeMatch) {
      const pairedPath = localeMatch[2] || "";
      entry.alternates = {
        languages: {
          "en-SG": `${baseUrl}/en${pairedPath}`,
          "zh-SG": `${baseUrl}/zh${pairedPath}`,
        },
      };
    }

    return entry;
  }) satisfies MetadataRoute.Sitemap;

  const insightEntries = allPosts.map((post) => ({
    url: `${baseUrl}/insights/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : now,
    changeFrequency: "monthly" as const,
    priority: post.category.toLowerCase().includes("business") ? 0.7 : 0.6,
  })) satisfies MetadataRoute.Sitemap;

  return [...pageEntries, ...insightEntries];
}
