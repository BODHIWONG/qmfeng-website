"use client";

import { LanguageProvider } from "@/contexts/language-context";
import ServiceDetailTemplate from "@/components/service-detail-template";
import { healingPageContent } from "@/lib/service-page-data";

export default function HealingPage() {
  return (
    <LanguageProvider>
      <ServiceDetailTemplate content={healingPageContent} />
    </LanguageProvider>
  );
}
