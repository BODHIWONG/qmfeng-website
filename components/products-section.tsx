"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { ArrowRight } from "lucide-react";

const WA_PRODUCTS = "https://wa.me/message/55HSHDNBMWPLA1";

const PRODUCTS = [
  {
    tag: { zh: "招财旺运", en: "Artisanal Bronze" },
    tagBg: "oklch(0.55 0.12 25)",
    name: { zh: "奇明财神像", en: "Prosperity Deity Sculpture" },
    desc: { zh: "奇明风水专属财神像，招财进宝，事业亨通，镇宅旺财首选", en: "Exclusive artisanal copper sculpture by Tongshifu. A stunning centerpiece blending traditional craftsmanship with modern interior aesthetics." },
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21611776220612_.pic_hd.jpg-hejKHLcxZs2TYWp6aij5M4iQBddg4y.png",
  },
  {
    tag: { zh: "能量提升", en: "Crystal Energy" },
    tagBg: "oklch(0.55 0.08 85)",
    name: { zh: "金发晶能量手串", en: "Golden Rutilated Quartz Bracelet" },
    desc: { zh: "晶体清透，金芒如蜜，招财旺运，提升个人能量场与领导力", en: "Premium natural crystal with golden rutile inclusions. A sophisticated accessory for the modern executive." },
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21891776248833_.pic_hd-yPpIZCn5VO4LwHbLIyYf6dkFYLjQTD.jpg",
  },
  {
    tag: { zh: "财富增长", en: "Collector's Edition" },
    tagBg: "oklch(0.50 0.10 50)",
    name: { zh: "绿幽灵手串", en: "Green Phantom Quartz Bracelet" },
    desc: { zh: "收藏级绿幽灵，幽灵似画，半盆半景，聚财纳福，事业贵人运", en: "Museum-grade crystal with natural landscape inclusions. Each piece is unique — a wearable work of art." },
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21921776249159_.pic_hd-q9xZ26vOaeP8bOyIrZWFnCCCLj1n5S.jpg",
  },
  {
    tag: { zh: "招财纳福", en: "Classic Elegance" },
    tagBg: "oklch(0.60 0.08 65)",
    name: { zh: "黄水晶手链", en: "Citrine & Gold Bead Bracelet" },
    desc: { zh: "通透金黄，配以古法金珠，招财纳福，化解财运阻滞", en: "Transparent citrine paired with traditional gold beads. Timeless elegance meets mindful design." },
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%88%AA%E5%B1%8F2026-04-15%20%E4%B8%8B%E5%8D%886.24.02-pzxyO9PXABn1fiS2Pxh7z48IdWgGSA.png",
  },
  {
    tag: { zh: "福禄寿喜", en: "Oriental Art" },
    tagBg: "oklch(0.45 0.08 25)",
    name: { zh: "精雕葫芦摆件", en: "Artisan Gourd Sculpture" },
    desc: { zh: "精铜手工雕刻葫芦，福禄双全，化解病气煞气，守护家宅平安", en: "Hand-sculpted copper gourd with intricate vine details. A modern oriental art piece for contemporary homes." },
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%88%AA%E5%B1%8F2026-04-15%20%E4%B8%8B%E5%8D%886.26.43-kB5M3sccKa1mQsBpH7786X8VXLPioE.png",
  },
  {
    tag: { zh: "镇宅祥瑞", en: "Decorative Art" },
    tagBg: "oklch(0.50 0.12 30)",
    name: { zh: "醒狮对摆件", en: "Lion Dance Art Pair" },
    desc: { zh: "南狮造型，蓝红双色，镇宅纳福，招财进宝，守护事业兴旺", en: "Handcrafted ceramic lion dance figurines. A vibrant conversation piece celebrating Asian heritage." },
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%88%AA%E5%B1%8F2026-04-15%20%E4%B8%8B%E5%8D%886.24.25-VcTYpGIdDibMZLRfBSHNn5Vbso5Cmp.png",
  },
  {
    tag: { zh: "专业工具", en: "Precision Instrument" },
    tagBg: "oklch(0.50 0.08 220)",
    name: { zh: "奇门遁甲罗盘", en: "Professional Analysis Compass" },
    desc: { zh: "8吋门覆背木综合盘，附鉴定证书，奇门遁甲择时定位专用", en: "8-inch professional compass with authentication certificate. A precision instrument for spatial energy analysis." },
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21631776220998_.pic_hd.jpg-PKkh2dr24Bhq47qG4H7Yr1oMBpIFnS.png",
  },
  {
    tag: { zh: "财源广进", en: "Bronze Art" },
    tagBg: "oklch(0.50 0.10 50)",
    name: { zh: "招财牛金元宝", en: "Prosperity Ox Bronze Sculpture" },
    desc: { zh: "牛气冲天，金元宝堆满，象征财富滚滚来，事业蒸蒸日上", en: "Museum-quality bronze sculpture by Tongshifu. A bold statement piece for executive offices and luxury homes." },
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21551776220031_.pic_hd.jpg-GNpRqM2kWn8vIJ6dVMuaQl1bbVlyvR.png",
  },
  {
    tag: { zh: "能量净化", en: "Wellness Art" },
    tagBg: "oklch(0.45 0.10 150)",
    name: { zh: "满月颂钵", en: "Artisan Singing Bowl" },
    desc: { zh: "纯手工打造，音色悠长纯净，用于空间净化、冥想疗愈、能量调和", en: "Handcrafted singing bowl with pure, resonant tones. A meditative art piece for mindful living spaces." },
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/18891772857810_.pic_hd-7IpbzinFXsFAtEyXAd3V2fVtnsH55k.jpg",
  },
];

const SCENARIOS = [
  {
    icon: "💼",
    titleZh: "事业锦囊",
    titleEn: "Career Booster",
    descZh: "铜师傅貔貅 + 奇门择日布局",
    descEn: "Tongshifu Pixiu + Qimen Timing Layout",
    tagZh: "事业贵人",
    tagEn: "Career Luck",
  },
  {
    icon: "📚",
    titleZh: "学业守护",
    titleEn: "Academic Success",
    descZh: "文昌塔 + 书房风水布局",
    descEn: "Wenchang Pagoda + Study Room Layout",
    tagZh: "金榜题名",
    tagEn: "Exam Success",
  },
  {
    icon: "🏠",
    titleZh: "新居旺运",
    titleEn: "New Home Blessing",
    descZh: "HDB/公寓全屋风水评估 + 能量摆件",
    descEn: "HDB/Condo Full Assessment + Energy Decor",
    tagZh: "搬家首选",
    tagEn: "Moving In",
  },
  {
    icon: "🏪",
    titleZh: "店铺旺财",
    titleEn: "Shop Prosperity",
    descZh: "收银台布局 + 招财神像 + 开业择日",
    descEn: "Cashier Layout + Wealth Deity + Opening Date",
    tagZh: "生意兴隆",
    tagEn: "Business Boom",
  },
];

export default function ProductsSection() {
  const { t } = useLanguage();

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
    }),
  };

  return (
    <section id="products" className="py-24 md:py-32 bg-[oklch(0.95_0.013_75)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-8 flex items-center justify-center text-base font-bold border border-[oklch(0.60_0.08_65)] text-[oklch(0.60_0.08_65)]"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}>
              器
            </span>
            <div className="w-8 h-px bg-[oklch(0.60_0.08_65)]" />
            <span className="text-[0.6rem] tracking-[0.25em] uppercase text-[oklch(0.60_0.08_65)] font-semibold" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
              {t("板块三 · 匠心臻品", "Pillar III · Artisan Collection")}
            </span>
          </div>
          <div className="md:flex md:items-end md:justify-between gap-8">
            <div>
              <h2 className="font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", fontSize: "clamp(2rem, 4.5vw, 3.5rem)", color: "oklch(0.12 0.02 60)" }}>
                {t("能量美学", "Energy Aesthetics")}
              </h2>
              <p className="text-sm text-[oklch(0.50_0.02_65)] max-w-md leading-relaxed" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}>
                {t("既是艺术陈设，也是能量载体。铜师傅艺术品、定制手链、能量法器，让改变真正发生。",
                   "Where modern oriental art meets mindful living. Curated artisanal copper sculptures, premium crystals, and contemporary Asian art pieces for discerning collectors.")}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
              {[{ zh: "能量流动", en: "Energy Flow" }, { zh: "关系修复", en: "Relationship Reset" }, { zh: "财富增长", en: "Wealth Growth" }, { zh: "运势提升", en: "Luck Enhancement" }].map((tag, i) => (
                <span key={i} className="text-[0.6rem] tracking-[0.15em] uppercase px-3 py-1.5 border border-[oklch(0.88_0.018_70)] text-[oklch(0.45_0.02_60)]" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
                  {t(tag.zh, tag.en)}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured Product - God of Wealth */}
        <div className="grid lg:grid-cols-2 gap-px bg-[oklch(0.88_0.018_70)] mb-px">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[oklch(0.12_0.02_60)] p-8 md:p-12 flex flex-col justify-center"
          >
            <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[oklch(0.60_0.08_65)] font-semibold mb-4" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
              {t("镇店之宝", "Signature Piece")}
            </span>
            <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.75 0.06 65)" }}>
              {t("奇明财神像", "Qiming God of Wealth")}
            </h3>
            <p className="text-sm leading-relaxed mb-6" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif", color: "oklch(0.75 0.03 70)" }}>
              {t("奇明风水专属财神像，手持「奇明风水」卷轴，招财进宝，事业亨通。经启明大师开光加持，是镇宅旺财的首选神器。",
                 "Exclusive Qiming Feng Shui God of Wealth statue holding the \"Qiming Feng Shui\" scroll. Blessed by Master Qiming for prosperity, success, and home protection.")}
            </p>
            <a href={WA_PRODUCTS} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase text-[oklch(0.60_0.08_65)] hover:gap-4 transition-all duration-300"
              style={{ fontFamily: "var(--font-lato), sans-serif", letterSpacing: "0.12em" }}>
              {t("咨询请购", "Enquire Now")} <ArrowRight size={14} />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden aspect-square lg:aspect-auto"
          >
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21611776220612_.pic_hd.jpg-hejKHLcxZs2TYWp6aij5M4iQBddg4y.png" 
              alt={t("奇明财神像", "Qiming God of Wealth")}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[oklch(0.88_0.018_70)]">
          {PRODUCTS.slice(1).map((product, i) => (
            <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="bg-[oklch(0.97_0.012_75)] flex flex-col group">
              <div className="relative overflow-hidden aspect-square">
                <img src={product.img} alt={t(product.name.zh, product.name.en)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-3 left-3">
                  <span className="text-[0.55rem] tracking-[0.15em] uppercase px-2 py-1 font-bold"
                    style={{ fontFamily: "var(--font-lato), sans-serif", background: product.tagBg, color: "oklch(0.98 0.005 75)" }}>
                    {t(product.tag.zh, product.tag.en)}
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h4 className="mb-2 font-bold" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", fontSize: "1.05rem", color: "oklch(0.15 0.02 60)" }}>
                  {t(product.name.zh, product.name.en)}
                </h4>
                <p className="text-xs text-[oklch(0.50_0.02_65)] leading-relaxed flex-1 line-clamp-2" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}>
                  {t(product.desc.zh, product.desc.en)}
                </p>
                <a href={WA_PRODUCTS} target="_blank" rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase text-[oklch(0.60_0.08_65)] hover:gap-3 transition-all duration-300"
                  style={{ fontFamily: "var(--font-lato), sans-serif", letterSpacing: "0.1em" }}>
                  {t("咨询", "Enquire")} <ArrowRight size={10} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scenario-Based Packages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 md:mt-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-[oklch(0.60_0.08_65)]" />
            <span className="text-[0.6rem] tracking-[0.25em] uppercase text-[oklch(0.60_0.08_65)] font-semibold" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
              {t("场景化方案", "Curated Solutions")}
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SCENARIOS.map((scenario, i) => (
              <motion.a
                key={i}
                href={WA_PRODUCTS}
                target="_blank"
                rel="noopener noreferrer"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="group p-5 bg-[oklch(0.12_0.02_60)] border border-[oklch(0.20_0.02_60)] hover:border-[oklch(0.60_0.08_65)] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-2xl">{scenario.icon}</span>
                  <span
                    className="text-[0.5rem] tracking-[0.12em] uppercase px-2 py-0.5 bg-[oklch(0.60_0.08_65/0.15)] text-[oklch(0.60_0.08_65)]"
                    style={{ fontFamily: "var(--font-lato), sans-serif" }}
                  >
                    {t(scenario.tagZh, scenario.tagEn)}
                  </span>
                </div>
                <h4
                  className="text-lg font-bold mb-2 text-[oklch(0.95_0.01_75)] group-hover:text-[oklch(0.60_0.08_65)] transition-colors"
                  style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
                >
                  {t(scenario.titleZh, scenario.titleEn)}
                </h4>
                <p
                  className="text-xs text-[oklch(0.60_0.02_70)] leading-relaxed"
                  style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}
                >
                  {t(scenario.descZh, scenario.descEn)}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-bold uppercase text-[oklch(0.60_0.08_65)] opacity-0 group-hover:opacity-100 transition-opacity" style={{ fontFamily: "var(--font-lato), sans-serif", letterSpacing: "0.1em" }}>
                  {t("咨询方案", "Enquire")} <ArrowRight size={10} />
                </div>
              </motion.a>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-[oklch(0.50_0.02_65)]" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}>
            {t("铜师傅 — 中国最大铜文创品牌 · 奇明风水新加坡独家合作伙伴",
               "Tongshifu — China's Premier Artisanal Copper & Bronze Studio · Exclusive Singapore Partner")}
          </p>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-8 text-center text-xs text-[oklch(0.55_0.02_65)] max-w-xl mx-auto" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}>
          {t("* 所有能量器物均经启明大师根据命理与风水需求进行个性化推荐，非标准化销售。",
             "* All auspicious catalysts are personally recommended by Master Qiming based on individual destiny and feng shui needs — not standardized retail.")}
        </motion.p>
      </div>
    </section>
  );
}
