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
      category: "Timing Alignment",
      title: "When Expansion Created More Friction Than Growth",
      zhTitle: "当扩张带来的不是增长，而是摩擦",
      situation:
        "A business owner was pushing expansion, but the internal operating structure was not yet stable. More effort created more pressure instead of momentum.",
      observation:
        "The challenge was not simply execution. The deeper issue was timing mismatch: the business needed consolidation before expansion.",
      adjustment:
        "We shifted the strategic focus from aggressive growth to internal stabilisation, decision rhythm and environmental alignment.",
      result:
        "The client gained clearer priorities, reduced decision pressure and rebuilt momentum with a more realistic pace.",
    },
    {
      category: "Human Dynamics",
      title: "A Partnership That Looked Strong on Paper",
      zhTitle: "纸面上完美的合伙关系，为何开始内耗",
      situation:
        "Two partners had complementary skills and a clear agreement, yet communication became increasingly heavy under pressure.",
      observation:
        "The visible structure was correct, but the hidden decision styles and stress responses were misaligned.",
      adjustment:
        "We mapped the human dynamics, clarified roles and advised a more cautious decision rhythm before deeper commitment.",
      result:
        "The client avoided deeper conflict and approached the partnership with stronger boundaries and clearer expectations.",
    },
    {
      category: "Space Alignment",
      title: "Retail Space, Customer Flow and Environmental Friction",
      zhTitle: "零售空间、客户流动与环境摩擦",
      situation:
        "A retail space had products and effort, but customer movement and conversion felt inconsistent.",
      observation:
        "The issue was environmental friction. The entrance, display rhythm and movement flow were not guiding attention clearly.",
      adjustment:
        "We refined the layout, repositioned key areas and aligned the space with clearer customer decision points.",
      result:
        "The business reported more stable customer interaction and a stronger sense of flow within the shop.",
    },
  ];

  return (
    <main className="bg-[#050403] text-white">
      <section className="relative overflow-hidden border-b border-[#d6ad63]/20 px-4 py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(214,173,99,0.2),transparent_34%)]" />
        <div className="container relative mx-auto max-w-6xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-[#d6ad63]">
            STRATEGIC CASE STUDIES · QIMEN STRATEGY SINGAPORE
          </p>

          <h1
            className="max-w-5xl text-5xl font-semibold uppercase leading-[0.95] tracking-[0.06em] text-[#f4dfb0] md:text-7xl"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
          >
            Realignment Stories
          </h1>

          <h2 className="mt-5 text-3xl font-semibold tracking-[0.18em] text-[#d6ad63] md:text-5xl">
            {t("商业案例 · 决策洞察", "Business Cases · Decision Insight")}
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-white/78 md:text-xl">
            {t(
              "案例不是为了制造神话，而是为了说明启明遁甲如何在真实商业情境中观察时机、方向、人事关系与环境摩擦。",
              "Case studies are not written to create myths. They explain how Qimen Strategy observes timing, direction, human dynamics and environmental friction in real business situations."
            )}
          </p>

          <p className="mt-4 max-w-3xl text-base leading-8 text-white/68">
            {t(
              "以下内容采用隐私保护方式呈现，重点是局势、战略观察、调整方向与结果，而不是夸大承诺。",
              "The following cases are presented with privacy protection. The focus is situation, strategic observation, adjustment and result — not exaggerated promises."
            )}
          </p>
        </div>
      </section>

      <section className="px-4 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl space-y-8">
          {studies.map((study, index) => (
            <article key={study.title} className="border border-[#d6ad63]/20 bg-white/[0.035] p-8 md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#d6ad63]">
                Case {index + 1} · {study.category}
              </p>

              <h3 className="mt-4 text-3xl font-semibold text-[#f4dfb0] md:text-4xl">
                {study.title}
              </h3>

              <p className="mt-2 text-lg tracking-[0.12em] text-[#d6ad63]">
                {study.zhTitle}
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#d6ad63]">Situation</p>
                  <p className="mt-3 text-base leading-8 text-white/72">{study.situation}</p>
                </div>

                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#d6ad63]">Strategic Observation</p>
                  <p className="mt-3 text-base leading-8 text-white/72">{study.observation}</p>
                </div>

                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#d6ad63]">Adjustment</p>
                  <p className="mt-3 text-base leading-8 text-white/72">{study.adjustment}</p>
                </div>

                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#d6ad63]">Result</p>
                  <p className="mt-3 text-base leading-8 text-white/72">{study.result}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-[#d6ad63]/20 bg-[#080603] px-4 py-20">
        <div className="container mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">
            SEE THE WHOLE GAME
          </p>

          <h2
            className="mt-5 text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
          >
            {t(
              "真正的案例价值，是让客户看见自己正在经历的局。",
              "The value of a case study is helping clients recognise the situation they are already in."
            )}
          </h2>

          <Link
            href="/qimen-strategy-business"
            className="mt-10 inline-flex items-center justify-center border border-[#d6ad63]/70 px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#f4dfb0] transition hover:bg-[#d6ad63]/10"
          >
            {t("理解启明遁甲", "Understand Qimen Strategy")}
          </Link>
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
