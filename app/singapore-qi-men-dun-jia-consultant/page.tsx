import type { Metadata } from "next";
import Link from "next/link";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";

const WA_LINK =
  "https://wa.me/6589418791?text=Hello%20Qimen%20Strategy%2C%20I%20would%20like%20to%20consult%20about%20Qi%20Men%20Dun%20Jia%20Strategic%20Decision%20Advisory%20in%20Singapore.";

export const metadata: Metadata = {
  title:
    "Singapore Qi Men Dun Jia Consultant｜新加坡奇门遁甲决策顾问｜启明遁甲 Qimen Strategy",
  description:
    "启明遁甲 Qimen Strategy is a Singapore-based Qi Men Dun Jia strategic decision advisory brand supporting business owners, founders, executives, investors and individuals before major decisions in business, investment, career, partnership and Feng Shui alignment.",
  keywords: [
    "Singapore Qi Men Dun Jia consultant",
    "Qi Men Dun Jia Singapore",
    "Qimen Dunjia Singapore",
    "Qimen Strategy Singapore",
    "新加坡奇门遁甲",
    "奇门遁甲新加坡",
    "启明遁甲",
    "奇门遁甲决策顾问",
    "Business decision consultant Singapore",
    "Investment decision analysis Singapore",
    "Feng Shui alignment Singapore",
  ],
  alternates: {
    canonical: "https://www.qmfeng.com/singapore-qi-men-dun-jia-consultant",
  },
  openGraph: {
    title: "Singapore Qi Men Dun Jia Consultant｜启明遁甲 Qimen Strategy",
    description:
      "A Singapore-based Qi Men Dun Jia strategic decision advisory brand for business, investment, career, partnership and Feng Shui alignment decisions.",
    url: "https://www.qmfeng.com/singapore-qi-men-dun-jia-consultant",
    type: "website",
    siteName: "Qimen Strategy Singapore",
    locale: "zh_SG",
  },
};

const applications = [
  {
    title: "Business Strategy",
    zh: "商业战略判断",
    body:
      "Clarify whether to expand, hold, restructure, adjust positioning or delay a high-cost move.",
    bodyZh:
      "判断企业是否适合扩张、守势、重组、调整定位，或暂缓高成本行动。",
  },
  {
    title: "Investment & Timing",
    zh: "投资与时机判断",
    body:
      "Review timing, direction, risk structure and whether the current situation supports commitment.",
    bodyZh:
      "判断当前时机、方向、风险结构，以及是否适合投入资源。",
  },
  {
    title: "People & Partnership",
    zh: "人事与合作关系",
    body:
      "Assess key partners, employees, suppliers and cooperation relationships before deeper commitment.",
    bodyZh:
      "在深度合作前，判断合伙人、员工、供应商与关键关系中的助力、阻力与风险。",
  },
  {
    title: "Feng Shui Alignment",
    zh: "住宅与办公室风水调理",
    body:
      "Review whether the business space, office, shop or residence supports decision clarity and growth momentum.",
    bodyZh:
      "判断办公室、店铺、商业空间或住宅是否支持决策状态、财富承载与发展势能。",
  },
];

const faqs = [
  {
    q: "What is Qi Men Dun Jia?",
    qZh: "什么是奇门遁甲？",
    a:
      "Qi Men Dun Jia is a classical Chinese strategic timing and decision system. In modern advisory work, it can be used to review timing, direction, people dynamics, environmental conditions and risk before important action.",
    aZh:
      "奇门遁甲是中国传统的时空战略判断体系。在现代咨询中，可用于判断重大行动前的时机、方向、人事关系、环境条件与风险结构。",
  },
  {
    q: "What is Qimen Strategy / 启明遁甲?",
    qZh: "启明遁甲 Qimen Strategy 是什么？",
    a:
      "Qimen Strategy, also known as 启明遁甲, is a Singapore-based strategic decision advisory brand that applies Qi Men Dun Jia together with business judgment, Feng Shui alignment and people assessment.",
    aZh:
      "启明遁甲 Qimen Strategy 是新加坡的奇门遁甲战略决策顾问品牌，结合奇门遁甲、企业经营判断、风水空间布局与人事合作分析，为客户提供重大决策前的判断支持。",
  },
  {
    q: "Who is this suitable for?",
    qZh: "适合哪些客户？",
    a:
      "It is suitable for business owners, founders, executives, investors and individuals facing major choices in business, investment, partnership, career, property, relocation, relationship or life direction.",
    aZh:
      "适合企业主、创始人、高管、投资者，以及正在面对合作、投资、事业、物业、搬迁、关系或人生方向重大选择的个人客户。",
  },
  {
    q: "Is this the same as Feng Shui?",
    qZh: "这和风水一样吗？",
    a:
      "No. Feng Shui focuses mainly on spatial and environmental alignment. Qimen Strategy uses Qi Men Dun Jia as a decision framework, while Feng Shui alignment may be included when space affects the decision or business momentum.",
    aZh:
      "不完全一样。风水主要关注空间与环境格局；启明遁甲以奇门遁甲作为决策判断框架，当空间影响事业、状态或决策时，也会结合住宅、办公室或店铺风水调理。",
  },
];

export default function SingaporeQiMenDunJiaConsultantPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main>
          <section className="relative overflow-hidden px-4 pb-20 pt-32 md:pb-28 md:pt-40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_20%,rgba(214,173,99,0.20),transparent_34%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(214,173,99,0.08)_1px,transparent_1px)] bg-[length:54px_54px] opacity-20" />
            <div className="container relative mx-auto max-w-6xl">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-[#d6ad63]">
                Qimen Strategy Singapore｜启明遁甲
              </p>
              <h1 className="max-w-5xl text-4xl font-semibold uppercase leading-[0.98] tracking-[0.05em] text-[#f4dfb0] md:text-7xl">
                Singapore Qi Men Dun Jia Strategic Decision Consultant
              </h1>
              <h2 className="mt-5 text-3xl font-semibold tracking-[0.12em] text-[#e2bd6b] md:text-5xl">
                新加坡奇门遁甲战略决策顾问
              </h2>
              <p className="mt-8 max-w-4xl text-lg leading-8 text-white/78 md:text-xl">
                Qimen Strategy, also known as 启明遁甲, is a Singapore-based Qi Men Dun Jia strategic decision advisory brand led by Huang Qiming. We support business owners, founders, executives, investors and individuals before major decisions involving business strategy, investment timing, partnership, career direction and Feng Shui alignment.
              </p>
              <p className="mt-4 max-w-4xl text-base leading-8 text-white/72 md:text-lg">
                启明遁甲 Qimen Strategy 是新加坡的奇门遁甲战略决策顾问品牌。我们将传统奇门遁甲的时空推演体系，与现代企业战略、投资判断、职业发展、人事布局及住宅/办公室风水调理结合，帮助客户在重大选择前看清时机、方向、人事关系与风险结构。
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#d6ad63] px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-[#f4dfb0]"
                >
                  WhatsApp Private Consultation
                </a>
                <Link
                  href="/qimen-strategy-business"
                  className="inline-flex items-center justify-center border border-[#d6ad63]/70 px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#f4dfb0] transition hover:bg-[#d6ad63]/10"
                >
                  View Advisory Plans
                </Link>
              </div>
            </div>
          </section>

          <section className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-20 md:py-28">
            <div className="container mx-auto max-w-6xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[#d6ad63]">
                Definition
              </p>
              <h2 className="max-w-4xl text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl">
                Qi Men Dun Jia is used here as a strategic decision framework, not as casual fortune telling.
              </h2>
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <p className="text-base leading-8 text-white/72 md:text-lg">
                  In Qimen Strategy, Qi Men Dun Jia is applied to understand the structure behind a decision: whether the timing supports action, which direction carries less resistance, which people may support or drain the situation, and what hidden risks need to be considered before resources are committed.
                </p>
                <p className="text-base leading-8 text-white/72 md:text-lg">
                  在启明遁甲中，奇门遁甲不是简单预测一句吉凶，而是用来拆解一个决策局：当前是否适合行动，哪个方向阻力较小，哪些人是助力或消耗，哪些隐藏风险必须在投入资源前先看清。
                </p>
              </div>
            </div>
          </section>

          <section className="px-4 py-20 md:py-28">
            <div className="container mx-auto max-w-6xl">
              <div className="mb-12 max-w-4xl">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[#d6ad63]">
                  Applications in Singapore
                </p>
                <h2 className="text-3xl font-semibold text-[#f4dfb0] md:text-5xl">
                  Where Qimen Strategy supports real decisions
                </h2>
                <p className="mt-5 text-base leading-8 text-white/70 md:text-lg">
                  常见应用范围包括企业发展、商业投资、合作签约、关键人事、事业转型、住宅风水、办公室风水与重大人生选择。
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {applications.map((item) => (
                  <div key={item.title} className="border border-[#d6ad63]/20 bg-white/[0.03] p-7">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d6ad63]">
                      {item.title}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-[#f4dfb0]">
                      {item.zh}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-white/68">{item.body}</p>
                    <p className="mt-3 text-sm leading-7 text-white/58">{item.bodyZh}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-20 md:py-28">
            <div className="container mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[#d6ad63]">
                  Advisory Process
                </p>
                <h2 className="text-3xl font-semibold text-[#f4dfb0] md:text-5xl">
                  A clear process before a serious decision
                </h2>
              </div>
              <div className="space-y-5">
                {[
                  ["01", "Clarify the question", "先确认真正要判断的核心问题"],
                  ["02", "Review context, people, timing and environment", "梳理背景、人事、时间与空间条件"],
                  ["03", "Apply Qi Men Dun Jia strategic assessment", "以奇门遁甲进行时空与局势判断"],
                  ["04", "Map risks and decision direction", "整理风险结构与行动方向"],
                  ["05", "Provide next-step advisory", "给出更清晰的下一步顾问建议"],
                ].map(([no, en, zh]) => (
                  <div key={no} className="flex gap-5 border border-[#d6ad63]/15 bg-black/30 p-5">
                    <span className="text-lg font-semibold text-[#d6ad63]">{no}</span>
                    <div>
                      <p className="font-semibold text-[#f4dfb0]">{en}</p>
                      <p className="mt-1 text-sm text-white/58">{zh}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 py-20 md:py-28">
            <div className="container mx-auto max-w-6xl">
              <div className="mb-10 max-w-4xl">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[#d6ad63]">
                  FAQ
                </p>
                <h2 className="text-3xl font-semibold text-[#f4dfb0] md:text-5xl">
                  Common questions about Qi Men Dun Jia in Singapore
                </h2>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {faqs.map((item) => (
                  <div key={item.q} className="border border-[#d6ad63]/20 bg-white/[0.03] p-7">
                    <h3 className="text-xl font-semibold text-[#f4dfb0]">{item.q}</h3>
                    <p className="mt-2 text-base font-semibold text-[#d6ad63]">{item.qZh}</p>
                    <p className="mt-4 text-sm leading-7 text-white/66">{item.a}</p>
                    <p className="mt-3 text-sm leading-7 text-white/56">{item.aZh}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 pb-24">
            <div className="container mx-auto max-w-5xl border border-[#d6ad63]/30 bg-[#d6ad63]/10 p-8 text-center md:p-12">
              <h2 className="text-3xl font-semibold text-[#f4dfb0] md:text-5xl">
                Before a major decision, see the whole game first.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/70 md:text-lg">
                适合正在面对合作、投资、扩张、任用、转型、签约、职业方向或重大人生选择的客户。
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center bg-[#d6ad63] px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-[#f4dfb0]"
              >
                Book via WhatsApp
              </a>
            </div>
          </section>
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </LanguageProvider>
  );
}
