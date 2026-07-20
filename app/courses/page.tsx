import type { Metadata } from "next";
import Link from "next/link";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";

export const metadata: Metadata = {
  title: "Qimen Strategy Courses Singapore｜启明遁甲课程体系",
  description:
    "启明遁甲 Qimen Strategy 新加坡东方智慧实战课程。奇门遁甲基础课程自2026年9月19日起每周六、周日开班，适合零基础，费用S$990。另设数字能量、八字与風水课程意向登记。",
  keywords: ["Qimen Strategy courses Singapore", "Qi Men Dun Jia course Singapore", "奇门遁甲课程新加坡", "启明遁甲课程"],
  alternates: { canonical: "https://www.qmfeng.com/courses" },
};

const WA_LINK = "https://wa.me/6589593499?text=Hello%20Qimen%20Strategy%2C%20I%20would%20like%20to%20enquire%20about%20your%20courses%20in%20Singapore.";
const REGISTER_LINK = "/course-registration?course=qimen-foundation&batch=2026-09-19";

const courses = [
  {
    title: "Qi Men Dun Jia Foundation Course", zh: "奇门遁甲基础课程",
    status: "Weekly Sat–Sun · From 19 Sep 2026 · S$990", featured: true,
    body: "A structured two-day small-group course for complete beginners. Learn the foundation, key symbols, chart-reading sequence and practical application.",
    bodyZh: "从基础框架、九宫、八门、九星与八神开始，逐步学习取用神、宫位关系、读局顺序与真实案例应用。",
    suitable: "适合零基础，也适合过去零散学习过奇门、八字或風水，但希望重新建立系统的人。",
    href: "/qi-men-dun-jia-course-singapore", cta: "查看课程详情",
  },
  {
    title: "Number Energy & Phone Number Selection Course", zh: "数字能量与手机号码课程",
    status: "Coming Soon · 意向登记中", featured: false,
    body: "Understand number patterns, communication tendencies and practical phone-number selection logic.",
    bodyZh: "学习看懂号码结构、沟通模式、人际倾向与适合不同阶段目标的号码选择逻辑。",
    suitable: "适合希望了解自己号码、为家人选择号码，或从事销售、服务与咨询行业的人。",
    href: WA_LINK, cta: "查询课程",
  },
  {
    title: "Bazi Life Structure Foundation Course", zh: "八字命理基础课程",
    status: "Coming Soon · 意向登记中", featured: false,
    body: "Learn personal structure, strengths, life rhythm, career direction and relationship patterns.",
    bodyZh: "理解个人结构、优势短板、事业方向、关系模式与人生节奏，建立更清晰的自我认识。",
    suitable: "适合希望认识自己、理解孩子、改善关系或规划事业方向的人。",
    href: WA_LINK, cta: "查询课程",
  },
  {
    title: "Feng Shui Layout & Space Alignment Course", zh: "風水布局实战课程",
    status: "Coming Soon · 意向登记中", featured: false,
    body: "Learn how doors, windows, beds, desks, movement flow and light affect space and human state.",
    bodyZh: "学习观察门、窗、床、桌、动线、光线与气口，让住宅、办公室与商铺更好地支持人的状态。",
    suitable: "适合屋主、店主、企业主、办公室管理者及空间设计相关行业人士。",
    href: WA_LINK, cta: "查询课程",
  },
];

export default function CoursesPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main>
          <section className="relative overflow-hidden px-4 pb-20 pt-32 md:pb-28 md:pt-40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_16%,rgba(214,173,99,0.24),transparent_34%),linear-gradient(135deg,rgba(244,223,176,0.08),transparent_42%)]" />
            <div className="container relative mx-auto max-w-6xl">
              <p className="text-xs font-bold uppercase tracking-[0.34em] text-[#d6ad63]">Qimen Strategy Courses · Singapore</p>
              <h1 className="mt-5 max-w-5xl text-4xl font-semibold uppercase leading-none text-[#f4dfb0] md:text-7xl">Practical Eastern Wisdom Courses</h1>
              <h2 className="mt-5 text-3xl font-semibold tracking-[0.14em] text-[#e2bd6b] md:text-5xl">启明遁甲课程体系</h2>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/75">Learn to understand people, timing, situations and space through a practical, structured learning system.</p>
              <p className="mt-4 max-w-3xl leading-8 text-white/65">启明遁甲课程强调讲得清楚、学得明白、用得出来。奇门遁甲基础课程自2026年9月19日起，原则上每周六、周日开班。</p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href={REGISTER_LINK} className="inline-flex items-center justify-center bg-[#d6ad63] px-7 py-4 text-sm font-bold uppercase tracking-[0.15em] text-black hover:bg-[#f4dfb0]">Select Weekly Batch</Link>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border border-[#d6ad63]/70 px-7 py-4 text-sm font-bold uppercase tracking-[0.15em] text-[#f4dfb0] hover:bg-[#d6ad63]/10">WhatsApp Course Enquiry</a>
              </div>
            </div>
          </section>

          <section className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-12">
            <div className="container mx-auto max-w-5xl text-center"><p className="text-xl font-semibold leading-9 text-[#f4dfb0] md:text-2xl">学术数，不是为了神神秘秘，而是为了在人生重要选择前，看得更清楚一点。</p><p className="mt-4 text-white/60">We teach practical wisdom so learners can apply it responsibly in real life.</p></div>
          </section>

          <section className="px-4 py-20 md:py-28">
            <div className="container mx-auto max-w-6xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d6ad63]">Course Pathways</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold text-[#f4dfb0] md:text-5xl">Four practical learning pathways under one system.</h2>
              <div className="mt-12 grid gap-6 md:grid-cols-2">
                {courses.map((course) => {
                  const external = course.href.startsWith("http");
                  const card = <article className={`flex h-full flex-col border p-7 md:p-8 ${course.featured ? "border-[#d6ad63] bg-[#d6ad63]/10" : "border-[#d6ad63]/25 bg-white/[0.035]"}`}>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d6ad63]">{course.status}</p>
                    <h3 className="mt-4 text-2xl font-semibold text-[#f4dfb0] md:text-3xl">{course.title}</h3><p className="mt-2 text-xl font-semibold text-[#d6ad63]">{course.zh}</p>
                    <p className="mt-6 text-sm leading-7 text-white/70">{course.body}</p><p className="mt-3 text-sm leading-7 text-white/62">{course.bodyZh}</p>
                    <div className="mt-6 border-l-2 border-[#d6ad63]/70 pl-4"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#d6ad63]">适合对象</p><p className="mt-2 text-sm leading-7 text-white/70">{course.suitable}</p></div>
                    <span className="mt-auto pt-8 text-xs font-bold uppercase tracking-[0.14em] text-[#f4dfb0]">{course.cta} →</span>
                  </article>;
                  return external ? <a key={course.title} href={course.href} target="_blank" rel="noopener noreferrer">{card}</a> : <Link key={course.title} href={course.href}>{card}</Link>;
                })}
              </div>
            </div>
          </section>

          <section className="px-4 pb-24">
            <div className="container mx-auto max-w-4xl border border-[#d6ad63]/40 bg-[#d6ad63]/10 p-8 text-center md:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d6ad63]">Weekly Qi Men Course</p><h2 className="mt-5 text-3xl font-semibold text-[#f4dfb0] md:text-5xl">Choose your preferred weekend.</h2>
              <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/70">报名系统会自动列出未来每周六、周日的班次。选择日期、填写资料并完成PayNow付款后确认名额。</p>
              <Link href={REGISTER_LINK} className="mt-8 inline-flex items-center justify-center bg-[#d6ad63] px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-black hover:bg-[#f4dfb0]">Select Batch & Register</Link>
            </div>
          </section>
        </main>
        <Footer /><FloatingActions />
      </div>
    </LanguageProvider>
  );
}
