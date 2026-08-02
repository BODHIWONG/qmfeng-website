import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/language-context";
import ServiceDetailTemplate from "@/components/service-detail-template";
import { relationshipPageContent } from "@/lib/relationship-page-data";

export const metadata: Metadata = {
  title: "Relationship & Marriage Advisory Singapore",
  description:
    "Private relationship and marriage advisory in Singapore. The consultant will help confirm the appropriate consultation pathway after an initial enquiry.",
  alternates: {
    canonical: "https://www.qmfeng.com/en/relationship-clarity-reading-singapore",
    languages: {
      "en-SG": "https://www.qmfeng.com/en/relationship-clarity-reading-singapore",
      "zh-SG": "https://www.qmfeng.com/zh/relationship-clarity-reading-singapore",
    },
  },
};

export default function EnglishRelationshipPage() {
  return (
    <LanguageProvider initialLang="en">
      <ServiceDetailTemplate content={relationshipPageContent} />
    </LanguageProvider>
  );
}
