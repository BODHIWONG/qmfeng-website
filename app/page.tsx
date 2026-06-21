"use client";

import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import HeroSimple from "@/components/hero-simple";
import TrustBar from "@/components/trust-bar";
import ServiceCards from "@/components/service-cards";
import QimenDecisionConsultationSection from "@/components/qimen-decision-consultation-section";
import BrandWorldviewSection from "@/components/brand-worldview-section";
import DifferentiationSection from "@/components/differentiation-section";
import QimenMasterSection from "@/components/qimen-master-section";
import MasterIPCoreSection from "@/components/master-ip-core-section";
import CasesSection from "@/components/cases-section";
import TestimonialsSection from "@/components/testimonials-section";
import VideoSection from "@/components/video-section";
import InsightsHomeCTA from "@/components/insights-home-cta";
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
        <BrandWorldviewSection />
        <ServiceCards />
        <QimenDecisionConsultationSection />
        <DifferentiationSection />
        <QimenMasterSection />
        <MasterIPCoreSection />
        <CasesSection />
        <TestimonialsSection />
        <VideoSection />
        <InsightsHomeCTA />
        <LeadCaptureForm />
        <FinalCTA />
        <Footer />
        <FloatingActions />
      </div>
    </LanguageProvider>
  );
}
