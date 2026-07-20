import type { Metadata } from "next";
import Link from "next/link";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";

export const metadata: Metadata = {
  title: "Qimen Strategy Academy Singapore｜Weekly Qi Men Dun Jia Courses",
  description:
    "Qimen Strategy Academy provides structured Qi Men Dun Jia courses in Singapore. The two-day foundation course offers regular Saturday–Sunday intakes from 19 September 2026 at S$990 per participant.",
  keywords: [
    "Qimen Strategy Academy Singapore",
    "Qi Men Dun Jia course Singapore",
    "Weekly Qi Men course Singapore",
    "Qi Men foundation class Singapore",
    "奇门遁甲课程新加坡",
    "启明遁甲研修",
  ],
  alternates: { canonical: "https://www.qmfeng.com/courses" },
};

const WA_LINK =
  "https://wa.me/6589593499?text=Hello%20Qimen%20Strategy%20Academy%2C%20I%20would%20like%20to%20enquire%20about%20your%20courses%20in%20Singapore.";
const REGISTER_LINK = "/course-registration?course=qimen-foundation&batch=2026-09-19";

const upcoming = [
  ["Number Energy & Phone Number Selection", "数字能量与手机号码", "Interest registration"],
  ["Bazi Life Structure Foundation", "八字命理基础", "Interest registration"],
  ["Feng Shui Layout & Space Alignment", "風水布局实战", "Interest registration"],
];

export default function CoursesPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main>
          <section className="relative overflow-hidden px-4 pb-20 pt-32 md:pb-28 md:pt-40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_16%,rgba(214,173,99,0.25),transparent_34%),linear-gradient(135deg,rgba(244,223,176,0.08),transparent_42%)]" />
            <div className="container relative mx-auto max-w-6xl">
              <p className="text-xs font-bold uppercase tracking-[0.30em] text-[#d6ad63]">Qimen Strategy Academy · Singapore</p>
              <h1 className="mt-5 max-w-5xl text-4xl font-semibold uppercase leading-[0.98] tracking-[0.04em] text-[#f4dfb0] md:text-7xl">
                Structured Qi Men Dun Jia Courses
              </h1>
              <h2 className="mt-5 text-3xl font-semibold tracking-[0.12em] text-[#e2bd6b] md:text-5xl">启明遁甲研修体系</h2>
              <p className="mt-8 max-w-4xl text-lg leading-8 text-white/74">
                Learn the framework clearly, practise through real cases and understand the responsible boundaries of application. The academy pathway is for learners—not a substitute for professional financial, legal, medical or psychological advice.
              </p>
              <p className="mt-4 max-w-4xl leading-8 text-white/62">
                课程强调从零基础建立系统：先理解结构，再学习读局顺序，最后通过真实案例训练判断。奇门遁甲基础课程自2026年9月19日起安排常规周末班次。
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href={REGISTER_LINK} className="inline-flex items-center justify-center bg-[#d6ad63] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-black hover:bg-[#f4dfb0]">
                  Select Batch & Register
                </Link>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border border-[#d6ad63]/70 px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#f4dfb0] hover:bg-[#d6ad63]/10">
                  WhatsApp Course Enquiry
                </a>
              </div>
            </div>
          </section>

          <section className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-20 md:py-28">
            <div className="container mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Flagship Weekly Course</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl">Qi Men Dun Jia Foundation Course</h2>
                <p className="mt-3 text-2xl font-semibold text-[#d6ad63]">奇门遁甲基础课程</p>
                <p className="mt-6 text-base leading-8 text-white/68">
                  A two-day small-group programme for complete beginners. Learn the core framework, Nine Palaces, Eight Doors, Nine Stars, Eight Deities, useful-god selection, palace relationships, chart-reading sequence and practical case application.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Schedule", "Regular Sat–Sun intakes"],
                  ["Fee", "S$990 per participant"],
                  ["Level", "Complete beginners welcome"],
                  ["Format", "Two-day small-group course"],
                  ["Instructor", "Huang Qiming｜黄启明"],
                  ["Location", "Bedok, Singapore"],
                ].map(([label, value]) => (
                  <div key={label} className="border border-[#d6ad63]/20 bg-black/35 p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#d6ad63]">{label}</p>
                    <p className="mt-3 text-sm leading-6 text-[#f4dfb0]">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 py-20 md:py-28">
            <div className="container mx-auto max-w-6xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Learning Pathways</p>
              <h2 className="mt-4 max-w-4xl text-3xl font-semibold text-[#f4dfb0] md:text-5xl">
                Begin with Qi Men foundation. Register interest for future modules.
              </h2>
              <div className="mt-12 grid gap-6 md:grid-cols-2">
                <Link href="/qi-men-dun-jia-course-singapore" className="border border-[#d6ad63] bg-[#d6ad63]/10 p-8 transition hover:bg-[#d6ad63]/15">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d6ad63]">Now Enrolling · S$990</p>
                  <h3 className="mt-4 text-3xl font-semibold text-[#f4dfb0]">Qi Men Dun Jia Foundation Course</h3>
                  <p className="mt-2 text-xl font-semibold text-[#d6ad63]">奇门遁甲基础课程</p>
                  <p className="mt-6 text-sm leading-7 text-white/66">Regular Saturday–Sunday batches with a dedicated registration and PayNow page.</p>
                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.14em] text-[#f4dfb0]">View Course Details →</p>
                </Link>
                <div className="space-y-4">
                  {upcoming.map(([title, zh, status]) => (
                    <a key={title} href={WA_LINK} target="_blank" rel="noopener noreferrer" className="block border border-[#d6ad63]/20 bg-white/[0.035] p-6 transition hover:border-[#d6ad63]/60">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#d6ad63]">{status}</p>
                      <h3 className="mt-3 text-xl font-semibold text-[#f4dfb0]">{title}</h3>
                      <p className="mt-2 text-[#d6ad63]">{zh}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="px-4 pb-24">
            <div className="container mx-auto max-w-5xl border border-[#d6ad63]/40 bg-[#d6ad63]/10 p-8 text-center md:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Registration & Policy</p>
              <h2 className="mt-5 text-3xl font-semibold text-[#f4dfb0] md:text-5xl">Choose a batch only after reviewing the course policy.</h2>
              <p className="mx-auto mt-6 max-w-3xl leading-8 text-white/68">
                A place is confirmed after payment verification and written acknowledgement. Transfer, cancellation, recording and course-material rules are stated in the Course Registration Policy.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link href={REGISTER_LINK} className="inline-flex items-center justify-center bg-[#d6ad63] px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-black hover:bg-[#f4dfb0]">Select Batch & Register</Link>
                <Link href="/course-policy" className="inline-flex items-center justify-center border border-[#d6ad63]/70 px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#f4dfb0] hover:bg-[#d6ad63]/10">Read Course Policy</Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </LanguageProvider>
  );
}
