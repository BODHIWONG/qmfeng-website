export default function SiteStructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.qmfeng.com/#organization",
    name: "启明遁甲 Qimen Strategy",
    alternateName: [
      "Qimen Strategy Singapore",
      "Singapore Qi Men Dun Jia Strategic Decision Advisory",
      "新加坡奇门遁甲战略决策顾问",
      "Qi Men Dun Jia Singapore",
      "Qimen Dunjia Singapore",
      "Qiming Feng Shui Wisdom"
    ],
    legalName: "Qiming Feng Shui Wisdom Pte. Ltd.",
    url: "https://www.qmfeng.com",
    logo: "https://www.qmfeng.com/logo-qimen-strategy.jpg",
    telephone: "+65 89418791",
    priceRange: "S$980+",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Blk 210 New Upper Changi Road #01-729",
      addressLocality: "Singapore",
      postalCode: "460210",
      addressCountry: "SG"
    },
    areaServed: ["Singapore", "Malaysia"],
    founder: {
      "@type": "Person",
      name: "Huang Qiming",
      alternateName: ["黄启明", "Qiming Huang"],
      jobTitle: "Founder, Qimen Strategy"
    },
    description:
      "启明遁甲 Qimen Strategy is a Singapore-based Qi Men Dun Jia strategic decision advisory brand applying Qi Men Dun Jia, business strategy analysis, Feng Shui alignment and people assessment for business owners, founders, executives, investors and individuals before major decisions.",
    knowsAbout: [
      "Qi Men Dun Jia",
      "Qimen Dunjia",
      "Qimen Strategy",
      "Strategic Decision Advisory",
      "Business Strategy",
      "Investment Timing",
      "Partnership Assessment",
      "Office Feng Shui",
      "Residential Feng Shui",
      "Feng Shui Alignment"
    ],
    serviceType: [
      "Qi Men Dun Jia Consultation",
      "Qimen Strategy Advisory",
      "Enterprise Strategic Decision Advisory",
      "Business Decision Consulting",
      "Investment Timing Analysis",
      "People and Partnership Assessment",
      "Career Direction Consultation",
      "Office Feng Shui Consultation",
      "Residential Feng Shui Consultation"
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        opens: "10:00",
        closes: "20:00"
      }
    ]
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.qmfeng.com/#website",
    name: "Qimen Strategy Singapore｜启明遁甲",
    url: "https://www.qmfeng.com",
    publisher: {
      "@id": "https://www.qmfeng.com/#organization"
    },
    inLanguage: ["en-SG", "zh-SG"]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
