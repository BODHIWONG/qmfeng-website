import type { Metadata } from "next";
import CoursesPage from "@/app/courses/page";
import { LanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "新加坡奇门遁甲实战课程｜启明遁甲",
  description:
    "新加坡奇门遁甲实战课程，提供系统学习路径、小班教学、案例分析与实际练习。",
  alternates: {
    canonical: "https://www.qmfeng.com/zh/courses",
    languages: {
      "en-SG": "https://www.qmfeng.com/en/courses",
      "zh-SG": "https://www.qmfeng.com/zh/courses",
    },
  },
};

export default function ChineseCoursesPage() {
  return (
    <LanguageProvider initialLang="zh">
      <CoursesPage />
    </LanguageProvider>
  );
}
