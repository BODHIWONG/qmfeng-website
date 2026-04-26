"use client";

import { useLanguage } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";
import QimingSystemSection from "@/components/qiming-system-section";
import {
  ArrowRight,
  CheckCircle2,
  Home,
  Moon,
  HeartPulse,
  Sparkles,
  ShieldCheck,
  Compass,
  MessageCircle,
} from "lucide-react";

const WA_LINK =
  "https://wa.me/6589418791?text=Hello%20Master%20Qiming%2C%20I%20would%20like%20to%20consult%20about%20space%20energy%20purification.";

const corePoints = [
  {
    icon: Sparkles,
    zh: "感知空间中的滞重与压迫",
    en: "Sense stagnant and heavy spatial energy",
  },
  {
    icon: ShieldCheck,
    zh: "净化长期积累的不安与混乱",
    en: "Clear accumulated unease and disorder",
  },
  {
    icon: Compass,
    zh: "调和人与空间之间的能量关系",
    en: "Harmonise the relationship between people and space",
  },
];

const values = [
  {
    icon: Home,
    titleZh: "空间重新清明",
    titleEn: "A clearer and lighter space",
    bodyZh:
      "有些空间外表很好，却让人一进去就感到沉重、压抑或不安。空间能量净化帮助空间恢复清明、安定与舒适感。",
    bodyEn:
      "Some spaces look beautiful but feel heavy, uneasy or draining. Space energy purification helps restore a clearer, calmer and more comfortable field.",
  },
  {
    icon: Moon,
    titleZh: "睡眠与情绪更安定",
    titleEn: "More stable rest and emotions",
    bodyZh:
      "许多客户反馈，净化后睡眠更安稳，内心更踏实，原本紧张、害怕或焦躁的状态有所减轻。",
    bodyEn:
      "Many clients report steadier sleep, calmer emotions and a reduced sense of fear, tension or restlessness after the clearing.",
  },
  {
    icon: HeartPulse,
    titleZh: "生活重新有支持感",
    titleEn: "Life feels supported again",
    bodyZh:
      "空间不再持续消耗人，而是重新成为支持休息、关系、事业判断与日常行动力的力量场。",
    bodyEn:
      "A space should not keep draining its occupants. It should support rest, relationships, judgment and daily momentum.",
  },
];

const cases = [
  {
    titleZh: "实录一｜长期紧绷与睡眠不稳后的反馈",
    titleEn: "Record 01｜Feedback after long-term tension and unstable rest",
    bodyZh:
      "一位六十多岁的女士长期感觉身体紧绷，夜间休息也不安稳。启明大师判断其居住空间后，为她进行空间能量净化与气场调和。客户第二天早上专程前来表达感谢，反馈当晚休息明显变好，整个人感觉轻松了许多。",
    bodyEn:
      "A lady in her sixties had long felt physical tension and unstable rest at night. After Master Qiming assessed her living space and performed space energy purification and field harmonisation, she returned the next morning to express gratitude. She shared that her rest had improved and that she felt noticeably lighter and more relaxed.",
  },
  {
    titleZh: "实录二｜家中压迫感与恐惧感减轻",
    titleEn: "Record 02｜Reduced fear and heaviness at home",
    bodyZh:
      "另一位女士长期觉得家中有压迫感，晚上不敢关灯，睡眠浅，容易醒，精神状态也影响到工作。空间能量净化后，她反馈家里的感觉明显变了，内心不再那么害怕，当晚睡得更安稳，第二天精神状态明显提升。",
    bodyEn:
      "Another client felt persistent heaviness at home, was afraid to sleep in the dark, woke frequently and felt her work energy declining. After the space clearing, she reported that the home felt different, her fear reduced, she slept more peacefully that night and felt more energised the next day.",
  },
  {
    titleZh: "实录三｜长期沉重感后的身心状态反馈",
    titleEn: "Record 03｜Renewed energy after long-term heaviness",
    bodyZh:
      "曾有一位女士因多年前的意外，长期感觉身心状态沉重，精神面貌也逐渐下降。启明大师根据她的个人状态与居住空间气场进行净化调整后，客户反馈整个人感觉更轻松，站立与行动状态更自然，脸色与精神状态也变得更好。",
    bodyEn:
      "A client who had experienced an accident years earlier felt long-term heaviness and lowered vitality. After Master Qiming adjusted the space according to her personal condition and the home’s energy field, she reported feeling lighter, more natural in movement and visibly more refreshed in spirit.",
  },
];

const symptoms = [
  {
    zh: "搬入某个空间后，睡眠明显变差",
    en: "Sleep worsened after moving into a space",
  },
  {
    zh: "家中长期有压抑感、沉重感或不安感",
    en: "The home feels heavy, oppressive or unsettling",
  },
  {
    zh: "晚上容易害怕，不敢关灯，睡眠浅",
    en: "Fear at night, difficulty sleeping in darkness or light sleep",
  },
  {
    zh: "家人之间容易争执，关系长期紧张",
    en: "Family arguments or long-term relational tension",
  },
  {
    zh: "人在家中总是疲惫、无力、心烦",
    en: "Feeling tired, weak or irritated at home",
  },
  {
    zh: "办公室或店铺气场沉滞，业务推进不顺",
    en: "Office or shop feels stagnant and business momentum is blocked",
  },
];

export default function SpaceEnergyPurificationPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[oklch(0.97_0.012_75)]">
      <Navbar />

      <main>
        <section className="relative overflow-hidden border-b border-[oklch(0.88_0.018_70)] bg-[oklch(0.08_0.02_60)] pt-32 pb-20 text-white md:pt-40 md:pb-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(218,165,70,0.16),transparent_36%),radial-gradient(circle_at_82%_82%,rgba(218,165,70,0.10),transparent_34%)]" />
          <div className="container relative z-10">
            <div className="mx-auto max-w-5xl text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[oklch(0.72_0.12_70)]">
                {t("奇明風水核心能力", "Core Capability of QiMing Feng Shui")}
              </p>

              <h1
                className="mb-6 text-4xl font-bold leading-tight md:text-6xl"
                style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
              >
                {t(
                  "空间能量净化与生命场域调和",
                  "Space Energy Purification & Life Field Harmonisation"
                )}
              </h1>

              <p className="mx-auto mb-9 max-w-3xl text-base leading-8 text-white/78 md:text-lg">
                {t(
                  "源于黄启明大师多年奇门遁甲、风水布局、八字命理与能量修行的实证经验，帮助有缘人从沉重、压抑与不安中，重新回到清明、安定、有力量的生命状态。",
                  "Rooted in Master Huang Qiming’s years of practical experience in Qi Men Dun Jia, Feng Shui layout, Bazi and energy cultivation, this work helps people move from heaviness, pressure and unease back into a clearer, calmer and stronger state of life."
                )}
              </p>

              <div className="mb-9 flex flex-wrap justify-center gap-3">
                {[
                  t("源于修行", "Rooted in Cultivation"),
                  t("成于实证", "Built Through Real Cases"),
                  t("安定身心", "Stabilising Body and Mind"),
                  t("利益大众", "Serving the Greater Good"),
                ].map((item) => (
                  <span
                    key={item}
                    className="border border-[oklch(0.72_0.12_70/0.30)] bg-black/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[oklch(0.82_0.09_70)]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[oklch(0.72_0.12_70)] px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[oklch(0.08_0.02_60)] transition hover:opacity-90"
              >
                <MessageCircle size={18} />
                {t("预约空间能量净化咨询", "Book Space Energy Consultation")}
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[oklch(0.60_0.08_65)]">
                  {t("不是普通空间清理", "Not Ordinary Space Cleaning")}
                </p>
                <h2
                  className="mb-5 text-3xl font-bold leading-tight md:text-5xl"
                  style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.15 0.02 60)" }}
                >
                  {t(
                    "空间清明，人心才容易清明",
                    "When the space becomes clear, the heart can settle"
                  )}
                </h2>
                <p className="text-base leading-8 text-[oklch(0.42_0.02_60)]">
                  {t(
                    "空间不只是人居住或工作的地方。它也承载着情绪、睡眠、关系、事业状态与生命能量。真正的空间能量净化，不是制造神秘，而是通过对空间气场、居住者状态、时间方位与环境结构的综合判断，让空间重新恢复清明、稳定与支持力。",
                    "A space is not merely where people live or work. It also carries emotion, rest, relationships, career rhythm and life energy. True space purification is not about creating mystery; it is a holistic reading of spatial energy, occupants’ states, timing, direction and environmental structure, so the space can regain clarity, stability and support."
                  )}
                </p>
              </div>

              <div className="grid gap-4">
                {corePoints.map((item) => (
                  <div key={item.zh} className="flex items-start gap-4 border border-[oklch(0.88_0.018_70)] bg-white p-5 shadow-sm">
                    <item.icon className="mt-1 shrink-0 text-[oklch(0.60_0.08_65)]" size={22} />
                    <p className="text-base font-semibold leading-7 text-[oklch(0.20_0.02_60)]">
                      {t(item.zh, item.en)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <QimingSystemSection />

        <section className="bg-white py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-5xl text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[oklch(0.60_0.08_65)]">
                {t("三大核心价值", "Three Core Values")}
              </p>
              <h2
                className="mb-10 text-3xl font-bold md:text-5xl"
                style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.15 0.02 60)" }}
              >
                {t("让空间重新支持你，而不是继续消耗你", "Let the space support you, not drain you")}
              </h2>

              <div className="grid gap-6 md:grid-cols-3">
                {values.map((item) => (
                  <div key={item.titleZh} className="border border-[oklch(0.88_0.018_70)] p-7 text-left">
                    <item.icon className="mb-5 text-[oklch(0.60_0.08_65)]" size={28} />
                    <h3
                      className="mb-3 text-2xl font-bold"
                      style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.15 0.02 60)" }}
                    >
                      {t(item.titleZh, item.titleEn)}
                    </h3>
                    <p className="text-sm leading-7 text-[oklch(0.42_0.02_60)]">
                      {t(item.bodyZh, item.bodyEn)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="purification-records" className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-6xl">
              <div className="mb-10 max-w-3xl">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[oklch(0.60_0.08_65)]">
                  {t("启明大师空间净化实录", "Master Qiming Space Purification Records")}
                </p>
                <h2
                  className="mb-5 text-3xl font-bold leading-tight md:text-5xl"
                  style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.15 0.02 60)" }}
                >
                  {t(
                    "不是夸大承诺，而是长期实证中被看见的变化",
                    "Not exaggerated promises, but changes observed through real experience"
                  )}
                </h2>
                <p className="text-sm leading-8 text-[oklch(0.42_0.02_60)] md:text-base">
                  {t(
                    "以下实录以客户反馈方式呈现，重点记录空间压迫感、睡眠、情绪与精神状态的变化。空间能量净化并不替代医疗或专业治疗，但许多客户在空间调整后，确实感受到身心状态与居住体验的改善。",
                    "The following records are presented as client feedback, focusing on changes in spatial heaviness, sleep, emotion and energy level. Space energy purification does not replace medical care or professional treatment, but many clients report meaningful improvements in how they feel and live in the space."
                  )}
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {cases.map((item, index) => (
                  <div key={item.titleZh} className="border border-[oklch(0.88_0.018_70)] bg-white p-6">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-[oklch(0.60_0.08_65)]">
                      {`Record 0${index + 1}`}
                    </p>
                    <h3
                      className="mb-4 text-2xl font-bold leading-tight"
                      style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.15 0.02 60)" }}
                    >
                      {t(item.titleZh, item.titleEn)}
                    </h3>
                    <p className="text-sm leading-7 text-[oklch(0.42_0.02_60)]">
                      {t(item.bodyZh, item.bodyEn)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-5xl">
              <h2
                className="mb-8 text-3xl font-bold md:text-5xl"
                style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.15 0.02 60)" }}
              >
                {t("什么情况下适合做空间能量净化？", "When is space energy purification suitable?")}
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                {symptoms.map((item) => (
                  <div key={item.zh} className="flex items-start gap-3 border border-[oklch(0.88_0.018_70)] p-5">
                    <CheckCircle2 className="mt-1 shrink-0 text-[oklch(0.60_0.08_65)]" size={18} />
                    <p className="text-sm leading-7 text-[oklch(0.42_0.02_60)] md:text-[15px]">
                      {t(item.zh, item.en)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[oklch(0.08_0.02_60)] py-16 text-white md:py-24">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[oklch(0.72_0.12_70)]">
                {t("核心品牌语", "Core Brand Message")}
              </p>
              <h2
                className="mb-6 text-3xl font-bold leading-tight md:text-5xl"
                style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
              >
                {t(
                  "通过空间场域的净化与调和，帮助人重新回到安定、清明、有力量的生命状态。",
                  "Through purification and harmonisation of the spatial field, help people return to a calmer, clearer and stronger state of life."
                )}
              </h2>
              <p className="mx-auto mb-9 max-w-2xl text-sm leading-8 text-white/70 md:text-base">
                {t(
                  "如果你长期感觉家中压抑、睡眠不稳、情绪不安，或事业与生活状态在某个空间中持续下滑，也许不是你不够努力，而是你所处的空间正在持续消耗你。",
                  "If your home feels heavy, your rest is unstable, your emotions feel unsettled, or your life and work keep declining in a certain space, the issue may not be a lack of effort — the space may be continuously draining you."
                )}
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[oklch(0.72_0.12_70)] px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[oklch(0.08_0.02_60)] transition hover:opacity-90"
              >
                {t("WhatsApp 预约空间净化", "Book on WhatsApp")}
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
