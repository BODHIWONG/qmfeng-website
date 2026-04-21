"use client";

import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";

const WA_LINK = "https://wa.me/6589418791?text=Hi%20Master%20Huang%2C%20I%20read%20your%20article%20about%20space%20energy%20clearing.%20I%20would%20like%20to%20book%20a%20consultation.";

export default function SpaceEnergyClearingArticle() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[oklch(0.08_0.02_60)]">
        <Navbar />
        <article className="pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="container max-w-3xl">
            <Link href="/insights" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[oklch(0.60_0.08_65)] hover:gap-3 transition-all mb-8" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
              <ArrowLeft size={14} /> Back to Insights
            </Link>

            <header>
              <span className="text-[0.6rem] tracking-[0.2em] uppercase px-3 py-1 bg-[oklch(0.55_0.12_250)] text-white mb-6 inline-block" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
                Space Energy Clearing
              </span>
              <h1 className="font-bold mb-6 leading-tight" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "oklch(0.95 0.01 75)" }}>
                Space Energy Clearing: When a Home Looks Fine but Feels Draining
              </h1>
              <div className="flex flex-wrap items-center gap-6 mb-10 text-xs text-[oklch(0.55_0.02_65)]" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
                <span className="flex items-center gap-2"><User size={14} /> Master Huang QiMing</span>
                <span className="flex items-center gap-2"><Calendar size={14} /> 20 April 2026</span>
                <span className="flex items-center gap-2"><Clock size={14} /> 5 min read</span>
              </div>
            </header>

            <div className="text-[oklch(0.75_0.02_70)] leading-relaxed space-y-6" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}>
              <p className="text-lg leading-relaxed">
                Some homes look normal on the surface, yet the people inside feel unusually tired, unsettled, or emotionally heavy. They sleep poorly, become more irritable, or feel that the atmosphere of the space is difficult to shake off. This is one of the situations where space energy clearing becomes relevant.
              </p>

              <p>
                The phrase can sound dramatic if it is explained badly. In practice, space energy clearing is about recognising when the condition of a space is affecting the people within it, and then taking steps to restore a better sense of balance. It is not theatre. It is not meant to replace practical common sense. It begins with careful observation.
              </p>

              <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                What People Often Notice First
              </h2>
              <p>
                A home that needs attention does not always show an obvious visual problem. Sometimes the first signs are lived experience. Rest feels shallow. Motivation drops. Family tension increases without a clear reason. Certain corners of the home feel oppressive or avoided. In some cases, the overall space simply feels flat and draining over time.
              </p>
              <p>
                These signs do not automatically prove an “energy problem”, but they do suggest the environment deserves a closer look.
              </p>

              <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                Environment First, Energy Second
              </h2>
              <p>
                A grounded assessment starts with the obvious. Is the home too cluttered? Is ventilation poor? Is the layout creating constant agitation? Are there pressure points such as exposed entrances, blocked movement, or rooms that never seem to settle? These factors matter.
              </p>
              <p>
                But there are also cases where the physical arrangement has already been adjusted and the heaviness still remains. In those situations, space energy clearing may be considered as part of the response. The aim is to address stagnation or a disruptive atmosphere that ordinary rearrangement has not solved.
              </p>

              <div className="bg-[oklch(0.12_0.02_60)] border border-[oklch(0.25_0.02_60)] p-6 my-8">
                <p className="mb-2 font-semibold text-[oklch(0.72_0.12_70)]">A measured approach</p>
                <p className="mb-0 text-sm">
                  Space energy clearing works best when it follows real diagnosis. It should support a broader assessment of the home, not replace one.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                Why This Matters in Singapore
              </h2>
              <p>
                Singapore homes often carry a different kind of pressure. People live in close proximity, work long hours, and recover in compact environments. HDB flats, BTO units, and condos may look efficient, but efficiency does not always mean the atmosphere feels light. When the home is the main place of recovery, its condition matters greatly.
              </p>
              <p>
                If the space repeatedly weakens sleep, emotional steadiness, and clarity, the effects can spread into work performance, relationships, and the ability to make good decisions.
              </p>

              <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                Why Experience Matters
              </h2>
              <p>
                Not every uncomfortable home needs energy clearing, and not every problem should be explained with mystical language. This is where experience matters. Through Qiming Feng Shui, Master Huang QiMing brings 16+ years of hands-on practice in observing homes, people, and recurring spatial patterns.
              </p>
              <p>
                The goal is not to create fear around the home. The goal is to understand what is happening, separate layout issues from energetic issues, and respond in a way that is proportionate and useful.
              </p>

              <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                Conclusion
              </h2>
              <p>
                When a home feels draining for too long, it should not be dismissed too quickly. Sometimes the issue is practical. Sometimes it is energetic. Often it is a combination of both. A careful assessment helps clarify which it is.
              </p>
              <p>
                If you are in Singapore and your home has felt unusually heavy, tense, or exhausting despite your efforts to improve it, a grounded space assessment may reveal what ordinary adjustments have missed.
              </p>
            </div>

            <div className="mt-16 p-8 bg-[oklch(0.12_0.02_60)] border border-[oklch(0.25_0.02_60)] text-center">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-cormorant), serif", color: "oklch(0.95_0.01_75)" }}>
                Need a Space Assessment?
              </h3>
              <p className="text-sm text-[oklch(0.65_0.02_70)] mb-6 max-w-lg mx-auto">
                Speak with Master Huang QiMing if your home has been affecting sleep, mood, or overall momentum and you want a more grounded diagnosis.
              </p>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all hover:scale-[1.02]" style={{ fontFamily: "var(--font-lato), sans-serif", background: "oklch(0.55 0.12 250)", color: "white" }}>
                Book Consultation
              </a>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
