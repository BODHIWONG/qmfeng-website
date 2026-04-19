"use client";

import { motion } from "framer-motion";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ArrowLeft, Calendar, Clock, User, Moon, Zap } from "lucide-react";
import Link from "next/link";

const WA_LINK = "https://wa.me/6589418791?text=Hi%20Master%20Huang%2C%20I%20read%20your%20article%20on%20Sleep%20and%20Energy%20Fields%20and%20would%20like%20to%20book%20a%20consultation.";

export default function SleepEnergyFieldArticle() {
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
                className="text-[0.6rem] tracking-[0.2em] uppercase px-3 py-1 bg-[oklch(0.45_0.15_280)] text-white mb-6 inline-block"
                style={{ fontFamily: "var(--font-lato), sans-serif" }}
              >
                Sleep & Wellness
              </span>
              
              <h1
                className="font-bold mb-6 leading-tight"
                style={{
                  fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "oklch(0.95 0.01 75)",
                }}
              >
                Why You Can&apos;t Sleep Well: The Hidden Connection Between Sleep Quality and Energy Fields
              </h1>

              <div className="flex flex-wrap items-center gap-6 mb-10 text-xs text-[oklch(0.55_0.02_65)]" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
                <span className="flex items-center gap-2"><User size={14} /> Master Huang Qiming</span>
                <span className="flex items-center gap-2"><Calendar size={14} /> April 2026</span>
                <span className="flex items-center gap-2"><Clock size={14} /> 11 min read</span>
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
                  You&apos;ve tried everything: blackout curtains, white noise machines, melatonin supplements, expensive mattresses. Yet sleep remains elusive. What if the problem isn&apos;t your sleep hygiene—but your bedroom&apos;s energy field?
                </p>

                <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  The Science: Electromagnetic Fields and Sleep
                </h2>
                
                <p>
                  Before discussing metaphysics, let&apos;s establish scientific foundations. Research from the World Health Organization confirms that electromagnetic fields (EMFs) affect human biology. Your bedroom likely contains multiple EMF sources: WiFi routers, phone chargers, smart devices, electrical wiring in walls.
                </p>

                <p>
                  Studies show that EMF exposure can suppress melatonin production—the hormone regulating sleep cycles. A 2019 study in the Journal of Chemical Neuroanatomy found that prolonged EMF exposure altered sleep architecture and reduced deep sleep phases.
                </p>

                <div className="bg-[oklch(0.12_0.02_60)] border border-[oklch(0.25_0.02_60)] p-6 my-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="text-[oklch(0.75_0.15_50)]" size={20} />
                    <p className="font-semibold text-[oklch(0.85_0.01_75)] mb-0">EMF Sources in a Typical Singapore Bedroom</p>
                  </div>
                  <ul className="list-disc pl-6 space-y-1 mb-0">
                    <li>WiFi router (often in living room but signal penetrates walls)</li>
                    <li>Mobile phones charging on bedside tables</li>
                    <li>Smart TVs in standby mode</li>
                    <li>Air conditioning units</li>
                    <li>Electrical wiring behind headboard walls</li>
                    <li>Nearby MRT lines (if applicable)</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  The Metaphysical Layer: Qi Flow in the Bedroom
                </h2>

                <p>
                  Traditional Chinese metaphysics describes energy patterns that science doesn&apos;t yet fully measure. The bedroom is where you spend 6-8 hours daily in a vulnerable, receptive state. If the Qi in this space is disturbed, your body absorbs that disturbance nightly.
                </p>

                <h3 className="text-xl font-bold text-[oklch(0.85_0.01_75)] mt-8 mb-3" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  Common Bedroom Qi Disturbances
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Moon className="text-[oklch(0.55_0.12_280)] flex-shrink-0 mt-1" size={18} />
                    <div>
                      <p className="font-semibold text-[oklch(0.85_0.01_75)] mb-1">Bed Positioned Against Toilet Wall</p>
                      <p className="text-sm mb-0">The &quot;Yin&quot; nature of bathrooms (water, drainage, waste) seeps through walls, disrupting the restful energy needed for deep sleep.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Moon className="text-[oklch(0.55_0.12_280)] flex-shrink-0 mt-1" size={18} />
                    <div>
                      <p className="font-semibold text-[oklch(0.85_0.01_75)] mb-1">Mirror Facing the Bed</p>
                      <p className="text-sm mb-0">Mirrors activate energy rather than calm it. Facing the bed, they create a &quot;doubling&quot; effect that fragments sleep and may cause nightmares.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Moon className="text-[oklch(0.55_0.12_280)] flex-shrink-0 mt-1" size={18} />
                    <div>
                      <p className="font-semibold text-[oklch(0.85_0.01_75)] mb-1">Bed Under a Window</p>
                      <p className="text-sm mb-0">Windows allow Qi to flow in and out. Sleeping directly beneath one creates instability—the sleeper lacks energetic &quot;backing&quot; and support.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Moon className="text-[oklch(0.55_0.12_280)] flex-shrink-0 mt-1" size={18} />
                    <div>
                      <p className="font-semibold text-[oklch(0.85_0.01_75)] mb-1">Clutter Under the Bed</p>
                      <p className="text-sm mb-0">Stored items create stagnant Qi directly beneath you. This &quot;stuck&quot; energy manifests as feeling unrested despite adequate sleep hours.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Moon className="text-[oklch(0.55_0.12_280)] flex-shrink-0 mt-1" size={18} />
                    <div>
                      <p className="font-semibold text-[oklch(0.85_0.01_75)] mb-1">Sharp Corners Pointing at Bed</p>
                      <p className="text-sm mb-0">Furniture corners, ceiling beams, or architectural features pointing toward the bed create &quot;poison arrows&quot;—concentrated negative Qi that disrupts rest.</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  The Compound Effect: Poor Sleep Cascades
                </h2>

                <p>
                  Sleep disruption doesn&apos;t stay in the bedroom. Poor sleep leads to:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Impaired decision-making (affecting career and finances)</li>
                  <li>Emotional reactivity (damaging relationships)</li>
                  <li>Weakened immune function (inviting illness)</li>
                  <li>Reduced creativity and problem-solving</li>
                  <li>Accelerated aging and reduced longevity</li>
                </ul>

                <p>
                  In Feng Shui terms, poor bedroom energy creates a negative feedback loop: you sleep badly, which reduces your personal Qi, which makes you more susceptible to environmental negativity, which further disrupts sleep.
                </p>

                <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  Practical Solutions: Immediate Steps
                </h2>

                <div className="bg-[oklch(0.12_0.04_145)] border border-[oklch(0.25_0.04_145)] p-6 my-8">
                  <p className="font-semibold text-[oklch(0.85_0.01_75)] mb-4">Tonight&apos;s Quick Fixes</p>
                  <ol className="list-decimal pl-6 space-y-2 mb-0">
                    <li>Move your phone charger at least 1 meter from your head</li>
                    <li>Cover any mirrors facing the bed with a cloth</li>
                    <li>Clear all items stored under the bed</li>
                    <li>Switch off the WiFi router before sleeping</li>
                    <li>Ensure your bed has a solid headboard against a solid wall</li>
                  </ol>
                </div>

                <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  When Professional Assessment Is Needed
                </h2>

                <p>
                  DIY solutions address obvious issues. But some problems require professional diagnosis:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Geopathic stress lines running beneath the property</li>
                  <li>Historical energy imprints from previous occupants</li>
                  <li>Architectural Sha Qi (negative energy from building design)</li>
                  <li>Personal Bazi conflicts with the room&apos;s directional energy</li>
                </ul>

                <p>
                  In my practice, I&apos;ve encountered cases where clients spent thousands on sleep specialists without improvement—only to have the issue resolve within weeks after bedroom energy correction.
                </p>

                <div className="bg-[oklch(0.15_0.03_70)] border-l-4 border-[oklch(0.55_0.12_280)] p-6 my-10">
                  <p className="text-[oklch(0.90_0.01_75)] font-semibold mb-2">
                    Bedroom Energy Assessment includes EMF detection, Qi flow analysis, and personalized sleeping direction recommendations based on your Bazi.
                  </p>
                  <p className="text-sm text-[oklch(0.70_0.02_70)] mb-0">
                    Most clients report noticeable sleep improvement within 2 weeks of implementing recommendations.
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
                Finally Get the Rest You Deserve
              </h3>
              <p className="text-sm text-[oklch(0.65_0.02_70)] mb-6 max-w-lg mx-auto">
                Book a Bedroom Energy Assessment. Includes EMF detection, Qi analysis, and personalized recommendations.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all hover:scale-[1.02]"
                style={{
                  fontFamily: "var(--font-lato), sans-serif",
                  background: "oklch(0.45 0.15 280)",
                  color: "white",
                }}
              >
                Book Sleep Assessment
              </a>
            </motion.div>
          </div>
        </article>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
