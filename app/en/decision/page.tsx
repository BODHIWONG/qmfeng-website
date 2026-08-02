import type { Metadata } from "next";
import DecisionPage from "@/app/decision/page";
import { FixedLanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "Qi Men Dun Jia Consultation Singapore｜S$396",
  description: "Private S$396 Qi Men Dun Jia consultation for career, work, partnership, relationship and life-direction concerns.",
  alternates: {
    canonical: "https://www.qmfeng.com/en/decision",
    languages: {
      "en-SG": "https://www.qmfeng.com/en/decision",
      "zh-SG": "https://www.qmfeng.com/zh/decision",
    },
  },
};

export default function EnglishDecisionPage() {
  return <FixedLanguageProvider lang="en"><DecisionPage /></FixedLanguageProvider>;
}
