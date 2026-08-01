import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/language-context";
import ServiceDetailTemplate from "@/components/service-detail-template";
import { decisionPageContent } from "@/lib/decision-page-data";

export const metadata: Metadata = {
  title: "Qi Men Dun Jia Consultation Singapore｜S$396",
  description:
    "Private S$396 Qi Men Dun Jia consultation in Singapore. Analysis is based on the specific Qi Men chart and the client’s actual situation, covering timing, direction, people dynamics, risk and practical next steps.",
  keywords: [
    "Qi Men Dun Jia consultation Singapore",
    "Qimen consultation Singapore",
    "Qi Men decision consultation",
    "Qimen Strategy Singapore",
    "奇门遁甲咨询新加坡",
    "奇门决策咨询",
    "启明遁甲决策智库",
    "黄启明 奇门遁甲",
  ],
  alternates: {
    canonical: "https://www.qmfeng.com/decision",
  },
  openGraph: {
    title: "Qi Men Dun Jia Consultation Singapore | Qimen Strategy",
    description:
      "A private S$396 consultation based on the specific Qi Men chart and the client’s real situation, with integrated analysis of timing, direction, people and risk.",
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
