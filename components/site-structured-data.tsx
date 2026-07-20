export default function SiteStructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.qmfeng.com/#organization",
    name: "启明遁甲决策智库 Qimen Strategy",
    alternateName: [
      "启明遁甲",
      "Qimen Strategy Singapore",
      "Qimen Strategy Academy",
      "Qi Men Dun Jia Singapore",
      "Qimen Strategy Founder Advisory",
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
    areaServed: ["Singapore", "Malaysia", "Online"],
    founder: {
      "@type": "Person",
      name: "Huang Qiming",
      alternateName: ["黄启明", "Qiming Huang"],
      jobTitle: "Founder, Qi Men Instructor & Strategic Decision Advisor, Qimen Strategy",
      url: "https://www.qmfeng.com/founder",
    },
    description:
      "Qimen Strategy is a Singapore-based Qi Men Dun Jia academy and strategic advisory practice founded by Huang Qiming. Weekly courses are the primary entry point, while founder advisory supports clients facing real business, investment, people, career, relationship and major life decisions.",
    knowsAbout: [
      "Qi Men Dun Jia",
      "Qi Men Dun Jia Foundation Course",
      "Weekly Qi Men Dun Jia Course Singapore",
      "Qi Men Dun Jia Education",
      "Founder Business Advisory",
      "Entrepreneur Strategic Advisory",
      "Business Decision Support",
      "Founder Wealth Cycle Review",
      "Investment Decision Support",
      "Partnership Risk Assessment",
      "Executive Career Transition",
      "Mentor and Strategic Network Planning",
      "Relationship Decision Clarity",
      "Major Life Decision Support",
      "Strategic Feng Shui",
      "People and Partnership Assessment",
    ],
    serviceType: [
      "Qi Men Dun Jia Foundation Course",
      "Weekly Qi Men Dun Jia Course Singapore",
      "Founder Business Advisory",
      "90-Day Founder Advisory Trial",
      "Annual Founder Advisory Retainer",
      "Wealth Cycle and Investment Decision Advisory",
      "Executive Career Transition Advisory",
      "Major Personal Decision Consultation",
      "Relationship Decision Clarity",
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

  const academy = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "https://www.qmfeng.com/#academy",
    name: "Qimen Strategy Academy｜启明遁甲研修",
    url: "https://www.qmfeng.com/courses",
    parentOrganization: { "@id": "https://www.qmfeng.com/#organization" },
    description:
      "The primary entry pathway of Qimen Strategy, providing structured Qi Men Dun Jia courses in Singapore, including a two-day foundation course with regular Saturday and Sunday intakes.",
    address: { "@id": "https://www.qmfeng.com/#organization" },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.qmfeng.com/#website",
    name: "Qimen Strategy Singapore｜启明遁甲决策智库",
    alternateName: ["启明遁甲", "Qimen Strategy Academy"],
    url: "https://www.qmfeng.com",
    publisher: { "@id": "https://www.qmfeng.com/#organization" },
    inLanguage: ["en-SG", "zh-SG"],
  };

  return (
    <>
      {[organization, academy, website].map((schema) => (
        <script
          key={schema["@id"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
}
