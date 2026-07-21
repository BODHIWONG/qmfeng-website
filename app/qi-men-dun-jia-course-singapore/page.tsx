import type { Metadata } from "next";
import Link from "next/link";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";

export const metadata: Metadata = {
  title: "Qi Men Dun Jia Foundation Course Singapore｜S$990 Weekend Class",
  description:
    "Qimen Strategy Academy Singapore offers a two-day Qi Men Dun Jia foundation course for complete beginners. Regular Saturday–Sunday intakes from 19 September 2026, S$990 per participant.",
  keywords: [
    "Qi Men Dun Jia course Singapore",
    "Qi Men Dun Jia class Singapore",
    "Qimen Dunjia foundation course",
    "Weekend Qi Men course Singapore",
    "奇门遁甲课程新加坡",
    "新加坡奇门遁甲教学",
    "奇门遁甲基础课程",
  ],
  alternates: { canonical: "https://www.qmfeng.com/qi-men-dun-jia-course-singapore" },
};

const REGISTRATION_LINK = "/course-registration?course=qimen-foundation&batch=2026-09-19";
const WA_LINK =
  "https://wa.me/6589593499?text=Hi%2C%20I%27m%20interested%20in%20learning%20Qi%20Men%20Dun%20Jia.%20May%20I%20know%20which%20courses%20are%20currently%20available%20and%20the%20upcoming%20class%20dates%3F";

const curriculum = [
  ["01", "Qimen Framework", "奇门遁甲基础框架", "Understand the overall structure, modern decision-support value and responsible application boundaries."],
  ["02", "Core Foundation System", "核心基础系统", "Learn Heavenly Stems, Earthly Branches, time structure and the Nine Palaces."],
  ["03", "Eight Doors, Nine Stars & Eight Deities", "八门、九星与八神", "Understand the major symbols in a Qi Men chart and their practical meanings."],
  ["04", "Chart Reading Sequence", "排盘结构与读局顺序", "Learn useful-god selection, palace relationships and a repeatable reading sequence."],
  ["05", "Practical Case Learning", "真实案例实战学习", "Apply the framework to career, business, partnership, relationships and major decisions."],
  ["06", "Responsible Application", "负责任的应用边界", "Use Qi Men as supplementary decision support rather than fatalism, certainty or a replacement for regulated advice."],
];

const suitableFor = [
  "完全没有接触过奇门遁甲，希望从基础开始系统学习的人",
  "过去零散学习过奇门、八字或風水，但缺少清晰框架的人",
  "企业主、创业者、管理者及希望提升判断力的人士",
  "对东方战略智慧与传统文化有系统学习兴趣者",
];

const facts = [
  ["Course", "课程", "Qi Men Dun Jia Foundation Course｜奇门遁甲基础课程"],
  ["Instructor", "主讲", "Huang Qiming｜黄启明主讲"],
  ["Schedule", "开班安排", "Regular weekend intakes from 19 September 2026｜自2026年9月19日起安排常规周末班"],
  ["Days", "上课日", "Saturday & Sunday｜周六、周日"],
  ["Format", "形式", "Two-day small-group course｜两天小班精品课程"],
  ["Level", "程度", "Suitable for complete beginners｜适合零基础"],
  ["Language", "语言", "Chinese teaching with English support｜中文授课，可英文辅助"],
  ["Fee", "费用", "S$990 per participant｜每位S$990"],
  ["Location", "地点", "Blk 210 New Upper Changi Road #01-729, Singapore 460210"],
];

const expectations = [
  ["Included", "课程包含", "Two days of in-person teaching, structured foundation content, guided case explanation and class Q&A."],
  ["Not Included", "课程不包含", "Professional certification, guaranteed mastery, unlimited after-class consultation or permission to reproduce and teach the materials."],
  ["Class Conduct", "课堂规范", "Participant privacy and confidential case material must be respected. Recording and redistribution require written permission."],
  ["Place Confirmation", "名额确认", "A place is confirmed only after payment verification and written acknowledgement from Qimen Strategy Academy."],
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
              <h1 className="mt-5 max-w-5xl text-4xl font-semibold uppercase leading-[0.98] tracking-[0.03em] text-[#f4dfb0] md:text-7xl">Qi Men Dun Jia Foundation Course</h1>
              <h2 className="mt-5 text-3xl font-semibold tracking-[0.14em] text-[#e2bd6b] md:text-5xl">奇门遁甲基础课程</h2>
              <p className="mt-8 max-w-4xl text-lg leading-8 text-white/76">A structured two-day small-group course for complete beginners. Learn the foundation of Qi Men Dun Jia through a clear framework, a repeatable reading sequence and practical examples.</p>
              <p className="mt-4 max-w-4xl leading-8 text-white/64">课程从基础框架、九宫结构、八门、九星与八神开始，逐步讲解取用神、宫位关系与读局顺序，并结合事业、合作、关系和重大决策案例。课程重视实际应用，也明确专业边界。</p>
              <div className="mt-8 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ["Beginner Friendly", "适合零基础"],
                  ["Huang Qiming", "黄启明主讲"],
                  ["Weekend Intakes", "常规周末班"],
                  ["Practical Cases", "真实案例讲解"],
                ].map(([en, zh]) => (
                  <div key={en} className="border border-[#d6ad63]/25 bg-black/30 p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#d6ad63]">{en}</p>
                    <p className="mt-2 text-sm font-semibold text-[#f4dfb0]">{zh}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href={REGISTRATION_LINK} className="inline-flex items-center justify-center bg-[#d6ad63] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-black hover:bg-[#f4dfb0]">Select Batch & Register</Link>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border border-[#d6ad63]/70 px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#f4dfb0] hover:bg-[#d6ad63]/10">Enquire About Qi Men Courses</a>
              </div>
              <p className="mt-4 text-sm text-white/52">Review the Course Registration Policy before payment. Places are confirmed after payment verification.</p>
            </div>
          </section>

          <section className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-12">
            <div className="container mx-auto grid max-w-6xl gap-4 md:grid-cols-4">
              {[
                ["Weekend Intakes", "常规周末班", "Saturday and Sunday schedule"],
                ["Two Days", "两天系统课程", "Focused foundation training"],
                ["Small Group", "小班精品教学", "More interaction and questions"],
                ["Course Fee", "S$990 / person", "PayNow registration available"],
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
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d6ad63]">Course Curriculum</p>
              <h2 className="mt-4 max-w-4xl text-3xl font-semibold text-[#f4dfb0] md:text-5xl">Start with the foundation. Learn through practical examples.</h2>
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

          <section className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-20">
            <div className="container mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d6ad63]">Who This Is For</p>
                <h2 className="mt-4 text-3xl font-semibold text-[#f4dfb0] md:text-5xl">No prior Qi Men knowledge is required.</h2>
                <p className="mt-6 leading-8 text-white/68">适合完全零基础，也适合过去接触过相关内容、但希望重新建立清晰学习系统的人。</p>
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
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Course Details</p>
                <h2 className="mt-3 text-3xl font-semibold text-[#f4dfb0]">课程资料</h2>
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
              <h2 className="mt-5 text-3xl font-semibold text-[#f4dfb0] md:text-5xl">Choose an available weekend batch.</h2>
              <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/70">报名页会显示未来可选的周六、周日班次。选择日期、填写学员资料并完成PayNow付款后，我们将核实并书面确认名额。</p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link href={REGISTRATION_LINK} className="inline-flex items-center justify-center bg-[#d6ad63] px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-black hover:bg-[#f4dfb0]">Select Batch & Register</Link>
                <Link href="/course-policy" className="inline-flex items-center justify-center border border-[#d6ad63]/70 px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#f4dfb0] hover:bg-[#d6ad63]/10">Course Policy</Link>
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