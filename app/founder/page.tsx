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
    "Strategic Wisdom Decision Method",
    "Critical Decision Advisory",
    "Business Operation Experience",
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
        "Founder of Qimen Strategy Singapore, a Strategic Wisdom Decision Method rooted in Qi Men Dun Jia.",
      jobTitle: "Founder of Qimen Strategy Singapore",
      worksFor: {
        "@type": "Organization",
        name: "Qimen Strategy Singapore",
        alternateName: ["启明遁甲", "Qiming Feng Shui", "奇明風水"],
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
            {t("创始人权威", "Founder Authority")}
          </p>

          <h1
            className="max-w-5xl text-5xl font-semibold leading-[0.96] tracking-[0.04em] text-[#f4dfb0] md:text-7xl"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
          >
            {t("黄启明大师", "Master Huang Qiming")}
          </h1>

          <p className="mt-5 text-2xl font-semibold uppercase tracking-[0.24em] text-[#d6ad63] md:text-4xl">
            Qimen Strategy Singapore
          </p>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-white/78 md:text-xl">
            {t(
              "启明遁甲创始人。拥有 16 年奇门决策实战经验，结合 16 年企业运营与关键决策服务经验，帮助企业主与个人在重要行动前看清时机、方向、人事关系与局势风险。",
              "Founder of Qimen Strategy Singapore. With 16 years of practical Qimen decision advisory experience, combined with 16 years of business operation and critical decision service experience, Master Huang Qiming helps business owners and individuals read timing, direction, people dynamics and risk before important decisions."
            )}
          </p>

          <div className="mt-10 max-w-4xl border-l-2 border-[#d6ad63] bg-white/[0.035] px-6 py-6 md:px-8 md:py-7">
            <p
              className="text-xl font-semibold leading-9 text-[#f4dfb0] md:text-3xl md:leading-[1.45]"
              style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
            >
              {t(
                "每一次奇门决策，都是一场精密推演；如匠人创作传世之作，于细微处洞察全局。",
                "Every Qimen Strategy session is a precise act of strategic deduction — like a master artisan shaping an enduring work, seeing the whole from the finest details."
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
              <p className="text-3xl font-semibold text-[#f4dfb0]">16</p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[#d6ad63]">
                Business Operation
              </p>
            </div>

            <div className="border border-[#d6ad63]/20 bg-white/[0.03] p-5">
              <p className="text-3xl font-semibold text-[#f4dfb0]">SG</p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[#d6ad63]">
                Singapore Focus
              </p>
            </div>

            <div className="border border-[#d6ad63]/20 bg-white/[0.03] p-5">
              <p className="text-3xl font-semibold text-[#f4dfb0]">Qimen</p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[#d6ad63]">
                Strategy Advisory
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
                {t("为什么建立启明遁甲", "Why Qimen Strategy Was Built")}
              </h2>

              <p className="mt-4 text-base leading-8 text-white/72">
                {t(
                  "随着客户问题从个人选择，逐渐延伸到企业合作、投资判断、团队任用、事业转型与长期方向，黄启明大师意识到：现代社会真正需要的，是一套能够理解时机、方向、人事与风险的战略智慧决策方法。",
                  "As client needs expanded from personal choices into business partnerships, investment judgment, key appointments, career transitions and long-term direction, Master Huang Qiming realised that modern society needs a strategic wisdom decision method that understands timing, direction, people dynamics and risk."
                )}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#f4dfb0] md:text-3xl">
                {t("他的工作方式", "His Approach")}
              </h2>

              <p className="mt-4 text-base leading-8 text-white/72">
                {t(
                  "他的重点是帮助客户看清局势：什么时候应该行动，什么时候适合观察，哪个方向更顺，谁是助力，谁是消耗，以及隐藏风险在哪里。启明遁甲不是替客户决定，而是帮助客户建立更清醒的下一步判断。",
                  "His focus is helping clients read the situation: when to move, when to observe, which direction is more aligned, who supports, who drains, and where hidden risks may sit. Qimen Strategy does not decide for clients; it helps them build clearer next-step judgment."
                )}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#f4dfb0] md:text-3xl">
                {t("新加坡定位", "Singapore Positioning")}
              </h2>

              <p className="mt-4 text-base leading-8 text-white/72">
                {t(
                  "立足新加坡，启明遁甲以中英双语服务企业主、专业人士、创业者与个人客户。品牌定位为现代东方战略决策顾问，帮助客户在关键行动前先看清局势。",
                  "Based in Singapore, Qimen Strategy serves business owners, professionals, founders and individuals in both English and Chinese. The brand is positioned as a modern Eastern strategic decision advisory practice, helping clients see the situation clearly before critical action."
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
