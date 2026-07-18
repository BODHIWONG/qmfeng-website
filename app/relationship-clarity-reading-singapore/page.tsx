import type { Metadata } from "next";
import Link from "next/link";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";

const WA_LINK =
  "https://wa.me/6589593499?text=Hello%20Qimen%20Strategy%2C%20I%20would%20like%20to%20book%20a%20Relationship%20Decision%20Clarity%20consultation.";

export const metadata: Metadata = {
  title: "Relationship Decision Clarity Singapore｜Qimen Strategy Advisory",
  description:
    "A private Qimen Strategy consultation in Singapore for emotional relationship uncertainty and major relationship decisions. Understand the situation, the other person's position, key obstacles, boundaries and next steps before deciding whether to move closer, wait, repair, adjust or let go.",
  keywords: [
    "Relationship Decision Clarity Singapore",
    "Relationship Clarity Reading Singapore",
    "Qi Men Dun Jia relationship reading Singapore",
    "Relationship consultation Singapore",
    "Qimen Strategy Singapore",
    "relationship uncertainty Singapore",
    "relationship decision consultation Singapore",
    "情感关系决策咨询",
    "关系清晰咨询",
    "新加坡感情奇门遁甲",
    "启明遁甲决策智库",
  ],
  alternates: {
    canonical: "https://www.qmfeng.com/relationship-clarity-reading-singapore",
  },
  openGraph: {
    title: "Relationship Decision Clarity Singapore｜Qimen Strategy",
    description:
      "Relationship uncertainty? Gain clarity before your next move with Qimen Strategy. A private consultation for major relationship decisions in Singapore.",
    url: "https://www.qmfeng.com/relationship-clarity-reading-singapore",
    type: "website",
    siteName: "Qimen Strategy Singapore｜启明遁甲决策智库",
    locale: "en_SG",
  },
};

const clarityPoints = [
  "The current state of this emotional relationship",
  "The other person’s present position and attitude",
  "The key blockage, pressure or hidden resistance",
  "Whether the relationship still has movement or is mainly draining you",
  "Whether to move closer, wait, communicate, adjust, stop or let go",
  "What to avoid doing next so the situation does not become more chaotic",
];

const scenarios = [
  "The relationship is changing, but nothing has been clearly said.",
  "The other person is warm and cold, close and distant.",
  "You are unsure whether waiting is still meaningful.",
  "You need to decide whether to continue, repair, step back or end the cycle.",
  "Marriage, family pressure, career pressure and emotional pressure are mixed together.",
  "You want a private decision reference before making the next move.",
];

const boundaryRules = [
  "One entry session focuses on one core relationship decision theme.",
  "The session provides decision reference; it does not guarantee reconciliation, marriage or a specific outcome.",
  "We do not provide emotional dependency, surveillance, manipulation or privacy-intrusive requests.",
  "Legal, medical and clinical psychological matters should be handled by qualified professionals.",
  "Consultation details, personal stories, names, screenshots and identifiable information are handled confidentially.",
  "Case sharing only happens with permission and will be anonymised or blurred where necessary.",
];

const serviceLevels = [
  {
    title: "Relationship Decision Clarity",
    price: "S$396 起",
    detail: "45–60 minutes · one core relationship decision theme · no written report",
  },
  {
    title: "Deep Relationship & Life Decision Session",
    price: "S$688",
    detail: "For complex relationship, marriage, family, career and life-direction issues",
  },
  {
    title: "Personal Direction & Energy Advisory",
    price: "S$980+",
    detail: "For broader life direction, home energy, career state and relationship structure review",
  },
];

const articleLinks = [
  {
    href: "/insights/qi-men-dun-jia-relationship-reading-singapore-clarity-in-love",
    title: "Qi Men Dun Jia Relationship Reading Singapore｜When You Need Clarity in Love",
  },
  {
    href: "/insights/relationship-clarity-consultation-singapore-continue-wait-repair-let-go",
    title: "Should You Continue, Wait, Repair or Let Go?",
  },
  {
    href: "/insights/first-time-relationship-clarity-reading-singapore-what-to-expect",
    title: "Relationship Decision Clarity Reading in Singapore｜What to Expect",
  },
];

export default function RelationshipClarityReadingSingaporePage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">
        <Navbar />

        <main>
          <section className="relative overflow-hidden px-4 pb-20 pt-32 md:pb-28 md:pt-40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(214,173,99,0.20),transparent_35%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(214,173,99,0.06)_1px,transparent_1px)] bg-[length:54px_54px] opacity-20" />
            <div className="container relative mx-auto max-w-6xl">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-[#d6ad63]">
                Qimen Strategy Advisory · Relationship Decisions
              </p>
              <h1 className="max-w-5xl text-4xl font-semibold uppercase leading-[0.98] tracking-[0.04em] text-[#f4dfb0] md:text-7xl">
                Relationship Decision Clarity Singapore
              </h1>
              <h2 className="mt-6 max-w-4xl text-3xl font-semibold leading-tight text-[#e2bd6b] md:text-5xl">
                情感关系反复，不要一直靠猜。
              </h2>
              <p className="mt-8 max-w-4xl text-lg leading-8 text-white/78 md:text-xl">
                Relationship uncertainty? Gain clarity before your next move with Qimen Strategy.
              </p>
              <p className="mt-4 max-w-4xl text-base leading-8 text-white/70 md:text-lg">
                启明遁甲决策智库 Qimen Strategy 以重大决策视角，帮助你看清关系局势、对方状态、关键阻碍与下一步选择。先看清局，再决定该靠近、等待、调整，还是放下。
              </p>
              <p className="mt-4 max-w-4xl text-base leading-8 text-white/62 md:text-lg">
                This is a specialised advisory area within Qimen Strategy’s major decision framework. It is not emotional dependency, not therapy and not a promise of outcome — it is a private decision reference before an important relationship choice.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#d6ad63] px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-[#f4dfb0]"
                >
                  Book Consultation · S$396 起
                </a>
                <a
                  href="#scope"
                  className="inline-flex items-center justify-center border border-[#d6ad63]/70 px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#f4dfb0] transition hover:bg-[#d6ad63]/10"
                >
                  Scope & Confidentiality
                </a>
              </div>
            </div>
          </section>

          <section className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-16 md:py-20">
            <div className="container mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
              <div className="border border-[#d6ad63]/30 bg-black/40 p-7">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d6ad63]">Relationship Decision Clarity</p>
                <p className="mt-4 text-5xl font-bold text-[#f4dfb0]">S$396 起</p>
                <p className="mt-2 text-sm uppercase tracking-[0.16em] text-white/50">45–60 minutes · one core theme</p>
              </div>
              <div className="border border-[#d6ad63]/30 bg-black/40 p-7">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d6ad63]">Advisory Position</p>
                <p className="mt-4 text-2xl font-semibold leading-tight text-[#f4dfb0]">A focused relationship decision consultation within the Qimen Strategy advisory system.</p>
              </div>
              <div className="border border-[#d6ad63]/30 bg-black/40 p-7">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d6ad63]">Official WhatsApp</p>
                <p className="mt-4 text-3xl font-bold text-[#f4dfb0]">+65 8959 3499</p>
                <p className="mt-2 text-sm text-white/55">Private consultation by appointment.</p>
              </div>
            </div>
          </section>

          <section className="px-4 py-20 md:py-28">
            <div className="container mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[#d6ad63]">Why This Matters</p>
                <h2 className="text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl">
                  When a relationship becomes unclear, the real problem is often the decision that follows.
                </h2>
              </div>
              <div className="space-y-5 text-base leading-8 text-white/72 md:text-lg">
                <p>
                  Emotional relationships can affect your mood, dignity, family, career and long-term direction. The most exhausting stage is often not separation itself, but repeated guessing without a clear judgment point.
                </p>
                <p>
                  A proper relationship decision consultation helps you step back, see the structure of the situation and decide your next move with more calmness and self-respect.
                </p>
                <p>
                  Qimen Strategy｜启明遁甲决策智库 remains an enterprise and major life decision advisory brand. Relationship Decision Clarity is one specialised consultation area for clients facing important relationship choices.
                </p>
              </div>
            </div>
          </section>

          <section id="what-it-helps" className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-20 md:py-28">
            <div className="container mx-auto max-w-6xl">
              <div className="mb-12 max-w-4xl">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[#d6ad63]">What It Helps Clarify</p>
                <h2 className="text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl">
                  Stop circling in the same question. See the situation before you decide.
                </h2>
                <p className="mt-6 text-base leading-8 text-white/70 md:text-lg">
                  In an emotional relationship, unclear situations often create the most exhaustion. This consultation helps you look at the matter from a calmer decision angle.
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {clarityPoints.map((point) => (
                  <div key={point} className="border border-[#d6ad63]/20 bg-white/[0.035] p-6 text-base leading-7 text-white/76">
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 py-20 md:py-28">
            <div className="container mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[#d6ad63]">When To Consider It</p>
                <h2 className="text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl">
                  You may need clarity when the heart is still involved, but the direction is no longer clear.
                </h2>
              </div>
              <div className="grid gap-4">
                {scenarios.map((item) => (
                  <div key={item} className="border border-[#d6ad63]/15 bg-black/35 p-5 text-base leading-7 text-white/72">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="scope" className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-20 md:py-28">
            <div className="container mx-auto max-w-6xl">
              <div className="mb-12 max-w-4xl">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[#d6ad63]">Scope · Boundary · Confidentiality</p>
                <h2 className="text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl">
                  Clear boundaries create a safer, more focused consultation.
                </h2>
                <p className="mt-6 text-base leading-8 text-white/70 md:text-lg">
                  The purpose is to provide a private decision reference, not to create emotional dependence or promise a predetermined result.
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {boundaryRules.map((rule) => (
                  <div key={rule} className="border border-[#d6ad63]/20 bg-black/35 p-6 text-base leading-8 text-white/74">
                    {rule}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 py-20 md:py-28">
            <div className="container mx-auto max-w-6xl">
              <div className="mb-12 max-w-4xl">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[#d6ad63]">Consultation Structure</p>
                <h2 className="text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl">
                  Start with one focused question. Go deeper only when the situation requires it.
                </h2>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {serviceLevels.map((item) => (
                  <div key={item.title} className="border border-[#d6ad63]/25 bg-white/[0.035] p-7">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d6ad63]">{item.title}</p>
                    <p className="mt-5 text-4xl font-bold text-[#f4dfb0]">{item.price}</p>
                    <p className="mt-4 text-sm leading-7 text-white/62">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-20">
            <div className="container mx-auto max-w-6xl">
              <div className="mb-10 max-w-4xl">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[#d6ad63]">Relationship Decision Articles</p>
                <h2 className="text-3xl font-semibold text-[#f4dfb0] md:text-5xl">Read before booking</h2>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {articleLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="border border-[#d6ad63]/20 bg-black/35 p-6 transition hover:border-[#d6ad63]">
                    <p className="text-sm font-semibold leading-7 text-[#f4dfb0]">{item.title}</p>
                    <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-[#d6ad63]">Read Article →</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 py-20">
            <div className="container mx-auto max-w-5xl text-center">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-[#d6ad63]">Private Relationship Decision Clarity</p>
              <h2 className="text-3xl font-semibold text-[#f4dfb0] md:text-5xl">
                See the situation clearly before you decide.
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/68 md:text-lg">
                Relationship Decision Clarity: From S$396 / 45–60 minutes. One core decision theme. Private consultation by appointment in Singapore.
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
                <Link href="/enterprise-strategic-advisory" className="inline-flex items-center justify-center border border-[#d6ad63]/70 px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#f4dfb0] transition hover:bg-[#d6ad63]/10">
                  View Enterprise Advisory
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <FloatingActions />
      </div>
    </LanguageProvider>
  );
}
