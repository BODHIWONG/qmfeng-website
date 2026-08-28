import type { Metadata } from "next";
import FamilyBusinessContent from "@/components/family-business-content";
import { FixedLanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "家族企业传承顾问 | 启明遁甲 Qimen Strategy Singapore",
  description:
    "为家族企业创始人与下一代提供接班准备、两代人对齐、角色权责、领导力交接与关键时机的私密战略决策顾问服务。",
  alternates: {
    canonical: "https://www.qmfeng.com/zh/family-business-succession",
    languages: {
      "en-SG": "https://www.qmfeng.com/en/family-business-succession",
      "zh-SG": "https://www.qmfeng.com/zh/family-business-succession",
      "x-default": "https://www.qmfeng.com/en/family-business-succession",
    },
  },
};

export default function ChineseFamilyBusinessSuccessionPage() {
  return (
    <FixedLanguageProvider lang="zh">
      <FamilyBusinessContent />
    </FixedLanguageProvider>
  );
}
