"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { ArrowRight, Sparkles, Building2, Heart } from "lucide-react";

const WA_TEST = "https://wa.me/message/55HSHDNBMWPLA1";
const WA_CLEARING = "https://wa.me/message/55HSHDNBMWPLA1";
const MASTER_PORTRAIT = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20991775289689_.pic-XBOuQXf6Eg5H9JfA2Yr3FxJ5wCAkWa.jpg";

export default function EnergyClearingSection() {
  const { lang, t } = useLanguage();

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
    }),
  };

  const effects = lang === "zh"
    ? [
        { icon: Sparkles, title: "居家场域调和", desc: "识别居家空间中的滞重、压迫与不安定感，帮助空间重新恢复清明、稳定与舒适感。" },
        { icon: Building2, title: "商业空间支持", desc: "结合奇门时位与空间动线，调整办公室、店铺与团队场域，让空间更支持判断、沟通与业务推进。" },
        { icon: Heart, title: "人与空间关系", desc: "通过空间净化与场域调和，帮助空间不再持续消耗人，而是重新成为支持人的环境。" },
      ]
    : [
        { icon: Sparkles, title: "Residential Field Alignment", desc: "Identify heaviness, pressure and unsettled energy in the home so the space can return to clarity, steadiness and comfort." },
        { icon: Building2, title: "Commercial Space Support", desc: "Combine Qi Men timing with spatial flow to support clearer judgment, smoother communication and business momentum." },
        { icon: Heart, title: "People-Space Relationship", desc: "Through space purification and field alignment, help the environment stop draining people and become supportive again." },
      ];

  return (
    <section id="clearing" className="py-24 md:py-32 bg-[oklch(0.08_0.02_60)]">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-8 flex items-center justify-center text-base font-bold border border-[oklch(0.55_0.10_200)] text-[oklch(0.55_0.10_200)]" style={{ fontFamily: "var(--font-noto-serif), serif" }}>净</span>
            <div className="w-8 h-px bg-[oklch(0.55_0.10_200)]" />
            <span className="text-[0.6rem] tracking-[0.25em] uppercase text-[oklch(0.55_0.10_200)] font-semibold" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
              {t("板块二 · 奇门空间净化", "Pillar II · Qi Men Space Purification")}
            </span>
            <div className="w-8 h-px bg-[oklch(0.60_0.08_65)]" />
          </div>

          <h2 className="font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", fontSize: "clamp(2rem, 4.5vw, 3rem)", color: "oklch(0.75 0.06 65)" }}>
            {t("以奇门定时位，以净化调场域", "Qi Men for Timing, Purification for Field Alignment")}
          </h2>

          <p className="text-lg leading-relaxed mb-8" style={{ fontFamily: "var(--font-noto-serif), serif", color: "oklch(0.70 0.04 70)", fontStyle: "italic" }}>
            {t("「空间清明，人心才容易清明。真正的空间调和，是让环境重新成为支持人的力量。」", "When the space becomes clear, the heart can settle. True alignment helps the environment support the person again.")}
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-16">
          <div className="relative overflow-hidden rounded-sm">
            <img src={MASTER_PORTRAIT} alt={t("黄启明大师 - 奇门遁甲与空间能量调和", "Master Huang Qiming - Qi Men Dun Jia and Space Energy Alignment")} className="w-full h-auto object-cover" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="relative">
            <div className="bg-[oklch(0.12_0.02_60)] p-8 md:p-10 border border-[oklch(0.25_0.02_60)]">
              <span className="text-[0.55rem] tracking-[0.2em] uppercase text-[oklch(0.60_0.08_65)] font-semibold mb-4 block" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
                {t("核心优势", "Core Advantage")}
              </span>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.85 0.04 70)" }}>
                {t("奇门为根，净化为用", "Rooted in Qi Men, Applied Through Purification")}
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif", color: "oklch(0.65 0.03 70)" }}>
                {t("黄启明大师以奇门遁甲判断时间、方位与局势，再通过空间能量净化处理居家与办公场域中的滞重、压迫与不安定感。它不是制造神秘，而是帮助人与空间重新建立清明、安定与支持关系。", "Master Huang Qiming uses Qi Men Dun Jia to assess timing, direction and the situation, then applies space energy purification to address heaviness, pressure and unsettled fields in homes and offices. The goal is clarity, steadiness and support.")}
              </p>
              <a href={WA_TEST} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 text-sm font-bold uppercase transition-all duration-300 hover:gap-5 group" style={{ fontFamily: "var(--font-lato), sans-serif", letterSpacing: "0.1em", background: "oklch(0.60 0.08 65)", color: "oklch(0.98 0.005 75)" }}>
                <Sparkles size={16} className="group-hover:animate-pulse" />
                {t("咨询我的空间是否需要调和", "Check If My Space Needs Alignment")}
                <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>

          <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <span className="text-[0.55rem] tracking-[0.2em] uppercase text-[oklch(0.60_0.08_65)] font-semibold mb-6 block" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
              {t("客户反馈方向", "Client Feedback Areas")}
            </span>
            <h3 className="text-2xl font-bold mb-8" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.85 0.04 70)" }}>
              {t("空间恢复支持力后的常见变化", "Common Shifts After Space Alignment")}
            </h3>
            <div className="space-y-6">
              {effects.map((effect, idx) => {
                const Icon = effect.icon;
                return (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-[oklch(0.15_0.02_60)] border border-[oklch(0.30_0.02_60)]">
                      <Icon size={18} style={{ color: "oklch(0.60 0.08 65)" }} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold mb-1" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.80 0.04 70)" }}>
                        {effect.title}
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif", color: "oklch(0.60 0.03 70)" }}>
                        {effect.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="text-center max-w-2xl mx-auto">
          <div className="p-8 md:p-10 border border-[oklch(0.30_0.02_60)]" style={{ background: "linear-gradient(135deg, oklch(0.12 0.02 60) 0%, oklch(0.10 0.02 50) 100%)" }}>
            <span className="text-[0.55rem] tracking-[0.2em] uppercase text-[oklch(0.60_0.08_65)] font-semibold mb-4 block" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
              {t("结缘奇明", "Connect with Qiming")}
            </span>
            <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.80 0.05 65)" }}>
              {t("让空间重新支持你，而不是继续消耗你", "Let the Space Support You Again")}
            </h3>
            <p className="text-sm leading-relaxed mb-6" style={{ fontFamily: "var(--font-noto-sans), var(--font-lato), sans-serif", color: "oklch(0.65 0.03 70)" }}>
              {t("如果你长期感觉家中压抑、空间沉重，或办公室气场沉滞，可以先通过奇门空间判断，了解你的空间是否需要进一步调和。", "If your home feels heavy or your office energy feels stagnant, begin with a Qi Men space consultation to see whether deeper alignment is needed.")}
            </p>
            <a href={WA_CLEARING} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3 text-sm font-bold uppercase transition-all duration-300 hover:gap-4" style={{ fontFamily: "var(--font-lato), sans-serif", letterSpacing: "0.12em", background: "oklch(0.60 0.08 65)", color: "oklch(0.98 0.005 75)" }}>
              {t("预约奇门空间判断", "Book a Qi Men Space Consultation")} <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
