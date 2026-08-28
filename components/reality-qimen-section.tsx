"use client";

import { useLanguage } from "@/contexts/language-context";

export default function RealityQimenSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#11100e] px-4 py-20 text-white md:py-28">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Reality × Qimen</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
            {t("两个视角，一个更清晰的决定。", "Two Perspectives. One Clearer Decision.")}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/65">
            {t("我们不以奇门取代现实判断，而是把现实商业条件与奇门所揭示的时机、关系、动能与阻力放在同一张决策地图上。", "We do not use Qimen to replace practical judgement. We place business reality alongside timing, relationships, momentum and resistance to widen the decision-maker's field of view.")}
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          <div className="border border-white/10 bg-white/5 p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d6ad63]">REALITY</p>
            <p className="mt-5 text-sm leading-8 text-white/68">{t("商业基本面 · 财务 · 市场 · 人员能力 · 执行约束 · 已知风险", "Business fundamentals · Finance · Market · People & capabilities · Operational constraints · Known risks")}</p>
          </div>
          <div className="flex items-center justify-center text-4xl font-light text-[#d6ad63]">×</div>
          <div className="border border-[#d6ad63]/40 bg-[#19140f] p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d6ad63]">QIMEN</p>
            <p className="mt-5 text-sm leading-8 text-white/68">{t("时机 · 人与关系 · 隐性动态 · 动能 · 阻力 · 潜在机会", "Timing · People & relationships · Hidden dynamics · Momentum · Resistance · Emerging opportunities")}</p>
          </div>
        </div>

        <div className="mt-6 border border-[#d6ad63]/30 bg-[#d6ad63]/8 px-6 py-5 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#f4dfb0]">Strategic Clarity</p>
          <p className="mt-2 text-sm text-white/58">{t("奇门不是判断的替代品，而是判断的另一重视角。", "Qimen is not a substitute for judgement. It is an additional lens for judgement.")}</p>
        </div>
      </div>
    </section>
  );
}
