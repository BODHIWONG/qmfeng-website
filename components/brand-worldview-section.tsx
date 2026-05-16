"use client";

import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";

export default function BrandWorldviewSection() {
  const { t } = useLanguage();

  const pillars = [
    {
      zh: "时机判断",
      en: "Timing",
      descZh: "什么时候该进、该守、该等，决定了行动的成本与结果。",
      descEn: "Know when to move, hold, wait or redirect before the cost becomes too high.",
    },
    {
      zh: "方向选择",
      en: "Direction",
      descZh: "在多个选择中看清哪条路径更顺势、更少消耗。",
      descEn: "Compare options and identify which path is more aligned and less draining.",
    },
    {
      zh: "人事关系",
      en: "People",
      descZh: "合作、团队、谈判与关键人物，往往决定事情能否成局。",
      descEn: "Partnerships, teams, negotiations and key people often determine whether a decision can succeed.",
    },
    {
      zh: "局势风险",
      en: "Risk Pattern",
      descZh: "提前看见隐藏阻力、盲区与错误代价，减少关键决策的试错。",
      descEn: "Recognise hidden resistance, blind spots and potential cost before committing to action.",
    },
  ];

  return (
    <section className="bg-[oklch(0.96_0.012_75)] px-4 py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-5 text-lg font-bold uppercase tracking-[0.34em] text-[oklch(0.55_0.08_65)] md:text-xl">
            {t("东方智慧战略决策系统", "Eastern Wisdom for Strategic Decision-Making")}
          </p>
          <h2 className="text-4xl font-semibold leading-tight text-[oklch(0.18_0.02_70)] md:text-6xl">
            {t("启明遁甲 · 奇门决策", "QIMEN STRATEGY")}
          </h2>
          <p className="mt-5 text-base font-semibold uppercase tracking-[0.24em] text-[oklch(0.55_0.08_65)] md:text-lg">
            SEE TIMING · DIRECTION · PEOPLE · RISK BEFORE YOU DECIDE
          </p>
          <p className="mx-auto mt-10 max-w-4xl text-lg leading-9 text-[oklch(0.32_0.02_70)] md:text-2xl">
            {t(
              "启明遁甲不是娱乐化算命，而是一套以奇门遁甲为根基的东方战略决策系统。",
              "Qimen Strategy is not entertainment fortune telling. It is an Eastern strategic decision system rooted in Qi Men Dun Jia."
            )}
          </p>
          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-[oklch(0.38_0.02_70)] md:text-lg">
            {t(
              "由 Master Huang Qiming 创建，帮助企业主与关键决策者在复杂局势中看清时机、方向、人事与风险，做出更清醒的战略判断。",
              "Founded by Master Huang Qiming to help business owners and decision makers read timing, direction, people and risk before important moves."
            )}
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {pillars.map((pillar) => (
            <div key={pillar.en} className="border border-[oklch(0.82_0.03_75)] bg-white/70 p-7 shadow-sm">
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
          <Link href="/qimen-strategy-business" className="border border-[oklch(0.55_0.08_65)] px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[oklch(0.30_0.03_70)] transition-colors hover:bg-[oklch(0.55_0.08_65)] hover:text-white">
            {t("查看奇门决策顾问方案", "View Qimen Strategy Programs")}
          </Link>
        </div>
      </div>
    </section>
  );
}
