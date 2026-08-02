import type { Metadata } from "next";
import RelationshipPage from "@/app/relationship-clarity-reading-singapore/page";
import { FixedLanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "Relationship & Marriage Advisory Singapore",
  description: "Private relationship and marriage advisory in Singapore, available online or in person at Bedok.",
  alternates: {
    canonical: "https://www.qmfeng.com/en/relationship-clarity-reading-singapore",
    languages: {
      "en-SG": "https://www.qmfeng.com/en/relationship-clarity-reading-singapore",
      "zh-SG": "https://www.qmfeng.com/zh/relationship-clarity-reading-singapore",
    },
  },
};

export default function EnglishRelationshipPage() {
  return <FixedLanguageProvider lang="en"><RelationshipPage /></FixedLanguageProvider>;
}
