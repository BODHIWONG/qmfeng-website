import type { Metadata } from "next";
import ContactSuccessContent from "@/components/contact-success-content";
import { FixedLanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "Enquiry Received｜Qimen Strategy Singapore",
  robots: { index: false, follow: false },
};

export default function EnglishContactSuccessPage() {
  return (
    <FixedLanguageProvider lang="en">
      <ContactSuccessContent />
    </FixedLanguageProvider>
  );
}
