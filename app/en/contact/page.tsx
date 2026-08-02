import type { Metadata } from "next";
import ContactPageContent from "@/components/contact-page-content";
import { FixedLanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "Contact Qimen Strategy Singapore｜Consultation Enquiry",
  description:
    "Submit a private enquiry for business advisory, personal decisions, relationship, career, Qi Men Dun Jia, Bazi, Feng Shui or courses in Singapore.",
  alternates: {
    canonical: "https://www.qmfeng.com/en/contact",
    languages: {
      "en-SG": "https://www.qmfeng.com/en/contact",
      "zh-SG": "https://www.qmfeng.com/zh/contact",
    },
  },
};

export default function EnglishContactPage() {
  return (
    <FixedLanguageProvider lang="en">
      <ContactPageContent />
    </FixedLanguageProvider>
  );
}
