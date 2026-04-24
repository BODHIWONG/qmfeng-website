import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/language-context";
import ServiceDetailTemplate from "@/components/service-detail-template";
import { decisionPageContent } from "@/lib/service-page-data";

const qiMenDecisionPageContent = {
  ...decisionPageContent,
  badgeZh: "奇门遁甲战略决策 · 关键判断",
  pageTitleZh: "奇门遁甲战略决策 · 关键判断",
};

export const metadata: Metadata = {
  title: "奇门遁甲战略决策 · 关键判断 | QiMing Feng Shui Singapore",
  description:
    "QiMing Feng Shui Singapore provides Qi Men Dun Jia consultation for strategic decisions, business timing, career transitions, partnerships, investments, site selection, and critical judgment. Led by Master Huang Qiming with 16+ years of Qi Men Dun Jia and Feng Shui practice.",
  alternates: {
    canonical: "https://www.qmfeng.com/decision",
  },
  openGraph: {
    title: "奇门遁甲战略决策 · 关键判断 | QiMing Feng Shui Singapore",
    description:
      "Singapore Qi Men Dun Jia consultation for business decisions, timing, career direction, partnerships, investments, and critical judgment.",
    url: "https://www.qmfeng.com/decision",
    type: "website",
  },
};

export default function DecisionPage() {
  return (
    <LanguageProvider>
      <ServiceDetailTemplate content={qiMenDecisionPageContent} />
    </LanguageProvider>
  );
}
