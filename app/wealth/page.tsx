"use client";

import { LanguageProvider } from "@/contexts/language-context";
import ServiceDetailTemplate from "@/components/service-detail-template";
import { wealthPageContent } from "@/lib/service-page-data";

export default function WealthPage() {
  return (
    <LanguageProvider>
      <ServiceDetailTemplate content={wealthPageContent} />
    </LanguageProvider>
  );
}
