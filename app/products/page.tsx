"use client";

import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import ProductsSection from "@/components/products-section";
import ConsultationForm from "@/components/consultation-form";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";

export default function ProductsPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[oklch(0.97_0.012_75)]">
        <Navbar />
        <main className="pt-20">
          <ProductsSection />
          <section className="bg-[oklch(0.08_0.02_60)] py-16 md:py-24">
            <div className="container">
              <ConsultationForm />
            </div>
          </section>
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </LanguageProvider>
  );
}
