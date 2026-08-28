"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import MethodologySignature from "@/components/methodology-signature";
import { useLanguage } from "@/contexts/language-context";
import { useLocalizedHref } from "@/hooks/use-localized-href";

const decisions = [
  ["企业方向与扩张", "Business Direction & Expansion"],
  ["合作与战略联盟", "Partnerships & Strategic Alliances"],
  ["投资与重大项目", "Investment & Major Projects"],
  ["关键人事与高管任用", "Key People & Executive Appointments"],
  ["市场进入与行动时机", "Market Entry & Timing"],
  ["重组、转向与重大转折", "Restructuring, Pivot & Turning Points"],
];

const steps = [
  ["01", "DEFINE", "定义真正要做的决定", "Define the real decision"],
  ["02", "READ", "同时读取现实条件与奇门局势", "Read practical reality and Qimen dynamics"],
  ["03", "TEST", "比较不同选项与不行动的后果", "Test alternatives and the cost of inaction"],
  ["04", "ALIGN", "对齐人、时机与必要的环境条件", "Align people, timing and relevant environment"],
  ["05", "DECIDE", "由决策者作出最终选择", "The decision-maker makes the final call"],
];

export default function EnterpriseAdvisoryContent() {
  const { t } = useLanguage();
  const localizeHref = useLocalizedHref();

  return (
    <div className="min-h-screen bg-[#0e0c0a] text-white">
      <Navbar />
      <main>
        <section className="px-4 pb-20 pt-36 md:pb-28 md:pt-44">
          <div className="container mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Enterprise Strategic Advisory</p>
            <h1 className="mt-6 max-w-5xl text-4xl font-semibold leading-tight text-[#f4dfb0] md:text-6xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
              {t("重大经营决定，不应只看眼前答案。", "High-Stakes Business Decisions Deserve a Wider Field of View.")}
            </h1>
            <p className="mt-7 max-w-4xl text-base leading-8 text-white/70 md:text-lg">
              {t("启明遁甲为企业主、创始人与领导者提供战略决策支持，将现实商业判断与奇门决策分析结合，用于审视方向、合作、人事、投资、时机与重大经营转折。", "Qimen Strategy supports founders, business owners and leaders by combining practical business judgement with Qimen-based decision analysis across direction, partnerships, people, investment, timing and major business turning points.")}
            </p>
            <div className="mt-8 max-w-3xl border-l-2 border-[#d6ad63] bg-white/[0.025] px-5 py-4 text-sm leading-7 text-white/62">
              {t("我们的目标不是替管理层多做一个分析，而是先找到真正的决策靶心，再判断组织是否围绕同一战略轴心稳定推进。", "The aim is not to add one more layer of analysis. It is to identify the true decision bullseye, then assess whether the organisation can move around one coherent strategic axis.")}
            </div>
            <Link href={localizeHref("/contact")} className="mt-9 inline-flex items-center gap-3 bg-[#d6ad63] px-7 py-4 text-sm font-bold uppercase tracking-[0.1em] text-black">
              {t("申请私密咨询", "Request a Private Consultation")}<ArrowRight size={17} />
            </Link>
          </div>
        </section>

        <section className="bg-[#f6f0e7] px-4 py-20 text-[#241b14] md:py-28">
          <div className="container mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#956b32]">{t("什么时候适合找我们", "When the Decision Matters")}</p>
            <h2 className="mt-4 max-w-4xl text-3xl font-bold leading-tight md:text-5xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
              {t("问题往往不是缺少信息，而是变量太多、后果太重。", "The Challenge Is Often Not a Lack of Information, but Too Many Variables and Too Much at Stake.")}
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {decisions.map(([zh,en]) => <div key={en} className="flex items-start gap-3 border border-[#dac8ae] bg-white p-6 text-sm font-semibold leading-6"><CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[#9b7136]" />{t(zh,en)}</div>)}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 md:py-28">
          <div className="container mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d6ad63]">Reality × Qimen</p>
            <h2 className="mt-4 max-w-5xl text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
              {t("奇门不取代商业判断，而是扩展决策者的视野。", "Qimen Does Not Replace Business Judgement. It Expands the Decision-Maker's Field of View.")}
            </h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="border border-white/10 bg-white/5 p-7">
                <p className="text-sm font-bold tracking-[0.18em] text-[#d6ad63]">REALITY</p>
                <p className="mt-5 text-sm leading-8 text-white/66">{t("商业基本面 · 财务条件 · 市场环境 · 人员能力 · 执行约束 · 已知风险", "Business fundamentals · Financial considerations · Market conditions · People & capabilities · Operational constraints · Known risks")}</p>
              </div>
              <div className="border border-[#d6ad63]/45 bg-[#19130d] p-7">
                <p className="text-sm font-bold tracking-[0.18em] text-[#d6ad63]">QIMEN</p>
                <p className="mt-5 text-sm leading-8 text-white/66">{t("时机 · 隐性关系 · 局势动能 · 阻力 · 人的互动 · 潜在机会", "Timing · Hidden dynamics · Relationships · Momentum · Resistance · Emerging opportunities")}</p>
              </div>
            </div>
            <div className="mt-8 grid gap-px bg-white/10 md:grid-cols-5">
              {steps.map(([n,key,zh,en]) => <div key={key} className="bg-[#15110d] p-6"><p className="text-xs font-bold text-[#d6ad63]">{n} · {key}</p><p className="mt-3 text-sm leading-6 text-white/68">{t(zh,en)}</p></div>)}
            </div>
          </div>
        </section>

        <MethodologySignature />

        <section className="bg-[#f6f0e7] px-4 py-20 text-[#241b14] md:py-24">
          <div className="container mx-auto max-w-6xl grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#956b32]">{t("战略环境与风水", "Strategic Environment & Feng Shui")}</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">{t("风水保留为能力，不再作为品牌主分类。", "Feng Shui Remains a Capability, Not a Core Category.")}</h2>
            </div>
            <p className="text-base leading-8 text-[#5e4c39]">{t("当企业决定涉及办公室搬迁、总部、商业场所或重要空间选择时，必要情况下可把风水与环境因素纳入更广泛的战略判断。它不替代经营、财务或专业技术分析。", "Where a business decision involves office relocation, headquarters, commercial premises or important spatial choices, Feng Shui and environmental considerations may be incorporated where relevant as part of the broader strategic review. They do not replace operational, financial or specialist analysis.")}</p>
          </div>
        </section>

        <section className="px-4 py-20 md:py-24">
          <div className="container mx-auto max-w-5xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d6ad63]">Annual Strategic Advisory</p>
            <h2 className="mt-4 text-3xl font-semibold text-[#f4dfb0] md:text-4xl">{t("重大决定不只发生一次。", "Major Decisions Rarely Happen Only Once.")}</h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/65">{t("对于持续面对重大经营选择的企业主，可建立年度或长期顾问关系。合作根据问题复杂度、频率与范围定制，不公开固定企业价目表。长期顾问的核心，不是重复起盘，而是围绕战略轴心持续校准关键变量。", "For business owners facing recurring high-stakes decisions, annual or ongoing advisory relationships can be structured according to complexity, frequency and scope rather than a public fixed rate card. The value of ongoing advisory is not repeated chart-reading, but continuous calibration of critical variables around the strategic axis.")}</p>
            <Link href={localizeHref("/contact")} className="mt-8 inline-flex items-center gap-3 bg-[#d6ad63] px-7 py-4 text-sm font-bold text-black">{t("申请私密咨询", "Request a Private Consultation")}<ArrowRight size={17} /></Link>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-white/40">We advise. You decide.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
