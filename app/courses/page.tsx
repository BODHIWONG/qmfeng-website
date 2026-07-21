import type { Metadata } from "next";
import Link from "next/link";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";

export const metadata: Metadata = {
  title: "Qimen Strategy Academy Singapore｜Foundation to Disciple Qi Men Courses",
  description:
    "Qimen Strategy Academy provides a structured four-level Qi Men Dun Jia learning pathway in Singapore: Foundation, Intermediate, Advanced and the application-based Disciple Programme.",
  keywords: [
    "Qimen Strategy Academy Singapore",
    "Qi Men Dun Jia course Singapore",
    "Qi Men intermediate course Singapore",
    "Qi Men advanced course Singapore",
    "Qi Men disciple programme",
    "奇门遁甲课程新加坡",
    "奇门遁甲中级课程",
    "奇门遁甲高级课程",
    "奇门遁甲弟子班",
    "启明遁甲研修",
  ],
  alternates: { canonical: "https://www.qmfeng.com/courses" },
};

const WA_LINK =
  "https://wa.me/6589593499?text=Hello%20Qimen%20Strategy%20Academy%2C%20I%20would%20like%20to%20enquire%20about%20the%20Qi%20Men%20Dun%20Jia%20course%20pathway%20in%20Singapore.";
const FOUNDATION_REGISTER_LINK = "/course-registration?course=qimen-foundation&batch=2026-09-19";

const qimenLevels = [
  {
    level: "01",
    title: "Qi Men Dun Jia Foundation Course",
    zh: "奇门遁甲基础课程",
    status: "Now Enrolling · S$990",
    audience: "Complete beginners",
    focus: "Core framework, Nine Palaces, Eight Doors, Nine Stars, Eight Deities, useful-god selection, palace relationships and a repeatable chart-reading sequence.",
    prerequisite: "No prior Qi Men knowledge required.",
    href: FOUNDATION_REGISTER_LINK,
    cta: "Select Batch & Register",
    featured: true,
  },
  {
    level: "02",
    title: "Qi Men Dun Jia Intermediate Course",
    zh: "奇门遁甲中级课程",
    status: "Interest Registration",
    audience: "Foundation graduates or equivalent",
    focus: "Deeper useful-god selection, multi-palace analysis, timing, interactions between symbols and structured interpretation through practical cases.",
    prerequisite: "Foundation Course completion or equivalent knowledge, subject to review.",
    href: "/course-registration?course=qimen-intermediate",
    cta: "Register Interest",
  },
  {
    level: "03",
    title: "Qi Men Dun Jia Advanced Course",
    zh: "奇门遁甲高级课程",
    status: "Interest Registration",
    audience: "Intermediate-level learners",
    focus: "Complex chart synthesis, business and major-decision cases, competing indicators, scenario comparison and supervised analytical practice.",
    prerequisite: "Intermediate Course completion or equivalent capability, subject to review.",
    href: "/course-registration?course=qimen-advanced",
    cta: "Register Interest",
  },
  {
    level: "04",
    title: "Qi Men Dun Jia Disciple Programme",
    zh: "奇门遁甲弟子班",
    status: "Application-Based",
    audience: "Selected advanced learners",
    focus: "Long-term mentorship, disciplined case review, professional ethics, applied practice and deeper transmission within the Qimen Strategy method.",
    prerequisite: "By application and assessment only. Admission is not automatic.",
    href: "/course-registration?course=qimen-disciple",
    cta: "Submit Interest Application",
  },
];

const otherModules = [
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
                A Complete Qi Men Dun Jia Learning Pathway
              </h1>
              <h2 className="mt-5 text-3xl font-semibold tracking-[0.12em] text-[#e2bd6b] md:text-5xl">基础 · 中级 · 高级 · 弟子班</h2>
              <p className="mt-8 max-w-4xl text-lg leading-8 text-white/74">
                Start with a clear foundation, progress through deeper chart analysis and move into supervised advanced practice. The Disciple Programme is a selective long-term mentorship pathway rather than an open-enrolment class.
              </p>
              <p className="mt-4 max-w-4xl leading-8 text-white/62">
                启明遁甲研修体系分为四个阶段：基础课程建立完整框架，中级课程强化读局与多宫分析，高级课程训练复杂案例与综合判断，弟子班则面向经过筛选、愿意长期学习与实践的进阶学员。
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href={FOUNDATION_REGISTER_LINK} className="inline-flex items-center justify-center bg-[#d6ad63] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-black hover:bg-[#f4dfb0]">
                  Foundation Course Registration
                </Link>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border border-[#d6ad63]/70 px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#f4dfb0] hover:bg-[#d6ad63]/10">
                  WhatsApp Course Enquiry
                </a>
              </div>
            </div>
          </section>

          <section className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-20 md:py-28">
            <div className="container mx-auto max-w-6xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Four-Level Progression</p>
              <h2 className="mt-4 max-w-4xl text-3xl font-semibold text-[#f4dfb0] md:text-5xl">Choose the level that matches your current foundation.</h2>
              <p className="mt-5 max-w-4xl leading-8 text-white/62">
                Later levels are not shortcuts. Intermediate, Advanced and Disciple-level admission may require prior course completion or an assessment of equivalent knowledge.
              </p>

              <div className="mt-12 grid gap-6 lg:grid-cols-2">
                {qimenLevels.map((course) => (
                  <article
                    key={course.level}
                    className={`flex h-full flex-col border p-7 md:p-9 ${course.featured ? "border-[#d6ad63] bg-[#d6ad63]/10" : "border-[#d6ad63]/25 bg-white/[0.035]"}`}
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d6ad63]">Level {course.level} · {course.status}</p>
                        <h3 className="mt-4 text-3xl font-semibold leading-tight text-[#f4dfb0]">{course.title}</h3>
                        <p className="mt-2 text-xl font-semibold text-[#d6ad63]">{course.zh}</p>
                      </div>
                      <span className="border border-[#d6ad63]/45 px-3 py-2 text-sm font-bold text-[#d6ad63]">{course.level}</span>
                    </div>
                    <div className="mt-7 space-y-4 text-sm leading-7 text-white/66">
                      <p><strong className="text-[#f4dfb0]">Suitable for:</strong> {course.audience}</p>
                      <p><strong className="text-[#f4dfb0]">Learning focus:</strong> {course.focus}</p>
                      <p><strong className="text-[#f4dfb0]">Entry requirement:</strong> {course.prerequisite}</p>
                    </div>
                    <Link href={course.href} className="mt-8 inline-flex w-full items-center justify-center border border-[#d6ad63]/70 px-6 py-4 text-sm font-bold uppercase tracking-[0.13em] text-[#f4dfb0] transition hover:bg-[#d6ad63] hover:text-black">
                      {course.cta}
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 py-20 md:py-28">
            <div className="container mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Current Weekly Intake</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl">Qi Men Dun Jia Foundation Course</h2>
                <p className="mt-3 text-2xl font-semibold text-[#d6ad63]">奇门遁甲基础课程</p>
                <p className="mt-6 text-base leading-8 text-white/68">
                  The Foundation Course is the only level currently open for regular weekly batch selection and PayNow registration. Later levels accept interest registration while dates, fees and prerequisites are being finalised.
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

          <section className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-20">
            <div className="container mx-auto max-w-6xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Other Future Modules</p>
              <h2 className="mt-4 text-3xl font-semibold text-[#f4dfb0] md:text-5xl">Additional learning modules under development.</h2>
              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {otherModules.map(([title, zh, status]) => (
                  <a key={title} href={WA_LINK} target="_blank" rel="noopener noreferrer" className="block border border-[#d6ad63]/20 bg-white/[0.035] p-6 transition hover:border-[#d6ad63]/60">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#d6ad63]">{status}</p>
                    <h3 className="mt-3 text-xl font-semibold text-[#f4dfb0]">{title}</h3>
                    <p className="mt-2 text-[#d6ad63]">{zh}</p>
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 py-24">
            <div className="container mx-auto max-w-5xl border border-[#d6ad63]/40 bg-[#d6ad63]/10 p-8 text-center md:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Registration & Entry Review</p>
              <h2 className="mt-5 text-3xl font-semibold text-[#f4dfb0] md:text-5xl">Foundation is open enrolment. Later levels require appropriate preparation.</h2>
              <p className="mx-auto mt-6 max-w-3xl leading-8 text-white/68">
                Interest registration does not guarantee admission, a specific date or a confirmed fee. The Disciple Programme is application-based and does not automatically grant certification, teaching rights or permission to reproduce course materials.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link href={FOUNDATION_REGISTER_LINK} className="inline-flex items-center justify-center bg-[#d6ad63] px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-black hover:bg-[#f4dfb0]">Select Foundation Batch</Link>
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
