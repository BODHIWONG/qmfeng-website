import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/language-context";
import EnterpriseAdvisoryContent from "@/components/enterprise-advisory-content";

export const metadata: Metadata = {
  title: "Long-term Business Advisory Singapore | Qimen Strategy",
  description:
    "Ongoing advisory for Singapore business owners navigating strategy, major decisions, partnerships, key people, organisational change and execution reviews.",
  alternates: { canonical: "https://www.qmfeng.com/enterprise-strategic-advisory" },
  openGraph: {
    title: "Long-term Business Advisory Singapore | Qimen Strategy",
    description:
      "Long-term strategic decision support for founders navigating growth, people, partnerships, organisational change and major operating decisions.",
    url: "https://www.qmfeng.com/enterprise-strategic-advisory",
    type: "website",
  },
};

export default function EnterpriseStrategicAdvisoryPage() {
  return (
    <LanguageProvider>
      <EnterpriseAdvisoryContent />
    </LanguageProvider>
  );
}
