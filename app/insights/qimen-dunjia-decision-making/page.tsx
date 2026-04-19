"use client";

import { motion } from "framer-motion";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ArrowLeft, Calendar, Clock, User, Target, TrendingUp } from "lucide-react";
import Link from "next/link";

const WA_LINK = "https://wa.me/6589418791?text=Hi%20Master%20Huang%2C%20I%20read%20your%20article%20on%20Qimen%20Dunjia%20and%20would%20like%20to%20book%20a%20strategic%20consultation.";

export default function QimenDunjiaArticle() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[oklch(0.08_0.02_60)]">
        <Navbar />
        
        <article className="pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="container max-w-3xl">
            {/* Back Link */}
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[oklch(0.60_0.08_65)] hover:gap-3 transition-all mb-8"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              <ArrowLeft size={14} /> Back to Insights
            </Link>

            {/* Header */}
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span
                className="text-[0.6rem] tracking-[0.2em] uppercase px-3 py-1 bg-[oklch(0.72_0.12_70)] text-[oklch(0.06_0.02_60)] mb-6 inline-block"
                style={{ fontFamily: "var(--font-lato), sans-serif" }}
              >
                Strategic Forecasting
              </span>
              
              <h1
                className="font-bold mb-6 leading-tight"
                style={{
                  fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "oklch(0.95 0.01 75)",
                }}
              >
                Qimen Dunjia: How Ancient Military Strategy Applies to Modern Business Decisions
              </h1>

              <div className="flex flex-wrap items-center gap-6 mb-10 text-xs text-[oklch(0.55_0.02_65)]" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
                <span className="flex items-center gap-2"><User size={14} /> Master Huang Qiming</span>
                <span className="flex items-center gap-2"><Calendar size={14} /> April 2026</span>
                <span className="flex items-center gap-2"><Clock size={14} /> 15 min read</span>
              </div>
            </motion.header>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="prose prose-invert max-w-none"
              style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}
            >
              <div className="text-[oklch(0.75_0.02_70)] leading-relaxed space-y-6">
                
                <p className="text-lg leading-relaxed">
                  Qimen Dunjia (奇門遁甲), often called &quot;The Art of the Mysterious Gate,&quot; was developed over 4,000 years ago as a military strategy tool for Chinese emperors and generals. Zhuge Liang, the legendary strategist of the Three Kingdoms era, used it to achieve seemingly impossible victories. Today, this same system applies to business strategy, investment timing, and critical life decisions.
                </p>

                <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  What Is Qimen Dunjia?
                </h2>
                
                <p>
                  Unlike Bazi (which reveals your destiny blueprint) or Feng Shui (which optimizes your environment), Qimen Dunjia is a temporal-spatial forecasting system. It maps the energy configuration of any specific moment in time and space, revealing:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Whether the timing is favorable for a particular action</li>
                  <li>Which direction offers the best opportunity</li>
                  <li>What obstacles or allies you&apos;ll encounter</li>
                  <li>The likely outcome of different choices</li>
                  <li>Optimal strategies to achieve your goals</li>
                </ul>

                <p>
                  Think of it as a strategic decision-support system—one that considers factors invisible to conventional analysis.
                </p>

                <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  The Structure: 1,080 Possible Configurations
                </h2>

                <p>
                  The Qimen chart contains multiple layers:
                </p>

                <div className="bg-[oklch(0.12_0.02_60)] border border-[oklch(0.25_0.02_60)] p-6 my-8">
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-[oklch(0.72_0.12_70)] mb-1">9 Palaces (九宮)</p>
                      <p className="text-sm mb-0">Representing eight directions plus the center, each palace governs specific aspects of life.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[oklch(0.72_0.12_70)] mb-1">8 Gates (八門)</p>
                      <p className="text-sm mb-0">Each gate indicates a type of energy: Open (favorable for starting), Rest (good for recovery), Life (auspicious), Harm (obstacles), etc.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[oklch(0.72_0.12_70)] mb-1">8 Spirits (八神)</p>
                      <p className="text-sm mb-0">Representing invisible forces that either assist or obstruct actions.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[oklch(0.72_0.12_70)] mb-1">10 Heavenly Stems (天干)</p>
                      <p className="text-sm mb-0">Indicating the quality and nature of energy available.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[oklch(0.72_0.12_70)] mb-1">9 Stars (九星)</p>
                      <p className="text-sm mb-0">Each star carries specific qualities affecting outcomes.</p>
                    </div>
                  </div>
                </div>

                <p>
                  When these elements combine, they create 1,080 unique configurations. Reading these combinations accurately requires years of study and practical experience—which is why genuine Qimen practitioners are rare.
                </p>

                <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  Modern Applications: Real Business Scenarios
                </h2>

                <h3 className="text-xl font-bold text-[oklch(0.85_0.01_75)] mt-8 mb-3" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  1. Investment Timing
                </h3>

                <div className="flex items-start gap-4 my-6">
                  <TrendingUp className="text-[oklch(0.72_0.12_70)] flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="mb-4">
                      A client in 2024 was deciding between two investment opportunities—both appeared equally promising on paper. Qimen analysis of the timing for each revealed:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 mb-4">
                      <li>Investment A: &quot;Harm Gate&quot; with &quot;White Tiger&quot; spirit—indicating hidden dangers and potential betrayal</li>
                      <li>Investment B: &quot;Open Gate&quot; with &quot;Nine Earth&quot; star—indicating solid foundation and gradual growth</li>
                    </ul>
                    <p className="mb-0">
                      <strong>Result:</strong> Client chose Investment B. Within 8 months, Investment A&apos;s promoter was exposed in a fraud scandal. Investment B yielded 23% returns.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[oklch(0.85_0.01_75)] mt-8 mb-3" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  2. Negotiation Strategy
                </h3>

                <div className="flex items-start gap-4 my-6">
                  <Target className="text-[oklch(0.72_0.12_70)] flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="mb-4">
                      A business owner preparing for a crucial contract negotiation consulted me. Qimen revealed:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 mb-4">
                      <li>The other party&apos;s position was weaker than presented (indicated by &quot;Death Gate&quot; in their sector)</li>
                      <li>Tuesday afternoon offered optimal timing (favorable &quot;Life Gate&quot; configuration)</li>
                      <li>Entering the meeting from the South direction would activate supportive energy</li>
                    </ul>
                    <p className="mb-0">
                      <strong>Result:</strong> Following these guidelines, the client secured terms 15% better than initially expected.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[oklch(0.85_0.01_75)] mt-8 mb-3" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  3. Hiring Decisions
                </h3>

                <p>
                  A tech company CEO was choosing between two final candidates for a critical role. Both had excellent credentials. Qimen analysis of each candidate&apos;s &quot;sector&quot; revealed one carried &quot;Nine Heaven&quot; (noble, reliable) energy while the other showed &quot;Emptiness&quot; (unreliable, may not deliver). The client hired the first candidate—who exceeded all expectations. Later, the second candidate was discovered to have fabricated credentials at their next position.
                </p>

                <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  When to Use Qimen Dunjia
                </h2>

                <p>
                  Qimen is particularly valuable for:
                </p>

                <div className="grid md:grid-cols-2 gap-4 my-8">
                  <div className="bg-[oklch(0.12_0.02_60)] border border-[oklch(0.25_0.02_60)] p-5">
                    <p className="font-semibold text-[oklch(0.72_0.12_70)] mb-2">Major Business Decisions</p>
                    <ul className="list-disc pl-4 space-y-1 text-sm mb-0">
                      <li>Signing significant contracts</li>
                      <li>Launching products or companies</li>
                      <li>Entering new markets</li>
                      <li>Major negotiations</li>
                    </ul>
                  </div>
                  <div className="bg-[oklch(0.12_0.02_60)] border border-[oklch(0.25_0.02_60)] p-5">
                    <p className="font-semibold text-[oklch(0.72_0.12_70)] mb-2">Investment Timing</p>
                    <ul className="list-disc pl-4 space-y-1 text-sm mb-0">
                      <li>Property purchases</li>
                      <li>Stock or crypto entries/exits</li>
                      <li>Business acquisitions</li>
                      <li>Partnership decisions</li>
                    </ul>
                  </div>
                  <div className="bg-[oklch(0.12_0.02_60)] border border-[oklch(0.25_0.02_60)] p-5">
                    <p className="font-semibold text-[oklch(0.72_0.12_70)] mb-2">Career Decisions</p>
                    <ul className="list-disc pl-4 space-y-1 text-sm mb-0">
                      <li>Job offer evaluation</li>
                      <li>Resignation timing</li>
                      <li>Starting a business</li>
                      <li>Requesting promotion</li>
                    </ul>
                  </div>
                  <div className="bg-[oklch(0.12_0.02_60)] border border-[oklch(0.25_0.02_60)] p-5">
                    <p className="font-semibold text-[oklch(0.72_0.12_70)] mb-2">Life Milestones</p>
                    <ul className="list-disc pl-4 space-y-1 text-sm mb-0">
                      <li>Wedding dates</li>
                      <li>Moving house</li>
                      <li>Medical procedures</li>
                      <li>Legal actions</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  The Difference Between Qimen and &quot;Luck&quot;
                </h2>

                <p>
                  Qimen doesn&apos;t replace competence or due diligence. It adds a strategic layer that conventional analysis misses. The best analogy: even skilled poker players study probability and opponent behavior. Qimen is like having additional information about the cards yet to be dealt.
                </p>

                <p>
                  This isn&apos;t superstition—it&apos;s strategic advantage. The same ancient emperors who used Qimen also employed spies, built infrastructure, and trained armies. They didn&apos;t choose BETWEEN rational strategy and metaphysical insight; they used BOTH.
                </p>

                <div className="bg-[oklch(0.15_0.03_70)] border-l-4 border-[oklch(0.72_0.12_70)] p-6 my-10">
                  <p className="text-[oklch(0.90_0.01_75)] font-semibold mb-2">
                    Qimen Strategic Consultations include detailed chart analysis, timing recommendations, and actionable strategic guidance.
                  </p>
                  <p className="text-sm text-[oklch(0.70_0.02_70)] mb-0">
                    Ideal for major decisions where the stakes justify thorough analysis. Sessions typically run 60-90 minutes.
                  </p>
                </div>

              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-16 p-8 bg-[oklch(0.12_0.02_60)] border border-[oklch(0.25_0.02_60)] text-center"
            >
              <h3
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "var(--font-cormorant), serif", color: "oklch(0.95_0.01_75)" }}
              >
                Make Better Decisions with Strategic Insight
              </h3>
              <p className="text-sm text-[oklch(0.65_0.02_70)] mb-6 max-w-lg mx-auto">
                Book a Qimen Dunjia strategic consultation for your major business or life decision.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all hover:scale-[1.02]"
                style={{
                  fontFamily: "var(--font-lato), sans-serif",
                  background: "oklch(0.72 0.12 70)",
                  color: "oklch(0.06 0.02 60)",
                }}
              >
                Book Strategic Consultation
              </a>
            </motion.div>
          </div>
        </article>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
