import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/language-context";
import ServiceDetailTemplate from "@/components/service-detail-template";
import { relationshipPageContent } from "@/lib/relationship-page-data";

export const metadata: Metadata = {
  title: "Relationship & Marriage Advisory Singapore｜Qimen Strategy",
  description:
    "Private relationship and marriage advisory in Singapore. Share the situation first and Qimen Strategy will help confirm whether a S$398 focused consultation, S$698 in-depth consultation or S$998 major decision consultation is appropriate.",
  keywords: [
    "Relationship consultation Singapore",
    "Marriage consultation Singapore",
    "Relationship decision advisory Singapore",
    "Qi Men relationship consultation Singapore",
    "感情咨询新加坡",
    "婚姻咨询新加坡",
    "感情关系决策",
    "启明遁甲",
  ],
  alternates: {
    canonical: "https://www.qmfeng.com/relationship-clarity-reading-singapore",
  },
  openGraph: {
    title: "Relationship & Marriage Advisory Singapore | Qimen Strategy",
    description:
      "Private relationship and marriage advisory. Available online or in person at Bedok, Singapore.",
    url: "https://www.qmfeng.com/relationship-clarity-reading-singapore",
    type: "website",
  },
};

export default function RelationshipClarityReadingSingaporePage() {
  return (
    <LanguageProvider>
      <ServiceDetailTemplate content={relationshipPageContent} />
    </LanguageProvider>
  );
}
