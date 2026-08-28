import type { Metadata } from "next";
import ChairmanFounderContent from "@/components/chairman-founder-content";
import { FixedLanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "Chairman & Founder Advisory | Qimen Strategy Singapore",
  description:
    "Independent and confidential strategic decision support for founders, business owners and senior decision-makers facing high-stakes choices.",
  alternates: {
    canonical: "https://www.qmfeng.com/en/chairman-founder-advisory",
    languages: {
      "en-SG": "https://www.qmfeng.com/en/chairman-founder-advisory",
      "zh-SG": "https://www.qmfeng.com/zh/chairman-founder-advisory",
      "x-default": "https://www.qmfeng.com/en/chairman-founder-advisory",
    },
  },
};

export default function EnglishChairmanFounderAdvisoryPage() {
  return (
    <FixedLanguageProvider lang="en">
      <ChairmanFounderContent />
    </FixedLanguageProvider>
  );
}
