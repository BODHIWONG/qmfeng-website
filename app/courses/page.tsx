import type { Metadata } from "next";
import Link from "next/link";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";

export const metadata: Metadata = {
  title: "Qi Men Dun Jia Course Pathway Singapore｜Foundation to Disciple",
  description:
    "A clearly structured Qi Men Dun Jia learning pathway in Singapore: a two-day Foundation Practical Course, followed by Intermediate, Advanced and an application-based Disciple Programme.",
  keywords: [
    "Qi Men Dun Jia course pathway Singapore",
    "two day Qi Men Dun Jia foundation course",
    "Qi Men intermediate course Singapore",
    "Qi Men advanced course Singapore",
    "Qi Men disciple programme",
    "奇门遁甲两天基础课程",
    "奇门遁甲中级课程",
    "奇门遁甲高级课程",
    "奇门遁甲弟子班",
  ],
  alternates: { canonical: "https://www.qmfeng.com/courses" },
};

const FOUNDATION_REGISTER_LINK = "/course-registration?course=qimen-foundation&batch=2026-09-19";
const WA_LINK =
  "https://wa.me/6589593499?text=Hello%20Qimen%20Strategy%20Academy%2C%20I%20would%20like%20to%20understand%20the%20difference%20between%20the%20Foundation%2C%20Intermediate%2C%20Advanced%20and%20Disciple%20Programme.";

const levels = [
  {
    level: "01",
    name: "Foundation Practical Course",
    zh: "基础实战课程",
    format: "2 days · Saturday & Sunday",
    status: "Open enrolment · S$990",
    question: "Where do I start?",
    purpose: "Build the core framework, basic reading sequence and introductory practical ability through guided cases.",
    outcome: "Understand the structure of a chart and complete basic exercises with guidance.",
    entry: "No prior Qi Men knowledge required.",
    href: FOUNDATION_REGISTER_LINK,
    cta: "Select Batch & Register",
    featured: true,
  },
  {
    level: "02",
    name: "Intermediate Course",
    zh: "中级课程",
    format: "Duration and fee to be announced",
    status: "Interest registration",
    question: "How do I analyse more consistently?",
    purpose: "Strengthen useful-god selection, multi-palace analysis, timing and structured case interpretation.",
    outcome: "Handle charts with several interacting indicators using a more stable process.",
    entry: "Foundation completion or equivalent ability, subject to review.",
    href: "/course-registration?course=qimen-intermediate",
    cta: "Register Interest",
  },
  {
    level: "03",
    name: "Advanced Course",
    zh: "高级课程",
    format: "Duration and fee to be announced",
    status: "Interest registration",
    question: "How do I handle complex decisions?",
    purpose: "Integrate complex indicators, compare scenarios and analyse business or major-decision cases under supervision.",
    outcome: "Present a coherent judgement with reasoning, limitations and action priorities.",
    entry: "Intermediate completion or equivalent ability, subject to review.",
    href: "/course-registration?course=qimen-advanced",
    cta: "Register Interest",
  },
  {
    level: "04",
    name: "Disciple Programme",
    zh: "弟子班",
    format: "Long-term mentorship",
    status: "Application and assessment only",
    question: "How do I develop long-term judgement?",
    purpose: "Continue through disciplined case submission, correction, ethics and deeper applied development.",
    outcome: "Build mature judgement through repeated practice and supervised review over time.",
    entry: "Selected advanced learners only. Admission is not automatic.",
    href: "/course-registration?course=qimen-disciple",
    cta: "Submit Application",
  },
];

const distinctions = [
  ["Foundation", "建立框架", "Two-day public course for beginners"],
  ["Intermediate", "稳定分析", "Case-based progression after Foundation"],
  ["Advanced", "综合判断", "Complex cases and supervised reasoning"],
  ["Disciple", "长期训练", "Selective mentorship and continued correction"],
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
              <h1 className="mt-5 max-w-5xl text-4xl font-semibold uppercase leading-[0.98] tracking-[0.04em] text-[#f4dfb0] md:text-7xl">A Clear Four-Level Qi Men Learning Pathway</h1>
              <h2 className="mt-5 text-3xl font-semibold tracking-[0.10em] text-[#e2bd6b] md:text-5xl">基础班 · 中级班 · 高级班 · 弟子班</h2>
              <p className="mt-8 max-w-4xl text-lg leading-8 text-white/74">The current public course is a two-day Foundation Practical Course. Later levels are separate programmes with deeper content, higher entry standards and different delivery formats.</p>
              <p className="mt-4 max-w-4xl leading-8 text-white/62">基础班是两天的入门实战课程，不等于完整学习体系。中级班、高级班和弟子班分别承担稳定分析、复杂判断与长期训练的不同任务，层次不能混在一起。</p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href={FOUNDATION_REGISTER_LINK} className="inline-flex items-center justify-center bg-[#d6ad63] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-black hover:bg-[#f4dfb0]">Register for Two-Day Foundation</Link>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border border-[#d6ad63]/70 px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#f4dfb0] hover:bg-[#d6ad63]/10">Ask About Course Levels</a>
              </div>
            </div>
          </section>

          <section className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-16 md:py-20">
            <div className="container mx-auto max-w-6xl">
              <div className="grid gap-4 md:grid-cols-4">
                {distinctions.map(([level, zh, body]) => (
                  <article key={level} className="border border-[#d6ad63]/25 bg-white/[0.035] p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#d6ad63]">{level}</p>
                    <h3 className="mt-3 text-xl font-semibold text-[#f4dfb0]">{zh}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/58">{body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 py-20 md:py-28">
            <div className="container mx-auto max-w-6xl">
              <p className="text-xs font-bold uppercase tracking-[0.30em] text-[#d6ad63]">Current Open Enrolment</p>
              <div className="mt-5 grid gap-8 border border-[#d6ad63] bg-[#d6ad63]/10 p-7 md:grid-cols-[1.1fr_0.9fr] md:p-10">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d6ad63]">Level 01 · Two-Day Weekend Course</p>
                  <h2 className="mt-4 text-3xl font-semibold text-[#f4dfb0] md:text-5xl">Qi Men Dun Jia Foundation Practical Course</h2>
                  <p className="mt-3 text-2xl font-semibold text-[#d6ad63]">奇门遁甲基础实战课程</p>
                  <p className="mt-6 max-w-3xl leading-8 text-white/68">Day 1 builds the framework and reading logic. Day 2 focuses on instructor demonstration, guided student practice, correction and debrief. The objective is a sound beginning—not instant mastery of the complete system.</p>
                  <Link href={FOUNDATION_REGISTER_LINK} className="mt-8 inline-flex bg-[#d6ad63] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-black hover:bg-[#f4dfb0]">Select a Foundation Batch</Link>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    ["Duration", "2 days"],
                    ["Days", "Saturday & Sunday"],
                    ["Fee", "S$990 / person"],
                    ["Entry", "Complete beginners"],
                    ["Method", "Cases, practice, correction"],
                    ["Location", "Bedok, Singapore"],
                  ].map(([label, value]) => (
                    <div key={label} className="border border-[#d6ad63]/20 bg-black/35 p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#d6ad63]">{label}</p>
                      <p className="mt-3 text-sm leading-6 text-[#f4dfb0]">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-20 md:py-28">
            <div className="container mx-auto max-w-6xl">
              <p className="text-xs font-bold uppercase tracking-[0.30em] text-[#d6ad63]">Full Progression</p>
              <h2 className="mt-4 max-w-4xl text-3xl font-semibold text-[#f4dfb0] md:text-5xl">Progress by capability, not simply by attendance.</h2>
              <p className="mt-5 max-w-4xl leading-8 text-white/62">Each level answers a different learning problem. Intermediate, Advanced and Disciple-level admission may require prior course completion or an assessment of equivalent ability.</p>
              <div className="mt-12 grid gap-6 lg:grid-cols-2">
                {levels.map((course) => (
                  <article key={course.level} className={`flex h-full flex-col border p-7 md:p-9 ${course.featured ? "border-[#d6ad63] bg-[#d6ad63]/10" : "border-[#d6ad63]/25 bg-black"}`}>
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d6ad63]">Level {course.level} · {course.status}</p>
                        <h3 className="mt-4 text-3xl font-semibold leading-tight text-[#f4dfb0]">{course.name}</h3>
                        <p className="mt-2 text-xl font-semibold text-[#d6ad63]">{course.zh}</p>
                      </div>
                      <span className="border border-[#d6ad63]/45 px-3 py-2 text-sm font-bold text-[#d6ad63]">{course.level}</span>
                    </div>
                    <div className="mt-7 space-y-4 text-sm leading-7 text-white/64">
                      <p><strong className="text-[#f4dfb0]">Format:</strong> {course.format}</p>
                      <p><strong className="text-[#f4dfb0]">Core question:</strong> {course.question}</p>
                      <p><strong className="text-[#f4dfb0]">Purpose:</strong> {course.purpose}</p>
                      <p><strong className="text-[#f4dfb0]">Expected development:</strong> {course.outcome}</p>
                      <p><strong className="text-[#f4dfb0]">Entry requirement:</strong> {course.entry}</p>
                    </div>
                    <Link href={course.href} className="mt-8 inline-flex w-full items-center justify-center border border-[#d6ad63]/70 px-6 py-4 text-sm font-bold uppercase tracking-[0.13em] text-[#f4dfb0] transition hover:bg-[#d6ad63] hover:text-black">{course.cta}</Link>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 py-24">
            <div className="container mx-auto max-w-5xl border border-[#d6ad63]/40 bg-[#d6ad63]/10 p-8 text-center md:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Registration & Entry Review</p>
              <h2 className="mt-5 text-3xl font-semibold text-[#f4dfb0] md:text-5xl">Foundation is open enrolment. Later levels are reviewed separately.</h2>
              <p className="mx-auto mt-6 max-w-3xl leading-8 text-white/68">中级班、高级班与弟子班不会直接沿用基础班的两天结构、费用或开放报名方式。具体课时、费用与录取标准将在正式开班前单独公布。</p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link href={FOUNDATION_REGISTER_LINK} className="inline-flex items-center justify-center bg-[#d6ad63] px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-black hover:bg-[#f4dfb0]">Register for Foundation</Link>
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
