import type { Metadata } from "next";
import FounderPage from "@/app/founder/page";
import { FixedLanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "Huang Qiming｜Founder & Strategic Decision Advisor, Qimen Strategy",
  description:
    "Huang Qiming is the Founder and Strategic Decision Advisor of Qimen Strategy in Singapore, combining 18 years of business operations and management experience with 16+ years of practical Qi Men Dun Jia experience.",
  alternates: {
    canonical: "https://www.qmfeng.com/en/founder",
    languages: {
      "en-SG": "https://www.qmfeng.com/en/founder",
      "zh-SG": "https://www.qmfeng.com/zh/founder",
    },
  },
};

export default function EnglishFounderPage() {
  return <FixedLanguageProvider lang="en"><FounderPage /></FixedLanguageProvider>;
}
