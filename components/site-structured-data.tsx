export default function SiteStructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "EducationalOrganization"],
    "@id": "https://www.qmfeng.com/#organization",
    name: "启明遁甲决策智库 Qimen Strategy",
    alternateName: [
      "启明遁甲",
      "Qimen Strategy Singapore",
      "Qimen Strategy Advisory",
      "Qimen Strategy Academy",
      "Qi Men Dun Jia Course Singapore",
      "Qiming Feng Shui Wisdom",
    ],
    legalName: "Qiming Feng Shui Wisdom Pte. Ltd.",
    url: "https://www.qmfeng.com",
    logo: "https://www.qmfeng.com/logo-qimen-strategy.jpg",
    telephone: "+65 8959 3499",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Blk 210 New Upper Changi Road #01-729",
      addressLocality: "Singapore",
      postalCode: "460210",
      addressCountry: "SG",
    },
    areaServed: ["Singapore", "Malaysia"],
    founder: {
      "@type": "Person",
      name: "Huang Qiming",
      alternateName: ["黄启明", "Qiming Huang"],
      jobTitle: "Founder & Strategic Decision Advisor, Qimen Strategy",
    },
    description:
      "Qimen Strategy is a Singapore-based strategic decision advisory and education practice serving founders, executives and individuals before major decisions, while offering weekly Qi Men Dun Jia foundation courses.",
    knowsAbout: [
      "Qi Men Dun Jia",
      "Strategic Decision Advisory",
      "Founder Business Advisory",
      "Business Bottleneck Diagnosis",
      "Investment Decision Support",
      "Executive Career Transition",
      "People and Partnership Assessment",
      "Relationship Decision Clarity",
      "Qi Men Dun Jia Education",
      "Qi Men Dun Jia Foundation Course",
      "Feng Shui Alignment",
    ],
    serviceType: [
      "Founder Business Advisory",
      "90-Day Founder Strategic Support",
      "Wealth Cycle and Investment Decision Support",
      "Executive Career Transition Advisory",
      "Relationship and Major Life Decision Support",
      "Single Qimen Decision Consultation",
      "Weekly Qi Men Dun Jia Foundation Course",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "10:00",
        closes: "20:00",
      },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.qmfeng.com/#website",
    name: "Qimen Strategy Singapore｜启明遁甲决策智库",
    alternateName: "启明遁甲",
    url: "https://www.qmfeng.com",
    publisher: { "@id": "https://www.qmfeng.com/#organization" },
    inLanguage: ["en-SG", "zh-SG"],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website).replace(/</g, "\\u003c") }} />
    </>
  );
}
