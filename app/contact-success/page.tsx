import type { Metadata } from "next";
import ContactSuccessContent from "@/components/contact-success-content";
import { LanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "Enquiry Received｜Qimen Strategy Singapore",
  description: "Confirmation that Qimen Strategy has received your consultation enquiry.",
  robots: { index: false, follow: false },
};

export default function ContactSuccessPage() {
  return (
    <LanguageProvider>
      <ContactSuccessContent />
    </LanguageProvider>
  );
}
