import type { Metadata } from "next";
import HomePage from "@/app/page";
import { FixedLanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "启明遁甲新加坡｜个人咨询、企业战略顾问与奇门课程",
  description:
    "启明遁甲立足新加坡，提供个人咨询、企业战略顾问与奇门遁甲实战课程，可预约Bedok面谈或线上咨询。",
  alternates: {
    canonical: "https://www.qmfeng.com/zh",
    languages: {
      "en-SG": "https://www.qmfeng.com/en",
      "zh-SG": "https://www.qmfeng.com/zh",
      "x-default": "https://www.qmfeng.com/en",
    },
  },
};

export default function ChineseHomePage() {
  return (
    <FixedLanguageProvider lang="zh">
      <HomePage />
    </FixedLanguageProvider>
  );
}
