"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

type Testimonial = {
  zh: string;
  en: string;
  clientZh: string;
  clientEn: string;
  sourceZh?: string;
  sourceEn?: string;
  rating?: number;
};

export default function TestimonialsSection() {
  const { t } = useLanguage();

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, delay: i * 0.12, ease: "easeOut" as const },
    }),
  };

  const testimonials: Testimonial[] = [
    {
      zh: "非常专业且亲切的老师，解读非常准确。他也非常耐心、友善。强烈推荐！",
      en: "A very professional and kind master with very accurate reading. He is very patient and nice as well. Will highly recommend!",
      clientZh: "Sharon Loh · Google 评价",
      clientEn: "Sharon Loh · Google Review",
      sourceZh: "公开评价",
      sourceEn: "Public Review",
      rating: 5,
    },
    {
      zh: "黄启明很快帮我看清问题的核心。原本我一直纠结该不该推进合作，经过分析后，我更清楚知道哪些条件要先谈清楚。",
      en: "Huang Qiming helped me see the core issue quickly. I was unsure whether to move forward with a partnership, but after the review I understood which terms needed to be clarified first.",
      clientZh: "新加坡 · 企业主",
      clientEn: "Singapore · Business Owner",
      sourceZh: "私密咨询",
      sourceEn: "Private Advisory",
      rating: 5,
    },
    {
      zh: "这不是普通算命，而是一次很清晰的战略判断。黄启明从时机、方向和人事关系帮我梳理，很多原本看不见的风险变得清楚。",
      en: "This did not feel like ordinary fortune telling. It was a clear strategic review. Huang Qiming helped me organise timing, direction and people dynamics, and risks I could not see became clearer.",
      clientZh: "创业者 · 私密咨询",
      clientEn: "Founder · Private Advisory",
      sourceZh: "客户反馈",
      sourceEn: "Client Feedback",
      rating: 5,
    },
    {
      zh: "我最有收获的是，不是得到一句简单答案，而是知道下一步应该先守什么、再推进什么。这个判断让我冷静很多。",
      en: "The most valuable part was not receiving a simple answer, but knowing what to protect first and what to move forward with next. The clarity helped me become much calmer.",
      clientZh: "个人重大决策客户",
      clientEn: "Major Life Decision Client",
      sourceZh: "私密咨询",
      sourceEn: "Private Advisory",
      rating: 5,
    },
  ];

  return (
    <section className="bg-[oklch(0.97_0.012_75)] py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20"
        >
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-8 bg-[oklch(0.60_0.08_65)]" />
            <span className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-[oklch(0.60_0.08_65)]" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
              {t("客户决策反馈", "Client Decision Feedback")}
            </span>
          </div>

          <h2
            className="mb-4 font-bold leading-tight"
            style={{
              fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              color: "oklch(0.12 0.02 60)",
            }}
          >
            {t("真正的价值，是让客户在关键时刻看清局势", "The real value is clarity before critical decisions")}
          </h2>

          <p className="max-w-2xl text-sm leading-relaxed text-[oklch(0.50_0.02_65)]" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}>
            {t(
              "以下反馈包含公开 Google 评价与匿名整理的客户反馈，重点呈现客户在合作、转型、人生方向与重大行动前获得的判断清晰度。",
              "The following feedback includes public Google reviews and anonymised client comments, highlighting how clients gained decision clarity before partnerships, transitions, life-direction choices and major actions."
            )}
          </p>
        </motion.div>

        <div className="grid gap-px bg-[oklch(0.88_0.018_70)] md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="flex flex-col bg-white p-8 md:p-10"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[...Array(item.rating || 5)].map((_, idx) => (
                    <span key={idx} className="text-[oklch(0.70_0.15_85)]">&#9733;</span>
                  ))}
                </div>
                <span className="text-xs text-[oklch(0.50_0.02_65)]" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
                  {t(item.sourceZh || "私密咨询", item.sourceEn || "Private Advisory")}
                </span>
              </div>

              <p className="flex-1 text-sm leading-relaxed" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif", color: "oklch(0.28 0.02 60)" }}>
                {t(item.zh, item.en)}
              </p>

              <div className="mb-4 mt-8 h-px w-10 bg-[oklch(0.60_0.08_65)]" />

              <p className="text-xs uppercase tracking-[0.15em]" style={{ fontFamily: "var(--font-lato), sans-serif", color: "oklch(0.55 0.02 65)" }}>
                {t(item.clientZh, item.clientEn)}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-12 border-l-2 border-[oklch(0.60_0.08_65)] bg-white px-6 py-5"
        >
          <p className="text-sm leading-7 text-[oklch(0.38_0.02_60)]" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}>
            {t(
              "注：启明遁甲决策智库提供战略判断与决策参考，不承诺保证结果。最终决定与行动由客户自行负责。",
              "Note: Qimen Strategy provides strategic insight and decision reference. No outcome is guaranteed. Final decisions and actions remain the client’s responsibility."
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
