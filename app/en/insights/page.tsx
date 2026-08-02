import type { Metadata } from "next";
import InsightsPage from "@/app/insights/page";
import { FixedLanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "Qimen Strategy Insights｜Cases & Decision Advisory",
  description: "Selected English-language cases and practical insights on personal decisions, business advisory, relationships and Qi Men Dun Jia in Singapore.",
  alternates: {
    canonical: "https://www.qmfeng.com/en/insights",
    languages: {
      "en-SG": "https://www.qmfeng.com/en/insights",
      "zh-SG": "https://www.qmfeng.com/zh/insights",
    },
  },
};

export default function EnglishInsightsPage() {
  return <FixedLanguageProvider lang="en"><InsightsPage /></FixedLanguageProvider>;
}
