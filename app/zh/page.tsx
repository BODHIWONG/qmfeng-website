import type { Metadata } from "next";
import HomePage from "@/app/page";
import { FixedLanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "启明遁甲 Qimen Strategy Singapore | 战略决策顾问",
  description:
    "为企业主、领导者与家族企业提供战略决策顾问服务，融合现实商业经验与奇门决策分析，聚焦战略、人事、时机与传承。",
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
