"use client";

import { motion } from "framer-motion";
import { useLanguage, LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
import Link from "next/link";

const INSIGHTS = [
  {
    id: "feng-shui-wealth-improvement",
    category: { zh: "财富风水", en: "Wealth Feng Shui" },
    titleZh: "财富、住宅布局与风水：为什么有些家总是存不住钱",
    titleEn: "Wealth, Home Layout, and Feng Shui: Why Some Homes Never Seem to Hold Money",
    excerptZh: "从住宅动线、休息质量到空间支持感，解析为什么家居环境会影响财富流动与决策状态。",
    excerptEn: "A practical look at how home layout, rest quality, and environmental support can affect wealth flow, decisions, and daily momentum.",
    date: "2026-04-20",
    readTime: "6 min",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21711776224675_.pic_hd.jpg-e4KblAWrbDj5x5doZNK2XS1KduaUCr.png",
    tags: ["Wealth", "Home Layout", "Singapore"],
  },
  {
    id: "qimen-dunjia-decision-making",
    category: { zh: "奇门遁甲", en: "Qi Men Dun Jia" },
    titleZh: "奇门遁甲如何帮助现代人做关键决策",
    titleEn: "How Qi Men Dun Jia Supports Better Timing and Decision-Making",
    excerptZh: "不是神秘化，而是把时机、方向与行动策略结合起来，帮助事业与人生决策更有把握。",
    excerptEn: "A grounded explanation of how timing, direction, and strategy come together in Qi Men Dun Jia for modern business and life decisions.",
    date: "2026-04-20",
    readTime: "6 min",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21961776249570_.pic_hd.jpg-xVEyhvkF9jOSMdF8BUm6LtcClWKN8d.png",
    tags: ["Qi Men Dun Jia", "Timing", "Business"],
  },
  {
    id: "space-energy-clearing",
    category: { zh: "空间能量", en: "Space Energy" },
    titleZh: "空间能量净化：当一个家看起来正常，却总让人疲惫",
    titleEn: "Space Energy Clearing: When a Home Looks Fine but Feels Draining",
    excerptZh: "为什么有些空间并没有明显问题，却长期影响睡眠、情绪和整体状态？这篇文章从环境与能量两层角度解释。",
    excerptEn: "Why do some homes seem normal on the surface yet affect sleep, mood, and clarity over time? A practical perspective on environmental heaviness and clearing.",
    date: "2026-04-20",
    readTime: "5 min",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21631776220998_.pic_hd.jpg-PKkh2dr24Bhq47qG4H7Yr1oMBpIFnS.png",
    tags: ["Space Energy", "Sleep", "Home"],
  },
  {
    id: "singapore-qiming-feng-shui",
    category: { zh: "新加坡风水", en: "Singapore Feng Shui" },
    titleZh: "为什么新加坡风水更需要结合本地住宅与生活节奏来看",
    titleEn: "Why Feng Shui in Singapore Must Be Read Through Local Homes and Urban Living",
    excerptZh: "从 HDB、BTO、Condo 到店铺与办公室，新加坡的城市密度与生活节奏决定了风水不能照搬模板。",
    excerptEn: "From HDB and BTO flats to condos, shops, and offices, Feng Shui in Singapore needs local context instead of generic formulas.",
    date: "2026-04-20",
    readTime: "5 min",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21641776221185_.pic-Y5lINHcCAGpCwsBdBQDkpS4zpNX9QV.jpg",
    tags: ["HDB", "BTO", "Condo"],
  },
  {
    id: "sleep-quality-energy-field",
    category: { zh: "睡眠与气场", en: "Sleep and Energy" },
    titleZh: "睡眠、空间气场与住宅状态之间的关系",
    titleEn: "Sleep Quality, Home Atmosphere, and the Energy of a Space",
    excerptZh: "长期睡不好、回家就累、空间总觉得压抑，往往不只是作息问题，也可能和住宅状态有关。",
    excerptEn: "When poor sleep, heaviness at home, and low energy keep repeating, the condition of the space may be part of the picture.",
    date: "2026-04-19",
    readTime: "5 min",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21801776239127_.pic_hd.jpg-EkcBpRqOTKcVaoZhsifm0L0hrfZ9uJ.png",
    tags: ["Sleep", "Energy Field", "Home"],
  },
];

function InsightsContent() {
  const { t, lang } = useLanguage();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.08 },
    }),
  };

  return (
    <div className="min-h-screen bg-[oklch(0.08_0.02_60)]">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[oklch(0.60_0.08_65)]" />
              <span
                className="text-[0.6rem] tracking-[0.3em] uppercase text-[oklch(0.60_0.08_65)] font-semibold"
                style={{ fontFamily: "var(--font-lato), sans-serif" }}
              >
                {t("洞察与博客", "Insights & Articles")}
              </span>
            </div>
            <h1
              className="font-bold mb-6"
              style={{
                fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                color: "oklch(0.95 0.01 75)",
              }}
            >
              {t("奇明风水洞察", "Qiming Feng Shui Insights")}
            </h1>
            <p
              className="text-lg max-w-3xl leading-relaxed"
              style={{
                fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
                color: "oklch(0.70 0.02 70)",
              }}
            >
              {t(
                "围绕新加坡住宅风水、奇门遁甲决策、空间能量净化与启明大师实战经验的专业文章。适合希望更系统了解风水与生活、事业、空间之间关系的读者。",
                "Professional articles on Feng Shui in Singapore, Qi Men Dun Jia decision-making, space energy clearing, and the hands-on practice behind Qiming Feng Shui. Designed for readers who want a clearer and more grounded understanding of how space, timing, and daily life connect."
              )}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-[oklch(0.15_0.02_60)] border border-[oklch(0.25_0.02_60)]"
          >
            <MapPin size={14} className="text-[oklch(0.60_0.08_65)]" />
            <span
              className="text-xs"
              style={{
                fontFamily: "var(--font-lato), sans-serif",
                color: "oklch(0.70 0.02 70)",
              }}
            >
              {t(
                "新加坡本地视角：HDB / BTO / Condo / 店铺 / 办公室",
                "Local Singapore perspective: HDB / BTO / Condo / Shop / Office"
              )}
            </span>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSIGHTS.map((insight, i) => (
              <motion.article
                key={insight.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="group bg-[oklch(0.12_0.02_60)] border border-[oklch(0.20_0.02_60)] hover:border-[oklch(0.60_0.08_65)] transition-all duration-300"
              >
                <Link href={`/insights/${insight.id}`} className="block">
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={insight.img}
                      alt={lang === "zh" ? insight.titleZh : insight.titleEn}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span
                        className="text-[0.5rem] tracking-[0.15em] uppercase px-2 py-1 bg-[oklch(0.60_0.08_65)] text-[oklch(0.10_0.02_60)] font-bold"
                        style={{ fontFamily: "var(--font-lato), sans-serif" }}
                      >
                        {t(insight.category.zh, insight.category.en)}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span
                        className="flex items-center gap-1.5 text-[0.65rem] text-[oklch(0.50_0.02_65)]"
                        style={{ fontFamily: "var(--font-lato), sans-serif" }}
                      >
                        <Calendar size={11} />
                        {insight.date}
                      </span>
                      <span
                        className="flex items-center gap-1.5 text-[0.65rem] text-[oklch(0.50_0.02_65)]"
                        style={{ fontFamily: "var(--font-lato), sans-serif" }}
                      >
                        <Clock size={11} />
                        {insight.readTime}
                      </span>
                    </div>
                    <h2
                      className="font-bold mb-3 line-clamp-2 group-hover:text-[oklch(0.60_0.08_65)] transition-colors"
                      style={{
                        fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
                        fontSize: "1.15rem",
                        color: "oklch(0.95 0.01 75)",
                      }}
                    >
                      {lang === "zh" ? insight.titleZh : insight.titleEn}
                    </h2>
                    <p
                      className="text-xs leading-relaxed line-clamp-3 mb-4"
                      style={{
                        fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
                        color: "oklch(0.60 0.02 70)",
                      }}
                    >
                      {lang === "zh" ? insight.excerptZh : insight.excerptEn}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {insight.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="text-[0.5rem] tracking-[0.1em] uppercase px-2 py-0.5 border border-[oklch(0.25_0.02_60)] text-[oklch(0.50_0.02_65)]"
                          style={{ fontFamily: "var(--font-lato), sans-serif" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase text-[oklch(0.60_0.08_65)] group-hover:gap-3 transition-all duration-300"
                      style={{ fontFamily: "var(--font-lato), sans-serif", letterSpacing: "0.1em" }}
                    >
                      {t("阅读文章", "Read Article")} <ArrowRight size={10} />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function InsightsPage() {
  return (
    <LanguageProvider>
      <InsightsContent />
    </LanguageProvider>
  );
}
