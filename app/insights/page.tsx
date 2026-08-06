"use client";

import { LanguageProvider, useLanguage } from "@/contexts/language-context";
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
import { useLocalizedHref } from "@/hooks/use-localized-href";

const contentHubs = [
  { titleEn: "Qi Men Dun Jia Consultation Singapore", titleZh: "新加坡奇门遁甲咨询", descriptionEn: "Consultation pathway, suitability and what to do before booking.", descriptionZh: "了解咨询入口、适合情况与预约前准备。", href: "/decision" },
  { titleEn: "Relationship Decision & Emotional Clarity", titleZh: "感情决策与关系清晰", descriptionEn: "Private advisory for relationship, marriage and next-step decisions.", descriptionZh: "感情、婚姻与下一步选择的私密咨询。", href: "/relationship-clarity-reading-singapore" },
  { titleEn: "Career & Personal Decision Advisory", titleZh: "事业与个人决策咨询", descriptionEn: "Bazi, Qi Men and major decision support for personal direction.", descriptionZh: "八字、奇门与重大决策支持。", href: "/personal-advisory" },
  { titleEn: "Business Decision Advisory for Founders", titleZh: "企业主商业决策顾问", descriptionEn: "Strategic decision support for business owners and executives.", descriptionZh: "面向企业主与高管的战略决策支持。", href: "/enterprise-strategic-advisory" },
  { titleEn: "Qi Men Dun Jia Courses Singapore", titleZh: "新加坡奇门遁甲课程", descriptionEn: "Practical learning pathways from foundation to advanced study.", descriptionZh: "从基础到高阶的奇门遁甲实战学习路径。", href: "/courses" },
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
  .filter((post, index, posts) => posts.findIndex((item) => item.slug === post.slug) === index);

function InsightsContent() {
  const { lang, t } = useLanguage();
  const localizeHref = useLocalizedHref();
  const visiblePosts = allPosts.filter((post) => {
    const text = `${post.title} ${post.excerpt}`;
    const hasChinese = /[\u3400-\u9fff]/.test(text);
    return lang === "zh" ? hasChinese : !hasChinese;
  });

  return (
    <div className="min-h-screen bg-[oklch(0.08_0.02_60)] text-white">
      <Navbar />
      <main className="container pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="mb-12 max-w-4xl">
          <div className="mb-6 flex items-center gap-3"><div className="h-px w-8 bg-[oklch(0.60_0.08_65)]" /><span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[oklch(0.60_0.08_65)]">{t("启明遁甲案例与洞察", "Qimen Strategy Insights")}</span></div>
          <h1 className="mb-5 text-4xl font-bold leading-tight md:text-6xl">{t("真实案例、决策洞察与奇门实战观点", "Cases, Decision Insights and Practical Qi Men Perspectives")}</h1>
          <p className="text-base leading-relaxed text-[oklch(0.72_0.02_70)] md:text-lg">{t("先从五个核心主题进入，再阅读基于真实客户与商业场景整理的案例和观点。", "Start with one of the five core topics below, then explore selected articles and case reflections based on practical client and business situations.")}</p>
        </div>

        <section aria-labelledby="content-hubs" className="mb-16">
          <h2 id="content-hubs" className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-[oklch(0.72_0.12_70)]">{t("五大内容中心", "Core Topics")}</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {contentHubs.map((hub) => (
              <Link key={hub.href} href={localizeHref(hub.href)} className="group flex min-h-48 flex-col border border-[oklch(0.25_0.02_60)] bg-[oklch(0.11_0.02_60)] p-5 transition hover:border-[oklch(0.60_0.08_65)]">
                <h3 className="text-lg font-bold leading-snug text-[oklch(0.96_0.01_75)]">{t(hub.titleZh, hub.titleEn)}</h3>
                <p className="mt-4 flex-1 text-sm leading-6 text-[oklch(0.66_0.02_70)]">{t(hub.descriptionZh, hub.descriptionEn)}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[oklch(0.60_0.08_65)] group-hover:gap-3">{t("查看主题", "Explore")}<ArrowRight size={12} /></span>
              </Link>
            ))}
          </div>
        </section>

        <section aria-labelledby="latest-insights">
          <div className="mb-8"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[oklch(0.60_0.08_65)]">{t("精选内容库", "Selected Library")}</p><h2 id="latest-insights" className="mt-3 text-3xl font-bold text-[oklch(0.96_0.01_75)] md:text-4xl">{t("最新案例与洞察", "Latest Insights")}</h2></div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visiblePosts.map((post) => (
              <article key={post.slug} className="flex flex-col border border-[oklch(0.20_0.02_60)] bg-[oklch(0.12_0.02_60)] p-6 transition-colors hover:border-[oklch(0.60_0.08_65)]">
                <div className="mb-4"><span className="bg-[oklch(0.60_0.08_65)] px-2 py-1 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-[oklch(0.08_0.02_60)]">{post.category}</span></div>
                <h3 className="mb-3 text-xl font-bold leading-snug text-[oklch(0.96_0.01_75)]">{post.title}</h3>
                <div className="mb-4 flex items-center gap-4 text-xs text-[oklch(0.55_0.02_70)]"><span className="flex items-center gap-1.5"><Calendar size={12} />{post.date}</span><span className="flex items-center gap-1.5"><Clock size={12} />{post.readTime}</span></div>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-[oklch(0.68_0.02_70)]">{post.excerpt}</p>
                <Link href={`/insights/${post.slug}`} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[oklch(0.60_0.08_65)] transition-all hover:gap-3">{t("阅读文章", "Read Insight")}<ArrowRight size={12} /></Link>
              </article>
            ))}
          </div>
          {visiblePosts.length === 0 && <p className="border border-white/10 bg-white/[0.03] p-6 text-sm leading-7 text-white/62">{t("该语言的精选内容正在整理中。你仍可从上方五个主题入口了解服务。", "Selected articles in this language are being consolidated. Use the five topic hubs above to explore the main services.")}</p>}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default function InsightsPage() {
  return <LanguageProvider><InsightsContent /></LanguageProvider>;
}
