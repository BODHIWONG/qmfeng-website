"use client";

import { LanguageProvider, useLanguage } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";

function SacredSoundStillnessContent() {
  const { t } = useLanguage();

  const principles = [
    {
      title: "Stillness Before Clarity",
      desc: "Mental clarity often appears only after the nervous system slows down.",
    },
    {
      title: "Sacred Sound Healing",
      desc: "Sound, vibration and silence can help modern individuals reconnect with inner calm.",
    },
    {
      title: "Urban Emotional Recovery",
      desc: "Many city professionals are carrying invisible emotional exhaustion.",
    },
    {
      title: "Inner Space Alignment",
      desc: "External environment and internal emotional state continuously affect each other.",
    },
  ];

  return (
    <main className="bg-[oklch(0.97_0.012_75)] text-[oklch(0.18_0.02_70)]">
      <section className="border-b border-[oklch(0.84_0.03_75)] px-4 py-24 md:py-32">
        <div className="container mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-[oklch(0.55_0.08_65)]">
            SACRED SOUND & STILLNESS
          </p>

          <h1
            className="text-4xl font-semibold leading-tight md:text-6xl"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
          >
            {t(
              "梵音与深度安静",
              "Sacred Sound & Inner Stillness"
            )}
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-9 text-[oklch(0.38_0.02_70)]">
            {t(
              "在高密度城市生活中，越来越多人长期处于精神紧绷、睡眠不稳与情绪消耗之中。天乙合会文化通过梵音、空间能量与安静体验，帮助现代人重新恢复内在平衡。",
              "In high-density urban environments like Singapore, many people experience prolonged mental tension, unstable sleep and emotional exhaustion. Tian Yi Harmony Culture uses sacred sound, stillness and spatial energy alignment to support inner restoration and calmness."
            )}
          </p>
        </div>
      </section>

      <section className="px-4 py-20 md:py-28">
        <div className="container mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {principles.map((item) => (
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
            INNER RESTORATION
          </p>

          <h2
            className="mt-5 text-3xl font-semibold leading-tight md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
          >
            {t(
              "真正的恢复，并不只是休息，而是重新回到稳定。",
              "Real restoration is not merely rest — but returning to inner stability."
            )}
          </h2>
        </div>
      </section>
    </main>
  );
}

export default function SacredSoundStillnessPage() {
  return (
    <LanguageProvider>
      <Navbar />
      <SacredSoundStillnessContent />
      <Footer />
      <FloatingActions />
    </LanguageProvider>
  );
}
