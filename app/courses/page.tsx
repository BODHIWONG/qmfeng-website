import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/language-context";
import CoursesContent from "@/components/courses-content";

export const metadata: Metadata = {
  title: "Qi Men Dun Jia Courses Singapore｜Foundation to Advanced",
  description:
    "Practical Qi Men Dun Jia courses in Singapore with a four-level pathway from Foundation to Intermediate, Advanced and the application-based Disciple Programme.",
  alternates: { canonical: "https://www.qmfeng.com/courses" },
  openGraph: {
    title: "Qi Men Dun Jia Courses Singapore | Qimen Strategy",
    description:
      "A structured practical learning pathway from foundation to advanced Qi Men Dun Jia study in Singapore.",
    url: "https://www.qmfeng.com/courses",
    type: "website",
  },
};

export default function CoursesPage() {
  return (
    <LanguageProvider>
      <CoursesContent />
    </LanguageProvider>
  );
}
