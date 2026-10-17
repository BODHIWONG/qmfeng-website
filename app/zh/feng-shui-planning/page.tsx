import type { Metadata } from "next";
import FengShuiPlanningPage from "@/app/feng-shui-planning/page";
import { FixedLanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "新加坡风水布局｜住宅、HDB、办公室与企业空间｜启明遁甲",
  description: "启明遁甲立足新加坡，为住宅、HDB、公寓、办公室、店铺及企业经营场所提供风水评估与布局建议。服务范围根据空间用途、实际条件与客户需求确认。",
  alternates: {
    canonical: "https://www.qmfeng.com/zh/feng-shui-planning",
    languages: {
      "en-SG": "https://www.qmfeng.com/en/feng-shui-planning",
      "zh-SG": "https://www.qmfeng.com/zh/feng-shui-planning",
    },
  },
};

export default function ChineseFengShuiPlanningPage() {
  return <FixedLanguageProvider lang="zh"><FengShuiPlanningPage /></FixedLanguageProvider>;
}
