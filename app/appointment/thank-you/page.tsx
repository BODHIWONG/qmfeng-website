"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";

function AppointmentThankYouContent() {
  const [whatsAppUrl, setWhatsAppUrl] = useState("https://wa.me/6589418791");
  const [message, setMessage] = useState("");
  const [leadId, setLeadId] = useState("");
  const [redirectSeconds, setRedirectSeconds] = useState(3);

  useEffect(() => {
    const storedLeadId = window.sessionStorage.getItem("qimenAppointmentLeadId");
    const storedUrl = window.sessionStorage.getItem("qimenAppointmentWhatsAppUrl");
    const storedMessage = window.sessionStorage.getItem("qimenAppointmentMessage");

    if (storedLeadId) setLeadId(storedLeadId);
    if (storedMessage) setMessage(storedMessage);

    if (storedUrl) {
      setWhatsAppUrl(storedUrl);

      const countdown = window.setInterval(() => {
        setRedirectSeconds((current) => Math.max(current - 1, 0));
      }, 1000);

      const redirect = window.setTimeout(() => {
        window.location.href = storedUrl;
      }, 3000);

      return () => {
        window.clearInterval(countdown);
        window.clearTimeout(redirect);
      };
    }
  }, []);

  const copyButtonLabel = useMemo(() => {
    if (!message) return "Prepared Message Saved";
    return "Copy Prepared Message";
  }, [message]);

  async function copyPreparedMessage() {
    if (!message || typeof navigator === "undefined") return;
    await navigator.clipboard.writeText(message);
  }

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
                Appointment Request Saved
              </p>
              <h1 className="mb-5 text-4xl font-bold leading-tight text-[oklch(0.15_0.02_60)] md:text-5xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
                Redirecting You to WhatsApp
              </h1>
              <p className="mx-auto mb-5 max-w-2xl text-base leading-8 text-[oklch(0.42_0.02_60)]">
                Your appointment request has been saved. WhatsApp will open automatically in {redirectSeconds} seconds so you can send the prepared message to Master Qiming.
              </p>

              {leadId && (
                <p className="mx-auto mb-8 inline-flex border border-[oklch(0.88_0.018_70)] bg-[oklch(0.98_0.006_75)] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[oklch(0.38_0.02_60)]">
                  Reference: {leadId}
                </p>
              )}

              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={whatsAppUrl}
                  className="inline-flex items-center justify-center gap-2 bg-[oklch(0.60_0.08_65)] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:opacity-90"
                >
                  Open WhatsApp Now
                  <ArrowRight size={16} />
                </a>
                {message && (
                  <button
                    type="button"
                    onClick={copyPreparedMessage}
                    className="inline-flex items-center justify-center border border-[oklch(0.82_0.018_70)] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[oklch(0.35_0.02_60)] transition hover:bg-[oklch(0.98_0.006_75)]"
                  >
                    {copyButtonLabel}
                  </button>
                )}
              </div>

              {message && (
                <details className="mt-8 text-left">
                  <summary className="cursor-pointer text-xs font-bold uppercase tracking-[0.14em] text-[oklch(0.35_0.02_60)]">
                    View Prepared WhatsApp Message
                  </summary>
                  <pre className="mt-3 max-h-72 overflow-auto whitespace-pre-wrap border border-[oklch(0.88_0.018_70)] bg-[oklch(0.98_0.006_75)] p-4 text-xs leading-6 text-[oklch(0.32_0.02_60)]">
                    {message}
                  </pre>
                </details>
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
