import type { Metadata } from "next";
import ChairmanFounderContent from "@/components/chairman-founder-content";
import { FixedLanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "董事长与创始人顾问 | 启明遁甲 Qimen Strategy Singapore",
  description:
    "为创始人、企业主与资深决策者提供独立、私密的重大决策支持，聚焦战略方向、投资、合作、关键人事、传承与行动时机。",
  alternates: {
    canonical: "https://www.qmfeng.com/zh/chairman-founder-advisory",
    languages: {
      "en-SG": "https://www.qmfeng.com/en/chairman-founder-advisory",
      "zh-SG": "https://www.qmfeng.com/zh/chairman-founder-advisory",
      "x-default": "https://www.qmfeng.com/en/chairman-founder-advisory",
    },
  },
};

export default function ChineseChairmanFounderAdvisoryPage() {
  return (
    <FixedLanguageProvider lang="zh">
      <ChairmanFounderContent />
    </FixedLanguageProvider>
  );
}
