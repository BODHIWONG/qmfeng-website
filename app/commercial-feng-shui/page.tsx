import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/language-context";
import CommercialFengShuiContent from "@/components/commercial-feng-shui-content";

export const metadata: Metadata = {
  title: "Commercial Feng Shui Singapore｜Office Feng Shui Advisory",
  description:
    "Commercial Feng Shui and Office Feng Shui advisory in Singapore, focused on office entrance, leadership position, workstations, meeting areas, team flow and client experience.",
  keywords: [
    "Commercial Feng Shui Singapore",
    "Office Feng Shui Singapore",
    "Business Feng Shui Singapore",
    "Office layout Feng Shui",
    "商业风水新加坡",
    "办公室风水新加坡",
    "企业风水布局",
    "启明遁甲商业风水",
  ],
  alternates: {
    canonical: "https://www.qmfeng.com/commercial-feng-shui",
  },
  openGraph: {
    title: "Commercial Feng Shui Singapore | Office Feng Shui Advisory",
    description:
      "Office-focused Commercial Feng Shui for business owners, leadership teams and commercial spaces in Singapore.",
    url: "https://www.qmfeng.com/commercial-feng-shui",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Feng Shui and Office Feng Shui Advisory",
  alternateName: "商业风水与办公室风水咨询",
  provider: {
    "@id": "https://www.qmfeng.com/#organization",
  },
  areaServed: ["Singapore", "Malaysia"],
  url: "https://www.qmfeng.com/commercial-feng-shui",
  serviceType: [
    "Commercial Feng Shui",
    "Office Feng Shui",
    "Business Space Alignment",
  ],
  description:
    "Commercial Feng Shui advisory focused on office layout, leadership positions, workstations, meeting areas, client flow and business-space alignment.",
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
