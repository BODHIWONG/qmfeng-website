import type { Metadata } from "next";
import Link from "next/link";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Terms of Service｜Qimen Strategy Singapore",
  description: "Terms of service and advisory disclaimer for Qimen Strategy Singapore.",
  alternates: { canonical: "https://www.qmfeng.com/terms" },
};

const sections = [
  {
    title: "1. Scope of Services",
    body: [
      "Qimen Strategy provides private strategic decision advisory, Qi Men Dun Jia consultation, founder advisory, relationship decision support, space and Feng Shui-related advisory, and educational courses.",
      "The exact scope, delivery format, timeline, fee and included follow-up are confirmed before payment or engagement. Services outside the agreed scope may require a separate quotation.",
    ],
  },
  {
    title: "2. Nature of Advisory",
    body: [
      "Our work provides structured reflection, timing analysis, risk identification and decision reference. It does not replace the client's own judgment, factual verification, due diligence or implementation responsibility.",
      "Qi Men Dun Jia and related traditional frameworks are used as supplementary decision-support methods. They are not presented as scientific certainty or a guarantee of future events.",
    ],
  },
  {
    title: "3. No Guaranteed Outcomes",
    body: [
      "No guarantee is made regarding revenue, profit, investment return, promotion, employment, reconciliation, marriage, health improvement, legal outcome or any other specific result.",
      "Results depend on factors outside our control, including market conditions, other people, client decisions, implementation quality and changing circumstances.",
    ],
  },
  {
    title: "4. Professional Boundaries",
    body: [
      "Our services do not constitute regulated financial advice, legal advice, accounting or tax advice, medical diagnosis, psychological treatment, recruitment, employment placement or property valuation.",
      "Clients should consult appropriately qualified professionals where a matter involves regulated, legal, medical, financial, tax, employment, immigration or clinical issues.",
    ],
  },
  {
    title: "5. Client Responsibilities",
    body: [
      "Clients are responsible for providing accurate, complete and lawful information, identifying the real decision to be reviewed, and informing us of relevant deadlines or changes.",
      "Clients must not submit confidential third-party information without authority, request surveillance or manipulation, or use our services to facilitate unlawful, deceptive or harmful conduct.",
    ],
  },
  {
    title: "6. Fees, Payment and Booking",
    body: [
      "A booking or place is confirmed only after the required payment has been received and verified, unless otherwise agreed in writing.",
      "PayNow payments should be made only after checking that the receiving entity is QIMING FENG SHUI WISDOM PTE. LTD. and the UEN is 202313112R.",
      "Fees are based on the agreed scope. Additional meetings, urgent work, on-site visits, reports, travel or expanded deliverables may require additional fees confirmed in advance.",
    ],
  },
  {
    title: "7. Rescheduling, Cancellation and Non-Attendance",
    body: [
      "Consultation and advisory rescheduling is subject to availability and the terms stated at booking. Late cancellation, repeated rescheduling or non-attendance may result in the session being treated as used.",
      "Course-specific cancellation, transfer and replacement rules are set out in the Course Registration Policy.",
    ],
  },
  {
    title: "8. Confidentiality and Materials",
    body: [
      "We take reasonable care to keep client information private. Confidentiality does not apply where disclosure is required by law, necessary to protect rights or safety, or authorised by the client.",
      "Course notes, frameworks, recordings, slides, reports and other materials remain the intellectual property of their respective owner. They may not be copied, sold, published, recorded, redistributed or used to train others without written permission.",
    ],
  },
  {
    title: "9. Website and Third-Party Services",
    body: [
      "Website content is general information and may be updated without notice. We do not warrant that the website will always be uninterrupted, error-free or suitable for every purpose.",
      "Third-party services such as WhatsApp, Google, payment applications, cloud hosting and analytics are governed by their own terms and privacy practices.",
    ],
  },
  {
    title: "10. Limitation and Acceptance",
    body: [
      "To the extent permitted by applicable law, the client remains responsible for final decisions, actions, losses, opportunities and consequences arising from use of the service or reliance on website content.",
      "By paying for, booking or attending a service, the client confirms that they understand the agreed scope, professional boundaries and no-guarantee nature of the service.",
      "Last updated: 20 July 2026.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main className="px-4 pb-24 pt-32 md:pt-40">
          <div className="container mx-auto max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Qimen Strategy Singapore</p>
            <h1 className="mt-5 text-4xl font-semibold text-[#f4dfb0] md:text-6xl">Terms of Service</h1>
            <p className="mt-5 text-xl font-semibold text-[#d6ad63]">服务条款与顾问边界</p>
            <p className="mt-7 text-base leading-8 text-white/66">
              These terms apply to website use, private advisory, consultation and related services provided by QIMING FENG SHUI WISDOM PTE. LTD. Course participants should also read the dedicated <Link href="/course-policy" className="text-[#d6ad63] underline underline-offset-4">Course Registration Policy</Link>.
            </p>
            <div className="mt-12 space-y-7">
              {sections.map((section) => (
                <section key={section.title} className="border border-[#d6ad63]/20 bg-white/[0.035] p-6 md:p-8">
                  <h2 className="text-2xl font-semibold text-[#f4dfb0]">{section.title}</h2>
                  <div className="mt-4 space-y-4 text-sm leading-7 text-white/66 md:text-base md:leading-8">
                    {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
