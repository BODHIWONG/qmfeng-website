import type { Metadata } from "next";
import ContactPageContent from "@/components/contact-page-content";
import { FixedLanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "联系启明遁甲｜新加坡咨询申请",
  description:
    "提交企业顾问、个人重大决策、感情、事业、奇门遁甲、八字、风水或课程咨询申请。首次提交只收集必要资料。",
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
