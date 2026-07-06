export default function SiteStructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.qmfeng.com/#organization",
    name: "启明遁甲 Qimen Strategy",
    alternateName: [
      "Qimen Strategy Singapore",
      "Singapore Qi Men Dun Jia Business Decision Advisory",
      "新加坡奇门遁甲企业决策顾问",
      "Qi Men Dun Jia Singapore",
      "Qimen Dunjia Singapore",
      "Qi Men Dun Jia Course Singapore",
      "Qimen Strategy Courses Singapore",
      "Qiming Feng Shui Wisdom"
    ],
    legalName: "Qiming Feng Shui Wisdom Pte. Ltd.",
    url: "https://www.qmfeng.com",
    logo: "https://www.qmfeng.com/logo-qimen-strategy.jpg",
    telephone: "+65 8959 3499",
    priceRange: "From S$396",
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
      alternateName: ["Master Huang Qiming", "黄启明", "启明大师", "Qiming Huang"],
      jobTitle: "Founder, Qimen Strategy | Qi Men Dun Jia Business Decision Advisor"
    },
    description:
      "启明遁甲 Qimen Strategy is a Singapore-based Qi Men Dun Jia business decision advisory brand led by Master Huang Qiming, applying Qi Men Dun Jia, business judgment, Feng Shui alignment and people assessment for business owners, founders, executives, investors and individuals before major decisions.",
    knowsAbout: [
      "Qi Men Dun Jia",
      "Qimen Dunjia",
      "Qimen Strategy",
      "Qimen Strategy Courses Singapore",
      "Qi Men Dun Jia Course Singapore",
      "Qi Men Dun Jia Foundation Course",
      "Number Energy Course Singapore",
      "Phone Number Selection Course",
      "Bazi Course Singapore",
      "Bazi Life Structure",
      "Feng Shui Course Singapore",
      "Feng Shui Layout Course",
      "Qi Men Dun Jia Business Decision Advisory",
      "Strategic Decision Advisory",
      "Enterprise Decision Advisory",
      "Enterprise Strategic Health Diagnostic",
      "Business Strategy",
      "Investment Timing",
      "Partnership Assessment",
      "Life and Career Decision Clarity",
      "Office Feng Shui",
      "Residential Feng Shui",
      "Feng Shui Alignment"
    ],
    serviceType: [
      "Qimen Decision Consultation From S$396",
      "Qimen Strategy Courses",
      "Qi Men Dun Jia Foundation Course",
      "Qi Men Dun Jia Course Singapore",
      "Number Energy and Phone Number Selection Course",
      "Bazi Life Structure Foundation Course",
      "Feng Shui Layout and Space Alignment Course",
      "Enterprise Strategic Health Diagnostic From S$3,996",
      "Qi Men Dun Jia Consultation",
      "Qimen Strategy Advisory",
      "Enterprise Strategic Decision Advisory",
      "Business Decision Consulting",
      "Investment Timing Analysis",
      "People and Partnership Assessment",
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
