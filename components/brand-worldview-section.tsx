"use client";

import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";

export default function BrandWorldviewSection() {
  const { t } = useLanguage();

  const pillars = [
    {
      zh: "战略时机",
      en: "Strategic Timing",
      descZh: "洞察时机、势能与关键选择背后的结构。",
      descEn: "Understand timing and momentum behind major decisions.",
    },
    {
      zh: "空间布局",
      en: "Spatial Alignment",
      descZh: "让办公室与空间重新支持人的状态。",
      descEn: "Realign environments to support clarity and direction.",
    },
    {
      zh: "内在清明",
      en: "Inner Clarity",
      descZh: "减少内耗与环境摩擦，恢复稳定与清晰。",
      descEn: "Reduce friction and regain clarity and focus.",
    },
  ];

  return (
    <section className="bg-[oklch(0.96_0.012_75)] px-4 py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-5 text-lg font-bold uppercase tracking-[0.34em] text-[oklch(0.55_0.08_65)] md:text-xl">
            {t("东方战略决策系统", "Eastern Decision Intelligence")}
          </p>
          <h2 className="text-4xl font-semibold leading-tight text-[oklch(0.18_0.02_70)] md:text-6xl">
            {t("QIMEN STRATEGY · 启明遁甲", "QIMEN STRATEGY")}
          </h2>
          <p className="mt-5 text-base font-semibold uppercase tracking-[0.24em] text-[oklch(0.55_0.08_65)] md:text-lg">
            SEE THE WHOLE GAME
          </p>
          <p className="mx-auto mt-10 max-w-4xl text-lg leading-9 text-[oklch(0.32_0.02_70)] md:text-2xl">
            {t(
              "一套融合 Timing、人际动态与空间势能的东方决策情报系统。",
              "An Eastern Decision Intelligence System integrating Timing, Human Dynamics and Environmental Alignment."
            )}
          </p>
          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-[oklch(0.38_0.02_70)] md:text-lg">
            {t(
              "由 Master Huang Qiming 创建，帮助个人与企业在复杂环境中看清全局，做出更稳定的关键决策。",
              "Founded by Master Huang Qiming to help individuals and businesses make clearer decisions in complex environments."
            )}
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.en} className="border border-[oklch(0.82_0.03_75)] bg-white/70 p-8 shadow-sm">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.55_0.08_65)]">
                {pillar.en}
              </p>
              <h3 className="text-2xl font-semibold text-[oklch(0.20_0.02_70)]">
                {t(pillar.zh, pillar.en)}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[oklch(0.42_0.02_70)]">
                {t(pillar.descZh, pillar.descEn)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/founder" className="border border-[oklch(0.55_0.08_65)] px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[oklch(0.30_0.03_70)] transition-colors hover:bg-[oklch(0.55_0.08_65)] hover:text-white">
            {t("Master Huang Qiming", "Master Huang Qiming")}
          </Link>
        </div>
      </div>
    </section>
  );
}
