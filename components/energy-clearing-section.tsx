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
        { icon: Sparkles, title: "空间磁场调整", desc: "驱除积压的阴晦之气，引入流动的生旺能量，使空间恢复「聚气」之势" },
        { icon: Building2, title: "企业能量焕活", desc: "清理商业空间的历史负重，让团队氛围更和谐，提升整体运营的爆发力" },
        { icon: Heart, title: "个人健康辅助", desc: "通过清理磁场干扰，帮助个体排解压抑与焦虑，使身心处于更佳的自我疗愈状态" },
      ]
    : [
        { icon: Sparkles, title: "Residential Property Reset", desc: "Address sleep issues, relationship tension, and general unease by optimizing your home's energy circulation patterns" },
        { icon: Building2, title: "Commercial Space Audit", desc: "Improve team dynamics, customer flow, and business performance through systematic environmental energy analysis" },
        { icon: Heart, title: "Personal Wellness Protocol", desc: "Reduce anxiety, improve focus, and enhance emotional balance by clearing electromagnetic and energetic interference" },
      ];

  

  return (
    <section id="clearing" className="py-24 md:py-32 bg-[oklch(0.08_0.02_60)]">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20 text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-8 flex items-center justify-center text-base font-bold border border-[oklch(0.55_0.10_200)] text-[oklch(0.55_0.10_200)]"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}>
              柔
            </span>
            <div className="w-8 h-px bg-[oklch(0.55_0.10_200)]" />
            <span
              className="text-[0.6rem] tracking-[0.25em] uppercase text-[oklch(0.55_0.10_200)] font-semibold"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              {t("板块二 · 能量净化", "Pillar II · Space Purification")}
            </span>
            <div className="w-8 h-px bg-[oklch(0.60_0.08_65)]" />
          </div>

          <h2
            className="font-bold leading-tight mb-6"
            style={{
              fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              color: "oklch(0.75 0.06 65)",
            }}
          >
            {t("重塑磁场，转运安身", "Property Energy Audit & Reset")}
          </h2>

          <p
            className="text-lg leading-relaxed mb-8"
            style={{
              fontFamily: "var(--font-noto-serif), serif",
              color: "oklch(0.70 0.04 70)",
              fontStyle: "italic",
            }}
          >
            {t(
              "「万物皆有场，场净则心安。空间能量净化，是环境与生命深度连接的桥梁。」",
              "Cleansing the unseen energies to create a sanctuary for your health, sleep, and relationships — where ancient wisdom meets modern wellness."
            )}
          </p>
        </motion.div>

        {/* Master Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="relative overflow-hidden rounded-sm">
            <img 
              src={MASTER_PORTRAIT}
              alt={t("黄启明大师 - 奇门·风水·战略顾问", "Master Huang Qiming - Qimen · Feng Shui · Strategic Advisor")}
              className="w-full h-auto object-cover"
            />
          </div>

        </motion.div>

        {/* Two Column: Gift + Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Left: Unique Gift */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative"
          >
            <div className="bg-[oklch(0.12_0.02_60)] p-8 md:p-10 border border-[oklch(0.25_0.02_60)]">
              <span
                className="text-[0.55rem] tracking-[0.2em] uppercase text-[oklch(0.60_0.08_65)] font-semibold mb-4 block"
                style={{ fontFamily: "var(--font-lato), sans-serif" }}
              >
                {t("天赋异禀", "Unique Gift")}
              </span>
              <h3
                className="text-2xl font-bold mb-4"
                style={{
                  fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
                  color: "oklch(0.85 0.04 70)",
                }}
              >
                {t("十载修行的能量共振", "A Decade of Cultivated Energy Resonance")}
              </h3>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{
                  fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
                  color: "oklch(0.65 0.03 70)",
                }}
              >
                {t(
                  "空间能量净化不仅是一门技术，更是启明大师在十多年深厚修行中觉醒的天赋。大师通过独特的感官与磁场共振，能够敏锐捕捉空间中肉眼不可见的能量淤积与负面频率。这是跨越物质层面的玄学智慧，更是大师多年来在无数次实践中沉淀出的核心法门。",
                  "Space energy clearing is not just a technique — it is a gift awakened through Master Qiming's decade-plus of deep cultivation. Through unique sensory resonance with magnetic fields, the Master can acutely detect invisible energy blockages and negative frequencies within spaces. This is metaphysical wisdom that transcends the material plane, refined through countless practices over the years."
                )}
              </p>

              {/* Interactive Button */}
              <a
                href={WA_TEST}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 text-sm font-bold uppercase transition-all duration-300 hover:gap-5 group"
                style={{
                  fontFamily: "var(--font-lato), sans-serif",
                  letterSpacing: "0.1em",
                  background: "oklch(0.60 0.08 65)",
                  color: "oklch(0.98 0.005 75)",
                }}
              >
                <Sparkles size={16} className="group-hover:animate-pulse" />
                {t("测一测您的空间能量场", "Get Your Free Space Assessment")}
                <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* Right: Effects */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span
              className="text-[0.55rem] tracking-[0.2em] uppercase text-[oklch(0.60_0.08_65)] font-semibold mb-6 block"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              {t("显著成效", "Measurable Results")}
            </span>
            <h3
              className="text-2xl font-bold mb-8"
              style={{
                fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
                color: "oklch(0.85 0.04 70)",
              }}
            >
              {t("全方位的能量重组", "Three-Tier Optimization")}
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
                      <h4
                        className="text-base font-bold mb-1"
                        style={{
                          fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
                          color: "oklch(0.80 0.04 70)",
                        }}
                      >
                        {effect.title}
                      </h4>
                      <p
                        className="text-sm leading-relaxed"
                        style={{
                          fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
                          color: "oklch(0.60 0.03 70)",
                        }}
                      >
                        {effect.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div
            className="p-8 md:p-10 border border-[oklch(0.30_0.02_60)]"
            style={{ background: "linear-gradient(135deg, oklch(0.12 0.02 60) 0%, oklch(0.10 0.02 50) 100%)" }}
          >
            <span
              className="text-[0.55rem] tracking-[0.2em] uppercase text-[oklch(0.60_0.08_65)] font-semibold mb-4 block"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              {t("结缘奇明", "Connect with Qiming")}
            </span>
            <h3
              className="text-xl md:text-2xl font-bold mb-4"
              style={{
                fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
                color: "oklch(0.80 0.05 65)",
              }}
            >
              {t("遇见即是福报", "To Meet is a Blessing")}
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{
                fontFamily: "var(--font-noto-sans), var(--font-lato), sans-serif",
                color: "oklch(0.65 0.03 70)",
              }}
            >
              {t(
                "玄学之道，贵在「机缘」二字。能量的净化与调整，本质上是一场磁场的相吸。能感受到这份能量并寻求改变的人，皆是拥有福报的有缘之人。磁场一变，万象更新。",
                "The way of metaphysics lies in \"affinity.\" Energy clearing and adjustment is essentially a magnetic attraction. Those who feel this energy and seek change are blessed souls. When the field changes, everything renews."
              )}
            </p>
            <a
              href={WA_CLEARING}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 text-sm font-bold uppercase transition-all duration-300 hover:gap-4"
              style={{
                fontFamily: "var(--font-lato), sans-serif",
                letterSpacing: "0.12em",
                background: "oklch(0.60 0.08 65)",
                color: "oklch(0.98 0.005 75)",
              }}
            >
              {t("开启净心之旅", "Begin Your Clearing Journey")} <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
