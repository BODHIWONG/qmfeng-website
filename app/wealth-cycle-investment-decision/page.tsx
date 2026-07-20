import type { Metadata } from "next";
import AdvisoryPathwayPage from "@/components/advisory-pathway-page";

export const metadata: Metadata = {
  title: "Wealth Cycle & Investment Decision Support Singapore｜财富周期与投资决策辅助",
  description:
    "Structured decision support for founders and entrepreneurs before major investment, expansion, project funding, partnership or capital-allocation decisions. No investment returns are guaranteed.",
  keywords: [
    "investment decision support Singapore",
    "business investment timing Singapore",
    "founder wealth cycle review",
    "capital allocation decision support",
    "创业者财运周期",
    "投资决策辅助",
    "奇门投资决策",
  ],
  alternates: { canonical: "https://www.qmfeng.com/wealth-cycle-investment-decision" },
};

export default function WealthCycleInvestmentDecisionPage() {
  return (
    <AdvisoryPathwayPage
      badge="Founder Wealth & Decision Support"
      title="Wealth Cycle & Investment Decision Support"
      titleZh="创业者财富周期与投资决策辅助"
      lead="A structured review before committing significant capital, entering a partnership, expanding a business, funding a project or making another high-impact financial decision."
      leadZh="适合创业者在重大投资、业务扩张、项目投入、合作出资或重要资产决策前，辅助判断事业周期、资金承载、行动时机、人事条件与潜在风险。"
      promise="The purpose is not to predict guaranteed profit. It is to identify decision conditions, blind spots and downside risk before capital is committed."
      promiseZh="重点不是承诺赚钱，而是在投入资金之前，尽可能看清决策条件、隐藏盲点与下行风险。"
      scope={[
        { title: "Business & Wealth Cycle Review", titleZh: "事业与财富周期判断", body: "Review whether the founder is in a phase better suited to expansion, consolidation, testing, restructuring or capital preservation.", bodyZh: "辅助判断当前更适合扩张、守成、验证、重组，还是优先保护现金流与资本。" },
        { title: "Investment Timing & Readiness", titleZh: "投资时机与准备度", body: "Assess whether the decision environment, resources, information and execution capacity are sufficiently prepared.", bodyZh: "判断当前的时机、资源、信息、团队与执行能力是否达到推进条件。" },
        { title: "People & Partnership Risk", titleZh: "人物与合作风险", body: "Review the people dynamics, information gaps, control rights, incentives and responsibilities surrounding the decision.", bodyZh: "梳理合作人物、信息差、控制权、利益安排与责任边界中的风险。" },
        { title: "Decision Scenarios & Next Steps", titleZh: "情景比较与行动方向", body: "Compare proceed, delay, reduce exposure, stage the investment, request further evidence or stop the decision.", bodyZh: "比较立即推进、延后、降低投入、分阶段验证、补充尽调或停止行动等不同路径。" },
      ]}
      suitableFor={[
        "Founders considering business expansion, a new project or a major capital commitment.",
        "Entrepreneurs evaluating a partner, investor, acquisition, franchise or cross-border opportunity.",
        "Business owners who need a second decision lens before signing or transferring funds.",
        "Clients willing to obtain professional legal, accounting, tax or licensed financial advice where required.",
      ]}
      suitableForZh={[
        "准备扩张、新项目投入或重大资金承诺的创业者。",
        "正在评估合伙人、投资人、并购、加盟或跨境机会的企业主。",
        "希望在签约或付款前增加一层风险判断的人。",
        "愿意在必要时同步咨询律师、会计师、税务或持牌金融专业人士的客户。",
      ]}
      process={[
        { title: "Decision Brief", titleZh: "决策背景", body: "Provide the decision amount, parties involved, available options, deadline and known risks.", bodyZh: "说明决策金额、涉及人物、可选方案、截止时间与已知风险。" },
        { title: "Risk & Timing Review", titleZh: "时机与风险判断", body: "Review timing, people, information quality, downside exposure and execution conditions.", bodyZh: "判断时机、人物、信息质量、下行风险与执行条件。" },
        { title: "Evidence Checklist", titleZh: "尽调清单", body: "Identify which financial records, contracts, references or professional opinions still need verification.", bodyZh: "明确仍需核实的财务记录、合同、背景资料或专业意见。" },
        { title: "Decision Direction", titleZh: "行动建议", body: "Summarise whether to proceed, delay, restructure, reduce exposure or stop pending further evidence.", bodyZh: "形成推进、延后、重组、降低投入或待补充证据后再决定的方向。" },
      ]}
      boundaries={[
        "This service is strategic decision support and is not regulated financial advice, securities advice or a solicitation to invest.",
        "No profit, return, price movement or investment outcome is guaranteed.",
        "Actual decisions should be supported by contracts, financial records, due diligence and qualified professional advice.",
        "The client remains responsible for the final decision and capital committed.",
      ]}
      boundariesZh={[
        "本服务属于战略决策辅助，不属于持牌金融建议、证券建议或投资招揽。",
        "不承诺利润、回报、价格走势或任何投资结果。",
        "最终判断应结合合同、财务资料、尽职调查与合资格专业意见。",
        "客户对最终决定及资金投入承担责任。",
      ]}
      whatsappText="Hello Qimen Strategy, I would like to enquire about Wealth Cycle and Investment Decision Support. The decision I am currently considering is:"
      conversionLabel="wealth_investment_decision_support"
    />
  );
}
