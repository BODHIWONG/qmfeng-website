import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/language-context";
import PersonalAdvisoryContent from "@/components/personal-advisory-content";

export const metadata: Metadata = {
  title: "Decision Consultation Singapore｜Qimen Strategy",
  description:
    "Private decision consultation in Singapore for business, career, partnerships, relationships, relocation and major life decisions. Choose S$398, S$698 or S$998 according to decision complexity.",
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
      "Private decision consultation at S$398, S$698 or S$998, matched to the complexity and impact of the decision rather than time alone.",
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
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Decision Consultation",
    itemListElement: [
      { name: "Essential Decision Consultation", price: "398", currency: "SGD" },
      { name: "Comprehensive Decision Consultation", price: "698", currency: "SGD" },
      { name: "Strategic Decision Consultation", price: "998", currency: "SGD" },
    ].map((item) => ({
      "@type": "Offer",
      price: item.price,
      priceCurrency: item.currency,
      itemOffered: { "@type": "Service", name: item.name },
    })),
  },
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
