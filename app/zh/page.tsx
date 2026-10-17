import type { Metadata } from "next";
import HomePage from "@/app/page";
import { FixedLanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "启明遁甲｜新加坡奇门决策、个人与企业风水布局、企业长期陪跑",
  description:
    "启明遁甲立足新加坡，提供奇门遁甲个人与企业决策分析、住宅及商业空间风水布局，以及面向企业主的长期经营顾问陪跑服务。",
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
