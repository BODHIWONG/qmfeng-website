import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/language-context";
import ServiceDetailTemplate from "@/components/service-detail-template";
import { wealthPageContent } from "@/lib/service-page-data";

export const metadata: Metadata = {
  title: "事业不顺 · 财运不稳",
  description:
    "QiMing Feng Shui Singapore wealth consultation for career struggles, unstable income, business direction, timing, and financial alignment. Combining Feng Shui, Qi Men Dun Jia, and destiny-based assessment.",
  alternates: {
    canonical: "https://www.qmfeng.com/wealth",
  },
  openGraph: {
    title: "事业不顺 · 财运不稳 | QiMing Feng Shui",
    description:
      "Consultation for career struggles, unstable wealth, business timing, and financial alignment in Singapore.",
    url: "https://www.qmfeng.com/wealth",
    type: "website",
  },
};

export default function WealthPage() {
  return (
    <LanguageProvider>
      <ServiceDetailTemplate content={wealthPageContent} />
    </LanguageProvider>
  );
}
