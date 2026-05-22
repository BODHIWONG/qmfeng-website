"use client";

import { FormEvent, useMemo, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";

const WHATSAPP_NUMBER = "6589418791";

const consultationTypes = [
  "Private Qimen Strategy Consultation",
  "Business Decision Advisory",
  "Career Direction Review",
  "Partnership or Investment Review",
  "Feng Shui Alignment Support",
  "Other Key Decision",
];

const timeframes = ["Urgent within 24 hours", "Within 3 days", "This week", "Flexible timing"];

type AppointmentFormState = {
  name: string;
  phone: string;
  email: string;
  consultationType: string;
  decisionArea: string;
  timeframe: string;
  language: string;
  background: string;
};

const initialForm: AppointmentFormState = {
  name: "",
  phone: "",
  email: "",
  consultationType: consultationTypes[0],
  decisionArea: "",
  timeframe: timeframes[1],
  language: "English",
  background: "",
};

function buildMessage(form: AppointmentFormState) {
  return [
    "Hello Master Qiming, I would like to request a private Qimen Strategy appointment.",
    "",
    `Name: ${form.name || "-"}`,
    `WhatsApp / Phone: ${form.phone || "-"}`,
    `Email: ${form.email || "-"}`,
    `Consultation Type: ${form.consultationType || "-"}`,
    `Decision Area: ${form.decisionArea || "-"}`,
    `Preferred Timeframe: ${form.timeframe || "-"}`,
    `Preferred Language: ${form.language || "-"}`,
    "",
    "Background / Question:",
    form.background || "-",
  ].join("\n");
}

function AppointmentPageContent() {
  const [form, setForm] = useState<AppointmentFormState>(initialForm);

  const waUrl = useMemo(() => {
    const message = buildMessage(form);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }, [form]);

  function updateField<K extends keyof AppointmentFormState>(field: K, value: AppointmentFormState[K]) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = buildMessage(form);
    window.sessionStorage.setItem("qimenAppointmentMessage", message);
    window.sessionStorage.setItem("qimenAppointmentWhatsAppUrl", waUrl);
    window.location.href = "/appointment/thank-you";
  }

  return (
    <div className="min-h-screen bg-[oklch(0.97_0.012_75)]">
      <Navbar />
      <main className="pt-28 md:pt-36">
        <section className="border-b border-[oklch(0.88_0.018_70)] pb-14 md:pb-20">
          <div className="container">
            <div className="mx-auto max-w-5xl text-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[oklch(0.60_0.08_65)]">
                Qimen Strategy Appointment · 启明遁甲预约咨询
              </p>
              <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-bold leading-tight text-[oklch(0.15_0.02_60)] md:text-6xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
                Request a Private Qimen Strategy Consultation
              </h1>
              <p className="mx-auto max-w-3xl text-base leading-8 text-[oklch(0.42_0.02_60)] md:text-lg">
                For career, business, partnership, investment, timing and important life decisions. Share your context first so the consultation can be reviewed with clarity.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {["Timing", "Direction", "People", "Risk", "Private Advisory"].map((item) => (
                  <span key={item} className="border border-[oklch(0.88_0.018_70)] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[oklch(0.35_0.02_60)]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container">
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.92fr_1.08fr]">
              <aside className="border border-[oklch(0.88_0.018_70)] bg-black p-8 text-white md:p-10">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[oklch(0.72_0.12_70)]">Before You Decide</p>
                <h2 className="mb-5 text-3xl font-bold leading-tight md:text-4xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
                  See the situation more clearly before your next move.
                </h2>
                <p className="mb-8 text-sm leading-7 text-white/72 md:text-base">
                  This appointment form prepares a structured consultation request and guides you to WhatsApp for direct confirmation.
                </p>
                <div className="space-y-4">
                  {[
                    "Private appointment-based consultation",
                    "Suitable for one important decision or business review",
                    "English and Chinese communication available",
                    "Final scope and fee are confirmed after context review",
                  ].map((item) => (
                    <div key={item} className="flex gap-3 text-sm leading-6 text-white/82">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[oklch(0.72_0.12_70)]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </aside>

              <form onSubmit={handleSubmit} className="border border-[oklch(0.88_0.018_70)] bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.05)] md:p-8">
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-[oklch(0.35_0.02_60)]">Name *</span>
                    <input required value={form.name} onChange={(event) => updateField("name", event.target.value)} className="w-full border border-[oklch(0.84_0.018_70)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[oklch(0.60_0.08_65)]" placeholder="Your name" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-[oklch(0.35_0.02_60)]">WhatsApp / Phone *</span>
                    <input required value={form.phone} onChange={(event) => updateField("phone", event.target.value)} className="w-full border border-[oklch(0.84_0.018_70)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[oklch(0.60_0.08_65)]" placeholder="+65 ..." />
                  </label>
                  <label className="block md:col-span-2">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-[oklch(0.35_0.02_60)]">Email</span>
                    <input type="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} className="w-full border border-[oklch(0.84_0.018_70)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[oklch(0.60_0.08_65)]" placeholder="Optional" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-[oklch(0.35_0.02_60)]">Consultation Type</span>
                    <select value={form.consultationType} onChange={(event) => updateField("consultationType", event.target.value)} className="w-full border border-[oklch(0.84_0.018_70)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[oklch(0.60_0.08_65)]">
                      {consultationTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                    </select>
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-[oklch(0.35_0.02_60)]">Preferred Timeframe</span>
                    <select value={form.timeframe} onChange={(event) => updateField("timeframe", event.target.value)} className="w-full border border-[oklch(0.84_0.018_70)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[oklch(0.60_0.08_65)]">
                      {timeframes.map((timeframe) => <option key={timeframe} value={timeframe}>{timeframe}</option>)}
                    </select>
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-[oklch(0.35_0.02_60)]">Decision Area</span>
                    <input value={form.decisionArea} onChange={(event) => updateField("decisionArea", event.target.value)} className="w-full border border-[oklch(0.84_0.018_70)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[oklch(0.60_0.08_65)]" placeholder="Career, business, partnership, investment..." />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-[oklch(0.35_0.02_60)]">Preferred Language</span>
                    <select value={form.language} onChange={(event) => updateField("language", event.target.value)} className="w-full border border-[oklch(0.84_0.018_70)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[oklch(0.60_0.08_65)]">
                      <option>English</option>
                      <option>中文</option>
                      <option>English and Chinese</option>
                    </select>
                  </label>
                  <label className="block md:col-span-2">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-[oklch(0.35_0.02_60)]">Background / Question *</span>
                    <textarea required rows={6} value={form.background} onChange={(event) => updateField("background", event.target.value)} className="w-full border border-[oklch(0.84_0.018_70)] bg-white px-4 py-3 text-sm leading-7 outline-none transition focus:border-[oklch(0.60_0.08_65)]" placeholder="Briefly describe the decision, situation, timing, options or concerns." />
                  </label>
                </div>
                <button type="submit" className="mt-7 inline-flex w-full items-center justify-center gap-2 bg-[oklch(0.60_0.08_65)] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:opacity-90 md:w-auto">
                  Continue To Appointment Review
                  <ArrowRight size={16} />
                </button>
                <p className="mt-4 text-xs leading-6 text-[oklch(0.45_0.02_60)]">
                  After submitting, you will continue to a confirmation page where you can send the prepared request through WhatsApp.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default function AppointmentPage() {
  return (
    <LanguageProvider>
      <AppointmentPageContent />
    </LanguageProvider>
  );
}
