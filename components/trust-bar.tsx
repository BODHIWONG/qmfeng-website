"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

const stats = [
  { valueZh: "16+年", valueEn: "16+ Years", labelZh: "奇门遁甲实战经验", labelEn: "Qi Men Dun Jia Practice" },
  { valueZh: "18年", valueEn: "18 Years", labelZh: "企业经营与管理经验", labelEn: "Business Operations Experience" },
  { valueZh: "私密制", valueEn: "Private", labelZh: "企业主与高管顾问", labelEn: "Founder & Executive Advisory" },
  { valueZh: "每周", valueEn: "Weekly", labelZh: "周末奇门课程", labelEn: "Weekend Qi Men Courses" },
];

export default function TrustBar() {
  const { t } = useLanguage();

  return (
    <section className="border-y border-[oklch(0.18_0.02_60)] bg-[oklch(0.08_0.02_60)] py-6 md:py-8">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-14">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.labelEn}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-center gap-2"
            >
              <span
                className="text-xl font-bold md:text-2xl"
                style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.72 0.12 70)" }}
              >
                {t(stat.valueZh, stat.valueEn)}
              </span>
              <span
                className="text-xs md:text-sm"
                style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif", color: "oklch(0.58 0.02 70)" }}
              >
                {t(stat.labelZh, stat.labelEn)}
              </span>
              {index < stats.length - 1 && <span className="ml-6 hidden text-[oklch(0.30_0.02_60)] md:inline">|</span>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
