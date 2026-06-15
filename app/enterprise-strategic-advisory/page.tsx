import type { Metadata } from "next";
import Link from "next/link";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const WA_LINK =
  "https://wa.me/6589593499?text=Hello%20Master%20Qiming%2C%20I%20would%20like%20to%20consult%20about%20Enterprise%20Strategic%20Decision%20Advisory.";

export const metadata: Metadata = {
  title: "Enterprise Strategic Decision Advisory｜QIMEN STRATEGY Singapore",
  description:
    "QIMEN STRATEGY｜启明遁甲 provides Enterprise Strategic Decision Advisory for business owners, founders and key decision-makers in Singapore, covering timing, environment, people dynamics, founder inner mastery, strategic growth, annual strategic forecasting, Feng Shui alignment and major decision advisory.",
  keywords: [
    "Enterprise Strategic Decision Advisory Singapore",
    "Qimen Strategy Singapore",
    "Founder Strategic Advisory",
    "Founder Inner Mastery",
    "Strategic Growth Advisory",
    "Annual Strategic Forecast",
    "Business Feng Shui Singapore",
    "People and Partnership Assessment",
    "Master Huang Qiming",
    "启明遁甲",
    "企业战略决策顾问",
    "天时地利人和",
    "创始人内在修为",
    "企业成长陪跑",
    "企业风水布局",
    "年度战略预判"
  ],
  alternates: {
    canonical: "https://www.qmfeng.com/enterprise-strategic-advisory",
  },
  openGraph: {
    title: "Enterprise Strategic Decision Advisory｜QIMEN STRATEGY Singapore",
    description:
      "An Eastern strategic decision advisory system for business owners and founders, integrating timing, environment, people dynamics, founder inner mastery and strategic growth before important decisions.",
    url: "https://www.qmfeng.com/enterprise-strategic-advisory",
    type: "website",
    siteName: "Qimen Strategy Singapore",
    locale: "zh_SG",
  },
};

const pillars = [
  {
    no: "01",
    title: "Annual Strategic Forecast",
    zh: "年度战略预判",
    subtitle: "Annual direction · monthly trends · key timing",
    body:
      "A yearly strategic reading for business owners, covering overall development direction, core positioning, annual guidance, monthly trend reading and key timing reminders.",
    bodyZh:
      "为企业主判断一整年的战略节奏，包括年度总体发展方向、企业核心定位、年度批语、12个月月度趋势判断与关键月份提醒。",
    value:
      "Know when to move, when to hold, when to adjust and when to avoid high-cost decisions.",
    valueZh:
      "提前看清什么时候进、什么时候守、什么时候调整，减少错误时机带来的高成本试错。",
  },
  {
    no: "02",
    title: "Feng Shui Alignment for Business & Founder",
    zh: "企业与个人风水布局",
    subtitle: "Business space · founder residence · decision environment",
    body:
      "A combined Feng Shui review of the business space and the founder's personal residence to support decision clarity, wealth flow, stability and business momentum.",
    bodyZh:
      "结合企业办公室、商铺、商业空间与企业主个人住宅进行风水布局，协助稳定经营环境、财富承载、决策状态与企业发展势能。",
    value:
      "Align the business environment and the founder's personal field to support more stable growth.",
    valueZh:
      "让企业空间与企业主个人状态形成更稳定的支持系统。",
  },
  {
    no: "03",
    title: "People & Partnership Assessment",
    zh: "人事与合作关系判断",
    subtitle: "Management · supply chain · cooperation partners",
    body:
      "Assessment of management, key employees, suppliers, cooperation partners and important business relationships before deeper commitment.",
    bodyZh:
      "协助企业主判断管理层、核心员工、供应链、合作伙伴与关键人事关系，识别助力、阻力与潜在风险。",
    value:
      "Know who supports the business, who creates risk and who should not enter the core structure.",
    valueZh:
      "看清谁是助力，谁是风险，谁不适合进入企业核心局。",
  },
  {
    no: "04",
    title: "Founder Strategic Advisory",
    zh: "企业主战略陪跑顾问",
    subtitle: "Expansion · investment · signing · transformation",
    body:
      "Long-term strategic advisory support for founders during major decisions such as expansion, investment, relocation, cooperation, signing, restructuring and transformation.",
    bodyZh:
      "长期陪伴企业主在扩张、投资、签约、搬迁、合作、团队调整与业务转型等重大节点做出战略判断。",
    value:
      "Support the founder before major decisions with clearer timing, direction, people judgment and environmental awareness.",
    valueZh:
      "在重大行动前，帮助企业主看清时机、方向、人和与环境，减少盲动，提高决策稳定性。",
  },
];

const fiveDimensions = [
  {
    title: "Timing",
    zh: "天时",
    body:
      "Read when to move, hold, wait, adjust or avoid action before resources are committed.",
    bodyZh: "判断什么时候进、什么时候守、什么时候等待、什么时候调整，避免在错误时机投入过高成本。",
  },
  {
    title: "Environment",
    zh: "地利",
    body:
      "Assess business space, location, office layout, Feng Shui structure and market environment as strategic conditions.",
    bodyZh: "判断企业空间、位置、办公室布局、风水格局与市场环境是否支持企业发展。",
  },
  {
    title: "People Dynamics",
    zh: "人和",
    body:
      "Review management, staff, partners, suppliers and key relationships to identify support, friction and hidden risk.",
    bodyZh: "判断管理层、员工、合伙人、供应链与关键关系中的助力、阻力与潜在风险。",
  },
  {
    title: "Founder Inner Mastery",
    zh: "创始人内在修为",
    body:
      "Support the founder's judgment, emotional steadiness, clarity, capacity and decision state under pressure.",
    bodyZh: "协助企业主提升判断力、情绪稳定性、定力、承载力与关键压力下的决策状态。",
  },
  {
    title: "Strategic Growth",
    zh: "企业成长",
    body:
      "Connect the founder's growth with the company's next stage, so expansion, structure and direction can move together.",
    bodyZh: "将企业主个人成长与企业下一阶段发展结合，让扩张、结构调整与战略方向形成同步。",
  },
];

const audience = [
  "Business owners and founders",
  "Chain store owners and SME operators",
  "Family business leaders",
  "Companies facing expansion or transformation",
  "Businesses dealing with people, partnership, supply chain or Feng Shui issues",
  "High-net-worth clients requiring long-term decision support",
];

const audienceZh = [
  "企业主与创始人",
  "连锁门店老板与中小企业经营者",
  "家族企业负责人",
  "正在扩张或转型的企业",
  "面临人事、合作、供应链或风水问题的企业",
  "需要长期关键决策支持的高净值客户",
];

const process = [
  ["Initial Inquiry", "初步沟通", "Understand the business background, current situation, decision pressure and advisory needs."],
  ["Scope Confirmation", "确认服务范围", "Confirm whether the case is suitable for single decision, enterprise audit, annual advisory or founder retainer."],
  ["Information Collection", "资料收集", "Review company background, key people, floor plans, important dates or cooperation context when required."],
  ["Strategic Assessment", "战略判断", "Assess the situation through Timing, Environment, People Dynamics, Founder Inner Mastery and Strategic Growth."],
  ["Advisory Output", "顾问建议", "Provide clear guidance: proceed, delay, adjust, avoid, restructure or review further."],
  ["Review & Adjustment", "后续复盘", "Annual and premium clients may continue with monthly or quarterly reviews."],
];

export default function EnterpriseStrategicAdvisoryPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">
        <Navbar />

        <main>
          <section className="relative overflow-hidden px-4 pb-20 pt-32 md:pb-28 md:pt-40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_18%,rgba(214,173,99,0.22),transparent_34%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(214,173,99,0.08)_1px,transparent_1px)] bg-[length:54px_54px] opacity-20" />
            <div className="container relative mx-auto max-w-6xl">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.36em] text-[#d6ad63]">
                QIMEN STRATEGY｜启明遁甲
              </p>
              <h1 className="max-w-5xl text-4xl font-semibold uppercase leading-[0.98] tracking-[0.05em] text-[#f4dfb0] md:text-7xl">
                Enterprise Strategic Decision Advisory
              </h1>
              <h2 className="mt-5 text-3xl font-semibold tracking-[0.14em] text-[#e2bd6b] md:text-5xl">
                企业战略决策顾问
              </h2>
              <p className="mt-6 text-lg font-semibold uppercase tracking-[0.20em] text-[#d6ad63] md:text-2xl">
                See the Whole Game Before You Decide
              </p>
              <p className="mt-3 text-xl font-semibold tracking-[0.14em] text-[#d6ad63] md:text-3xl">
                关键决策前，先看清全局
              </p>
              <div className="mt-8 grid max-w-5xl gap-4 border-y border-[#d6ad63]/30 py-5 text-sm font-bold uppercase tracking-[0.14em] text-[#f4dfb0] md:grid-cols-4">
                <span>Annual Strategy</span>
                <span>Feng Shui Alignment</span>
                <span>People Assessment</span>
                <span>Founder Advisory</span>
              </div>
              <p className="mt-8 max-w-4xl text-lg leading-8 text-white/78 md:text-xl">
                QIMEN STRATEGY is an Enterprise Strategic Decision Advisory system rooted in 16+ years of Qi Men decision practice. We support business owners, founders and key decision-makers through annual strategic forecasting, business and personal Feng Shui alignment, people and partnership assessment, and major decision advisory.
              </p>
              <p className="mt-4 max-w-4xl text-base leading-8 text-white/70">
                启明遁甲以 16 年奇门决策实战经验为根基，结合年度战略预判、企业与个人风水布局、人事合作关系判断及重大决策陪跑，长期服务企业主、创始人与关键决策者。
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={WA_LINK}
                  className="inline-flex items-center justify-center bg-[#d6ad63] px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-[#f4dfb0]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Private Advisory
                </a>
                <Link href="/insights" className="inline-flex items-center justify-center border border-[#d6ad63]/70 px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#f4dfb0] transition hover:bg-[#d6ad63]/10">
                  View Case Library
                </Link>
              </div>
            </div>
          </section>

          <section className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-20 md:py-28">
            <div className="container mx-auto max-w-6xl">
              <div className="max-w-4xl">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[#d6ad63]">
                  Why It Matters
                </p>
                <h2 className="text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl">
                  Business decisions are rarely caused by one single factor.
                </h2>
                <p className="mt-6 text-base leading-8 text-white/72 md:text-lg">
                  A company may have a good product, but the timing may not be right. A partnership may look profitable, but the people dynamics may carry hidden risks. An office may look impressive, but the environment may not support wealth flow, leadership authority or stable decision-making.
                </p>
                <p className="mt-4 text-base leading-8 text-white/62 md:text-lg">
                  企业经营很少只卡在一个问题上。真正影响结果的，往往是时机、空间、人事、创始人状态与战略节奏共同作用的结果。
                </p>
              </div>
            </div>
          </section>

          <section className="px-4 py-20 md:py-28">
            <div className="container mx-auto max-w-6xl">
              <div className="mb-12 max-w-4xl">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[#d6ad63]">
                  Advisory Scope
                </p>
                <h2 className="text-3xl font-semibold text-[#f4dfb0] md:text-5xl">
                  Four core advisory pillars
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {pillars.map((item) => (
                  <article key={item.no} className="border border-[#d6ad63]/20 bg-white/[0.035] p-7">
                    <p className="text-sm font-bold text-[#d6ad63]">{item.no}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-[#f4dfb0]">{item.title}</h3>
                    <p className="mt-2 text-lg font-semibold text-[#d6ad63]">{item.zh}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/45">{item.subtitle}</p>
                    <p className="mt-5 text-sm leading-7 text-white/70">{item.body}</p>
                    <p className="mt-3 text-sm leading-7 text-white/56">{item.bodyZh}</p>
                    <div className="mt-6 border-l-2 border-[#d6ad63] pl-4 text-sm leading-7 text-[#f4dfb0]/82">
                      <p>{item.value}</p>
                      <p className="mt-2 text-white/58">{item.valueZh}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-20 md:py-28">
            <div className="container mx-auto max-w-6xl">
              <div className="mb-12 max-w-4xl">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[#d6ad63]">
                  Five-Dimensional Framework
                </p>
                <h2 className="text-3xl font-semibold text-[#f4dfb0] md:text-5xl">
                  Timing · Environment · People · Inner Mastery · Growth
                </h2>
              </div>
              <div className="grid gap-5 md:grid-cols-5">
                {fiveDimensions.map((item) => (
                  <article key={item.title} className="border border-[#d6ad63]/20 bg-black/35 p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.20em] text-[#d6ad63]">{item.title}</p>
                    <h3 className="mt-3 text-xl font-semibold text-[#f4dfb0]">{item.zh}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/66">{item.body}</p>
                    <p className="mt-3 text-sm leading-7 text-white/48">{item.bodyZh}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 py-20 md:py-28">
            <div className="container mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[#d6ad63]">
                  Suitable For
                </p>
                <h2 className="text-3xl font-semibold text-[#f4dfb0] md:text-5xl">
                  Built for founders and key decision-makers
                </h2>
                <div className="mt-8 space-y-3 text-sm leading-7 text-white/70">
                  {audience.map((item, index) => (
                    <p key={item}>• {item}｜{audienceZh[index]}</p>
                  ))}
                </div>
              </div>
              <div className="border border-[#d6ad63]/25 bg-white/[0.035] p-7">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[#d6ad63]">
                  Advisory Process
                </p>
                <div className="space-y-4">
                  {process.map(([en, zh, body], index) => (
                    <div key={en} className="border border-[#d6ad63]/15 bg-black/30 p-4">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d6ad63]">{String(index + 1).padStart(2, "0")}</p>
                      <h3 className="mt-2 text-lg font-semibold text-[#f4dfb0]">{en}｜{zh}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/60">{body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="border-t border-[#d6ad63]/20 bg-[#070707] px-4 py-20">
            <div className="container mx-auto max-w-5xl text-center">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-[#d6ad63]">
                Private Enterprise Advisory
              </p>
              <h2 className="text-3xl font-semibold text-[#f4dfb0] md:text-5xl">
                Review the whole game before the next major move.
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/68 md:text-lg">
                For enterprise strategic advisory enquiries, contact Qimen Strategy directly through WhatsApp at +65 8959 3499.
              </p>
              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#d6ad63] px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-[#f4dfb0]"
                >
                  WhatsApp +65 8959 3499
                </a>
                <Link href="/insights" className="inline-flex items-center justify-center border border-[#d6ad63]/70 px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#f4dfb0] transition hover:bg-[#d6ad63]/10">
                  View Strategic Insights
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
