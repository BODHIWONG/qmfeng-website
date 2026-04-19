"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

export default function VideoSection() {
  const { t } = useLanguage();

  const videos = [
    {
      titleZh: "客户受益后专程道谢",
      titleEn: "Client Returns to Express Gratitude",
      descZh: "客户在受益后专程前来道谢，真实见证风水调整带来的显著改变",
      descEn: "Client specially came back to express gratitude after experiencing significant positive changes",
      url: "https://www.youtube.com/embed/3Rpj8CotZVo",
    },
    {
      titleZh: "客户真实见证",
      titleEn: "Real Client Testimonial",
      descZh: "客户亲身分享：风水调整后的显著改变",
      descEn: "Client shares real transformation after feng shui consultation",
      url: "https://www.youtube.com/embed/XgWq0l8HZYw",
    },
    {
      titleZh: "空间净化实录",
      titleEn: "Energy Clearing Session",
      descZh: "现场记录：空间能量净化的完整过程",
      descEn: "On-site recording of space energy clearing process",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/418_1775979850-pvyOpTK41utkXOXMEkJAbNAeuk0Wuo.mp4",
      isVideo: true,
    },
  ];

  return (
    <section className="py-24 bg-[oklch(0.95_0.013_75)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[oklch(0.60_0.08_65)]" />
            <span className="text-[0.6rem] tracking-[0.25em] uppercase text-[oklch(0.60_0.08_65)] font-semibold" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
              {t("真实案例与讲解", "Real Cases")}
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.12 0.02 60)" }}>
            {t("看得见的改变，更有说服力", "Real Transformation Speaks")}
          </h2>

          <p className="text-sm text-[oklch(0.50_0.02_65)] max-w-xl" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}>
            {t(
              "通过真实视频，展示空间调整、客户反馈与风水影响。",
              "See real results through actual cases and explanations."
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-[oklch(0.88_0.018_70)]"
            >
              <div className="aspect-video">
                {v.isVideo ? (
                  <video
                    src={v.url}
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                  />
                ) : (
                  <iframe
                    src={v.url}
                    className="w-full h-full"
                    allowFullScreen
                    title={t(v.titleZh, v.titleEn)}
                  />
                )}
              </div>

              <div className="p-5">
                <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.15 0.02 60)" }}>
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
