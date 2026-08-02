import type { Metadata } from "next";
import HomePage from "@/app/page";
import { FixedLanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "Qimen Strategy Singapore｜Personal & Business Decision Advisory",
  description:
    "Personal advisory, business strategic advisory and practical Qi Men Dun Jia courses in Singapore. Private consultations are available in Bedok or online.",
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
