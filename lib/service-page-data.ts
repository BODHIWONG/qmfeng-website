import type { ServicePageContent } from "@/components/service-detail-template";

const appointmentFaqs = [
  {
    qZh: "费用如何确认？",
    qEn: "How is pricing confirmed?",
    aZh: "所有咨询均为预约制。费用会根据问题复杂度、服务范围、是否需要到场及交付深度确认。",
    aEn: "All advisory services are by appointment. Pricing is confirmed based on complexity, service scope, whether an on-site visit is required, and the depth of deliverables.",
  },
  {
    qZh: "需要提供什么资料？",
    qEn: "What information should I provide?",
    aZh: "请先提供当前问题、背景情况、空间照片或平面图等必要资料。确认范围后再安排咨询。",
    aEn: "Please provide the current issue, relevant background, and where useful, photos or floor plans. The advisory scope is confirmed before booking.",
  },
  {
    qZh: "是否保证结果？",
    qEn: "Are results guaranteed?",
    aZh: "不做夸大承诺。启明遁甲提供战略判断、风险提示与行动建议，最终决定与执行仍由客户自行负责。",
    aEn: "No exaggerated guarantees are made. Qimen Strategy provides advisory insight, risk mapping and action direction; final decisions and actions remain with the client.",
  },
];

export const wealthPageContent: ServicePageContent = {
  badgeZh: "事业财富 · 商业方向",
  badgeEn: "Business & Wealth Direction",
  pageTitleZh: "事业财富 · 商业方向",
  pageTitleEn: "Business & Wealth Direction",
  heroTitleZh: "事业与财富问题，往往不是不努力，而是方向、时机与格局没有对齐",
  heroTitleEn: "Business and wealth problems are often not about effort alone, but misaligned direction, timing and structure",
  heroSubtitleZh:
    "启明遁甲以奇门决策为核心，结合现实商业处境、空间环境与个人节奏，帮助你看清事业卡点、财富路径、合作风险与下一步行动方向。",
  heroSubtitleEn:
    "Qimen Strategy uses Qi Men decision analysis together with real business context, environment and personal rhythm to clarify career blocks, wealth direction, partnership risk and the next strategic move.",
  trustPointsZh: ["企业主战略判断", "时机 · 方向 · 人事 · 环境", "预约制咨询", "按范围确认"],
  trustPointsEn: ["Executive Advisory", "Timing · Direction · People · Environment", "By Appointment", "Scope-Based Pricing"],
  priceZh: "预约制｜按服务范围确认",
  priceEn: "By Appointment · Scope-Based Pricing",
  symptomsTitleZh: "你是否正处在这些事业与财富问题中？",
  symptomsTitleEn: "Are you facing these business or wealth patterns?",
  symptomsZh: [
    "事业很忙，却始终难以突破。",
    "收入不稳，合作与机会反复。",
    "想转型、扩张或投资，却看不清方向。",
    "担心关键判断失误，造成更大损失。",
    "店铺、办公室或空间状态影响经营节奏。",
    "希望在重要决定前先看清全局。"
  ],
  symptomsEn: [
    "You stay busy but cannot break through.",
    "Income, partnerships or opportunities remain unstable.",
    "You want to transition, expand or invest but cannot see the direction clearly.",
    "You worry that one wrong decision could create larger losses.",
    "Your shop, office or space may be affecting business rhythm.",
    "You want to see the whole game before making an important move."
  ],
  suitableTitleZh: "适合对象",
  suitableTitleEn: "Who This Is For",
  suitableZh: ["企业主与创业者。", "事业转型或业务扩张者。", "面对合作、投资、签约判断的人。", "希望重新布局财富与方向的人。"],
  suitableEn: ["Business owners and entrepreneurs.", "People in business transition or expansion.", "Those evaluating partnerships, investments or contracts.", "Clients who want to realign wealth and direction."],
  approachTitleZh: "启明遁甲如何辅助事业财富判断？",
  approachTitleEn: "How Qimen Strategy supports business and wealth decisions",
  approachIntroZh:
    "重点不是给出一句模糊判断，而是看清时机、方向、人事、环境与风险结构，帮助你减少盲目试错。",
  approachIntroEn:
    "The aim is not a vague prediction, but a clearer view of timing, direction, people dynamics, environment and risk structure.",
  steps: [
    { titleZh: "时机判断", titleEn: "Timing Review", descZh: "判断当前是否适合推进、等待、调整或转向。", descEn: "Assess whether to move, wait, adjust or redirect." },
    { titleZh: "方向比较", titleEn: "Direction Comparison", descZh: "比较不同选择的顺势程度与潜在消耗。", descEn: "Compare which path is more aligned and less draining." },
    { titleZh: "风险识别", titleEn: "Risk Mapping", descZh: "提前看见合作、资金、团队或空间中的风险点。", descEn: "Identify risks in partnerships, capital, team or environment." },
    { titleZh: "行动建议", titleEn: "Action Direction", descZh: "整理更清晰、可执行的下一步方向。", descEn: "Summarise clearer and actionable next steps." }
  ],
  casesTitleZh: "案例方向",
  casesTitleEn: "Example Advisory Directions",
  cases: [
    { titleZh: "合作判断", titleEn: "Partnership Decision", bodyZh: "帮助客户在合作前看清机会、阻力与风险。", bodyEn: "Clarify opportunity, resistance and risk before cooperation." },
    { titleZh: "转型方向", titleEn: "Transition Direction", bodyZh: "协助客户重新判断业务阶段与下一步重点。", bodyEn: "Reassess business stage and next strategic focus." },
    { titleZh: "空间配合", titleEn: "Space Alignment", bodyZh: "结合办公室、店铺或家宅状态判断经营支持力。", bodyEn: "Review how office, shop or home environment supports business rhythm." }
  ],
  faqTitleZh: "常见问题",
  faqTitleEn: "FAQ",
  faqs: appointmentFaqs,
  ctaTitleZh: "先看清局势，再决定下一步",
  ctaTitleEn: "See the situation clearly before deciding the next move",
  ctaBodyZh: "事业财富咨询不再公开低价展示，统一采用预约制与服务范围报价。",
  ctaBodyEn: "Business and wealth advisory is now by appointment with scope-based pricing.",
  waTextZh: "你好，启明遁甲 Qimen Strategy，我想咨询事业财富与商业方向问题。",
  waTextEn: "Hello Qimen Strategy, I would like to consult about business and wealth direction."
};

export const healingPageContent: ServicePageContent = {
  badgeZh: "身心能量 · 关系清明",
  badgeEn: "Inner Clarity & Relationship Balance",
  pageTitleZh: "身心能量 · 关系清明",
  pageTitleEn: "Inner Clarity & Relationship Balance",
  heroTitleZh: "有些关系与情绪问题，需要先看清内在状态与环境结构",
  heroTitleEn: "Some emotional and relationship issues require clarity of inner state and environment first",
  heroSubtitleZh:
    "启明遁甲结合积极心理学视角、命理判断、空间环境与能量调和，帮助客户看清关系反复、情绪内耗与状态失衡背后的结构。",
  heroSubtitleEn:
    "Qimen Strategy combines positive psychology perspective, destiny insight, spatial environment and energy alignment to clarify the structure behind emotional exhaustion, relationship patterns and inner imbalance.",
  trustPointsZh: ["私密咨询", "关系 · 情绪 · 空间", "预约制咨询", "按范围确认"],
  trustPointsEn: ["Private Advisory", "Relationship · Emotion · Space", "By Appointment", "Scope-Based Pricing"],
  priceZh: "预约制｜按服务范围确认",
  priceEn: "By Appointment · Scope-Based Pricing",
  symptomsTitleZh: "你是否正在经历这些状态？",
  symptomsTitleEn: "Are you experiencing these patterns?",
  symptomsZh: ["关系反复拉扯，长期内耗。", "情绪不稳，睡眠与状态受影响。", "过去的关系伤害难以真正放下。", "想修复关系，却看不清问题根源。"],
  symptomsEn: ["Relationships keep repeating painful patterns.", "Emotions, sleep and daily state are affected.", "Past wounds are difficult to release fully.", "You want repair or clarity but cannot see the root structure."],
  suitableTitleZh: "适合对象",
  suitableTitleEn: "Who This Is For",
  suitableZh: ["关系反复或婚姻压力者。", "长期情绪内耗者。", "希望稳定内在状态的人。", "需要空间与能量配合调整的人。"],
  suitableEn: ["Clients with relationship repetition or marriage pressure.", "Those facing long-term emotional depletion.", "People seeking steadier inner state.", "Clients needing space and energy alignment support."],
  approachTitleZh: "如何判断关系与能量问题？",
  approachTitleEn: "How relationship and energy issues are reviewed",
  approachIntroZh: "重点是看清情绪模式、关系节奏、空间影响与个人状态，而不是简单归咎某一方。",
  approachIntroEn: "The work reviews emotional patterns, relationship timing, spatial influence and personal state, rather than blaming one side.",
  steps: [
    { titleZh: "模式梳理", titleEn: "Pattern Review", descZh: "看清关系中的重复模式与消耗点。", descEn: "Clarify repeated patterns and points of emotional drain." },
    { titleZh: "状态判断", titleEn: "State Assessment", descZh: "判断当前内在状态是否支持理性选择。", descEn: "Assess whether the inner state supports clear choices." },
    { titleZh: "空间影响", titleEn: "Space Influence", descZh: "观察环境是否持续影响睡眠、情绪与关系。", descEn: "Review whether the space affects sleep, emotion and relationships." },
    { titleZh: "行动方向", titleEn: "Action Direction", descZh: "给出更稳定的修复、放下或重新开始方向。", descEn: "Provide steadier direction for repair, release or restarting." }
  ],
  casesTitleZh: "案例方向",
  casesTitleEn: "Example Advisory Directions",
  cases: [
    { titleZh: "关系清明", titleEn: "Relationship Clarity", bodyZh: "帮助客户看清关系中真正的消耗结构。", bodyEn: "Help clients see the real structure of relational drain." },
    { titleZh: "状态回稳", titleEn: "State Stabilisation", bodyZh: "通过内在与空间调整支持状态回稳。", bodyEn: "Support steadiness through inner and spatial alignment." },
    { titleZh: "睡眠与情绪", titleEn: "Sleep and Emotion", bodyZh: "观察空间与情绪状态之间的关联。", bodyEn: "Review the relationship between space and emotional state." }
  ],
  faqTitleZh: "常见问题",
  faqTitleEn: "FAQ",
  faqs: appointmentFaqs,
  ctaTitleZh: "先稳定自己，关系才可能真正改变",
  ctaTitleEn: "Stabilise yourself first, then the relationship can change",
  ctaBodyZh: "身心能量与关系咨询统一采用预约制与服务范围报价。",
  ctaBodyEn: "Inner clarity and relationship advisory is by appointment with scope-based pricing.",
  waTextZh: "你好，启明遁甲 Qimen Strategy，我想咨询关系、情绪与身心能量问题。",
  waTextEn: "Hello Qimen Strategy, I would like to consult about relationship, emotion and inner clarity."
};

export const decisionPageContent: ServicePageContent = {
  badgeZh: "单项奇门决策咨询",
  badgeEn: "Single Qimen Decision Consultation",
  pageTitleZh: "单项奇门决策咨询",
  pageTitleEn: "Single Qimen Decision Consultation",
  heroTitleZh: "一个关键决定，值得一次清晰的奇门决策判断",
  heroTitleEn: "One critical decision deserves a clear Qimen Strategy review",
  heroSubtitleZh:
    "启明遁甲将奇门遁甲转化为现代关键决策前的战略智慧决策方法。适用于合作、投资、签约、任用、转型、人生方向、关系与婚姻决策。",
  heroSubtitleEn:
    "Qimen Strategy translates Qi Men Dun Jia into a practical strategic wisdom decision method before critical action. It is suitable for partnerships, investments, contracts, key appointments, transitions, life direction, relationship and marriage decisions.",
  trustPointsZh: ["一个关键决定", "私密奇门决策咨询", "可执行建议", "S$396 起"],
  trustPointsEn: ["One Critical Decision", "Private Qimen Decision Consultation", "Actionable Insight", "From S$396"],
  priceZh: "S$396 起｜按复杂度确认",
  priceEn: "From S$396 · Scope-Based Pricing",
  symptomsTitleZh: "适合哪些关键决定？",
  symptomsTitleEn: "Which critical decisions is this for?",
  symptomsZh: ["是否合作、签约或投资。", "是否任用关键人员或调整团队。", "是否转型、跳槽或改变事业方向。", "是否推进某个重大计划。", "人生方向、关系或婚姻决策。", "是否需要加急判断行动时机。"],
  symptomsEn: ["Whether to partner, sign or invest.", "Whether to appoint key people or adjust a team.", "Whether to transition or change direction.", "Whether to move forward with a major plan.", "Life direction, relationship or marriage decisions.", "Whether urgent timing guidance is needed."],
  suitableTitleZh: "适合对象",
  suitableTitleEn: "Who This Is For",
  suitableZh: ["企业主、创业者、高管。", "面对重大合作或投资判断的人。", "正处于转型、扩张、换赛道阶段的人。", "面对人生方向、关系与婚姻选择的人。"],
  suitableEn: ["Business owners, founders and executives.", "Clients facing major partnership or investment decisions.", "People in transition, expansion or strategic change.", "Those facing life direction, relationship or marriage choices."],
  approachTitleZh: "单项咨询如何进行？",
  approachTitleEn: "How the single advisory session works",
  approachIntroZh: "咨询围绕一个核心问题展开，重点看清时机、方向、人事、风险与下一步行动建议。基础奇门决策咨询 S$396 起，复杂商业或多人关系个案将根据范围确认费用。",
  approachIntroEn: "The session focuses on one core question, reviewing timing, direction, people dynamics, risk and recommended next action. Entry Qimen Decision Consultation starts from S$396; complex business or multi-party cases are scoped separately.",
  steps: [
    { titleZh: "背景沟通", titleEn: "Briefing", descZh: "先了解问题背景与当前选择。", descEn: "Understand the background and available options." },
    { titleZh: "奇门判断", titleEn: "Qimen Review", descZh: "判断时机、方向、人事与风险结构。", descEn: "Review timing, direction, people dynamics and risk structure." },
    { titleZh: "风险提示", titleEn: "Risk Mapping", descZh: "指出容易忽略的阻力与风险。", descEn: "Identify overlooked resistance and risk." },
    { titleZh: "行动摘要", titleEn: "Action Summary", descZh: "给出更清晰的下一步建议。", descEn: "Provide clearer next-step guidance." }
  ],
  casesTitleZh: "常见咨询方向",
  casesTitleEn: "Common Advisory Directions",
  cases: [
    { titleZh: "合作与投资", titleEn: "Partnership & Investment", bodyZh: "判断合作是否顺势、风险点在哪里。", bodyEn: "Review whether cooperation is aligned and where risks may sit." },
    { titleZh: "人生与关系决策", titleEn: "Life & Relationship Decisions", bodyZh: "看清关系、婚姻、家庭或人生方向中的时机与人事结构。", bodyEn: "Clarify timing and people dynamics in relationship, marriage, family or life-direction choices." },
    { titleZh: "转型与时机", titleEn: "Transition & Timing", bodyZh: "看清现在是进、守、等，还是转向。", bodyEn: "Clarify whether to move, hold, wait or redirect." }
  ],
  faqTitleZh: "常见问题",
  faqTitleEn: "FAQ",
  faqs: [
    { qZh: "单项咨询费用如何确认？", qEn: "How is the fee confirmed?", aZh: "基础奇门决策咨询 S$396 起。费用会根据问题复杂度、是否涉及企业决策、多人关系、是否加急与交付深度确认。", aEn: "Entry Qimen Decision Consultation starts from S$396. The fee is confirmed based on complexity, whether business decisions or multiple parties are involved, urgency and deliverable depth." },
    { qZh: "可以加急吗？", qEn: "Is priority review available?", aZh: "紧急个案可申请加急优先处理，是否安排及费用将在沟通背景后确认。", aEn: "Priority review may be available for urgent cases. Arrangement and fee are confirmed after private context review." },
    ...appointmentFaqs,
  ],
  ctaTitleZh: "关键决定，不要只靠感觉",
  ctaTitleEn: "Do not rely on instinct alone for a critical decision",
  ctaBodyZh: "一次清晰的奇门决策判断，往往可以减少后续更高的试错成本。基础咨询 S$396 起，复杂个案将根据咨询范围确认。",
  ctaBodyEn: "One clear Qimen Strategy review can reduce the cost of trial and error later. Entry consultation starts from S$396; complex cases are confirmed based on advisory scope.",
  waTextZh: "你好，启明遁甲 Qimen Strategy，我想预约单项奇门决策咨询。",
  waTextEn: "Hello Qimen Strategy, I would like to book a Single Qimen Decision Consultation."
};

export const spaceClearingPageContent: ServicePageContent = {
  badgeZh: "空间与环境调和",
  badgeEn: "Space & Environment Alignment",
  pageTitleZh: "空间与环境调和",
  pageTitleEn: "Space & Environment Alignment",
  heroTitleZh: "空间状态会影响人的判断、睡眠、情绪与事业节奏",
  heroTitleEn: "A space can affect judgment, sleep, emotions and business rhythm",
  heroSubtitleZh: "空间能量净化与环境调和作为启明遁甲的支持能力，统一采用预约制与服务范围报价。",
  heroSubtitleEn: "Space energy clearing and environmental alignment are supporting capabilities within Qimen Strategy, offered by appointment with scope-based pricing.",
  trustPointsZh: ["住宅 · 办公室 · 店铺", "空间状态判断", "预约制咨询", "按范围确认"],
  trustPointsEn: ["Home · Office · Shop", "Space Condition Review", "By Appointment", "Scope-Based Pricing"],
  priceZh: "预约制｜按服务范围确认",
  priceEn: "By Appointment · Scope-Based Pricing",
  symptomsTitleZh: "哪些空间适合判断？",
  symptomsTitleEn: "Which spaces may need review?",
  symptomsZh: ["家中长期压抑或睡眠变差。", "办公室或店铺气场沉滞。", "搬入新空间后状态下滑。", "空间看似正常，但总让人不舒服。"],
  symptomsEn: ["Homes that feel heavy or affect sleep.", "Offices or shops with stagnant energy.", "A decline in state after moving in.", "Spaces that look normal but feel uncomfortable."],
  suitableTitleZh: "适合对象",
  suitableTitleEn: "Who This Is For",
  suitableZh: ["住宅、办公室、店铺客户。", "睡眠、情绪或状态受空间影响者。", "需要风水布局与空间调整者。", "希望让空间重新支持事业与生活的人。"],
  suitableEn: ["Home, office and shop clients.", "People affected by their environment.", "Clients needing Feng Shui and space adjustment.", "Those who want their space to support life and business."],
  approachTitleZh: "如何判断空间问题？",
  approachTitleEn: "How the space is reviewed",
  approachIntroZh: "重点观察空间结构、使用感受、动线、方位、睡眠情绪反馈与事业节奏。",
  approachIntroEn: "The review considers layout, felt experience, movement flow, direction, sleep and emotion feedback, and business rhythm.",
  steps: [
    { titleZh: "空间资料", titleEn: "Space Briefing", descZh: "提供照片、平面图与实际感受。", descEn: "Provide photos, floor plan and lived experience." },
    { titleZh: "环境判断", titleEn: "Environment Review", descZh: "判断沉滞、压迫、动线与方位问题。", descEn: "Review stagnation, pressure, movement flow and direction." },
    { titleZh: "调整方向", titleEn: "Alignment Direction", descZh: "提出空间净化、布局与调整建议。", descEn: "Provide clearing, layout and adjustment direction." },
    { titleZh: "后续复盘", titleEn: "Follow-up", descZh: "必要时根据反馈继续微调。", descEn: "Adjust further if required based on feedback." }
  ],
  casesTitleZh: "案例方向",
  casesTitleEn: "Example Directions",
  cases: [
    { titleZh: "睡眠状态", titleEn: "Sleep State", bodyZh: "观察卧室与家宅是否持续影响休息。", bodyEn: "Review whether bedroom and home influence rest." },
    { titleZh: "办公节奏", titleEn: "Work Rhythm", bodyZh: "观察办公室或店铺是否支持业务推进。", bodyEn: "Review whether office or shop supports business momentum." },
    { titleZh: "空间压迫感", titleEn: "Spatial Pressure", bodyZh: "判断空间沉重、压抑或不安的来源。", bodyEn: "Identify the source of heaviness, pressure or unease." }
  ],
  faqTitleZh: "常见问题",
  faqTitleEn: "FAQ",
  faqs: appointmentFaqs,
  ctaTitleZh: "空间先清明，人心与事业才更容易稳定",
  ctaTitleEn: "When space is clear, life and business can become steadier",
  ctaBodyZh: "空间相关服务统一采用预约制与范围报价。",
  ctaBodyEn: "Space-related services are offered by appointment with scope-based pricing.",
  waTextZh: "你好，启明遁甲 Qimen Strategy，我想咨询空间与环境调和。",
  waTextEn: "Hello Qimen Strategy, I would like to consult about space and environment alignment."
};
