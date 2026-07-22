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

const gold = "oklch(0.72 0.12 70)";
const FOUNDER_IMAGE = "/master-qiming-about.jpg";
const WA_LINK =
  "https://wa.me/6589593499?text=Hello%20Qimen%20Strategy%2C%20I%20would%20like%20to%20book%20a%20private%20Qi%20Men%20Dun%20Jia%20business%20decision%20advisory%20session.";

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
    descZh: "在多个选择中看清哪条路径更顺势。",
    descEn: "See which path is more aligned among multiple options.",
  },
  {
    icon: Users,
    zh: "判断人事",
    en: "People",
    descZh: "识别合作、团队、谈判中的助力与消耗。",
    descEn: "Read support and resistance within partnerships, teams and negotiations.",
  },
];

const trustItems = [
  {
    icon: Brain,
    zh: "16 年奇门遁甲实战与企业决策经验",
    en: "16 Years of Practical Qi Men Dun Jia & Business Advisory",
    descZh: "长期服务企业主与个人关键决策，并将实战经验整理为系统化课程。",
    descEn: "Supporting business owners and individuals at critical decisions, while developing structured practical courses from real experience.",
  },
  {
    icon: Building2,
    zh: "两家企业 18 年稳健运营实战背书",
    en: "Two Businesses Operating Steadily for 18 Years",
    descZh: "长期参与真实企业经营与决策，更理解现金流、合作、人事与扩张压力。",
    descEn: "Long-term involvement in real business operations and decision-making, with understanding of cash flow, partnership, people and expansion pressure.",
  },
  {
    icon: ShieldCheck,
    zh: "企业顾问与奇门实战教学双路径",
    en: "Strategic Advisory & Practical Qi Men Teaching",
    descZh: "一方面服务企业关键决策，另一方面通过系统课程、案例与练习培养学员。",
    descEn: "Supporting key business decisions while developing learners through structured courses, cases and practical exercises.",
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
              {t("启明老师｜启明遁甲决策智库创始人", "Mr.Qiming · Founder, Qimen Strategy")}
            </p>

            <h2
              className="mb-5 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
              style={{
                fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
                color: "oklch(0.98 0.01 75)",
              }}
            >
              {t(
                "16 年奇门遁甲实战经验，连接企业决策与系统教学",
                "16 Years of Practical Qi Men Dun Jia Across Business Advisory and Teaching"
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
                "启明老师以奇门遁甲为核心决策方法，结合真实企业经营经验，帮助企业主与个人在关键行动前看清时机、方向、人事关系与局势结构；同时将多年实战经验整理为以系统框架、案例分析和实际练习为核心的奇门遁甲实战课程。",
                "Mr.Qiming applies Qi Men Dun Jia as a strategic decision method, combining real business operating experience to help business owners and individuals read timing, direction, people dynamics and situation structure before important moves. He also develops practical Qi Men Dun Jia courses centred on structured frameworks, case analysis and guided exercises."
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

            <div className="mt-8 rounded-2xl border border-[oklch(0.72_0.12_70/0.22)] bg-[linear-gradient(135deg,oklch(0.10_0.02_60/0.92),oklch(0.065_0.018_60/0.92))] p-6">
              <h3
                className="mb-3 text-2xl font-semibold"
                style={{
                  fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
                  color: "oklch(0.96 0.01 75)",
                }}
              >
                {t("关于启明老师", "About Mr.Qiming")}
              </h3>
              <p className="text-sm leading-relaxed text-[oklch(0.74_0.025_70)] md:text-base">
                {t(
                  "启明老师拥有 16 年奇门遁甲实战与企业决策经验，长期参与两家已稳健运营 18 年企业的经营与决策，并为多家企业提供战略决策顾问支持。如今，他同时主讲奇门遁甲实战课程，通过系统框架、案例拆解、练习与复盘，帮助学员逐步建立基础读局和实际应用能力。",
                  "Mr.Qiming brings 16 years of practical Qi Men Dun Jia and business advisory experience. He has long been involved in the operation and decision-making of two businesses that have operated steadily for 18 years, and has advised multiple companies on strategic decisions. He also teaches practical Qi Men Dun Jia courses through structured frameworks, case breakdowns, guided exercises and review."
                )}
              </p>
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
                {t("预约私密奇门决策咨询", "Book Private Qi Men Advisory")}
              </a>
              <a
                href="/qi-men-dun-jia-course-singapore"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[oklch(0.72_0.12_70/0.45)] px-7 py-3 text-sm font-bold text-[oklch(0.88_0.08_70)] transition hover:bg-[oklch(0.72_0.12_70/0.10)]"
              >
                {t("查看奇门遁甲实战课程", "View Practical Qi Men Courses")}
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
                alt={t("启明老师｜启明遁甲决策智库创始人", "Mr.Qiming, Founder of Qimen Strategy")}
                className="aspect-[4/5] w-full object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-6 md:p-7">
                <p
                  className="text-2xl font-semibold text-[oklch(0.98_0.01_75)]"
                  style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
                >
                  {t("启明老师", "Mr.Qiming")}
                </p>
                <p className="mt-2 text-sm font-semibold tracking-wide text-[oklch(0.78_0.10_70)]">
                  {t(
                    "启明遁甲决策智库创始人｜奇门遁甲实战课程主讲｜企业决策顾问",
                    "Founder · Practical Qi Men Dun Jia Instructor · Business Decision Advisor"
                  )}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/70">
                  {t("16 年奇门遁甲实战经验", "16 Years of Practical Qi Men Dun Jia")}
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
