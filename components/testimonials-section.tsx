"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

// 客户真实照片
const CUSTOMER_PHOTO = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4191776240569_.pic-1HXY4sUF68SUTAsExWROknGONCsjEd.jpg";
// Google 评价截图
const GOOGLE_REVIEW_1 = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4281776243540_.pic_hd-PTtauZNQqS8zI5EvzB2EfmvNy47fNz.jpg";
const GOOGLE_REVIEW_2 = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%88%AA%E5%B1%8F2026-04-15%20%E4%B8%8B%E5%8D%885.01.59-n8gqJe8Xtzd7Krzi4kmjOZPSXOgYuC.png";
// 微信聊天反馈
const WECHAT_FEEDBACK = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4291776243541_.pic_hd-ARJ2G8SS6sDCswXzzPITjuX7YWTB88.jpg";

type Testimonial = {
  zh: string;
  en: string;
  clientZh: string;
  clientEn: string;
  photo?: string;
  rating?: number;
  isGoogleReview?: boolean;
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
      zh: "启明风水大师水平极高，为我解释的非常准确！Good Feng Shui Master!",
      en: "Master Qiming's skill is exceptional, his explanations were very accurate! Good Feng Shui Master!",
      clientZh: "teo shirley · Google 5星评价",
      clientEn: "teo shirley · Google 5-Star Review",
      rating: 5,
      isGoogleReview: true,
    },
    {
      zh: "启明大师真的很厉害，一碰面就帮我指出了困惑点，建议很有启发，让我更明白思路。感恩！Thanks.",
      en: "Master Qiming is really amazing. He identified my concerns right away, and his suggestions were very enlightening. Grateful! Thanks.",
      clientZh: "ZHIQIANG LI · Google Local Guide",
      clientEn: "ZHIQIANG LI · Google Local Guide",
      rating: 5,
      isGoogleReview: true,
    },
    {
      zh: "搬家进来一个月股票回来一些，看来房子能量布局起效果了。谢谢启明老师，希望住的越来越旺！",
      en: "After moving in for a month, my stocks have recovered somewhat. It seems the house energy layout is working. Thank you Master Qiming, hope things keep getting better!",
      clientZh: "新加坡 · 住宅客户",
      clientEn: "Singapore · Residential Client",
      photo: CUSTOMER_PHOTO,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[oklch(0.97_0.012_75)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[oklch(0.60_0.08_65)]" />
            <span className="text-[0.6rem] tracking-[0.25em] uppercase text-[oklch(0.60_0.08_65)] font-semibold" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
              {t("真实客户反馈", "Real Client Results")}
            </span>
          </div>

          <h2
            className="font-bold leading-tight mb-4"
            style={{
              fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              color: "oklch(0.12 0.02 60)",
            }}
          >
            {t("改变不是说出来的，而是客户亲身感受到的", "Real transformation speaks for itself")}
          </h2>

          <p className="text-sm text-[oklch(0.50_0.02_65)] max-w-2xl leading-relaxed" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}>
            {t(
              "从情绪调整、财富判断到空间能量优化，真正让客户留下来的，是他们亲身感受到的变化。",
              "From emotional healing to wealth guidance and energy alignment, what stays with clients is the real change they experience."
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-[oklch(0.88_0.018_70)]">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white p-8 md:p-10 flex flex-col"
            >
              {item.isGoogleReview ? (
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating || 5)].map((_, idx) => (
                      <span key={idx} className="text-[oklch(0.70_0.15_85)]">&#9733;</span>
                    ))}
                  </div>
                  <span className="text-xs text-[oklch(0.50_0.02_65)]" style={{ fontFamily: "var(--font-lato), sans-serif" }}>Google Review</span>
                </div>
              ) : item.photo ? (
                <div className="mb-6 flex items-center gap-4">
                  <img
                    src={item.photo}
                    alt={t(item.clientZh, item.clientEn)}
                    className="w-16 h-16 object-cover rounded-full border-2 border-[oklch(0.60_0.08_65)]"
                  />
                  <div className="text-[oklch(0.60_0.08_65)] text-3xl">&ldquo;</div>
                </div>
              ) : (
                <div className="mb-6 text-[oklch(0.60_0.08_65)] text-xl">&ldquo;</div>
              )}

              <p className="text-sm leading-relaxed flex-1" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif", color: "oklch(0.28 0.02 60)" }}>
                {t(item.zh, item.en)}
              </p>

              <div className="w-10 h-px bg-[oklch(0.60_0.08_65)] mt-8 mb-4" />

              <p className="text-xs uppercase tracking-[0.15em]" style={{ fontFamily: "var(--font-lato), sans-serif", color: "oklch(0.55 0.02 65)" }}>
                {t(item.clientZh, item.clientEn)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Real Review Screenshots */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-[oklch(0.60_0.08_65)]" />
            <span className="text-[0.6rem] tracking-[0.25em] uppercase text-[oklch(0.60_0.08_65)] font-semibold" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
              {t("真实评价截图", "Authentic Review Screenshots")}
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-[oklch(0.88_0.018_70)] p-4 hover:shadow-lg transition-shadow duration-300">
              <img
                src={GOOGLE_REVIEW_1}
                alt="Google Review Screenshot"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="bg-white border border-[oklch(0.88_0.018_70)] p-4 hover:shadow-lg transition-shadow duration-300">
              <img
                src={GOOGLE_REVIEW_2}
                alt="Google Review Screenshot"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="bg-white border border-[oklch(0.88_0.018_70)] p-4 hover:shadow-lg transition-shadow duration-300">
              <img
                src={WECHAT_FEEDBACK}
                alt="WeChat Feedback Screenshot"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
