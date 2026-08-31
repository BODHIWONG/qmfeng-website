import type { Metadata } from "next";
import PersonalAdvisoryPage from "@/app/personal-advisory/page";
import { FixedLanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "Decision Consultation Singapore｜Qimen Strategy",
  description: "Private decision consultation in Singapore for business, career, partnerships, relationships, relocation and major life decisions. Choose S$398, S$698 or S$998 according to decision complexity.",
  alternates: {
    canonical: "https://www.qmfeng.com/en/personal-advisory",
    languages: {
      "en-SG": "https://www.qmfeng.com/en/personal-advisory",
      "zh-SG": "https://www.qmfeng.com/zh/personal-advisory",
    },
  },
};

export default function EnglishPersonalAdvisoryPage() {
  return <FixedLanguageProvider lang="en"><PersonalAdvisoryPage /></FixedLanguageProvider>;
}
