import type { Metadata } from "next";
import PersonalAdvisoryPage from "@/app/personal-advisory/page";
import { FixedLanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "新加坡个人咨询｜八字、奇门遁甲与重大决策",
  description: "启明遁甲个人咨询包括S$168八字命理分析、S$396奇门遁甲咨询及S$1,696重大决策咨询。",
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
