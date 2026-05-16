import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/language-context";
import ServiceDetailTemplate from "@/components/service-detail-template";
import { decisionPageContent } from "@/lib/service-page-data";

export const metadata: Metadata = {
  title: "单项战略决策咨询 S$980｜Qi Men Strategy Singapore",
  description:
    "Single Executive Advisory by Qimen Strategy Singapore. S$980 per session for one critical decision, including timing, direction, people dynamics, risk and actionable next-step review.",
  keywords: [
    "Single Executive Advisory Singapore",
    "Qi Men Strategy Singapore",
    "Qimen decision consultation",
    "S$980 Qimen Strategy",
    "奇门决策",
    "单项战略决策咨询",
    "启明遁甲",
    "黄启明大师",
  ],
  alternates: {
    canonical: "https://www.qmfeng.com/decision",
  },
  openGraph: {
    title: "Single Executive Advisory | Qi Men Strategy Singapore",
    description:
      "One critical decision. Clear insight. Confident move. Single Executive Advisory is S$980 / session.",
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
