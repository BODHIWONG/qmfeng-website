"use client";

import { LanguageProvider, useLanguage } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";

function FounderContent() {
  const { t } = useLanguage();

  const knowsAbout = [
    "Qimen Strategy",
    "Qi Men Dun Jia",
    "Enterprise Strategic Decision Advisory",
    "Business Decision Consulting",
    "Investment Timing Analysis",
    "People & Partnership Assessment",
    "Business Feng Shui Alignment",
    "Office Feng Shui",
    "Residential Feng Shui",
    "Positive Psychology",
  ];

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Huang Qiming 黄启明",
      alternateName: ["Huang Qiming", "Qiming Huang", "黄启明"],
      description:
        "Founder and Chief Strategic Advisor of Qimen Strategy Singapore, a Singapore-based Qi Men Dun Jia strategic decision advisory brand applying Qi Men Dun Jia, business judgment, Feng Shui alignment and people assessment for major decisions.",
      jobTitle: "Founder | Chief Strategic Advisor, Qimen Strategy",
      worksFor: {
        "@type": "Organization",
        name: "启明遁甲 Qimen Strategy",
        alternateName: ["Qimen Strategy Singapore", "Qi Men Dun Jia Singapore", "Qiming Feng Shui Wisdom Pte. Ltd."],
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
            {t("启明遁甲创始人｜首席战略决策顾问", "Founder, Qimen Strategy | Chief Strategic Advisor")}
          </p>

          <h1
            className="max-w-5xl text-5xl font-semibold leading-[0.96] tracking-[0.04em] text-[#f4dfb0] md:text-7xl"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
          >
            {t("黄启明", "Huang Qiming")}
          </h1>

          <p className="mt-5 text-2xl font-semibold uppercase tracking-[0.18em] text-[#d6ad63] md:text-4xl">
            Founder｜Qimen Strategy
          </p>

          <p className="mt-3 text-xl font-semibold tracking-[0.16em] text-[#e2bd6b] md:text-3xl">
            启明遁甲创始人｜首席战略决策顾问
          </p>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-white/78 md:text-xl">
            {t(
              "黄启明是启明遁甲 Qimen Strategy 创始人及首席战略决策顾问。长期研究奇门遁甲、风水空间布局与东方决策智慧，并结合多年企业经营、客户咨询与正向心理学训练经验，形成启明遁甲的五维战略判断系统：天时、地利、人和、修为、成长。",
              "Huang Qiming is the Founder and Chief Strategic Advisor of Qimen Strategy, also known as 启明遁甲. His work applies Qi Men Dun Jia, Feng Shui alignment, business judgment and positive psychology training through a five-dimensional decision framework: timing, environment, people dynamics, inner mastery and growth."
            )}
          </p>

          <div className="mt-10 max-w-4xl border-l-2 border-[#d6ad63] bg-white/[0.035] px-6 py-6 md:px-8 md:py-7">
            <p
              className="text-xl font-semibold leading-9 text-[#f4dfb0] md:text-3xl md:leading-[1.45]"
              style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
            >
              {t(
                "每一次关键判断，都是在天时、地利、人和、修为与成长之间寻找更清晰的行动路径。",
                "Every serious decision seeks a clearer path of action through timing, environment, people dynamics, inner mastery and growth."
              )}
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            <div className="border border-[#d6ad63]/20 bg-white/[0.03] p-5">
              <p className="text-3xl font-semibold text-[#f4dfb0]">16+</p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[#d6ad63]">
                Qimen Decision Practice
              </p>
            </div>

            <div className="border border-[#d6ad63]/20 bg-white/[0.03] p-5">
              <p className="text-3xl font-semibold text-[#f4dfb0]">SG</p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[#d6ad63]">
                Singapore Qi Men Dun Jia
              </p>
            </div>

            <div className="border border-[#d6ad63]/20 bg-white/[0.03] p-5">
              <p className="text-3xl font-semibold text-[#f4dfb0]">Chief</p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[#d6ad63]">
                Strategic Advisor
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
                {t("为什么建立启明遁甲 Qimen Strategy", "Why Qimen Strategy Was Built")}
              </h2>

              <p className="mt-4 text-base leading-8 text-white/72">
                {t(
                  "随着客户问题从个人选择，逐渐延伸到企业合作、投资判断、团队任用、事业转型与长期方向，黄启明意识到：现代企业主真正需要的，不只是一次判断，而是一套能够理解时机、空间、人事、风险与创始人状态的战略决策顾问系统。",
                  "As client needs expanded from personal choices into business partnerships, investment judgment, key appointments, business transitions and long-term direction, Huang Qiming realised that modern business owners need more than a single reading: they need a strategic advisory system that understands timing, environment, people dynamics, risk and the founder's decision state."
                )}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#f4dfb0] md:text-3xl">
                {t("他的工作方式", "His Approach")}
              </h2>

              <p className="mt-4 text-base leading-8 text-white/72">
                {t(
                  "他的工作重点不是替客户做决定，而是在重大行动前帮助客户看清局势、识别风险、稳定判断，并形成更清晰的下一步行动策略：什么时候应该行动，什么时候适合观察，哪个空间与方向更顺，谁是助力，谁是消耗。",
                  "His work is not to make decisions for clients, but to help them see the situation, identify risk, stabilise judgment and form clearer next steps before major action: when to move, when to observe, which direction is more aligned, who supports and who drains."
                )}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#f4dfb0] md:text-3xl">
                {t("新加坡定位", "Singapore Positioning")}
              </h2>

              <p className="mt-4 text-base leading-8 text-white/72">
                {t(
                  "立足新加坡，启明遁甲 Qimen Strategy 以中英双语服务企业主、创始人、专业人士与关键决策者。品牌定位为新加坡奇门遁甲战略决策顾问，帮助客户在商业、投资、合作、职业、住宅与办公室风水相关的关键行动前先看清全局。",
                  "Based in Singapore, Qimen Strategy serves business owners, founders, professionals and key decision-makers in both English and Chinese. The brand is positioned as a Singapore Qi Men Dun Jia strategic decision advisory practice, helping clients see the whole game before critical action in business, investment, partnership, career, residential Feng Shui and office Feng Shui matters."
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
