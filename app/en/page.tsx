import type { Metadata } from "next";
import HomePage from "@/app/page";
import { FixedLanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "Qimen Strategy Singapore | Strategic Decision Advisory",
  description:
    "Strategic decision advisory for business owners, leaders and family enterprises, combining practical business experience with Qimen-based decision analysis.",
  alternates: {
    canonical: "https://www.qmfeng.com/en",
    languages: {
      "en-SG": "https://www.qmfeng.com/en",
      "zh-SG": "https://www.qmfeng.com/zh",
      "x-default": "https://www.qmfeng.com/en",
    },
  },
};

export default function EnglishHomePage() {
  return (
    <FixedLanguageProvider lang="en">
      <HomePage />
    </FixedLanguageProvider>
  );
}
