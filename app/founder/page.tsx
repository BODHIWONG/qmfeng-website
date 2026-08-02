import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";
import FounderProfileContent from "@/components/founder-profile-content";

export const metadata: Metadata = {
  title: "Huang Qiming｜Founder of Qimen Strategy Singapore",
  description:
    "Huang Qiming is the Founder of Qimen Strategy in Singapore, with 16+ years of practical Qi Men Dun Jia experience and 18 years of business operations and management experience.",
  alternates: {
    canonical: "https://www.qmfeng.com/founder",
  },
  openGraph: {
    title: "Huang Qiming | Founder of Qimen Strategy",
    description:
      "Founder, business strategic advisor and practical Qi Men Dun Jia instructor in Singapore.",
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
    alternateName: ["黄启明", "启明老师"],
    jobTitle: "Founder of Qimen Strategy and Business Strategic Advisor",
    description:
      "Founder of Qimen Strategy in Singapore with more than 16 years of practical Qi Men Dun Jia experience and 18 years of business operations and management experience.",
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
