import type { Metadata } from "next";
import FounderPage from "@/app/founder/page";
import { FixedLanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "黄启明｜Qimen Strategy 创始人及战略决策顾问",
  description:
    "黄启明是 Qimen Strategy 创始人及战略决策顾问，拥有18年企业运营与管理经验，以及16年以上奇门遁甲实战经验。",
  alternates: {
    canonical: "https://www.qmfeng.com/zh/founder",
    languages: {
      "en-SG": "https://www.qmfeng.com/en/founder",
      "zh-SG": "https://www.qmfeng.com/zh/founder",
    },
  },
};

export default function ChineseFounderPage() {
  return <FixedLanguageProvider lang="zh"><FounderPage /></FixedLanguageProvider>;
}
