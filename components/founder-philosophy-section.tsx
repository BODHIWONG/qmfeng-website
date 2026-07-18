"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

const gold = "oklch(0.72 0.12 70)";

export default function FounderPhilosophySection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-black py-20 text-white md:py-24">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, oklch(0.72 0.12 70 / 0.55), transparent)" }}
      />
      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[oklch(0.72_0.12_70/0.08)] blur-3xl" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl rounded-[2rem] border border-[oklch(0.72_0.12_70/0.25)] bg-[linear-gradient(135deg,oklch(0.10_0.02_60/0.92),oklch(0.065_0.018_60/0.92))] p-7 shadow-[0_30px_90px_rgba(0,0,0,0.35)] md:p-10"
        >
          <p
            className="mb-4 text-xs uppercase tracking-[0.28em]"
            style={{ fontFamily: "var(--font-lato), sans-serif", color: gold }}
          >
            {t("创始人理念", "Founder’s Philosophy")}
          </p>

          <h2
            className="mb-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
            style={{
              fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
              color: "oklch(0.98 0.01 75)",
            }}
          >
            {t("天机过我，不为我有", "Wisdom Passes Through, It Is Not Mine")}
          </h2>

          <div className="space-y-5 text-base leading-relaxed text-[oklch(0.76_0.025_70)] md:text-lg">
            <p>
              {t(
                "真正的智慧，不属于任何个人，而是天地规律在某一刻的呈现。",
                "True wisdom does not belong to any individual. It is the expression of a greater order at a particular moment."
              )}
            </p>
            <p>
              {t(
                "启明遁甲决策智库始终秉持敬天、谦卑、清净与利他的信念。作为奇门解析者，我们相信，最重要的不是炫耀术法，而是在每一次咨询中保持清明、敬畏与正念。",
                "Qimen Strategy is guided by respect, humility, clarity and service. As Qi Men interpreters, we believe the most important thing is not to display technique, but to remain clear, grounded and respectful in every consultation."
              )}
            </p>
            <p>
              {t(
                "我始终将自己视为一条管道。天机经由我而过，流向真正需要帮助的人；智慧借我呈现，却不归功于我个人。",
                "I see myself as a channel. Insight passes through me to those who truly need support; wisdom is expressed through me, but it does not belong to me."
              )}
            </p>
            <p>
              {t(
                "因此，我更重视修为、品德与心性的磨炼，胜过术法本身。",
                "For this reason, I place greater importance on character, discipline and inner cultivation than technique alone."
              )}
            </p>
            <p>
              {t(
                "愿以所学智慧，帮助企业家、家庭与个人看清方向、顺势而行，在环境、能量与人生之间建立更深层的和谐与平衡。",
                "May the wisdom I have learned help business owners, families and individuals see direction more clearly, move with the right timing, and build deeper harmony between environment, energy and life."
              )}
            </p>
          </div>

          <p className="mt-7 text-lg font-semibold leading-relaxed text-[oklch(0.88_0.08_70)] md:text-xl">
            {t("以谦卑承接规律，以智慧服务人生。", "Receive the pattern with humility. Serve life with wisdom.")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
