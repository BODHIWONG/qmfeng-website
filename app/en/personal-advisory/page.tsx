import type { Metadata } from "next";
import PersonalAdvisoryPage from "@/app/personal-advisory/page";
import { FixedLanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "Qimen Dunjia Decision Analysis Singapore | Qimen Strategy",
  description: "Qimen Dunjia decision analysis for individuals and businesses in Singapore, covering career, partnerships, key people, projects and major choices. Consultation options are S$398, S$698 and S$998 by decision complexity.",
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
