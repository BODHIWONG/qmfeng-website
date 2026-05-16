"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

export default function VideoSection() {
  const { t } = useLanguage();

  const videos = [
    {
      titleZh: "什么是奇门决策",
      titleEn: "What Is Qimen Strategy?",
      descZh: "用东方智慧看清时机、方向、人事与局势风险。",
      descEn: "Using Eastern wisdom to read timing, direction, people and risk before decisions.",
      url: "https://www.youtube.com/embed/3Rpj8CotZVo",
    },
    {
      titleZh: "关键行动前，为什么要先看局势",
      titleEn: "Why Read the Situation Before Major Action",
      descZh: "很多错误不是能力不足，而是时机、方向与人事关系判断失衡。",
      descEn: "Many mistakes come from unclear timing, direction and people dynamics, not lack of ability.",
      url: "https://www.youtube.com/embed/XgWq0l8HZYw",
    },
    {
      titleZh: "启明遁甲私密战略简报",
      titleEn: "Private Qimen Strategy Briefing",
      descZh: "适合企业主、创业者与个人在重大决定前先获得清晰判断。",
      descEn: "For business owners, founders and individuals seeking clarity before critical decisions.",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/418_1775979850-pvyOpTK41utkXOXMEkJAbNAeuk0Wuo.mp4",
      isVideo: true,
    },
  ];

  return (
    <section className="bg-[oklch(0.95_0.013_75)] py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-8 bg-[oklch(0.60_0.08_65)]" />
            <span className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-[oklch(0.60_0.08_65)]" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
              {t("启明遁甲战略洞察", "Qimen Strategy Video Insights")}
            </span>
          </div>

          <h2 className="mb-4 text-3xl font-bold md:text-5xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.12 0.02 60)" }}>
            {t("用短视频理解东方智慧决策系统", "Understand Eastern Decision Wisdom Through Video")}
          </h2>

          <p className="max-w-xl text-sm text-[oklch(0.50_0.02_65)]" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}>
            {t(
              "围绕奇门决策、时机判断、方向选择、人事关系与局势风险，帮助客户在关键行动前建立更清晰的判断。",
              "Focused on Qimen Strategy, timing, direction, people dynamics and risk so clients can build clearer judgment before important moves."
            )}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {videos.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-[oklch(0.88_0.018_70)] bg-white"
            >
              <div className="aspect-video">
                {v.isVideo ? (
                  <video
                    src={v.url}
                    className="h-full w-full object-cover"
                    controls
                    playsInline
                  />
                ) : (
                  <iframe
                    src={v.url}
                    className="h-full w-full"
                    allowFullScreen
                    title={t(v.titleZh, v.titleEn)}
                  />
                )}
              </div>

              <div className="p-5">
                <h3 className="mb-2 font-bold" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.15 0.02 60)" }}>
                  {t(v.titleZh, v.titleEn)}
                </h3>
                <p className="text-sm text-[oklch(0.50_0.02_65)]" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}>
                  {t(v.descZh, v.descEn)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
