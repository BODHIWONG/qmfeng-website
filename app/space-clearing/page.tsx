"use client";

import { LanguageProvider } from "@/contexts/language-context";
import ServiceDetailTemplate from "@/components/service-detail-template";
import { spaceClearingPageContent } from "@/lib/service-page-data";

export default function SpaceClearingPage() {
  return (
    <LanguageProvider>
      <ServiceDetailTemplate content={spaceClearingPageContent} />
    </LanguageProvider>
  );
}
