import type { Metadata } from "next";
import Link from "next/link";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";

export const metadata: Metadata = {
  title: "Two-Day Practical Qi Men Dun Jia Foundation Course Singapore",
  description:
    "A two-day practical Qi Men Dun Jia Foundation Course in Singapore. Learn the core framework, reading sequence and guided case analysis before progressing to Intermediate, Advanced and the application-based Disciple Programme.",
  keywords: [
    "two day Qi Men Dun Jia course Singapore",
    "practical Qi Men Dun Jia course Singapore",
    "Qi Men Dun Jia foundation course",
    "Qi Men chart reading training",
    "Qi Men intermediate course",
    "Qi Men advanced course",
    "奇门遁甲两天课程",
    "奇门遁甲基础实战课程",
    "奇门遁甲中级课程",
    "奇门遁甲高级课程",
    "奇门遁甲弟子班",
  ],
  alternates: { canonical: "https://www.qmfeng.com/qi-men-dun-jia-course-singapore" },
};

const REGISTRATION_LINK = "/course-registration?course=qimen-foundation&batch=2026-09-19";
const WA_LINK =
  "https://wa.me/6589593499?text=Hi%2C%20I%27m%20interested%20in%20the%20two-day%20Qi%20Men%20Dun%20Jia%20Foundation%20Course.%20May%20I%20know%20more%20about%20the%20course%20and%20future%20levels%3F";

const dayOne = [
  ["01", "How to Frame the Question", "如何界定问题与分析目标"],
  ["02", "Core Chart Structure", "排盘结构、时间信息与九宫框架"],
  ["03", "Doors, Stars, Deities & Stems", "八门、九星、八神与天干的基础作用"],
  ["04", "Useful-God Selection", "取用神与基本宫位关系"],
];

const dayTwo = [
  ["01", "A Repeatable Reading Sequence", "建立稳定的基础读局顺序"],
  ["02", "Instructor-Led Case Demonstration", "老师完整示范真实案例拆局"],
  ["03", "Guided Student Practice", "学员在指导下完成基础实盘练习"],
  ["04", "Correction, Debrief & Q&A", "课堂纠偏、复盘与答疑"],
];

const learningOutcomes = [
  "Understand the essential structure of a Qi Men chart and the role of its main components.",
  "Follow a basic analytical sequence instead of reading symbols in isolation.",
  "Complete introductory chart exercises with instructor guidance.",
  "Recognise where Foundation-level analysis ends and when deeper study is required.",
];

const pathway = [
  {
    level: "01",
    title: "Foundation Practical Course",
    zh: "基础实战课程",
    format: "2-day weekend course",
    status: "Now enrolling · S$990",
    purpose: "Establish the core framework, basic reading sequence and introductory case-analysis ability.",
    entry: "Open to complete beginners.",
    href: REGISTRATION_LINK,
    cta: "Select Batch",
    active: true,
  },
  {
    level: "02",
    title: "Intermediate Course",
    zh: "中级课程",
    format: "Format and fee to be announced",
    status: "Interest registration",
    purpose: "Strengthen useful-god selection, multi-palace analysis, timing and structured interpretation through repeated case drills.",
    entry: "Foundation completion or equivalent ability, subject to review.",
    href: "/course-registration?course=qimen-intermediate",
    cta: "Register Interest",
  },
  {
    level: "03",
    title: "Advanced Course",
    zh: "高级课程",
    format: "Format and fee to be announced",
    status: "Interest registration",
    purpose: "Integrate complex indicators, compare scenarios and analyse business or major-decision cases under supervision.",
    entry: "Intermediate completion or equivalent ability, subject to review.",
    href: "/course-registration?course=qimen-advanced",
    cta: "Register Interest",
  },
  {
    level: "04",
    title: "Disciple Programme",
    zh: "弟子班",
    format: "Long-term mentorship",
    status: "Application-based",
    purpose: "Develop judgement through continued case submission, correction, ethics and deeper applied training.",
    entry: "Application and assessment only. Admission is not automatic.",
    href: "/course-registration?course=qimen-disciple",
    cta: "Submit Application",
  },
];

const facts = [
  ["Course", "课程", "Qi Men Dun Jia Foundation Practical Course｜奇门遁甲基础实战课程"],
  ["Duration", "时长", "2 days｜两天"],
  ["Days", "上课日", "Saturday & Sunday｜周六、周日"],
  ["Format", "形式", "Small-group, in-person practical training｜线下小班实战教学"],
  ["Level", "程度", "Complete beginners welcome｜适合零基础"],
  ["Instructor", "主讲", "Huang Qiming｜黄启明主讲"],
  ["Language", "语言", "Chinese teaching with English support｜中文授课，可英文辅助"],
  ["Fee", "费用", "S$990 per participant｜每位S$990"],
  ["Location", "地点", "Blk 210 New Upper Changi Road #01-729, Singapore 460210"],
];

const boundaries = [
  ["Foundation Scope", "基础班范围", "This two-day course establishes the core framework and introductory practical method. It is not presented as mastery of the complete Qi Men system."],
  ["Practice Standard", "实战标准", "Students will work through guided examples and introductory exercises. Independent professional-level analysis requires further study and practice."],
  ["Progression", "进阶规则", "Intermediate and Advanced entry may require completion of the previous level or an assessment of equivalent ability."],
  ["Disciple Programme", "弟子班", "The Disciple Programme is a selective long-term mentorship pathway, not a short public course."],
  ["Materials & Recording", "资料与录制", "Course materials are for enrolled participants. Recording, reproduction and teaching use require written permission."],
  ["Professional Boundaries", "专业边界", "Qi Men is taught as supplementary decision support and does not replace regulated financial, legal, medical or psychological advice."],
];

export default function QiMenCoursePage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main>
          <section className="relative overflow-hidden px-4 pb-20 pt-32 md:pb-28 md:pt-40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(214,173,99,0.24),transparent_34%),linear-gradient(135deg,rgba(244,223,176,0.08),transparent_42%)]" />
            <div className="container relative mx-auto max-w-6xl">
              <p className="text-xs font-bold uppercase tracking-[0.30em] text-[#d6ad63]">Level 01 · Qimen Strategy Academy · Singapore</p>
              <h1 className="mt-5 max-w-5xl text-4xl font-semibold uppercase leading-[0.98] tracking-[0.03em] text-[#f4dfb0] md:text-7xl">Two-Day Qi Men Dun Jia Foundation Practical Course</h1>
              <h2 className="mt-5 text-3xl font-semibold tracking-[0.08em] text-[#e2bd6b] md:text-5xl">两天奇门遁甲基础实战课程</h2>
              <p className="mt-8 max-w-4xl text-lg leading-8 text-white/76">A structured two-day introduction for complete beginners. Learn the core chart framework, watch full demonstrations, complete guided exercises and understand the correct path into Intermediate, Advanced and Disciple-level study.</p>
              <p className="mt-4 max-w-4xl leading-8 text-white/64">这不是把全部奇门体系压缩进两天，而是在两天内帮助学员建立正确框架、基础读局顺序和初步实战能力，为后续中级班、高级班及弟子班打下清晰基础。</p>
              <div className="mt-8 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ["Duration", "2 Days｜两天"],
                  ["Level", "Foundation｜基础班"],
                  ["Format", "Small Group｜小班教学"],
                  ["Fee", "S$990 / Person"],
                ].map(([label, value]) => (
                  <div key={label} className="border border-[#d6ad63]/25 bg-black/30 p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#d6ad63]">{label}</p>
                    <p className="mt-2 text-sm font-semibold text-[#f4dfb0]">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href={REGISTRATION_LINK} className="inline-flex items-center justify-center bg-[#d6ad63] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-black hover:bg-[#f4dfb0]">Select a Foundation Batch</Link>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border border-[#d6ad63]/70 px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#f4dfb0] hover:bg-[#d6ad63]/10">WhatsApp Course Enquiry</a>
              </div>
            </div>
          </section>

          <section className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-20 md:py-28">
            <div className="container mx-auto max-w-6xl">
              <p className="text-xs font-bold uppercase tracking-[0.30em] text-[#d6ad63]">Two-Day Course Structure</p>
              <h2 className="mt-4 max-w-4xl text-3xl font-semibold text-[#f4dfb0] md:text-5xl">Day 1 builds the framework. Day 2 turns the framework into guided practice.</h2>
              <div className="mt-12 grid gap-6 lg:grid-cols-2">
                <article className="border border-[#d6ad63]/30 bg-white/[0.035] p-7 md:p-9">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d6ad63]">Day 1 · Foundation & Reading Logic</p>
                  <h3 className="mt-4 text-3xl font-semibold text-[#f4dfb0]">建立框架与基础读局逻辑</h3>
                  <div className="mt-7 space-y-4">
                    {dayOne.map(([no, en, zh]) => (
                      <div key={no} className="flex gap-4 border-t border-[#d6ad63]/15 pt-4">
                        <span className="text-sm font-bold text-[#d6ad63]">{no}</span>
                        <div>
                          <p className="font-semibold text-[#f4dfb0]">{en}</p>
                          <p className="mt-1 text-sm leading-6 text-white/58">{zh}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
                <article className="border border-[#d6ad63] bg-[#d6ad63]/10 p-7 md:p-9">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d6ad63]">Day 2 · Practical Application</p>
                  <h3 className="mt-4 text-3xl font-semibold text-[#f4dfb0]">案例实战、练习与课堂纠偏</h3>
                  <div className="mt-7 space-y-4">
                    {dayTwo.map(([no, en, zh]) => (
                      <div key={no} className="flex gap-4 border-t border-[#d6ad63]/20 pt-4">
                        <span className="text-sm font-bold text-[#d6ad63]">{no}</span>
                        <div>
                          <p className="font-semibold text-[#f4dfb0]">{en}</p>
                          <p className="mt-1 text-sm leading-6 text-white/62">{zh}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section className="px-4 py-20 md:py-28">
            <div className="container mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.30em] text-[#d6ad63]">Realistic Learning Outcome</p>
                <h2 className="mt-4 text-3xl font-semibold text-[#f4dfb0] md:text-5xl">What two days should achieve—and what it should not promise.</h2>
                <p className="mt-6 leading-8 text-white/66">两天课程的目标，是让学员从“看不懂盘”进入“知道如何按顺序分析基础问题”。它不是全部体系的终点，也不应承诺学完两天即可处理所有复杂案例。</p>
              </div>
              <div className="space-y-4">
                {learningOutcomes.map((item, index) => (
                  <div key={item} className="flex gap-4 border border-[#d6ad63]/20 bg-[#070707] p-5">
                    <span className="text-sm font-bold text-[#d6ad63]">{String(index + 1).padStart(2, "0")}</span>
                    <p className="leading-7 text-white/74">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-20 md:py-28">
            <div className="container mx-auto max-w-6xl">
              <p className="text-xs font-bold uppercase tracking-[0.30em] text-[#d6ad63]">Four-Level Learning Pathway</p>
              <h2 className="mt-4 max-w-4xl text-3xl font-semibold text-[#f4dfb0] md:text-5xl">Each level has a different purpose, depth and admission standard.</h2>
              <p className="mt-5 max-w-4xl leading-8 text-white/62">基础班解决“从哪里开始”；中级班解决“如何稳定分析”；高级班解决“如何处理复杂问题”；弟子班则进入长期案例训练与方法传承。</p>
              <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {pathway.map((item) => (
                  <article key={item.level} className={`flex h-full flex-col border p-6 ${item.active ? "border-[#d6ad63] bg-[#d6ad63]/10" : "border-[#d6ad63]/25 bg-black"}`}>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#d6ad63]">Level {item.level}</p>
                    <h3 className="mt-4 text-2xl font-semibold text-[#f4dfb0]">{item.title}</h3>
                    <p className="mt-2 text-lg font-semibold text-[#d6ad63]">{item.zh}</p>
                    <p className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-white/45">{item.format}</p>
                    <p className="mt-3 text-sm font-semibold text-[#f4dfb0]">{item.status}</p>
                    <p className="mt-5 text-sm leading-7 text-white/62">{item.purpose}</p>
                    <p className="mt-4 text-sm leading-7 text-white/48"><strong className="text-white/70">Entry:</strong> {item.entry}</p>
                    <Link href={item.href} className="mt-auto pt-7 text-xs font-bold uppercase tracking-[0.14em] text-[#f4dfb0] hover:text-[#d6ad63]">{item.cta} →</Link>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 py-20">
            <div className="container mx-auto max-w-6xl grid gap-6 lg:grid-cols-2">
              <div className="border border-[#d6ad63]/30 bg-[#070707] p-8 md:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Foundation Course Details</p>
                <h2 className="mt-3 text-3xl font-semibold text-[#f4dfb0]">两天基础实战课程资料</h2>
                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  {facts.map(([en, zh, value]) => (
                    <div key={en} className="border-b border-[#d6ad63]/15 pb-4">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#d6ad63]">{en} · {zh}</p>
                      <p className="mt-2 text-sm leading-7 text-white/76">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border border-[#d6ad63]/30 bg-[#070707] p-8 md:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Course Boundaries</p>
                <h2 className="mt-3 text-3xl font-semibold text-[#f4dfb0]">课程层次与专业边界</h2>
                <div className="mt-8 space-y-5">
                  {boundaries.map(([title, zh, body]) => (
                    <div key={title} className="border-l-2 border-[#d6ad63] pl-4">
                      <p className="text-sm font-semibold text-[#f4dfb0]">{title} · {zh}</p>
                      <p className="mt-2 text-sm leading-7 text-white/62">{body}</p>
                    </div>
                  ))}
                </div>
                <Link href="/course-policy" className="mt-8 inline-flex border border-[#d6ad63]/60 px-5 py-3 text-sm font-bold uppercase tracking-[0.13em] text-[#f4dfb0] hover:bg-[#d6ad63]/10">Read Course Policy</Link>
              </div>
            </div>
          </section>

          <section className="px-4 pb-24">
            <div className="container mx-auto max-w-4xl border border-[#d6ad63]/40 bg-[#d6ad63]/10 p-8 text-center md:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.30em] text-[#d6ad63]">Current Open Enrolment · Level 01</p>
              <h2 className="mt-5 text-3xl font-semibold text-[#f4dfb0] md:text-5xl">Start with the two-day Foundation Practical Course.</h2>
              <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/70">当前正式开放报名的是两天基础实战课程。中级班、高级班及弟子班分别采用进阶审核、意向登记或申请制，不与基础班混为同一层次。</p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link href={REGISTRATION_LINK} className="inline-flex items-center justify-center bg-[#d6ad63] px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-black hover:bg-[#f4dfb0]">Select Foundation Batch</Link>
                <Link href="/courses" className="inline-flex items-center justify-center border border-[#d6ad63]/70 px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#f4dfb0] hover:bg-[#d6ad63]/10">View All Levels</Link>
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
