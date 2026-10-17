import type { Metadata } from "next";
import PersonalAdvisoryPage from "@/app/personal-advisory/page";
import { FixedLanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "新加坡奇门遁甲决策分析｜个人与企业重大选择",
  description: "启明遁甲结合奇门遁甲与现实条件，为个人及企业提供事业方向、合作、人事、投资项目与重大选择的决策分析；单次咨询分为S$398、S$698及S$998档位。",
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
