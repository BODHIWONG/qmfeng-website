import type { Metadata } from "next";
import AdvisoryPathwayPage from "@/components/advisory-pathway-page";

export const metadata: Metadata = {
  title: "Executive Career Transition Advisory Singapore｜高管事业转型与关键关系规划",
  description:
    "Private strategic decision advisory for senior executives and professionals facing job change, promotion, industry transition, entrepreneurship, leadership pressure or strategic relationship decisions.",
  keywords: [
    "executive career transition Singapore",
    "senior executive career advisory",
    "career change decision Singapore",
    "leadership transition advisory",
    "高管事业转型",
    "高管跳槽决策",
    "关键关系规划",
    "贵人运规划",
  ],
  alternates: { canonical: "https://www.qmfeng.com/executive-career-transition" },
};

export default function ExecutiveCareerTransitionPage() {
  return (
    <AdvisoryPathwayPage
      badge="Executive Career Advisory · Singapore"
      title="Executive Career Transition Advisory"
      titleZh="职场高管事业转型与关键关系规划"
      lead="For senior executives and professionals deciding whether to stay, move, accept a new role, change industry, start a business or reposition their leadership path."
      leadZh="适合正处于晋升、跳槽、转型、创业、平台更换或领导压力期的高管与专业人士，辅助判断事业节奏、平台选择、关键关系与下一步行动。"
      promise="Career transition is not only about the next title. It is also about timing, role fit, authority, organisational dynamics, strategic sponsors and long-term direction."
      promiseZh="事业转型不只是换一个职位，还涉及时机、岗位匹配、权责结构、组织关系、关键支持者与长期发展方向。"
      scope={[
        { title: "Stay, Move or Transition", titleZh: "留任、跳槽还是转型", body: "Compare the current role, external opportunity, industry change, entrepreneurship or a period of strategic consolidation.", bodyZh: "比较继续留任、接受外部机会、转换行业、创业或阶段性沉淀的不同路径。" },
        { title: "Role, Platform & Timing", titleZh: "岗位、平台与时机", body: "Review whether the role, authority, reporting line, organisation and timing support the executive's next stage.", bodyZh: "判断岗位权责、汇报关系、组织平台与行动时机是否支持下一阶段发展。" },
        { title: "Mentor, Sponsor & Strategic Network", titleZh: "贵人助力与关键关系规划", body: "Identify the relationships that may provide sponsorship, access, information or friction, and clarify how to engage them responsibly.", bodyZh: "梳理可能提供支持、资源、信息或形成阻力的关键人物，并规划更合适的沟通与关系节奏。" },
        { title: "90-Day Transition Roadmap", titleZh: "90天转型行动路线", body: "Define immediate positioning, due diligence, negotiation, relationship and execution priorities for the transition period.", bodyZh: "形成转型期的定位、尽调、谈判、关系维护与执行重点。" },
      ]}
      suitableFor={[
        "Senior executives considering resignation, promotion, an external offer or an industry move.",
        "Professionals deciding whether to remain employed, join a partnership or start a business.",
        "Leaders facing organisational politics, unclear sponsorship or authority mismatch.",
        "Executives who want a structured decision review before making a public move.",
      ]}
      suitableForZh={[
        "正在考虑离职、晋升、外部邀请或跨行业发展的高管。",
        "正在判断继续任职、加入合伙还是创业的专业人士。",
        "面对组织关系、支持者不明确或权责不匹配的管理者。",
        "希望在公开行动前，先进行系统决策复盘的高管。",
      ]}
      process={[
        { title: "Career Context", titleZh: "职业背景梳理", body: "Clarify the current role, opportunity, constraints, decision deadline and personal priorities.", bodyZh: "梳理现职位、外部机会、现实限制、决策时间与个人优先级。" },
        { title: "Option Comparison", titleZh: "路径比较", body: "Compare staying, moving, negotiating, waiting, transitioning or starting independently.", bodyZh: "比较留任、跳槽、谈判、等待、转型或独立创业等路径。" },
        { title: "People & Platform Review", titleZh: "人物与平台判断", body: "Review reporting lines, sponsors, stakeholders, authority, culture and hidden resistance.", bodyZh: "判断汇报关系、关键支持者、利益相关方、权责、文化与潜在阻力。" },
        { title: "Transition Roadmap", titleZh: "转型路线图", body: "Define what to verify, negotiate, prepare and communicate before the next move.", bodyZh: "明确行动前需要核实、谈判、准备与沟通的重点。" },
      ]}
      boundaries={[
        "The service provides decision structure and does not guarantee promotion, employment, sponsorship or career outcomes.",
        "Employment contracts, immigration, compensation, tax and legal matters require qualified professional advice.",
        "The work does not encourage manipulation, covert surveillance or unethical workplace conduct.",
        "Final career decisions remain with the client.",
      ]}
      boundariesZh={[
        "本服务提供事业决策结构，不承诺晋升、录用、贵人支持或特定职业结果。",
        "劳动合同、移民、薪酬、税务与法律问题应咨询合资格专业人士。",
        "不提供操控他人、秘密监控或违反职业伦理的建议。",
        "最终事业决定由客户本人作出。",
      ]}
      whatsappText="Hello Qimen Strategy, I would like to enquire about Executive Career Transition Advisory. My current role and decision are:"
      conversionLabel="executive_career_transition"
    />
  );
}
