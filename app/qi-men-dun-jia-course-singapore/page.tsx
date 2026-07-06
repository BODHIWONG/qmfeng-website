import type { Metadata } from "next";
import Link from "next/link";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";

export const metadata: Metadata = {
  title: "Qi Men Dun Jia Course Singapore｜奇门遁甲课程｜启明遁甲研修班",
  description:
    "启明遁甲 Qimen Strategy 新加坡奇门遁甲基础研修课程，系统学习奇门遁甲框架、符号系统、排盘读局、实战案例与战略决策应用。适合企业主、管理者、创业者与传统文化学习者。",
  keywords: [
    "Qi Men Dun Jia course Singapore",
    "Qi Men Dun Jia class Singapore",
    "Qimen Dunjia course Singapore",
    "奇门遁甲课程新加坡",
    "新加坡奇门遁甲教学",
    "启明遁甲研修班",
    "Qimen Strategy Foundation Program",
  ],
  alternates: {
    canonical: "https://www.qmfeng.com/qi-men-dun-jia-course-singapore",
  },
};

const WA_LINK = [
  "https://wa.me/6589593499",
  "text=Hello%20Qimen%20Strategy%2C%20I%20would%20like%20to%20enquire%20about%20the%20Qi%20Men%20Dun%20Jia%20Foundation%20Course%20in%20Singapore.",
].join("?");

const courseHighlights = [
  ["First Intake", "首期招生中", "Founding intake registration is open. Confirm the next available class through WhatsApp."],
  ["2 Days", "两天系统研修", "A focused foundation program for serious beginners and practical learners."],
  ["Small Class", "小班教学", "Limited seats for better interaction, questions and case discussion."],
  ["Early Bird", "早鸟 S$988 起", "Usual fee S$1,688. Early bird rate is available for founding intake seats."],
];

const curriculum = [
  {
    no: "01",
    title: "Qimen Framework & Modern Positioning",
    zh: "奇门遁甲基础框架与现代定位",
    body: "Understand the origin, structure and modern advisory value of Qi Men Dun Jia.",
    bodyZh: "认识奇门遁甲的来源、体系构成、应用边界，以及它在现代决策中的价值。",
  },
  {
    no: "02",
    title: "Core Symbol System I",
    zh: "核心符号系统（一）",
    body: "Heavenly Stems, Earthly Branches, solar terms, time structure and their operating logic.",
    bodyZh: "学习天干、地支、节气、时间结构之间的关系，建立基本盘感。",
  },
  {
    no: "03",
    title: "Core Symbol System II",
    zh: "核心符号系统（二）",
    body: "Eight Doors, Nine Stars, Eight Deities and Nine Palaces, with practical meanings and usage.",
    bodyZh: "掌握八门、九星、八神、九宫的基础属性、象意与实战应用。",
  },
  {
    no: "04",
    title: "Charting Method & Reading Sequence",
    zh: "排盘方法与读局顺序",
    body: "Manual logic, software usage, chart layout, useful-god selection and step-by-step reading flow.",
    bodyZh: "学习手排逻辑、软件使用、宫位关系、用神选择，以及从局面到判断的读盘流程。",
  },
  {
    no: "05",
    title: "Practical Case Training",
    zh: "真实案例实战训练",
    body: "Case studies across business, partnership, career, wealth rhythm, relationship, health signals and space alignment.",
    bodyZh: "通过事业、合作、职业、财富节奏、关系、健康信号与空间判断等真实案例训练判断力。",
  },
  {
    no: "06",
    title: "Decision Application & Ethics",
    zh: "决策应用与术者边界",
    body: "Use Qi Men as decision intelligence, not fatalism. Learn responsible interpretation and clear client communication.",
    bodyZh: "学习如何把奇门遁甲用于决策参考，而不是宿命论；建立负责、清晰、有边界的判断方式。",
  },
];

const audiences = [
  "企业主、创业者、管理者与投资者",
  "希望提升重大决策判断力的人士",
  "对奇门遁甲、东方战略智慧与传统文化有系统学习兴趣者",
  "已接触过命理、风水或身心灵体系，但缺少清晰学习路径者",
  "从事咨询、顾问、教育、空间规划或文化服务行业者",
];

const outcomes = [
  "看懂奇门盘的基础结构，而不是只背零散口诀",
  "理解天时、地利、人和、风险在盘中的呈现方式",
  "掌握基础排盘、取用神、看宫位、读局势的顺序",
  "能够用奇门视角辅助事业、合作、关系与行动时机判断",
  "建立负责的应用边界，避免把奇门学习变成迷信化表达",
];

const courseFacts = [
  ["Program", "课程", "Qi Men Strategy Foundation Program｜启明遁甲研修班"],
  ["Format", "形式", "2-day intensive course｜两天系统研修"],
  ["Level", "程度", "Beginner-friendly, structured and case-based｜适合零基础，也适合重新建立系统者"],
  ["Language", "语言", "Chinese teaching with English support when needed｜中文授课，可英文辅助"],
  ["Location", "地点", "Qimen Strategy, Bedok Central, Singapore｜启明遁甲新加坡门店"],
  ["Next Intake", "下一期", "Founding intake is open. Confirm the available date through WhatsApp｜首期招生中，开课日期请 WhatsApp 确认"],
  ["Seats", "人数", "Small class with limited seats｜小班教学，名额有限"],
  ["Includes", "包含", "Course notes, real case practice and post-course Q&A support｜课程讲义、案例练习、课后问答支持"],
  ["Fee", "费用", "Early bird from S$988, usual S$1,688｜早鸟优惠 S$988 起，原价 S$1,688"],
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
                Qi Men Dun Jia Course Singapore
              </h1>
              <h2 className="mt-5 text-3xl font-semibold tracking-[0.16em] text-[#e2bd6b] md:text-5xl">
                启明遁甲研修班｜奇门遁甲课程
              </h2>
              <p className="mt-6 max-w-4xl text-lg font-semibold uppercase tracking-[0.18em] text-[#d6ad63] md:text-2xl">
                First Intake Now Open · Limited Seats · Early Bird From S$988
              </p>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/78 md:text-xl">
                A practical Qi Men Dun Jia foundation program designed for Singapore business owners, managers, entrepreneurs and serious learners who want to understand timing, direction, people dynamics and risk before important action.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/70">
                本课程不是零散讲口诀，而是从基础框架、核心符号、排盘读局到真实案例应用，系统建立奇门遁甲的判断逻辑。学习重点不是迷信结果，而是训练看清局势、择时布局、识别风险与辅助决策的能力。
              </p>
              <div className="mt-8 grid max-w-4xl gap-3 sm:grid-cols-3">
                <div className="border border-[#d6ad63]/25 bg-black/30 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d6ad63]">Beginner Friendly</p>
                  <p className="mt-2 text-sm text-white/70">适合零基础与重新建立系统者</p>
                </div>
                <div className="border border-[#d6ad63]/25 bg-black/30 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d6ad63]">Real Cases</p>
                  <p className="mt-2 text-sm text-white/70">结合事业、关系、风水与决策案例</p>
                </div>
                <div className="border border-[#d6ad63]/25 bg-black/30 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d6ad63]">WhatsApp Reserve</p>
                  <p className="mt-2 text-sm text-white/70">通过 WhatsApp 查询名额与日期</p>
                </div>
              </div>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={WA_LINK}
                  className="inline-flex items-center justify-center bg-[#d6ad63] px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-[#f4dfb0]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp To Reserve Seat
                </a>
                <Link href="/singapore-qi-men-dun-jia-consultant" className="inline-flex items-center justify-center border border-[#d6ad63]/70 px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#f4dfb0] transition hover:bg-[#d6ad63]/10">
                  View Qi Men Consultation
                </Link>
              </div>
            </div>
          </section>

          <section className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-10">
            <div className="container mx-auto grid max-w-6xl gap-4 md:grid-cols-4">
              {courseHighlights.map(([title, zh, body]) => (
                <article key={title} className="border border-[#d6ad63]/25 bg-white/[0.035] p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.20em] text-[#d6ad63]">{title}</p>
                  <h3 className="mt-3 text-xl font-semibold text-[#f4dfb0]">{zh}</h3>
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
                  From symbols to structure, from structure to practical judgment.
                </h2>
                <p className="mt-6 text-base leading-8 text-white/72 md:text-lg">
                  课程以“先建立体系，再进入实战”为原则，帮助学员从古法框架中学会现代应用，而不是只停留在术语与口诀层面。
                </p>
              </div>

              <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {curriculum.map((item) => (
                  <article key={item.no} className="flex flex-col border border-[#d6ad63]/22 bg-white/[0.035] p-7">
                    <p className="text-sm font-bold text-[#d6ad63]">{item.no}</p>
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
                  For learners who want depth, structure and real-world application.
                </h2>
                <p className="mt-6 text-base leading-8 text-white/70">
                  适合零基础入门，也适合过去零散接触过奇门、八字或风水，但希望重新建立系统学习路径的人。课程会保持传统根基，同时强调现代商业与人生决策场景中的实际应用。
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
                <h2 className="text-3xl font-semibold text-[#f4dfb0]">学完以后，你应该建立的能力</h2>
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
                启明遁甲课程强调清晰、谦卑与负责任的应用。奇门遁甲可作为战略参考与决策辅助，但不取代医疗、法律、金融或其他专业判断；最终行动仍由当事人自行决定。
              </p>
            </div>
          </section>

          <section className="px-4 py-20 md:py-28">
            <div className="container mx-auto max-w-4xl border border-[#d6ad63]/40 bg-[#d6ad63]/10 p-8 text-center md:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#d6ad63]">First Intake Registration</p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl">
                Join the first Qi Men Dun Jia foundation intake by Qimen Strategy Singapore.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/72">
                首期创办班招生中，小班名额有限。欢迎通过 WhatsApp 查询最新开课日期、早鸟名额与报名细节。
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center bg-[#d6ad63] px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-[#f4dfb0]"
              >
                WhatsApp Course Enquiry
              </a>
            </div>
          </section>
        </main>

        <Footer />
        <FloatingActions />
      </div>
    </LanguageProvider>
  );
}
