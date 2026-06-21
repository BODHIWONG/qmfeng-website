import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/language-context";
import ServiceDetailTemplate, { type ServicePageContent } from "@/components/service-detail-template";

export const metadata: Metadata = {
  title: "企业战略健康诊断｜Enterprise Strategic Health Diagnostic Singapore",
  description:
    "Enterprise Strategic Health Diagnostic by Qimen Strategy Singapore. A private advisory review for business direction, timing, people dynamics, cashflow pressure, space alignment and hidden risks before major decisions.",
  keywords: [
    "Enterprise Strategic Health Diagnostic Singapore",
    "Business Health Check Singapore",
    "Enterprise Decision Advisory Singapore",
    "企业战略健康诊断",
    "企业经营健康诊断",
    "企业决策顾问",
    "Qimen Strategy Singapore",
  ],
  alternates: {
    canonical: "https://www.qmfeng.com/enterprise-strategic-health-diagnostic",
  },
  openGraph: {
    title: "Enterprise Strategic Health Diagnostic | Qimen Strategy Singapore",
    description:
      "Review business direction, timing, people dynamics, cashflow pressure, space alignment and hidden risks before major decisions.",
    url: "https://www.qmfeng.com/enterprise-strategic-health-diagnostic",
    type: "website",
  },
};

const content: ServicePageContent = {
  badgeZh: "企业战略健康诊断",
  badgeEn: "Enterprise Strategic Health Diagnostic",
  pageTitleZh: "企业战略健康诊断",
  pageTitleEn: "Enterprise Strategic Health Diagnostic",
  heroTitleZh: "企业卡住，往往不是单点问题，而是系统失衡",
  heroTitleEn: "When a business gets stuck, the issue is often systemic",
  heroSubtitleZh:
    "启明遁甲企业战略健康诊断，专为企业主、创始人与管理层设计，通过奇门决策、经营结构分析、人事合作判断与企业空间观察，帮助企业看清当前经营状态、隐藏风险与下一阶段调整方向。",
  heroSubtitleEn:
    "Qimen Strategy Enterprise Strategic Health Diagnostic is designed for business owners, founders and management teams. It reviews decision timing, business structure, people dynamics and business environment to clarify current condition, hidden risks and next-stage adjustment direction.",
  trustPointsZh: ["企业方向", "人事合作", "空间支持力", "S$3,800 起"],
  trustPointsEn: ["Business Direction", "People & Partnership", "Space Support", "From S$3,800"],
  priceZh: "S$3,800 起｜按企业范围确认",
  priceEn: "From S$3,800 · Scope-Based Pricing",
  symptomsTitleZh: "企业是否出现这些信号？",
  symptomsTitleEn: "Is your business showing these signals?",
  symptomsZh: [
    "业绩下滑、客户减少或增长停滞。",
    "团队内耗、人事不稳或关键员工难以管理。",
    "合作反复、供应链或合伙关系存在隐患。",
    "现金流压力、投资犹豫或扩张方向不清。",
    "办公室、店铺或商业空间无法支持经营节奏。",
    "企业主感觉公司卡住，但找不到真正根源。"
  ],
  symptomsEn: [
    "Revenue declines, client flow drops or growth becomes stagnant.",
    "Team friction, people instability or key staff management issues appear.",
    "Partnership, supplier or co-founder risks keep repeating.",
    "Cashflow pressure, investment hesitation or expansion uncertainty increases.",
    "The office, shop or business space does not support business momentum.",
    "The founder feels the business is stuck but cannot identify the real root cause."
  ],
  suitableTitleZh: "适合对象",
  suitableTitleEn: "Who This Is For",
  suitableZh: ["企业主、创始人、管理层。", "业绩或客户流明显下滑的企业。", "准备扩张、转型、搬迁、投资或调整团队的企业。", "希望进入年度陪跑前先做系统诊断的企业。"],
  suitableEn: ["Business owners, founders and management teams.", "Companies facing revenue or client-flow decline.", "Businesses preparing expansion, transformation, relocation, investment or team restructuring.", "Companies that want a diagnostic before long-term advisory support."],
  approachTitleZh: "企业诊断如何进行？",
  approachTitleEn: "How the enterprise diagnostic works",
  approachIntroZh:
    "本诊断重点评估企业方向、经营节奏、客户流动、人事合作、重大决策风险、办公室或店铺空间支持力，以及未来 3–12 个月的关键机会与阻力。",
  approachIntroEn:
    "The diagnostic reviews business direction, operating rhythm, client flow, people and partnership dynamics, major decision risks, office or shop support, and key opportunities or resistance across the next 3–12 months.",
  steps: [
    { titleZh: "经营背景", titleEn: "Business Briefing", descZh: "了解企业阶段、业务模式、近期问题与目标。", descEn: "Review business stage, model, recent issues and goals." },
    { titleZh: "战略体检", titleEn: "Strategic Diagnostic", descZh: "判断方向、时机、人事、空间与风险是否对齐。", descEn: "Assess whether direction, timing, people, environment and risk are aligned." },
    { titleZh: "隐患识别", titleEn: "Hidden Risk Review", descZh: "找出合作、现金流、团队或空间中的潜在风险。", descEn: "Identify hidden risks in partnership, cashflow, team or business space." },
    { titleZh: "调整建议", titleEn: "Adjustment Direction", descZh: "提出下一阶段该进、该守、该调整或该转向的建议。", descEn: "Provide direction on whether to move, hold, adjust or redirect in the next stage." }
  ],
  casesTitleZh: "常见诊断方向",
  casesTitleEn: "Common Diagnostic Directions",
  cases: [
    { titleZh: "经营卡点", titleEn: "Business Bottleneck", bodyZh: "看清业绩、客户流与业务节奏下滑背后的结构。", bodyEn: "Clarify the structure behind revenue, client-flow or business-rhythm decline." },
    { titleZh: "人事合作", titleEn: "People & Partnership", bodyZh: "判断核心团队、合伙人、供应链与合作关系中的助力与风险。", bodyEn: "Review support and risk in team, partner, supplier and cooperation dynamics." },
    { titleZh: "空间支持力", titleEn: "Space Support", bodyZh: "观察办公室、店铺或企业主住宅是否支持企业发展。", bodyEn: "Review whether office, shop or founder residence supports business momentum." }
  ],
  faqTitleZh: "常见问题",
  faqTitleEn: "FAQ",
  faqs: [
    {
      qZh: "这是财务审计或法律意见吗？",
      qEn: "Is this financial audit or legal advice?",
      aZh: "不是。本诊断不是财务审计、法律意见或投资建议。它是企业战略、时机、人事、空间与决策风险的综合顾问评估。",
      aEn: "No. This is not financial audit, legal advice or investment advice. It is an advisory review of business strategy, timing, people dynamics, environment and decision risk.",
    },
    {
      qZh: "费用如何确认？",
      qEn: "How is the fee confirmed?",
      aZh: "企业战略健康诊断 S$3,800 起。最终费用会根据企业规模、问题复杂度、是否到场、是否包含空间判断与交付深度确认。",
      aEn: "Enterprise Strategic Health Diagnostic starts from S$3,800. Final fee depends on business size, complexity, on-site requirements, space review and deliverable depth.",
    },
    {
      qZh: "适合做年度顾问前的入口吗？",
      qEn: "Can this be the first step before annual advisory?",
      aZh: "适合。企业战略健康诊断可以作为进入季度顾问、年度陪跑或重大项目顾问前的系统性入口。",
      aEn: "Yes. This diagnostic can be the first step before quarterly advisory, annual retainer or major project advisory.",
    },
  ],
  ctaTitleZh: "先看清企业系统，再决定下一步动作",
  ctaTitleEn: "Clarify the business system before your next move",
  ctaBodyZh: "企业战略健康诊断适合企业卡住、准备扩张、转型、搬迁、合作或调整团队前进行。基础诊断 S$3,800 起。",
  ctaBodyEn: "Enterprise Strategic Health Diagnostic is suitable when the business is stuck or before expansion, transformation, relocation, partnership or team adjustment. Entry diagnostic starts from S$3,800.",
  waTextZh: "你好，启明遁甲 Qimen Strategy，我想预约企业战略健康诊断。",
  waTextEn: "Hello Qimen Strategy, I would like to book an Enterprise Strategic Health Diagnostic."
};

export default function EnterpriseStrategicHealthDiagnosticPage() {
  return (
    <LanguageProvider>
      <ServiceDetailTemplate content={content} />
    </LanguageProvider>
  );
}
