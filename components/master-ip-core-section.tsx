"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { ArrowRight, Brain, Compass, MessageCircle, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    titleZh: "根基体系：奇门遁甲",
    titleEn: "Foundation: Qi Men Dun Jia",
    bodyZh:
      "以奇门遁甲观察时间、方位、人事与局势结构，形成关键行动前的判断基础。",
    bodyEn:
      "Qi Men Dun Jia reads timing, direction, people and situation patterns as the foundation before important action.",
  },
  {
    icon: Brain,
    titleZh: "核心转化：战略决策",
    titleEn: "Core Translation: Strategic Decision",
    bodyZh:
      "启明遁甲把传统奇门智慧转化为现代企业主与个人可以理解、可以执行的决策语言。",
    bodyEn:
      "Qimen Strategy translates traditional Qimen wisdom into a modern decision language that business owners and individuals can understand and act on.",
  },
  {
    icon: ShieldCheck,
    titleZh: "实际价值：减少盲目试错",
    titleEn: "Practical Value: Reduce Blind Trial and Error",
    bodyZh:
      "在合作、投资、转型、任用、签约与人生方向选择前，先看清风险与行动节奏。",
    bodyEn:
      "Before partnerships, investments, transitions, appointments, contracts and life-direction choices, first read the risk and action rhythm.",
  },
];

const steps = [
  { zh: "一问", en: "Brief", detailZh: "明确核心问题", detailEn: "Define the key question" },
  { zh: "二察", en: "Observe", detailZh: "观察局势结构", detailEn: "Read the situation" },
  { zh: "三断", en: "Assess", detailZh: "判断时机方向", detailEn: "Assess timing & direction" },
  { zh: "四辨", en: "Map", detailZh: "辨别人事风险", detailEn: "Map people & risk" },
  { zh: "五策", en: "Advise", detailZh: "形成行动建议", detailEn: "Form action guidance" },
];

export default function MasterIPCoreSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-[oklch(0.97_0.012_75)] py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-6xl overflow-hidden border border-[oklch(0.86_0.02_70)] bg-white shadow-[0_18px_60px_rgba(0,0,0,0.06)]">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="bg-[oklch(0.08_0.02_60)] p-8 text-white md:p-10 lg:p-12">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[oklch(0.72_0.12_70)]">
                {t("启明遁甲核心系统", "Qimen Strategy Core System")}
              </p>

              <h2
                className="mb-6 text-3xl font-bold leading-tight md:text-5xl"
                style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
              >
                {t(
                  "以奇门遁甲为根基，以战略决策为核心。",
                  "Rooted in Qi Men Dun Jia, centered on strategic decision-making."
                )}
              </h2>

              <p className="mb-8 text-sm leading-8 text-white/72 md:text-base">
                {t(
                  "启明遁甲不是把古老术数停留在神秘层面，而是把时机、方向、人事与风险转化为现代企业和个人可以理解的决策框架。客户不是来寻找一句答案，而是来获得更清醒的判断视角。",
                  "Qimen Strategy does not leave ancient wisdom in the realm of mystery. It translates timing, direction, people and risk into a decision framework that modern businesses and individuals can understand. Clients do not come for a single vague answer; they come for clearer judgment."
                )}
              </p>

              <div className="border-l-2 border-[oklch(0.72_0.12_70)] pl-5">
                <p className="text-sm leading-7 text-[oklch(0.82_0.09_70)] md:text-base">
                  {t(
                    "先看清局势，再决定方向。",
                    "See the situation clearly before deciding the direction."
                  )}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/45">Qimen Strategy · 启明遁甲</p>
              </div>
            </div>

            <div className="p-8 md:p-10 lg:p-12">
              <div className="grid gap-5">
                {pillars.map((pillar) => (
                  <div key={pillar.titleZh} className="flex gap-4 border-b border-[oklch(0.90_0.015_75)] pb-5 last:border-b-0 last:pb-0">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[oklch(0.96_0.025_78)] text-[oklch(0.60_0.08_65)]">
                      <pillar.icon size={21} />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-bold text-[oklch(0.15_0.02_60)]">
                        {t(pillar.titleZh, pillar.titleEn)}
                      </h3>
                      <p className="text-sm leading-7 text-[oklch(0.42_0.02_60)]">
                        {t(pillar.bodyZh, pillar.bodyEn)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-9 rounded-2xl border border-[oklch(0.88_0.018_70)] bg-[oklch(0.98_0.01_75)] p-5">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[oklch(0.60_0.08_65)]">
                  {t("启明遁甲五步决策框架", "Qimen Strategy Five-Step Decision Framework")}
                </p>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
                  {steps.map((step) => (
                    <div key={step.zh} className="rounded-xl border border-[oklch(0.88_0.018_70)] bg-white p-3 text-center">
                      <p className="text-sm font-bold text-[oklch(0.60_0.08_65)]">
                        {t(step.zh, step.en)}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-[oklch(0.42_0.02_60)]">
                        {t(step.detailZh, step.detailEn)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/qimen-strategy-business"
                  className="inline-flex items-center justify-center gap-2 bg-[oklch(0.60_0.08_65)] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:opacity-90"
                >
                  {t("查看顾问方案", "View Advisory Programs")}
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/decision"
                  className="inline-flex items-center justify-center gap-2 border border-[oklch(0.60_0.08_65)] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[oklch(0.60_0.08_65)] transition hover:bg-[oklch(0.96_0.025_78)]"
                >
                  {t("单项战略决策咨询", "Single Executive Advisory")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
