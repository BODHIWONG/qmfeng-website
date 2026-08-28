import type { Metadata } from "next";
import FamilyBusinessContent from "@/components/family-business-content";
import { LanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "Family Business & Succession Advisory | Qimen Strategy Singapore",
  description:
    "Strategic advisory for family business founders and next-generation successors on succession readiness, founder-successor alignment, roles, authority and transition timing.",
  alternates: {
    canonical: "https://www.qmfeng.com/family-business-succession",
    languages: {
      "en-SG": "https://www.qmfeng.com/en/family-business-succession",
      "zh-SG": "https://www.qmfeng.com/zh/family-business-succession",
      "x-default": "https://www.qmfeng.com/en/family-business-succession",
    },
  },
};

export default function FamilyBusinessSuccessionPage() {
  return (
    <LanguageProvider>
      <FamilyBusinessContent />
    </LanguageProvider>
  );
}
