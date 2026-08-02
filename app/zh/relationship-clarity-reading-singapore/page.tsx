import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/language-context";
import ServiceDetailTemplate from "@/components/service-detail-template";
import { relationshipPageContent } from "@/lib/relationship-page-data";

export const metadata: Metadata = {
  title: "新加坡感情与婚姻咨询｜启明遁甲",
  description:
    "为感情、婚姻、关系发展与去留选择提供私密咨询。先说明情况，顾问会协助确认适合的咨询方式。",
  alternates: {
    canonical: "https://www.qmfeng.com/zh/relationship-clarity-reading-singapore",
    languages: {
      "en-SG": "https://www.qmfeng.com/en/relationship-clarity-reading-singapore",
      "zh-SG": "https://www.qmfeng.com/zh/relationship-clarity-reading-singapore",
    },
  },
};

export default function ChineseRelationshipPage() {
  return (
    <LanguageProvider initialLang="zh">
      <ServiceDetailTemplate content={relationshipPageContent} />
    </LanguageProvider>
  );
}
