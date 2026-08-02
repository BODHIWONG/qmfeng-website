import type { Metadata } from "next";
import RelationshipPage from "@/app/relationship-clarity-reading-singapore/page";
import { FixedLanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "新加坡感情与婚姻咨询｜启明遁甲",
  description: "为感情、婚姻、关系发展与去留选择提供私密咨询，可安排线上或Bedok面谈。",
  alternates: {
    canonical: "https://www.qmfeng.com/zh/relationship-clarity-reading-singapore",
    languages: {
      "en-SG": "https://www.qmfeng.com/en/relationship-clarity-reading-singapore",
      "zh-SG": "https://www.qmfeng.com/zh/relationship-clarity-reading-singapore",
    },
  },
};

export default function ChineseRelationshipPage() {
  return <FixedLanguageProvider lang="zh"><RelationshipPage /></FixedLanguageProvider>;
}
