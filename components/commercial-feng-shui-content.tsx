"use client";

import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  Compass,
  Factory,
  Landmark,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Users,
  Warehouse,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";
import { useLanguage } from "@/contexts/language-context";

const WHATSAPP_BASE = "https://wa.me/6589593499";

function whatsappLink(message: string) {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

const GENERAL_WHATSAPP_MESSAGE =
  "Hello Qimen Strategy, I would like to enquire about Commercial Feng Shui. Property type: Office / Factory / Warehouse / Corporate Building. Approximate size: ____. Location: ____. Industry: ____. My main business concern is: ____.";

const serviceTypes = [
  {
    icon: Building2,
    titleZh: "办公室风水",
    titleEn: "Office Feng Shui",
    suitableZh: "适合办公室、诊所、教育机构、工作室及一般商业单位。",
    suitableEn: "For offices, clinics, education centres, studios and general commercial units.",
    bodyZh:
      "重点评估入口与接待区、老板及管理层位置、员工工位、部门关系、会议区、客户动线、光线、噪音与空间使用效率。",
    bodyEn:
      "Reviews the entrance and reception, founder and leadership positions, workstations, departmental relationships, meeting areas, client flow, light, noise and practical use of space.",
    bulletsZh: ["管理者专注与判断环境", "团队沟通与部门协作", "客户接待与第一印象"],
    bulletsEn: ["Leadership focus and decision environment", "Team communication and collaboration", "Client reception and first impression"],
    message:
      "Hello Qimen Strategy, I would like to enquire about Office Feng Shui. Property type: Office. Approximate size: ____. Location: ____. Industry: ____. Team size: ____. My main concern is: ____. ",
  },
  {
    icon: Factory,
    titleZh: "工厂与工业空间风水",
    titleEn: "Factory & Industrial Feng Shui",
    suitableZh: "适合工厂、厂房、生产设施、仓库、物流及工业单位。",
    suitableEn: "For factories, production facilities, warehouses, logistics and industrial units.",
    bodyZh:
      "重点结合生产与现实运营，评估厂区入口、原料进入、生产线、设备区域、仓储、装卸、成品出货、行政办公区与管理动线。",
    bodyEn:
      "Reviews the site entrance, raw-material flow, production lines, equipment zones, storage, loading, finished-goods movement, administrative offices and management circulation in relation to actual operations.",
    bulletsZh: ["生产、仓储与物流动线", "生产区与行政管理关系", "扩建、搬迁及设备安装时机"],
    bulletsEn: ["Production, storage and logistics flow", "Relationship between operations and administration", "Expansion, relocation and equipment-installation timing"],
    message:
      "Hello Qimen Strategy, I would like to enquire about Factory & Industrial Feng Shui. Property type: Factory / Industrial Facility / Warehouse. Approximate size: ____. Location: ____. Industry: ____. Main production or logistics concern: ____. ",
  },
  {
    icon: Landmark,
    titleZh: "企业办公大楼与总部风水",
    titleEn: "Corporate Building & Headquarters Feng Shui",
    suitableZh: "适合企业总部、独立办公大楼、多层办公空间及企业园区。",
    suitableEn: "For corporate headquarters, standalone office buildings, multi-storey offices and business campuses.",
    bodyZh:
      "重点评估大楼整体朝向与入口、大堂接待、高层办公室、董事会会议室、多楼层部门关系、电梯楼梯动线、客户区域及企业形象空间。",
    bodyEn:
      "Reviews the building orientation and main entrance, lobby and reception, executive offices, boardrooms, departments across floors, lift and stair circulation, client areas and corporate-image spaces.",
    bulletsZh: ["董事长、CEO及高层管理空间", "多楼层部门关系与组织动线", "总部形象、客户信任与接待体验"],
    bulletsEn: ["Chairperson, CEO and executive spaces", "Cross-floor departmental and organisational flow", "Headquarters image, client confidence and reception experience"],
    message:
      "Hello Qimen Strategy, I would like to enquire about Corporate Building & Headquarters Feng Shui. Property type: Corporate Building / Headquarters / Multi-storey Office. Approximate size or number of floors: ____. Location: ____. Industry: ____. Main concern: ____. ",
  },
];

const importancePoints = [
  {
    icon: Building2,
    titleZh: "办公室不是单纯的装修空间",
    titleEn: "An Office Is More Than Interior Design",
    bodyZh:
      "办公室承载管理、沟通、客户接待和日常执行。入口、座位、动线、会议区与管理者位置，都会影响员工如何使用空间。",
    bodyEn:
      "An office carries management, communication, client reception and daily execution. The entrance, seating, circulation, meeting areas and leadership position all shape how people use the space.",
  },
  {
    icon: Compass,
    titleZh: "管理者的位置影响专注与判断",
    titleEn: "Leadership Position Affects Focus and Judgment",
    bodyZh:
      "老板或管理层长期处在受干扰、背后无靠、动线冲击或视野受限的位置，可能增加疲劳、分心和管理压力。",
    bodyEn:
      "When founders or managers work in exposed, interrupted or poorly supported positions, the environment may add distraction, fatigue and management pressure.",
  },
  {
    icon: Users,
    titleZh: "团队布局影响协作方式",
    titleEn: "Team Layout Shapes Collaboration",
    bodyZh:
      "工位密度、部门位置、通道、噪音与会议空间，会影响专注、沟通效率、隐私和团队之间的互动。",
    bodyEn:
      "Workstation density, departmental placement, circulation, noise and meeting areas can influence concentration, communication, privacy and team interaction.",
  },
  {
    icon: BriefcaseBusiness,
    titleZh: "客户接待空间代表企业第一印象",
    titleEn: "Reception Space Shapes the First Business Impression",
    bodyZh:
      "入口、接待区、洽谈区和客户动线是否清楚、稳定、有秩序，会直接影响客户进入公司的体验。",
    bodyEn:
      "The entrance, reception, discussion areas and client route influence whether the business feels clear, stable and professionally organised from the first visit.",
  },
];

const environmentReviews = [
  {
    icon: Building2,
    titleZh: "办公室重点",
    titleEn: "Office Review",
    itemsZh: [
      "入口、门向与接待区",
      "老板办公室与管理层位置",
      "员工工位、部门关系与协作动线",
      "会议室、谈判区与客户沟通空间",
      "光线、通风、噪音与空间压迫感",
    ],
    itemsEn: [
      "Entrance, orientation and reception",
      "Founder office and leadership positions",
      "Workstations, departments and collaboration flow",
      "Meeting, negotiation and client discussion areas",
      "Light, ventilation, noise and spatial pressure",
    ],
  },
  {
    icon: Factory,
    titleZh: "工厂与工业空间重点",
    titleEn: "Factory & Industrial Review",
    itemsZh: [
      "厂区总入口、主要门向与车辆动线",
      "原料进入、生产加工、仓储与成品出货",
      "机器设备、生产线及大型设施位置",
      "装卸区、物流通道与仓库关系",
      "厂长、管理层、行政与生产区域关系",
    ],
    itemsEn: [
      "Site entrance, main orientation and vehicle circulation",
      "Raw materials, production, storage and finished-goods flow",
      "Machinery, production lines and major equipment positions",
      "Loading areas, logistics routes and warehouse relationships",
      "Factory management, administration and production-zone relationships",
    ],
  },
  {
    icon: Landmark,
    titleZh: "企业办公大楼与总部重点",
    titleEn: "Corporate Building & Headquarters Review",
    itemsZh: [
      "大楼整体朝向、主要入口与大堂",
      "董事长、CEO与高层办公室",
      "董事会会议室与重大谈判区域",
      "不同楼层、部门及核心功能的关系",
      "电梯、楼梯、公共区域与访客动线",
    ],
    itemsEn: [
      "Building orientation, main entrance and lobby",
      "Chairperson, CEO and executive offices",
      "Boardrooms and major negotiation areas",
      "Relationships between floors, departments and key functions",
      "Lifts, stairs, common areas and visitor circulation",
    ],
  },
];

const suitableSituations = [
  {
    titleZh: "准备租用、购买或开发新空间",
    titleEn: "Selecting or Developing a New Space",
    bodyZh: "在签约、装修、设备规划或搬入前，先评估空间是否适合企业当前阶段与实际运营。",
    bodyEn: "Review whether the site fits the company’s stage and operations before signing, designing, installing equipment or moving in.",
  },
  {
    titleZh: "现有空间长期使用不顺",
    titleEn: "The Current Space Does Not Work Well",
    bodyZh: "员工分心、生产或物流动线混乱、空间拥堵、管理困难、客户体验差，或老板长期感到疲惫。",
    bodyEn: "Useful when distraction, production or logistics confusion, congestion, management difficulty, weak client experience or founder fatigue persists.",
  },
  {
    titleZh: "企业正在扩张、转型或重组",
    titleEn: "Expansion, Transition or Restructuring",
    bodyZh: "团队、生产、部门与管理方式变化后，旧空间布局可能已经不再支持新的经营需求。",
    bodyEn: "When teams, production, departments or management structures change, the existing layout may no longer support the new operating model.",
  },
  {
    titleZh: "装修、扩建或设备安装前",
    titleEn: "Before Renovation, Expansion or Equipment Installation",
    bodyZh: "先确认入口、管理层、工位、生产仓储、会议区和主要动线，再进入设计、施工与设备安排。",
    bodyEn: "Clarify entrances, leadership, workstations, production and storage, meeting areas and circulation before design, construction or equipment planning.",
  },
];

const process = [
  {
    no: "01",
    titleZh: "说明企业与空间情况",
    titleEn: "Share the Business and Space Context",
    bodyZh: "提供物业类型、面积或楼层、地点、行业、团队或生产规模及希望改善的重点。",
    bodyEn: "Provide the property type, size or floors, location, industry, team or production scale and the main concern to improve.",
  },
  {
    no: "02",
    titleZh: "确认资料与评估范围",
    titleEn: "Confirm Information and Scope",
    bodyZh: "顾问会说明是否需要平面图、厂区图、照片、现场查看，以及本次评估的具体范围。",
    bodyEn: "The consultant confirms whether floor plans, site plans, photos or an on-site visit are required and defines the assessment scope.",
  },
  {
    no: "03",
    titleZh: "结合经营与运营需求评估空间",
    titleEn: "Assess the Space Against Business Operations",
    bodyZh: "不只看方位，也结合管理、团队、生产、物流、客户动线与实际经营目标进行判断。",
    bodyEn: "The review considers not only direction, but also management, teams, production, logistics, client flow and the actual business objective.",
  },
  {
    no: "04",
    titleZh: "确认调整重点与实施次序",
    titleEn: "Prioritise Adjustments and Implementation",
    bodyZh: "根据确认的服务范围，整理应优先调整的位置、动线、部门关系与空间使用方式。",
    bodyEn: "Within the confirmed scope, prioritise positions, circulation, departmental relationships and the use of space that require adjustment.",
  },
];

export default function CommercialFengShuiContent() {
  const { lang, t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#070604] text-white">
      <Navbar />
      <main>
        <section className="relative overflow-hidden border-b border-[#d6ad63]/20 px-4 pb-20 pt-36 md:pb-28 md:pt-44">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(214,173,99,0.20),transparent_36%)]" />
          <div className="container relative mx-auto max-w-6xl">
            <div className="max-w-5xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">
                {t(
                  "商业风水｜办公室、工厂与企业办公大楼",
                  "Commercial Feng Shui · Office, Factory & Corporate Building"
                )}
              </p>
              <h1
                className="mt-6 text-4xl font-semibold leading-[1.04] text-[#f4dfb0] md:text-7xl"
                style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
              >
                {t(
                  "企业空间，应当支持企业每天如何运作",
                  "Your Business Space Should Support How the Organisation Operates"
                )}
              </h1>
              <p className="mt-7 max-w-4xl text-base leading-8 text-white/72 md:text-lg">
                {t(
                  "启明遁甲的商业风水服务覆盖办公室、工厂与工业空间，以及企业办公大楼与总部。重点不是简单摆放物品，而是结合企业管理、团队、生产、物流、客户接待与发展阶段，判断空间是否支持现实经营。",
                  "Qimen Strategy provides Commercial Feng Shui for offices, factories and industrial facilities, as well as corporate buildings and headquarters. The focus is not simply on placing objects, but on whether the space supports real management, teams, production, logistics, client experience and the organisation’s stage of growth."
                )}
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.11em] text-[#e2bd6b]">
                <span className="border border-[#d6ad63]/35 px-4 py-2">{t("办公室", "Office")}</span>
                <span className="border border-[#d6ad63]/35 px-4 py-2">{t("工厂与工业空间", "Factory & Industrial")}</span>
                <span className="border border-[#d6ad63]/35 px-4 py-2">{t("企业办公大楼与总部", "Corporate Building & HQ")}</span>
                <span className="border border-[#d6ad63]/35 px-4 py-2">{t("按物业与范围报价", "Scope-Based Quotation")}</span>
              </div>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href={whatsappLink(GENERAL_WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#d6ad63] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black hover:bg-[#f4dfb0]"
                >
                  <MessageCircle size={18} />
                  {t("咨询商业风水", "Enquire About Commercial Feng Shui")}
                </a>
                <a
                  href="#service-types"
                  className="inline-flex items-center justify-center gap-3 border border-[#d6ad63]/65 px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#f4dfb0] hover:bg-[#d6ad63]/10"
                >
                  {t("查看三类企业空间服务", "View Commercial Space Services")}
                  <ArrowRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="service-types" className="px-4 py-20 md:py-28">
          <div className="container mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d6ad63]">
              {t("商业风水服务范围", "Commercial Feng Shui Services")}
            </p>
            <h2
              className="mt-4 max-w-4xl text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl"
              style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
            >
              {t(
                "不同企业空间，需要不同的评估重点",
                "Different Business Environments Require Different Review Priorities"
              )}
            </h2>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {serviceTypes.map((service) => {
                const Icon = service.icon;
                const bullets = lang === "zh" ? service.bulletsZh : service.bulletsEn;
                return (
                  <article key={service.titleEn} className="flex h-full flex-col border border-[#d6ad63]/25 bg-white/[0.035] p-7">
                    <Icon className="text-[#d6ad63]" size={27} />
                    <h3 className="mt-5 text-2xl font-semibold text-[#f4dfb0]">{t(service.titleZh, service.titleEn)}</h3>
                    <p className="mt-3 text-sm font-semibold leading-6 text-[#d6ad63]">{t(service.suitableZh, service.suitableEn)}</p>
                    <p className="mt-4 text-sm leading-7 text-white/62">{t(service.bodyZh, service.bodyEn)}</p>
                    <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
                      {bullets.map((bullet) => (
                        <p key={bullet} className="flex items-start gap-3 text-sm leading-6 text-white/70">
                          <Check className="mt-1 shrink-0 text-[#d6ad63]" size={16} />
                          {bullet}
                        </p>
                      ))}
                    </div>
                    <a
                      href={whatsappLink(service.message)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center justify-between border border-[#d6ad63]/60 px-5 py-3.5 text-sm font-bold text-[#f4dfb0] transition hover:bg-[#d6ad63] hover:text-black"
                    >
                      {t("咨询此项服务", "Enquire About This Service")}
                      <ArrowRight size={16} />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="office-importance" className="bg-[#f6f0e6] px-4 py-20 text-[#241b14] md:py-28">
          <div className="container mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#a8753f]">
              {t("Office风水的重要性", "Why Office Feng Shui Matters")}
            </p>
            <h2
              className="mt-4 max-w-4xl text-3xl font-bold leading-tight md:text-5xl"
              style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
            >
              {t(
                "企业每天的判断、沟通与执行，都发生在同一个空间里",
                "Daily Decisions, Communication and Execution All Happen Inside the Same Space"
              )}
            </h2>
            <p className="mt-5 max-w-4xl text-base leading-8 text-[#5f4e3d]">
              {t(
                "Office风水仍然是商业风水的重要基础。老板和管理层长期工作的环境、员工如何协作、客户如何进入和感受公司，都会在日常经营中不断重复。",
                "Office Feng Shui remains a core part of Commercial Feng Shui. The environment in which leaders work, the way teams collaborate and the experience clients have when entering the company are repeated every business day."
              )}
            </p>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {importancePoints.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.titleEn} className="border border-[#d8c6ae] bg-white p-7 shadow-sm">
                    <Icon className="text-[#a8753f]" size={25} />
                    <h3 className="mt-5 text-2xl font-bold">{t(item.titleZh, item.titleEn)}</h3>
                    <p className="mt-4 text-sm leading-7 text-[#5f4e3d]">{t(item.bodyZh, item.bodyEn)}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 md:py-28">
          <div className="container mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d6ad63]">
              {t("不同空间的评估重点", "Review Priorities by Environment")}
            </p>
            <h2
              className="mt-4 max-w-4xl text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl"
              style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
            >
              {t(
                "从老板办公室到生产物流，再到总部多楼层组织关系",
                "From Leadership Offices to Production Flow and Multi-Floor Headquarters"
              )}
            </h2>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {environmentReviews.map((review) => {
                const Icon = review.icon;
                const items = lang === "zh" ? review.itemsZh : review.itemsEn;
                return (
                  <article key={review.titleEn} className="border border-[#d6ad63]/20 bg-white/[0.035] p-7">
                    <Icon className="text-[#d6ad63]" size={26} />
                    <h3 className="mt-5 text-2xl font-semibold text-[#f4dfb0]">{t(review.titleZh, review.titleEn)}</h3>
                    <div className="mt-6 space-y-3">
                      {items.map((item) => (
                        <p key={item} className="flex items-start gap-3 text-sm leading-7 text-white/65">
                          <Check className="mt-1 shrink-0 text-[#d6ad63]" size={16} />
                          {item}
                        </p>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#f6f0e6] px-4 py-20 text-[#241b14] md:py-28">
          <div className="container mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#a8753f]">
              {t("何时适合评估", "When to Review the Space")}
            </p>
            <h2
              className="mt-4 max-w-4xl text-3xl font-bold leading-tight md:text-5xl"
              style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
            >
              {t("不要等装修完成、设备落位或问题扩大后才处理", "Do Not Wait Until Renovation, Equipment Placement or Problems Are Finalised")}
            </h2>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {suitableSituations.map((item) => (
                <article key={item.titleEn} className="border-t-2 border-[#a8753f] bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-bold">{t(item.titleZh, item.titleEn)}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5f4e3d]">{t(item.bodyZh, item.bodyEn)}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 md:py-28">
          <div className="container mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d6ad63]">
              {t("评估流程", "Assessment Process")}
            </p>
            <h2
              className="mt-4 max-w-4xl text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl"
              style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
            >
              {t("先理解企业运营，再判断空间", "Understand the Operations Before Assessing the Space")}
            </h2>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {process.map((item) => (
                <article key={item.no} className="border border-[#d6ad63]/20 bg-white/[0.035] p-6">
                  <p className="text-sm font-bold text-[#d6ad63]">{item.no}</p>
                  <h3 className="mt-4 text-xl font-semibold text-[#f4dfb0]">{t(item.titleZh, item.titleEn)}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/62">{t(item.bodyZh, item.bodyEn)}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#d6ad63]/20 bg-[#0b0907] px-4 py-20 md:py-24">
          <div className="container mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <ShieldCheck className="text-[#d6ad63]" size={27} />
              <h2
                className="mt-5 text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl"
                style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
              >
                {t("商业风水服务的专业边界", "Professional Boundaries of Commercial Feng Shui")}
              </h2>
            </div>
            <div className="space-y-4">
              {[
                t("不保证营业额、利润、产量、融资、客户数量或其他特定经营结果。", "No revenue, profit, production-output, financing, customer-volume or other specific business outcome is guaranteed."),
                t("不会强迫客户购买任何摆件、物品或额外产品。", "Clients are not pressured to purchase objects, products or additional items."),
                t("工厂风水不替代工业工程、生产管理、机械、电气、消防、职业安全与法定合规意见。", "Factory Feng Shui does not replace industrial engineering, production management, mechanical, electrical, fire-safety, occupational-safety or statutory compliance advice."),
                t("办公大楼风水不替代建筑、室内设计、结构、消防、工程、安全或其他受监管专业意见。", "Corporate-building Feng Shui does not replace architectural, interior-design, structural, fire-safety, engineering, safety or other regulated professional advice."),
                t("具体服务范围、是否上门及费用，会在了解物业后确认。", "The exact scope, whether an on-site visit is required and the quotation are confirmed after reviewing the property."),
              ].map((item) => (
                <p key={item} className="flex items-start gap-3 border-b border-white/10 pb-4 text-sm leading-7 text-white/65">
                  <Check className="mt-1 shrink-0 text-[#d6ad63]" size={17} />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 text-center md:py-24">
          <div className="container mx-auto max-w-4xl">
            <MapPin className="mx-auto text-[#d6ad63]" size={28} />
            <h2
              className="mt-6 text-3xl font-semibold text-[#f4dfb0] md:text-5xl"
              style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
            >
              {t(
                "准备搬办公室、规划工厂，或评估企业总部？",
                "Planning an Office Move, Factory Layout or Corporate Headquarters Review?"
              )}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/65">
              {t(
                "请先说明物业类型、面积或楼层、地点、行业和希望改善的问题。顾问会确认所需资料、评估方式与服务范围。",
                "Start by sharing the property type, size or floors, location, industry and main concern. The consultant will confirm the required information, assessment method and service scope."
              )}
            </p>
            <a
              href={whatsappLink(GENERAL_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-3 bg-[#d6ad63] px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black hover:bg-[#f4dfb0]"
            >
              <MessageCircle size={18} />
              {t("WhatsApp咨询商业风水", "WhatsApp Commercial Feng Shui Enquiry")}
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
