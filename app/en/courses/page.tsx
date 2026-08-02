import type { Metadata } from "next";
import CoursesPage from "@/app/courses/page";
import { LanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "Qi Men Dun Jia Courses Singapore｜Qimen Strategy",
  description:
    "Practical Qi Men Dun Jia courses in Singapore with structured learning pathways, small-group teaching, case analysis and guided practice.",
  alternates: {
    canonical: "https://www.qmfeng.com/en/courses",
    languages: {
      "en-SG": "https://www.qmfeng.com/en/courses",
      "zh-SG": "https://www.qmfeng.com/zh/courses",
    },
  },
};

export default function EnglishCoursesPage() {
  return (
    <LanguageProvider initialLang="en">
      <CoursesPage />
    </LanguageProvider>
  );
}
