import type { Metadata } from "next";
import CoursesPage from "@/app/courses/page";
import { FixedLanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "新加坡奇门遁甲实战课程｜基础到高阶",
  description: "新加坡奇门遁甲实战课程，包括S$990基础课程，以及中级、高级和申请制弟子班学习路径。",
  alternates: {
    canonical: "https://www.qmfeng.com/zh/courses",
    languages: {
      "en-SG": "https://www.qmfeng.com/en/courses",
      "zh-SG": "https://www.qmfeng.com/zh/courses",
    },
  },
};

export default function ChineseCoursesPage() {
  return <FixedLanguageProvider lang="zh"><CoursesPage /></FixedLanguageProvider>;
}
