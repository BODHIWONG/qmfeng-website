"use client";

import { useLanguage } from "@/contexts/language-context";
import { Eye, Waves, Compass, Sparkles, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: Eye,
    zh: "一看｜看空间格局",
    en: "Observe｜Read the Spatial Layout",
    descZh:
      "看门、卧室、厨房、厕所、中心位、财位、床位、办公位、动线与气口，判断空间结构是否形成压迫、消耗、冲散或不聚气。",
    descEn:
      "Read the entrance, bedroom, kitchen, toilet, centre, wealth position, bed, desk, flow and qi openings to understand pressure, depletion or energy leakage.",
  },
  {
    icon: Waves,
    zh: "二感｜感知空间滞重点",
    en: "Sense｜Identify Stagnant Points",
    descZh:
      "感知空间里沉重、压迫、不安、阴冷、混乱或长期滞留的区域，找出让人疲惫、恐惧、睡不稳或情绪不安的关键位置。",
    descEn:
      "Sense heavy, oppressive, unsettled or stagnant areas that may contribute to tiredness, fear, unstable sleep or emotional unease.",
  },
  {
    icon: Compass,
    zh: "三断｜结合奇门判断时间与方位",
    en: "Read｜Use Qi Men for Timing and Direction",
    descZh:
      "通过奇门遁甲判断时间、方位、人与空间之间的互动关系，看现在是否适合净化、从哪个方位入手，以及如何顺势调整。",
    descEn:
      "Use Qi Men Dun Jia to read timing, direction and the relationship between people and space, then decide how and where to begin alignment.",
  },
  {
    icon: Sparkles,
    zh: "四净｜进行空间能量净化",
    en: "Purify｜Clear the Spatial Field",
    descZh:
      "净化空间中长期积累的沉重、压迫、不安与混乱，让场域重新恢复清明、稳定与可居住的支持力。",
    descEn:
      "Purify accumulated heaviness, pressure, unease and disorder so the field can return to clarity, steadiness and support.",
  },
  {
    icon: HeartHandshake,
    zh: "五调｜调和人与空间之间的支持关系",
    en: "Align｜Harmonise People and Space",
    descZh:
      "净化之后，让空间不再持续消耗人，而是重新支持居住者的睡眠、情绪、关系、事业判断与日常行动力。",
    descEn:
      "After purification, help the space stop draining its occupants and become supportive for rest, emotion, relationships, judgment and momentum.",
  },
];

export default function QimingSystemSection() {
  const { t } = useLanguage();

  return (
    <section id="qiming-system" className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[oklch(0.60_0.08_65)]">
              {t("专属方法体系", "Signature Method System")}
            </p>
            <h2
              className="mb-5 text-3xl font-bold leading-tight md:text-5xl"
              style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.15 0.02 60)" }}
            >
              {t("启明空间能量调和系统", "Qiming Space Energy Alignment System")}
            </h2>
            <p className="text-sm leading-8 text-[oklch(0.42_0.02_60)] md:text-base">
              {t(
                "这是黄启明大师以空间能量净化为核心，结合奇门遁甲、风水布局、八字命理与多年实证经验所形成的五步调和方法。它让启明大师不只是普通风水师，而是拥有清晰方法论的空间能量净化与生命场域调和实践者。",
                "This is Master Huang Qiming’s five-step alignment method, placing Space Energy Purification at the core and integrating Qi Men Dun Jia, Feng Shui layout, Bazi and years of practical experience. It turns his work from ordinary Feng Shui consultation into a clear life-field alignment methodology."
              )}
            </p>
          </div>

          <div className="grid gap-5">
            {steps.map((step, index) => (
              <div
                key={step.zh}
                className="grid gap-5 border border-[oklch(0.88_0.018_70)] bg-[oklch(0.98_0.01_75)] p-6 md:grid-cols-[120px_1fr] md:p-7"
              >
                <div className="flex items-center gap-4 md:block">
                  <div className="mb-0 flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.60_0.08_65)] text-white md:mb-4">
                    <step.icon size={24} />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[oklch(0.60_0.08_65)]">
                    {`Step 0${index + 1}`}
                  </p>
                </div>

                <div>
                  <h3
                    className="mb-3 text-2xl font-bold"
                    style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.15 0.02 60)" }}
                  >
                    {t(step.zh, step.en)}
                  </h3>
                  <p className="text-sm leading-7 text-[oklch(0.42_0.02_60)] md:text-[15px]">
                    {t(step.descZh, step.descEn)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-[oklch(0.60_0.08_65/0.25)] bg-[oklch(0.08_0.02_60)] p-7 text-white md:p-9">
            <p
              className="text-2xl font-semibold leading-relaxed md:text-3xl"
              style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
            >
              {t(
                "启明空间能量调和系统的目的，不是制造神秘，而是让空间、人心与生活状态重新回到清明、安定与支持关系。",
                "The purpose of the Qiming Space Energy Alignment System is not to create mystery, but to help space, heart and life return to clarity, steadiness and support."
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
