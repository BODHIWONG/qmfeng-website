import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/language-context";
import PersonalAdvisoryContent from "@/components/personal-advisory-content";

export const metadata: Metadata = {
  title: "Personal Advisory Singapore｜Bazi, Qi Men & Major Decisions",
  description:
    "Personal advisory in Singapore including S$168 Bazi Analysis, S$396 Qi Men Dun Jia Consultation and S$1,696 Major Decision Consultation.",
  alternates: {
    canonical: "https://www.qmfeng.com/en/personal-advisory",
    languages: {
      "en-SG": "https://www.qmfeng.com/en/personal-advisory",
      "zh-SG": "https://www.qmfeng.com/zh/personal-advisory",
    },
  },
};

export default function EnglishPersonalAdvisoryPage() {
  return (
    <LanguageProvider initialLang="en">
      <PersonalAdvisoryContent />
    </LanguageProvider>
  );
}
