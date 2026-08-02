import type { Metadata } from "next";
import CommercialFengShuiPage from "@/app/commercial-feng-shui/page";
import { FixedLanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "Commercial Feng Shui Singapore｜Office, Factory & Corporate Building",
  description:
    "Commercial Feng Shui for offices, factories, warehouses, industrial facilities, corporate buildings and headquarters in Singapore.",
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
