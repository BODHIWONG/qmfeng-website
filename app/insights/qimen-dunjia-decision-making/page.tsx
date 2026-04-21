"use client";

import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";

const WA_LINK = "https://wa.me/6589418791?text=Hi%20Master%20Huang%2C%20I%20read%20your%20article%20about%20Qi%20Men%20Dun%20Jia%20decision-making.%20I%20would%20like%20to%20book%20a%20consultation.";

export default function QimenDunjiaArticle() {
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
              <span className="text-[0.6rem] tracking-[0.2em] uppercase px-3 py-1 bg-[oklch(0.72_0.12_70)] text-[oklch(0.06_0.02_60)] mb-6 inline-block" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
                Qi Men Dun Jia
              </span>
              <h1 className="font-bold mb-6 leading-tight" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "oklch(0.95 0.01 75)" }}>
                How Qi Men Dun Jia Supports Better Timing and Decision-Making
              </h1>
              <div className="flex flex-wrap items-center gap-6 mb-10 text-xs text-[oklch(0.55_0.02_65)]" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
                <span className="flex items-center gap-2"><User size={14} /> Master Huang QiMing</span>
                <span className="flex items-center gap-2"><Calendar size={14} /> 20 April 2026</span>
                <span className="flex items-center gap-2"><Clock size={14} /> 6 min read</span>
              </div>
            </header>

            <div className="text-[oklch(0.75_0.02_70)] leading-relaxed space-y-6" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}>
              <p className="text-lg leading-relaxed">
                Qi Men Dun Jia is often misunderstood as something mysterious and distant from modern life. In reality, its practical value lies in timing, direction, and strategic judgment. It is a system traditionally used to assess the quality of a moment and the pattern surrounding a decision.
              </p>

              <p>
                In modern terms, Qi Men Dun Jia helps answer questions such as: Is this the right time to move ahead? Which option carries fewer hidden obstacles? Is it better to push now, wait, or change direction? For business owners, professionals, and families under pressure, these questions matter far more than abstract theory.
              </p>

              <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                What Qi Men Dun Jia Looks At
              </h2>
              <p>
                Unlike Feng Shui, which studies how a space supports the people living or working in it, Qi Men Dun Jia focuses more on the quality of timing and the pattern around a specific action. It is often used when someone is facing a meaningful choice: signing an agreement, changing jobs, starting a business, approaching a negotiation, or deciding whether to move forward with a plan.
              </p>
              <p>
                The value of the system is not in dramatic prediction. Its value is in improving positioning. Sometimes the right insight is not “yes” or “no”, but “not yet”, “change the sequence”, or “approach from another angle”.
              </p>

              <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                Why Timing Matters So Much
              </h2>
              <p>
                Many people assume that a good plan should work at any time. In practice, timing changes outcomes. The same conversation held on the wrong day can become resistance. The same proposal brought at a better moment can gain support. The same opportunity can shift from favorable to risky depending on what is happening around it.
              </p>
              <p>
                This is why Qi Men Dun Jia remains relevant. It gives another layer of situational awareness when a decision carries real weight.
              </p>

              <div className="bg-[oklch(0.12_0.02_60)] border border-[oklch(0.25_0.02_60)] p-6 my-8">
                <p className="mb-2 font-semibold text-[oklch(0.72_0.12_70)]">A practical use case</p>
                <p className="mb-0 text-sm">
                  Instead of treating all options as equal, Qi Men Dun Jia helps compare timing, pressure points, likely resistance, and where the cleaner path may be.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                Modern Applications in Singapore
              </h2>
              <p>
                In Singapore, people are often making decisions in dense, high-pressure conditions. Work moves quickly. Property choices are significant. Business costs are high. The margin for badly timed decisions can be small. This is where a strategic timing system becomes useful.
              </p>
              <p>
                People may consult Qi Men Dun Jia when evaluating business direction, preparing for partnership discussions, deciding on a move, or looking at a transition in career. The system does not replace due diligence, market research, or legal advice. It adds another perspective to help a person move with greater awareness.
              </p>

              <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                How It Differs from Feng Shui
              </h2>
              <p>
                Feng Shui looks at the environment. Qi Men Dun Jia looks more directly at timing and strategic movement. One asks whether the space is helping or weakening you. The other asks whether this is the right time and angle to act.
              </p>
              <p>
                Used together, they give a fuller picture. Feng Shui may help create a more supportive base. Qi Men Dun Jia may help identify when and how to move from that base. This is one reason the two systems are often more powerful together than separately.
              </p>

              <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                Why Experience Matters
              </h2>
              <p>
                A system is only as useful as its interpretation. Real-world assessment matters because people are rarely dealing with one clean variable. There is timing, but there is also personality, environment, financial pressure, and what the person is realistically prepared to do.
              </p>
              <p>
                Through Qiming Feng Shui, Master Huang QiMing brings 16+ years of hands-on practice into this kind of advisory work. The aim is not to mystify the decision, but to help the client see it more clearly.
              </p>

              <h2 className="text-2xl font-bold text-[oklch(0.95_0.01_75)] mt-12 mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                Conclusion
              </h2>
              <p>
                Qi Men Dun Jia remains relevant because timing remains relevant. In major decisions, having a better read on pressure, sequence, and opportunity can make a meaningful difference. It should not be treated as fantasy, nor as a replacement for practical thinking. It works best as part of a grounded decision process.
              </p>
              <p>
                If you are facing a significant business or life decision in Singapore and want a clearer strategic perspective, Qi Men Dun Jia can be a useful tool when interpreted with experience and restraint.
              </p>
            </div>

            <div className="mt-16 p-8 bg-[oklch(0.12_0.02_60)] border border-[oklch(0.25_0.02_60)] text-center">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-cormorant), serif", color: "oklch(0.95_0.01_75)" }}>
                Need Guidance on a Key Decision?
              </h3>
              <p className="text-sm text-[oklch(0.65_0.02_70)] mb-6 max-w-lg mx-auto">
                Book a consultation with Master Huang QiMing for grounded advice on timing, decision-making, and strategic direction.
              </p>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all hover:scale-[1.02]" style={{ fontFamily: "var(--font-lato), sans-serif", background: "oklch(0.72 0.12 70)", color: "oklch(0.06 0.02 60)" }}>
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
