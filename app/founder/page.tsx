"use client";

import { LanguageProvider, useLanguage } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";

function FounderContent() {
  const { t } = useLanguage();

  const knowsAbout = [
    "Qimen Strategy",
    "Enterprise Strategic Decision Advisory",
    "Chief Strategic Advisory",
    "Qi Men Dun Jia",
    "Annual Strategic Forecast",
    "Business Feng Shui Alignment",
    "People & Partnership Assessment",
    "Founder Inner Mastery",
    "Strategic Growth",
    "Positive Psychology",
  ];

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "黄启明 Master Huang Qiming",
      alternateName: ["Huang Qiming", "Master Huang Qiming", "Master Qiming"],
      description:
        "Founder and Chief Strategic Advisor of Qimen Strategy Singapore, an Enterprise Strategic Decision Advisory system rooted in Qi Men Dun Jia, business Feng Shui alignment, people assessment and founder strategic growth.",
      jobTitle: "Founder | Chief Strategic Advisor",
      worksFor: {
        "@type": "Organization",
        name: "Qimen Strategy Singapore",
        alternateName: ["启明战略决策顾问", "启明遁甲", "Qiming Feng Shui Wisdom Pte. Ltd."],
        url: "https://www.qmfeng.com",
      },
      knowsAbout,
      areaServed: "Singapore",
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

        <div className="container relative mx-auto max-w-6xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-[#d6ad63]">
            {t("首席企业战略顾问", "Chief Strategic Advisor")}
          </p>

          <h1
            className="max-w-5xl text-5xl font-semibold leading-[0.96] tracking-[0.04em] text-[#f4dfb0] md:text-7xl"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
          >
            {t("黄启明大师", "Master Huang Qiming")}
          </h1>

          <p className="mt-5 text-2xl font-semibold uppercase tracking-[0.18em] text-[#d6ad63] md:text-4xl">
            Founder｜Chief Strategic Advisor
          </p>

          <p className="mt-3 text-xl font-semibold tracking-[0.16em] text-[#e2bd6b] md:text-3xl">
            创始人｜首席企业战略顾问
          </p>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-white/78 md:text-xl">
            {t(
              "黄启明大师是 QIMEN STRATEGY｜启明战略决策顾问创始人及首席企业战略顾问。以 16 年奇门决策实战经验为根基，结合企业经营判断、风水空间布局、人事合作关系判断与创始人内在修为，长期服务企业主、创始人与关键决策者。",
              "Master Huang Qiming is the Founder and Chief Strategic Advisor of QIMEN STRATEGY. Rooted in 16 years of practical Qimen decision experience, he integrates business judgment, Feng Shui spatial alignment, people and partnership assessment, and founder inner mastery to support business owners, founders and key decision-makers."
            )}
          </p>

          <div className="mt-10 max-w-4xl border-l-2 border-[#d6ad63] bg-white/[0.035] px-6 py-6 md:px-8 md:py-7">
            <p
              className="text-xl font-semibold leading-9 text-[#f4dfb0] md:text-3xl md:leading-[1.45]"
              style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
            >
              {t(
                "每一次企业战略判断，都是在天时、地利、人和、修为与成长之间寻找更清晰的行动路径。",
                "Every enterprise strategic judgment seeks a clearer path of action through timing, environment, people dynamics, inner mastery and growth."
              )}
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            <div className="border border-[#d6ad63]/20 bg-white/[0.03] p-5">
              <p className="text-3xl font-semibold text-[#f4dfb0]">16</p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[#d6ad63]">
                Qimen Decision Practice
              </p>
            </div>

            <div className="border border-[#d6ad63]/20 bg-white/[0.03] p-5">
              <p className="text-3xl font-semibold text-[#f4dfb0]">Chief</p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[#d6ad63]">
                Strategic Advisor
              </p>
            </div>

            <div className="border border-[#d6ad63]/20 bg-white/[0.03] p-5">
              <p className="text-3xl font-semibold text-[#f4dfb0]">SG</p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[#d6ad63]">
                Singapore Focus
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
                {t("为什么建立启明战略决策顾问", "Why Qimen Strategy Was Built")}
              </h2>

              <p className="mt-4 text-base leading-8 text-white/72">
                {t(
                  "随着客户问题从个人选择，逐渐延伸到企业合作、投资判断、团队任用、事业转型与长期方向，黄启明大师意识到：现代企业主真正需要的，不只是一次判断，而是一套能够理解时机、空间、人事、风险与创始人状态的战略决策顾问系统。",
                  "As client needs expanded from personal choices into business partnerships, investment judgment, key appointments, business transitions and long-term direction, Master Huang Qiming realised that modern business owners need more than a single reading: they need a strategic advisory system that understands timing, environment, people dynamics, risk and the founder's decision state."
                )}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#f4dfb0] md:text-3xl">
                {t("他的工作方式", "His Approach")}
              </h2>

              <p className="mt-4 text-base leading-8 text-white/72">
                {t(
                  "作为首席企业战略顾问，他的重点是帮助客户在重大行动前看清全局：什么时候应该行动，什么时候适合观察，哪个空间与方向更顺，谁是助力，谁是消耗，企业主自身是否具备承接下一阶段的判断力、定力与承载力。",
                  "As Chief Strategic Advisor, his focus is helping clients see the whole game before major action: when to move, when to observe, which environment and direction are more aligned, who supports, who drains, and whether the founder has the judgment, steadiness and capacity to carry the next stage."
                )}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#f4dfb0] md:text-3xl">
                {t("新加坡定位", "Singapore Positioning")}
              </h2>

              <p className="mt-4 text-base leading-8 text-white/72">
                {t(
                  "立足新加坡，QIMEN STRATEGY｜启明战略决策顾问以中英双语服务企业主、创始人、专业人士与关键决策者。品牌定位为现代东方企业战略决策顾问，帮助客户在关键行动前先看清全局。",
                  "Based in Singapore, QIMEN STRATEGY serves business owners, founders, professionals and key decision-makers in both English and Chinese. The brand is positioned as a modern Eastern enterprise strategic advisory practice, helping clients see the whole game before critical action."
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
