import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/language-context";
import ServiceDetailTemplate from "@/components/service-detail-template";
import { decisionPageContent } from "@/lib/decision-page-data";

export const metadata: Metadata = {
  title: "Qi Men Dun Jia Consultation Singapore｜S$396",
  description:
    "Private S$396 Qi Men Dun Jia consultation in Singapore for career, work, partnership, relationship and life-direction concerns.",
  alternates: {
    canonical: "https://www.qmfeng.com/en/decision",
    languages: {
      "en-SG": "https://www.qmfeng.com/en/decision",
      "zh-SG": "https://www.qmfeng.com/zh/decision",
    },
  },
};

export default function EnglishDecisionPage() {
  return (
    <LanguageProvider initialLang="en">
      <ServiceDetailTemplate content={decisionPageContent} />
    </LanguageProvider>
  );
}
