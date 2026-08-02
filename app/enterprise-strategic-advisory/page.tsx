import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/language-context";
import EnterpriseAdvisoryContent from "@/components/enterprise-advisory-content";

export const metadata: Metadata = {
  title: "Business Strategic Advisory Singapore｜Qimen Strategy",
  description:
    "Private business strategic advisory for founders, business owners and executives facing growth bottlenecks, transition, people, partnership and major operating decisions.",
  alternates: { canonical: "https://www.qmfeng.com/enterprise-strategic-advisory" },
  openGraph: {
    title: "Business Strategic Advisory Singapore | Qimen Strategy",
    description:
      "Strategic decision support for founders navigating business bottlenecks, transition, people, partnerships and high-stakes operating decisions.",
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
