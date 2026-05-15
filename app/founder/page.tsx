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
    "Strategic Decision Insight",
    "Feng Shui Singapore",
    "Space Energy Alignment",
    "Positive Psychology",
  ];

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "黄启明 Master Qiming",
      alternateName: ["Huang Qiming", "Master Huang Qiming", "Master Qiming"],
      description:
        "Founder of Qimen Strategy Singapore and Tian Yi Harmony Culture.",
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
              "启明遁甲创始人。以16+年奇门遁甲、战略决策、风水布局与空间能量实践，帮助个人、企业与家庭在关键节点前，看清全局与时机。",
              "Founder of Qimen Strategy Singapore. With 16+ years of practice in Qi Men Dun Jia, strategic decision insight, Feng Shui alignment and space energy work, Master Qiming helps individuals, businesses and families see the whole game before major decisions."
            )}
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            <div className="border border-[#d6ad63]/20 bg-white/[0.03] p-5">
              <p className="text-3xl font-semibold text-[#f4dfb0]">16+</p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[#d6ad63]">
                Years Practice
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
                Strategic System
              </p>
            </div>

            <div className="border border-[#d6ad63]/20 bg-white/[0.03] p-5">
              <p className="text-3xl font-semibold text-[#f4dfb0]">Mind</p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[#d6ad63]">
                Positive Psychology
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
                  "随着客户问题从传统风水咨询，逐渐延伸到人生决策、企业方向、团队状态、情绪恢复与空间能量，黄启明大师意识到：现代社会真正需要的，不只是单一玄学服务，而是一套能够理解时间、空间、人事与行动的东方战略系统。",
                  "As client needs expanded from traditional Feng Shui consultation into life decisions, business direction, team dynamics, emotional recovery and space alignment, Master Qiming realised that modern society needs more than isolated metaphysical services. It needs an Eastern strategic system that understands timing, space, people and action."
                )}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#f4dfb0] md:text-3xl">
                {t("他的工作方式", "His Approach")}
              </h2>

              <p className="mt-4 text-base leading-8 text-white/72">
                {t(
                  "他的重点并不是制造恐惧，而是帮助客户看清全局：什么时候应该行动，什么时候适合观察，什么环境正在消耗你，什么方向真正适合长期发展。",
                  "His work is not built on fear. The focus is helping clients see the whole game: when to move, when to observe, what environment is draining energy and which direction supports long-term growth."
                )}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#f4dfb0] md:text-3xl">
                {t("新加坡定位", "Singapore Positioning")}
              </h2>

              <p className="mt-4 text-base leading-8 text-white/72">
                {t(
                  "立足新加坡，启明遁甲以中英双语服务企业主、专业人士、创业者与家庭客户。品牌定位不是传统风水店，而是现代东方战略咨询与空间调和平台。",
                  "Based in Singapore, Qimen Strategy serves founders, professionals, business owners and families in both English and Chinese. The positioning is not a traditional Feng Shui shop, but a modern Eastern strategy and spatial alignment platform."
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
