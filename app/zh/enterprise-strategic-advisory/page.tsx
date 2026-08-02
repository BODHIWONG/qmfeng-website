import type { Metadata } from "next";
import EnterpriseStrategicAdvisoryPage from "@/app/enterprise-strategic-advisory/page";
import { LanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "新加坡企业战略顾问｜启明遁甲",
  description:
    "面向创业者、企业主与高管的企业战略顾问服务，聚焦经营瓶颈、转型、人事合作与重大经营决策。",
  alternates: {
    canonical: "https://www.qmfeng.com/zh/enterprise-strategic-advisory",
    languages: {
      "en-SG": "https://www.qmfeng.com/en/enterprise-strategic-advisory",
      "zh-SG": "https://www.qmfeng.com/zh/enterprise-strategic-advisory",
    },
  },
};

export default function ChineseEnterpriseAdvisoryPage() {
  return (
    <LanguageProvider initialLang="zh">
      <EnterpriseStrategicAdvisoryPage />
    </LanguageProvider>
  );
}
