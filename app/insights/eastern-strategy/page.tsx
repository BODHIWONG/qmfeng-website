"use client";

import { LanguageProvider, useLanguage } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";

function EasternStrategyContent() {
  const { t } = useLanguage();

  const topics = [
    {
      title: "Decision Timing",
      desc: "Why timing changes the outcome of the same decision.",
    },
    {
      title: "Strategic Clarity",
      desc: "Understanding the hidden structure behind confusion and stagnation.",
    },
    {
      title: "Human State & Space",
      desc: "How environment quietly influences emotion, focus and momentum.",
    },
    {
      title: "Modern Eastern Wisdom",
      desc: "A contemporary interpretation of Qi Men Dun Jia and spatial alignment.",
    },
  ];

  return (
    <main className="bg-[oklch(0.97_0.012_75)] text-[oklch(0.18_0.02_70)]">
      <section className="border-b border-[oklch(0.84_0.03_75)] px-4 py-24 md:py-32">
        <div className="container mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-[oklch(0.55_0.08_65)]">
            EASTERN STRATEGIC WISDOM
          </p>

          <h1
            className="text-4xl font-semibold leading-tight md:text-6xl"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
          >
            {t(
              "东方战略智慧",
              "Modern Eastern Strategic Insight"
            )}
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-9 text-[oklch(0.38_0.02_70)]">
            {t(
              "天乙合会文化并不将奇门遁甲视为神秘主义，而是把它理解为一种观察时间、空间、人心与局势变化的东方战略系统。",
              "Tian Yi Harmony Culture does not position Qi Men Dun Jia as superstition, but as an Eastern strategic system for understanding timing, space, human behaviour and changing situations."
            )}
          </p>
        </div>
      </section>

      <section className="px-4 py-20 md:py-28">
        <div className="container mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="border border-[oklch(0.82_0.03_75)] bg-white/75 p-8"
            >
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[oklch(0.55_0.08_65)]">
                {topic.title}
              </p>
              <p className="mt-5 text-base leading-8 text-[oklch(0.38_0.02_70)]">
                {topic.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[oklch(0.84_0.03_75)] px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[oklch(0.55_0.08_65)]">
            SEE THE WHOLE GAME
          </p>

          <h2
            className="mt-5 text-3xl font-semibold leading-tight md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
          >
            {t(
              "真正重要的，不只是答案，而是看清变化。",
              "What matters is not only the answer — but understanding the changing situation."
            )}
          </h2>
        </div>
      </section>
    </main>
  );
}

export default function EasternStrategyPage() {
  return (
    <LanguageProvider>
      <Navbar />
      <EasternStrategyContent />
      <Footer />
      <FloatingActions />
    </LanguageProvider>
  );
}
