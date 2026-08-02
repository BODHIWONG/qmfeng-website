import type { Metadata } from "next";
import CoursesPage from "@/app/courses/page";
import { FixedLanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "Qi Men Dun Jia Courses Singapore｜Foundation to Advanced",
  description: "Practical Qi Men Dun Jia courses in Singapore, including the S$990 Foundation Course and structured later-level pathways.",
  alternates: {
    canonical: "https://www.qmfeng.com/en/courses",
    languages: {
      "en-SG": "https://www.qmfeng.com/en/courses",
      "zh-SG": "https://www.qmfeng.com/zh/courses",
    },
  },
};

export default function EnglishCoursesPage() {
  return <FixedLanguageProvider lang="en"><CoursesPage /></FixedLanguageProvider>;
}
