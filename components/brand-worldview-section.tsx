"use client";

import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";

export default function BrandWorldviewSection() {
  const { t } = useLanguage();

  const pillars = [
    {
      zh: "空间",
      en: "Environment",
      descZh: "空间不是背景，而是影响状态、判断与承载力的重要条件。",
      descEn: "Space is not a backdrop. It shapes state, judgment and capacity.",
    },
    {
      zh: "能量",
      en: "Energy",
      descZh: "能量顺畅，人更容易稳定；能量受阻，决策容易混乱。",
      descEn: "When energy is aligned, people become steadier. When blocked, decisions become scattered.",
    },
    {
      zh: "状态",
      en: "State",
      descZh: "真正的判断力，往往取决于一个人在压力下是否清明稳定。",
      descEn: "Real judgment depends on whether a person remains clear and steady under pressure.",
    },
    {
      zh: "决策",
      en: "Decision",
      descZh: "关键选择不是靠冲动，而是看清时机、方向、人事与风险。",
      descEn: "Major choices require clarity on timing, direction, people and risk.",
    },
    {
      zh: "结果",
      en: "Outcome",
      descZh: "结果不是偶然，它通常来自长期环境、状态与决策的累积。",
      descEn: "Outcomes are rarely accidental. They are shaped by accumulated environment, state and decisions.",
    },
  ];

  return (
    <section className="bg-[oklch(0.96_0.012_75)] px-4 py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-5 text-lg font-bold uppercase tracking-[0.34em] text-[oklch(0.55_0.08_65)] md:text-xl">
            {t("为什么会有启明遁甲", "Why Qimen Strategy Exists")}
          </p>
          <h2 className="text-4xl font-semibold leading-tight text-[oklch(0.18_0.02_70)] md:text-6xl">
            {t("很多问题，并不是能力不够", "The Problem Is Not Always Lack of Ability")}
          </h2>
          <p className="mx-auto mt-10 max-w-4xl text-lg leading-9 text-[oklch(0.32_0.02_70)] md:text-2xl">
            {t(
              "很多人聪明、努力，也愿意付出，却始终被事业、关系、财富节奏或关键选择困住。启明遁甲看到的是更深的关系：人与环境、状态与时机之间失去了协调。",
              "Many capable people work hard and make sincere effort, yet remain blocked in business, relationships, wealth rhythm or major choices. Qimen Strategy sees a deeper relationship: misalignment between people, environment, state and timing."
            )}
          </p>
          <p className="mx-auto mt-8 max-w-4xl text-base leading-8 text-[oklch(0.38_0.02_70)] md:text-lg">
            {t(
              "启明遁甲由此形成：以奇门遁甲看时势，以战略风水调环境，以能量调频稳状态，帮助客户在关键行动前重新看清局势与布局。",
              "From this understanding, Qimen Strategy was formed: using Qi Men Dun Jia to read timing, strategic Feng Shui to align space, and energy alignment to support state before important action."
            )}
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-5">
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
          <Link href="/enterprise-strategic-advisory" className="border border-[oklch(0.55_0.08_65)] px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[oklch(0.30_0.03_70)] transition-colors hover:bg-[oklch(0.55_0.08_65)] hover:text-white">
            {t("查看企业战略顾问", "View Enterprise Advisory")}
          </Link>
        </div>
      </div>
    </section>
  );
}
