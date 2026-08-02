"use client";

import { ArrowRight, BriefcaseBusiness, Check, MessageCircle, ShieldCheck, Target, Users } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";
import { useLanguage } from "@/contexts/language-context";

const WA_LINK =
  "https://wa.me/6589593499?text=Hello%20Qimen%20Strategy%2C%20I%20would%20like%20to%20enquire%20about%20Business%20Strategic%20Advisory.%20My%20industry%20is%3A%20____.%20My%20current%20business%20challenge%20is%3A%20____.";

const situations = [
  {
    titleZh: "增长停滞",
    titleEn: "Growth Has Stalled",
    bodyZh: "公司仍然忙碌，但营业额、利润、客户转化或老板的承载能力没有继续改善。",
    bodyEn: "The business remains active, but revenue, margin, customer conversion or founder capacity is no longer improving.",
  },
  {
    titleZh: "战略重点失焦",
    titleEn: "Too Many Priorities",
    bodyZh: "多个项目、产品、渠道和合作同时争夺资金、时间与管理注意力。",
    bodyEn: "Several projects, products, channels and partnerships compete for limited capital, time and management attention.",
  },
  {
    titleZh: "人事与合作压力",
    titleEn: "People & Partnership Pressure",
    bodyZh: "关键员工、股东、合作伙伴或供应商的不确定性开始影响执行。",
    bodyEn: "Uncertainty involving key staff, shareholders, partners or suppliers is affecting execution.",
  },
  {
    titleZh: "转型、扩张或重大投入",
    titleEn: "Transition, Expansion or Major Commitment",
    bodyZh: "正在考虑扩张、重组、进入新市场、搬迁、投资或改变经营方向。",
    bodyEn: "You are considering expansion, restructuring, a new market, relocation, investment or a change of direction.",
  },
  {
    titleZh: "过度依赖老板",
    titleEn: "Founder Dependency",
    bodyZh: "公司离开老板本人就难以前进，每个重要决定都集中在一个人身上。",
    bodyEn: "The company struggles to move without the founder personally carrying every important decision.",
  },
  {
    titleZh: "持续决策疲劳",
    titleEn: "Decision Fatigue",
    bodyZh: "长期压力使事实、情绪、时机与风险混在一起，难以判断真正优先级。",
    bodyEn: "Continuous pressure makes it difficult to separate facts, emotion, timing, risk and true priority.",
  },
];

const deliverables = [
  {
    icon: BriefcaseBusiness,
    titleZh: "经营现状诊断",
    titleEn: "Current Business Diagnostic",
    bodyZh: "梳理企业阶段、经营卡点、老板决策负荷及当前最应优先处理的问题。",
    bodyEn: "Clarify the business stage, operating bottlenecks, founder decision load and the issue that requires priority attention.",
  },
  {
    icon: Target,
    titleZh: "战略重点与风险地图",
    titleEn: "Priority & Risk Map",
    bodyZh: "比较不同方向、资源投入、合作关系与潜在风险，减少同时推进过多事项。",
    bodyEn: "Compare strategic options, resource commitments, people dynamics and risks so the business does not pursue too many directions at once.",
  },
  {
    icon: Users,
    titleZh: "重大决策支持",
    titleEn: "Major Decision Support",
    bodyZh: "围绕投资、合作、团队、扩张、转型或其他关键经营节点进行判断与复盘。",
    bodyEn: "Support major operating decisions involving investment, partnerships, people, expansion, transition or other high-stakes business matters.",
  },
  {
    icon: ShieldCheck,
    titleZh: "行动摘要与后续复盘",
    titleEn: "Action Summary & Review",
    bodyZh: "整理优先行动、需要避免的风险及后续复盘重点；具体频率按顾问方案确认。",
    bodyEn: "Summarise priority actions, risks to avoid and follow-up review points; the exact cadence is confirmed according to the advisory engagement.",
  },
];

const process = [
  {
    no: "01",
    titleZh: "初步申请",
    titleEn: "Initial Enquiry",
    bodyZh: "说明行业、团队规模、当前经营情况与最希望解决的问题。",
    bodyEn: "Share the industry, team size, current business situation and the issue that most needs to be addressed.",
  },
  {
    no: "02",
    titleZh: "适配沟通",
    titleEn: "Fit Review",
    bodyZh: "确认企业顾问是否适合，以及更适合单次诊断、90天试行或长期顾问。",
    bodyEn: "Confirm whether Business Strategic Advisory is suitable and whether the need is better served by a focused diagnostic, a 90-day trial or ongoing advisory.",
  },
  {
    no: "03",
    titleZh: "顾问诊断与决策会议",
    titleEn: "Diagnostic & Advisory Session",
    bodyZh: "结合现实经营信息与奇门盘面，梳理局势、优先级、人事、时机与风险。",
    bodyEn: "Review the real operating context together with Qi Men analysis to clarify the situation, priorities, people, timing and risk.",
  },
  {
    no: "04",
    titleZh: "行动与阶段复盘",
    titleEn: "Action & Stage Review",
    bodyZh: "根据确认的顾问范围推进重点行动，并在关键节点复盘。",
    bodyEn: "Move the priority actions forward and review progress at the agreed decision points.",
  },
];

export default function EnterpriseAdvisoryContent() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#070604] text-white">
      <Navbar />
      <main>
        <section className="relative overflow-hidden border-b border-[#d6ad63]/20 px-4 pb-20 pt-36 md:pb-28 md:pt-44">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(214,173,99,0.18),transparent_34%)]" />
          <div className="container relative mx-auto max-w-6xl">
            <div className="max-w-5xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">
                {t("企业战略顾问｜新加坡", "Business Strategic Advisory · Singapore")}
              </p>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.04] text-[#f4dfb0] md:text-7xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
                {t("企业真正需要的，不是更多噪音，而是更清楚的经营重点", "Founders Do Not Need More Noise. They Need Clearer Priorities Before the Next Move.")}
              </h1>
              <p className="mt-7 max-w-4xl text-base leading-8 text-white/72 md:text-lg">
                {t(
                  "启明遁甲为创业者、企业主与高管提供私密企业战略顾问服务，聚焦经营瓶颈、战略转型、人事合作、投资扩张与反复出现的重大决策。服务结合现实经营判断与奇门遁甲对时机、人事、环境和风险的分析。",
                  "Qimen Strategy provides private strategic advisory for founders, business owners and executives facing business bottlenecks, transition, people pressure, partnership uncertainty, investment, expansion and repeated high-stakes decisions. The work combines practical business judgment with Qi Men analysis of timing, people, environment and risk."
                )}
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.11em] text-[#e2bd6b]">
                <span className="border border-[#d6ad63]/35 px-4 py-2">{t("申请制", "Private Application")}</span>
                <span className="border border-[#d6ad63]/35 px-4 py-2">{t("Bedok或线上", "Bedok or Online")}</span>
                <span className="border border-[#d6ad63]/35 px-4 py-2">{t("范围确认后合作", "Scope Confirmed Before Engagement")}</span>
              </div>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#d6ad63] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black hover:bg-[#f4dfb0]">
                  <MessageCircle size={18} />
                  {t("申请企业顾问", "Apply for Business Advisory")}
                </a>
                <a href="#deliverables" className="inline-flex items-center justify-center gap-3 border border-[#d6ad63]/65 px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#f4dfb0] hover:bg-[#d6ad63]/10">
                  {t("查看顾问内容", "See Advisory Deliverables")}
                  <ArrowRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f6f0e6] px-4 py-20 text-[#241b14] md:py-28">
          <div className="container mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#a8753f]">{t("何时适合申请", "When Founders Usually Apply")}</p>
            <h2 className="mt-4 max-w-4xl text-3xl font-bold leading-tight md:text-5xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
              {t("公司可以很忙，但战略上仍然卡住", "A Business Can Be Active and Still Be Strategically Stuck")}
            </h2>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {situations.map((item) => (
                <article key={item.titleEn} className="border border-[#d8c6ae] bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-bold">{t(item.titleZh, item.titleEn)}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5f4e3d]">{t(item.bodyZh, item.bodyEn)}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="deliverables" className="px-4 py-20 md:py-28">
          <div className="container mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d6ad63]">{t("顾问交付重点", "Advisory Deliverables")}</p>
            <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
              {t("不是一句判断，而是更清楚的优先级、风险和下一步", "Not a Single Opinion, but Clearer Priorities, Risks and Next Actions")}
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {deliverables.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.titleEn} className="border border-[#d6ad63]/20 bg-white/[0.035] p-7">
                    <Icon className="text-[#d6ad63]" size={25} />
                    <h3 className="mt-5 text-2xl font-semibold text-[#f4dfb0]">{t(item.titleZh, item.titleEn)}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/62">{t(item.bodyZh, item.bodyEn)}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#f6f0e6] px-4 py-20 text-[#241b14] md:py-28">
          <div className="container mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#a8753f]">{t("合作流程", "How the Engagement Starts")}</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
              {t("先确认适配，再决定合作深度", "Confirm the Fit Before Deciding the Depth of Engagement")}
            </h2>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {process.map((item) => (
                <article key={item.no} className="border-t-2 border-[#a8753f] bg-white p-6 shadow-sm">
                  <p className="text-sm font-bold text-[#a8753f]">{item.no}</p>
                  <h3 className="mt-4 text-xl font-bold">{t(item.titleZh, item.titleEn)}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5f4e3d]">{t(item.bodyZh, item.bodyEn)}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 md:py-28">
          <div className="container mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d6ad63]">{t("专业边界", "Professional Boundaries")}</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
                {t("顾问支持判断，但不替企业主承担决定", "Advisory Supports Judgment but Does Not Replace the Founder’s Responsibility")}
              </h2>
            </div>
            <div className="space-y-4">
              {[
                t("不保证营业额、利润、融资、投资或其他特定结果。", "No revenue, profit, financing, investment or other specific outcome is guaranteed."),
                t("不替代法律、财务、税务、人力资源或其他受监管的专业意见。", "The service does not replace legal, financial, tax, human-resources or other regulated professional advice."),
                t("最终经营决定与执行责任仍由企业主及管理团队承担。", "Final operating decisions and execution remain the responsibility of the founder and management team."),
                t("顾问范围、会议形式与后续复盘会在合作前确认。", "Advisory scope, meeting format and follow-up review are confirmed before engagement."),
              ].map((item) => (
                <p key={item} className="flex items-start gap-3 border-b border-white/10 pb-4 text-sm leading-7 text-white/65">
                  <Check className="mt-1 shrink-0 text-[#d6ad63]" size={17} />{item}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#d6ad63]/20 bg-black px-4 py-20 text-center md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-semibold text-[#f4dfb0] md:text-5xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
              {t("先说明企业当前真正卡在哪里", "Start by Explaining Where the Business Is Truly Stuck")}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/62">
              {t("通过WhatsApp说明行业、团队规模和当前问题，我们会先进行适配沟通。", "Share the industry, team size and current challenge through WhatsApp. We will begin with an initial fit review.")}
            </p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center justify-center gap-3 bg-[#d6ad63] px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black hover:bg-[#f4dfb0]">
              <MessageCircle size={18} />{t("申请企业顾问", "Apply for Business Advisory")}
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
