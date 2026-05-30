"use client";

import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";

export default function BrandWorldviewSection() {
  const { t } = useLanguage();

  const pillars = [
    {
      zh: "天时",
      en: "Timing",
      descZh: "判断什么时候该进、该守、该等、该调整，避免在错误时机消耗过高成本。",
      descEn: "Know when to move, hold, wait or adjust before the cost becomes too high.",
    },
    {
      zh: "地利",
      en: "Environment",
      descZh: "结合企业空间、方位、办公室、门店与住宅格局，判断环境是否支持发展。",
      descEn: "Assess business space, direction, office, shop and residence as strategic conditions.",
    },
    {
      zh: "人和",
      en: "People",
      descZh: "看清管理层、员工、合伙人、供应链与关键关系中的助力、阻力与风险。",
      descEn: "Read management, staff, partners, suppliers and key relationships before deeper commitment.",
    },
    {
      zh: "修为",
      en: "Inner Mastery",
      descZh: "关注企业主的判断力、定力、情绪稳定性、承载力与关键压力下的决策状态。",
      descEn: "Support the founder's judgment, steadiness, capacity and decision state under pressure.",
    },
    {
      zh: "成长",
      en: "Growth",
      descZh: "将企业主个人成长与企业下一阶段发展结合，让战略、组织与空间同步升级。",
      descEn: "Connect founder growth with the company's next stage, structure and strategic direction.",
    },
  ];

  return (
    <section className="bg-[oklch(0.96_0.012_75)] px-4 py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-5 text-lg font-bold uppercase tracking-[0.34em] text-[oklch(0.55_0.08_65)] md:text-xl">
            {t("企业战略决策智慧", "Enterprise Strategic Decision Wisdom")}
          </p>
          <h2 className="text-4xl font-semibold leading-tight text-[oklch(0.18_0.02_70)] md:text-6xl">
            {t("启明遁甲五维战略模型", "The Five Dimensions of Qimen Strategy")}
          </h2>
          <p className="mt-5 text-base font-semibold uppercase tracking-[0.18em] text-[oklch(0.55_0.08_65)] md:text-lg">
            TIMING · ENVIRONMENT · PEOPLE · INNER MASTERY · GROWTH
          </p>
          <p className="mx-auto mt-10 max-w-4xl text-lg leading-9 text-[oklch(0.32_0.02_70)] md:text-2xl">
            {t(
              "启明遁甲以奇门遁甲为底层决策模型，结合天时、地利、人和、创始人内在修为与企业成长节奏，帮助企业主在关键行动前先看清全局。",
              "Qimen Strategy integrates timing, environment, people dynamics, founder inner mastery and strategic growth to help business owners see the whole game before important action."
            )}
          </p>
          <p className="mx-auto mt-8 max-w-4xl text-base leading-8 text-[oklch(0.38_0.02_70)] md:text-lg">
            {t(
              "真正的企业战略决策，不只是判断外部机会，也要看企业主是否具备承接下一阶段发展的判断力、定力与承载力。",
              "True enterprise decision-making is not only about external opportunity. It also depends on whether the founder has the judgment, steadiness and capacity to carry the next stage."
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
