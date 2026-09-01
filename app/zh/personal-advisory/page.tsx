import type { Metadata } from "next";
import PersonalAdvisoryPage from "@/app/personal-advisory/page";
import { FixedLanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "新加坡个人决策咨询｜事业、关系与重大选择",
  description: "启明遁甲个人决策咨询提供S$398聚焦咨询、S$698深度咨询及S$998重大决策咨询。",
  alternates: {
    canonical: "https://www.qmfeng.com/zh/personal-advisory",
    languages: {
      "en-SG": "https://www.qmfeng.com/en/personal-advisory",
      "zh-SG": "https://www.qmfeng.com/zh/personal-advisory",
    },
  },
};

export default function ChinesePersonalAdvisoryPage() {
  return <FixedLanguageProvider lang="zh"><PersonalAdvisoryPage /></FixedLanguageProvider>;
}
