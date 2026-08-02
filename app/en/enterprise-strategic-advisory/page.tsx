import type { Metadata } from "next";
import EnterpriseStrategicAdvisoryPage from "@/app/enterprise-strategic-advisory/page";
import { LanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "Business Strategic Advisory Singapore｜Qimen Strategy",
  description:
    "Private business strategic advisory for founders, business owners and executives facing growth bottlenecks, transition, people, partnership and major operating decisions.",
  alternates: {
    canonical: "https://www.qmfeng.com/en/enterprise-strategic-advisory",
    languages: {
      "en-SG": "https://www.qmfeng.com/en/enterprise-strategic-advisory",
      "zh-SG": "https://www.qmfeng.com/zh/enterprise-strategic-advisory",
    },
  },
};

export default function EnglishEnterpriseAdvisoryPage() {
  return (
    <LanguageProvider initialLang="en">
      <EnterpriseStrategicAdvisoryPage />
    </LanguageProvider>
  );
}
