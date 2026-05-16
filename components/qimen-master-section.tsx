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
const MASTER_IMAGE = "/master-qiming-about.jpg";
const WA_LINK =
  "https://wa.me/6589418791?text=Hello%20Master%20Qiming%2C%20I%20would%20like%20to%20book%20a%20private%20Qimen%20Strategy%20briefing.";

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
    zh: "16 年奇门决策实战经验",
    en: "16 Years of Qimen Decision Practice",
    descZh: "长期服务企业主与个人关键决策，聚焦时机、方向、人事与风险判断。",
    descEn: "Serving business owners and individuals facing critical decisions, with focus on timing, direction, people and risk.",
  },
  {
    icon: Building2,
    zh: "16 年企业运营与决策服务经验",
    en: "16 Years of Business Operation Experience",
    descZh: "理解真实商业中的合作、投资、转型、团队与行动成本。",
    descEn: "Understanding real-world business partnership, investment, transition, team and action cost.",
  },
  {
    icon: ShieldCheck,
    zh: "私密预约制咨询",
    en: "Confidential Advisory",
    descZh: "重大决策先沟通背景，再进行私密奇门决策判断。",
    descEn: "High-stakes decisions begin with context briefing and confidential Qimen Strategy review.",
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
              {t("黄启明大师 · 启明遁甲", "Master Huang Qiming · Qimen Strategy")}
            </p>

            <h2
              className="mb-5 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
              style={{
                fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
                color: "oklch(0.98 0.01 75)",
              }}
            >
              {t(
                "把奇门遁甲，转化为现代关键决策前的战略判断",
                "Translating Qi Men Dun Jia into Strategic Judgment Before Critical Decisions"
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
                "启明遁甲以奇门决策咨询为核心，帮助企业主与个人在关键行动前，看清时机、方向、人事关系与局势风险，减少盲目试错。",
                "Qimen Strategy focuses on Qimen decision advisory, helping business owners and individuals read timing, direction, people dynamics and risk before important moves."
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
                {t("关于黄启明大师", "About Master Huang Qiming")}
              </h3>
              <p className="text-sm leading-relaxed text-[oklch(0.74_0.025_70)] md:text-base">
                {t(
                  "黄启明大师拥有 16 年奇门决策实战经验，结合 16 年企业运营与关键决策服务经验，帮助企业主与个人在重要行动前看清时机、方向、人事关系与局势风险。启明遁甲的核心，不是替客户决定，而是帮助客户看清局势、识别风险、建立更清醒的下一步判断。",
                  "Master Huang Qiming brings 16 years of practical Qimen decision advisory experience, combined with 16 years of business operation and critical decision service experience, helping business owners and individuals gain clarity on timing, direction, people dynamics and risk before important decisions. Qimen Strategy does not decide for clients; it helps them see the situation, recognise risk and make clearer next-step judgments."
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
                {t("预约私密奇门决策咨询", "Book Private Qimen Strategy Session")}
              </a>
              <a
                href="/qimen-strategy-business"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[oklch(0.72_0.12_70/0.45)] px-7 py-3 text-sm font-bold text-[oklch(0.88_0.08_70)] transition hover:bg-[oklch(0.72_0.12_70/0.10)]"
              >
                {t("查看启明遁甲顾问方案", "View Qimen Strategy Programs")}
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
                src={MASTER_IMAGE}
                alt="Master Huang Qiming Qimen Strategy Singapore"
                className="aspect-[4/5] w-full object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-6 md:p-7">
                <p
                  className="text-2xl font-semibold text-[oklch(0.98_0.01_75)]"
                  style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
                >
                  {t("黄启明大师", "Master Huang Qiming")}
                </p>
                <p className="mt-2 text-sm font-semibold tracking-wide text-[oklch(0.78_0.10_70)]">
                  {t(
                    "启明遁甲 · 战略智慧决策方法",
                    "Qimen Strategy · Strategic Wisdom Decision Method"
                  )}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/70">
                  {t("16 年奇门决策实战经验", "16 Years of Qimen Decision Practice")}
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
