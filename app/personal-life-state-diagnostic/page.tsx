import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/language-context";
import ServiceDetailTemplate, { type ServicePageContent } from "@/components/service-detail-template";

export const metadata: Metadata = {
  title: "个人运势与状态诊断｜Personal Life-State Diagnostic Singapore",
  description:
    "Personal Luck and Life-State Diagnostic by Qimen Strategy Singapore. A private advisory review for personal momentum, career direction, relationship patterns, energy state and next-step decisions. This is not medical diagnosis.",
  keywords: [
    "Personal Luck Diagnostic Singapore",
    "Life State Diagnostic Singapore",
    "Qimen personal consultation Singapore",
    "个人运势诊断",
    "人生状态诊断",
    "启明遁甲",
    "Qimen Strategy Singapore",
  ],
  alternates: {
    canonical: "https://www.qmfeng.com/personal-life-state-diagnostic",
  },
  openGraph: {
    title: "Personal Luck & Life-State Diagnostic | Qimen Strategy Singapore",
    description:
      "Clarify personal momentum, career direction, relationship patterns, energy state and next-step decisions through Qimen Strategy advisory.",
    url: "https://www.qmfeng.com/personal-life-state-diagnostic",
    type: "website",
  },
};

const content: ServicePageContent = {
  badgeZh: "个人运势与状态诊断",
  badgeEn: "Personal Luck & Life-State Diagnostic",
  pageTitleZh: "个人运势与状态诊断",
  pageTitleEn: "Personal Luck & Life-State Diagnostic",
  heroTitleZh: "当人生状态卡住时，先看清运势节奏与内在结构",
  heroTitleEn: "When life feels stuck, first clarify your momentum and inner structure",
  heroSubtitleZh:
    "启明遁甲通过奇门决策、命理节奏、关系状态、空间环境与现实处境分析，帮助你看清当前人生阶段的主要卡点、风险信号与下一步方向。",
  heroSubtitleEn:
    "Qimen Strategy reviews personal momentum, timing, relationship patterns, environment and real-life context to clarify current blocks, risk signals and the next practical direction.",
  trustPointsZh: ["运势节奏", "事业关系状态", "身心能量消耗", "S$396 起"],
  trustPointsEn: ["Life Momentum", "Career & Relationship State", "Energy Drain Review", "From S$396"],
  priceZh: "S$396 起｜按复杂度确认",
  priceEn: "From S$396 · Scope-Based Pricing",
  symptomsTitleZh: "适合哪些状态？",
  symptomsTitleEn: "Which situations is this for?",
  symptomsZh: [
    "最近事业、财运或人际关系明显不顺。",
    "长期内耗、犹豫、睡眠或精神状态下降。",
    "情感关系反复拉扯，看不清该进还是退。",
    "人生方向不清晰，不知道下一步该如何选择。",
    "感觉家宅或空间状态影响自己。",
    "希望提前看清未来 3–12 个月的风险与机会。"
  ],
  symptomsEn: [
    "Career, wealth or relationships have felt blocked recently.",
    "You feel drained, uncertain, sleepless or mentally exhausted.",
    "A relationship keeps pulling you back and forth.",
    "Your life direction is unclear and the next step feels difficult.",
    "Your home or environment may be affecting your state.",
    "You want to see risks and opportunities across the next 3–12 months."
  ],
  suitableTitleZh: "适合对象",
  suitableTitleEn: "Who This Is For",
  suitableZh: ["事业、感情或人生方向不清晰的人。", "长期内耗、状态下滑或感觉卡住的人。", "希望用一次综合诊断看清当前阶段的人。", "需要在重要决定前先稳定判断的人。"],
  suitableEn: ["People unclear about career, relationship or life direction.", "Clients feeling stuck, drained or unstable.", "Those who want one integrated review of their current phase.", "People who need clearer judgment before an important decision."],
  approachTitleZh: "诊断如何进行？",
  approachTitleEn: "How the diagnostic works",
  approachIntroZh:
    "本诊断重点看清运势节奏、事业财运、关系状态、身心能量消耗、家宅空间影响与下一步选择。它不是医疗诊断，也不替代医生建议。",
  approachIntroEn:
    "This diagnostic reviews personal momentum, career and wealth direction, relationship state, energy drain, environmental influence and next-step decisions. It is not medical diagnosis and does not replace medical advice.",
  steps: [
    { titleZh: "状态梳理", titleEn: "State Briefing", descZh: "了解当前事业、关系、睡眠、情绪与现实处境。", descEn: "Review current career, relationship, sleep, emotion and life context." },
    { titleZh: "运势节奏", titleEn: "Momentum Review", descZh: "判断当前阶段是进、守、调整还是转向。", descEn: "Assess whether this phase supports moving, holding, adjusting or redirecting." },
    { titleZh: "风险与机会", titleEn: "Risk & Opportunity", descZh: "看清未来 3–12 个月的阻力、机会与关键节点。", descEn: "Clarify risks, opportunities and key timing across the next 3–12 months." },
    { titleZh: "行动方向", titleEn: "Action Direction", descZh: "整理更清晰、现实、可执行的下一步建议。", descEn: "Provide clearer, realistic and actionable next-step guidance." }
  ],
  casesTitleZh: "常见诊断方向",
  casesTitleEn: "Common Diagnostic Directions",
  cases: [
    { titleZh: "事业卡点", titleEn: "Career Block", bodyZh: "看清当前事业停滞背后的时机、方向与人事结构。", bodyEn: "Clarify timing, direction and people dynamics behind career stagnation." },
    { titleZh: "关系拉扯", titleEn: "Relationship Pull", bodyZh: "判断关系实质、消耗点与下一步处理方向。", bodyEn: "Review relationship nature, emotional drain and next-step direction." },
    { titleZh: "状态下滑", titleEn: "State Decline", bodyZh: "观察内耗、空间、节奏与决策状态之间的关系。", bodyEn: "Review how inner drain, environment and rhythm affect decision state." }
  ],
  faqTitleZh: "常见问题",
  faqTitleEn: "FAQ",
  faqs: [
    {
      qZh: "这是身体健康检查吗？",
      qEn: "Is this a medical health check?",
      aZh: "不是。本服务不属于医疗诊断，不判断疾病，也不替代医生建议。它是人生状态、运势节奏、能量消耗与决策方向的综合评估。",
      aEn: "No. This is not medical diagnosis, does not assess disease and does not replace medical advice. It is an advisory review of life state, momentum, energy drain and decision direction.",
    },
    {
      qZh: "费用如何确认？",
      qEn: "How is the fee confirmed?",
      aZh: "个人运势与状态诊断 S$396 起。若涉及复杂情感关系、婚姻、多方关系或后续顾问支持，将根据范围确认费用。",
      aEn: "Personal Luck & Life-State Diagnostic starts from S$396. Complex relationship, marriage, multi-party or follow-up advisory cases are scoped separately.",
    },
    {
      qZh: "需要准备什么？",
      qEn: "What should I prepare?",
      aZh: "请先说明当前最主要的问题、近期状态、想判断的方向与必要背景。",
      aEn: "Please share your main issue, current state, decision area and relevant background.",
    },
  ],
  ctaTitleZh: "先看清状态，再决定下一步",
  ctaTitleEn: "Clarify your state before deciding the next step",
  ctaBodyZh: "个人运势与状态诊断适合正在经历事业、关系、情绪、空间或人生方向卡点的人。基础诊断 S$396 起。",
  ctaBodyEn: "Personal Luck & Life-State Diagnostic is suitable for people facing blocks in career, relationships, emotion, environment or life direction. Entry diagnostic starts from S$396.",
  waTextZh: "你好，启明遁甲 Qimen Strategy，我想预约个人运势与状态诊断。",
  waTextEn: "Hello Qimen Strategy, I would like to book a Personal Luck and Life-State Diagnostic."
};

export default function PersonalLifeStateDiagnosticPage() {
  return (
    <LanguageProvider>
      <ServiceDetailTemplate content={content} />
    </LanguageProvider>
  );
}
