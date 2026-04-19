"use client";

import { motion } from "framer-motion";
import { useLanguage, LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
import Link from "next/link";

const INSIGHTS = [
  {
    id: "hdb-bto-feng-shui-2026",
    category: { zh: "住宅风水", en: "Residential Feng Shui" },
    titleZh: "2026年HDB BTO风水评估指南",
    titleEn: "Singapore HDB BTO Feng Shui Audit Guide 2026",
    excerptZh: "新组屋收楼前必看！如何选择最佳单位朝向、避开不利格局、布置旺财风水阵。",
    excerptEn: "Essential guide before collecting your new HDB flat! Learn how to choose the best unit orientation, avoid unfavorable layouts, and set up prosperity arrangements.",
    date: "2026-04-10",
    readTime: "8 min",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21711776224675_.pic_hd.jpg-e4KblAWrbDj5x5doZNK2XS1KduaUCr.png",
    tags: ["HDB", "BTO", "2026"],
  },
  {
    id: "bedok-feng-shui-guide",
    category: { zh: "地区指南", en: "Area Guide" },
    titleZh: "勿洛区风水布局要点",
    titleEn: "Bedok Area Feng Shui Layout Guide",
    excerptZh: "勿洛作为新加坡东部成熟社区，有其独特的地理能量特征。了解如何因地制宜进行风水布局。",
    excerptEn: "As a mature community in East Singapore, Bedok has unique geographical energy characteristics. Learn location-specific feng shui optimization.",
    date: "2026-03-28",
    readTime: "6 min",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21641776221185_.pic-Y5lINHcCAGpCwsBdBQDkpS4zpNX9QV.jpg",
    tags: ["Bedok", "East Singapore"],
  },
  {
    id: "office-wealth-layout",
    category: { zh: "商业风水", en: "Business Feng Shui" },
    titleZh: "CBD办公室招财布局秘诀",
    titleEn: "Central Area Office Wealth Layout Secrets",
    excerptZh: "新加坡CBD高楼林立，如何在有限空间内布置招财阵？老板位、财位、收银台的关键要点。",
    excerptEn: "Singapore CBD is full of high-rises. How to arrange wealth corners in limited space? Key points for boss desk, wealth position, and cashier placement.",
    date: "2026-03-15",
    readTime: "10 min",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21551776220031_.pic_hd.jpg-GNpRqM2kWn8vIJ6dVMuaQl1bbVlyvR.png",
    tags: ["CBD", "Office", "Business"],
  },
  {
    id: "condo-feng-shui-tips",
    category: { zh: "住宅风水", en: "Residential Feng Shui" },
    titleZh: "公寓风水常见问题与解决方案",
    titleEn: "Condo Feng Shui Common Issues & Solutions",
    excerptZh: "公寓住宅常见的风水问题：门对门、镜子摆放、厨房方位等，以及简单有效的化解方法。",
    excerptEn: "Common condo feng shui issues: door-facing-door, mirror placement, kitchen orientation, and simple effective remedies.",
    date: "2026-03-01",
    readTime: "7 min",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21631776220998_.pic_hd.jpg-PKkh2dr24Bhq47qG4H7Yr1oMBpIFnS.png",
    tags: ["Condo", "Residential"],
  },
  {
    id: "bazi-career-2026",
    category: { zh: "八字命理", en: "Bazi Reading" },
    titleZh: "2026丙午年事业运势分析",
    titleEn: "2026 Year of Fire Horse Career Analysis",
    excerptZh: "丙午年哪些生肖事业运最旺？如何根据八字选择最佳跳槽、创业时机？",
    excerptEn: "Which zodiac signs have the best career luck in 2026? How to choose the best timing for job changes or starting a business based on Bazi?",
    date: "2026-02-15",
    readTime: "12 min",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21961776249570_.pic_hd.jpg-xVEyhvkF9jOSMdF8BUm6LtcClWKN8d.png",
    tags: ["Bazi", "Career", "2026"],
  },
  {
    id: "tongshifu-art-guide",
    category: { zh: "能量器物", en: "Energy Artifacts" },
    titleZh: "铜师傅艺术品选购指南",
    titleEn: "Tongshifu Artisanal Copper Sculptures Guide",
    excerptZh: "作为中国最大铜文创品牌，铜师傅如何将传统工艺与现代美学结合？如何选择适合自己的能量摆件？",
    excerptEn: "As China's largest bronze art brand, how does Tongshifu combine traditional craftsmanship with modern aesthetics? How to choose the right energy piece for you?",
    date: "2026-02-01",
    readTime: "9 min",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21611776220612_.pic_hd.jpg-hejKHLcxZs2TYWp6aij5M4iQBddg4y.png",
    tags: ["Tongshifu", "Art", "Collection"],
  },
];

function InsightsContent() {
  const { t, lang } = useLanguage();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1 },
    }),
  };

  return (
    <div className="min-h-screen bg-[oklch(0.08_0.02_60)]">
      <Navbar />
      
      {/* Hero */}
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
                {t("洞察与分享", "Insights & Blog")}
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
              {t("风水洞察", "Feng Shui Insights")}
            </h1>
            <p
              className="text-lg max-w-2xl leading-relaxed"
              style={{
                fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
                color: "oklch(0.70 0.02 70)",
              }}
            >
              {t(
                "新加坡本地风水知识、运势分析、空间布局技巧。助您在狮城实现事业与生活的双丰收。",
                "Local Singapore feng shui knowledge, fortune analysis, and space layout tips. Helping you achieve success in both career and life in the Lion City."
              )}
            </p>
          </motion.div>

          {/* Location Badge */}
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
                "Blk 210 New Upper Changi Road #01-729, Singapore 460210 (勿洛)",
                "Blk 210 New Upper Changi Road #01-729, Singapore 460210 (Bedok)"
              )}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Insights Grid */}
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
                  <a
                    href={`https://wa.me/message/55HSHDNBMWPLA1?text=${encodeURIComponent(lang === "zh" ? `您好，我想了解更多关于"${insight.titleZh}"的内容` : `Hi, I'd like to learn more about "${insight.titleEn}"`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase text-[oklch(0.60_0.08_65)] hover:gap-3 transition-all duration-300"
                    style={{ fontFamily: "var(--font-lato), sans-serif", letterSpacing: "0.1em" }}
                  >
                    {t("咨询详情", "Learn More")} <ArrowRight size={10} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-16 text-center"
          >
            <p
              className="text-sm mb-6"
              style={{
                fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
                color: "oklch(0.60 0.02 70)",
              }}
            >
              {t(
                "想要了解更多个性化风水建议？预约启明大师一对一咨询",
                "Want personalized feng shui advice? Book a one-on-one consultation with Master Qiming"
              )}
            </p>
            <a
              href="https://wa.me/message/55HSHDNBMWPLA1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:opacity-90"
              style={{
                fontFamily: "var(--font-lato), sans-serif",
                background: "oklch(0.60 0.08 65)",
                color: "oklch(0.10 0.02 60)",
                letterSpacing: "0.12em",
              }}
            >
              {t("预约咨询", "Book Consultation")} <ArrowRight size={14} />
            </a>
          </motion.div>
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
