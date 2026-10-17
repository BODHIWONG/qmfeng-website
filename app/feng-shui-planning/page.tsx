import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/language-context";
import FengShuiPlanningContent from "@/components/feng-shui-planning-content";

export const metadata: Metadata = {
  title: "Feng Shui Planning Singapore | Residential & Business | Qimen Strategy",
  description: "Feng Shui assessment and layout guidance in Singapore for homes, HDB flats, offices, retail units and business premises. Scope and recommendations are tailored to the property and practical constraints.",
  keywords: ["Feng Shui Singapore", "Residential Feng Shui Singapore", "Business Feng Shui Singapore", "HDB Feng Shui", "Office Feng Shui", "Personal Feng Shui", "新加坡风水布局", "住宅风水", "企业风水", "办公室风水", "启明遁甲"],
  alternates: {
    canonical: "https://www.qmfeng.com/feng-shui-planning",
    languages: {
      "en-SG": "https://www.qmfeng.com/en/feng-shui-planning",
      "zh-SG": "https://www.qmfeng.com/zh/feng-shui-planning",
    },
  },
  openGraph: {
    title: "Feng Shui Planning Singapore | Homes & Business Premises",
    description: "Residential and commercial Feng Shui assessment and layout guidance in Singapore.",
    url: "https://www.qmfeng.com/feng-shui-planning",
    type: "website",
  },
};

export default function FengShuiPlanningPage() {
  return <LanguageProvider><FengShuiPlanningContent /></LanguageProvider>;
}
