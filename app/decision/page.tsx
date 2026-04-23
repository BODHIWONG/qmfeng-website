import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/language-context";
import ServiceDetailTemplate from "@/components/service-detail-template";
import { decisionPageContent } from "@/lib/service-page-data";

export const metadata: Metadata = {
  title: "战略决策 · 关键判断",
  description:
    "QiMing Feng Shui Singapore consultation for strategic decisions, business timing, career transitions, partnerships, and critical judgment. Combining Qi Men Dun Jia with practical direction analysis.",
  alternates: {
    canonical: "https://www.qmfeng.com/decision",
  },
  openGraph: {
    title: "战略决策 · 关键判断 | QiMing Feng Shui",
    description:
      "Consultation for strategic decisions, timing, and critical judgment in Singapore.",
    url: "https://www.qmfeng.com/decision",
    type: "website",
  },
};

export default function DecisionPage() {
  return (
    <LanguageProvider>
      <ServiceDetailTemplate content={decisionPageContent} />
    </LanguageProvider>
  );
}
