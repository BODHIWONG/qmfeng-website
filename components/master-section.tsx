"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

const MASTER_PHOTO = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21541776220030_.pic_hd.jpg-6V5qFhJBRIsH83yzddW0fPuXqELuBa.png";
const QIMEN_COMPASS = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21711776224675_.pic_hd.jpg-e4KblAWrbDj5x5doZNK2XS1KduaUCr.png";
const WA_LINK = "https://wa.me/message/55HSHDNBMWPLA1";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export default function MasterSection() {
  const { lang, t } = useLanguage();

  const credentials = lang === "zh"
    ? [
        { label: "清华大学积极心理学指导师", note: "融合科学心智模型与传统命理智慧", highlight: true },
        { label: "16+年奇门遁甲实战", note: "将古法转化为现代可落地系统" },
        { label: "能量心理调频疗法创始人", note: "情感疗愈与风水结合的独特方法", highlight: true },
        { label: "商业旺财布局专家", note: "直接影响业绩与团队士气" },
        { label: "人生命局解析", note: "看清机会、规避风险、把握时机" },
      ]
    : [
        { label: "Tsinghua University Positive Psychology Practitioner", note: "Integrating scientific mental frameworks with traditional metaphysics", highlight: true },
        { label: "16+ Years Qimen Dunjia Expertise", note: "Traditional wisdom applied to modern challenges" },
        { label: "Founder of Energy-Psychology Alignment Method", note: "A unique fusion of emotional healing and Feng Shui", highlight: true },
        { label: "Business Growth Strategy Expert", note: "Directly impact bottom line and team morale" },
        { label: "Life Purpose Analysis", note: "Identify opportunities, mitigate risks, seize timing" },
      ];

  const disciplines = lang === "zh"
    ? ["神机妙算", "远程布局", "精准判断", "高效决策"]
    : ["Strategic Insight", "Tailored Solutions", "Evidence-Based Approach", "Lasting Impact"];

  return (
    <section id="master" className="py-24 md:py-32 bg-[oklch(0.97_0.012_75)]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Image */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative"
          >
            <div className="relative overflow-hidden aspect-[4/5]">
              <img
                src={MASTER_PHOTO}
                alt={t("黄启明大师", "Master Huang Qiming")}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute top-4 left-4 right-4 bottom-4 border border-[oklch(0.60_0.08_65/0.3)] pointer-events-none" />
            </div>

            {/* Floating stats */}
            <div className="absolute bottom-8 left-8 right-8 bg-[oklch(0.15_0.02_60/0.92)] backdrop-blur-sm p-5">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-[oklch(0.75_0.06_65)]" style={{ fontFamily: "var(--font-cormorant), serif" }}>16+</p>
                  <p className="text-[0.6rem] text-[oklch(0.65_0.01_75)] uppercase tracking-wider mt-0.5" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
                    {t("年实战", "Years")}
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[oklch(0.75_0.06_65)]" style={{ fontFamily: "var(--font-cormorant), serif" }}>100%</p>
                  <p className="text-[0.6rem] text-[oklch(0.65_0.01_75)] uppercase tracking-wider mt-0.5" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
                    {t("客户满意", "Satisfaction")}
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[oklch(0.75_0.06_65)]" style={{ fontFamily: "var(--font-cormorant), serif" }}>3+</p>
                  <p className="text-[0.6rem] text-[oklch(0.65_0.01_75)] uppercase tracking-wider mt-0.5" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
                    {t("年企业合作", "Yr Partnerships")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="space-y-8">
            <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-px bg-[oklch(0.60_0.08_65)]" />
                <span className="text-[0.6rem] tracking-[0.25em] uppercase text-[oklch(0.60_0.08_65)] font-semibold" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
                  {t("关于启明大师", "About Master Qiming")}
                </span>
              </div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.15 0.02 60)" }}
              >
                {lang === "zh" ? (
                  <>黄启明<em className="text-[oklch(0.60_0.08_65)] not-italic"> 大师</em></>
                ) : (
                  <>Master <em className="text-[oklch(0.60_0.08_65)] not-italic">Huang Qiming</em></>
                )}
              </h2>
              
              {/* Text + Compass Image Layout */}
              <div className="grid md:grid-cols-[1fr,auto] gap-6 items-start">
                <p className="text-base text-[oklch(0.35_0.02_60)] leading-relaxed" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}>
                  {t(
                    "启明大师是新加坡少数同时拥有清华大学积极心理学认证与16年传统玄学实战经验的导师。他开创的「能量心理调频」疗法，将科学心智模型与奇门遁甲、风水命理深度融合，不仅调整空间能量，更从根本上重塑您的心灵状态与人生轨迹。",
                    "Master Huang is one of the few practitioners in Singapore certified in both Tsinghua University's Positive Psychology programme and traditional Chinese metaphysics with 16+ years of hands-on experience. His pioneering 'Energy-Psychology Alignment' method integrates scientific mental frameworks with Qimen Dunjia and Feng Shui, transforming not only your spatial energy but fundamentally reshaping your mental state and life trajectory."
                  )}
                </p>
                {/* Qimen Compass - 神与器相得益彰 */}
                <div className="relative w-40 md:w-48 aspect-square shrink-0 mx-auto md:mx-0">
                  <img 
                    src={QIMEN_COMPASS} 
                    alt={t("奇门遁甲综合盘", "Qimen Dunjia Compass")}
                    className="w-full h-full object-cover rounded-sm shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-[oklch(0.15_0.02_60)] text-[oklch(0.75_0.06_65)] text-[0.55rem] px-2 py-1 tracking-widest uppercase" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
                    {t("帝王之器", "Imperial Tool")}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Credentials */}
            <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[oklch(0.60_0.08_65)] mb-4" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
                {t("资质认证", "Credentials")}
              </h3>
              <div className="space-y-3">
                {credentials.map((cred, i) => (
                  <div 
                    key={i} 
                    className={`flex items-start gap-4 py-3 border-b last:border-0 ${
                      cred.highlight 
                        ? "border-[oklch(0.45_0.08_145/0.3)] bg-[oklch(0.45_0.04_145/0.06)] -mx-3 px-3 rounded-sm" 
                        : "border-[oklch(0.92_0.015_70)]"
                    }`}
                  >
                    <span className={`text-sm mt-0.5 ${cred.highlight ? "text-[oklch(0.45_0.12_145)]" : "text-[oklch(0.60_0.08_65)]"}`}>
                      {cred.highlight ? "★" : "✦"}
                    </span>
                    <div>
                      <p 
                        className={`text-sm font-semibold ${cred.highlight ? "text-[oklch(0.30_0.05_145)]" : "text-[oklch(0.20_0.02_60)]"}`} 
                        style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}
                      >
                        {cred.label}
                      </p>
                      <p className="text-xs text-[oklch(0.55_0.02_65)] mt-0.5" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
                        {cred.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Disciplines */}
            <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[oklch(0.60_0.08_65)] mb-4" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
                {t("服务理念", "Service Philosophy")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {disciplines.map((d, i) => (
                  <span key={i} className="text-xs px-3 py-1.5 border border-[oklch(0.88_0.018_70)] text-[oklch(0.35_0.02_60)]" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}>
                    {d}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:opacity-90"
                style={{ fontFamily: "var(--font-lato), sans-serif", background: "oklch(0.60 0.08 65)", color: "oklch(0.98 0.005 75)", letterSpacing: "0.12em" }}
              >
                {t("深度洞察", "Deep Insight")}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
