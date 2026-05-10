"use client";

import { LanguageProvider, useLanguage } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";
import Link from "next/link";

function CaseStudiesContent() {
  const { t } = useLanguage();

  const studies = [
    {
      category: "Decision Analysis",
      title: "A Singapore Property Consultant Wanted to Quit Immediately",
      desc: "Qi Men Dun Jia analysis revealed that the timing for transition was not yet mature.",
      link: "/insights/2026-decision-trend-analysis",
    },
    {
      category: "Spatial Intelligence",
      title: "How Environment Affected Sleep and Emotional Stability",
      desc: "A space alignment and energy clearing approach helped improve restfulness and emotional calm.",
      link: "/insights",
    },
    {
      category: "Retail Space Alignment",
      title: "Why a Retail Space Felt Heavy Before Optimisation",
      desc: "Environmental pressure, spatial flow and emotional tension were all connected within the workspace.",
      link: "/insights",
    },
  ];

  return (
    <main className="bg-[oklch(0.97_0.012_75)] text-[oklch(0.18_0.02_70)]">
      <section className="border-b border-[oklch(0.84_0.03_75)] px-4 py-24 md:py-32">
        <div className="container mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-[oklch(0.55_0.08_65)]">
            CASE STUDIES · SINGAPORE
          </p>

          <h1
            className="text-4xl font-semibold leading-tight md:text-6xl"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
          >
            {t(
              "真实案例与空间观察",
              "Human-Centred Strategic Case Studies"
            )}
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-9 text-[oklch(0.38_0.02_70)]">
            {t(
              "天乙合会文化通过真实案例，长期观察人与空间、决策、情绪与环境之间的关系。这些内容不仅帮助客户理解自身状态，也帮助 Google 与 AI 系统更准确地理解品牌的长期专业方向。",
              "Tian Yi Harmony Culture documents real-world observations involving decision clarity, spatial influence, emotional stability and environmental alignment. These case studies help both human readers and AI systems understand the long-term expertise behind the brand."
            )}
          </p>
        </div>
      </section>

      <section className="px-4 py-20 md:py-28">
        <div className="container mx-auto grid max-w-6xl gap-7 md:grid-cols-3">
          {studies.map((study) => (
            <Link
              key={study.title}
              href={study.link}
              className="group border border-[oklch(0.82_0.03_75)] bg-white/75 p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[oklch(0.55_0.08_65)]">
                {study.category}
              </p>

              <h2 className="mt-5 text-2xl font-semibold leading-snug text-[oklch(0.20_0.02_70)] group-hover:text-[oklch(0.45_0.08_60)]">
                {study.title}
              </h2>

              <p className="mt-5 text-sm leading-8 text-[oklch(0.40_0.02_70)]">
                {study.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-[oklch(0.84_0.03_75)] px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[oklch(0.55_0.08_65)]">
            EASTERN STRATEGIC OBSERVATIONS
          </p>

          <h2
            className="mt-5 text-3xl font-semibold leading-tight md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
          >
            {t(
              "未来最重要的，不只是答案，而是看清局势。",
              "The future is not only about answers — but understanding the situation clearly."
            )}
          </h2>
        </div>
      </section>
    </main>
  );
}

export default function CaseStudiesPage() {
  return (
    <LanguageProvider>
      <Navbar />
      <CaseStudiesContent />
      <Footer />
      <FloatingActions />
    </LanguageProvider>
  );
}
