"use client";

import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import HeroSimple from "@/components/hero-simple";
import TrustBar from "@/components/trust-bar";
import ServiceCards from "@/components/service-cards";
import DifferentiationSection from "@/components/differentiation-section";
import CasesSection from "@/components/cases-section";
import TestimonialsSection from "@/components/testimonials-section";
import VideoSection from "@/components/video-section";
import ProductsSection from "@/components/products-section";
import EnergyClearingSection from "@/components/energy-clearing-section";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[oklch(0.97_0.012_75)]">
        <Navbar />
        
        {/* SECTION 1 — HERO (Full Screen) */}
        {/* Fix Your Luck Before It Gets Worse + 3 CTAs + Urgency */}
        <HeroSimple />
        
        {/* SECTION 2 — TRUST BAR (horizontal) */}
        {/* 16+ Years | 5,000+ Consultations | SG & SEA | Proven Results */}
        <TrustBar />
        
        {/* SECTION 3 — CORE SERVICES (3 cards with pricing) */}
        {/* Wealth Strategy | Emotional Healing | Space Reset — From $288 each */}
         <EnergyClearingSection />
        <ServiceCards />
        {/* SECTION 4 — DIFFERENTIATION */}
        {/* This Is NOT Traditional Feng Shui — Strategic System */}
        <DifferentiationSection />
        
        {/* SECTION 5 — RESULTS / CASE STUDIES */}
        <CasesSection />
        
        {/* SECTION 6 — REAL CLIENT TESTIMONIALS + SCREENSHOTS */}
        <TestimonialsSection />
        
        {/* SECTION 7 — VIDEO TESTIMONIALS */}
        <VideoSection />
        
        {/* SECTION 8 — PRODUCTS */}
        {/* Energy-Activated Products From $28 */}
        <ProductsSection />
        {/* SECTION 9 — FINAL CTA */}
        {/* Don't Wait Until Problems Get Worse */}
        <FinalCTA />
        
        <Footer />
        <FloatingActions />
      </div>
    </LanguageProvider>
  );
}
