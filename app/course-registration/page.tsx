"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  CalendarDays,
  Check,
  CheckCircle2,
  Copy,
  CreditCard,
  Loader2,
  MapPin,
  MessageCircle,
  Users,
} from "lucide-react";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";

const WHATSAPP_NUMBER = "6589593499";
const COURSE_FEE = 990;
const CURRENT_INTAKE = "19–20 September 2026";
const COURSE_DAYS = "Saturday & Sunday";
const COURSE_LOCATION = "Blk 210 New Upper Changi Road #01-729, Singapore 460210";
const COMPANY_NAME = "QIMING FENG SHUI WISDOM PTE. LTD.";
const PAYNOW_UEN = "202313112R";

type CourseRegistrationForm = {
  registrantName: string;
  phone: string;
  email: string;
  participantCount: number;
  participantNames: string;
  courseDate: string;
  paymentStatus: string;
  amountPaid: string;
  paymentReference: string;
  notes: string;
};

const initialForm: CourseRegistrationForm = {
  registrantName: "",
  phone: "",
  email: "",
  participantCount: 1,
  participantNames: "",
  courseDate: CURRENT_INTAKE,
  paymentStatus: "I will pay shortly",
  amountPaid: "",
  paymentReference: "",
  notes: "",
};

function collectUtm() {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);
  const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "gbraid", "wbraid"];

  return Object.fromEntries(
    utmKeys
      .map((key) => [key, params.get(key) || ""] as const)
      .filter(([, value]) => value),
  );
}

function buildWhatsAppMessage(form: CourseRegistrationForm, registrationId: string) {
  const expectedTotal = form.participantCount * COURSE_FEE;

  return [
    "Hello, I have submitted the Qi Men Dun Jia Foundation Course registration form.",
    "",
    `Registration Reference: ${registrationId}`,
    `Registrant Name: ${form.registrantName}`,
    `WhatsApp / Phone: ${form.phone}`,
    `Course Date: ${form.courseDate}`,
    `Course Days: ${COURSE_DAYS}`,
    `Location: ${COURSE_LOCATION}`,
    `Number of Participants: ${form.participantCount}`,
    "Participant Name(s):",
    form.participantNames,
    "",
    `Course Fee: S$${COURSE_FEE.toLocaleString("en-SG")} per participant`,
    `Expected Total: S$${expectedTotal.toLocaleString("en-SG")}`,
    `Payment Status: ${form.paymentStatus}`,
    `Amount Paid: ${form.amountPaid ? `S$${form.amountPaid}` : "-"}`,
    `PayNow Reference: ${form.paymentReference || "-"}`,
    form.notes ? `Notes: ${form.notes}` : "",
    "",
    `PayNow UEN: ${PAYNOW_UEN}`,
    COMPANY_NAME,
    "",
    "Sent from: qmfeng.com/course-registration",
  ]
    .filter(Boolean)
    .join("\n");
}

function CourseRegistrationPageContent() {
  const [form, setForm] = useState<CourseRegistrationForm>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [registrationId, setRegistrationId] = useState("");
  const [copied, setCopied] = useState(false);

  const expectedTotal = useMemo(() => form.participantCount * COURSE_FEE, [form.participantCount]);

  function updateField<K extends keyof CourseRegistrationForm>(field: K, value: CourseRegistrationForm[K]) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function copyPayNow() {
    await navigator.clipboard.writeText(PAYNOW_UEN);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/course-registration", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...form,
          pageUrl: window.location.href,
          referrer: document.referrer,
          userAgent: window.navigator.userAgent,
          utm: collectUtm(),
        }),
      });

      const result = (await response.json()) as { ok?: boolean; registrationId?: string; error?: string };

      if (!response.ok || !result.ok || !result.registrationId) {
        throw new Error(result.error || "Unable to submit the course registration.");
      }

      setRegistrationId(result.registrationId);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to submit the course registration.";
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  const waUrl = registrationId
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsAppMessage(form, registrationId))}`
    : "#";

  if (registrationId) {
    return (
      <div className="min-h-screen bg-[oklch(0.97_0.012_75)]">
        <Navbar />
        <main className="pt-28 md:pt-36">
          <section className="py-14 md:py-24">
            <div className="container">
              <div className="mx-auto max-w-3xl border border-[oklch(0.88_0.018_70)] bg-white p-7 text-center shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:p-12">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[oklch(0.60_0.08_65)]">
                  Registration Submitted · 报名资料已提交
                </p>
                <h1 className="mb-5 text-4xl font-bold leading-tight text-[oklch(0.15_0.02_60)] md:text-5xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
                  Thank You for Registering
                </h1>
                <p className="mx-auto mb-7 max-w-2xl text-base leading-8 text-[oklch(0.42_0.02_60)]">
                  Your registration has been recorded. Complete the PayNow payment, then send the payment screenshot through WhatsApp for seat confirmation.
                </p>

                <div className="mb-7 border border-[oklch(0.88_0.018_70)] bg-[oklch(0.98_0.01_75)] p-6 text-left">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-[oklch(0.50_0.04_65)]">Registration Reference</p>
                      <p className="mt-2 font-semibold text-[oklch(0.18_0.02_60)]">{registrationId}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-[oklch(0.50_0.04_65)]">Course Total</p>
                      <p className="mt-2 text-2xl font-bold text-[oklch(0.60_0.08_65)]">S${expectedTotal.toLocaleString("en-SG")}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-[oklch(0.50_0.04_65)]">Course Date</p>
                      <p className="mt-2 font-semibold text-[oklch(0.18_0.02_60)]">{CURRENT_INTAKE}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-[oklch(0.50_0.04_65)]">Course Days</p>
                      <p className="mt-2 font-semibold text-[oklch(0.18_0.02_60)]">{COURSE_DAYS}</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-[oklch(0.50_0.04_65)]">PayNow</p>
                      <p className="mt-2 font-semibold text-[oklch(0.18_0.02_60)]">{COMPANY_NAME}</p>
                      <div className="mt-2 flex flex-wrap items-center gap-3">
                        <span className="text-xl font-bold text-[oklch(0.60_0.08_65)]">UEN: {PAYNOW_UEN}</span>
                        <button onClick={copyPayNow} type="button" className="inline-flex items-center gap-2 border border-[oklch(0.82_0.025_70)] bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[oklch(0.35_0.02_60)]">
                          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                          {copied ? "Copied" : "Copy UEN"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <a href={waUrl} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 bg-[#25D366] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:opacity-90 md:w-auto">
                  <MessageCircle className="h-5 w-5" />
                  Send Payment Screenshot on WhatsApp
                </a>
                <p className="mt-4 text-xs leading-6 text-[oklch(0.48_0.02_60)]">
                  Your place is confirmed after payment has been received and verified.
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <FloatingActions />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[oklch(0.97_0.012_75)]">
      <Navbar />
      <main className="pt-28 md:pt-36">
        <section className="border-b border-[oklch(0.88_0.018_70)] pb-14 md:pb-20">
          <div className="container">
            <div className="mx-auto max-w-5xl text-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[oklch(0.60_0.08_65)]">
                Qimen Strategy Course Registration · 启明遁甲课程报名
              </p>
              <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-bold leading-tight text-[oklch(0.15_0.02_60)] md:text-6xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
                Qi Men Dun Jia Foundation Course
              </h1>
              <p className="mx-auto max-w-3xl text-base leading-8 text-[oklch(0.42_0.02_60)] md:text-lg">
                19–20 September 2026 · Saturday & Sunday · S$990 per participant
              </p>
              <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-[oklch(0.48_0.02_60)] md:text-base">
                Suitable for complete beginners. Complete the registration form and make payment by PayNow to confirm your place.
              </p>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container">
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.92fr_1.08fr]">
              <aside className="border border-[oklch(0.88_0.018_70)] bg-black p-8 text-white md:p-10">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[oklch(0.72_0.12_70)]">Course & Payment Details</p>
                <h2 className="mb-7 text-3xl font-bold leading-tight md:text-4xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
                  Register for the current intake.
                </h2>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <CalendarDays className="mt-1 h-5 w-5 shrink-0 text-[oklch(0.72_0.12_70)]" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/55">Course Date</p>
                      <p className="mt-2 text-xl font-bold text-[oklch(0.78_0.12_70)]">{CURRENT_INTAKE}</p>
                      <p className="mt-1 text-sm text-white/70">{COURSE_DAYS}｜周六、周日</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CreditCard className="mt-1 h-5 w-5 shrink-0 text-[oklch(0.72_0.12_70)]" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/55">Course Fee</p>
                      <p className="mt-1 text-3xl font-bold text-[oklch(0.78_0.12_70)]">S$990</p>
                      <p className="mt-1 text-sm text-white/70">per participant</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-[oklch(0.72_0.12_70)]" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/55">Location</p>
                      <p className="mt-2 text-sm font-semibold leading-6 text-white">{COURSE_LOCATION}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Users className="mt-1 h-5 w-5 shrink-0 text-[oklch(0.72_0.12_70)]" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/55">PayNow Company</p>
                      <p className="mt-2 text-sm font-semibold leading-6 text-white">{COMPANY_NAME}</p>
                      <div className="mt-2 flex flex-wrap items-center gap-3">
                        <p className="text-2xl font-bold text-[oklch(0.78_0.12_70)]">UEN: {PAYNOW_UEN}</p>
                        <button onClick={copyPayNow} type="button" className="inline-flex items-center gap-2 border border-white/20 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-white/10">
                          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                          {copied ? "Copied" : "Copy"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border border-white/15 bg-white/5 p-5 text-sm leading-7 text-white/75">
                  Use the registrant’s full name as the PayNow reference. After submitting, send the payment screenshot through WhatsApp. Places are confirmed after payment verification.
                </div>
              </aside>

              <form onSubmit={handleSubmit} className="border border-[oklch(0.88_0.018_70)] bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.05)] md:p-8">
                <div className="mb-7">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[oklch(0.60_0.08_65)]">Student Information · 学员资料</p>
                  <h2 className="mt-2 text-3xl font-bold text-[oklch(0.15_0.02_60)]" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
                    Course Registration Form
                  </h2>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-[oklch(0.35_0.02_60)]">Registrant Name *</span>
                    <input required value={form.registrantName} onChange={(event) => updateField("registrantName", event.target.value)} className="w-full border border-[oklch(0.84_0.018_70)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[oklch(0.60_0.08_65)]" placeholder="Full name" />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-[oklch(0.35_0.02_60)]">WhatsApp / Phone *</span>
                    <input required value={form.phone} onChange={(event) => updateField("phone", event.target.value)} className="w-full border border-[oklch(0.84_0.018_70)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[oklch(0.60_0.08_65)]" placeholder="+65 ..." />
                  </label>

                  <label className="block md:col-span-2">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-[oklch(0.35_0.02_60)]">Email</span>
                    <input type="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} className="w-full border border-[oklch(0.84_0.018_70)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[oklch(0.60_0.08_65)]" placeholder="Optional" />
                  </label>

                  <div className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-[oklch(0.35_0.02_60)]">Course Date</span>
                    <div className="border border-[oklch(0.84_0.018_70)] bg-[oklch(0.98_0.01_75)] px-4 py-3 text-sm font-semibold text-[oklch(0.25_0.02_60)]">
                      {CURRENT_INTAKE}
                    </div>
                  </div>

                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-[oklch(0.35_0.02_60)]">Number of Participants *</span>
                    <select value={form.participantCount} onChange={(event) => updateField("participantCount", Number(event.target.value))} className="w-full border border-[oklch(0.84_0.018_70)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[oklch(0.60_0.08_65)]">
                      {[1, 2, 3, 4, 5, 6].map((count) => <option key={count} value={count}>{count}</option>)}
                    </select>
                  </label>

                  <label className="block md:col-span-2">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-[oklch(0.35_0.02_60)]">Participant Full Name(s) *</span>
                    <textarea required rows={4} value={form.participantNames} onChange={(event) => updateField("participantNames", event.target.value)} className="w-full border border-[oklch(0.84_0.018_70)] bg-white px-4 py-3 text-sm leading-7 outline-none transition focus:border-[oklch(0.60_0.08_65)]" placeholder="Enter one participant name per line" />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-[oklch(0.35_0.02_60)]">Payment Status *</span>
                    <select value={form.paymentStatus} onChange={(event) => updateField("paymentStatus", event.target.value)} className="w-full border border-[oklch(0.84_0.018_70)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[oklch(0.60_0.08_65)]">
                      <option>I will pay shortly</option>
                      <option>Payment completed</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-[oklch(0.35_0.02_60)]">Amount Paid (S$)</span>
                    <input inputMode="decimal" value={form.amountPaid} onChange={(event) => updateField("amountPaid", event.target.value)} className="w-full border border-[oklch(0.84_0.018_70)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[oklch(0.60_0.08_65)]" placeholder="Leave blank if not paid yet" />
                  </label>

                  <label className="block md:col-span-2">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-[oklch(0.35_0.02_60)]">PayNow Reference</span>
                    <input value={form.paymentReference} onChange={(event) => updateField("paymentReference", event.target.value)} className="w-full border border-[oklch(0.84_0.018_70)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[oklch(0.60_0.08_65)]" placeholder="Name or reference shown in PayNow" />
                  </label>

                  <label className="block md:col-span-2">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-[oklch(0.35_0.02_60)]">Notes</span>
                    <textarea rows={3} value={form.notes} onChange={(event) => updateField("notes", event.target.value)} className="w-full border border-[oklch(0.84_0.018_70)] bg-white px-4 py-3 text-sm leading-7 outline-none transition focus:border-[oklch(0.60_0.08_65)]" placeholder="Optional" />
                  </label>
                </div>

                <div className="mt-6 flex items-center justify-between gap-4 border border-[oklch(0.88_0.018_70)] bg-[oklch(0.98_0.01_75)] p-4">
                  <span className="text-sm font-semibold text-[oklch(0.35_0.02_60)]">Total for {form.participantCount} participant{form.participantCount > 1 ? "s" : ""}</span>
                  <span className="text-2xl font-bold text-[oklch(0.60_0.08_65)]">S${expectedTotal.toLocaleString("en-SG")}</span>
                </div>

                {submitError && (
                  <div className="mt-5 border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700">
                    {submitError}
                  </div>
                )}

                <button disabled={isSubmitting} type="submit" className="mt-7 inline-flex w-full items-center justify-center gap-2 bg-[oklch(0.60_0.08_65)] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-65">
                  {isSubmitting ? (
                    <>
                      Submitting Registration
                      <Loader2 className="h-4 w-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      Submit Course Registration
                      <CheckCircle2 className="h-4 w-4" />
                    </>
                  )}
                </button>
                <p className="mt-4 text-xs leading-6 text-[oklch(0.48_0.02_60)]">
                  By submitting, you confirm that the information provided is accurate. Places are confirmed only after payment has been received and verified.
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

export default function CourseRegistrationPage() {
  return (
    <LanguageProvider>
      <CourseRegistrationPageContent />
    </LanguageProvider>
  );
}
