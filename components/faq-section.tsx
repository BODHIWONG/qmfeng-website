"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  qZh: string;
  qEn: string;
  aZh: string;
  aEn: string;
};

export default function FAQSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      qZh: "奇门遁甲咨询和普通风水有什么区别？",
      qEn: "What's the difference between Qimen Dunjia and traditional Feng Shui?",
      aZh: "奇门遁甲是帝王之术，源自诸葛亮、刘伯温等战略家的决策智慧。它不仅分析空间能量，更能精准预测时机、方向和策略，帮助您在商业投资、事业转型等关键决策中把握先机。普通风水主要关注环境布局，而奇门遁甲是时间与空间的综合运筹学。",
      aEn: "Qimen Dunjia is the 'Emperor's Art' — a strategic decision-making system used by legendary strategists like Zhuge Liang. Unlike traditional Feng Shui which focuses on spatial arrangement, Qimen analyzes timing, direction, and strategy to help you make critical business, investment, and career decisions with precision.",
    },
    {
      qZh: "远程咨询和现场咨询效果一样吗？",
      qEn: "Is remote consultation as effective as on-site visits?",
      aZh: "是的。奇门遁甲的核心是时间盘与方位计算，只需您提供准确的出生时间和地址，即可进行精准分析。对于空间净化服务，我们可以通过照片和视频进行初步评估，必要时再安排现场勘察。16年来，我们的远程咨询客户遍布全球，效果与现场咨询同样显著。",
      aEn: "Yes. Qimen Dunjia's core analysis is based on time charts and directional calculations. With your accurate birth time and address, we can provide precise analysis remotely. For space clearing, we can do initial assessment via photos and video, with on-site visits when necessary. Our remote clients worldwide have experienced equally significant results over 16 years.",
    },
    {
      qZh: "咨询需要准备什么资料？",
      qEn: "What information do I need to prepare for consultation?",
      aZh: "请准备：1) 您的出生年月日时（越精确越好）；2) 咨询的具体问题或目标；3) 如涉及空间，请提供地址和照片。首次咨询建议预留60-90分钟，大师会详细解读您的命盘格局和当前运势，并给出可执行的建议。",
      aEn: "Please prepare: 1) Your exact birth date and time; 2) Specific questions or goals for consultation; 3) Address and photos if space-related. First consultations typically take 60-90 minutes, during which Master will analyze your chart, current fortune cycle, and provide actionable recommendations.",
    },
    {
      qZh: "空间能量净化后多久能看到效果？",
      qEn: "How soon can I see results after space energy clearing?",
      aZh: "大多数客户在净化后1-2周内就能感受到明显变化，如睡眠改善、情绪稳定、家庭关系和谐等。商业空间通常在1-3个月内看到客流量和业绩的提升。效果的显现速度也与个人的配合程度有关，遵循大师建议的布局调整会加速改善。",
      aEn: "Most clients notice significant changes within 1-2 weeks — improved sleep, emotional stability, and family harmony. Commercial spaces typically see improvements in foot traffic and business within 1-3 months. Results also depend on how well you follow the recommended adjustments to accelerate improvements.",
    },
    {
      qZh: "如何预约咨询？费用是多少？",
      qEn: "How do I book a consultation? What are the fees?",
      aZh: "请通过WhatsApp联系我们预约。我们提供多种咨询方案：深度洞察（单次咨询）和尊享护航（年度顾问服务）。具体费用会根据您的需求定制，首次咨询我们会详细了解您的情况后提供报价。预约后通常1-3个工作日内安排咨询时间。",
      aEn: "Please contact us via WhatsApp to book. We offer various consultation packages: Deep Insight (single session) and Exclusive Retainer (annual advisory). Fees are customized based on your needs — we'll provide a quote after understanding your situation. Consultations are typically scheduled within 1-3 business days after booking.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[oklch(0.97_0.012_75)]">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[oklch(0.60_0.08_65)]" />
            <span
              className="text-[0.65rem] tracking-[0.25em] uppercase font-semibold"
              style={{ fontFamily: "var(--font-lato), sans-serif", color: "oklch(0.60 0.08 65)" }}
            >
              {t("常见问题", "FAQ")}
            </span>
            <div className="w-8 h-px bg-[oklch(0.60_0.08_65)]" />
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{
              fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
              color: "oklch(0.15 0.02 60)",
            }}
          >
            {t("您可能想了解", "Questions You May Have")}
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-[oklch(0.88_0.018_70)] bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
              >
                <span
                  className="font-medium text-sm md:text-base"
                  style={{
                    fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
                    color: "oklch(0.20 0.02 60)",
                  }}
                >
                  {t(faq.qZh, faq.qEn)}
                </span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 text-[oklch(0.60_0.08_65)] transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div
                      className="px-6 pb-5 text-sm leading-relaxed"
                      style={{
                        fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
                        color: "oklch(0.40 0.02 60)",
                      }}
                    >
                      {t(faq.aZh, faq.aEn)}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
