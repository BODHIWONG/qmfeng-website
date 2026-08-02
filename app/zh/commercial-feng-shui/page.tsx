import type { Metadata } from "next";
import CommercialFengShuiPage from "@/app/commercial-feng-shui/page";
import { FixedLanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "新加坡商业风水｜办公室、工厂与企业办公大楼风水",
  description:
    "新加坡商业风水服务，覆盖办公室、工厂、厂房、仓库、工业空间、企业办公大楼与总部，重点结合管理、团队、生产物流、客户接待与企业空间布局。",
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
