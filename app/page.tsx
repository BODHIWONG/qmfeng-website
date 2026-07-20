"use client";

import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import HeroSimple from "@/components/hero-simple";
import TrustBar from "@/components/trust-bar";
import ServiceCards from "@/components/service-cards";
import QimenMasterSection from "@/components/qimen-master-section";
import TestimonialsSection from "@/components/testimonials-section";
import CasesSection from "@/components/cases-section";
import DifferentiationSection from "@/components/differentiation-section";
import LeadCaptureForm from "@/components/lead-capture-form";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[oklch(0.97_0.012_75)]">
        <Navbar />
        <HeroSimple />
        <TrustBar />
        <ServiceCards />
        <QimenMasterSection />
        <TestimonialsSection />
        <CasesSection />
        <DifferentiationSection />
        <LeadCaptureForm />
        <FinalCTA />
        <Footer />
        <FloatingActions />
      </div>
    </LanguageProvider>
  );
}
