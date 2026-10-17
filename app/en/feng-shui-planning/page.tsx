import type { Metadata } from "next";
import FengShuiPlanningPage from "@/app/feng-shui-planning/page";
import { FixedLanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "Feng Shui Planning Singapore | Residential & Commercial | Qimen Strategy",
  description: "Feng Shui planning for homes, HDB flats, apartments, offices, retail units and business premises in Singapore, with recommendations tailored to the property and its practical constraints.",
  alternates: {
    canonical: "https://www.qmfeng.com/en/feng-shui-planning",
    languages: {
      "en-SG": "https://www.qmfeng.com/en/feng-shui-planning",
      "zh-SG": "https://www.qmfeng.com/zh/feng-shui-planning",
    },
  },
};

export default function EnglishFengShuiPlanningPage() {
  return <FixedLanguageProvider lang="en"><FengShuiPlanningPage /></FixedLanguageProvider>;
}
