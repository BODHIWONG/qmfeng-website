import type { Metadata } from "next";
import Link from "next/link";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";

const WA_LINK =
  "https://wa.me/6589593499?text=Hello%20Qimen%20Strategy%2C%20I%20would%20like%20to%20book%20a%20Relationship%20Clarity%20Reading.";

export const metadata: Metadata = {
  title: "Relationship Clarity Reading Singapore｜Qi Men Dun Jia Relationship Consultation",
  description:
    "Relationship Clarity Reading Singapore by Qimen Strategy helps clients understand relationship uncertainty, the other person's state, emotional blockage and whether to continue, wait, repair or let go.",
  keywords: [
    "Relationship Clarity Reading Singapore",
    "Qi Men Dun Jia relationship reading Singapore",
    "Relationship consultation Singapore",
    "Love reading Singapore",
    "Qi Men relationship consultation",
    "Should I continue this relationship",
    "Qimen Strategy Singapore",
    "感情关系清晰咨询",
    "新加坡感情奇门遁甲"
  ],
  alternates: {
    canonical: "https://www.qmfeng.com/relationship-clarity-reading-singapore",
  },
  openGraph: {
    title: "Relationship Clarity Reading Singapore｜Qimen Strategy",
    description:
      "You still care, but you cannot see clearly. A private Qi Men Dun Jia relationship reading for clarity before your next emotional decision.",
    url: "https://www.qmfeng.com/relationship-clarity-reading-singapore",
    type: "website",
    siteName: "Qimen Strategy Singapore",
    locale: "en_SG",
  },
};

const clarityPoints = [
  "What is the current state of this relationship?",
  "What may be the other person's present position?",
  "Where is the real blockage now?",
  "Is there still movement, or is the situation draining you?",
  "Should you continue, wait, repair, speak clearly or let go?",
  "What should you avoid doing next?",
];

const scenarios = [
  "The relationship changed, but nothing was clearly said.",
  "You still care, but you do not know where you stand.",
  "The other person is hot and cold, close and distant.",
  "You are not sure whether waiting is meaningful.",
  "You want to know whether the relationship still has movement.",
  "You need clarity before making the next emotional decision.",
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
    title: "First-Time Relationship Clarity Reading in Singapore｜What to Expect",
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
                Qimen Strategy Singapore · Relationship Clarity
              </p>
              <h1 className="max-w-5xl text-4xl font-semibold uppercase leading-[0.98] tracking-[0.04em] text-[#f4dfb0] md:text-7xl">
                Relationship Clarity Reading Singapore
              </h1>
              <h2 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight text-[#e2bd6b] md:text-5xl">
                You still care, but you cannot see clearly.
              </h2>
              <p className="mt-8 max-w-4xl text-lg leading-8 text-white/78 md:text-xl">
                A relationship can become painful when nothing is fully clear. You may still think about the person, but the situation feels different. The warmth changes. The replies change. Your heart keeps asking what is really happening.
              </p>
              <p className="mt-4 max-w-4xl text-base leading-8 text-white/70 md:text-lg">
                Relationship Clarity Reading uses Qi Men Dun Jia to help you understand the current relationship state, the other person’s position, the real blockage and the next direction before you decide whether to continue, wait, repair or let go.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#d6ad63] px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-[#f4dfb0]"
                >
                  Book First-Time Reading · S$168
                </a>
                <a
                  href="#what-it-helps"
                  className="inline-flex items-center justify-center border border-[#d6ad63]/70 px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#f4dfb0] transition hover:bg-[#d6ad63]/10"
                >
                  What It Can Clarify
                </a>
              </div>
            </div>
          </section>

          <section className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-16 md:py-20">
            <div className="container mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
              <div className="border border-[#d6ad63]/30 bg-black/40 p-7">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d6ad63]">First-Time Reading</p>
                <p className="mt-4 text-5xl font-bold text-[#f4dfb0]">S$168</p>
                <p className="mt-2 text-sm uppercase tracking-[0.16em] text-white/50">45–60 minutes</p>
              </div>
              <div className="border border-[#d6ad63]/30 bg-black/40 p-7">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d6ad63]">Suitable For</p>
                <p className="mt-4 text-2xl font-semibold leading-tight text-[#f4dfb0]">Relationship uncertainty, emotional confusion and major personal decisions.</p>
              </div>
              <div className="border border-[#d6ad63]/30 bg-black/40 p-7">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d6ad63]">Official WhatsApp</p>
                <p className="mt-4 text-3xl font-bold text-[#f4dfb0]">+65 8959 3499</p>
                <p className="mt-2 text-sm text-white/55">Private consultation by appointment.</p>
              </div>
            </div>
          </section>

          <section id="what-it-helps" className="px-4 py-20 md:py-28">
            <div className="container mx-auto max-w-6xl">
              <div className="mb-12 max-w-4xl">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[#d6ad63]">What It Helps Clarify</p>
                <h2 className="text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl">
                  This is not about chasing an answer. It is about seeing the situation clearly.
                </h2>
                <p className="mt-6 text-base leading-8 text-white/70 md:text-lg">
                  In a relationship, unclear situations often create the most emotional exhaustion. A reading helps you stop circling in the same thoughts and look at the matter from a calmer angle.
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

          <section className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-20 md:py-28">
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

          <section className="px-4 py-20 md:py-28">
            <div className="container mx-auto max-w-5xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[#d6ad63]">Our Position</p>
              <h2 className="text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl">
                We do not encourage blind waiting, obsession or fear.
              </h2>
              <div className="mt-8 space-y-5 text-base leading-8 text-white/72 md:text-lg">
                <p>
                  A proper relationship reading should not make you weaker. It should help you calm down and understand what is really happening.
                </p>
                <p>
                  At Qimen Strategy｜启明遁甲, Relationship Clarity Reading is part of personal decision advisory. We use Qi Men Dun Jia to review timing, emotional position, blockage, movement and risk so that you can make a clearer decision with dignity.
                </p>
                <p>
                  Not every relationship should continue. Not every ending is a failure. Not every silence means there is no feeling. The important thing is to see the truth before you decide.
                </p>
              </div>
            </div>
          </section>

          <section className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-20">
            <div className="container mx-auto max-w-6xl">
              <div className="mb-10 max-w-4xl">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[#d6ad63]">Relationship Clarity Articles</p>
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
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-[#d6ad63]">Private Relationship Clarity Reading</p>
              <h2 className="text-3xl font-semibold text-[#f4dfb0] md:text-5xl">
                See the truth before you decide.
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/68 md:text-lg">
                First-Time Relationship Clarity Reading: S$168 / 45–60 minutes. Private consultation by appointment in Singapore.
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
                <Link href="/insights/relationship-clarity-consultation-singapore-continue-wait-repair-let-go" className="inline-flex items-center justify-center border border-[#d6ad63]/70 px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#f4dfb0] transition hover:bg-[#d6ad63]/10">
                  Should You Continue or Let Go?
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
