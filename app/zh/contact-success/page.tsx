import type { Metadata } from "next";
import ContactSuccessContent from "@/components/contact-success-content";
import { FixedLanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "咨询申请已收到｜启明遁甲",
  robots: { index: false, follow: false },
};

export default function ChineseContactSuccessPage() {
  return (
    <FixedLanguageProvider lang="zh">
      <ContactSuccessContent />
    </FixedLanguageProvider>
  );
}
