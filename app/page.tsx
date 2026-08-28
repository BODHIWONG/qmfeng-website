"use client";

import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import HeroSimple from "@/components/hero-simple";
import ServiceCards from "@/components/service-cards";
import RealityQimenSection from "@/components/reality-qimen-section";
import DecisionModelsSection from "@/components/decision-models-section";
import CasesSection from "@/components/cases-section";
import LeadCaptureForm from "@/components/lead-capture-form";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[oklch(0.97_0.012_75)]">
        <Navbar />
        <HeroSimple />
        <ServiceCards />
        <RealityQimenSection />
        <DecisionModelsSection />
        <CasesSection />
        <LeadCaptureForm />
        <FinalCTA />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
