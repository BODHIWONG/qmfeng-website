import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/language-context";
import PersonalAdvisoryContent from "@/components/personal-advisory-content";

export const metadata: Metadata = {
  title: "Decision Consultation Singapore｜Qimen Strategy",
  description:
    "Private decision consultation in Singapore for business, career, partnerships, relationships, relocation and major life decisions. Service scope and fees are confirmed after an initial enquiry.",
  keywords: [
    "Decision consultation Singapore",
    "Strategic decision advisory Singapore",
    "Qi Men Dun Jia decision consultation Singapore",
    "Qimen consultation Singapore",
    "Business decision consultation Singapore",
    "Career decision consultation Singapore",
    "Partnership decision consultation Singapore",
    "Major life decision consultation Singapore",
    "重大决策咨询新加坡",
    "奇门遁甲决策咨询",
    "个人决策咨询",
    "事业决策咨询",
    "商业决策咨询",
    "Qimen Strategy",
  ],
  alternates: {
    canonical: "https://www.qmfeng.com/personal-advisory",
  },
  openGraph: {
    title: "Decision Consultation Singapore | Qimen Strategy",
    description:
      "Decision consultation for personal matters, business and complex decisions. Service scope and fees are confirmed after an initial enquiry.",
    url: "https://www.qmfeng.com/personal-advisory",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Qimen Strategy Decision Consultation",
  alternateName: "启明遁甲决策咨询",
  provider: {
    "@id": "https://www.qmfeng.com/#organization",
  },
  areaServed: ["Singapore", "Malaysia", "Online"],
  url: "https://www.qmfeng.com/personal-advisory",
  description:
    "Private decision consultation for business, career, partnerships, relationships, relocation and major life decisions, using practical context together with Qimen-based decision analysis.",
  serviceType: ["Personal Consultation", "Business Consultation", "Complex Decision Consultation"],
};

export default function PersonalAdvisoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <LanguageProvider>
        <PersonalAdvisoryContent />
      </LanguageProvider>
    </>
  );
}
