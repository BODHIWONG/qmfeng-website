"use client";

import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";

const WA_LINK = "https://wa.me/6589418791?text=Hi%20Master%20Huang%2C%20I%20read%20your%20article%20about%20wealth%20and%20home%20layout%20in%20Singapore.%20I%20would%20like%20to%20book%20a%20consultation.";

export default function FengShuiWealthArticle() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[oklch(0.08_0.02_60)]">
        <Navbar />
        <article className="pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="container max-w-3xl">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[oklch(0.60_0.08_65)] hover:gap-3 transition-all mb-8"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              <ArrowLeft size={14} /> Back to Insights
            </Link>

            <header>
              <span
                className="text-[0.6rem] tracking-[0.2em] uppercase px-3 py-1 bg-[oklch(0.72_0.12_70)] text-[oklch(0.06_0.02_60)] mb-6 inline-block"
                style={{ fontFamily: "var(--font-lato), sans-serif" }}
              >
                Wealth Feng Shui
              </span>
              <h1
                className="font-bold mb-6 leading-tight"
                style={{
                  fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "oklch(0.95 0.01 75)",
                }}
              >
                Wealth, Home Layout, and Feng Shui: Why Some Homes Never Seem to Hold Money
              </h1>
              <div className="flex flex-wrap items-center gap-6 mb-10 text-xs text-[oklch(0.55_0.02_65)]" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
                <span className="flex items-center gap-2"><User size={14} /> Master Huang QiMing</span>
                <span className="flex items-center gap-2"><Calendar size={14} /> 20 April 2026</span>
                <span className="flex items-center gap-2"><Clock size={14} /> 6 min read</span>
              </div>
            </header>

            <div className="text-[oklch(0.75_0.02_70)] leading-relaxed space-y-6" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}>
              <p className="text-lg leading-relaxed">
                In Singapore, many people treat wealth as a purely financial matter. Earn more, save more, invest better. That is sensible advice, but it is not always the full picture. Over the years, at Qiming Feng Shui, I have observed that some homes quietly support clarity, discipline, and momentum, while others seem to drain them away.
              </p>

              <p>
                This does not mean Feng Shui creates money out of thin air. It means the environment can influence how well a person rests, thinks, decides, and sustains progress. When a home repeatedly weakens these foundations, financial flow often feels unstable even when income looks acceptable on paper.
              </p>

              <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                Why the Home Matters to Wealth
              </h2>
              <p>
                A home is not only a place to sleep. It shapes routine, mood, patience, and the quality of recovery after work. In compact Singapore homes such as HDB flats, BTO units, and condos, layout choices become even more noticeable. If the space feels blocked, tense, cluttered, or constantly overstimulating, the people inside often become mentally scattered as well.
              </p>
              <p>
                Wealth is not only about what comes in. It is also about what leaks out. Poor rest can lead to poorer judgment. Constant agitation can lead to rushed decisions. A draining home can reduce consistency, focus, and follow-through. Over time, that affects work, business, and money management.
              </p>

              <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                What Feng Shui Actually Looks At
              </h2>
              <p>
                Good Feng Shui is not only about objects, ornaments, or internet tips. It looks at how the space is functioning. This includes the entrance, internal flow, bedroom placement, stove position, exposed corners, blocked areas, and whether the overall layout supports stability or stress.
              </p>
              <p>
                In practical terms, Feng Shui asks simple but important questions. Does the home help the occupants settle down mentally? Is the space constantly pushing energy out too quickly? Are the most important areas of the home neglected or burdened? Are there layout issues that repeatedly weaken rest, attention, or family harmony?
              </p>

              <div className="bg-[oklch(0.12_0.02_60)] border border-[oklch(0.25_0.02_60)] p-6 my-8">
                <p className="mb-2 font-semibold text-[oklch(0.72_0.12_70)]">A practical view</p>
                <p className="mb-0 text-sm">
                  Feng Shui works best when it is tied to real observation: the actual floor plan, how the people use the home, and what kind of problems keep repeating.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                A Common Pattern in Singapore Homes
              </h2>
              <p>
                Many people in Singapore are living in efficient but high-pressure conditions. Compact spaces, demanding schedules, and limited recovery time mean the home has to do more than look neat. It has to support the body and mind. When it does not, the effects can be subtle: poor sleep, faster irritability, more tension at home, lower motivation, or a sense that nothing is settling properly.
              </p>
              <p>
                These are not automatically “wealth problems”, but they often become wealth problems over time. Once clarity and steadiness are affected, timing, judgment, and consistency are affected as well.
              </p>

              <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                Why Generic Advice Is Usually Not Enough
              </h2>
              <p>
                A common mistake is to copy general tips online without considering the actual home and the people living in it. The same placement that helps one household may do little for another. The same issue in a landed property may show up very differently in a high-rise unit. That is why real assessment matters more than formula-based advice.
              </p>
              <p>
                Through Qiming Feng Shui, Master Huang QiMing draws on 16+ years of hands-on practice to assess homes in context. The work is not built on dramatic promises. It is built on observation, diagnosis, and practical recommendations that fit the actual space.
              </p>

              <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                Conclusion
              </h2>
              <p>
                When a home supports calm, rhythm, and better decision-making, financial life often feels more stable. When a home repeatedly weakens these foundations, money may feel harder to hold even when effort is present. That is why wealth, home layout, and Feng Shui should not be separated too quickly.
              </p>
              <p>
                If you are in Singapore and feel that your home has been affecting your clarity, rest, or overall momentum, a proper Feng Shui assessment may offer a more useful starting point than another generic tip online.
              </p>
            </div>

            <div className="mt-16 p-8 bg-[oklch(0.12_0.02_60)] border border-[oklch(0.25_0.02_60)] text-center">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-cormorant), serif", color: "oklch(0.95_0.01_75)" }}>
                Need a Practical Feng Shui Assessment?
              </h3>
              <p className="text-sm text-[oklch(0.65_0.02_70)] mb-6 max-w-lg mx-auto">
                Speak with Master Huang QiMing for a more grounded assessment of your home layout, daily flow, and wealth-supporting environment.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all hover:scale-[1.02]"
                style={{ fontFamily: "var(--font-lato), sans-serif", background: "oklch(0.72 0.12 70)", color: "oklch(0.06 0.02 60)" }}
              >
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
