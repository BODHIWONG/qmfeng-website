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
};

export default function EnglishHomePage() {
  return (
    <FixedLanguageProvider lang="en">
      <HomePage />
    </FixedLanguageProvider>
  );
}
