import type { Metadata } from "next";
import ContactPageContent from "@/components/contact-page-content";
import { FixedLanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "联系启明遁甲｜新加坡咨询申请",
  description:
    "提交个人决策咨询、企业战略顾问或奇门遁甲课程申请。首次提交只收集必要资料。",
  alternates: {
    canonical: "https://www.qmfeng.com/zh/contact",
    languages: {
      "en-SG": "https://www.qmfeng.com/en/contact",
      "zh-SG": "https://www.qmfeng.com/zh/contact",
    },
  },
};

export default function ChineseContactPage() {
  return (
    <FixedLanguageProvider lang="zh">
      <ContactPageContent />
    </FixedLanguageProvider>
  );
}
