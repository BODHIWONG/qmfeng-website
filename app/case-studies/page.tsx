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
    <main className="bg-[#F5F2EC] text-[#202124]">
      <section className="bg-[#202124] text-[#F5F2EC] px-6 py-24 md:py-36">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.28em] text-[#C9B58D]">QIMING DUNJIA / SELECTED CASES</p>
          <h1 className="mt-8 max-w-4xl text-5xl leading-tight md:text-7xl" style={{fontFamily:"var(--font-cormorant), var(--font-noto-serif), serif"}}>The Strategic Archive</h1>
          <h2 className="mt-5 text-xl md:text-3xl">{t("战略实践档案","Perspectives on complex decisions")}</h2>
          <p className="mt-8 max-w-2xl text-base leading-8 text-[#DAD6CE]">{t("从时机、人事关系到商业空间，以东方战略智慧审视现实情境。","Exploring timing, human dynamics and business environments through Eastern strategic wisdom and real-world perspectives.")}</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-28">
        <p className="mb-10 max-w-3xl text-sm leading-7 text-[#55534F]">{t("以下为既有案例叙述，采用隐私保护方式呈现。相关结果不构成未来表现的保证。","The following existing case narratives are presented with privacy protection. Outcomes do not guarantee future performance.")}</p>
        {studies.map((study,index)=>(
          <article key={study.title} className="grid gap-8 border-t border-[#B9A37A] py-12 md:grid-cols-[1fr_1.5fr] md:gap-16 md:py-20">
            <header>
              <p className="text-xs tracking-[0.22em] text-[#756344]">{String(index+1).padStart(2,"0")} / {study.category}</p>
              <h3 className="mt-6 text-3xl leading-tight md:text-4xl" style={{fontFamily:"var(--font-cormorant), var(--font-noto-serif), serif"}}>{t(study.zhTitle,study.title)}</h3>
            </header>
            <div className="grid gap-8 sm:grid-cols-2">
              {[[t("情境","Situation"),study.situation],[t("战略观察","Strategic observation"),study.observation],[t("调整方向","Adjustment"),study.adjustment],[t("案例叙述中的结果","Reported outcome"),study.result]].map(([label,value])=>(
                <div key={label}><h4 className="text-xs font-semibold uppercase tracking-wider text-[#756344]">{label}</h4><p className="mt-3 text-base leading-7 text-[#454440]">{value}</p></div>
              ))}
            </div>
          </article>
        ))}
      </section>
      <section className="bg-[#202124] px-6 py-20 text-[#F5F2EC]">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.24em] text-[#C9B58D]">REALITY × QIMEN</p>
          <h2 className="mt-5 max-w-3xl text-3xl leading-tight md:text-5xl">{t("从另一个角度审视重要决策。","Consider important decisions from another perspective.")}</h2>
          <Link href="/contact" className="mt-8 inline-flex border border-[#B9A37A] px-6 py-4 text-sm transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2">{t("预约私人咨询","Private consultation")}</Link>
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
