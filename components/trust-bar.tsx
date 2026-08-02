"use client";

import { motion } from "framer-motion";
import { Building2, BriefcaseBusiness, MapPin, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

const trustItems = [
  {
    icon: ShieldCheck,
    valueZh: "16+年",
    valueEn: "16+ Years",
    labelZh: "奇门遁甲实战经验",
    labelEn: "Practical Qi Men Experience",
  },
  {
    icon: BriefcaseBusiness,
    valueZh: "18年",
    valueEn: "18 Years",
    labelZh: "企业运营与管理经验",
    labelEn: "Business Operations Experience",
  },
  {
    icon: Building2,
    valueZh: "新加坡注册公司",
    valueEn: "Singapore Registered Company",
    labelZh: "正规经营与清晰服务边界",
    labelEn: "Established Local Business",
  },
  {
    icon: MapPin,
    valueZh: "私密一对一",
    valueEn: "Private 1-to-1",
    labelZh: "Bedok面谈或线上咨询",
    labelEn: "Bedok or Online Consultation",
  },
];

export default function TrustBar() {
  const { t } = useLanguage();

  return (
    <section aria-label={t("信任与专业资历", "Trust and professional credentials")} className="border-y border-[oklch(0.18_0.02_60)] bg-[oklch(0.08_0.02_60)] py-7 md:py-9">
      <div className="container">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.valueEn}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="flex items-start gap-3 border border-white/8 bg-white/[0.025] px-4 py-4"
              >
                <Icon className="mt-0.5 shrink-0 text-[#d6ad63]" size={20} />
                <div>
                  <p
                    className="text-base font-bold leading-tight text-[#f4dfb0] md:text-lg"
                    style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
                  >
                    {t(item.valueZh, item.valueEn)}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/55 md:text-sm">
                    {t(item.labelZh, item.labelEn)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
