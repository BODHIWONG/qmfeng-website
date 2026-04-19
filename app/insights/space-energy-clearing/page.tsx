"use client";

import { motion } from "framer-motion";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";

const WA_LINK = "https://wa.me/6589418791?text=Hi%20Master%20Huang%2C%20I%20read%20your%20article%20on%20Space%20Energy%20Clearing%20and%20would%20like%20to%20book%20a%20consultation.";

export default function SpaceEnergyClearingArticle() {
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
                className="text-[0.6rem] tracking-[0.2em] uppercase px-3 py-1 bg-[oklch(0.55_0.12_250)] text-white mb-6 inline-block"
                style={{ fontFamily: "var(--font-lato), sans-serif" }}
              >
                Space Energy
              </span>
              
              <h1
                className="font-bold mb-6 leading-tight"
                style={{
                  fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "oklch(0.95 0.01 75)",
                }}
              >
                What Is Space Energy Clearing? The Science and Metaphysics Behind Environmental Healing
              </h1>

              <div className="flex flex-wrap items-center gap-6 mb-10 text-xs text-[oklch(0.55_0.02_65)]" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
                <span className="flex items-center gap-2"><User size={14} /> Master Huang Qiming</span>
                <span className="flex items-center gap-2"><Calendar size={14} /> April 2026</span>
                <span className="flex items-center gap-2"><Clock size={14} /> 12 min read</span>
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
                  Space Energy Clearing is one of the most misunderstood yet powerful practices in metaphysical consulting. In Singapore, where urban density creates unique energetic challenges, understanding how your environment affects your wellbeing has never been more critical.
                </p>

                <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  The Scientific Foundation: Environmental Psychology
                </h2>
                
                <p>
                  Modern environmental psychology confirms what traditional practices have known for millennia: your physical environment directly impacts your mental state, productivity, and overall health. Research from the National University of Singapore shows that workspace design can affect employee productivity by up to 25%.
                </p>

                <p>
                  This isn&apos;t mysticism—it&apos;s measurable science. The air quality, electromagnetic fields, lighting conditions, and spatial arrangement of your home or office create a physiological response in your body. Poor environmental conditions trigger elevated cortisol levels (the stress hormone), disrupted sleep patterns, and reduced cognitive function.
                </p>

                <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  The Metaphysical Layer: Qi Flow and Stagnation
                </h2>

                <p>
                  Traditional Chinese metaphysics describes a layer of reality that science is only beginning to understand. &quot;Qi&quot; (氣)—often translated as &quot;life force&quot; or &quot;energy&quot;—flows through all spaces. When Qi becomes stagnant or blocked, negative patterns emerge: relationship conflicts, financial setbacks, health issues, and emotional disturbances.
                </p>

                <p>
                  In my 16 years of practice, I&apos;ve developed the ability to perceive these energy patterns through heightened sensory awareness. This isn&apos;t a skill that can be taught in a weekend workshop—it requires years of dedicated cultivation, meditation practice, and hands-on experience with thousands of spaces.
                </p>

                <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  How Space Energy Clearing Works
                </h2>

                <p>
                  The process involves three phases:
                </p>

                <div className="bg-[oklch(0.12_0.02_60)] border border-[oklch(0.25_0.02_60)] p-6 my-8">
                  <h3 className="text-lg font-bold text-[oklch(0.60_0.08_65)] mb-4">Phase 1: Assessment</h3>
                  <p className="mb-0">
                    Using a combination of Qimen Dunjia calculations and direct energy perception, I identify &quot;stagnation zones&quot; and &quot;vital zones&quot; within your space. This assessment reveals where negative energy accumulates and where positive potential exists.
                  </p>
                </div>

                <div className="bg-[oklch(0.12_0.02_60)] border border-[oklch(0.25_0.02_60)] p-6 my-8">
                  <h3 className="text-lg font-bold text-[oklch(0.60_0.08_65)] mb-4">Phase 2: Clearing</h3>
                  <p className="mb-0">
                    The clearing process releases accumulated negative frequencies. This may involve specific rituals, sound frequencies, strategic placement of energy-activated objects, or environmental adjustments. The method depends on the specific nature of the blockage.
                  </p>
                </div>

                <div className="bg-[oklch(0.12_0.02_60)] border border-[oklch(0.25_0.02_60)] p-6 my-8">
                  <h3 className="text-lg font-bold text-[oklch(0.60_0.08_65)] mb-4">Phase 3: Activation</h3>
                  <p className="mb-0">
                    Once cleared, the space is &quot;activated&quot; with positive energy patterns aligned to your specific goals—whether prosperity, health, relationships, or career advancement.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  Signs Your Space Needs Energy Clearing
                </h2>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Persistent sleep disturbances despite good sleep hygiene</li>
                  <li>Unexplained fatigue or low energy when at home</li>
                  <li>Increased conflict or tension between family members</li>
                  <li>Financial setbacks since moving to a new location</li>
                  <li>A &quot;heavy&quot; or oppressive feeling in certain rooms</li>
                  <li>Electronics malfunctioning frequently</li>
                  <li>Difficulty concentrating or making decisions at home</li>
                  <li>Recurring illness among household members</li>
                </ul>

                <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  Remote Energy Assessment: How It Works
                </h2>

                <p>
                  A common question I receive: &quot;Can you assess my space without visiting?&quot; The answer is yes. Using floor plans, photographs, and precise address coordinates combined with Qimen Dunjia temporal calculations, I can identify major energy patterns remotely.
                </p>

                <p>
                  This isn&apos;t inferior to in-person visits—it&apos;s simply a different methodology. Many clients in Malaysia, Indonesia, and Australia have benefited from remote assessments when physical visits weren&apos;t practical.
                </p>

                <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  Why This Matters in Singapore
                </h2>

                <p>
                  Singapore&apos;s unique urban landscape creates specific challenges. High-rise living concentrates human energy density. Nearby construction, MRT lines, and major roads create electromagnetic and vibrational disturbances. Even the orientation of your unit relative to other buildings matters.
                </p>

                <p>
                  Understanding these factors isn&apos;t superstition—it&apos;s strategic living. The most successful business owners and professionals I work with don&apos;t dismiss these factors; they optimize for them.
                </p>

                <div className="bg-[oklch(0.15_0.03_70)] border-l-4 border-[oklch(0.60_0.08_65)] p-6 my-10">
                  <p className="text-[oklch(0.90_0.01_75)] font-semibold mb-2">
                    Space Energy Clearing sessions are limited to 3 clients per week to ensure quality attention to each case.
                  </p>
                  <p className="text-sm text-[oklch(0.70_0.02_70)] mb-0">
                    This isn&apos;t artificial scarcity—it&apos;s the reality of deep energy work that requires recovery time between sessions.
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
                Ready to Transform Your Space?
              </h3>
              <p className="text-sm text-[oklch(0.65_0.02_70)] mb-6 max-w-lg mx-auto">
                Book a Space Energy Assessment with Master Huang. In-person (Singapore) or remote consultations available.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all hover:scale-[1.02]"
                style={{
                  fontFamily: "var(--font-lato), sans-serif",
                  background: "oklch(0.55 0.12 250)",
                  color: "white",
                }}
              >
                Book Space Assessment
              </a>
            </motion.div>
          </div>
        </article>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
