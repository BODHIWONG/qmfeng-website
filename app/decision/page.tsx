import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/language-context";
import ServiceDetailTemplate from "@/components/service-detail-template";
import { decisionPageContent } from "@/lib/service-page-data";

const qiMenDecisionPageContent = {
  ...decisionPageContent,
  badgeZh: "奇门决策 · 关键判断",
  badgeEn: "Qi Men Strategy · Critical Decisions",
  pageTitleZh: "奇门决策 · 看清为什么卡住",
  pageTitleEn: "Qi Men Strategy · See Why You Are Stuck",
  heroTitleZh: "奇门决策不是算命，是帮你看清现在为什么卡住",
  heroTitleEn: "Qi Men Strategy Is Not Fortune Telling — It Helps You See Why You Are Stuck",
  heroSubtitleZh:
    "奇门决策不是算命，是帮你看清现在为什么卡住，以及下一步该怎么走。无论是事业、合作、投资、婚姻、店铺经营还是人生转折，黄启明大师通过奇门遁甲结合现实格局分析，帮助你看清时机、方向、人事、风险与下一步行动。",
  heroSubtitleEn:
    "Qi Men Strategy is not fortune telling. It helps you see why you are stuck now, and what your next move should be. Whether the issue is career, partnership, investment, marriage, business direction, or a major life transition, Master Huang Qiming uses Qi Men Dun Jia with real-world pattern analysis to clarify timing, direction, people, risk, and the next practical step.",
  trustPointsZh: ["奇门决策", "16+ 年经验", "企业与个人重大决策辅助", "$388 起"],
  trustPointsEn: ["Qi Men Strategy", "16+ Years Experience", "Business and Personal Decisions", "From $388"],
  symptomsTitleZh: "你是否正卡在这些关键问题里？",
  symptomsTitleEn: "Are you stuck in one of these key situations?",
  approachTitleZh: "奇门决策如何帮你看清下一步？",
  approachTitleEn: "How does Qi Men Strategy help you see the next move?",
  approachIntroZh:
    "启明大师不是替你盲目做决定，而是帮助你看清：为什么现在会卡住、当下是否适合推进、哪条路径更顺势、哪些人事和空间因素正在消耗你，以及下一步应该进、守、转向还是等待。",
  approachIntroEn:
    "Master Qiming does not make blind decisions for you. He helps you see why you are stuck, whether the current timing supports action, which path is more aligned, what people or spatial factors may be draining you, and whether your next move should be to advance, hold, redirect, or wait.",
  ctaTitleZh: "先看清为什么卡住，再决定下一步怎么走",
  ctaTitleEn: "See why you are stuck first, then decide your next move",
  ctaBodyZh:
    "很多人不是不努力，而是长期困在错误的时机、方向、人事关系或空间格局里。奇门决策帮助你先看清局势，再做更稳、更清醒的选择。",
  ctaBodyEn:
    "Many people are not lacking effort. They are caught for too long in the wrong timing, direction, people dynamics, or spatial pattern. Qi Men Strategy helps you see the situation first, then make a steadier and clearer decision.",
  waTextZh: "你好启明大师，我想咨询奇门决策，想看清现在为什么卡住，以及下一步该怎么走。",
  waTextEn: "Hello Master Qiming, I would like to consult about Qi Men Strategy and understand why I am stuck and what my next move should be.",
  priceZh: "$388 起",
  priceEn: "From $388",
  faqs: [
    {
      qZh: "奇门决策是算命吗？",
      qEn: "Is Qi Men Strategy fortune telling?",
      aZh: "不是。奇门决策不是算命，是帮你看清现在为什么卡住，以及下一步该怎么走。重点不是迷信结果，而是判断时机、方向、人事、风险和可执行的下一步。",
      aEn: "No. Qi Men Strategy is not fortune telling. It helps you see why you are stuck now and what your next move should be. The focus is not superstition, but timing, direction, people, risk, and practical next steps.",
    },
    ...decisionPageContent.faqs.map((faq) => ({
      ...faq,
      aZh: faq.aZh.replace("$288", "$388"),
      aEn: faq.aEn.replace("$288", "$388"),
    })),
  ],
};

export const metadata: Metadata = {
  title: "奇门决策不是算命｜看清为什么卡住｜Qi Men Strategy Singapore",
  description:
    "奇门决策不是算命，是帮你看清现在为什么卡住，以及下一步该怎么走。QiMing Feng Shui Singapore provides Qi Men Strategy consultation for career, business, partnerships, investment, marriage, property, Feng Shui layout and major life decisions. Led by Master Huang Qiming with 16+ years of Qi Men Dun Jia and Feng Shui practice.",
  keywords: [
    "奇门决策不是算命",
    "奇门决策",
    "奇门风水",
    "Qi Men Strategy Singapore",
    "Qi Men decision consultation",
    "Qi Men Dun Jia Singapore",
    "Master Huang Qiming",
    "Qiming Feng Shui",
    "Singapore Feng Shui",
    "Feng Shui alignment",
    "strategic decision consultation",
  ],
  alternates: {
    canonical: "https://www.qmfeng.com/decision",
  },
  openGraph: {
    title: "奇门决策不是算命 | Qi Men Strategy Singapore",
    description:
      "Qi Men Strategy helps you see why you are stuck now and what your next move should be. For career, business, relationships, investments and Feng Shui decisions in Singapore.",
    url: "https://www.qmfeng.com/decision",
    type: "website",
  },
};

export default function DecisionPage() {
  return (
    <LanguageProvider>
      <ServiceDetailTemplate content={qiMenDecisionPageContent} />
    </LanguageProvider>
  );
}
