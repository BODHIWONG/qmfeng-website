import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/language-context";
import PersonalAdvisoryContent from "@/components/personal-advisory-content";

export const metadata: Metadata = {
  title: "Personal Advisory Singapore｜Relationship, Date, Number & Home Feng Shui",
  description:
    "Private personal advisory in Singapore by Qimen Strategy for major life decisions, relationship and marriage, auspicious date selection, mobile number selection, residential Feng Shui and space clearing.",
  keywords: [
    "Personal advisory Singapore",
    "Personal decision consultation Singapore",
    "Relationship marriage consultation Singapore",
    "Auspicious date selection Singapore",
    "Mobile number selection Singapore",
    "Residential Feng Shui Singapore",
    "Space clearing Singapore",
    "个人咨询新加坡",
    "感情婚姻咨询",
    "择日服务",
    "吉祥手机号码选择",
    "居家风水布局",
    "空间能量净化",
    "启明老师",
    "Qimen Strategy",
  ],
  alternates: {
    canonical: "https://www.qmfeng.com/personal-advisory",
  },
  openGraph: {
    title: "Personal Advisory Singapore | Qimen Strategy",
    description:
      "Major decisions, relationship and marriage advisory, auspicious date selection, mobile number selection, residential Feng Shui and space clearing in Singapore.",
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
    "Private personal advisory for major life decisions, relationship and marriage, auspicious date selection, mobile number selection, residential Feng Shui and space clearing.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Personal Advisory Services",
    itemListElement: [
      "Personal Strategic Decision Advisory",
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
