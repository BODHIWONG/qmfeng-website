"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

const cases = [
  {
    num: "01",
    titleZh: "HDB 新组屋 · 转运格局",
    titleEn: "New HDB Unit · Layout Alignment",
    descZh: "一位住户搬入新HDB后，长期感到疲惫无力，家人之间也容易紧张。启明大师结合八字与居家格局判断，发现卧室与休息区的能量支持不足，建议调整床位、文昌位与关键能量点。三个月后，客户反馈睡眠与精神状态明显改善，家庭氛围也更稳定。",
    descEn: "A family moved into a new HDB unit and began feeling constantly tired, with tension increasing at home. Master Qiming reviewed the Bazi and home layout, identifying weak energetic support around the bedroom and rest areas. After adjusting the bed position, Wenchang area, and key energy points, the client reported noticeably better rest, improved energy, and a calmer family atmosphere after three months.",
    metricLabelZh: "客户反馈",
    metricLabelEn: "Client Feedback",
    metricZh: "睡眠、精神状态与家庭氛围明显改善",
    metricEn: "Better rest, stronger energy and calmer home atmosphere",
  },
  {
    num: "02",
    titleZh: "中心商业区 · 办公室旺财",
    titleEn: "CBD Office · Business Feng Shui Alignment",
    descZh: "一家创业型企业在中心商业区租赁办公室后，业务推进一度停滞。启明大师现场勘察后，发现办公室动线与收气位置不利于聚财与决策稳定，随后调整办公桌、收纳区与负责人位置，并结合八字选择更适合的贵人方位。调整后，客户反馈团队状态更稳，客户沟通与业务推进明显顺畅。",
    descEn: "A startup in the CBD experienced business stagnation after moving into a new office. During the site assessment, Master Qiming found that the office flow and energy collection points were not supporting wealth gathering or stable decision-making. After repositioning desks, storage areas, and the founder’s working position based on Bazi and Noble Person direction, the client reported steadier team rhythm, smoother client communication, and improved business momentum.",
    metricLabelZh: "可观察变化",
    metricLabelEn: "Observed Shift",
    metricZh: "团队节奏、客户沟通与业务势能改善",
    metricEn: "Improved team rhythm, client communication and business momentum",
  },
  {
    num: "03",
    titleZh: "豪宅能量净化 · 情感疗愈",
    titleEn: "Luxury Residence · Space Energy Purification",
    descZh: "一位高净值客户的住宅装修精致，但入住后家人容易争执，业主也长期感到压抑。启明大师通过奇门遁甲与空间能量判断，定位宅内的滞重区域与生机区域，并择吉日进行空间能量净化与布局调整。处理后，客户反馈空间压迫感明显减轻，家人相处更放松，整体气场更安定。",
    descEn: "A high-net-worth client lived in a beautifully renovated residence, yet the family often argued and the owner felt emotionally heavy at home. Using Qi Men Dun Jia and space energy assessment, Master Qiming identified stagnant zones and supportive vitality areas, then selected an auspicious date for space energy purification and layout adjustment. The client later reported that the home felt lighter, calmer, and more comfortable for the family.",
    metricLabelZh: "真实反馈",
    metricLabelEn: "Real Feedback",
    metricZh: "空间压迫感减轻，家庭相处更放松",
    metricEn: "Lighter space, calmer family interaction and greater comfort",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function CasesSection() {
  const { t } = useLanguage();

  return (
    <section id="cases" className="py-20 md:py-32 bg-[oklch(0.98_0.01_70)]">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20 max-w-2xl"
        >
          <p className="text-[0.6rem] tracking-[0.25em] uppercase mb-4 font-semibold text-[oklch(0.60_0.08_65)]" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
            {t("案例见证", "Case Studies")}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.15_0.02_60)" }}>
            {t("真实反馈，稳健见证", "Real Feedback, Grounded Results")}
          </h2>
          <p className="text-base leading-relaxed text-[oklch(0.50_0.02_65)]" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}>
            {t(
              "以下案例来自真实咨询经验，重点呈现客户在睡眠、情绪、家庭氛围、事业节奏与空间感受上的反馈。我们更重视可感知、可持续的改善，而不是夸张承诺。",
              "These cases are drawn from real consultation experience, focusing on client feedback around rest, emotional state, family atmosphere, business rhythm, and spatial comfort. We value grounded, observable improvement rather than exaggerated promises."
            )}
          </p>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="group"
            >
              <div className="bg-white p-8 h-full flex flex-col border border-[oklch(0.25_0.02_60)]">
                {/* Case Number */}
                <div
                  className="text-6xl font-bold mb-6 opacity-15"
                  style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.60_0.08_65)" }}
                >
                  {c.num}
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold mb-4 leading-snug" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.15_0.02_60)" }}>
                  {t(c.titleZh, c.titleEn)}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-6 text-[oklch(0.45_0.02_60)] flex-grow" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}>
                  {t(c.descZh, c.descEn)}
                </p>

                {/* Feedback */}
                <div className="border-t border-[oklch(0.90_0.01_70)] pt-4">
                  <p className="text-base md:text-lg font-bold mb-2" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.60_0.08_65)" }}>
                    {t(c.metricLabelZh, c.metricLabelEn)}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[oklch(0.55_0.02_65)]" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
                    {t(c.metricZh, c.metricEn)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
