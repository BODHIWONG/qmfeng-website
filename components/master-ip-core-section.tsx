"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { ArrowRight, Sparkles, Compass, MessageCircle } from "lucide-react";

const pillars = [
  {
    icon: Sparkles,
    titleZh: "核心能力：空间能量净化",
    titleEn: "Core Ability: Space Energy Purification",
    bodyZh:
      "启明大师最特别、最不可复制的能力，是对空间中沉重、压迫、不安与滞重能量的敏锐感知，并通过独特方法进行净化与调和。",
    bodyEn:
      "Master Qiming’s most distinctive ability is a refined sensitivity to heaviness, pressure, unease and stagnant energy within a space, followed by a unique process of purification and harmonisation.",
  },
  {
    icon: Compass,
    titleZh: "支撑体系：奇门遁甲 + 风水 + 八字",
    titleEn: "Support System: Qi Men + Feng Shui + Bazi",
    bodyZh:
      "奇门遁甲判断时间与方位，风水布局调整空间结构，八字命理理解人与空间的关系。三者共同服务于空间能量净化。",
    bodyEn:
      "Qi Men Dun Jia reads timing and direction, Feng Shui layout adjusts spatial structure, and Bazi helps understand the relationship between people and their spaces.",
  },
  {
    icon: MessageCircle,
    titleZh: "真实验证：客户反馈",
    titleEn: "Real Validation: Client Feedback",
    bodyZh:
      "客户反馈睡眠更安稳、恐惧感减轻、空间变轻、精神状态提升，是这项能力最有力量的见证。",
    bodyEn:
      "Client feedback around steadier sleep, reduced fear, a lighter space and improved energy forms the strongest validation of this work.",
  },
];

const steps = [
  { zh: "一看", en: "Observe", detailZh: "看空间格局", detailEn: "Read the layout" },
  { zh: "二感", en: "Sense", detailZh: "感知滞重点", detailEn: "Sense stagnant points" },
  { zh: "三断", en: "Read", detailZh: "奇门断时位", detailEn: "Read timing & direction" },
  { zh: "四净", en: "Purify", detailZh: "净化空间场域", detailEn: "Purify the field" },
  { zh: "五调", en: "Align", detailZh: "调和人与空间", detailEn: "Align people and space" },
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
                {t("黄启明大师个人 IP 核心", "Master Huang Qiming Personal IP Core")}
              </p>

              <h2
                className="mb-6 text-3xl font-bold leading-tight md:text-5xl"
                style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
              >
                {t(
                  "不是普通看风水，而是以空间能量净化为核心的生命场域调和。",
                  "Not ordinary Feng Shui, but life-field alignment with Space Energy Purification at the core."
                )}
              </h2>

              <p className="mb-8 text-sm leading-8 text-white/72 md:text-base">
                {t(
                  "启明大师以空间能量净化为核心能力，以奇门遁甲、风水布局与八字命理为支撑，帮助人从沉重空间中重新回到安定、清明、有力量的状态。",
                  "Master Qiming places Space Energy Purification at the core, supported by Qi Men Dun Jia, Feng Shui layout and Bazi, helping people return from heavy spaces to a calmer, clearer and stronger state of life."
                )}
              </p>

              <div className="border-l-2 border-[oklch(0.72_0.12_70)] pl-5">
                <p className="text-sm leading-7 text-[oklch(0.82_0.09_70)] md:text-base">
                  {t(
                    "为天地立心，为生民立命，为往圣继绝学，为万世开太平。",
                    "To establish the heart for Heaven and Earth, to secure life for the people, to continue the lost teachings of the sages, and to open peace for generations."
                  )}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/45">Zhang Zai · 张载</p>
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
                  {t("启明空间能量调和系统", "Qiming Space Energy Alignment System")}
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
                  href="/space-clearing#qiming-system"
                  className="inline-flex items-center justify-center gap-2 bg-[oklch(0.60_0.08_65)] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:opacity-90"
                >
                  {t("了解完整五步法", "Explore the Five-Step System")}
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/space-clearing#purification-records"
                  className="inline-flex items-center justify-center gap-2 border border-[oklch(0.60_0.08_65)] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[oklch(0.60_0.08_65)] transition hover:bg-[oklch(0.96_0.025_78)]"
                >
                  {t("查看空间净化实录", "View Real Case Records")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
