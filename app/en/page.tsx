import type { Metadata } from "next";
import HomePage from "@/app/page";
import { FixedLanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "Qimen Strategy Singapore | Decision Analysis, Feng Shui & Business Advisory",
  description:
    "Singapore-based Qimen Strategy offering Qimen Dunjia decision analysis for individuals and businesses, personal and commercial Feng Shui planning, and long-term business advisory.",
  alternates: {
    canonical: "https://www.qmfeng.com/en",
    languages: {
      "en-SG": "https://www.qmfeng.com/en",
      "zh-SG": "https://www.qmfeng.com/zh",
      "x-default": "https://www.qmfeng.com/en",
    },
  },
  openGraph: {
    title: "Qimen Strategy Singapore | Decision Analysis, Feng Shui & Business Advisory",
    description: "Singapore-based Qimen Strategy offering Qimen Dunjia decision analysis for individuals and businesses, personal and commercial Feng Shui planning, and long-term business advisory.",
    url: "https://www.qmfeng.com/en",
    siteName: "Qimen Strategy | 启明遁甲",
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qimen Strategy Singapore | Decision Analysis, Feng Shui & Business Advisory",
    description: "Qimen Dunjia decision analysis, personal and business Feng Shui, and long-term business advisory in Singapore.",
  },
};

export default function EnglishHomePage() {
  return (
    <FixedLanguageProvider lang="en">
      <HomePage />
    </FixedLanguageProvider>
  );
}
