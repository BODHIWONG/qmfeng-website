import type { Metadata } from "next";
import Link from "next/link";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";

export const metadata: Metadata = {
  title: "Practical Qi Men Dun Jia Course Singapore｜Case-Based Weekend Training",
  description:
    "Qimen Strategy Academy Singapore offers practice-led Qi Men Dun Jia training through frameworks, instructor demonstrations, guided chart exercises, real cases and classroom correction. Foundation weekend classes are S$990.",
  keywords: [
    "practical Qi Men Dun Jia course Singapore",
    "Qi Men Dun Jia case study course",
    "Qi Men Dun Jia weekend class Singapore",
    "Qi Men chart reading training",
    "Qi Men intermediate course",
    "Qi Men advanced course",
    "奇门遁甲实战课程新加坡",
    "奇门遁甲案例教学",
    "奇门遁甲基础课程",
    "奇门遁甲中级课程",
    "奇门遁甲高级课程",
    "奇门遁甲弟子班",
  ],
  alternates: { canonical: "https://www.qmfeng.com/qi-men-dun-jia-course-singapore" },
};

const REGISTRATION_LINK = "/course-registration?course=qimen-foundation&batch=2026-09-19";
const WA_LINK =
  "https://wa.me/6589593499?text=Hi%2C%20I%27m%20interested%20in%20the%20practice-led%20Qi%20Men%20Dun%20Jia%20course.%20May%20I%20know%20which%20level%20is%20suitable%20for%20me%3F";

const curriculum = [
  ["01", "Question Framing", "问题定义与分析目标", "Clarify what is actually being asked, define the decision context and avoid vague or unfocused chart reading."],
  ["02", "Core Chart Structure", "排盘结构与九宫框架", "Learn the time structure, Heavenly Stems, Earthly Branches and Nine Palaces as the working map for analysis."],
  ["03", "Doors, Stars & Deities", "八门、九星与八神", "Understand the symbols in context rather than memorising isolated meanings."],
  ["04", "Useful-God Selection", "取用神与宫位关系", "Select relevant reference points, assess palace relationships and identify the evidence that supports a judgement."],
  ["05", "Reading Sequence", "建立稳定读局顺序", "Follow a repeatable process from the question to evidence, conflicts, conclusion and practical next steps."],
  ["06", "Guided Case Practice", "真实案例实盘练习", "Apply the framework to career, business, partnership, relationships, timing and major decisions under classroom guidance."],
];

const practiceCycle = [
  ["01", "Explain", "讲解", "The instructor explains the framework, decision logic and common mistakes."],
  ["02", "Demonstrate", "示范", "A complete chart is analysed step by step, including why certain evidence is used or rejected."],
  ["03", "Practise", "练习", "Students work through a chart independently or in a guided small-group exercise."],
  ["04", "Correct", "纠偏", "The class reviews missed evidence, weak assumptions and contradictions in the reasoning."],
  ["05", "Debrief", "复盘", "Students summarise the method and convert the analysis into realistic priorities and actions."],
];

const pathway = [
  {
    level: "01",
    title: "Foundation Course",
    zh: "基础实战课程",
    status: "Now Enrolling · S$990",
    body: "Build the framework and complete introductory chart-reading exercises through guided cases.",
    href: "/course-registration?course=qimen-foundation&batch=2026-09-19",
    cta: "Select Batch",
  },
  {
    level: "02",
    title: "Intermediate Course",
    zh: "中级实战课程",
    status: "Interest Registration",
    body: "Strengthen useful-god selection, multi-palace analysis, timing and interpretation through repeated case drills.",
    href: "/course-registration?course=qimen-intermediate",
    cta: "Register Interest",
  },
  {
    level: "03",
    title: "Advanced Course",
    zh: "高级实战课程",
    status: "Interest Registration",
    body: "Analyse complex charts, compare scenarios and defend conclusions in supervised business and major-decision cases.",
    href: "/course-registration?course=qimen-advanced",
    cta: "Register Interest",
  },
  {
    level: "04",
    title: "Disciple Programme",
    zh: "弟子班",
    status: "Application-Based",
    body: "A selective long-term mentorship pathway based on disciplined case submission, correction, ethics and applied practice.",
    href: "/course-registration?course=qimen-disciple",
    cta: "Submit Application",
  },
];

const suitableFor = [
  "完全没有接触过奇门遁甲，希望从基础开始系统学习的人",
  "过去零散学习过相关内容，但不会独立完成读局与判断的人",
  "企业主、创业者、管理者及希望提升分析与决策能力的人士",
  "重视案例、练习和课堂纠偏，而不是只想背诵理论的人",
];

const facts = [
  ["Course", "课程", "Qi Men Dun Jia Foundation Practical Course｜奇门遁甲基础实战课程"],
  ["Instructor", "主讲", "Huang Qiming｜黄启明主讲"],
  ["Schedule", "开班安排", "Regular weekend intakes from 19 September 2026｜自2026年9月19日起安排常规周末班"],
  ["Days", "上课日", "Saturday & Sunday｜周六、周日"],
  ["Format", "形式", "Two-day small-group practical training｜两天小班实战训练"],
  ["Method", "教学方式", "Framework, demonstration, practice, correction and debrief｜讲解、示范、练习、纠偏与复盘"],
  ["Language", "语言", "Chinese teaching with English support｜中文授课，可英文辅助"],
  ["Fee", "费用", "S$990 per participant｜每位S$990"],
  ["Location", "地点", "Blk 210 New Upper Changi Road #01-729, Singapore 460210"],
];

const expectations = [
  ["Practice Included", "实战内容", "Guided chart exercises, instructor demonstrations, case discussion, classroom correction and Q&A are included within the two-day programme."],
  ["Learning Outcome", "学习成果", "The course aims to help students follow a basic analytical sequence. It does not guarantee mastery after one weekend."],
  ["Progression", "进阶规则", "Intermediate and Advanced admission may require completion of the previous level or an assessment of equivalent practical ability."],
  ["Disciple Programme", "弟子班", "Admission is by application and assessment only. Participation does not automatically grant certification, teaching rights or commercial-use permission."],
  ["Case Confidentiality", "案例保密", "Participant privacy and confidential case material must be respected. Recording and redistribution require written permission."],
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
              <p className="text-xs font-bold uppercase tracking-[0.30em] text-[#d6ad63]">Qimen Strategy Academy · Singapore</p>
              <h1 className="mt-5 max-w-5xl text-4xl font-semibold uppercase leading-[0.98] tracking-[0.03em] text-[#f4dfb0] md:text-7xl">Practical Qi Men Dun Jia Training</h1>
              <h2 className="mt-5 text-3xl font-semibold tracking-[0.10em] text-[#e2bd6b] md:text-5xl">以实战为导向的奇门遁甲课程</h2>
              <p className="mt-8 max-w-4xl text-lg leading-8 text-white/76">Learn the framework, watch complete chart demonstrations, practise on cases and receive correction. The objective is to develop a usable analytical process—not simply memorise terminology.</p>
              <p className="mt-4 max-w-4xl leading-8 text-white/64">课程围绕真实问题展开，从问题定义、取用神、宫位关系、证据分析到结论表达，让学员逐步掌握可以实际运用的读局方法。</p>
              <div className="mt-8 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ["Real Cases", "真实案例"],
                  ["Guided Practice", "课堂实盘练习"],
                  ["Correction", "老师纠偏"],
                  ["Clear Method", "可复用分析流程"],
                ].map(([en, zh]) => (
                  <div key={en} className="border border-[#d6ad63]/25 bg-black/30 p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#d6ad63]">{en}</p>
                    <p className="mt-2 text-sm font-semibold text-[#f4dfb0]">{zh}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href={REGISTRATION_LINK} className="inline-flex items-center justify-center bg-[#d6ad63] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-black hover:bg-[#f4dfb0]">Foundation: Select Batch</Link>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border border-[#d6ad63]/70 px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#f4dfb0] hover:bg-[#d6ad63]/10">Ask Which Level Suits You</a>
              </div>
              <p className="mt-4 text-sm text-white/52">Foundation places are confirmed after payment verification. Later levels require eligibility review.</p>
            </div>
          </section>

          <section className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-12">
            <div className="container mx-auto grid max-w-6xl gap-4 md:grid-cols-4">
              {[
                ["Current Intake", "Foundation Practical Course", "Weekly Saturday–Sunday batches"],
                ["Foundation Fee", "S$990 / person", "PayNow registration available"],
                ["Teaching", "Small Group", "Practice, questions and correction"],
                ["Instructor", "Huang Qiming", "黄启明主讲"],
              ].map(([title, value, body]) => (
                <article key={title} className="border border-[#d6ad63]/25 bg-white/[0.035] p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d6ad63]">{title}</p>
                  <h3 className="mt-3 text-xl font-semibold text-[#f4dfb0]">{value}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/62">{body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="px-4 py-20 md:py-28">
            <div className="container mx-auto max-w-6xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d6ad63]">Foundation Practical Curriculum</p>
              <h2 className="mt-4 max-w-4xl text-3xl font-semibold text-[#f4dfb0] md:text-5xl">Learn the structure, then use it on actual questions.</h2>
              <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {curriculum.map(([no, title, zh, body]) => (
                  <article key={no} className="border border-[#d6ad63]/25 bg-white/[0.035] p-7">
                    <p className="text-sm font-bold text-[#d6ad63]">{no}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-[#f4dfb0]">{title}</h3>
                    <p className="mt-2 text-lg font-semibold text-[#d6ad63]">{zh}</p>
                    <p className="mt-5 text-sm leading-7 text-white/66">{body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-20 md:py-28">
            <div className="container mx-auto max-w-6xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d6ad63]">How Each Topic Is Taught</p>
              <h2 className="mt-4 max-w-4xl text-3xl font-semibold text-[#f4dfb0] md:text-5xl">讲解、示范、练习、纠偏、复盘</h2>
              <p className="mt-5 max-w-4xl leading-8 text-white/62">每一个核心知识点尽量完成一个教学闭环，避免“听懂了但不会用”。</p>
              <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
                {practiceCycle.map(([no, title, zh, body]) => (
                  <article key={no} className="border border-[#d6ad63]/25 bg-black p-6">
                    <p className="text-sm font-bold text-[#d6ad63]">{no}</p>
                    <h3 className="mt-3 text-xl font-semibold text-[#f4dfb0]">{title}</h3>
                    <p className="mt-2 font-semibold text-[#d6ad63]">{zh}</p>
                    <p className="mt-4 text-sm leading-7 text-white/62">{body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 py-20 md:py-28">
            <div className="container mx-auto max-w-6xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d6ad63]">Course Progression</p>
              <h2 className="mt-4 max-w-4xl text-3xl font-semibold text-[#f4dfb0] md:text-5xl">Four levels, progressing by practical ability.</h2>
              <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {pathway.map((item) => (
                  <article key={item.level} className="flex h-full flex-col border border-[#d6ad63]/25 bg-white/[0.035] p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#d6ad63]">Level {item.level}</p>
                    <h3 className="mt-4 text-2xl font-semibold text-[#f4dfb0]">{item.title}</h3>
                    <p className="mt-2 text-lg font-semibold text-[#d6ad63]">{item.zh}</p>
                    <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-white/45">{item.status}</p>
                    <p className="mt-5 text-sm leading-7 text-white/64">{item.body}</p>
                    <Link href={item.href} className="mt-auto pt-7 text-xs font-bold uppercase tracking-[0.14em] text-[#f4dfb0] hover:text-[#d6ad63]">{item.cta} →</Link>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-20 md:py-28">
            <div className="container mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d6ad63]">Who Foundation Is For</p>
                <h2 className="mt-4 text-3xl font-semibold text-[#f4dfb0] md:text-5xl">No prior Qi Men knowledge is required.</h2>
                <p className="mt-6 leading-8 text-white/68">适合零基础，也适合过去听过课程、但面对真实盘局仍然不知道从哪里开始分析的人。</p>
              </div>
              <div className="space-y-4">
                {suitableFor.map((item, index) => (
                  <div key={item} className="flex gap-4 border border-[#d6ad63]/20 bg-black p-5">
                    <span className="text-sm font-bold text-[#d6ad63]">{String(index + 1).padStart(2, "0")}</span>
                    <p className="leading-7 text-white/75">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 py-20">
            <div className="container mx-auto max-w-6xl grid gap-6 lg:grid-cols-2">
              <div className="border border-[#d6ad63]/30 bg-[#070707] p-8 md:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Foundation Course Details</p>
                <h2 className="mt-3 text-3xl font-semibold text-[#f4dfb0]">基础实战课程资料</h2>
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
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Expectations & Boundaries</p>
                <h2 className="mt-3 text-3xl font-semibold text-[#f4dfb0]">课程范围与规范</h2>
                <div className="mt-8 space-y-5">
                  {expectations.map(([title, zh, body]) => (
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
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d6ad63]">Course Registration</p>
              <h2 className="mt-5 text-3xl font-semibold text-[#f4dfb0] md:text-5xl">Start with Foundation practical training.</h2>
              <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/70">基础课程可直接选择周末班次；中级、高级和弟子班可提交意向资料，我们将根据学习背景、实际能力与未来开班安排联系申请者。</p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link href={REGISTRATION_LINK} className="inline-flex items-center justify-center bg-[#d6ad63] px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-black hover:bg-[#f4dfb0]">Foundation Registration</Link>
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
