import type { Metadata } from "next";
import Link from "next/link";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";

export const metadata: Metadata = {
  title: "Qi Men Dun Jia Foundation Course Singapore｜奇门遁甲基础课程",
  description:
    "启明遁甲 Qimen Strategy 新加坡两天奇门遁甲基础课程。自2026年9月19日起，每周六、周日开班，小班教学，适合零基础，课程费用每位S$990。",
  keywords: [
    "Qi Men Dun Jia course Singapore",
    "Qi Men Dun Jia class Singapore",
    "Qimen Dunjia foundation course",
    "奇门遁甲课程新加坡",
    "新加坡奇门遁甲教学",
    "奇门遁甲基础课程",
  ],
  alternates: { canonical: "https://www.qmfeng.com/qi-men-dun-jia-course-singapore" },
};

const REGISTRATION_LINK = "/course-registration?course=qimen-foundation&batch=2026-09-19";
const WA_LINK = "https://wa.me/6589593499?text=Hello%20Qimen%20Strategy%2C%20I%20would%20like%20to%20enquire%20about%20the%20Qi%20Men%20Dun%20Jia%20Foundation%20Course.";

const curriculum = [
  ["01", "Qimen Framework", "奇门遁甲基础框架", "Understand the structure, application boundaries and modern decision value of Qi Men Dun Jia."],
  ["02", "Core Foundation System", "核心基础系统", "Learn Heavenly Stems, Earthly Branches, time structure and the Nine Palaces."],
  ["03", "Eight Doors, Nine Stars & Eight Deities", "八门、九星与八神", "Understand the key symbols in a Qi Men chart and their practical meanings."],
  ["04", "Chart Reading Sequence", "排盘结构与读局顺序", "Learn useful-god selection, palace relationships and a clear reading process."],
  ["05", "Practical Case Learning", "真实案例实战学习", "Apply the framework to career, business, partnership, relationships and major decisions."],
  ["06", "Responsible Application", "负责任的应用边界", "Use Qi Men as structured decision support rather than fatalism or absolute prediction."],
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
  ["Schedule", "开班安排", "Weekly from 19 September 2026｜自2026年9月19日起每周开班"],
  ["Days", "上课日", "Saturday & Sunday｜周六、周日"],
  ["Format", "形式", "2-day small-group course｜两天小班精品课程"],
  ["Level", "程度", "Suitable for complete beginners｜适合零基础"],
  ["Language", "语言", "Chinese teaching with English support｜中文授课，可英文辅助"],
  ["Fee", "费用", "S$990 per participant｜每位S$990"],
  ["Location", "地点", "Blk 210 New Upper Changi Road #01-729, Singapore 460210"],
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
              <p className="text-xs font-bold uppercase tracking-[0.34em] text-[#d6ad63]">Qimen Strategy Singapore · Foundation Course</p>
              <h1 className="mt-5 max-w-5xl text-4xl font-semibold uppercase leading-none tracking-[0.03em] text-[#f4dfb0] md:text-7xl">Qi Men Dun Jia Foundation Course</h1>
              <h2 className="mt-5 text-3xl font-semibold tracking-[0.14em] text-[#e2bd6b] md:text-5xl">奇门遁甲基础课程</h2>
              <p className="mt-6 text-lg font-semibold text-[#d6ad63] md:text-2xl">Weekly Saturday–Sunday Intakes · From 19 September 2026 · S$990</p>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/78">A structured two-day small-group course for complete beginners. Learn the foundation of Qi Men Dun Jia through a clear framework and practical examples.</p>
              <p className="mt-4 max-w-3xl leading-8 text-white/68">课程从基础框架、九宫结构、八门、九星与八神开始，逐步讲解取用神、宫位关系与读局顺序，并结合事业、合作、关系和重大决策案例。自2026年9月19日起，课程原则上每周六、周日开班。</p>
              <div className="mt-8 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {["适合零基础", "黄启明主讲", "每周末开班", "真实案例讲解"].map((item) => <div key={item} className="border border-[#d6ad63]/25 bg-black/30 p-4 text-sm font-semibold text-[#f4dfb0]">{item}</div>)}
              </div>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href={REGISTRATION_LINK} className="inline-flex items-center justify-center bg-[#d6ad63] px-7 py-4 text-sm font-bold uppercase tracking-[0.15em] text-black hover:bg-[#f4dfb0]">Select Batch & Register</Link>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border border-[#d6ad63]/70 px-7 py-4 text-sm font-bold uppercase tracking-[0.15em] text-[#f4dfb0] hover:bg-[#d6ad63]/10">WhatsApp Course Enquiry</a>
              </div>
              <p className="mt-4 text-sm text-white/55">The registration page automatically selects the next available weekend. Places are confirmed after payment verification.</p>
            </div>
          </section>

          <section className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-12">
            <div className="container mx-auto grid max-w-6xl gap-4 md:grid-cols-4">
              {[
                ["Weekly Intakes", "每周末开班", "Saturday and Sunday batches"],
                ["Two Days", "两天系统课程", "Focused foundation training"],
                ["Small Group", "小班精品教学", "More interaction and questions"],
                ["Course Fee", "S$990 / person", "PayNow registration available"],
              ].map(([title, value, body]) => <article key={title} className="border border-[#d6ad63]/25 bg-white/[0.035] p-6"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d6ad63]">{title}</p><h3 className="mt-3 text-xl font-semibold text-[#f4dfb0]">{value}</h3><p className="mt-3 text-sm leading-6 text-white/62">{body}</p></article>)}
            </div>
          </section>

          <section className="px-4 py-20 md:py-28">
            <div className="container mx-auto max-w-6xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d6ad63]">Course Curriculum</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold text-[#f4dfb0] md:text-5xl">Start with the foundation. Learn through practical examples.</h2>
              <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {curriculum.map(([no, title, zh, body]) => <article key={no} className="border border-[#d6ad63]/25 bg-white/[0.035] p-7"><p className="text-sm font-bold text-[#d6ad63]">{no}</p><h3 className="mt-3 text-2xl font-semibold text-[#f4dfb0]">{title}</h3><p className="mt-2 text-lg font-semibold text-[#d6ad63]">{zh}</p><p className="mt-5 text-sm leading-7 text-white/68">{body}</p></article>)}
              </div>
            </div>
          </section>

          <section className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-20">
            <div className="container mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
              <div><p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d6ad63]">Who This Is For</p><h2 className="mt-4 text-3xl font-semibold text-[#f4dfb0] md:text-5xl">No prior Qi Men knowledge is required.</h2><p className="mt-6 leading-8 text-white/68">适合完全零基础，也适合过去接触过相关内容、但希望重新建立清晰学习系统的人。</p></div>
              <div className="space-y-4">{suitableFor.map((item, index) => <div key={item} className="flex gap-4 border border-[#d6ad63]/20 bg-black p-5"><span className="text-sm font-bold text-[#d6ad63]">{String(index + 1).padStart(2, "0")}</span><p className="leading-7 text-white/75">{item}</p></div>)}</div>
            </div>
          </section>

          <section className="px-4 py-20">
            <div className="container mx-auto max-w-5xl border border-[#d6ad63]/30 bg-[#070707] p-8 md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Course Details</p><h2 className="mt-3 text-3xl font-semibold text-[#f4dfb0]">课程资料</h2>
              <div className="mt-8 grid gap-5 md:grid-cols-2">{facts.map(([en, zh, value]) => <div key={en} className="border-b border-[#d6ad63]/15 pb-4"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#d6ad63]">{en} · {zh}</p><p className="mt-2 text-sm leading-7 text-white/76">{value}</p></div>)}</div>
            </div>
          </section>

          <section className="px-4 pb-24">
            <div className="container mx-auto max-w-4xl border border-[#d6ad63]/40 bg-[#d6ad63]/10 p-8 text-center md:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d6ad63]">Weekly Course Registration</p>
              <h2 className="mt-5 text-3xl font-semibold text-[#f4dfb0] md:text-5xl">Choose the weekend that suits you.</h2>
              <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/70">报名页会自动显示未来每周六、周日的可选班次。选择课程日期、填写学员资料并完成PayNow付款后，我们将核实并确认名额。</p>
              <Link href={REGISTRATION_LINK} className="mt-8 inline-flex items-center justify-center bg-[#d6ad63] px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-black hover:bg-[#f4dfb0]">Select Batch & Register</Link>
            </div>
          </section>
        </main>
        <Footer /><FloatingActions />
      </div>
    </LanguageProvider>
  );
}
