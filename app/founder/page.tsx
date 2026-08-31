import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";
import FounderProfileContent from "@/components/founder-profile-content";

export const metadata: Metadata = {
  title: "Huang Qiming｜Founder & Strategic Decision Advisor, Qimen Strategy",
  description:
    "Huang Qiming is the Founder and Strategic Decision Advisor of Qimen Strategy in Singapore, combining 18 years of business operations and management experience with 16+ years of practical Qi Men Dun Jia experience.",
  alternates: {
    canonical: "https://www.qmfeng.com/founder",
  },
  openGraph: {
    title: "Huang Qiming | Founder & Strategic Decision Advisor, Qimen Strategy",
    description:
      "Founder of Qimen Strategy in Singapore, providing strategic decision advisory grounded in business experience and Qimen-based decision analysis.",
    url: "https://www.qmfeng.com/founder",
    type: "profile",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Huang Qiming",
    alternateName: ["黄启明"],
    jobTitle: "Founder & Strategic Decision Advisor, Qimen Strategy",
    description:
      "Founder and Strategic Decision Advisor of Qimen Strategy in Singapore, with 18 years of business operations and management experience and more than 16 years of practical Qi Men Dun Jia experience.",
    worksFor: {
      "@id": "https://www.qmfeng.com/#organization",
    },
    image: "https://www.qmfeng.com/master-qiming-about.jpg",
    url: "https://www.qmfeng.com/founder",
  },
};

export default function FounderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }}
      />
      <LanguageProvider>
        <div className="min-h-screen bg-[#050403]">
          <Navbar />
          <FounderProfileContent />
          <Footer />
          <FloatingActions />
        </div>
      </LanguageProvider>
    </>
  );
}
