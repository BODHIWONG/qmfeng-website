"use client";

import { LanguageProvider, useLanguage } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";

const FOUNDER_IMAGE = "/master-qiming-about.jpg";

function FounderContent() {
  const { t } = useLanguage();

  const knowsAbout = [
    "Qimen Strategy",
    "Qi Men Dun Jia",
    "Practical Qi Men Dun Jia Teaching",
    "Qi Men Dun Jia Course Instruction",
    "Qi Men Dun Jia Business Decision Advisory",
    "Enterprise Strategic Decision Advisory",
    "Business Decision Consulting",
    "Investment Timing Analysis",
    "People & Partnership Assessment",
    "Business Feng Shui Alignment",
    "Office Feng Shui",
    "Residential Feng Shui",
    "Founder Strategic Advisory",
    "Positive Psychology",
  ];

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Huang Qiming 黄启明",
      alternateName: ["Qiming Huang", "黄启明", "启明老师", "Mr.Qiming"],
      description:
        "Founder and Strategic Decision Advisor of Qimen Strategy Singapore, and an instructor of practical Qi Men Dun Jia courses. Mr.Qiming has 16 years of practical Qi Men Dun Jia business advisory experience, has been involved in the strategic decision-making of two businesses operating steadily for 18 years, and has advised multiple companies on key strategic decisions.",
      jobTitle: "Founder, Strategic Decision Advisor & Practical Qi Men Dun Jia Instructor",
      worksFor: {
        "@type": "Organization",
        name: "Qimen Strategy｜启明遁甲决策智库",
        alternateName: ["启明遁甲", "Qimen Strategy Singapore", "Qi Men Dun Jia Singapore"],
        legalName: "QIMING FENG SHUI WISDOM PTE. LTD.",
        url: "https://www.qmfeng.com",
      },
      knowsAbout,
      areaServed: "Singapore",
      image: `https://www.qmfeng.com${FOUNDER_IMAGE}`,
      url: "https://www.qmfeng.com/founder",
    },
  };

  return (
    <main className="bg-[#050403] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <section className="relative overflow-hidden border-b border-[#d6ad63]/20 px-4 py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(214,173,99,0.18),transparent_34%)]" />

        <div className="container relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-[#d6ad63]">
              {t(
                "启明遁甲决策智库创始人｜奇门遁甲实战课程主讲｜企业决策顾问",
                "Founder, Qimen Strategy | Practical Qi Men Dun Jia Instructor & Business Decision Advisor"
              )}
            </p>

            <h1
              className="max-w-5xl text-5xl font-semibold leading-[0.96] tracking-[0.04em] text-[#f4dfb0] md:text-7xl"
              style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
            >
              {t("启明老师", "Mr.Qiming")}
            </h1>

            <p className="mt-5 text-2xl font-semibold uppercase tracking-[0.18em] text-[#d6ad63] md:text-4xl">
              Founder｜Qimen Strategy
            </p>

            <p className="mt-3 text-xl font-semibold tracking-[0.12em] text-[#e2bd6b] md:text-3xl">
              {t(
                "奇门遁甲实战课程主讲｜企业决策顾问",
                "Practical Qi Men Dun Jia Instructor｜Business Decision Advisor"
              )}
            </p>

            <p className="mt-8 max-w-3xl text-lg leading-9 text-white/78 md:text-xl">
              {t(
                "启明老师是启明遁甲决策智库（Qimen Strategy）创始人、奇门遁甲实战课程主讲及企业决策顾问。16 年来长期以奇门遁甲协助企业主判断时机、方向、人事合作、风水空间与重大行动节奏，并将多年实战经验整理为以系统框架、案例分析与实际应用为核心的奇门遁甲教学课程，形成启明遁甲五维战略判断系统：天时、地利、人和、修为、成长。",
                "Mr.Qiming is the Founder of Qimen Strategy, an instructor of practical Qi Men Dun Jia courses and a Qi Men Dun Jia Business Decision Advisor. For 16 years, his work has supported business owners in reading timing, direction, people dynamics, Feng Shui alignment and major action rhythm. He has also developed structured practical courses centred on clear frameworks, case analysis and real-world application, forming the Qimen Strategy five-dimensional decision framework: timing, environment, people dynamics, inner mastery and growth."
              )}
            </p>

            <div className="mt-10 max-w-4xl border-l-2 border-[#d6ad63] bg-white/[0.035] px-6 py-6 md:px-8 md:py-7">
              <p
                className="text-xl font-semibold leading-9 text-[#f4dfb0] md:text-3xl md:leading-[1.45]"
                style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
              >
                {t(
                  "16 年奇门遁甲实战与企业决策经验｜奇门遁甲实战课程主讲｜两家企业 18 年稳健运营实战背书",
                  "16 Years of Practical Qi Men Dun Jia & Business Advisory · Practical Course Instructor · Two Businesses Operating Steadily for 18 Years"
                )}
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border border-[#d6ad63]/30 bg-[#0b0907] shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
            <img
              src={FOUNDER_IMAGE}
              alt={t("启明老师｜启明遁甲决策智库创始人", "Mr.Qiming, Founder of Qimen Strategy")}
              className="aspect-[4/5] w-full object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent p-6 md:p-7">
              <p
                className="text-3xl font-semibold text-[#f4dfb0]"
                style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
              >
                {t("启明老师", "Mr.Qiming")}
              </p>
              <p className="mt-2 text-sm font-semibold leading-6 text-[#d6ad63]">
                {t(
                  "奇门遁甲实战课程主讲｜企业决策顾问",
                  "Practical Qi Men Dun Jia Instructor｜Business Decision Advisor"
                )}
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:col-span-2 md:grid-cols-4">
            <div className="border border-[#d6ad63]/20 bg-white/[0.03] p-5">
              <p className="text-3xl font-semibold text-[#f4dfb0]">16+</p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[#d6ad63]">
                Qi Men Practice & Advisory
              </p>
            </div>

            <div className="border border-[#d6ad63]/20 bg-white/[0.03] p-5">
              <p className="text-3xl font-semibold text-[#f4dfb0]">18</p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[#d6ad63]">
                Years Business Operation
              </p>
            </div>

            <div className="border border-[#d6ad63]/20 bg-white/[0.03] p-5">
              <p className="text-3xl font-semibold text-[#f4dfb0]">实战</p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[#d6ad63]">
                Practical Course Instruction
              </p>
            </div>

            <div className="border border-[#d6ad63]/20 bg-white/[0.03] p-5">
              <p className="text-3xl font-semibold text-[#f4dfb0]">5D</p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[#d6ad63]">
                Timing · People · Growth
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:py-28">
        <div className="container mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div className="border border-[#d6ad63]/20 bg-white/[0.03] p-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d6ad63]">
              {t("核心系统", "Core Systems")}
            </p>

            <div className="mt-6 space-y-3 text-sm leading-7 text-white/72">
              {knowsAbout.map((item) => (
                <p key={item}>• {item}</p>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-[#f4dfb0] md:text-3xl">
                {t("为什么建立启明遁甲决策智库", "Why Qimen Strategy Was Built")}
              </h2>

              <p className="mt-4 text-base leading-8 text-white/72">
                {t(
                  "随着客户问题从个人选择逐渐延伸到企业合作、投资判断、团队任用、事业转型与长期方向，启明老师意识到：现代企业主不仅需要关键时刻的决策支持，真正希望系统学习的人也需要一套结构清楚、以案例和实际应用为核心的奇门遁甲课程。因此，启明遁甲决策智库同时发展企业决策顾问与奇门遁甲实战教学两条专业路径。",
                  "As client needs expanded from personal choices into business partnerships, investment judgment, key appointments, business transitions and long-term direction, Mr.Qiming recognised two distinct needs: business owners require decision support at critical moments, while serious learners need structured Qi Men Dun Jia education built around clear frameworks, cases and practical application. Qimen Strategy therefore develops both strategic advisory and practical Qi Men Dun Jia teaching as two professional pathways."
                )}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#f4dfb0] md:text-3xl">
                {t("商业与教学实战背书", "Practical Business & Teaching Foundation")}
              </h2>

              <p className="mt-4 text-base leading-8 text-white/72">
                {t(
                  "启明老师长期参与两家已稳健运营 18 年企业的经营与决策，并为多家企业提供战略决策顾问支持。课程内容也不是停留在概念背诵，而是结合真实商业判断、合作、人事、扩张、空间环境与重大行动案例，帮助学员理解奇门遁甲如何被有步骤地分析与应用。",
                  "Mr.Qiming has long been involved in the operation and decision-making of two businesses that have operated steadily for 18 years, and has advised multiple companies on strategic decisions. His teaching does not stop at memorising concepts; it connects Qi Men Dun Jia with real cases involving business judgment, partnerships, people, expansion, operating environments and major action decisions."
                )}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#f4dfb0] md:text-3xl">
                {t("他的顾问与教学方式", "His Advisory & Teaching Approach")}
              </h2>

              <p className="mt-4 text-base leading-8 text-white/72">
                {t(
                  "在顾问服务中，启明老师不会替客户做决定，而是帮助客户看清局势、识别重点并形成更清晰的下一步行动策略。在教学中，他强调系统框架、案例拆解、实际练习与复盘纠偏，让学员不仅听懂概念，也逐步建立基础读局与实际分析能力。",
                  "In advisory work, Mr.Qiming does not make decisions for clients; he helps them see the situation, identify priorities and form clearer next steps. In teaching, he emphasises structured frameworks, case breakdowns, guided practice and review so that students move beyond understanding concepts and gradually build practical chart-reading and analytical ability."
                )}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#f4dfb0] md:text-3xl">
                {t("新加坡定位", "Singapore Positioning")}
              </h2>

              <p className="mt-4 text-base leading-8 text-white/72">
                {t(
                  "立足新加坡，启明遁甲决策智库（Qimen Strategy）以中英双语服务企业主、创始人、专业人士、关键决策者与奇门遁甲学习者。机构定位为新加坡奇门遁甲企业决策顾问与奇门遁甲实战教学机构：一方面帮助客户在商业、投资、合作、职业、住宅与办公室风水相关的关键行动前先看清全局；另一方面通过系统课程、案例分析与实战练习，培养学员的基础读局与实际应用能力。",
                  "Based in Singapore, Qimen Strategy serves business owners, founders, professionals, key decision-makers and Qi Men Dun Jia learners in both English and Chinese. The institution is positioned as both a Singapore Qi Men Dun Jia business decision advisory practice and a practical Qi Men Dun Jia teaching academy: helping clients see the whole game before critical action in business, investment, partnership, career, residential Feng Shui and office Feng Shui matters, while developing learners through structured courses, case analysis and practical exercises."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function FounderPage() {
  return (
    <LanguageProvider>
      <Navbar />
      <FounderContent />
      <Footer />
      <FloatingActions />
    </LanguageProvider>
  );
}
