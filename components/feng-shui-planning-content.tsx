"use client";

import Link from "next/link";
import { ArrowRight, Home, Building2, ClipboardCheck, Compass, MessageCircle, BriefcaseBusiness, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";
import { useLanguage } from "@/contexts/language-context";
import { useLocalizedHref } from "@/hooks/use-localized-href";

const WHATSAPP_URL = "https://wa.me/6589909257";

const serviceAreas = [
  {
    icon: Home,
    titleZh: "个人住宅风水布局",
    titleEn: "Residential Feng Shui Planning",
    introZh: "为公寓、HDB住宅、私人住宅及搬迁中的家庭提供空间评估与布局建议。",
    introEn: "Space assessment and layout guidance for HDB flats, apartments, private homes and households preparing to move.",
    pointsZh: ["住宅整体格局与主要出入口", "卧室、书房及日常活动空间", "家具布置、动线与空间使用需求", "入住、搬迁或装修前的布局考虑"],
    pointsEn: ["Overall layout and main entrances", "Bedrooms, study areas and everyday living spaces", "Furniture placement, circulation and practical use", "Planning considerations before moving, renovating or occupying a home"],
  },
  {
    icon: Building2,
    titleZh: "企业与商业空间风水布局",
    titleEn: "Business & Commercial Feng Shui",
    introZh: "为办公室、店铺、诊所、工作室及企业经营场所提供与实际运营相结合的空间评估。",
    introEn: "Space assessment for offices, retail units, clinics, studios and business premises, considered alongside how the business operates.",
    pointsZh: ["入口、接待区与客户动线", "管理者位置、团队工位与会议空间", "店铺展示、服务流程与空间效率", "搬迁、扩张或重新规划空间时的重点"],
    pointsEn: ["Entrances, reception and client circulation", "Leadership positions, team workstations and meeting areas", "Retail display, service flow and spatial efficiency", "Key considerations when relocating, expanding or reconfiguring a space"],
  },
];

const process = [
  { no: "01", zh: "了解空间与目标", en: "Understand the Space", bodyZh: "确认物业类型、平面图、使用者、日常用途及最希望改善的问题。", bodyEn: "Confirm the property type, floor plan, occupants, daily use and the priorities to address." },
  { no: "02", zh: "评估现有布局", en: "Review the Existing Layout", bodyZh: "结合空间格局、入口、动线、主要功能区域与实际限制进行评估。", bodyEn: "Review the layout, entrances, circulation, functional zones and practical constraints." },
  { no: "03", zh: "提出可执行建议", en: "Provide Practical Recommendations", bodyZh: "按优先顺序提出布局调整建议，并区分可立即处理与需要进一步规划的事项。", bodyEn: "Prioritise recommendations and distinguish immediate adjustments from changes requiring further planning." },
  { no: "04", zh: "确认范围与后续", en: "Agree Scope and Follow-up", bodyZh: "根据项目情况确认交付范围、是否需要现场评估及后续支持安排。", bodyEn: "Confirm deliverables, whether an on-site assessment is needed and any follow-up support." },
];

export default function FengShuiPlanningContent() {
  const { t } = useLanguage();
  const localizeHref = useLocalizedHref();

  return (
    <div className="min-h-screen bg-[#0e0c0a] text-white">
      <Navbar />
      <main>
        <section className="relative overflow-hidden border-b border-[#d6ad63]/20 px-4 pb-20 pt-36 md:pb-28 md:pt-44">
          <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-[#d6ad63]/[0.06] blur-3xl" />
          <div className="container relative mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">{t("启明遁甲 · 核心业务", "QIMEN STRATEGY · CORE SERVICE")}</p>
            <h1 className="mt-6 max-w-5xl text-4xl font-semibold leading-tight text-[#f4dfb0] md:text-6xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
              {t("风水布局，不止看空间，更要理解人在其中如何生活与经营。", "Feng Shui Begins with Understanding How People Live and Work in a Space.")}
            </h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-white/68 md:text-lg">
              {t("风水布局是启明遁甲的核心服务。我们为住宅、店铺、办公室及企业经营空间提供专业评估与布局建议，结合空间格局、使用需求和现实条件，协助客户厘清优先事项与可执行的调整方向。", "Feng Shui planning is a core service of Qimen Strategy. We assess homes, retail units, offices and business premises, considering spatial layout, how the space is used and practical constraints to identify priorities and actionable adjustments.")}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href={localizeHref("/contact")} className="inline-flex items-center justify-center gap-3 bg-[#d6ad63] px-7 py-4 text-sm font-bold text-black hover:bg-[#f4dfb0]">
                {t("WhatsApp 咨询风水布局", "Enquire About Feng Shui")}<MessageCircle size={17} />
              </a>
              <Link href={localizeHref("/commercial-feng-shui")} className="inline-flex items-center justify-center gap-2 border border-white/20 px-7 py-4 text-sm font-semibold text-white/82 hover:border-[#d6ad63]">
                {t("查看企业商业风水详情", "Explore Commercial Feng Shui")}<ArrowRight size={16} />
              </Link>
            </div>
            <div className="mt-10 grid gap-px border border-[#d6ad63]/25 bg-[#d6ad63]/20 sm:grid-cols-3">
              {[t("住宅与家庭空间", "Homes & Living Spaces"), t("办公室与店铺", "Offices & Retail"), t("企业经营场所", "Business Premises")].map((item) => <div key={item} className="bg-black/70 px-4 py-4 text-center text-xs font-bold tracking-[0.08em] text-[#e8cc91]">{item}</div>)}
            </div>
          </div>
        </section>

        <section className="bg-[#f6f0e7] px-4 py-20 text-[#241b14] md:py-28">
          <div className="container mx-auto max-w-6xl">
            <div className="mx-auto mb-12 max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#956b32]">{t("启明遁甲核心风水服务", "CORE FENG SHUI SERVICES")}</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">{t("从住宅到商业空间，提供有针对性的风水布局建议。", "Purposeful Feng Shui Guidance for Homes and Business Spaces.")}</h2>
            </div>
            <div className="grid items-stretch gap-6 lg:grid-cols-2">
              {serviceAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <article key={area.titleEn} className="group flex h-full flex-col border border-[#d8c6aa] bg-white p-7 transition-all duration-300 hover:border-[#b88943] hover:shadow-xl md:p-9">
                    <div className="flex h-14 w-14 items-center justify-center border border-[#b88943]/45 bg-[#f6f0e7] text-[#956b32] transition-colors group-hover:bg-[#17130f] group-hover:text-[#d6ad63]"><Icon size={25} /></div>
                    <h3 className="mt-6 text-2xl font-bold leading-tight md:text-3xl">{t(area.titleZh, area.titleEn)}</h3>
                    <p className="mt-4 text-sm leading-7 text-[#665440]">{t(area.introZh, area.introEn)}</p>
                    <ul className="mt-6 space-y-3">
                      {area.pointsZh.map((point, index) => <li key={point} className="flex items-start gap-3 text-sm leading-6 text-[#493a2a]"><ClipboardCheck size={17} className="mt-0.5 shrink-0 text-[#9b7136]" />{t(point, area.pointsEn[index])}</li>)}
                    </ul>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center justify-between border-t border-[#eadfce] pt-5 text-sm font-bold text-[#8c6127] transition-colors hover:text-[#241b14]">{t("咨询此类风水布局", "Enquire About This Feng Shui Service")}<ArrowRight size={17} /></a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 md:py-28">
          <div className="container mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d6ad63]">{t("服务流程", "Our Process")}</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl">{t("清晰的步骤，让建议更容易落地。", "A Clear Process Makes Recommendations Easier to Apply.")}</h2>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((step) => <article key={step.no} className="border border-white/10 bg-white/[0.035] p-6"><p className="text-sm font-bold text-[#d6ad63]">{step.no}</p><h3 className="mt-4 text-xl font-semibold text-[#f4dfb0]">{t(step.zh, step.en)}</h3><p className="mt-3 text-sm leading-7 text-white/62">{t(step.bodyZh, step.bodyEn)}</p></article>)}
            </div>
          </div>
        </section>

        <section className="bg-[#f6f0e7] px-4 py-20 text-[#241b14] md:py-24">
          <div className="container mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div>
              <Compass size={27} className="text-[#956b32]" />
              <h2 className="mt-5 text-3xl font-bold leading-tight md:text-4xl">{t("风水布局的专业边界", "A Practical and Responsible Approach")}</h2>
            </div>
            <div className="space-y-4 text-sm leading-7 text-[#665440]">
              <p>{t("布局建议会结合空间条件与客户目标；实际可行性仍取决于物业结构、预算、法规及装修限制。", "Recommendations are considered alongside the property's conditions and client goals; feasibility still depends on structure, budget, regulations and renovation constraints.")}</p>
              <p>{t("风水服务不保证财富、健康、客户数量、营业额或其他特定结果，也不替代建筑、工程、消防、法律、医疗或其他受监管专业意见。", "Feng Shui services do not guarantee wealth, health, customer volume, revenue or other specific outcomes, and do not replace architectural, engineering, fire-safety, legal, medical or other regulated professional advice.")}</p>
              <p>{t("是否需要现场评估、具体交付内容与费用，会在了解物业资料及服务范围后确认。", "Whether an on-site assessment is needed, the deliverables and the fee will be confirmed after reviewing the property details and scope.")}</p>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 text-center md:py-24">
          <div className="container mx-auto max-w-4xl">
            <MessageCircle size={28} className="mx-auto text-[#d6ad63]" />
            <h2 className="mt-6 text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl">{t("告诉我们你的空间与主要关注点。", "Tell Us About Your Space and Priorities.")}</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/65">{t("初步沟通时可准备物业类型、地点、平面图（如有）、空间用途及希望解决的问题。我们会据此确认适合的评估方式与服务范围。", "For an initial conversation, prepare the property type, location, floor plan if available, how the space is used and your main concerns. We will then clarify the appropriate assessment approach and scope.")}</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-3 bg-[#d6ad63] px-8 py-4 text-sm font-bold text-black hover:bg-[#f4dfb0]">{t("WhatsApp 咨询风水布局", "Enquire About Feng Shui on WhatsApp")}<MessageCircle size={17} /></a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
