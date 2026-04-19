"use client";

import { motion } from "framer-motion";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";

const WA_LINK = "https://wa.me/6589418791?text=Hi%20Master%20Huang%2C%20I%20read%20your%20article%20on%20Feng%20Shui%20and%20Wealth%20and%20would%20like%20to%20book%20a%20consultation.";

export default function FengShuiWealthArticle() {
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
                Wealth Strategy
              </span>
              
              <h1
                className="font-bold mb-6 leading-tight"
                style={{
                  fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "oklch(0.95 0.01 75)",
                }}
              >
                Can Feng Shui Really Improve Your Wealth? A Logical Framework with Real Case Studies
              </h1>

              <div className="flex flex-wrap items-center gap-6 mb-10 text-xs text-[oklch(0.55_0.02_65)]" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
                <span className="flex items-center gap-2"><User size={14} /> Master Huang Qiming</span>
                <span className="flex items-center gap-2"><Calendar size={14} /> April 2026</span>
                <span className="flex items-center gap-2"><Clock size={14} /> 14 min read</span>
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
                  &quot;Can Feng Shui really make me richer?&quot; This is the most common question I receive. The honest answer: Feng Shui doesn&apos;t directly deposit money into your bank account. But it can systematically remove obstacles and create conditions where wealth becomes more likely. Let me explain.
                </p>

                <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  The Logical Framework: How Environment Affects Financial Outcomes
                </h2>
                
                <p>
                  Consider this chain of causation:
                </p>

                <div className="bg-[oklch(0.12_0.02_60)] border border-[oklch(0.25_0.02_60)] p-6 my-8">
                  <p className="mb-4">
                    <strong className="text-[oklch(0.72_0.12_70)]">Environment</strong> → <strong className="text-[oklch(0.72_0.12_70)]">Mental State</strong> → <strong className="text-[oklch(0.72_0.12_70)]">Decision Quality</strong> → <strong className="text-[oklch(0.72_0.12_70)]">Financial Outcomes</strong>
                  </p>
                  <p className="text-sm mb-0">
                    When your environment is optimized, you sleep better, think clearer, and make better decisions. Better decisions compound over time into better financial outcomes. This isn&apos;t magic—it&apos;s systems thinking.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  The Three Systems I Use for Wealth Optimization
                </h2>

                <h3 className="text-xl font-bold text-[oklch(0.85_0.01_75)] mt-8 mb-3" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  1. Qimen Dunjia (奇門遁甲) — Timing & Opportunity
                </h3>

                <p>
                  Qimen Dunjia is an ancient strategic system used by military advisors and emperors for over 4,000 years. In modern application, it reveals optimal timing windows for major decisions: when to launch a business, sign contracts, negotiate deals, or make investments.
                </p>

                <p>
                  A client in 2024 was considering two job offers with similar packages. Qimen analysis revealed that accepting Offer A during a specific week would lead to rapid advancement, while Offer B&apos;s timeline suggested stagnation. He chose Offer A—within 18 months, he was promoted twice and his income increased 67%.
                </p>

                <h3 className="text-xl font-bold text-[oklch(0.85_0.01_75)] mt-8 mb-3" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  2. Feng Shui Layout (風水布局) — Environmental Optimization
                </h3>

                <p>
                  Traditional Feng Shui identifies wealth sectors, prosperity corners, and money flow patterns within any space. When your desk faces your personal &quot;Sheng Qi&quot; (生氣) direction, when your wealth corner is properly activated, and when the front door allows positive energy entry—these factors compound.
                </p>

                <p>
                  A retail client in Bugis had struggling sales despite good foot traffic. Site inspection revealed their cash register faced the toilet—symbolically flushing money away. After repositioning and installing a Tongshifu bronze prosperity piece, monthly revenue increased 32% within the first quarter.
                </p>

                <h3 className="text-xl font-bold text-[oklch(0.85_0.01_75)] mt-8 mb-3" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  3. Bazi Analysis (八字解析) — Personal Timing
                </h3>

                <p>
                  Your Bazi (Four Pillars of Destiny) reveals your personal energy cycles. Some years favor aggressive expansion; others require consolidation. Ignoring these cycles often leads to poorly timed decisions—launching a business during a &quot;clash year&quot; or expanding when your chart indicates contraction.
                </p>

                <p>
                  I don&apos;t use Bazi to predict fixed outcomes. I use it as a strategic planning tool: identifying favorable periods for risk-taking and periods requiring caution.
                </p>

                <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  Case Study: CBD Office Revenue Transformation
                </h2>

                <div className="bg-[oklch(0.12_0.02_60)] border-l-4 border-[oklch(0.72_0.12_70)] p-6 my-8">
                  <p className="text-sm uppercase tracking-wider text-[oklch(0.60_0.08_65)] mb-3">Real Client Case</p>
                  <p className="mb-4">
                    A tech startup rented a CBD office space that looked impressive but felt &quot;stuck.&quot; Three months in, revenue was flat despite good product-market fit.
                  </p>
                  <p className="mb-4">
                    <strong>Analysis:</strong> The office had two major issues. First, the CEO&apos;s desk faced a wall (blocking vision and growth). Second, the main entrance opened directly to a window on the opposite side—creating a &quot;through flow&quot; that let energy (and money) pass straight through.
                  </p>
                  <p className="mb-4">
                    <strong>Solutions:</strong> Repositioned CEO desk to face the door with a solid wall behind (command position). Installed a strategic barrier near the entrance to redirect energy flow. Placed a Tongshifu bronze Guan Yu figure in the calculated Noble Person sector for the CEO&apos;s Bazi.
                  </p>
                  <p className="font-semibold text-[oklch(0.72_0.12_70)] mb-0">
                    Result: 45% revenue growth in 6 months.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  What Feng Shui Cannot Do
                </h2>

                <p>
                  Intellectual honesty matters. Feng Shui cannot:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Guarantee specific financial outcomes</li>
                  <li>Replace competence, effort, or business fundamentals</li>
                  <li>Overcome genuinely poor market conditions</li>
                  <li>Work instantly—changes typically manifest over 3-6 months</li>
                  <li>Compensate for ethical violations or harmful intent</li>
                </ul>

                <p>
                  What it CAN do is optimize your environment, align your timing, and remove invisible obstacles—giving you the clearest possible field on which to operate.
                </p>

                <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  The Singapore Wealth Landscape
                </h2>

                <p>
                  Singapore&apos;s competitive business environment means marginal advantages matter. When two equally competent entrepreneurs compete, the one with better energy alignment, clearer thinking, and optimized timing often wins.
                </p>

                <p>
                  This is why many successful business owners—people who became wealthy through hard work and intelligence—continue using Feng Shui and Bazi analysis. Not because they&apos;re superstitious, but because they understand strategic advantage.
                </p>

                <div className="bg-[oklch(0.15_0.03_70)] border-l-4 border-[oklch(0.72_0.12_70)] p-6 my-10">
                  <p className="text-[oklch(0.90_0.01_75)] font-semibold mb-2">
                    Wealth Strategy consultations combine all three systems—Qimen Dunjia, Feng Shui, and Bazi—for comprehensive analysis.
                  </p>
                  <p className="text-sm text-[oklch(0.70_0.02_70)] mb-0">
                    Starting from $288. Results typically visible within 3-6 months.
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
                Ready to Optimize Your Wealth Potential?
              </h3>
              <p className="text-sm text-[oklch(0.65_0.02_70)] mb-6 max-w-lg mx-auto">
                Book a Wealth Strategy consultation with Master Huang. Includes Bazi analysis, Qimen timing assessment, and Feng Shui recommendations.
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
                Book Wealth Consultation
              </a>
            </motion.div>
          </div>
        </article>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
