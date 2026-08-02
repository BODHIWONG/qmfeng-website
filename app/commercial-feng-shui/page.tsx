import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/language-context";
import CommercialFengShuiContent from "@/components/commercial-feng-shui-content";

export const metadata: Metadata = {
  title: "Commercial Feng Shui Singapore｜Office, Factory & Corporate Building",
  description:
    "Commercial Feng Shui in Singapore for offices, factories, industrial facilities, warehouses, corporate buildings and headquarters. Reviews leadership positions, team flow, production, logistics, client areas and business-space alignment.",
  keywords: [
    "Commercial Feng Shui Singapore",
    "Office Feng Shui Singapore",
    "Factory Feng Shui Singapore",
    "Industrial Feng Shui Singapore",
    "Warehouse Feng Shui Singapore",
    "Corporate Building Feng Shui Singapore",
    "Headquarters Feng Shui Singapore",
    "Business Feng Shui Singapore",
    "商业风水新加坡",
    "办公室风水新加坡",
    "工厂风水新加坡",
    "厂房风水",
    "企业办公大楼风水",
    "企业总部风水",
    "启明遁甲商业风水",
  ],
  alternates: {
    canonical: "https://www.qmfeng.com/commercial-feng-shui",
  },
  openGraph: {
    title: "Commercial Feng Shui Singapore | Office, Factory & Corporate Building",
    description:
      "Commercial Feng Shui for offices, factories, industrial facilities, corporate buildings and headquarters in Singapore.",
    url: "https://www.qmfeng.com/commercial-feng-shui",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Feng Shui Advisory",
  alternateName: "商业风水咨询",
  provider: {
    "@id": "https://www.qmfeng.com/#organization",
  },
  areaServed: ["Singapore", "Malaysia"],
  url: "https://www.qmfeng.com/commercial-feng-shui",
  serviceType: [
    "Commercial Feng Shui",
    "Office Feng Shui",
    "Factory and Industrial Feng Shui",
    "Warehouse Feng Shui",
    "Corporate Building Feng Shui",
    "Headquarters Feng Shui",
    "Business Space Alignment",
  ],
  description:
    "Commercial Feng Shui advisory for offices, factories, warehouses, industrial facilities, corporate buildings and headquarters, focused on management, team flow, production, logistics, client experience and practical business-space alignment.",
};

export default function CommercialFengShuiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }}
      />
      <LanguageProvider>
        <CommercialFengShuiContent />
      </LanguageProvider>
    </>
  );
}
