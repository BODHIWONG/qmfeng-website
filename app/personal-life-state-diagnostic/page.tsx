import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/language-context";
import ServiceDetailTemplate, { type ServicePageContent } from "@/components/service-detail-template";

export const metadata: Metadata = {
  title: "个人重大决策咨询｜Personal Major Decision Advisory Singapore",
  description:
    "Personal Major Decision Advisory by Qimen Strategy Singapore. A private Qi Men Dun Jia consultation for career direction, relationship choices, relocation, investment, family decisions and life-state clarity before major action.",
  keywords: [
    "Personal Major Decision Advisory Singapore",
    "Qi Men Dun Jia personal consultation Singapore",
    "career decision consultation Singapore",
    "relationship decision consultation Singapore",
    "life direction consultation Singapore",
    "个人重大决策咨询",
    "奇门决策咨询",
    "人生方向咨询",
    "启明遁甲",
    "Qimen Strategy Singapore",
  ],
  alternates: {
    canonical: "https://www.qmfeng.com/personal-life-state-diagnostic",
  },
  openGraph: {
    title: "Personal Major Decision Advisory | Qimen Strategy Singapore",
    description:
      "Clarify timing, direction, people dynamics, emotional state and practical next steps before career, relationship, relocation, investment or family decisions.",
    url: "https://www.qmfeng.com/personal-life-state-diagnostic",
    type: "website",
  },
};

const content: ServicePageContent = {
  badgeZh: "个人重大决策咨询",
  badgeEn: "Personal Major Decision Advisory",
  pageTitleZh: "个人重大决策咨询",
  pageTitleEn: "Personal Major Decision Advisory",
  heroTitleZh: "事业、关系、搬迁或投资前，先看清局势与代价",
  heroTitleEn: "Before a major personal decision, see the situation and cost clearly",
  heroSubtitleZh:
    "启明遁甲个人重大决策咨询，适合正在面对事业方向、关系进退、搬迁、投资、家庭选择或人生阶段转折的人。通过奇门遁甲与现实处境分析，帮助你在行动前看清时机、方向、人事关系、状态消耗与下一步代价。",
  heroSubtitleEn:
    "Qimen Strategy Personal Major Decision Advisory is designed for clients facing career direction, relationship choices, relocation, investment, family decisions or major life transitions. It reviews timing, direction, people dynamics, state and practical cost before action.",
  trustPointsZh: ["事业方向", "关系选择", "搬迁投资", "S$396 起"],
  trustPointsEn: ["Career Direction", "Relationship Choice", "Move & Investment", "From S$396"],
  priceZh: "S$396 起｜按复杂度确认",
  priceEn: "From S$396 · Scope-Based Pricing",
  symptomsTitleZh: "适合哪些情况？",
  symptomsTitleEn: "Which situations is this for?",
  symptomsZh: [
    "事业方向不清，不确定该继续、转型、跳槽还是创业。",
    "关系反复拉扯，看不清该靠近、等待、修复还是放手。",
    "准备搬迁、投资、签约、买房或做重要家庭决定。",
    "近期状态下滑、内耗严重，判断力受到影响。",
    "多个选择同时出现，不知道哪个风险更大、代价更高。",
    "希望在行动前看清未来 3–12 个月的关键机会与阻力。"
  ],
  symptomsEn: [
    "Career direction is unclear and you are unsure whether to continue, change, move jobs or start a business.",
    "A relationship keeps pulling you back and forth, and you cannot see whether to move closer, wait, repair or let go.",
    "You are preparing for relocation, investment, signing, property purchase or a family decision.",
    "Your state has declined and emotional drain is affecting judgment.",
    "Several choices appear at the same time and the real risk or cost is unclear.",
    "You want to understand key opportunities and resistance across the next 3–12 months before action."
  ],
  suitableTitleZh: "适合对象",
  suitableTitleEn: "Who This Is For",
  suitableZh: ["正在面对事业、关系、搬迁、投资或家庭重大选择的人。", "长期内耗、状态下滑或感觉卡住的人。", "希望用一次私密咨询看清当前局势与下一步的人。", "需要在重要决定前先稳定判断的人。"],
  suitableEn: ["Clients facing major career, relationship, relocation, investment or family choices.", "People feeling stuck, drained or unstable.", "Those who want one private consultation to clarify the current situation and next step.", "People who need steadier judgment before an important decision."],
  approachTitleZh: "咨询如何进行？",
  approachTitleEn: "How the advisory session works",
  approachIntroZh:
    "本咨询重点不是替你决定，而是帮助你看清当前局势、关键阻力、可行方向与行动代价。若涉及医疗、法律、财务投资或心理治疗问题，应同时咨询相关专业人士。",
  approachIntroEn:
    "The purpose is not to decide for you, but to help you clarify the current situation, key resistance, possible direction and cost of action. Medical, legal, financial investment or clinical psychological matters should be handled by qualified professionals.",
  steps: [
    { titleZh: "问题聚焦", titleEn: "Question Focus", descZh: "先明确当前最核心的决定是什么，避免一次咨询分散太多问题。", descEn: "Clarify the core decision first, so the session does not become too scattered." },
    { titleZh: "局势判断", titleEn: "Situation Review", descZh: "通过奇门遁甲与现实背景，看清时机、方向、人事关系与阻力。", descEn: "Use Qi Men Dun Jia and real-life context to review timing, direction, people dynamics and resistance." },
    { titleZh: "风险与代价", titleEn: "Risk & Cost", descZh: "判断不同选择可能带来的消耗、机会、风险与后续影响。", descEn: "Review the possible drain, opportunity, risk and downstream impact of different choices." },
    { titleZh: "下一步建议", titleEn: "Next-Step Direction", descZh: "整理更清晰、现实、可执行的行动方向。", descEn: "Provide clearer, realistic and actionable next-step direction." }
  ],
  casesTitleZh: "常见咨询方向",
  casesTitleEn: "Common Advisory Directions",
  cases: [
    { titleZh: "事业卡点", titleEn: "Career Block", bodyZh: "看清当前事业停滞背后的时机、方向与人事结构。", bodyEn: "Clarify timing, direction and people dynamics behind career stagnation." },
    { titleZh: "关系进退", titleEn: "Relationship Decision", bodyZh: "判断关系实质、消耗点与下一步处理方向。", bodyEn: "Review relationship nature, emotional drain and next-step direction." },
    { titleZh: "搬迁投资", titleEn: "Move & Investment", bodyZh: "在搬迁、投资、买房或签约前，看清时机、风险与承接力。", bodyEn: "Before moving, investing, purchasing property or signing, clarify timing, risk and ability to carry the decision." }
  ],
  faqTitleZh: "常见问题",
  faqTitleEn: "FAQ",
  faqs: [
    {
      qZh: "这是替我做决定吗？",
      qEn: "Will you decide for me?",
      aZh: "不是。本咨询提供局势分析与决策参考，最终决定与行动仍由客户自行负责。",
      aEn: "No. This consultation provides situation analysis and decision reference. The final decision and action remain the client's responsibility.",
    },
    {
      qZh: "费用如何确认？",
      qEn: "How is the fee confirmed?",
      aZh: "个人重大决策咨询 S$396 起。若涉及复杂情感关系、婚姻、多方关系、投资判断、搬迁风水或后续顾问支持，将根据范围确认费用。",
      aEn: "Personal Major Decision Advisory starts from S$396. Complex relationship, marriage, multi-party, investment, relocation Feng Shui or follow-up advisory cases are scoped separately.",
    },
    {
      qZh: "需要准备什么？",
      qEn: "What should I prepare?",
      aZh: "请先说明当前最主要的问题、近期状态、想判断的方向与必要背景。一个清楚的问题，通常比很多分散问题更有效。",
      aEn: "Please share your main issue, current state, decision area and relevant background. One clear question is usually more useful than many scattered questions.",
    },
  ],
  ctaTitleZh: "先看清局势，再决定下一步",
  ctaTitleEn: "Clarify the situation before deciding your next step",
  ctaBodyZh: "个人重大决策咨询适合正在面对事业、关系、搬迁、投资、家庭或人生方向卡点的人。基础咨询 S$396 起。",
  ctaBodyEn: "Personal Major Decision Advisory is suitable for clients facing career, relationship, relocation, investment, family or life-direction decisions. Entry consultation starts from S$396.",
  waTextZh: "你好，启明遁甲 Qimen Strategy，我想预约个人重大决策咨询。",
  waTextEn: "Hello Qimen Strategy, I would like to book a Personal Major Decision Advisory session."
};

export default function PersonalLifeStateDiagnosticPage() {
  return (
    <LanguageProvider>
      <ServiceDetailTemplate content={content} />
    </LanguageProvider>
  );
}
