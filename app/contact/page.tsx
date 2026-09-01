import type { Metadata } from "next";
import ContactPageContent from "@/components/contact-page-content";
import { LanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "Contact Qimen Strategy Singapore｜Consultation Enquiry",
  description:
    "Contact Qimen Strategy in Singapore for personal decision consultation, enterprise strategic advisory and Qi Men Dun Jia course enquiries.",
  alternates: {
    canonical: "https://www.qmfeng.com/contact",
    languages: {
      "en-SG": "https://www.qmfeng.com/en/contact",
      "zh-SG": "https://www.qmfeng.com/zh/contact",
    },
  },
};

export default function ContactPage() {
  return (
    <LanguageProvider>
      <ContactPageContent />
    </LanguageProvider>
  );
}
