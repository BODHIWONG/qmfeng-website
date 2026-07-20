"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { Check, CheckCircle2, Copy, Loader2, MessageCircle } from "lucide-react";
import Link from "next/link";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";

const WHATSAPP_NUMBER = "6589593499";
const LOCATION = "Blk 210 New Upper Changi Road #01-729, Singapore 460210";
const COMPANY = "QIMING FENG SHUI WISDOM PTE. LTD.";
const PAYNOW_UEN = "202313112R";

const QIMEN_SOLD_OUT_BATCHES = [
  "2026-08-08",
  "2026-08-15",
  "2026-08-22",
  "2026-08-29",
  "2026-09-05",
  "2026-09-12",
];

type BatchStatus = "available" | "full" | "interest";
type Course = {
  id: string;
  name: string;
  zh: string;
  fee: number | null;
  availableFrom?: string;
  soldOutBatches?: string[];
};
type Batch = { id: string; label: string; status: BatchStatus };
type FormState = {
  registrantName: string;
  phone: string;
  email: string;
  participantCount: number;
  participantNames: string;
  courseId: string;
  batchId: string;
  paymentStatus: string;
  amountPaid: string;
  paymentReference: string;
  notes: string;
  website: string;
  acceptedPolicy: boolean;
};

const COURSES: Course[] = [
  {
    id: "qimen-foundation",
    name: "Qi Men Dun Jia Foundation Course",
    zh: "奇门遁甲基础课程",
    fee: 990,
    availableFrom: "2026-09-19",
    soldOutBatches: QIMEN_SOLD_OUT_BATCHES,
  },
  { id: "number-energy", name: "Number Energy & Phone Number Selection Course", zh: "数字能量与手机号码课程", fee: null },
  { id: "bazi-foundation", name: "Bazi Life Structure Foundation Course", zh: "八字命理基础课程", fee: null },
  { id: "feng-shui-layout", name: "Feng Shui Layout & Space Alignment Course", zh: "風水布局实战课程", fee: null },
];

const INITIAL: FormState = {
  registrantName: "",
  phone: "",
  email: "",
  participantCount: 1,
  participantNames: "",
  courseId: "qimen-foundation",
  batchId: "",
  paymentStatus: "I will pay shortly",
  amountPaid: "",
  paymentReference: "",
  notes: "",
  website: "",
  acceptedPolicy: false,
};

const inputClass =
  "w-full border border-[oklch(0.84_0.018_70)] bg-white px-4 py-3 text-sm outline-none focus:border-[oklch(0.60_0.08_65)]";
const labelClass =
  "mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[oklch(0.35_0.02_60)]";

function parseDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day, 4));
}

function addDays(date: Date, days: number) {
  const next = new Date(date);
  next.setUTCDate(next.getUTCDate() + days);
  return next;
}

function singaporeToday() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Singapore",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

function formatBatchLabel(iso: string) {
  const from = parseDate(iso);
  const to = addDays(from, 1);
  const fromDay = new Intl.DateTimeFormat("en-SG", {
    day: "numeric",
    timeZone: "Asia/Singapore",
  }).format(from);
  const toText = new Intl.DateTimeFormat("en-SG", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Singapore",
  }).format(to);
  return `${fromDay}–${toText} (Saturday & Sunday)`;
}

function weeklyBatches(course: Course): Batch[] {
  if (!course.availableFrom) {
    return [
      {
        id: "interest-list",
        label: "Interest Registration — Date to be confirmed",
        status: "interest",
      },
    ];
  }

  const soldOut = (course.soldOutBatches || []).map((id) => ({
    id,
    label: `${formatBatchLabel(id)} — FULL / 已满`,
    status: "full" as const,
  }));

  const today = parseDate(singaporeToday());
  let nextAvailable = parseDate(course.availableFrom);
  while (nextAvailable < today) nextAvailable = addDays(nextAvailable, 7);

  const available = Array.from({ length: 52 }, (_, index) => {
    const date = addDays(nextAvailable, index * 7);
    const id = date.toISOString().slice(0, 10);
    return {
      id,
      label: `${formatBatchLabel(id)} — Available / 可报名`,
      status: "available" as const,
    };
  });

  return [...soldOut, ...available];
}

function collectUtm() {
  const params = new URLSearchParams(window.location.search);
  return Object.fromEntries(
    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "gbraid", "wbraid"]
      .map((key) => [key, params.get(key) || ""])
      .filter(([, value]) => value)
  );
}

function PageContent() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [requestedBatch, setRequestedBatch] = useState("");
  const [registrationId, setRegistrationId] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const course = useMemo(
    () => COURSES.find((item) => item.id === form.courseId) || COURSES[0],
    [form.courseId]
  );
  const batches = useMemo(() => weeklyBatches(course), [course]);
  const availableBatches = useMemo(
    () => batches.filter((item) => item.status !== "full"),
    [batches]
  );
  const selectedBatch = useMemo(
    () => batches.find((item) => item.id === form.batchId) || availableBatches[0],
    [availableBatches, batches, form.batchId]
  );
  const total = course.fee ? course.fee * form.participantCount : null;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const courseParam = params.get("course");
    const batchParam = params.get("batch");
    if (courseParam && COURSES.some((item) => item.id === courseParam)) {
      setForm((state) => ({ ...state, courseId: courseParam }));
    }
    if (batchParam) setRequestedBatch(batchParam);
  }, []);

  useEffect(() => {
    const current = batches.find((item) => item.id === form.batchId);
    const requested = batches.find((item) => item.id === requestedBatch);
    const nextBatchId =
      current && current.status !== "full"
        ? current.id
        : requested && requested.status !== "full"
          ? requested.id
          : availableBatches[0]?.id || "";

    if (form.batchId !== nextBatchId) {
      setForm((state) => ({ ...state, batchId: nextBatchId }));
    }
  }, [availableBatches, batches, form.batchId, requestedBatch]);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((state) => ({ ...state, [key]: value }));

  const changeCourse = (courseId: string) => {
    setRequestedBatch("");
    setForm((state) => ({
      ...state,
      courseId,
      batchId: "",
      amountPaid: "",
      paymentReference: "",
      paymentStatus: "I will pay shortly",
    }));
  };

  const copyUen = async () => {
    await navigator.clipboard.writeText(PAYNOW_UEN);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    if (!form.acceptedPolicy) {
      setSubmitting(false);
      setError("Please read and accept the Course Registration Policy and Privacy Policy.");
      return;
    }

    if (!selectedBatch || selectedBatch.status === "full") {
      setSubmitting(false);
      setError("This batch is full. Please select an available batch.");
      return;
    }

    try {
      const response = await fetch("/api/course-registration", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...form,
          courseName: course.name,
          courseNameZh: course.zh,
          courseBatch: selectedBatch.label,
          courseBatchStatus: selectedBatch.status,
          courseFeePerParticipant: course.fee,
          expectedTotal: total,
          pageUrl: window.location.href,
          referrer: document.referrer,
          userAgent: navigator.userAgent,
          utm: collectUtm(),
        }),
      });
      const result = await response.json();
      if (!response.ok || !result?.ok || !result?.registrationId) {
        throw new Error(result?.error || "Unable to submit the registration.");
      }
      setRegistrationId(result.registrationId);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Unable to submit the registration."
      );
    } finally {
      setSubmitting(false);
    }
  }

  const whatsappMessage = [
    "Hello, I have submitted a Qimen Strategy course registration.",
    `Registration Reference: ${registrationId}`,
    `Course: ${course.name} / ${course.zh}`,
    `Batch: ${selectedBatch?.label || "-"}`,
    `Registrant: ${form.registrantName}`,
    `WhatsApp: ${form.phone}`,
    `Participants: ${form.participantCount}`,
    `Participant Names: ${form.participantNames}`,
    course.fee ? `Fee: S$${course.fee} per participant` : "Fee: To be confirmed",
    total ? `Total: S$${total}` : "",
    `Payment Status: ${form.paymentStatus}`,
    `Amount Paid: ${form.amountPaid || "-"}`,
    `PayNow Reference: ${form.paymentReference || "-"}`,
    `Location: ${LOCATION}`,
  ]
    .filter(Boolean)
    .join("\n");
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  if (registrationId) {
    return (
      <div className="min-h-screen bg-[oklch(0.97_0.012_75)]">
        <Navbar />
        <main className="pt-28 md:pt-36">
          <section className="py-16">
            <div className="container">
              <div className="mx-auto max-w-3xl border bg-white p-8 text-center shadow-xl md:p-12">
                <CheckCircle2 className="mx-auto mb-5 h-14 w-14 text-emerald-700" />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[oklch(0.60_0.08_65)]">
                  Registration Recorded · 报名资料已记录
                </p>
                <h1 className="mt-3 text-4xl font-bold">Thank You for Registering</h1>
                <div className="my-7 border bg-[oklch(0.98_0.01_75)] p-5 text-left text-sm leading-7">
                  <p><strong>Reference:</strong> {registrationId}</p>
                  <p><strong>Course:</strong> {course.name}</p>
                  <p><strong>Batch:</strong> {selectedBatch?.label}</p>
                  {total && <p><strong>Total:</strong> S${total.toLocaleString("en-SG")}</p>}
                </div>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] px-7 py-4 text-sm font-bold uppercase tracking-wider text-white"
                >
                  <MessageCircle className="h-5 w-5" />
                  Send Details on WhatsApp
                </a>
                <p className="mt-4 text-xs leading-6 text-black/55">
                  A paid place is confirmed only after payment verification and written acknowledgement.
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

  const soldOutBatches = batches.filter((item) => item.status === "full");
  const openBatches = batches.filter((item) => item.status !== "full");

  return (
    <div className="min-h-screen bg-[oklch(0.97_0.012_75)]">
      <Navbar />
      <main className="pt-28 md:pt-36">
        <section className="border-b pb-14 md:pb-20">
          <div className="container text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[oklch(0.60_0.08_65)]">
              Qimen Strategy Academy · 启明遁甲研修
            </p>
            <h1 className="mt-4 text-4xl font-bold md:text-6xl">Course Registration & PayNow</h1>
            <p className="mx-auto mt-5 max-w-3xl leading-8 text-black/65">
              Earlier August and September weekend batches are displayed as full. The next available Qi Men foundation batch is 19–20 September 2026.
            </p>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container">
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <aside className="bg-black p-7 text-white md:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[oklch(0.72_0.12_70)]">Selected Course</p>
                <h2 className="mt-3 text-3xl font-bold">{course.name}</h2>
                <p className="mt-2 text-lg font-semibold text-[oklch(0.78_0.12_70)]">{course.zh}</p>
                <div className="mt-7 space-y-4 text-sm leading-7">
                  <p><strong>Batch:</strong><br />{selectedBatch?.label}</p>
                  <p><strong>Location:</strong><br />{LOCATION}</p>
                  {course.fee && (
                    <p>
                      <strong>Fee:</strong><br />
                      <span className="text-3xl text-[oklch(0.78_0.12_70)]">S${course.fee}</span> per participant
                    </p>
                  )}
                </div>

                {course.fee && (
                  <div className="mt-7 border border-white/20 bg-white/5 p-5 text-center">
                    <p className="text-xs font-bold uppercase tracking-wider text-white/60">Scan to PayNow</p>
                    <img
                      src="/paynow-uen-qr.svg"
                      alt="PayNow QR code for QIMING FENG SHUI WISDOM PTE. LTD."
                      className="mx-auto mt-4 w-full max-w-[260px] bg-white p-2"
                    />
                    <p className="mt-4 text-sm font-semibold">{COMPANY}</p>
                    <div className="mt-2 flex items-center justify-center gap-3">
                      <strong>UEN: {PAYNOW_UEN}</strong>
                      <button
                        type="button"
                        onClick={copyUen}
                        className="inline-flex items-center gap-1 border border-white/25 px-2 py-1 text-xs"
                      >
                        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        {copied ? "Copied" : "Copy"}
                      </button>
                    </div>
                    <p className="mt-3 text-xs text-white/55">Verify the company name in your banking app before payment.</p>
                  </div>
                )}

                <div className="mt-7 border-t border-white/15 pt-5 text-xs leading-6 text-white/55">
                  <p>Registration is subject to availability and written confirmation.</p>
                  <Link href="/course-policy" className="mt-2 inline-block text-[#d6ad63] underline underline-offset-4">
                    Read Course Registration Policy
                  </Link>
                </div>
              </aside>

              <form onSubmit={submit} className="border bg-white p-6 shadow-lg md:p-8">
                <input
                  name="website"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={(event) => update("website", event.target.value)}
                />
                <h2 className="mb-6 text-3xl font-bold">Registration Form</h2>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="md:col-span-2">
                    <span className={labelClass}>Course Name *</span>
                    <select className={inputClass} value={form.courseId} onChange={(event) => changeCourse(event.target.value)}>
                      {COURSES.map((item) => (
                        <option key={item.id} value={item.id}>{item.name}｜{item.zh}</option>
                      ))}
                    </select>
                  </label>

                  <label className="md:col-span-2">
                    <span className={labelClass}>Course Batch *</span>
                    <select
                      required
                      className={inputClass}
                      value={form.batchId}
                      onChange={(event) => update("batchId", event.target.value)}
                    >
                      {soldOutBatches.length > 0 && (
                        <optgroup label="Full batches / 已满班次">
                          {soldOutBatches.map((item) => (
                            <option key={item.id} value={item.id} disabled>{item.label}</option>
                          ))}
                        </optgroup>
                      )}
                      <optgroup label={course.availableFrom ? "Available batches / 可报名班次" : "Interest registration"}>
                        {openBatches.map((item) => (
                          <option key={item.id} value={item.id}>{item.label}</option>
                        ))}
                      </optgroup>
                    </select>
                    {course.availableFrom && (
                      <small className="mt-2 block leading-6 text-black/50">
                        August 8–9, 15–16, 22–23, 29–30 and September 5–6, 12–13 are full. Available weekly batches continue automatically from 19–20 September 2026.
                      </small>
                    )}
                  </label>

                  <label>
                    <span className={labelClass}>Registrant Name *</span>
                    <input required className={inputClass} value={form.registrantName} onChange={(event) => update("registrantName", event.target.value)} />
                  </label>
                  <label>
                    <span className={labelClass}>WhatsApp / Phone *</span>
                    <input required className={inputClass} value={form.phone} onChange={(event) => update("phone", event.target.value)} placeholder="+65 ..." />
                  </label>
                  <label className="md:col-span-2">
                    <span className={labelClass}>Email</span>
                    <input type="email" className={inputClass} value={form.email} onChange={(event) => update("email", event.target.value)} />
                  </label>
                  <label>
                    <span className={labelClass}>Number of Participants *</span>
                    <select className={inputClass} value={form.participantCount} onChange={(event) => update("participantCount", Number(event.target.value))}>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => <option key={number}>{number}</option>)}
                    </select>
                  </label>
                  <div>
                    <span className={labelClass}>Estimated Total</span>
                    <div className={`${inputClass} bg-[oklch(0.98_0.01_75)] font-semibold`}>
                      {total ? `S$${total.toLocaleString("en-SG")}` : "To be confirmed"}
                    </div>
                  </div>
                  <label className="md:col-span-2">
                    <span className={labelClass}>Participant Full Name(s) *</span>
                    <textarea required rows={4} className={inputClass} value={form.participantNames} onChange={(event) => update("participantNames", event.target.value)} placeholder="One participant name per line" />
                  </label>

                  {course.fee && (
                    <>
                      <label>
                        <span className={labelClass}>Payment Status *</span>
                        <select className={inputClass} value={form.paymentStatus} onChange={(event) => update("paymentStatus", event.target.value)}>
                          <option>I will pay shortly</option>
                          <option>Payment completed</option>
                        </select>
                      </label>
                      <label>
                        <span className={labelClass}>Amount Paid (S$)</span>
                        <input className={inputClass} value={form.amountPaid} onChange={(event) => update("amountPaid", event.target.value)} />
                      </label>
                      <label className="md:col-span-2">
                        <span className={labelClass}>PayNow Reference</span>
                        <input className={inputClass} value={form.paymentReference} onChange={(event) => update("paymentReference", event.target.value)} />
                      </label>
                    </>
                  )}

                  <label className="md:col-span-2">
                    <span className={labelClass}>Notes</span>
                    <textarea rows={3} className={inputClass} value={form.notes} onChange={(event) => update("notes", event.target.value)} placeholder="Learning goals, language needs or special arrangements" />
                  </label>
                </div>

                <label className="mt-6 flex items-start gap-3 text-sm leading-6 text-black/65">
                  <input
                    type="checkbox"
                    required
                    checked={form.acceptedPolicy}
                    onChange={(event) => update("acceptedPolicy", event.target.checked)}
                    className="mt-1 h-4 w-4 accent-[oklch(0.60_0.08_65)]"
                  />
                  <span>
                    I have read and accept the <Link href="/course-policy" className="font-semibold text-[oklch(0.50_0.08_65)] underline underline-offset-4">Course Registration Policy</Link>, <Link href="/terms" className="font-semibold text-[oklch(0.50_0.08_65)] underline underline-offset-4">Terms of Service</Link> and <Link href="/privacy" className="font-semibold text-[oklch(0.50_0.08_65)] underline underline-offset-4">Privacy Policy</Link>.
                  </span>
                </label>

                {error && <div className="mt-5 border border-red-200 bg-red-50 p-3 text-sm text-red-700">{error}</div>}
                <button
                  disabled={submitting}
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 bg-[oklch(0.60_0.08_65)] px-7 py-4 text-sm font-bold uppercase tracking-wider text-white disabled:opacity-60"
                >
                  {submitting ? (
                    <><Loader2 className="h-4 w-4 animate-spin" />Submitting</>
                  ) : (
                    <><CheckCircle2 className="h-4 w-4" />Submit Course Registration</>
                  )}
                </button>
                <p className="mt-4 text-xs leading-6 text-black/50">
                  Registration is recorded in our backend. A paid place is confirmed only after payment verification and written acknowledgement.
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
      <PageContent />
    </LanguageProvider>
  );
}
