"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

const targetRings = [
  { size: "h-64 w-64 md:h-80 md:w-80", labelZh: "信息与噪音", labelEn: "Information & Noise" },
  { size: "h-48 w-48 md:h-60 md:w-60", labelZh: "选项与利益", labelEn: "Options & Interests" },
  { size: "h-32 w-32 md:h-40 md:w-40", labelZh: "关键变量", labelEn: "Critical Variables" },
  { size: "h-16 w-16 md:h-20 md:w-20", labelZh: "核心决策", labelEn: "Core Decision" },
];

export default function DecisionModelsSection() {
  const { t } = useLanguage();

  return (
    <section className="overflow-hidden bg-[#080706] py-20 text-white md:py-28">
      <div className="container">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#d6ad63]">
            {t("启明遁甲 · 决策模型", "Qimen Strategy · Decision Models")}
          </p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f4dfb0] md:text-6xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
            {t("先找准靶心，再让组织稳定旋转。", "Find the Bullseye. Then Keep the Organisation in Balance.")}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/62 md:text-lg">
            {t(
              "复杂决策最常见的两个问题：一是信息很多，却没有抓住真正决定结果的核心；二是方向已经确定，但人、资源、节奏与执行无法形成稳定结构。靶心理论解决“做什么”，陀螺理论解决“如何持续做对”。",
              "Complex decisions usually fail in two places: leaders see abundant information but miss the variable that truly determines the outcome; or the direction is right but people, resources, timing and execution cannot hold a stable structure. The Target Theory clarifies what matters most. The Gyroscope Theory explains what keeps the system moving without losing balance."
            )}
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border border-[#d6ad63]/25 bg-white/[0.025] p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d6ad63]">01 · {t("靶心理论", "Target Theory")}</p>
            <h3 className="mt-4 text-3xl font-semibold text-[#f4dfb0] md:text-4xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
              {t("不是解决所有问题，而是找到决定全局的那个问题。", "Do Not Solve Everything. Find What Decides Everything Else.")}
            </h3>
            <div className="relative mx-auto mt-10 flex h-72 max-w-md items-center justify-center md:h-96">
              {targetRings.map((ring, index) => (
                <div key={ring.labelEn} className={`absolute flex ${ring.size} items-start justify-center rounded-full border ${index === 3 ? "border-[#e2bd6b] bg-[#d6ad63]/18" : "border-[#d6ad63]/30"}`}>
                  <span className={`mt-3 text-[10px] font-bold uppercase tracking-[0.12em] ${index === 3 ? "text-[#f4dfb0]" : "text-white/38"}`}>{t(ring.labelZh, ring.labelEn)}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-white/60">
              {t("企业主面对的往往不是“没有答案”，而是变量太多。我们的工作是从市场、现金流、合作、人事、时机与隐藏阻力中逐层收敛，找到真正的决策靶心。", "Leaders rarely suffer from having no answers; they suffer from too many variables. We narrow market, cash flow, partnerships, people, timing and hidden resistance until the true decision bullseye becomes visible.")}
            </p>
          </motion.article>

          <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }} className="border border-[#d6ad63]/25 bg-white/[0.025] p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d6ad63]">02 · {t("陀螺理论", "Gyroscope Theory")}</p>
            <h3 className="mt-4 text-3xl font-semibold text-[#f4dfb0] md:text-4xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
              {t("方向只是起点，稳定来自持续校准。", "Direction Is the Start. Stability Comes From Continuous Calibration.")}
            </h3>
            <div className="relative mx-auto mt-10 h-72 max-w-md md:h-96">
              <div className="absolute left-1/2 top-4 h-[86%] w-px -translate-x-1/2 bg-gradient-to-b from-[#f4dfb0] via-[#d6ad63] to-transparent" />
              <div className="absolute left-1/2 top-[18%] h-16 w-[78%] -translate-x-1/2 rounded-[50%] border border-[#d6ad63]/45" />
              <div className="absolute left-1/2 top-[31%] h-24 w-[58%] -translate-x-1/2 rounded-[50%] border border-[#d6ad63]/60" />
              <div className="absolute left-1/2 top-[49%] h-32 w-[34%] -translate-x-1/2 rounded-[50%] border border-[#e2bd6b]/75 bg-[#d6ad63]/5" />
              <div className="absolute left-1/2 top-[78%] h-4 w-4 -translate-x-1/2 rotate-45 border border-[#f4dfb0] bg-[#d6ad63]/25" />
              <span className="absolute left-3 top-[17%] text-[10px] font-bold uppercase tracking-[0.12em] text-white/40">{t("外部环境", "Environment")}</span>
              <span className="absolute right-3 top-[31%] text-[10px] font-bold uppercase tracking-[0.12em] text-white/40">{t("人 · 资源", "People · Resources")}</span>
              <span className="absolute left-3 top-[52%] text-[10px] font-bold uppercase tracking-[0.12em] text-white/40">{t("节奏 · 执行", "Timing · Execution")}</span>
              <span className="absolute left-1/2 top-[84%] -translate-x-1/2 text-center text-[10px] font-bold uppercase tracking-[0.12em] text-[#f4dfb0]">{t("战略轴心", "Strategic Axis")}</span>
            </div>
            <p className="mt-6 text-sm leading-7 text-white/60">
              {t("陀螺能够稳定，不是因为它静止，而是因为围绕轴心持续运动与修正。企业同样如此：战略轴心清晰之后，领导者仍需要不断校准人、资源、节奏、环境与执行。", "A gyroscope is stable not because it stands still, but because it keeps moving and correcting around an axis. Organisations work the same way: once the strategic axis is clear, leaders must keep calibrating people, resources, timing, environment and execution.")}
            </p>
          </motion.article>
        </div>

        <div className="mt-10 border-l-2 border-[#d6ad63] bg-[#d6ad63]/6 px-6 py-6 md:px-8">
          <p className="text-lg font-semibold leading-8 text-[#f4dfb0] md:text-xl">
            {t("靶心决定优先级，轴心决定稳定性。Reality × Qimen 的价值，是帮助决策者同时看见这两件事。", "The bullseye determines priority. The axis determines stability. Reality × Qimen helps decision-makers see both at the same time.")}
          </p>
        </div>
      </div>
    </section>
  );
}
