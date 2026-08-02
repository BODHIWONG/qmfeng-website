import type { Metadata } from "next";
import InsightsPage from "@/app/insights/page";
import { FixedLanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "启明遁甲案例与洞察｜个人、企业与奇门实战",
  description: "精选中文案例与实战观点，涵盖个人决策、企业顾问、感情关系与奇门遁甲在新加坡的实际应用。",
  alternates: {
    canonical: "https://www.qmfeng.com/zh/insights",
    languages: {
      "en-SG": "https://www.qmfeng.com/en/insights",
      "zh-SG": "https://www.qmfeng.com/zh/insights",
    },
  },
};

export default function ChineseInsightsPage() {
  return <FixedLanguageProvider lang="zh"><InsightsPage /></FixedLanguageProvider>;
}
