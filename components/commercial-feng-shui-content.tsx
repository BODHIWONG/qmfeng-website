"use client";

import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  Compass,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Users,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";
import { useLanguage } from "@/contexts/language-context";

const WHATSAPP_LINK =
  "https://wa.me/6589593499?text=Hello%20Qimen%20Strategy%2C%20I%20would%20like%20to%20enquire%20about%20Commercial%20Feng%20Shui%20and%20Office%20Feng%20Shui.%20Property%20type%3A%20____.%20Approximate%20size%3A%20____.%20Location%3A%20____.%20My%20main%20business%20concern%20is%3A%20____.";

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

const reviewAreas = [
  { zh: "办公室入口、门向与接待区", en: "Office entrance, orientation and reception" },
  { zh: "老板办公室与管理层位置", en: "Founder office and leadership positions" },
  { zh: "员工工位、部门关系与协作动线", en: "Workstations, departments and collaboration flow" },
  { zh: "会议室、谈判区与客户沟通空间", en: "Meeting, negotiation and client discussion areas" },
  { zh: "财务、行政、销售及关键功能区域", en: "Finance, administration, sales and key functional zones" },
  { zh: "光线、通风、噪音、拥堵与空间压迫感", en: "Light, ventilation, noise, congestion and spatial pressure" },
  { zh: "搬迁、装修、扩张或重新布局的时机", en: "Timing for relocation, renovation, expansion or reconfiguration" },
  { zh: "空间布局是否支持当前经营目标", en: "Whether the layout supports the current business objective" },
];

const suitableSituations = [
  {
    titleZh: "准备租用或购买新办公室",
    titleEn: "Selecting a New Office",
    bodyZh: "在签约、装修或搬入前，先评估空间是否适合企业当前阶段与实际使用。",
    bodyEn: "Review whether the space fits the company’s stage and practical use before signing, renovating or moving in.",
  },
  {
    titleZh: "办公室长期使用不顺",
    titleEn: "The Current Office Does Not Work Well",
    bodyZh: "员工容易分心、空间拥堵、沟通不顺、客户接待体验差，或老板长期感到疲惫。",
    bodyEn: "Useful when distraction, congestion, communication problems, weak client experience or founder fatigue persist.",
  },
  {
    titleZh: "企业正在扩张、转型或重组",
    titleEn: "Expansion, Transition or Restructuring",
    bodyZh: "当团队、部门和管理方式变化时，旧空间布局可能已经不再支持新的经营需求。",
    bodyEn: "When teams, departments and management structures change, the existing layout may no longer support the new operating model.",
  },
  {
    titleZh: "装修前希望减少错误成本",
    titleEn: "Before Renovation or Reconfiguration",
    bodyZh: "先确认入口、管理层、工位、会议区和主要动线，再进入设计与施工阶段。",
    bodyEn: "Clarify the entrance, leadership positions, workstations, meeting areas and circulation before design and construction begin.",
  },
];

const process = [
  {
    no: "01",
    titleZh: "说明企业与空间情况",
    titleEn: "Share the Business and Space Context",
    bodyZh: "提供物业类型、面积、地点、行业、团队规模及希望改善的重点。",
    bodyEn: "Provide the property type, approximate size, location, industry, team size and the main concern to improve.",
  },
  {
    no: "02",
    titleZh: "确认资料与评估范围",
    titleEn: "Confirm Information and Scope",
    bodyZh: "顾问会说明是否需要平面图、照片、现场查看，以及本次评估的具体范围。",
    bodyEn: "The consultant confirms whether floor plans, photos or an on-site visit are required and defines the assessment scope.",
  },
  {
    no: "03",
    titleZh: "结合经营需求评估办公室",
    titleEn: "Assess the Office Against Business Needs",
    bodyZh: "不只看方位，也结合管理、团队、客户动线与实际经营目标进行判断。",
    bodyEn: "The review considers not only direction, but also management, team use, client flow and the actual business objective.",
  },
  {
    no: "04",
    titleZh: "确认调整重点与实施次序",
    titleEn: "Prioritise Adjustments and Implementation",
    bodyZh: "根据确认的服务范围，整理应优先调整的位置、动线与空间使用方式。",
    bodyEn: "Within the confirmed scope, prioritise the positions, circulation and use of space that require adjustment.",
  },
];

export default function CommercialFengShuiContent() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#070604] text-white">
      <Navbar />
      <main>
        <section className="relative overflow-hidden border-b border-[#d6ad63]/20 px-4 pb-20 pt-36 md:pb-28 md:pt-44">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(214,173,99,0.20),transparent_36%)]" />
          <div className="container relative mx-auto max-w-6xl">
            <div className="max-w-5xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">
                {t("商业风水｜办公室风水｜新加坡", "Commercial Feng Shui · Office Feng Shui · Singapore")}
              </p>
              <h1
                className="mt-6 text-4xl font-semibold leading-[1.04] text-[#f4dfb0] md:text-7xl"
                style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
              >
                {t(
                  "办公室的布局，会持续影响企业每天如何运作",
                  "Your Office Layout Influences How the Business Operates Every Day"
                )}
              </h1>
              <p className="mt-7 max-w-4xl text-base leading-8 text-white/72 md:text-lg">
                {t(
                  "商业风水不是简单摆放物品，也不是以“旺财”口号代替经营。Office风水的重点，是让入口、管理者位置、员工工位、会议区与客户动线，更好地支持专注、沟通、管理和企业当前的发展阶段。",
                  "Commercial Feng Shui is not simply about placing objects or replacing business management with promises of prosperity. Office Feng Shui focuses on whether the entrance, leadership position, workstations, meeting areas and client flow support concentration, communication, management and the company’s current stage of growth."
                )}
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.11em] text-[#e2bd6b]">
                <span className="border border-[#d6ad63]/35 px-4 py-2">{t("办公室为重点", "Office-Focused")}</span>
                <span className="border border-[#d6ad63]/35 px-4 py-2">{t("现场或按资料评估", "On-Site or Document Review")}</span>
                <span className="border border-[#d6ad63]/35 px-4 py-2">{t("按物业与范围报价", "Scope-Based Quotation")}</span>
              </div>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#d6ad63] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black hover:bg-[#f4dfb0]"
                >
                  <MessageCircle size={18} />
                  {t("咨询商业风水", "Enquire About Commercial Feng Shui")}
                </a>
                <a
                  href="#office-importance"
                  className="inline-flex items-center justify-center gap-3 border border-[#d6ad63]/65 px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#f4dfb0] hover:bg-[#d6ad63]/10"
                >
                  {t("为什么Office风水重要", "Why Office Feng Shui Matters")}
                  <ArrowRight size={17} />
                </a>
              </div>
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
              {t("重点评估区域", "Key Areas Reviewed")}
            </p>
            <h2
              className="mt-4 max-w-4xl text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl"
              style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
            >
              {t(
                "从老板办公室到员工工位，都应服务于企业实际运作",
                "From the Founder’s Office to Team Workstations, the Space Should Support Real Operations"
              )}
            </h2>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {reviewAreas.map((item) => (
                <p
                  key={item.en}
                  className="flex items-start gap-3 border border-[#d6ad63]/20 bg-white/[0.035] p-5 text-sm leading-7 text-white/68"
                >
                  <Check className="mt-1 shrink-0 text-[#d6ad63]" size={17} />
                  {t(item.zh, item.en)}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f6f0e6] px-4 py-20 text-[#241b14] md:py-28">
          <div className="container mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#a8753f]">
              {t("何时适合评估", "When to Review the Office")}
            </p>
            <h2
              className="mt-4 max-w-4xl text-3xl font-bold leading-tight md:text-5xl"
              style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
            >
              {t("不要等装修完成或问题扩大后才处理", "Do Not Wait Until Renovation Is Complete or Problems Have Grown")}
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
              {t("先理解企业，再判断空间", "Understand the Business Before Assessing the Space")}
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
                t("不保证营业额、利润、融资、客户数量或其他特定经营结果。", "No revenue, profit, financing, customer-volume or other specific business outcome is guaranteed."),
                t("不会强迫客户购买任何摆件、物品或额外产品。", "Clients are not pressured to purchase objects, products or additional items."),
                t("风水评估不替代建筑、室内设计、消防、工程、安全或其他受监管专业意见。", "Feng Shui assessment does not replace architectural, interior-design, fire-safety, engineering, safety or other regulated professional advice."),
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
              {t("准备搬办公室、装修或重新布局？", "Planning an Office Move, Renovation or Reconfiguration?")}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/65">
              {t(
                "请先说明物业类型、面积、地点、行业和希望改善的问题。顾问会确认所需资料、评估方式与服务范围。",
                "Start by sharing the property type, approximate size, location, industry and main concern. The consultant will confirm the required information, assessment method and service scope."
              )}
            </p>
            <a
              href={WHATSAPP_LINK}
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
