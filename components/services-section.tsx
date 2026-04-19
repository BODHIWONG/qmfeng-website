"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

const WA_LINK = "https://wa.me/message/55HSHDNBMWPLA1";

// 服务图标 - 使用SVG实现浮雕金属效果
const CompassIcon = () => (
  <svg viewBox="0 0 64 64" className="w-14 h-14">
    <defs>
      <linearGradient id="metalGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d4a853" />
        <stop offset="50%" stopColor="#c9a45c" />
        <stop offset="100%" stopColor="#a67c3d" />
      </linearGradient>
      <filter id="emboss">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur" />
        <feOffset in="blur" dx="1" dy="1" result="offsetBlur" />
        <feComposite in="SourceGraphic" in2="offsetBlur" operator="over" />
      </filter>
    </defs>
    <circle cx="32" cy="32" r="28" fill="none" stroke="url(#metalGold)" strokeWidth="2" filter="url(#emboss)" />
    <circle cx="32" cy="32" r="22" fill="none" stroke="url(#metalGold)" strokeWidth="1.5" />
    <path d="M32 12 L35 30 L32 52 L29 30 Z" fill="url(#metalGold)" filter="url(#emboss)" />
    <path d="M12 32 L30 29 L52 32 L30 35 Z" fill="url(#metalGold)" opacity="0.7" />
    <circle cx="32" cy="32" r="4" fill="url(#metalGold)" />
  </svg>
);

const CoinIcon = () => (
  <svg viewBox="0 0 64 64" className="w-14 h-14">
    <defs>
      <linearGradient id="metalGold2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d4a853" />
        <stop offset="50%" stopColor="#c9a45c" />
        <stop offset="100%" stopColor="#a67c3d" />
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="26" fill="none" stroke="url(#metalGold2)" strokeWidth="3" />
    <rect x="26" y="26" width="12" height="12" fill="none" stroke="url(#metalGold2)" strokeWidth="2" />
    <text x="32" y="20" textAnchor="middle" fill="url(#metalGold2)" fontSize="8" fontFamily="serif">招</text>
    <text x="32" y="52" textAnchor="middle" fill="url(#metalGold2)" fontSize="8" fontFamily="serif">財</text>
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 64 64" className="w-14 h-14">
    <defs>
      <linearGradient id="metalGold3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d4a853" />
        <stop offset="50%" stopColor="#c9a45c" />
        <stop offset="100%" stopColor="#a67c3d" />
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="26" fill="none" stroke="url(#metalGold3)" strokeWidth="2.5" />
    <circle cx="32" cy="32" r="22" fill="none" stroke="url(#metalGold3)" strokeWidth="1" />
    <line x1="32" y1="32" x2="32" y2="16" stroke="url(#metalGold3)" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="32" y1="32" x2="44" y2="32" stroke="url(#metalGold3)" strokeWidth="2" strokeLinecap="round" />
    <circle cx="32" cy="32" r="3" fill="url(#metalGold3)" />
    {/* 12点 */}
    <line x1="52" y1="32" x2="55" y2="32" stroke="url(#metalGold3)" strokeWidth="2" />
    {/* 3点 */}
    <line x1="32" y1="52" x2="32" y2="55" stroke="url(#metalGold3)" strokeWidth="2" />
    {/* 6点 */}
    <line x1="12" y1="32" x2="9" y2="32" stroke="url(#metalGold3)" strokeWidth="2" />
    {/* 9点 */}
    <line x1="32" y1="12" x2="32" y2="9" stroke="url(#metalGold3)" strokeWidth="2" />
    {/* 其他刻度 */}
    <line x1="49.32" y1="22" x2="51.46" y2="20.76" stroke="url(#metalGold3)" strokeWidth="1" />
    <line x1="42" y1="14.68" x2="43.24" y2="12.54" stroke="url(#metalGold3)" strokeWidth="1" />
    <line x1="22" y1="14.68" x2="20.76" y2="12.54" stroke="url(#metalGold3)" strokeWidth="1" />
    <line x1="14.68" y1="22" x2="12.54" y2="20.76" stroke="url(#metalGold3)" strokeWidth="1" />
    <line x1="14.68" y1="42" x2="12.54" y2="43.24" stroke="url(#metalGold3)" strokeWidth="1" />
    <line x1="22" y1="49.32" x2="20.76" y2="51.46" stroke="url(#metalGold3)" strokeWidth="1" />
    <line x1="42" y1="49.32" x2="43.24" y2="51.46" stroke="url(#metalGold3)" strokeWidth="1" />
    <line x1="49.32" y1="42" x2="51.46" y2="43.24" stroke="url(#metalGold3)" strokeWidth="1" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 64 64" className="w-14 h-14">
    <defs>
      <linearGradient id="metalGold4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d4a853" />
        <stop offset="50%" stopColor="#c9a45c" />
        <stop offset="100%" stopColor="#a67c3d" />
      </linearGradient>
    </defs>
    <path
      d="M32 6 L54 16 L54 32 C54 46 32 58 32 58 C32 58 10 46 10 32 L10 16 Z"
      fill="none"
      stroke="url(#metalGold4)"
      strokeWidth="2.5"
    />
    <path
      d="M32 14 L48 22 L48 32 C48 42 32 50 32 50 C32 50 16 42 16 32 L16 22 Z"
      fill="none"
      stroke="url(#metalGold4)"
      strokeWidth="1"
      opacity="0.6"
    />
    <path d="M26 32 L30 36 L40 26" stroke="url(#metalGold4)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

type ServiceItem = {
  icon: React.ReactNode;
  titleZh: string;
  titleEn: string;
  descZh: string;
  descEn: string;
  waMsg: string;
};

export default function ServicesSection() {
  const { t } = useLanguage();

  const services: ServiceItem[] = [
    {
      icon: <CompassIcon />,
      titleZh: "财富旺运规划",
      titleEn: "Wealth & Prosperity Planning",
      descZh: "八字 + 奇门遁甲 + 风水布局\n打造你的专属旺财系统，实现财富增长",
      descEn: "Bazi + Qimen Dunjia + Feng Shui Layout\nBuild your personal wealth system for financial growth",
      waMsg: "Hi Master Huang, I'm interested in Wealth & Prosperity Planning consultation.",
    },
    {
      icon: <ShieldIcon />,
      titleZh: "风险预警防护",
      titleEn: "Risk Forecast & Protection",
      descZh: "提前识别潜在风险，避免重大损失\n将不确定变为可控",
      descEn: "Identify potential risks early, avoid major losses\nTurn uncertainty into control",
      waMsg: "Hi Master Huang, I'm interested in Risk Forecast & Protection consultation.",
    },
    {
      icon: <CoinIcon />,
      titleZh: "战略决策分析",
      titleEn: "Strategic Decision Analysis",
      descZh: "精准判断投资时机 / 合伙人 / 项目可行性\n让每一个决策更有把握",
      descEn: "Precise timing for investments / partners / project viability\nMake every decision with confidence",
      waMsg: "Hi Master Huang, I'm interested in Strategic Decision Analysis consultation.",
    },
    {
      icon: <ClockIcon />,
      titleZh: "择时启动策略",
      titleEn: "Timing Strategy & Activation",
      descZh: "签约 / 开业 / 投资最佳时机选择\n让关键节点事半功倍",
      descEn: "Optimal timing for contracts / openings / investments\nMaximize results at key moments",
      waMsg: "Hi Master Huang, I'm interested in Timing Strategy & Activation consultation.",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="services"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, oklch(0.96 0.01 75), oklch(0.94 0.015 70))",
      }}
    >
      {/* 宣纸纹理背景 */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 太极阴阳背景图案 */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] opacity-[0.06]">
          {/* 外圈 */}
          <circle cx="100" cy="100" r="95" fill="none" stroke="oklch(0.45 0.05 60)" strokeWidth="0.5" />
          {/* 阴阳主体 */}
          <path d="M100 5 A95 95 0 0 1 100 195 A47.5 47.5 0 0 1 100 100 A47.5 47.5 0 0 0 100 5" fill="oklch(0.25 0.02 60)" />
          <path d="M100 5 A95 95 0 0 0 100 195 A47.5 47.5 0 0 0 100 100 A47.5 47.5 0 0 1 100 5" fill="oklch(0.88 0.02 70)" />
          {/* 阴阳眼 */}
          <circle cx="100" cy="52.5" r="12" fill="oklch(0.88 0.02 70)" />
          <circle cx="100" cy="147.5" r="12" fill="oklch(0.25 0.02 60)" />
          {/* 八卦线条 */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <line
              key={i}
              x1={100 + 70 * Math.cos((angle * Math.PI) / 180)}
              y1={100 + 70 * Math.sin((angle * Math.PI) / 180)}
              x2={100 + 95 * Math.cos((angle * Math.PI) / 180)}
              y2={100 + 95 * Math.sin((angle * Math.PI) / 180)}
              stroke="oklch(0.45 0.05 60)"
              strokeWidth="0.3"
            />
          ))}
        </svg>
      </div>

      <div className="container relative z-10">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="w-12 h-px bg-[oklch(0.60_0.08_65)]" />
            <span
              className="text-xs tracking-[0.3em] uppercase text-[oklch(0.50_0.08_65)] font-bold"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              {t("核心服务", "Core Services")}
            </span>
            <div className="w-12 h-px bg-[oklch(0.60_0.08_65)]" />
          </div>

          <h2
            className="font-bold leading-tight"
            style={{
              fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              color: "oklch(0.15 0.02 60)",
              letterSpacing: "0.02em",
            }}
          >
            {t("以术驭势，掌控人生格局", "Master Your Destiny with Ancient Wisdom")}
          </h2>
        </motion.div>

        {/* 四大服务 - 2x2 网格 */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="group relative bg-white/80 backdrop-blur-sm border border-[oklch(0.85_0.02_70)] p-8 hover:shadow-xl hover:border-[oklch(0.70_0.06_65)] transition-all duration-500"
            >
              {/* 角落装饰 */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[oklch(0.65_0.08_65)] opacity-60" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[oklch(0.65_0.08_65)] opacity-60" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[oklch(0.65_0.08_65)] opacity-60" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[oklch(0.65_0.08_65)] opacity-60" />

              <div className="flex items-start gap-5">
                {/* 图标 */}
                <div className="flex-shrink-0 p-2 bg-gradient-to-br from-[oklch(0.95_0.01_75)] to-[oklch(0.90_0.02_70)] rounded-lg shadow-inner">
                  {service.icon}
                </div>

                {/* 内容 */}
                <div className="flex-1 min-w-0">
                  <h3
                    className="font-bold mb-1 text-lg md:text-xl"
                    style={{
                      fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
                      color: "oklch(0.20 0.02 60)",
                    }}
                  >
                    {t(service.titleZh, service.titleEn)}
                  </h3>

                  <p
                    className="text-sm leading-relaxed whitespace-pre-line"
                    style={{
                      fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
                      color: "oklch(0.40 0.02 60)",
                    }}
                  >
                    {t(service.descZh, service.descEn)}
                  </p>

                  {/* 预约咨询按钮 */}
                  <a
                    href={`https://wa.me/message/55HSHDNBMWPLA1?text=${encodeURIComponent(service.waMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-4 px-4 py-1.5 text-xs tracking-widest uppercase border border-[oklch(0.60_0.08_65)] text-[oklch(0.50_0.06_65)] hover:bg-[oklch(0.60_0.08_65)] hover:text-white transition-all duration-300"
                    style={{ fontFamily: "var(--font-lato), sans-serif" }}
                  >
                    {t("预约咨询", "Book Now")}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 底部提示 */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-12 text-center text-xs text-[oklch(0.50_0.03_65)] max-w-xl mx-auto"
          style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}
        >
          {t(
            "所有咨询均为预约制，启明大师会根据您的实际情况，量身定制最适合的服务方案。",
            "All consultations are by appointment. Master Qiming will tailor the most suitable service plan based on your specific situation."
          )}
        </motion.p>
      </div>
    </section>
  );
}
