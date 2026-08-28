"use client";

import { useLanguage } from "@/contexts/language-context";

export default function MethodologySignature() {
  const { t } = useLanguage();

  return (
    <section className="border-y border-[#d6ad63]/18 bg-[#090806] px-4 py-16 md:py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d6ad63]">Qimen Strategy · Proprietary Decision Models</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
              {t("靶心决定优先级，轴心决定稳定性。", "The Bullseye Determines Priority. The Axis Determines Stability.")}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/64">
              {t(
                "靶心理论帮助领导者从复杂信息中找到真正决定结果的核心变量；陀螺理论则用于判断战略方向确定之后，人、资源、节奏、环境与执行是否围绕同一轴心持续校准。两者共同构成 Reality × Qimen 的关键决策逻辑。",
                "Target Theory helps leaders identify the variable that truly determines the outcome. Gyroscope Theory examines whether people, resources, timing, environment and execution remain calibrated around the same strategic axis after direction is chosen. Together, they form a core part of the Reality × Qimen decision logic."
              )}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="border border-[#d6ad63]/28 bg-white/[0.025] p-6">
              <div className="relative mx-auto flex h-48 items-center justify-center">
                <div className="absolute h-40 w-40 rounded-full border border-[#d6ad63]/25" />
                <div className="absolute h-28 w-28 rounded-full border border-[#d6ad63]/40" />
                <div className="absolute h-16 w-16 rounded-full border border-[#d6ad63]/65 bg-[#d6ad63]/8" />
                <div className="absolute h-5 w-5 rounded-full bg-[#d6ad63] shadow-[0_0_28px_rgba(214,173,99,0.45)]" />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d6ad63]">Target Theory · 靶心理论</p>
              <p className="mt-2 text-sm leading-6 text-white/62">{t("先找到决定全局的那个问题。", "Find the question that decides everything else.")}</p>
            </div>

            <div className="border border-[#d6ad63]/28 bg-white/[0.025] p-6">
              <div className="relative mx-auto h-48">
                <div className="absolute left-1/2 top-3 h-[82%] w-px -translate-x-1/2 bg-gradient-to-b from-[#f4dfb0] via-[#d6ad63] to-transparent" />
                <div className="absolute left-1/2 top-[22%] h-10 w-[82%] -translate-x-1/2 rounded-[50%] border border-[#d6ad63]/35" />
                <div className="absolute left-1/2 top-[39%] h-14 w-[58%] -translate-x-1/2 rounded-[50%] border border-[#d6ad63]/55" />
                <div className="absolute left-1/2 top-[60%] h-16 w-[34%] -translate-x-1/2 rounded-[50%] border border-[#e2bd6b]/70 bg-[#d6ad63]/5" />
                <div className="absolute left-1/2 top-[82%] h-3 w-3 -translate-x-1/2 rotate-45 border border-[#f4dfb0] bg-[#d6ad63]/20" />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d6ad63]">Gyroscope Theory · 陀螺理论</p>
              <p className="mt-2 text-sm leading-6 text-white/62">{t("让关键变量围绕战略轴心持续校准。", "Keep critical variables calibrated around the strategic axis.")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
