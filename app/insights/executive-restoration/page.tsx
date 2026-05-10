"use client";

import { LanguageProvider, useLanguage } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";

function ExecutiveRestorationContent() {
  const { t } = useLanguage();

  const insights = [
    {
      title: "Decision Fatigue",
      desc: "Why modern professionals lose clarity after prolonged mental pressure.",
    },
    {
      title: "Deep Rest",
      desc: "The growing importance of nervous system recovery in high-pressure urban life.",
    },
    {
      title: "Emotional Stability",
      desc: "How environment and internal rhythm influence emotional resilience.",
    },
    {
      title: "Sacred Sound Healing",
      desc: "Using sound and stillness to rebuild calmness, focus and inner balance.",
    },
  ];

  return (
    <main className="bg-[oklch(0.97_0.012_75)] text-[oklch(0.18_0.02_70)]">
      <section className="border-b border-[oklch(0.84_0.03_75)] px-4 py-24 md:py-32">
        <div className="container mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-[oklch(0.55_0.08_65)]">
            EXECUTIVE RESTORATION · SINGAPORE
          </p>

          <h1
            className="text-4xl font-semibold leading-tight md:text-6xl"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
          >
            {t(
              "高压时代的恢复能力",
              "Executive Restoration & Inner Clarity"
            )}
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-9 text-[oklch(0.38_0.02_70)]">
            {t(
              "现代城市生活中，很多人并不是不够努力，而是长期处于精神消耗与情绪紧绷之中。天乙合会文化希望重新帮助人们建立深度恢复、空间安定与内在清明。",
              "In modern urban life, many people are not lacking effort — they are suffering from prolonged mental exhaustion and emotional tension. Tian Yi Harmony Culture focuses on helping professionals restore deep rest, emotional balance and inner clarity."
            )}
          </p>
        </div>
      </section>

      <section className="px-4 py-20 md:py-28">
        <div className="container mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {insights.map((item) => (
            <div
              key={item.title}
              className="border border-[oklch(0.82_0.03_75)] bg-white/75 p-8"
            >
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[oklch(0.55_0.08_65)]">
                {item.title}
              </p>

              <p className="mt-5 text-base leading-8 text-[oklch(0.38_0.02_70)]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[oklch(0.84_0.03_75)] px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[oklch(0.55_0.08_65)]">
            SACRED SOUND · INNER STILLNESS
          </p>

          <h2
            className="mt-5 text-3xl font-semibold leading-tight md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
          >
            {t(
              "真正的清明，往往来自安静之后。",
              "True clarity often emerges after stillness returns."
            )}
          </h2>
        </div>
      </section>
    </main>
  );
}

export default function ExecutiveRestorationPage() {
  return (
    <LanguageProvider>
      <Navbar />
      <ExecutiveRestorationContent />
      <Footer />
      <FloatingActions />
    </LanguageProvider>
  );
}
