import type { Metadata } from "next";
import ChairmanFounderContent from "@/components/chairman-founder-content";
import { LanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "Chairman & Founder Advisory | Qimen Strategy Singapore",
  description:
    "Independent and confidential strategic decision support for founders, business owners and senior decision-makers facing high-stakes choices.",
};

export default function ChairmanFounderAdvisoryPage() {
  return (
    <LanguageProvider>
      <ChairmanFounderContent />
    </LanguageProvider>
  );
}
