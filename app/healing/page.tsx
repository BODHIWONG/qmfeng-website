import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/language-context";
import ServiceDetailTemplate from "@/components/service-detail-template";
import { healingPageContent } from "@/lib/service-page-data";

export const metadata: Metadata = {
  title: "感情不顺 · 情感疗愈",
  description:
    "QiMing Feng Shui Singapore consultation for relationship struggles, emotional healing, inner-state balance, and relationship pattern clarity. Integrating positive psychology perspective, Feng Shui, and metaphysical guidance.",
  alternates: {
    canonical: "https://www.qmfeng.com/healing",
  },
  openGraph: {
    title: "感情不顺 · 情感疗愈 | QiMing Feng Shui",
    description:
      "Consultation for relationship struggles, emotional healing, and inner-state balance in Singapore.",
    url: "https://www.qmfeng.com/healing",
    type: "website",
  },
};

export default function HealingPage() {
  return (
    <LanguageProvider>
      <ServiceDetailTemplate content={healingPageContent} />
    </LanguageProvider>
  );
}
