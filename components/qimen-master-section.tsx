"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import {
  Clock3,
  ShieldCheck,
  Brain,
  Building2,
  ArrowRight,
  MessageCircle,
  Compass,
  Users,
} from "lucide-react";
import Link from "next/link";

const gold = "oklch(0.72 0.12 70)";
const FOUNDER_IMAGE = "/master-qiming-about.jpg";
const WA_LINK =
  "https://wa.me/6589593499?text=Hello%20Qimen%20Strategy%2C%20I%20would%20like%20to%20arrange%20a%20private%20consultation.%20My%20current%20situation%20is%3A";

const qimenPoints = [
  {
    icon: Clock3,
    zh: "判断时机",
    en: "Timing",
    descZh: "看清现在适合推进、等待、调整还是转向。",
    descEn: "Clarify whether to move, wait, adjust or redirect.",
  },
  {
    icon: Compass,
    zh: "判断方向",
    en: "Direction",
    descZh: "在多个选择中看清更适合的行动方向。",
    descEn: "See the more suitable direction among several options.",
  },
  {
    icon: Users,
    zh: "判断人事",
    en: "People",
    descZh: "识别合作、团队与关系中的助力和阻力。",
    descEn: "Review support and resistance within partnerships, teams and relationships.",
  },
];

const trustItems = [
  {
    icon: Brain,
    zh: "16+年奇门遁甲实战经验",
    en: "16+ Years of Practical Qi Men Dun Jia",
    descZh: "长期处理个人、事业、关系与企业决策场景。",
    descEn: "Long-term practical work across personal, career, relationship and business decisions.",
  },
  {
    icon: Building2,
    zh: "18年企业运营与管理经验",
    en: "18 Years of Business Operations Experience",
    descZh: "理解企业主在现金流、人事、合作、扩张与执行中的现实压力。",
    descEn: "Practical understanding of cash flow, people, partnerships, growth and execution pressure.",
  },
  {
    icon: ShieldCheck,
    zh: "咨询与教学双重实践",
    en: "Advisory and Practical Education",
    descZh: "将实战经验用于私密咨询，也整理为系统化奇门遁甲课程。",
    descEn: "Applying practical experience in private advisory and structured Qi Men education.",
  },
];

export default function QimenMasterSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-black py-20 text-white md:py-28">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, oklch(0.72 0.12 70 / 0.55), transparent)" }}
      />
      <div className="absolute -top-40 right-1/4 h-80 w-80 rounded-full bg-[oklch(0.72_0.12_70/0.08)] blur-3xl" />

      <div className="container relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="mb-4 text-xs uppercase tracking-[0.28em]"
              style={{ fontFamily: "var(--font-lato), sans-serif", color: gold }}
            >
              {t("启明老师｜启明遁甲创始人", "Huang Qiming · Founder of Qimen Strategy")}
            </p>

            <h2
              className="mb-5 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
              style={{
                fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
                color: "oklch(0.98 0.01 75)",
              }}
            >
              {t(
                "既理解奇门盘面，也理解现实经营与人生选择",
                "Practical Qi Men Insight Grounded in Real Business and Life Decisions"
              )}
            </h2>

            <p
              className="max-w-2xl text-base leading-relaxed md:text-lg"
              style={{
                fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
                color: "oklch(0.76 0.025 70)",
              }}
            >
              {t(
                "黄启明拥有16年以上奇门遁甲实战经验与18年企业运营管理经验。启明遁甲的重点不是提供一句模糊答案，而是在客户面对重要选择时，帮助其看清当前局势并找到更清晰的下一步。",
                "Huang Qiming brings more than 16 years of practical Qi Men Dun Jia experience and 18 years of business operations and management experience. Qimen Strategy focuses on helping clients see the current situation more clearly before an important decision."
              )}
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {qimenPoints.map((item) => (
                <div
                  key={item.zh}
                  className="rounded-2xl border border-[oklch(0.72_0.12_70/0.20)] bg-[oklch(0.09_0.018_60/0.78)] p-4 backdrop-blur"
                >
                  <item.icon className="mb-3 text-[oklch(0.72_0.12_70)]" size={21} />
                  <p className="mb-1 text-sm font-semibold text-[oklch(0.94_0.015_75)]">
                    {t(item.zh, item.en)}
                  </p>
                  <p className="text-xs leading-relaxed text-[oklch(0.68_0.02_70)]">
                    {t(item.descZh, item.descEn)}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full px-7 py-3 text-sm font-bold text-black transition hover:opacity-90"
                style={{ background: gold }}
              >
                <MessageCircle size={18} />
                {t("WhatsApp私密咨询", "WhatsApp Private Consultation")}
              </a>
              <Link
                href="/founder"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[oklch(0.72_0.12_70/0.45)] px-7 py-3 text-sm font-bold text-[oklch(0.88_0.08_70)] transition hover:bg-[oklch(0.72_0.12_70/0.10)]"
              >
                {t("了解创始人", "About the Founder")}
                <ArrowRight size={17} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-lg overflow-hidden rounded-[2rem] border border-[oklch(0.72_0.12_70/0.25)] bg-[oklch(0.08_0.018_60)] shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
              <img
                src={FOUNDER_IMAGE}
                alt={t("启明老师｜启明遁甲创始人", "Huang Qiming, Founder of Qimen Strategy")}
                className="aspect-[4/5] w-full object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-6 md:p-7">
                <p
                  className="text-2xl font-semibold text-[oklch(0.98_0.01_75)]"
                  style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
                >
                  {t("黄启明", "Huang Qiming")}
                </p>
                <p className="mt-2 text-sm font-semibold tracking-wide text-[oklch(0.78_0.10_70)]">
                  {t("启明遁甲创始人｜企业战略决策顾问", "Founder of Qimen Strategy · Business Strategic Advisor")}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/70">
                  {t("16+年奇门遁甲实战经验", "16+ Years of Practical Qi Men Dun Jia")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 grid gap-4 md:grid-cols-3"
        >
          {trustItems.map((item) => (
            <div
              key={item.zh}
              className="rounded-2xl border border-[oklch(0.72_0.12_70/0.18)] bg-[oklch(0.08_0.018_60)] p-5"
            >
              <item.icon className="mb-4 text-[oklch(0.72_0.12_70)]" size={22} />
              <p className="mb-1 font-semibold text-[oklch(0.94_0.015_75)]">
                {t(item.zh, item.en)}
              </p>
              <p className="text-sm leading-relaxed text-[oklch(0.66_0.02_70)]">
                {t(item.descZh, item.descEn)}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
