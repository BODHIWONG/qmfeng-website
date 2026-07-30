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
  TriangleAlert,
} from "lucide-react";

const gold = "oklch(0.72 0.12 70)";
const FOUNDER_IMAGE = "/master-qiming-about.jpg";
const WA_LINK =
  "https://wa.me/6589593499?text=Hello%20Qimen%20Strategy%2C%20I%20would%20like%20to%20enquire%20about%20a%20private%20consultation.";

const qimenPoints = [
  {
    icon: Clock3,
    zh: "判断时机",
    en: "Timing",
    descZh: "看清现在适合进、守、等，还是转向。",
    descEn: "Understand whether to move, hold, wait or redirect.",
  },
  {
    icon: Compass,
    zh: "判断方向",
    en: "Direction",
    descZh: "在多个选择中看清哪条路径更值得推进。",
    descEn: "See which path is more worth pursuing among multiple options.",
  },
  {
    icon: Users,
    zh: "判断人事",
    en: "People",
    descZh: "识别关系、合作、团队与谈判中的助力和阻力。",
    descEn: "Read support and resistance in relationships, partnerships, teams and negotiations.",
  },
  {
    icon: TriangleAlert,
    zh: "识别风险",
    en: "Risk",
    descZh: "在行动前看见潜在阻力、代价与需要防范的问题。",
    descEn: "Identify potential resistance, trade-offs and issues to manage before acting.",
  },
];

const trustItems = [
  {
    icon: Brain,
    zh: "16+ 年奇门遁甲实战",
    en: "16+ Years of Practical Qi Men Dun Jia",
    descZh: "长期以奇门遁甲应用于个人选择、事业发展与重要决策场景。",
    descEn: "Long-term practical application of Qi Men Dun Jia to personal choices, career direction and important decisions.",
  },
  {
    icon: Building2,
    zh: "18 年企业经营与管理经验",
    en: "18 Years of Business Operations & Management",
    descZh: "来自真实经营现场，更理解企业主面对经营、人事、合作与发展选择时的现实压力。",
    descEn: "Grounded in real operating experience and the pressures founders face around business, people, partnerships and growth decisions.",
  },
  {
    icon: ShieldCheck,
    zh: "新加坡 · 私密一对一咨询",
    en: "Singapore-Based · Private 1-to-1 Advisory",
    descZh: "服务个人、创业者与企业主，可安排 Bedok 面谈或线上咨询。",
    descEn: "Private advisory for individuals, founders and business owners, available in Bedok or online.",
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
              {t("黄启明｜启明遁甲决策智库创始人 · 战略决策顾问", "Huang Qiming · Founder & Strategic Decision Advisor")}
            </p>

            <h2
              className="mb-5 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
              style={{
                fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
                color: "oklch(0.98 0.01 75)",
              }}
            >
              {t(
                "来自真实经营现场的奇门决策智慧",
                "Practical Qi Men Wisdom, Grounded in Real Business Experience"
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
                "16+ 年奇门遁甲实战，18 年企业经营与管理经验。启明服务个人、创业者与企业主，在面对感情、事业、生意及人生重大选择时，从时机、方向、人事与风险四个维度梳理局势，帮助客户在重要行动前看得更清楚、决定得更稳健。",
                "With 16+ years of practical Qi Men Dun Jia and 18 years of business operations and management experience, Qiming works with individuals, founders and business owners facing important decisions in relationships, career, business and life — examining timing, direction, people and risk before action."
              )}
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
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
                {t("预约一对一咨询", "Book a Private Consultation")}
              </a>
              <a
                href="/qi-men-dun-jia-course-singapore"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[oklch(0.72_0.12_70/0.45)] px-7 py-3 text-sm font-bold text-[oklch(0.88_0.08_70)] transition hover:bg-[oklch(0.72_0.12_70/0.10)]"
              >
                {t("查看奇门遁甲实战课程", "Explore Qi Men Courses")}
                <ArrowRight size={17} />
              </a>
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
                alt={t("黄启明｜启明遁甲决策智库创始人及战略决策顾问", "Huang Qiming, Founder and Strategic Decision Advisor at Qimen Strategy")}
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
                  {t(
                    "启明遁甲决策智库创始人｜战略决策顾问｜奇门遁甲实战课程主讲",
                    "Founder · Strategic Decision Advisor · Practical Qi Men Dun Jia Instructor"
                  )}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/70">
                  {t("16+ 年奇门遁甲实战 · 18 年企业经营管理", "16+ Years Qi Men Practice · 18 Years Business & Management")}
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
