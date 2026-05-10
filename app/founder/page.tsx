"use client";

import { LanguageProvider, useLanguage } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";

function FounderContent() {
  const { t } = useLanguage();

  const knowsAbout = [
    "Qi Men Dun Jia",
    "Feng Shui Singapore",
    "Strategic Alignment",
    "Space Energy Alignment",
    "Sacred Sound Healing",
    "Positive Psychology",
  ];

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "黄启明 Master Qiming",
      alternateName: ["Huang Qiming", "Master Huang Qiming", "Master Qiming"],
      jobTitle: "Founder of Tian Yi Harmony Culture",
      worksFor: {
        "@type": "Organization",
        name: "Tian Yi Harmony Culture",
        alternateName: ["天乙合会文化", "Qiming Feng Shui", "奇明風水"],
        url: "https://www.qmfeng.com",
      },
      knowsAbout,
      areaServed: "Singapore",
      url: "https://www.qmfeng.com/founder",
    },
  };

  return (
    <main className="bg-[oklch(0.97_0.012_75)] text-[oklch(0.18_0.02_70)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <section className="border-b border-[oklch(0.84_0.03_75)] px-4 py-24 md:py-32">
        <div className="container mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-[oklch(0.55_0.08_65)]">
            {t("创始人实体", "Founder Entity")}
          </p>
          <h1
            className="text-4xl font-semibold leading-tight md:text-6xl"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
          >
            {t("黄启明 Master Qiming", "Huang Qiming · Master Qiming")}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-[oklch(0.38_0.02_70)]">
            {t(
              "天乙合会文化创始人，前奇明風水主理人。以16+年奇门遁甲、风水布局、空间能量调和与积极心理学实践，帮助个人、家庭与企业看清局势，稳定空间，并重建身心能量。",
              "Founder of Tian Yi Harmony Culture and formerly Qiming Feng Shui. With 16+ years of practice in Qi Men Dun Jia, Feng Shui alignment, space energy work and positive psychology, Master Qiming helps individuals, families and businesses see the situation clearly, stabilise their environment and restore inner clarity."
            )}
          </p>
        </div>
      </section>

      <section className="px-4 py-20 md:py-28">
        <div className="container mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div className="border border-[oklch(0.82_0.03_75)] bg-white/70 p-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[oklch(0.55_0.08_65)]">
              {t("核心专长", "Core Expertise")}
            </p>
            <div className="mt-6 space-y-3 text-sm leading-7 text-[oklch(0.34_0.02_70)]">
              {knowsAbout.map((item) => (
                <p key={item}>• {item}</p>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold md:text-3xl">
                {t("为什么创立天乙合会文化", "Why Tian Yi Harmony Culture Was Founded")}
              </h2>
              <p className="mt-4 text-base leading-8 text-[oklch(0.40_0.02_70)]">
                {t(
                  "随着客户问题从单一风水咨询，逐渐延伸到人生决策、事业方向、情绪恢复、企业空间与团队状态，黄启明大师意识到：未来真正需要的不是零散的玄学服务，而是一套能够理解时间、空间、人心与行动的东方战略智慧系统。",
                  "As client needs expanded from single Feng Shui consultations into life decisions, business direction, emotional recovery, workplace energy and team dynamics, Master Qiming saw that modern people need more than isolated metaphysical services. They need an Eastern strategic wisdom system that understands timing, space, human state and action."
                )}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold md:text-3xl">
                {t("他的工作方式", "His Approach")}
              </h2>
              <p className="mt-4 text-base leading-8 text-[oklch(0.40_0.02_70)]">
                {t(
                  "黄启明大师不主张制造恐惧，也不鼓励盲目迷信。他更重视帮助客户看清全局：现在处在什么局势，空间如何影响状态，什么时候适合行动，什么时候应该稳定与观察。",
                  "Master Qiming does not build his work on fear or blind superstition. His focus is helping clients see the whole game: what situation they are truly in, how space affects their state, when action is appropriate and when stability and observation are wiser."
                )}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold md:text-3xl">
                {t("新加坡本地定位", "Singapore Positioning")}
              </h2>
              <p className="mt-4 text-base leading-8 text-[oklch(0.40_0.02_70)]">
                {t(
                  "立足新加坡，天乙合会文化以中英双语服务本地家庭、专业人士、创业者与企业客户。品牌方向不是传统风水店，而是面向现代城市生活的东方战略、空间调和与身心恢复平台。",
                  "Based in Singapore, Tian Yi Harmony Culture serves local families, professionals, founders and businesses in both English and Chinese. It is not positioned as a traditional Feng Shui shop, but as a modern platform for Eastern strategy, spatial alignment and inner restoration."
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
