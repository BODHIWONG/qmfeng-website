import type { Metadata } from "next";
import EnterprisePage from "@/app/enterprise-strategic-advisory/page";
import { FixedLanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "Business Strategic Advisory Singapore｜Qimen Strategy",
  description: "Private strategic advisory for founders, business owners and executives facing growth, transition, people, partnerships and major decisions.",
  alternates: {
    canonical: "https://www.qmfeng.com/en/enterprise-strategic-advisory",
    languages: {
      "en-SG": "https://www.qmfeng.com/en/enterprise-strategic-advisory",
      "zh-SG": "https://www.qmfeng.com/zh/enterprise-strategic-advisory",
    },
  },
};

export default function EnglishEnterprisePage() {
  return <FixedLanguageProvider lang="en"><EnterprisePage /></FixedLanguageProvider>;
}
