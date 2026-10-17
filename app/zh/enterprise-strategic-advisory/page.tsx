import type { Metadata } from "next";
import EnterprisePage from "@/app/enterprise-strategic-advisory/page";
import { FixedLanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "新加坡企业长期陪跑顾问｜启明遁甲",
  description: "面向新加坡创业者、企业主与管理团队的长期顾问服务，围绕经营目标、重大决策、团队合作、组织变化与阶段性复盘提供持续支持。",
  alternates: {
    canonical: "https://www.qmfeng.com/zh/enterprise-strategic-advisory",
    languages: {
      "en-SG": "https://www.qmfeng.com/en/enterprise-strategic-advisory",
      "zh-SG": "https://www.qmfeng.com/zh/enterprise-strategic-advisory",
    },
  },
};

export default function ChineseEnterprisePage() {
  return <FixedLanguageProvider lang="zh"><EnterprisePage /></FixedLanguageProvider>;
}
