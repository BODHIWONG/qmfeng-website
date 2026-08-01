import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/language-context";
import PersonalAdvisoryContent from "@/components/personal-advisory-content";

export const metadata: Metadata = {
  title: "Personal Advisory Singapore｜Bazi, Qi Men & Major Decisions",
  description:
    "Private personal advisory in Singapore by Qimen Strategy, including S$168 Bazi Analysis, S$396 Qi Men Dun Jia consultation, S$1,696 Major Decision Consultation, relationship and marriage advisory, date selection, mobile number selection, residential Feng Shui and space clearing.",
  keywords: [
    "Personal advisory Singapore",
    "Bazi analysis Singapore",
    "Bazi consultation Singapore",
    "Qi Men Dun Jia consultation Singapore",
    "Qimen consultation Singapore",
    "Major Decision Consultation Singapore",
    "Relationship marriage consultation Singapore",
    "Auspicious date selection Singapore",
    "Mobile number selection Singapore",
    "Residential Feng Shui Singapore",
    "Space clearing Singapore",
    "八字命理分析新加坡",
    "奇门遁甲咨询新加坡",
    "重大决策咨询新加坡",
    "个人咨询新加坡",
    "感情婚姻咨询",
    "择日服务",
    "吉祥手机号码选择",
    "居家风水布局",
    "空间能量净化",
    "Qimen Strategy",
  ],
  alternates: {
    canonical: "https://www.qmfeng.com/personal-advisory",
  },
  openGraph: {
    title: "Personal Advisory Singapore | Qimen Strategy",
    description:
      "S$168 Bazi Analysis, S$396 Qi Men Dun Jia consultation, S$1,696 Major Decision Consultation and other private personal advisory services in Singapore.",
    url: "https://www.qmfeng.com/personal-advisory",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Qimen Strategy Personal Advisory Services",
  alternateName: "启明遁甲个人咨询服务",
  provider: {
    "@id": "https://www.qmfeng.com/#organization",
  },
  areaServed: ["Singapore", "Malaysia", "Online"],
  url: "https://www.qmfeng.com/personal-advisory",
  description:
    "Private personal advisory including Bazi Analysis, Qi Men Dun Jia consultation, Major Decision Consultation, relationship and marriage advisory, date selection, mobile number selection, residential Feng Shui and space clearing.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Personal Advisory Services",
    itemListElement: [
      "Bazi Analysis",
      "Qi Men Dun Jia Consultation",
      "Major Decision Consultation",
      "Relationship and Marriage Advisory",
      "Auspicious Date Selection",
      "Mobile Number Selection",
      "Residential Feng Shui Alignment",
      "Space Energy Clearing",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
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
