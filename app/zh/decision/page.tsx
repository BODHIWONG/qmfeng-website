import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/language-context";
import ServiceDetailTemplate from "@/components/service-detail-template";
import { decisionPageContent } from "@/lib/decision-page-data";

export const metadata: Metadata = {
  title: "新加坡奇门遁甲咨询｜S$396",
  description:
    "S$396奇门遁甲咨询，适用于事业、工作、合作、感情与人生方向等问题，可预约Bedok面谈或线上咨询。",
  alternates: {
    canonical: "https://www.qmfeng.com/zh/decision",
    languages: {
      "en-SG": "https://www.qmfeng.com/en/decision",
      "zh-SG": "https://www.qmfeng.com/zh/decision",
    },
  },
};

export default function ChineseDecisionPage() {
  return (
    <LanguageProvider initialLang="zh">
      <ServiceDetailTemplate content={decisionPageContent} />
    </LanguageProvider>
  );
}
