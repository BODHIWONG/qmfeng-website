import type { Metadata } from "next";
import CommercialFengShuiPage from "@/app/commercial-feng-shui/page";
import { FixedLanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "Commercial Feng Shui Singapore｜Office Feng Shui Advisory",
  description:
    "Office-focused Commercial Feng Shui advisory in Singapore for entrances, leadership positions, workstations, meeting areas, team flow and client experience.",
  alternates: {
    canonical: "https://www.qmfeng.com/en/commercial-feng-shui",
    languages: {
      "en-SG": "https://www.qmfeng.com/en/commercial-feng-shui",
      "zh-SG": "https://www.qmfeng.com/zh/commercial-feng-shui",
    },
  },
};

export default function EnglishCommercialFengShuiPage() {
  return (
    <FixedLanguageProvider lang="en">
      <CommercialFengShuiPage />
    </FixedLanguageProvider>
  );
}
