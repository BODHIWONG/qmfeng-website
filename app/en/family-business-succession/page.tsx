import type { Metadata } from "next";
import FamilyBusinessContent from "@/components/family-business-content";
import { FixedLanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "Family Business & Succession Advisory | Qimen Strategy Singapore",
  description:
    "Private strategic advisory for founders and next-generation successors on succession readiness, alignment, leadership transition and timing.",
  alternates: {
    canonical: "https://www.qmfeng.com/en/family-business-succession",
    languages: {
      "en-SG": "https://www.qmfeng.com/en/family-business-succession",
      "zh-SG": "https://www.qmfeng.com/zh/family-business-succession",
      "x-default": "https://www.qmfeng.com/en/family-business-succession",
    },
  },
};

export default function EnglishFamilyBusinessSuccessionPage() {
  return (
    <FixedLanguageProvider lang="en">
      <FamilyBusinessContent />
    </FixedLanguageProvider>
  );
}
