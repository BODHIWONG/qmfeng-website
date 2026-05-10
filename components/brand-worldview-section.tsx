"use client";

import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";

export default function BrandWorldviewSection() {
  const { t } = useLanguage();

  const pillars = [
    {
      zh: "奇门决策",
      en: "Qi Men Strategy",
      descZh: "看清局势、时机与选择背后的结构。",
      descEn: "Read the structure behind timing, choices and changing situations.",
    },
    {
      zh: "空间调和",
      en: "Space Alignment",
      descZh: "让家宅、办公室与商业场域重新支持人的状态。",
      descEn: "Realign homes, offices and business spaces to better support human clarity.",
    },
    {
      zh: "内在修复",
      en: "Inner Restoration",
      descZh: "通过能量调和与梵音疗愈，恢复安定与清明。",
      descEn: "Restore calm and inner clarity through energy alignment and sacred sound healing.",
    },
  ];

  return (
    <section className="bg-[oklch(0.96_0.012_75)] px-4 py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[oklch(0.55_0.08_65)]">
            {t("东方战略智慧体系", "Eastern Strategic Wisdom")}
          </p>
          <h2
            className="text-3xl font-semibold leading-tight text-[oklch(0.18_0.02_70)] md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
          >
            {t(
              "这里不只是风水服务，而是一套理解人生、空间与决策的系统。",
              "Not merely Feng Shui services, but a system for understanding life, space and decisions."
            )}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[oklch(0.38_0.02_70)] md:text-lg">
            {t(
              "天乙合会文化由黄启明 Master Qiming 主理，融合奇门遁甲、风水布局、空间能量调和与身心修复，帮助个人与企业看清全局，做出更稳定的选择。",
              "Tian Yi Harmony Culture, by Master Qiming, integrates Qi Men Dun Jia, Feng Shui alignment, space energy work and inner restoration to help individuals and businesses see the whole game."
            )}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
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
          <Link
            href="/founder"
            className="border border-[oklch(0.55_0.08_65)] px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[oklch(0.30_0.03_70)] transition-colors hover:bg-[oklch(0.55_0.08_65)] hover:text-white"
          >
            {t("了解黄启明 Master Qiming", "About Master Qiming")}
          </Link>
        </div>
      </div>
    </section>
  );
}
