export default function SiteStructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.qmfeng.com/#organization",
    name: "Qimen Strategy｜启明遁甲",
    alternateName: [
      "启明遁甲",
      "Qimen Strategy Singapore",
      "Qimen Strategy Strategic Decision Advisory",
      "Qi Men Dun Jia Decision Advisory",
    ],
    legalName: "QIMING FENG SHUI WISDOM PTE. LTD.",
    url: "https://www.qmfeng.com",
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
      jobTitle: "Founder, Qimen Strategy · Strategic Decision Advisor",
      url: "https://www.qmfeng.com/founder",
    },
    description:
      "Qimen Strategy is a Singapore-based strategic decision advisory practice for business owners, leaders and family enterprises. It combines practical business experience with Qimen-based decision analysis to support strategy, people, timing, succession and high-stakes decisions.",
    knowsAbout: [
      "Strategic Decision Advisory",
      "Enterprise Strategic Advisory",
      "Chairman and Founder Advisory",
      "Family Business Succession",
      "Founder-Successor Alignment",
      "Leadership Transition",
      "Business Decision Support",
      "Partnership and People Decisions",
      "Timing and Strategic Transition",
      "Qimen Decision Analysis",
      "Reality × Qimen",
      "Target Theory",
      "Gyroscope Theory",
      "Strategic Environment",
    ],
    serviceType: [
      "Enterprise Strategic Advisory",
      "Chairman and Founder Advisory",
      "Family Business and Succession Advisory",
      "Decision Consultation",
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
    name: "Qimen Strategy Singapore｜启明遁甲",
    alternateName: ["启明遁甲", "Qimen Strategy"],
    url: "https://www.qmfeng.com",
    publisher: { "@id": "https://www.qmfeng.com/#organization" },
    inLanguage: ["en-SG", "zh-SG"],
  };

  return (
    <>
      {[organization, website].map((schema) => (
        <script
          key={schema["@id"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
}
