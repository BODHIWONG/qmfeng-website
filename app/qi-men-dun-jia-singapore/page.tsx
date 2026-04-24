import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/language-context";
import ServiceDetailTemplate from "@/components/service-detail-template";
import { decisionPageContent } from "@/lib/service-page-data";

const qiMenDunJiaSingaporeContent = {
  ...decisionPageContent,
  badgeZh: "新加坡奇门遁甲咨询",
  badgeEn: "Qi Men Dun Jia Singapore",
  pageTitleZh: "新加坡奇门遁甲咨询",
  pageTitleEn: "Qi Men Dun Jia Singapore Consultation",
  heroTitleZh: "用奇门遁甲，看清方向、时机与关键决策",
  heroTitleEn: "Use Qi Men Dun Jia to clarify direction, timing, and important decisions",
  heroSubtitleZh:
    "奇明風水由黄启明大师主理，结合奇门遁甲、风水布局、八字命理与现实处境分析，为新加坡客户提供事业财富、商业决策、感情关系、住宅办公室布局与空间能量净化方向的咨询。",
  heroSubtitleEn:
    "Led by Master Huang Qiming, QiMing Feng Shui provides Qi Men Dun Jia consultation in Singapore for career and wealth direction, business decisions, relationship clarity, home and office Feng Shui, and space energy purification.",
  trustPointsZh: ["新加坡本地咨询", "奇门遁甲 + 风水 + 八字", "16+ 年实战经验", "$288 起"],
  trustPointsEn: ["Singapore-Based", "Qi Men + Feng Shui + Bazi", "16+ Years Experience", "From $288"],
  symptomsTitleZh: "什么时候适合咨询奇门遁甲？",
  symptomsTitleEn: "When should you consult Qi Men Dun Jia?",
  symptomsZh: [
    "事业、财富或人生方向进入关键选择期。",
    "想创业、投资、签约、合作、开店或扩张。",
    "买房、租房、搬家、装修前，希望判断空间与时机。",
    "感情关系反复不顺，想看清缘分节奏与问题根源。",
    "近期运势受阻、睡眠不稳、家宅或办公室气场不顺。",
    "不想只靠感觉做决定，希望减少试错成本。"
  ],
  symptomsEn: [
    "You are facing an important career, wealth, or life-direction decision.",
    "You are considering starting a business, investing, signing, partnering, opening, or expanding.",
    "You want to assess timing and space before buying, renting, moving, or renovating.",
    "Relationship patterns keep repeating, and you want to understand the deeper timing and cause.",
    "Luck feels blocked, sleep feels unstable, or the energy of your home or office feels unsettled.",
    "You do not want to rely only on instinct and want to reduce the cost of trial and error."
  ],
  suitableTitleZh: "奇明風水的奇门遁甲咨询适合哪些人？",
  suitableTitleEn: "Who is QiMing Feng Shui's Qi Men Dun Jia consultation for?",
  suitableZh: [
    "新加坡企业主、创业者、管理层与专业人士。",
    "正在面对事业、财富、感情或家庭关键选择的人。",
    "准备买房、租房、装修、开店或调整办公室的人。",
    "希望结合奇门遁甲与风水布局改善现实问题的人。",
    "想在重要阶段看清方向、时机与风险的人。"
  ],
  suitableEn: [
    "Singapore business owners, entrepreneurs, leaders, and professionals.",
    "People facing key decisions in career, wealth, relationships, or family matters.",
    "Those preparing to buy, rent, renovate, open a shop, or adjust an office.",
    "Anyone who wants to combine Qi Men Dun Jia with Feng Shui layout for practical life issues.",
    "People who want clearer direction, timing, and risk awareness at an important stage."
  ],
  approachTitleZh: "启明大师如何运用奇门遁甲？",
  approachTitleEn: "How does Master Qiming use Qi Men Dun Jia?",
  approachIntroZh:
    "奇门遁甲不是一句简单的吉凶判断，而是一套关于时间、空间、方向、人物关系与行动节奏的综合分析方法。启明大师会结合你的现实问题、所在空间、决策节点与个人命理，判断当下应进、应守、应避，还是应该重新布局。",
  approachIntroEn:
    "Qi Men Dun Jia is not a simple yes-or-no prediction. It is a structured method for reading timing, direction, spatial influence, people dynamics, and action rhythm. Master Qiming combines your real situation, space, decision point, and destiny pattern to assess whether to move forward, hold, avoid, or realign.",
  steps: [
    {
      titleZh: "奇门时机判断",
      titleEn: "Qi Men Timing Analysis",
      descZh: "判断当前是否适合启动、签约、合作、投资、转型或等待。",
      descEn: "Assess whether the current timing supports launching, signing, partnering, investing, transitioning, or waiting."
    },
    {
      titleZh: "方向与路径分析",
      titleEn: "Direction and Path Analysis",
      descZh: "比较不同选择背后的顺逆、阻力与机会点。",
      descEn: "Compare different options by identifying alignment, resistance, and opportunity points."
    },
    {
      titleZh: "风水与空间配合",
      titleEn: "Feng Shui and Space Alignment",
      descZh: "结合住宅、办公室或店铺格局，判断空间是否支持你的目标。",
      descEn: "Review whether the home, office, or shop layout supports your intended goals."
    },
    {
      titleZh: "风险与破局建议",
      titleEn: "Risk Mapping and Practical Guidance",
      descZh: "看清容易失误的地方，并给出更稳的行动方向。",
      descEn: "Identify where mistakes are likely to happen and provide a steadier direction for action."
    }
  ],
  faqTitleZh: "奇门遁甲常见问题",
  faqTitleEn: "Qi Men Dun Jia FAQ",
  faqs: [
    {
      qZh: "奇门遁甲和风水有什么不同？",
      qEn: "What is the difference between Qi Men Dun Jia and Feng Shui?",
      aZh: "奇门遁甲更偏向时机、方向、决策与局势判断；风水更偏向空间格局、气场与环境影响。启明大师通常会结合两者一起看。",
      aEn: "Qi Men Dun Jia focuses more on timing, direction, decisions, and situational analysis, while Feng Shui focuses more on spatial layout, energy flow, and environmental influence. Master Qiming often combines both."
    },
    {
      qZh: "奇门遁甲可以看事业和财运吗？",
      qEn: "Can Qi Men Dun Jia help with career and wealth?",
      aZh: "可以。它适合用于判断事业方向、财富节奏、合作机会、投资时机、风险点与行动策略。",
      aEn: "Yes. It can be used to assess career direction, wealth rhythm, partnership opportunities, investment timing, risk points, and action strategy."
    },
    {
      qZh: "在新加坡可以线上咨询吗？",
      qEn: "Can I consult online in Singapore?",
      aZh: "可以。部分问题可以先线上判断；如涉及住宅、办公室或店铺风水布局，可再根据情况安排进一步咨询。",
      aEn: "Yes. Some matters can begin with an online assessment. If the issue involves home, office, or shop Feng Shui layout, a deeper consultation can be arranged as needed."
    },
    {
      qZh: "咨询前需要准备什么？",
      qEn: "What should I prepare before consultation?",
      aZh: "建议准备当前问题、出生资料、相关时间点，以及住宅、办公室或店铺的平面图和照片。",
      aEn: "Prepare your current issue, birth details, relevant timing, and floor plans or photos of the home, office, or shop if applicable."
    },
    {
      qZh: "如何预约黄启明大师？",
      qEn: "How do I book Master Huang Qiming?",
      aZh: "可以通过网站 WhatsApp 按钮联系奇明風水，说明你想咨询奇门遁甲、风水布局或空间能量净化。",
      aEn: "You can contact QiMing Feng Shui through the WhatsApp button on the website and mention whether you need Qi Men Dun Jia, Feng Shui layout, or space energy purification consultation."
    }
  ],
  ctaTitleZh: "重要决定之前，先看清局势",
  ctaTitleEn: "Before an important decision, first understand the situation clearly",
  ctaBodyZh:
    "很多问题不是努力不够，而是方向、时机、空间与能量没有对上。在行动之前，先通过奇门遁甲与风水判断看清关键点，往往能减少不必要的损耗。",
  ctaBodyEn:
    "Many problems are not caused by a lack of effort, but by misalignment in direction, timing, space, and energy. Before taking action, Qi Men Dun Jia and Feng Shui assessment can help reveal the key points and reduce unnecessary loss.",
  waTextZh: "你好启明大师，我想咨询新加坡奇门遁甲。",
  waTextEn: "Hello Master Qiming, I would like to consult about Qi Men Dun Jia in Singapore."
};

export const metadata: Metadata = {
  title: "Qi Men Dun Jia Singapore | 新加坡奇门遁甲咨询 | QiMing Feng Shui",
  description:
    "QiMing Feng Shui provides Qi Men Dun Jia consultation in Singapore for career, wealth, business decisions, relationships, Feng Shui layout, and space energy purification. Led by Master Huang Qiming with 16+ years of practice.",
  alternates: {
    canonical: "https://www.qmfeng.com/qi-men-dun-jia-singapore",
  },
  openGraph: {
    title: "Qi Men Dun Jia Singapore | 新加坡奇门遁甲咨询 | QiMing Feng Shui",
    description:
      "Singapore Qi Men Dun Jia consultation for career, wealth, business decisions, relationship clarity, Feng Shui layout, and space energy purification.",
    url: "https://www.qmfeng.com/qi-men-dun-jia-singapore",
    type: "website",
  },
};

export default function QiMenDunJiaSingaporePage() {
  return (
    <LanguageProvider>
      <ServiceDetailTemplate content={qiMenDunJiaSingaporeContent} />
    </LanguageProvider>
  );
}
