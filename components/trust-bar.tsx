"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

const stats = [
  { valueZh: "16+年", valueEn: "16+ Years", labelZh: "奇门遁甲实战经验", labelEn: "Qi Men Dun Jia Practice" },
  { valueZh: "18年", valueEn: "18 Years", labelZh: "企业经营实战背书", labelEn: "Enterprise Management Background" },
  { valueZh: "多家", valueEn: "Multiple", labelZh: "企业战略决策顾问", labelEn: "Business Decision Advisory" },
  { valueZh: "中英", valueEn: "EN / CN", labelZh: "新加坡预约咨询", labelEn: "Singapore Consultation" },
];

export default function TrustBar() {
  const { t } = useLanguage();

  return (
    <section className="border-y border-[oklch(0.18_0.02_60)] bg-[oklch(0.08_0.02_60)] py-6 md:py-8">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-2"
            >
              <span
                className="text-xl font-bold md:text-2xl"
                style={{
                  fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
                  color: "oklch(0.72 0.12 70)",
                }}
              >
                {t(stat.valueZh, stat.valueEn)}
              </span>
              <span
                className="text-xs md:text-sm"
                style={{
                  fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
                  color: "oklch(0.55 0.02 70)",
                }}
              >
                {t(stat.labelZh, stat.labelEn)}
              </span>
              {i < stats.length - 1 && (
                <span className="ml-6 hidden text-[oklch(0.30_0.02_60)] md:inline">|</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
