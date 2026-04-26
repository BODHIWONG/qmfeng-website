"use client";

import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import HeroSimple from "@/components/hero-simple";
import TrustBar from "@/components/trust-bar";
import ServiceCards from "@/components/service-cards";
import DifferentiationSection from "@/components/differentiation-section";
import QimenMasterSection from "@/components/qimen-master-section";
import MasterIPCoreSection from "@/components/master-ip-core-section";
import CasesSection from "@/components/cases-section";
import TestimonialsSection from "@/components/testimonials-section";
import VideoSection from "@/components/video-section";
import EnergyClearingSection from "@/components/energy-clearing-section";
import ProductsSection from "@/components/products-section";
import InsightsHomeCTA from "@/components/insights-home-cta";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[oklch(0.97_0.012_75)]">
        <Navbar />

        {/* SECTION 1 — HERO */}
        <HeroSimple />

        {/* SECTION 2 — TRUST BAR */}
        <TrustBar />

        {/* SECTION 3 — FIRST SPLIT USERS BY CORE PROBLEM */}
        <ServiceCards />

        {/* SECTION 4 — WHY MASTER QIMING */}
        <DifferentiationSection />

        {/* SECTION 5 — QI MEN DUN JIA + MASTER QIMING */}
        <QimenMasterSection />

        {/* SECTION 6 — MASTER QIMING PERSONAL IP CORE */}
        <MasterIPCoreSection />

        {/* SECTION 7 — CASE STUDIES */}
        <CasesSection />

        {/* SECTION 8 — TESTIMONIALS */}
        <TestimonialsSection />

        {/* SECTION 9 — VIDEO PROOF */}
        <VideoSection />

        {/* SECTION 10 — SPACE CLEARING AS A SPECIALISED SECTION */}
        <EnergyClearingSection />

        {/* SECTION 11 — PRODUCTS */}
        <ProductsSection />

        {/* NEW — BLOG TRAFFIC MODULE */}
        <InsightsHomeCTA />

        {/* SECTION 12 — STRONG CTA */}
        <FinalCTA />

        <Footer />
        <FloatingActions />
      </div>
    </LanguageProvider>
  );
}
