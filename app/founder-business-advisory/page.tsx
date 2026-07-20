import type { Metadata } from "next";
import AdvisoryPathwayPage from "@/components/advisory-pathway-page";

export const metadata: Metadata = {
  title: "Founder Business Advisory Singapore｜创业老板事业陪跑",
  description:
    "90-day and ongoing strategic advisory for founders and business owners facing growth bottlenecks, team issues, partnerships, expansion, investment and major operating decisions in Singapore.",
  keywords: [
    "founder business advisory Singapore",
    "business owner advisory Singapore",
    "entrepreneur coaching Singapore",
    "business decision advisor Singapore",
    "创业老板事业陪跑",
    "企业主战略顾问",
    "90天企业顾问",
  ],
  alternates: { canonical: "https://www.qmfeng.com/founder-business-advisory" },
};

export default function FounderBusinessAdvisoryPage() {
  return (
    <AdvisoryPathwayPage
      badge="Founder Advisory · Singapore"
      title="Founder Business Advisory"
      titleZh="创业老板事业陪跑"
      lead="For founders who are carrying too many decisions alone: business bottlenecks, growth priorities, people issues, partnerships, cash-flow pressure, expansion and the next stage of the company."
      leadZh="适合正处于事业瓶颈期、扩张期或转型期的创业老板。重点不是提供一次性的泛泛建议，而是围绕真实经营问题，协助你持续判断优先级、时机、人事关系与下一步行动。"
      promise="The objective is to help the founder make fewer high-cost mistakes and build a clearer decision rhythm across the next 90 days and beyond."
      promiseZh="目标不是替企业主经营公司，而是减少重大决策中的盲点与试错成本，建立更稳定、更有节奏的判断机制。"
      scope={[
        {
          title: "Business Bottleneck Diagnosis",
          titleZh: "事业瓶颈与经营卡点",
          body: "Identify whether the current constraint sits in positioning, offer structure, pricing, cash flow, people, partnerships, execution or founder overload.",
          bodyZh: "判断当前真正卡在定位、产品、价格、现金流、人事、合作、执行，还是企业主本人承担过重。",
        },
        {
          title: "Growth Priority & Business Rhythm",
          titleZh: "增长重点与事业节奏",
          body: "Clarify what should be protected, stopped, tested, strengthened or delayed before more capital and energy are committed.",
          bodyZh: "梳理当前应该守住什么、停止什么、验证什么、强化什么，以及哪些动作暂时不宜推进。",
        },
        {
          title: "People, Partnership & Key Decisions",
          titleZh: "团队、人事与合作判断",
          body: "Review key hires, partners, suppliers, management relationships and the decision conditions surrounding major commitments.",
          bodyZh: "辅助判断关键员工、合作伙伴、供应链、管理关系及重大合作承诺中的风险与支持力。",
        },
        {
          title: "90-Day Strategic Support",
          titleZh: "90天战略陪跑",
          body: "A structured trial period with scheduled reviews, decision preparation and focused support around agreed priorities.",
          bodyZh: "以90天作为试行周期，围绕约定重点进行阶段复盘、重大决策准备与执行方向校准。",
        },
      ]}
      suitableFor={[
        "Founders and SME owners whose business is busy but not breaking through.",
        "Business owners facing expansion, restructuring, partnership or team decisions.",
        "Entrepreneurs who need an external strategic sounding board before major action.",
        "Owners prepared to review actual numbers, contracts, responsibilities and execution.",
      ]}
      suitableForZh={[
        "生意很忙、投入很多，但始终无法突破的创业老板。",
        "正在面对扩张、收缩、重组、合作或团队调整的企业主。",
        "需要在重大行动前获得外部战略判断与复盘支持的人。",
        "愿意结合实际数据、合同、职责与执行结果进行验证的企业主。",
      ]}
      process={[
        { title: "Founder Application", titleZh: "企业主申请", body: "Share the industry, team size, current bottleneck, decision urgency and preferred support period.", bodyZh: "提供行业、团队规模、当前卡点、决策时限与希望获得支持的周期。" },
        { title: "Initial Diagnostic", titleZh: "初步诊断", body: "Clarify the actual decision problem, advisory scope and whether a single session or 90-day support is more suitable.", bodyZh: "明确真正的问题、服务范围，以及更适合单次咨询还是90天事业陪跑。" },
        { title: "Priority Roadmap", titleZh: "重点路线图", body: "Define the few priorities that require attention first and the decisions that should not be rushed.", bodyZh: "确定现阶段最需要处理的少数重点，以及暂时不应贸然推进的事项。" },
        { title: "Review & Adjustment", titleZh: "阶段复盘与校准", body: "Review progress, new information and key decisions at agreed intervals, then adjust the next move.", bodyZh: "按照约定节奏复盘进度、新信息与关键决策，并校准下一阶段行动。" },
      ]}
      boundaries={[
        "Qimen Strategy provides strategic decision support and does not operate the company on behalf of the founder.",
        "Business recommendations should be checked against actual financial, legal, contractual and operational evidence.",
        "No revenue, profit, investment return or business outcome is guaranteed.",
        "Scope, frequency, response expectations and fees are confirmed before engagement.",
      ]}
      boundariesZh={[
        "启明遁甲决策智库提供战略判断与陪跑支持，不代替企业主经营公司。",
        "所有商业建议应结合真实财务、法律、合同与经营数据进行验证。",
        "不承诺营业额、利润、投资回报或特定经营结果。",
        "服务范围、频次、响应方式与费用将在合作前书面确认。",
      ]}
      whatsappText="Hello Qimen Strategy, I would like to apply for Founder Business Advisory. My industry, team size and current business bottleneck are:"
      conversionLabel="founder_business_advisory"
    />
  );
}
