import type { Metadata } from "next";
import DecisionPage from "@/app/decision/page";
import { FixedLanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "新加坡奇门遁甲咨询｜S$396",
  description: "S$396奇门遁甲咨询，适用于事业、工作、合作、感情与人生方向等问题。",
  alternates: {
    canonical: "https://www.qmfeng.com/zh/decision",
    languages: {
      "en-SG": "https://www.qmfeng.com/en/decision",
      "zh-SG": "https://www.qmfeng.com/zh/decision",
    },
  },
};

export default function ChineseDecisionPage() {
  return <FixedLanguageProvider lang="zh"><DecisionPage /></FixedLanguageProvider>;
}
