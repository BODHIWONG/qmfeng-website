"use client";

import { ArrowRight, BookOpen, CalendarDays, Check, MapPin, MessageCircle, Users } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";
import { useLanguage } from "@/contexts/language-context";

const WA_LINK =
  "https://wa.me/6589593499?text=Hello%20Qimen%20Strategy%2C%20I%20would%20like%20to%20enquire%20about%20the%20Qi%20Men%20Dun%20Jia%20course%20pathway%20in%20Singapore.";
const FOUNDATION_REGISTER_LINK = "/course-registration?course=qimen-foundation&batch=2026-09-19";

const levels = [
  {
    level: "01",
    titleZh: "奇门遁甲基础课程",
    titleEn: "Qi Men Dun Jia Foundation Course",
    statusZh: "正在招生｜S$990",
    statusEn: "Now Enrolling · S$990",
    audienceZh: "零基础学员",
    audienceEn: "Complete beginners",
    focusZh: "建立九宫、八门、九星、八神、用神选择、宫位关系与稳定读局顺序。",
    focusEn: "Build the core framework: Nine Palaces, Eight Doors, Nine Stars, Eight Deities, useful-god selection, palace relationships and a repeatable reading sequence.",
    requirementZh: "无需奇门遁甲基础。",
    requirementEn: "No prior Qi Men knowledge required.",
    href: FOUNDATION_REGISTER_LINK,
    ctaZh: "选择班次并报名",
    ctaEn: "Select Batch & Register",
    featured: true,
  },
  {
    level: "02",
    titleZh: "奇门遁甲中级课程",
    titleEn: "Qi Men Dun Jia Intermediate Course",
    statusZh: "意向登记",
    statusEn: "Interest Registration",
    audienceZh: "完成基础课程或具备同等基础的学员",
    audienceEn: "Foundation graduates or equivalent",
    focusZh: "强化用神选择、多宫分析、时机判断、符号互动与实际案例解读。",
    focusEn: "Deepen useful-god selection, multi-palace analysis, timing, symbol interaction and structured interpretation through practical cases.",
    requirementZh: "完成基础课程，或经评估具备同等基础。",
    requirementEn: "Foundation completion or equivalent knowledge, subject to review.",
    href: "/course-registration?course=qimen-intermediate",
    ctaZh: "登记学习意向",
    ctaEn: "Register Interest",
  },
  {
    level: "03",
    titleZh: "奇门遁甲高级课程",
    titleEn: "Qi Men Dun Jia Advanced Course",
    statusZh: "意向登记",
    statusEn: "Interest Registration",
    audienceZh: "具备中级分析能力的学员",
    audienceEn: "Intermediate-level learners",
    focusZh: "训练复杂盘面综合、商业与重大决策案例、矛盾信息比较及监督式实战分析。",
    focusEn: "Train complex chart synthesis, business and major-decision cases, competing indicators and supervised analytical practice.",
    requirementZh: "完成中级课程，或经评估具备同等能力。",
    requirementEn: "Intermediate completion or equivalent capability, subject to review.",
    href: "/course-registration?course=qimen-advanced",
    ctaZh: "登记学习意向",
    ctaEn: "Register Interest",
  },
  {
    level: "04",
    titleZh: "奇门遁甲弟子班",
    titleEn: "Qi Men Dun Jia Disciple Programme",
    statusZh: "申请制",
    statusEn: "Application-Based",
    audienceZh: "经过筛选的高阶学员",
    audienceEn: "Selected advanced learners",
    focusZh: "长期指导、案例复盘、专业伦理、应用实践与启明遁甲方法的深入研修。",
    focusEn: "Long-term mentorship, case review, professional ethics, applied practice and deeper study within the Qimen Strategy method.",
    requirementZh: "仅限申请与评估，不能自动入读。",
    requirementEn: "By application and assessment only. Admission is not automatic.",
    href: "/course-registration?course=qimen-disciple",
    ctaZh: "提交学习申请",
    ctaEn: "Submit Interest Application",
  },
];

const foundationFacts = [
  {
    icon: CalendarDays,
    labelZh: "下一期",
    labelEn: "Next Intake",
    valueZh: "2026年9月19–20日",
    valueEn: "19–20 September 2026",
  },
  {
    icon: BookOpen,
    labelZh: "课程费用",
    labelEn: "Course Fee",
    valueZh: "S$990／人",
    valueEn: "S$990 per participant",
  },
  {
    icon: Users,
    labelZh: "教学形式",
    labelEn: "Format",
    valueZh: "两天小班实战教学",
    valueEn: "Two-day small-group practical course",
  },
  {
    icon: MapPin,
    labelZh: "地点",
    labelEn: "Location",
    valueZh: "新加坡Bedok",
    valueEn: "Bedok, Singapore",
  },
];

export default function CoursesContent() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <section className="relative overflow-hidden px-4 pb-20 pt-36 md:pb-28 md:pt-44">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_16%,rgba(214,173,99,0.25),transparent_34%),linear-gradient(135deg,rgba(244,223,176,0.08),transparent_42%)]" />
          <div className="container relative mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.30em] text-[#d6ad63]">Qimen Strategy Academy · Singapore</p>
            <h1 className="mt-5 max-w-5xl text-4xl font-semibold leading-[0.98] text-[#f4dfb0] md:text-7xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
              {t("完整的奇门遁甲实战学习路径", "A Complete Practical Qi Men Dun Jia Learning Pathway")}
            </h1>
            <p className="mt-7 max-w-4xl text-lg leading-8 text-white/72">
              {t(
                "从基础框架、稳定读局顺序，到多宫分析、复杂案例与长期应用训练。每一级课程服务不同学习阶段，不以跳级替代扎实基础。",
                "Progress from a clear foundation and repeatable chart-reading sequence to multi-palace analysis, complex cases and long-term applied practice. Each level serves a different stage of learning; later levels do not replace a solid foundation."
              )}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href={FOUNDATION_REGISTER_LINK} className="inline-flex items-center justify-center gap-3 bg-[#d6ad63] px-7 py-4 text-sm font-bold uppercase tracking-[0.13em] text-black hover:bg-[#f4dfb0]">
                {t("基础班报名", "Foundation Course Registration")}<ArrowRight size={17} />
              </Link>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 border border-[#d6ad63]/70 px-7 py-4 text-sm font-bold uppercase tracking-[0.13em] text-[#f4dfb0] hover:bg-[#d6ad63]/10">
                <MessageCircle size={18} />{t("WhatsApp课程咨询", "WhatsApp Course Enquiry")}
              </a>
            </div>
          </div>
        </section>

        <section className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-20 md:py-28">
          <div className="container mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">{t("四级课程体系", "Four-Level Progression")}</p>
            <h2 className="mt-4 max-w-4xl text-3xl font-semibold text-[#f4dfb0] md:text-5xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
              {t("选择与你当前基础匹配的学习阶段", "Choose the Level That Matches Your Current Foundation")}
            </h2>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {levels.map((course) => (
                <article key={course.level} className={`flex h-full flex-col border p-7 md:p-9 ${course.featured ? "border-[#d6ad63] bg-[#d6ad63]/10" : "border-[#d6ad63]/25 bg-white/[0.035]"}`}>
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d6ad63]">Level {course.level} · {t(course.statusZh, course.statusEn)}</p>
                      <h3 className="mt-4 text-3xl font-semibold leading-tight text-[#f4dfb0]">{t(course.titleZh, course.titleEn)}</h3>
                    </div>
                    <span className="border border-[#d6ad63]/45 px-3 py-2 text-sm font-bold text-[#d6ad63]">{course.level}</span>
                  </div>
                  <div className="mt-7 space-y-4 text-sm leading-7 text-white/66">
                    <p><strong className="text-[#f4dfb0]">{t("适合对象：", "Suitable for: ")}</strong>{t(course.audienceZh, course.audienceEn)}</p>
                    <p><strong className="text-[#f4dfb0]">{t("学习重点：", "Learning focus: ")}</strong>{t(course.focusZh, course.focusEn)}</p>
                    <p><strong className="text-[#f4dfb0]">{t("入学要求：", "Entry requirement: ")}</strong>{t(course.requirementZh, course.requirementEn)}</p>
                  </div>
                  <Link href={course.href} className="mt-8 inline-flex w-full items-center justify-center border border-[#d6ad63]/70 px-6 py-4 text-sm font-bold uppercase tracking-[0.13em] text-[#f4dfb0] transition hover:bg-[#d6ad63] hover:text-black">
                    {t(course.ctaZh, course.ctaEn)}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 md:py-28">
          <div className="container mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">{t("当前招生课程", "Current Enrolment")}</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
                {t("奇门遁甲基础课程", "Qi Men Dun Jia Foundation Course")}
              </h2>
              <p className="mt-5 text-base leading-8 text-white/65">
                {t("基础课程目前开放正式报名与PayNow付款。中级、高级和弟子班现阶段只接受意向登记，具体日期、费用与入学要求确认后再通知。", "The Foundation Course is currently open for confirmed registration and PayNow payment. Intermediate, Advanced and Disciple pathways currently accept interest registration only; dates, fees and entry requirements will be communicated after confirmation.")}
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {foundationFacts.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.labelEn} className="border border-[#d6ad63]/20 bg-white/[0.035] p-6">
                    <Icon className="text-[#d6ad63]" size={23} />
                    <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-[#d6ad63]">{t(item.labelZh, item.labelEn)}</p>
                    <p className="mt-3 text-base font-semibold leading-6 text-[#f4dfb0]">{t(item.valueZh, item.valueEn)}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-20 md:py-24">
          <div className="container mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">{t("报名与学习边界", "Registration & Learning Boundaries")}</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
                {t("基础班开放报名，后续级别需要相应准备", "Foundation Is Open Enrolment; Later Levels Require Appropriate Preparation")}
              </h2>
            </div>
            <div className="space-y-4">
              {[
                t("意向登记不代表已录取、已确定日期或已确认费用。", "Interest registration does not guarantee admission, a date or a confirmed fee."),
                t("弟子班为申请制，不能自动入读。", "The Disciple Programme is application-based and admission is not automatic."),
                t("课程学习不自动授予教学权、认证或复制课程资料的权利。", "Course participation does not automatically grant teaching rights, certification or permission to reproduce course materials."),
                t("报名与付款以课程报名页面及课程政策为准。", "Registration and payment are governed by the course registration page and course policy."),
              ].map((item) => (
                <p key={item} className="flex items-start gap-3 border-b border-white/10 pb-4 text-sm leading-7 text-white/65"><Check className="mt-1 shrink-0 text-[#d6ad63]" size={17} />{item}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-24">
          <div className="container mx-auto max-w-5xl border border-[#d6ad63]/40 bg-[#d6ad63]/10 p-8 text-center md:p-12">
            <h2 className="text-3xl font-semibold text-[#f4dfb0] md:text-5xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
              {t("从扎实基础开始学习奇门遁甲", "Start Qi Men Dun Jia With a Solid Foundation")}
            </h2>
            <p className="mx-auto mt-5 max-w-3xl leading-8 text-white/68">
              {t("选择2026年9月19–20日基础班，或通过WhatsApp咨询后续课程。", "Select the 19–20 September 2026 Foundation intake or contact us on WhatsApp about later levels.")}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href={FOUNDATION_REGISTER_LINK} className="inline-flex items-center justify-center bg-[#d6ad63] px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-black hover:bg-[#f4dfb0]">{t("选择基础班并报名", "Select Foundation Batch")}</Link>
              <Link href="/course-policy" className="inline-flex items-center justify-center border border-[#d6ad63]/70 px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#f4dfb0] hover:bg-[#d6ad63]/10">{t("查看课程政策", "Read Course Policy")}</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
