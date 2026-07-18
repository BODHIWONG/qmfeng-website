import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/language-context";
import ServiceDetailTemplate from "@/components/service-detail-template";
import { decisionPageContent } from "@/lib/service-page-data";

export const metadata: Metadata = {
  title: "单项奇门决策咨询｜Qimen Strategy Singapore",
  description:
    "Single Qimen Decision Consultation by Qimen Strategy Singapore. Private appointment-based advisory for one critical business, career, relationship or life decision, reviewing timing, direction, people dynamics, risk and actionable next steps.",
  keywords: [
    "Single Qimen Strategy Session Singapore",
    "Qimen Decision Consultation Singapore",
    "Qi Men Strategy Singapore",
    "Qimen decision consultation",
    "private Qimen Strategy session",
    "奇门决策",
    "单项奇门决策咨询",
    "启明遁甲决策智库",
    "黄启明 奇门决策",
  ],
  alternates: {
    canonical: "https://www.qmfeng.com/decision",
  },
  openGraph: {
    title: "Single Qimen Decision Consultation | Qimen Strategy Singapore",
    description:
      "One critical decision. Clear situation. Better next move. Private appointment-based Qimen Strategy advisory.",
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
