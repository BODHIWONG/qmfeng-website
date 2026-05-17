import type { InsightPost } from "@/lib/insights-data";

type InsightOverride = Partial<Pick<InsightPost, "title" | "excerpt" | "category" | "keywords">>;

const overrides: Record<string, InsightOverride> = {
  "qi-men-dun-jia-ancient-strategic-wisdom-qiming-feng-shui": {
    title: "Qimen Strategy | Ancient Strategic Wisdom for Modern Decisions",
    excerpt:
      "A modern introduction to Qimen Strategy as an Eastern decision framework for understanding timing, direction, people, environment and strategic clarity before major decisions.",
    category: "Qimen Strategy",
    keywords: ["Qimen Strategy", "Strategic Insight", "Timing and Direction", "Human Decisions", "Master Huang Qiming"],
  },
  "qi-men-dun-jia-not-fortune-telling-zh-en": {
    title: "Why Seeing the Bigger Picture Changes Everything",
    excerpt:
      "A modern Qimen Strategy perspective on why important decisions require clarity in timing, direction, environment and the full situation before taking action.",
    category: "Strategic Clarity",
    keywords: ["Qimen Strategy", "Strategic Clarity", "Timing", "Decision Making", "Master Huang Qiming"],
  },
  "how-qi-men-dun-jia-helps-business-owners-make-better-decisions": {
    title: "Understanding Business Decisions Through Qimen Strategy",
    excerpt:
      "How Qimen Strategy helps business owners review timing, people dynamics, environment, risk and direction before committing resources.",
    category: "Business Strategy",
    keywords: ["Qimen Strategy", "Business Strategy", "Decision Making", "Timing and Direction", "Singapore Business"],
  },
  "office-feng-shui-for-small-businesses-in-singapore": {
    title: "Why Environment Shapes Business Performance and Decision-Making",
    excerpt:
      "A strategic look at how workplace environment affects focus, authority, client flow, team energy and business clarity for small businesses in Singapore.",
    category: "Environmental Alignment",
    keywords: ["Environmental Alignment", "Business Performance", "Decision Making", "Workplace Energy", "Qimen Strategy"],
  },
  "qi-men-dun-jia-vs-feng-shui-which-one-do-you-need": {
    title: "Understanding Timing, Environment and Strategic Perspective",
    excerpt:
      "A clear explanation of how timing, environment and strategic perspective work together when facing important business, property or life decisions.",
    category: "Strategic Perspective",
    keywords: ["Qimen Strategy", "Timing", "Environment", "Strategic Perspective", "Human Decisions"],
  },
  "qi-men-dun-jia-vs-feng-shui-singapore": {
    title: "Why Timing and Environment Both Influence Human Decisions",
    excerpt:
      "A modern explanation of why important decisions are shaped by both timing and environment, and how Qimen Strategy brings these layers together.",
    category: "Strategic Perspective",
    keywords: ["Qimen Strategy", "Timing", "Environment", "Human Decisions", "Strategic Insight"],
  },
  "what-is-qi-men-dun-jia-singapore": {
    title: "What Is Qimen Strategy Singapore?",
    excerpt:
      "A grounded introduction to Qimen Strategy Singapore as a modern Eastern decision framework for career, business, property, relationship and life clarity.",
    category: "Qimen Strategy Singapore",
    keywords: ["Qimen Strategy Singapore", "Strategic Clarity", "Decision Making", "Master Huang Qiming", "Singapore"],
  },
  "qi-men-dun-jia-business-decisions-singapore": {
    title: "Qimen Strategy Singapore for Business Decisions",
    excerpt:
      "How business owners and leaders use Qimen Strategy to review timing, risk, partnerships, expansion and strategic clarity before major decisions.",
    category: "Business Strategy",
    keywords: ["Qimen Strategy Singapore", "Business Decisions", "Strategic Insight", "Timing", "Singapore Business"],
  },
  "qi-men-dun-jia-career-wealth-direction": {
    title: "Why Career and Wealth Direction Need Strategic Clarity",
    excerpt:
      "A Qimen Strategy perspective on career timing, wealth direction and why effort becomes more effective when timing, direction and environment are aligned.",
    category: "Life Clarity",
    keywords: ["Qimen Strategy", "Career Direction", "Wealth Direction", "Strategic Clarity", "Timing"],
  },
  "when-to-consult-qi-men-dun-jia-singapore": {
    title: "When Should You Seek Qimen Strategy Guidance?",
    excerpt:
      "The key moments when Qimen Strategy can help before major decisions, career changes, business moves, property choices or important relationship turning points.",
    category: "Consultation Guide",
    keywords: ["Qimen Strategy", "Decision Guidance", "Strategic Clarity", "Timing", "Master Huang Qiming"],
  },
  "qi-men-dun-jia-bto-condo-property-singapore": {
    title: "Why Property Decisions Need Timing, Environment and Clarity",
    excerpt:
      "A modern Qimen Strategy view of property decisions, renovation timing, move-in choices and how environment shapes long-term stability.",
    category: "Environmental Alignment",
    keywords: ["Qimen Strategy", "Property Decisions", "Environmental Alignment", "Timing", "Singapore Property"],
  },
  "qi-men-dun-jia-for-bto-selection-singapore": {
    title: "Why Home Selection Is a Strategic Life Decision",
    excerpt:
      "A Qimen Strategy perspective on why home selection, renovation timing and environmental alignment can affect sleep, emotions, family stability and long-term decisions.",
    category: "Environmental Alignment",
    keywords: ["Qimen Strategy", "Home Selection", "Environmental Alignment", "Life Decisions", "Singapore"],
  },
  "qi-men-dun-jia-singapore-when-to-consult-zh-en": {
    title: "When Important Decisions Need Strategic Clarity",
    excerpt:
      "A bilingual Qimen Strategy guide explaining when career, wealth, property, relationship and business decisions need clearer timing, direction and perspective.",
    category: "Strategic Clarity",
    keywords: ["Qimen Strategy", "Strategic Clarity", "Decision Making", "Timing and Direction", "Master Huang Qiming"],
  },
  "qi-men-dun-jia-singapore-business-timing-risk-zh-en": {
    title: "How Business Owners Read Timing, Risk and Strategic Direction",
    excerpt:
      "A bilingual Qimen Strategy article for Singapore business owners on timing, risk, partnerships, expansion and decision clarity.",
    category: "Business Strategy",
    keywords: ["Qimen Strategy", "Business Strategy", "Timing", "Risk Review", "Singapore Business"],
  },
  "qi-men-dun-jia-singapore-bto-condo-property-zh-en": {
    title: "Why Property and Move-In Decisions Need Strategic Timing",
    excerpt:
      "A bilingual Qimen Strategy guide to property choices, renovation timing, move-in decisions and environmental alignment in Singapore.",
    category: "Environmental Alignment",
    keywords: ["Qimen Strategy", "Property Decisions", "Strategic Timing", "Environmental Alignment", "Singapore"],
  },
  "qi-men-dun-jia-space-energy-purification-zh-en": {
    title: "Why Some Spaces Quietly Affect Your Energy and Decisions",
    excerpt:
      "A bilingual Qimen Strategy and space energy article on why certain homes or offices feel heavy, draining or difficult to settle in.",
    category: "Space Energy",
    keywords: ["Space Energy", "Qimen Strategy", "Environmental Alignment", "Energy Reset", "Master Huang Qiming"],
  },
  "how-master-huang-qiming-uses-qi-men-dun-jia-in-real-consultations": {
    title: "How Master Huang Qiming Uses Qimen Strategy in Real Consultations",
    excerpt:
      "A closer look at Master Huang Qiming’s practical consultation style and how Qimen Strategy is applied to real business, property, career and life situations.",
    category: "Master Huang Qiming",
    keywords: ["Master Huang Qiming", "Qimen Strategy", "Strategic Consultation", "Decision Making", "Singapore"],
  },
};

export function applyInsightPostOverrides(post: InsightPost): InsightPost {
  const override = overrides[post.slug];
  if (!override) return post;

  return {
    ...post,
    ...override,
  };
}
