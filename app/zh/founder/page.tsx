import type { Metadata } from "next";
import FounderPage from "@/app/founder/page";
import { FixedLanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "黄启明｜启明遁甲创始人",
  description: "黄启明是启明遁甲Qimen Strategy创始人，拥有16年以上奇门遁甲实战经验及18年企业运营与管理经验。",
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
