import type { Metadata } from "next";
import Link from "next/link";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";

export const metadata: Metadata = {
  title: "Qimen Strategy Courses Singapore｜启明遁甲课程体系",
  description:
    "启明遁甲 Qimen Strategy 新加坡课程体系。奇门遁甲基础课程将于2026年9月19日至20日举行，适合零基础，小班教学，课程费用S$990。另设数字能量、八字命理与風水布局课程意向登记。",
  keywords: [
    "Qimen Strategy courses Singapore",
    "Qi Men Dun Jia course Singapore",
    "Qi Men Dun Jia foundation course",
    "Number Energy course Singapore",
    "Bazi course Singapore",
    "Feng Shui course Singapore",
    "启明遁甲课程",
    "新加坡奇门遁甲课程",
    "奇门遁甲基础课程",
  ],
  alternates: {
    canonical: "https://www.qmfeng.com/courses",
  },
};

const WA_LINK = [
  "https://wa.me/6589593499",
  "text=Hello%20Qimen%20Strategy%2C%20I%20would%20like%20to%20enquire%20about%20your%20courses%20in%20Singapore.",
].join("?");

const courses = [
  {
    title: "Qi Men Dun Jia Foundation Course",
    zh: "奇门遁甲基础课程",
    tagline: "从零开始，看懂奇门盘的基础结构与判断逻辑。",
    body:
      "A structured two-day small-group course for complete beginners. Learn the basic framework, key symbols, chart-reading sequence and practical application of Qi Men Dun Jia.",
    bodyZh:
      "课程从基础框架、九宫结构、八门、九星与八神开始，逐步讲解取用神、看宫位与读局势的顺序，并通过事业、合作、关系和重要决策案例帮助学员理解实际应用。",
    suitable: "适合完全零基础，也适合过去零散接触过奇门、八字或風水，但希望重新建立清晰学习系统的人。",
    href: "/qi-men-dun-jia-course-singapore",
    status: "19–20 September 2026 · S$990",
    cta: "查看课程与报名",
    featured: true,
  },
  {
    title: "Number Energy & Phone Number Selection Course",
    zh: "数字能量与手机号码课程",
    tagline: "从每天使用的手机号码开始，理解数字组合的影响。",
    body:
      "Understand number patterns, communication tendencies, relationship signals and practical phone number selection logic.",
    bodyZh:
      "手机号码是我们每天都在使用的数字组合。数字能量课程帮助学员认识不同数字组合所呈现的沟通模式、性格倾向、财富节奏与人际状态。我们不讲夸张的换号立刻改命，而是教你更理性地看懂号码结构，并选择更适合现阶段目标与状态的号码。",
    suitable: "想了解自己号码、为家人选择号码，或从事销售、服务、咨询、客户沟通行业的人。",
    href: WA_LINK,
    status: "Coming Soon · 意向登记中",
    cta: "查询课程",
  },
  {
    title: "Bazi Life Structure Foundation Course",
    zh: "八字命理基础课程",
    tagline: "看懂自己的性格、优势与人生节奏。",
    body:
      "Learn personal structure, strengths, weaknesses, life rhythm, career direction and relationship patterns.",
    bodyZh:
      "八字不是为了吓人，也不是为了给人生下定论。真正有价值的八字学习，是帮助你理解自己的性格结构、优势短板、事业方向、关系模式与人生节奏。当一个人更了解自己，就不会总是用错力。",
    suitable: "想认识自己、理解孩子、改善关系、规划事业方向，或对命理文化有系统学习兴趣的人。",
    href: WA_LINK,
    status: "Coming Soon · 意向登记中",
    cta: "查询课程",
  },
  {
    title: "Feng Shui Layout & Space Alignment Course",
    zh: "風水布局实战课程",
    tagline: "让家宅、办公室与商铺空间真正支持人的状态。",
    body:
      "Learn how doors, windows, beds, desks, movement flow, light and usage habits affect state, clarity and development.",
    bodyZh:
      "風水不是把东西随便摆一摆。真正的空间布局，是观察门、窗、床、桌、动线、光线、气口与人的使用习惯，让空间更好地支持人的精神状态、判断力、家庭关系与事业发展。",
    suitable: "屋主、店主、企业主、办公室管理者、室内设计相关行业，以及希望改善居家与工作环境的人。",
    href: WA_LINK,
    status: "Coming Soon · 意向登记中",
    cta: "查询课程",
  },
];

const values = [
  ["看清自己", "Self-understanding", "理解性格结构、状态节奏、优势短板与当下真正需要调整的地方。"],
  ["看清局势", "Situation reading", "在事业、合作、关系与人生选择前，看懂事情背后的时机、方向与风险。"],
  ["看清空间", "Space alignment", "理解家宅、办公室、商铺如何影响人的状态、判断力与行动节奏。"],
  ["用得出来", "Practical application", "课程不是只听概念，而是让学员能带回生活、家庭、事业与工作中应用。"],
];

export default function CoursesPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">
        <Navbar />

        <main>
          <section className="relative overflow-hidden px-4 pb-20 pt-32 md:pb-28 md:pt-40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_16%,rgba(214,173,99,0.24),transparent_34%),linear-gradient(135deg,rgba(244,223,176,0.08),transparent_42%)]" />
            <div className="absolute -left-16 top-28 h-80 w-80 rounded-full bg-[#d6ad63]/10 blur-3xl" />
            <div className="container relative mx-auto max-w-6xl">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.36em] text-[#d6ad63]">
                Qimen Strategy Courses · Singapore
              </p>
              <h1 className="max-w-5xl text-4xl font-semibold uppercase leading-[0.98] tracking-[0.04em] text-[#f4dfb0] md:text-7xl">
                Practical Eastern Wisdom Courses
              </h1>
              <h2 className="mt-5 text-3xl font-semibold tracking-[0.14em] text-[#e2bd6b] md:text-5xl">
                启明遁甲课程体系
              </h2>
              <p className="mt-6 max-w-4xl text-lg font-semibold tracking-[0.08em] text-[#d6ad63] md:text-2xl">
                学会看局势、看人、看时机，也看空间。
              </p>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/78 md:text-xl">
                Eastern wisdom is not only about prediction. Its deeper value is to help people understand themselves, read situations, review timing, and make more grounded decisions in real life.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/70">
                启明遁甲课程体系结合奇门遁甲、数字能量、八字命理与風水布局，从“人、事、时机、空间”四个角度，帮助学员建立更清楚的判断力与生活应用能力。我们不把课程做成神秘表演，而是把东方智慧讲得清楚、学得明白、用得出来。
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/course-registration"
                  className="inline-flex items-center justify-center bg-[#d6ad63] px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-[#f4dfb0]"
                >
                  Register Current Intake
                </Link>
                <Link href="/qi-men-dun-jia-course-singapore" className="inline-flex items-center justify-center border border-[#d6ad63]/70 px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#f4dfb0] transition hover:bg-[#d6ad63]/10">
                  View Course Details
                </Link>
              </div>
              <p className="mt-4 text-sm leading-6 text-white/55">
                Current intake: 19–20 September 2026 · S$990 per participant
              </p>
            </div>
          </section>

          <section className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-12">
            <div className="container mx-auto max-w-6xl">
              <p className="mx-auto max-w-4xl text-center text-xl font-semibold leading-9 text-[#f4dfb0] md:text-2xl">
                学术数，不是为了神神秘秘，而是为了在人生重要选择前，看得更清楚一点。
              </p>
              <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-7 text-white/62 md:text-base">
                We do not teach mystery for the sake of mystery. We teach practical wisdom so you can see more clearly before important decisions.
              </p>
            </div>
          </section>

          <section className="px-4 py-20 md:py-28">
            <div className="container mx-auto max-w-6xl">
              <div className="max-w-3xl">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[#d6ad63]">Course Pathways</p>
                <h2 className="text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl">
                  Four practical learning pathways under one clear system.
                </h2>
                <p className="mt-6 text-base leading-8 text-white/72 md:text-lg">
                  每一门课程都有自己的应用场景：奇门看局势，数字看日常号码，八字看个人结构，風水看空间支持力。课程会保持专业深度，同时尽量使用真实生活与商业场景来讲解。
                </p>
              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-2">
                {courses.map((course) => {
                  const isExternal = course.href.startsWith("http");
                  const cardClass = course.featured
                    ? "border-[#d6ad63] bg-[#d6ad63]/10 shadow-[0_0_45px_rgba(214,173,99,0.14)]"
                    : "border-[#d6ad63]/25 bg-white/[0.035]";
                  const content = (
                    <article className={`flex h-full flex-col border p-7 md:p-8 ${cardClass}`}>
                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.20em] text-[#d6ad63]">{course.status}</p>
                          <h3 className="mt-4 text-2xl font-semibold leading-tight text-[#f4dfb0] md:text-3xl">{course.title}</h3>
                          <p className="mt-2 text-xl font-semibold text-[#d6ad63]">{course.zh}</p>
                        </div>
                        {course.featured && (
                          <span className="w-fit bg-[#d6ad63] px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-black">
                            Current Intake
                          </span>
                        )}
                      </div>

                      <p className="mt-6 text-lg font-semibold leading-8 text-white/88">{course.tagline}</p>
                      <p className="mt-4 text-sm leading-7 text-white/68">{course.body}</p>
                      <p className="mt-3 text-sm leading-7 text-white/62">{course.bodyZh}</p>

                      <div className="mt-6 border-l-2 border-[#d6ad63]/70 pl-4">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d6ad63]">适合对象</p>
                        <p className="mt-2 text-sm leading-7 text-white/72">{course.suitable}</p>
                      </div>

                      <div className="mt-auto pt-8">
                        <span className="inline-flex items-center justify-center border border-[#d6ad63]/60 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#f4dfb0] transition hover:bg-[#d6ad63]/10">
                          {course.cta} →
                        </span>
                      </div>
                    </article>
                  );

                  return isExternal ? (
                    <a key={course.title} href={course.href} target="_blank" rel="noopener noreferrer" className="block">
                      {content}
                    </a>
                  ) : (
                    <Link key={course.title} href={course.href} className="block">
                      {content}
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-20 md:py-24">
            <div className="container mx-auto max-w-6xl">
              <div className="max-w-3xl">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[#d6ad63]">Our Course Value</p>
                <h2 className="text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl">
                  有价值，也要听得懂；有体系，也要用得上。
                </h2>
                <p className="mt-6 text-base leading-8 text-white/70">
                  我们不会把课程包装成夸张承诺，也不会把东方智慧讲得离生活很远。真正重要的是，让学员能够把所学带回自己的家庭、事业、关系与空间中，形成更稳的判断和行动。
                </p>
              </div>

              <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {values.map(([zh, en, body]) => (
                  <article key={zh} className="border border-[#d6ad63]/22 bg-black p-6">
                    <p className="text-xl font-semibold text-[#f4dfb0]">{zh}</p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-[#d6ad63]">{en}</p>
                    <p className="mt-4 text-sm leading-7 text-white/66">{body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 py-20 md:py-28">
            <div className="container mx-auto max-w-4xl border border-[#d6ad63]/40 bg-[#d6ad63]/10 p-8 text-center md:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#d6ad63]">Current Course Registration</p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl">
                Qi Men Dun Jia Foundation Course · 19–20 September 2026
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/72">
                两天小班精品课程，适合零基础。课程费用每位 S$990，付款核实后确认名额。
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
                  WhatsApp Course Enquiry
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
