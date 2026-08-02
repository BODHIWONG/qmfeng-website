import type { Metadata } from "next";
import CommercialFengShuiPage from "@/app/commercial-feng-shui/page";
import { FixedLanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "新加坡商业风水｜办公室风水布局与企业空间咨询",
  description:
    "新加坡商业风水与办公室风水咨询，重点评估入口、老板办公室、员工工位、会议区、团队动线与客户接待空间。",
  alternates: {
    canonical: "https://www.qmfeng.com/zh/commercial-feng-shui",
    languages: {
      "en-SG": "https://www.qmfeng.com/en/commercial-feng-shui",
      "zh-SG": "https://www.qmfeng.com/zh/commercial-feng-shui",
    },
  },
};

export default function ChineseCommercialFengShuiPage() {
  return (
    <FixedLanguageProvider lang="zh">
      <CommercialFengShuiPage />
    </FixedLanguageProvider>
  );
}
