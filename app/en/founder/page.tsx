import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";
import FounderProfileContent from "@/components/founder-profile-content";

export const metadata: Metadata = {
  title: "Huang Qiming｜Founder of Qimen Strategy",
  description:
    "Huang Qiming is the Founder of Qimen Strategy, with 16+ years of practical Qi Men Dun Jia experience and 18 years of business operations experience.",
  alternates: {
    canonical: "https://www.qmfeng.com/en/founder",
    languages: {
      "en-SG": "https://www.qmfeng.com/en/founder",
      "zh-SG": "https://www.qmfeng.com/zh/founder",
    },
  },
};

export default function EnglishFounderPage() {
  return (
    <LanguageProvider initialLang="en">
      <div className="min-h-screen bg-[#050403]">
        <Navbar />
        <FounderProfileContent />
        <Footer />
        <FloatingActions />
      </div>
    </LanguageProvider>
  );
}
