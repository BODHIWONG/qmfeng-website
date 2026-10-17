import type { Metadata } from "next";
import EnterprisePage from "@/app/enterprise-strategic-advisory/page";
import { FixedLanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "Long-term Business Advisory Singapore | Qimen Strategy",
  description: "Ongoing advisory for Singapore business owners and leadership teams across priorities, major decisions, partnerships, people, organisational change and execution reviews.",
  alternates: {
    canonical: "https://www.qmfeng.com/en/enterprise-strategic-advisory",
    languages: {
      "en-SG": "https://www.qmfeng.com/en/enterprise-strategic-advisory",
      "zh-SG": "https://www.qmfeng.com/zh/enterprise-strategic-advisory",
    },
  },
  openGraph: {
    title: "Long-term Business Advisory Singapore | Qimen Strategy",
    description: "Ongoing advisory for Singapore business owners and leadership teams across priorities, major decisions, partnerships, people, organisational change and execution reviews.",
    url: "https://www.qmfeng.com/en/enterprise-strategic-advisory",
    siteName: "Qimen Strategy | 启明遁甲",
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Long-term Business Advisory Singapore | Qimen Strategy",
    description: "Ongoing advisory for Singapore business owners and leadership teams across priorities, major decisions, partnerships, people, organisational change and execution reviews.",
  },
};

export default function EnglishEnterprisePage() {
  return <FixedLanguageProvider lang="en"><EnterprisePage /></FixedLanguageProvider>;
}
