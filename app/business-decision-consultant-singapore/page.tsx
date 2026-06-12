import type { Metadata } from "next";
import Link from "next/link";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";

const WA_LINK =
  "https://wa.me/6589418791?text=Hello%20Qimen%20Strategy%2C%20I%20would%20like%20to%20book%20a%20business%20decision%20advisory%20session%20in%20Singapore.";

export const metadata: Metadata = {
  title: "Business Decision Consultant Singapore｜Qimen Strategy｜企业战略决策顾问",
  description:
    "Qimen Strategy is a Singapore business decision advisory practice applying Qi Men Dun Jia, strategic analysis and Feng Shui alignment to support business owners before expansion, partnership, relocation, restructuring and key appointments.",
  keywords: [
    "Business Decision Consultant Singapore",
    "Business Strategy Consultant Singapore",
    "Qimen Strategy Singapore",
    "Qi Men Dun Jia Business Strategy",
    "Enterprise Strategic Decision Advisory Singapore",
    "Singapore business owner advisory",
    "企业战略决策顾问",
    "新加坡企业战略顾问",
    "启明遁甲"
  ],
  alternates: {
    canonical: "https://www.qmfeng.com/business-decision-consultant-singapore",
  },
  openGraph: {
    title: "Business Decision Consultant Singapore｜Qimen Strategy",
    description:
      "Strategic decision advisory for Singapore business owners using Qi Men Dun Jia, business judgment, people assessment and Feng Shui alignment.",
    url: "https://www.qmfeng.com/business-decision-consultant-singapore",
    type: "website",
    siteName: "Qimen Strategy Singapore",
    locale: "zh_SG",
  },
};

const scenarios = [
  ["Expansion", "扩张", "Before opening a new branch, entering a new market, or increasing fixed costs."],
  ["Partnership", "合作", "Before entering a deeper cooperation, shareholder arrangement, supplier tie-up or strategic alliance."],
  ["People", "人事", "Before appointing key staff, adjusting the management structure or placing people in important roles."],
  ["Space", "空间", "Before relocation, office setup, shop layout, or reviewing whether the environment supports business momentum."],
  ["Timing", "时机", "Before committing major resources, signing an important agreement, or deciding whether to move, wait or adjust."],
  ["Direction", "方向", "Before changing business model, pricing, service focus, target market or long-term positioning."],
];

export default function BusinessDecisionConsultantSingaporePage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main>
          <section className="relative overflow-hidden px-4 pb-20 pt-32 md:pb-28 md:pt-40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_18%,rgba(214,173,99,0.20),transparent_34%)]" />
            <div className="container relative mx-auto max-w-6xl">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-[#d6ad63]">
                Qimen Strategy Singapore｜Business Decision Advisory
              </p>
              <h1 className="max-w-5xl text-4xl font-semibold uppercase leading-[0.98] tracking-[0.05em] text-[#f4dfb0] md:text-7xl">
                Business Decision Consultant Singapore
              </h1>
              <h2 className="mt-5 text-3xl font-semibold tracking-[0.12em] text-[#e2bd6b] md:text-5xl">
                新加坡企业战略决策顾问
              </h2>
              <p className="mt-8 max-w-4xl text-lg leading-8 text-white/78 md:text-xl">
                Qimen Strategy supports Singapore business owners, founders and executives before major business decisions. The advisory work combines Qi Men Dun Jia, practical business judgment, people assessment and Feng Shui alignment to clarify timing, direction, risk and the next move.
              </p>
              <p className="mt-4 max-w-4xl text-base leading-8 text-white/70 md:text-lg">
                启明遁甲 Qimen Strategy 立足新加坡，专注帮助企业主、创始人与管理层在扩张、合作、任用、搬迁、转型、签约与企业风水相关决策前，看清时机、方向、人事关系、空间条件与风险结构。
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#d6ad63] px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-[#f4dfb0]"
                >
                  WhatsApp Private Advisory
                </a>
                <Link
                  href="/enterprise-strategic-advisory"
                  className="inline-flex items-center justify-center border border-[#d6ad63]/70 px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#f4dfb0] transition hover:bg-[#d6ad63]/10"
                >
                  Enterprise Advisory
                </Link>
              </div>
            </div>
          </section>

          <section className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-20 md:py-28">
            <div className="container mx-auto max-w-6xl">
              <div className="mb-12 max-w-4xl">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[#d6ad63]">
                  Singapore Business Use Cases
                </p>
                <h2 className="text-3xl font-semibold text-[#f4dfb0] md:text-5xl">
                  Decisions that need more than instinct
                </h2>
                <p className="mt-5 text-base leading-8 text-white/70 md:text-lg">
                  新加坡市场成本高、节奏快、空间紧、人才流动频繁。企业主在关键节点前，更需要先看清局势，而不是只凭感觉推进。
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {scenarios.map(([title, zh, body]) => (
                  <article key={title} className="border border-[#d6ad63]/20 bg-white/[0.03] p-7">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d6ad63]">
                      {title}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-[#f4dfb0]">{zh}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/66">{body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 py-20 md:py-28">
            <div className="container mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[#d6ad63]">
                  Advisory Framework
                </p>
                <h2 className="text-3xl font-semibold text-[#f4dfb0] md:text-5xl">
                  Timing · Direction · People · Environment · Risk
                </h2>
              </div>
              <div className="space-y-5 text-base leading-8 text-white/70 md:text-lg">
                <p>
                  The role of Qimen Strategy is not to replace management experience. It adds another layer of strategic observation before commitment: whether the timing is supportive, whether the direction is aligned, whether the people around the decision create support or friction, and whether the business space strengthens or weakens the decision field.
                </p>
                <p>
                  启明遁甲不是替代企业主的经营经验，而是在重大投入之前补上一层战略观察：时机是否支持，方向是否顺势，人事是否形成助力，空间是否支持企业状态，以及隐藏风险是否已经被提前看见。
                </p>
              </div>
            </div>
          </section>

          <section className="px-4 pb-24">
            <div className="container mx-auto max-w-5xl border border-[#d6ad63]/30 bg-[#d6ad63]/10 p-8 text-center md:p-12">
              <h2 className="text-3xl font-semibold text-[#f4dfb0] md:text-5xl">
                Before you expand, partner or restructure, see the whole game first.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/70 md:text-lg">
                适合正在面对扩张、合作、签约、任用、搬迁、转型与企业空间风水判断的新加坡企业主。
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
