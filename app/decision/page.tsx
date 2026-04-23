"use client";

import { LanguageProvider } from "@/contexts/language-context";
import ServiceDetailTemplate from "@/components/service-detail-template";
import { decisionPageContent } from "@/lib/service-page-data";

export default function DecisionPage() {
  return (
    <LanguageProvider>
      <ServiceDetailTemplate content={decisionPageContent} />
    </LanguageProvider>
  );
}
