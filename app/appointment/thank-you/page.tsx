"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";

function AppointmentThankYouContent() {
  const [whatsAppUrl, setWhatsAppUrl] = useState("https://wa.me/6589418791");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedUrl = window.sessionStorage.getItem("qimenAppointmentWhatsAppUrl");
    const storedMessage = window.sessionStorage.getItem("qimenAppointmentMessage");

    if (storedUrl) setWhatsAppUrl(storedUrl);
    if (storedMessage) setMessage(storedMessage);
  }, []);

  return (
    <div className="min-h-screen bg-[oklch(0.97_0.012_75)]">
      <Navbar />
      <main className="pt-28 md:pt-36">
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl border border-[oklch(0.88_0.018_70)] bg-white p-8 text-center shadow-[0_18px_50px_rgba(0,0,0,0.06)] md:p-12">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[oklch(0.96_0.03_85)] text-[oklch(0.60_0.08_65)]">
                <CheckCircle2 size={34} />
              </div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[oklch(0.60_0.08_65)]">
                Appointment Request Prepared
              </p>
              <h1 className="mb-5 text-4xl font-bold leading-tight text-[oklch(0.15_0.02_60)] md:text-5xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
                Continue To WhatsApp Confirmation
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-base leading-8 text-[oklch(0.42_0.02_60)]">
                Your appointment request has been prepared. Please send it through WhatsApp so Master Qiming can review your context and confirm the next step.
              </p>

              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[oklch(0.60_0.08_65)] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:opacity-90"
              >
                Send Request On WhatsApp
                <ArrowRight size={16} />
              </a>

              {message && (
                <div className="mt-8 text-left">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[oklch(0.35_0.02_60)]">
                    Prepared Message
                  </p>
                  <pre className="max-h-72 overflow-auto whitespace-pre-wrap border border-[oklch(0.88_0.018_70)] bg-[oklch(0.98_0.006_75)] p-4 text-xs leading-6 text-[oklch(0.32_0.02_60)]">
                    {message}
                  </pre>
                </div>
              )}

              <div className="mt-8">
                <Link href="/decision" className="text-sm font-semibold text-[oklch(0.42_0.02_60)] underline underline-offset-4">
                  Return to Qimen Strategy page
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default function AppointmentThankYouPage() {
  return (
    <LanguageProvider>
      <AppointmentThankYouContent />
    </LanguageProvider>
  );
}
