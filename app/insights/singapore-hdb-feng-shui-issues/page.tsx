"use client";

import { motion } from "framer-motion";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ArrowLeft, Calendar, Clock, User, AlertTriangle, CheckCircle } from "lucide-react";
import Link from "next/link";

const WA_LINK = "https://wa.me/6589418791?text=Hi%20Master%20Huang%2C%20I%20read%20your%20article%20on%20Singapore%20HDB%20Feng%20Shui%20issues%20and%20would%20like%20to%20book%20a%20consultation.";

export default function SingaporeHDBFengShuiArticle() {
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
                className="text-[0.6rem] tracking-[0.2em] uppercase px-3 py-1 bg-[oklch(0.60_0.08_65)] text-[oklch(0.06_0.02_60)] mb-6 inline-block"
                style={{ fontFamily: "var(--font-lato), sans-serif" }}
              >
                HDB Feng Shui
              </span>
              
              <h1
                className="font-bold mb-6 leading-tight"
                style={{
                  fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "oklch(0.95 0.01 75)",
                }}
              >
                Common Singapore HDB Feng Shui Problems: A Practical Guide for Flat Owners
              </h1>

              <div className="flex flex-wrap items-center gap-6 mb-10 text-xs text-[oklch(0.55_0.02_65)]" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
                <span className="flex items-center gap-2"><User size={14} /> Master Huang Qiming</span>
                <span className="flex items-center gap-2"><Calendar size={14} /> April 2026</span>
                <span className="flex items-center gap-2"><Clock size={14} /> 10 min read</span>
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
                  Over 80% of Singapore residents live in HDB flats. These standardized layouts create recurring Feng Shui challenges that most homeowners face—often without realizing why they feel uncomfortable or why life seems harder than it should be.
                </p>

                <p>
                  After consulting on hundreds of HDB units across Singapore—from older estates like Bedok and Tampines to new BTO projects in Tengah and Punggol—I&apos;ve identified the most common issues and practical solutions.
                </p>

                <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  Issue #1: Main Door Facing Lift or Staircase
                </h2>

                <div className="flex items-start gap-4 bg-[oklch(0.12_0.02_60)] border border-[oklch(0.25_0.02_60)] p-6 my-6">
                  <AlertTriangle className="text-[oklch(0.75_0.15_50)] flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-[oklch(0.85_0.01_75)] mb-2">The Problem</p>
                    <p className="mb-0">
                      When your main door directly faces an elevator or staircase, Qi rushes in too quickly and destabilizes the home&apos;s energy. Residents often experience mood swings, difficulty saving money, and unexpected disruptions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[oklch(0.12_0.04_145)] border border-[oklch(0.25_0.04_145)] p-6 my-6">
                  <CheckCircle className="text-[oklch(0.55_0.12_145)] flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-[oklch(0.85_0.01_75)] mb-2">The Solution</p>
                    <p className="mb-0">
                      Install a partition or screen inside the entrance to create a buffer zone. A shoe cabinet positioned at an angle can serve this purpose. For stronger cases, a Feng Shui mirror or specific talisman may be recommended based on your unit&apos;s orientation.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  Issue #2: Kitchen Facing Main Door
                </h2>

                <div className="flex items-start gap-4 bg-[oklch(0.12_0.02_60)] border border-[oklch(0.25_0.02_60)] p-6 my-6">
                  <AlertTriangle className="text-[oklch(0.75_0.15_50)] flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-[oklch(0.85_0.01_75)] mb-2">The Problem</p>
                    <p className="mb-0">
                      Many HDB layouts have the kitchen directly visible from the front door. In Feng Shui, the stove represents the family&apos;s &quot;fire of prosperity.&quot; When exposed directly to incoming Qi, wealth is considered &quot;burnt away&quot; before it can settle.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[oklch(0.12_0.04_145)] border border-[oklch(0.25_0.04_145)] p-6 my-6">
                  <CheckCircle className="text-[oklch(0.55_0.12_145)] flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-[oklch(0.85_0.01_75)] mb-2">The Solution</p>
                    <p className="mb-0">
                      Consider a sliding door or curtain to separate the kitchen visually. If renovation isn&apos;t possible, strategic placement of a tall plant or decorative screen can break the direct line of sight.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  Issue #3: Toilet Door Facing Bedroom Door
                </h2>

                <div className="flex items-start gap-4 bg-[oklch(0.12_0.02_60)] border border-[oklch(0.25_0.02_60)] p-6 my-6">
                  <AlertTriangle className="text-[oklch(0.75_0.15_50)] flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-[oklch(0.85_0.01_75)] mb-2">The Problem</p>
                    <p className="mb-0">
                      This common HDB configuration allows &quot;polluted Qi&quot; from the bathroom to enter sleeping spaces. Results often include sleep disturbances, relationship friction, and general lethargy.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[oklch(0.12_0.04_145)] border border-[oklch(0.25_0.04_145)] p-6 my-6">
                  <CheckCircle className="text-[oklch(0.55_0.12_145)] flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-[oklch(0.85_0.01_75)] mb-2">The Solution</p>
                    <p className="mb-0">
                      Keep the toilet door closed at all times. Add a small crystal or brass item above the toilet door frame to neutralize negative energy. Ensure good ventilation to prevent dampness from accumulating.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  Issue #4: Bed Under a Beam
                </h2>

                <p>
                  Ceiling beams create &quot;cutting Qi&quot;—a downward pressure on anyone sleeping beneath them. This commonly causes headaches, insomnia, and a vague sense of oppression. The solution is simple: reposition the bed so no beam crosses directly over the sleeping area, particularly above the head.
                </p>

                <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  Issue #5: Long Narrow Corridors
                </h2>

                <p>
                  Many HDB units feature long corridors connecting rooms. These create &quot;poison arrow&quot; Qi—energy that moves too quickly in a straight line, creating an unsettled feeling and potential for conflict among family members.
                </p>

                <p>
                  Solutions include soft lighting, artwork on walls to slow energy flow, or a runner carpet to absorb and soften the rushing Qi.
                </p>

                <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  Issue #6: Corner Units Near MRT or Major Roads
                </h2>

                <p>
                  While corner units offer better ventilation and views, those near MRT tracks or major roads face constant electromagnetic and vibrational disturbance. This disrupts sleep quality and concentration, particularly affecting children&apos;s studies and adults&apos; work focus.
                </p>

                <p>
                  Heavy curtains, proper window sealing, and strategic placement of grounding elements (plants, stone features) can help mitigate these external influences.
                </p>

                <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  BTO Considerations: Before You Collect Keys
                </h2>

                <p>
                  If you&apos;re awaiting a new BTO flat, consider a pre-occupancy Feng Shui assessment. This allows you to:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Plan renovation with Feng Shui principles integrated from the start</li>
                  <li>Select optimal dates for key collection and moving in</li>
                  <li>Position major furniture (especially the bed and stove) correctly from day one</li>
                  <li>Activate your personal wealth and health sectors before occupancy</li>
                </ul>

                <p>
                  This proactive approach costs far less than retrofitting fixes after problems manifest.
                </p>

                <div className="bg-[oklch(0.15_0.03_70)] border-l-4 border-[oklch(0.60_0.08_65)] p-6 my-10">
                  <p className="text-[oklch(0.90_0.01_75)] font-semibold mb-2">
                    HDB Feng Shui Audit services cover all flat types—from 2-room Flexi to Executive Maisonette.
                  </p>
                  <p className="text-sm text-[oklch(0.70_0.02_70)] mb-0">
                    On-site assessment in Singapore. Detailed report with prioritized recommendations provided within 3 days.
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
                Get Your HDB Feng Shui Assessment
              </h3>
              <p className="text-sm text-[oklch(0.65_0.02_70)] mb-6 max-w-lg mx-auto">
                Book an on-site HDB assessment with Master Huang. Comprehensive analysis with practical, budget-friendly solutions.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all hover:scale-[1.02]"
                style={{
                  fontFamily: "var(--font-lato), sans-serif",
                  background: "oklch(0.60 0.08 65)",
                  color: "oklch(0.06 0.02 60)",
                }}
              >
                Book HDB Assessment
              </a>
            </motion.div>
          </div>
        </article>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
