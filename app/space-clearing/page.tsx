import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/language-context";
import ServiceDetailTemplate from "@/components/service-detail-template";
import { spaceClearingPageContent } from "@/lib/service-page-data";

export const metadata: Metadata = {
  title: "空间能量净化",
  description:
    "QiMing Feng Shui Singapore consultation for space energy clearing, sleep disturbance, emotional heaviness, draining home environments, and office energy alignment. Helping restore steadiness through spatial assessment and adjustment.",
  alternates: {
    canonical: "https://www.qmfeng.com/space-clearing",
  },
  openGraph: {
    title: "空间能量净化 | QiMing Feng Shui",
    description:
      "Consultation for sleep, mood, and draining spaces through energy clearing and environmental alignment in Singapore.",
    url: "https://www.qmfeng.com/space-clearing",
    type: "website",
  },
};

export default function SpaceClearingPage() {
  return (
    <LanguageProvider>
      <ServiceDetailTemplate content={spaceClearingPageContent} />
    </LanguageProvider>
  );
}
