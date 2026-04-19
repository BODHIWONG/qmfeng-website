"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

const WA_LINK = "https://wa.me/message/55HSHDNBMWPLA1";
const MASTER_PORTRAIT = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21541776220030_.pic_hd.jpg-35nwtPAyHHfdwcY3t4OK24vMip1AFl.png";

// Three Core Pillars - Focused Messaging
const slides = [
  {
    id: 1,
    icon: "wealth",
    tagZh: "财富旺运",
    tagEn: "Financial Strategy",
    // Pain point — shown prominently above the main title
    painZh: "生意不顺？财运不稳？投资踌躇？",
    painEn: "Business struggling? Wealth unstable? Unsure when to invest?",
    // Main headline
    titleZh: "用风水与八字，掌控财富格局",
    titleEn: "Master your financial destiny with Feng Shui & Bazi",
    // Solution line
    subtitleZh: "提升财运 · 规避风险 · 把握关键时机",
    subtitleEn: "Enhance prosperity, mitigate risks, and seize the right moments",
    descZh: "16年专业经验，服务5,000+客户。精准把握投资时机，评估合伙人，做出关键决策，从「凭感觉」升级到「有把握」。",
    descEn: "Over 16 years of expertise serving 5,000+ clients across Singapore and beyond. Precise investment timing, strategic partnership evaluation, and confident decision-making — backed by ancient wisdom.",
    ctaZh: "立即WhatsApp咨询",
    ctaEn: "Consult via WhatsApp",
    waLink: "https://wa.me/6589418791?text=Hello%20Master%20Huang%2C%20I%27m%20interested%20in%20a%20Financial%20Strategy%20consultation.",
    bg: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21551776220031_.pic_hd.jpg-GNpRqM2kWn8vIJ6dVMuaQl1bbVlyvR.png",
    accentColor: "oklch(0.68 0.12 70)",
  },
  {
    id: 2,
    icon: "heart",
    tagZh: "情感疗愈",
    tagEn: "Wellness & Healing",
    painZh: "情绪低落？焦虑内耗？感情受阻？",
    painEn: "Feeling drained? Emotionally stuck? Relationships strained?",
    titleZh: "不仅是命理预测，更是心灵的重塑",
    titleEn: "Beyond fortune-telling — a transformation of your inner world",
    subtitleZh: "清华积极心理学 × 传统命理智慧",
    subtitleEn: "Tsinghua Positive Psychology × Traditional Metaphysics",
    descZh: "融合清华大学积极心理学研究成果与传统风水命理，启明大师开创独特的「能量心理调频」疗法。识别命运轨迹中的阻碍，结合科学心智模型，助您拨开情感迷雾，找回内在力量。",
    descEn: "Combining Tsinghua University's Positive Psychology research with traditional Feng Shui wisdom, Master Huang pioneered the unique 'Energy-Psychology Alignment' method. Identify obstacles in your life path and apply evidence-based mental frameworks to clear emotional fog and reclaim your inner strength.",
    ctaZh: "预约心理能量咨询",
    ctaEn: "Book Wellness Session",
    waLink: "https://wa.me/6589418791?text=%E4%BD%A0%E5%A5%BD%E5%A5%87%E6%98%8E%E5%A4%A7%E5%B8%88%EF%BC%8C%E6%88%91%E5%B8%8C%E6%9C%9B%E5%92%A8%E8%AF%A2%E5%85%B3%E4%BA%8E%E5%BF%83%E7%90%86%E8%83%BD%E9%87%8F%E8%B0%83%E9%A2%91%E4%B8%8E%E7%A7%AF%E6%9E%81%E5%BF%83%E7%90%86%E5%AD%A6%E6%8C%87%E5%AF%BC%E3%80%82",
    bg: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21641776221185_.pic-Y5lINHcCAGpCwsBdBQDkpS4zpNX9QV.jpg",
    accentColor: "oklch(0.45 0.12 145)",
  },
  {
    id: 3,
    icon: "space",
    tagZh: "空间能量",
    tagEn: "Space Optimisation",
    painZh: "睡眠差？家宅不安？店铺气场弱？",
    painEn: "Poor sleep? Home feels off? Business space draining your energy?",
    titleZh: "调整空间能量，放大人生结果",
    titleEn: "Optimise your space energy and amplify life results",
    subtitleZh: "清除负能量 · 重置气场 · 打造财富磁场",
    subtitleEn: "Cleanse negative energy, reset the field, and create a prosperity environment",
    descZh: "评估家宅与办公室气场，精准布局，无需到场亦可远程分析。让环境成为您成功的加速器，而非阻力。",
    descEn: "Assess your home or office energy field, optimise spatial layouts, and create prosperity zones. Remote analysis available for international clients — no on-site visit required.",
    ctaZh: "立即WhatsApp咨询",
    ctaEn: "Consult via WhatsApp",
    waLink: "https://wa.me/6589418791?text=Hello%20Master%20Huang%2C%20I%27m%20interested%20in%20a%20Space%20Energy%20consultation.",
    bg: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21711776224675_.pic_hd.jpg-e4KblAWrbDj5x5doZNK2XS1KduaUCr.png",
    accentColor: "oklch(0.55 0.12 250)",
  },
];

export default function HeroCarousel() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slide = slides[current];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* SEO H1 - Screen Reader Only */}
      <h1 className="sr-only">
        {t(
          "奇明風水 - 新加坡领先现代禅意风水大师 | 16年经验 黄启明大师",
          "QiMing Feng Shui - Singapore's Leading Modern Zen Feng Shui Consultant | Master Huang Qiming"
        )}
      </h1>
      {/* Energy Flow Background Effect - Smoke & Qi Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Primary energy orb - slow drift */}
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, oklch(0.75 0.08 65) 0%, transparent 70%)" }}
          animate={{ 
            x: [0, 100, 0], 
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Secondary energy orb */}
        <motion.div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, oklch(0.65 0.06 55) 0%, transparent 70%)" }}
          animate={{ 
            x: [0, -80, 0], 
            y: [0, -60, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Floating smoke wisps */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full opacity-[0.025]"
          style={{ background: "radial-gradient(ellipse, oklch(0.80 0.05 70) 0%, transparent 60%)", filter: "blur(40px)" }}
          animate={{ 
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full opacity-[0.02]"
          style={{ background: "radial-gradient(ellipse, oklch(0.70 0.06 60) 0%, transparent 50%)", filter: "blur(30px)" }}
          animate={{ 
            x: [0, -25, 15, 0],
            y: [0, 25, -30, 0],
            scale: [1, 0.95, 1.05, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        {/* Rising energy particles effect */}
        <motion.div
          className="absolute bottom-0 left-1/3 w-1 h-32 opacity-[0.08]"
          style={{ background: "linear-gradient(to top, oklch(0.60 0.08 65), transparent)" }}
          animate={{ 
            y: [0, -200],
            opacity: [0.08, 0],
            scaleY: [1, 1.5],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/3 w-1 h-24 opacity-[0.06]"
          style={{ background: "linear-gradient(to top, oklch(0.65 0.06 70), transparent)" }}
          animate={{ 
            y: [0, -180],
            opacity: [0.06, 0],
            scaleY: [1, 1.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeOut", delay: 2 }}
        />
      </div>

      {/* Background Images */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={slide.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="absolute inset-0"
        >
          <img
            src={slide.bg}
            alt={t(
              `${slide.titleZh} - ${slide.tagZh} 风水咨询`,
              `${slide.titleEn} - ${slide.tagEn} Feng Shui Consultation Singapore`
            )}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.08_0.02_60/0.92)] via-[oklch(0.08_0.02_60/0.75)] to-[oklch(0.08_0.02_60/0.35)]" />
        </motion.div>
      </AnimatePresence>

      {/* Content - Two Column Layout */}
      <div className="relative container pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Tag */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-px bg-[oklch(0.75_0.06_65)]" />
                <span
                  className="text-[0.68rem] tracking-[0.25em] uppercase text-[oklch(0.75_0.06_65)] font-semibold"
                  style={{ fontFamily: "var(--font-lato), sans-serif" }}
                >
                  {t(slide.tagZh, slide.tagEn)}
                </span>
              </div>

              {/* Pain Point — large, immediate, attention-grabbing */}
              <p
                className="font-bold leading-tight mb-4"
                style={{
                  fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
                  fontSize: "clamp(2rem, 5vw, 4rem)",
                  color: "oklch(0.97 0.01 75)",
                  letterSpacing: "-0.01em",
                }}
              >
                {t(slide.painZh, slide.painEn)}
              </p>

              {/* Solution Title — gold, calmer tone */}
              <h2
                className="font-semibold leading-snug mb-3"
                style={{
                  fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
                  fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
                  color: "oklch(0.75 0.06 65)",
                  letterSpacing: "0.01em",
                }}
              >
                {t(slide.titleZh, slide.titleEn)}
              </h2>

              {/* Subtitle — benefit bullets */}
              <p
                className="text-base md:text-lg mb-6 tracking-wide"
                style={{
                  fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
                  color: "oklch(0.65 0.04 65)",
                  letterSpacing: "0.04em",
                }}
              >
                {t(slide.subtitleZh, slide.subtitleEn)}
              </p>

              {/* Description */}
              <p
                className="max-w-2xl text-base md:text-lg leading-relaxed mb-8"
                style={{
                  fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
                  color: "oklch(0.75 0.02 70)",
                }}
              >
                {t(slide.descZh, slide.descEn)}
              </p>

              {/* CTA - Simple and Direct */}
              <div className="flex flex-wrap gap-4 mb-10">
                <a
                  href={slide.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold uppercase transition-all duration-300 hover:scale-105"
                  style={{
                    fontFamily: "var(--font-lato), sans-serif",
                    background: slide.accentColor || "oklch(0.68 0.12 70)",
                    color: "oklch(0.98 0.005 75)",
                    letterSpacing: "0.1em",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                  }}
                >
                  {t(slide.ctaZh, slide.ctaEn)}
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold uppercase border transition-all duration-300 hover:bg-[oklch(0.75_0.06_65)] hover:text-[oklch(0.08_0.02_60)]"
                  style={{
                    fontFamily: "var(--font-lato), sans-serif",
                    border: "1.5px solid oklch(0.75 0.06 65)",
                    color: "oklch(0.90 0.02 70)",
                    letterSpacing: "0.12em",
                  }}
                >
                  {t("了解服务", "Explore Services")}
                </a>
              </div>
            </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Master Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex items-center justify-center"
          >
            <div 
              className="relative w-full max-w-sm overflow-hidden"
              style={{
                border: "3px solid oklch(0.60 0.08 65)",
                aspectRatio: '3/4',
              }}
            >
              <img
                src={MASTER_PORTRAIT}
                alt={t("黄启明大师 - 新加坡风水大师 奇门遁甲专家", "Master Huang Qiming - Feng Shui Master Singapore, Qimen Dunjia Expert, Bazi Reading Bedok")}
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay with brand accent */}
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.02_60/0.4)] via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Three Core Pillars Navigation */}
        <div className="grid grid-cols-3 gap-4 max-w-3xl mt-12">
          {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goToSlide(i)}
                className={`backdrop-blur-md border px-5 py-4 text-sm text-center transition-all duration-300 ${
                  i === current
                    ? "border-[oklch(0.75_0.06_65)] bg-[oklch(0.15_0.02_60/0.9)] text-[oklch(0.95_0.01_75)]"
                    : "border-[oklch(0.35_0.02_60)] bg-[oklch(0.12_0.02_60/0.6)] text-[oklch(0.75_0.02_70)] hover:border-[oklch(0.75_0.06_65)]"
                }`}
                style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}
              >
                <span className={`mr-2 ${i === current ? "text-[oklch(0.75_0.06_65)]" : "text-[oklch(0.55_0.04_65)]"}`}>
                  {i === current ? "●" : "○"}
                </span>
                {t(s.tagZh, s.tagEn)}
              </button>
            ))}
        </div>

        {/* Location Info */}
        <div
          className="flex items-center gap-2 mt-10 text-xs text-[oklch(0.65_0.02_70)]"
          style={{ fontFamily: "var(--font-lato), sans-serif" }}
        >
          <MapPin size={11} className="text-[oklch(0.75_0.06_65)]" />
          <span>Blk 210 New Upper Changi Road #01-729 Singapore 460210</span>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 right-8 flex gap-2">
        <button
          onClick={prevSlide}
          className="w-10 h-10 flex items-center justify-center border border-[oklch(0.35_0.02_60)] bg-[oklch(0.12_0.02_60/0.8)] backdrop-blur-sm text-[oklch(0.75_0.02_70)] hover:border-[oklch(0.75_0.06_65)] hover:text-[oklch(0.75_0.06_65)] transition-all duration-300"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 flex items-center justify-center border border-[oklch(0.35_0.02_60)] bg-[oklch(0.12_0.02_60/0.8)] backdrop-blur-sm text-[oklch(0.75_0.02_70)] hover:border-[oklch(0.75_0.06_65)] hover:text-[oklch(0.75_0.06_65)] transition-all duration-300"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-1 transition-all duration-300 ${
              i === current ? "w-8 bg-[oklch(0.75_0.06_65)]" : "w-2 bg-[oklch(0.45_0.02_60)]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
