import type { Metadata } from "next";
import Link from "next/link";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";

export const metadata: Metadata = {
  title: "Qi Men Dun Jia Foundation Course Singapore｜奇门遁甲基础课程",
  description:
    "启明遁甲 Qimen Strategy 新加坡两天奇门遁甲基础课程，2026年9月12日至13日，小班教学，适合零基础。课程费用 S$990，地点位于 Bedok Central。",
  keywords: [
    "Qi Men Dun Jia course Singapore",
    "Qi Men Dun Jia class Singapore",
    "Qimen Dunjia foundation course",
    "奇门遁甲课程新加坡",
    "新加坡奇门遁甲教学",
    "奇门遁甲基础课程",
    "Qimen Strategy course",
  ],
  alternates: {
    canonical: "https://www.qmfeng.com/qi-men-dun-jia-course-singapore",
  },
};

const WA_LINK = [
  "https://wa.me/6589593499",
  "text=Hello%20Qimen%20Strategy%2C%20I%20would%20like%20to%20enquire%20about%20the%20Qi%20Men%20Dun%20Jia%20Foundation%20Course.",
].join("?");

const courseHighlights = [
  ["Next Intake", "12–13 September 2026", "Saturday and Sunday｜周六、周日"],
  ["Course Fee", "S$990 per participant", "课程费用每位 S$990"],
  ["Beginner Friendly", "适合零基础", "Step-by-step foundation learning with practical examples."],
  ["Small Group", "小班精品课程", "Limited places for focused teaching and in-class questions."],
];

const curriculum = [
  {
    no: "01",
    title: "Qimen Framework & Modern Positioning",
    zh: "奇门遁甲基础框架与现代定位",
    body: "Understand the origin, structure, application boundaries and modern decision value of Qi Men Dun Jia.",
    bodyZh: "认识奇门遁甲的来源、体系构成、应用边界，以及它在现代决策中的实际价值。",
  },
  {
    no: "02",
    title: "Core Foundation System",
    zh: "核心基础系统",
    body: "Learn the basic logic of Heavenly Stems, Earthly Branches, time structure and the Nine Palaces.",
    bodyZh: "学习天干、地支、时间结构与九宫之间的基础关系，逐步建立基本盘感。",
  },
  {
    no: "03",
    title: "Eight Doors, Nine Stars & Eight Deities",
    zh: "八门、九星与八神",
    body: "Understand the key symbols used in a Qi Men chart and their common practical meanings.",
    bodyZh: "认识奇门盘中的核心符号、基础属性、常见象意与实际判断方向。",
  },
  {
    no: "04",
    title: "Chart Structure & Reading Sequence",
    zh: "排盘结构与读局顺序",
    body: "Learn chart layout, useful-god selection, palace relationships and a clear step-by-step reading process.",
    bodyZh: "学习排盘结构、用神选择、宫位关系，以及从问题到判断的基础读盘流程。",
  },
  {
    no: "05",
    title: "Practical Case Learning",
    zh: "真实案例实战学习",
    body: "Use practical examples involving career, business, partnership, relationship and important decisions.",
    bodyZh: "结合事业、生意、合作、关系与重要选择等真实场景，理解奇门判断的应用方法。",
  },
  {
    no: "06",
    title: "Responsible Application",
    zh: "负责任的应用边界",
    body: "Use Qi Men as a structured reference for clearer decisions rather than as fatalism or absolute prediction.",
    bodyZh: "学习如何把奇门遁甲用于决策参考，并建立清晰、负责、不夸大的应用边界。",
  },
];

const audiences = [
  "完全没有接触过奇门遁甲，希望从基础系统学习的人",
  "过去零散学习过奇门、八字或风水，但缺少清晰框架的人",
  "企业主、创业者、管理者及需要提升判断力的人士",
  "对东方战略智慧与传统文化有系统学习兴趣者",
  "从事咨询、顾问、教育、文化或空间规划相关行业者",
];

const outcomes = [
  "理解奇门盘的基础结构与主要组成元素",
  "认识九宫、八门、九星、八神等核心系统",
  "掌握基础取用神、看宫位与读局势的顺序",
  "能够通过简单案例理解事业、合作、关系与行动时机",
  "建立负责任的应用边界，不把奇门学习变成宿命论",
];

const courseFacts = [
  ["Program", "课程", "Qi Men Dun Jia Foundation Course｜奇门遁甲基础课程"],
  ["Instructor", "主讲", "Huang Qiming｜黄启明主讲"],
  ["Date", "日期", "12–13 September 2026｜2026年9月12日至13日"],
  ["Days", "上课日", "Saturday & Sunday｜周六、周日"],
  ["Format", "形式", "2-day small-group course｜两天小班精品课程"],
  ["Level", "程度", "Suitable for complete beginners｜适合零基础"],
  ["Language", "语言", "Chinese teaching with English support when needed｜中文授课，可英文辅助"],
  ["Fee", "费用", "S$990 per participant｜每位 S$990"],
  ["Location", "地点", "Blk 210 New Upper Changi Road #01-729, Singapore 460210"],
  ["Confirmation", "名额确认", "Seats are confirmed after payment is received and verified｜付款核实后确认名额"],
];

export default function QiMenDunJiaCourseSingaporePage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">
        <Navbar />

        <main>
          <section className="relative overflow-hidden px-4 pb-20 pt-32 md:pb-28 md:pt-40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(214,173,99,0.24),transparent_34%),linear-gradient(135deg,rgba(244,223,176,0.08),transparent_42%)]" />
            <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-[#d6ad63]/10 blur-3xl" />
            <div className="container relative mx-auto max-w-6xl">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.36em] text-[#d6ad63]">
                Qimen Strategy Singapore · Foundation Course
              </p>
              <h1 className="max-w-5xl text-4xl font-semibold uppercase leading-[0.98] tracking-[0.04em] text-[#f4dfb0] md:text-7xl">
                Qi Men Dun Jia Foundation Course
              </h1>
              <h2 className="mt-5 text-3xl font-semibold tracking-[0.14em] text-[#e2bd6b] md:text-5xl">
                奇门遁甲基础课程
              </h2>
              <p className="mt-6 max-w-4xl text-lg font-semibold tracking-[0.08em] text-[#d6ad63] md:text-2xl">
                12–13 September 2026 · Saturday & Sunday · S$990
              </p>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/78 md:text-xl">
                A structured two-day small-group course for complete beginners who want to understand the foundation of Qi Men Dun Jia and its practical application.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/70">
                本课程从基础概念、九宫结构与核心符号开始，以清楚的顺序讲解奇门遁甲的基础判断方法，并结合真实案例，帮助学员逐步理解如何读局、看时机、看人事与看风险。
              </p>

              <div className="mt-8 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {["适合零基础", "黄启明主讲", "两天小班课程", "真实案例讲解"].map((item) => (
                  <div key={item} className="border border-[#d6ad63]/25 bg-black/30 p-4 text-sm font-semibold text-[#f4dfb0]">
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/course-registration"
                  className="inline-flex items-center justify-center bg-[#d6ad63] px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-[#f4dfb0]"
                >
                  Register & PayNow
                </Link>
                <a
                  href={WA_LINK}
                  className="inline-flex items-center justify-center border border-[#d6ad63]/70 px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#f4dfb0] transition hover:bg-[#d6ad63]/10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Course Enquiry
                </a>
              </div>
              <p className="mt-4 text-sm leading-6 text-white/55">
                Places are limited and confirmed after payment verification.｜名额有限，付款核实后确认。
              </p>
            </div>
          </section>

          <section className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-10">
            <div className="container mx-auto grid max-w-6xl gap-4 md:grid-cols-4">
              {courseHighlights.map(([title, value, body]) => (
                <article key={title} className="border border-[#d6ad63]/25 bg-white/[0.035] p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.20em] text-[#d6ad63]">{title}</p>
                  <h3 className="mt-3 text-xl font-semibold text-[#f4dfb0]">{value}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/62">{body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="px-4 py-20 md:py-28">
            <div className="container mx-auto max-w-6xl">
              <div className="max-w-3xl">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[#d6ad63]">Course Curriculum</p>
                <h2 className="text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl">
                  Start with the foundation. Learn through practical examples.
                </h2>
                <p className="mt-6 text-base leading-8 text-white/72 md:text-lg">
                  课程以“从零开始、建立框架、结合案例”为原则。老师会一步一步讲解，并预留课堂提问与互动时间。
                </p>
              </div>

              <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {curriculum.map((item) => (
                  <article key={item.no} className="border border-[#d6ad63]/25 bg-white/[0.035] p-7">
                    <p className="text-sm font-bold tracking-[0.18em] text-[#d6ad63]">{item.no}</p>
                    <h3 className="mt-3 text-2xl font-semibold leading-tight text-[#f4dfb0]">{item.title}</h3>
                    <p className="mt-2 text-lg font-semibold text-[#d6ad63]">{item.zh}</p>
                    <p className="mt-5 text-sm leading-7 text-white/72">{item.body}</p>
                    <p className="mt-3 text-sm leading-7 text-white/62">{item.bodyZh}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-20 md:py-24">
            <div className="container mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[#d6ad63]">Who This Is For</p>
                <h2 className="text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl">
                  No prior Qi Men knowledge is required.
                </h2>
                <p className="mt-6 text-base leading-8 text-white/70">
                  适合完全零基础，也适合过去接触过相关内容、但希望重新建立清晰学习系统的人。
                </p>
              </div>
              <div className="grid gap-4">
                {audiences.map((audience, index) => (
                  <div key={audience} className="flex gap-4 border border-[#d6ad63]/22 bg-black p-5">
                    <span className="mt-1 text-sm font-bold text-[#d6ad63]">{String(index + 1).padStart(2, "0")}</span>
                    <p className="text-base leading-7 text-white/76">{audience}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 py-20 md:py-24">
            <div className="container mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
              <div className="border border-[#d6ad63]/30 bg-white/[0.035] p-8 md:p-10">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Learning Outcomes</p>
                <h2 className="text-3xl font-semibold text-[#f4dfb0]">完成课程后，你将建立的基础能力</h2>
                <ul className="mt-8 space-y-4 text-sm leading-7 text-white/74">
                  {outcomes.map((outcome) => (
                    <li key={outcome} className="border-l-2 border-[#d6ad63]/60 pl-4">{outcome}</li>
                  ))}
                </ul>
              </div>

              <div className="border border-[#d6ad63]/30 bg-[#070707] p-8 md:p-10">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Course Details</p>
                <h2 className="text-3xl font-semibold text-[#f4dfb0]">课程资料</h2>
                <div className="mt-8 space-y-4">
                  {courseFacts.map(([en, zh, value]) => (
                    <div key={en} className="border-b border-[#d6ad63]/15 pb-4 last:border-b-0">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d6ad63]">{en} · {zh}</p>
                      <p className="mt-2 text-sm leading-7 text-white/76">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-16">
            <div className="container mx-auto max-w-5xl text-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[#d6ad63]">Responsible Practice</p>
              <h2 className="text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl">
                奇门遁甲可以帮助人看清局势，但不代替个人责任。
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/70">
                本课程强调清晰、谦卑与负责任的应用。奇门遁甲可作为决策参考，但不取代医疗、法律、金融或其他专业判断；最终行动仍由当事人自行决定。
              </p>
            </div>
          </section>

          <section className="px-4 py-20 md:py-28">
            <div className="container mx-auto max-w-4xl border border-[#d6ad63]/40 bg-[#d6ad63]/10 p-8 text-center md:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#d6ad63]">Course Registration</p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl">
                Register for the 12–13 September 2026 intake.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/72">
                课程费用为每位 S$990。请通过通用报名页面填写学员资料，并使用公司 PayNow UEN 完成付款。付款核实后，我们将确认课程名额。
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/course-registration"
                  className="inline-flex items-center justify-center bg-[#d6ad63] px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-[#f4dfb0]"
                >
                  Register & PayNow
                </Link>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-[#d6ad63]/70 px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#f4dfb0] transition hover:bg-[#d6ad63]/10"
                >
                  Ask a Question
                </a>
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
