import type { Metadata } from "next";
import Link from "next/link";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Course Registration Policy｜Qimen Strategy Academy",
  description: "Course registration, payment, transfer, cancellation and attendance policy for Qimen Strategy Academy Singapore.",
  alternates: { canonical: "https://www.qmfeng.com/course-policy" },
};

const sections = [
  {
    title: "1. Registration and Place Confirmation",
    body: [
      "Submitting a registration form does not by itself confirm a place. A place is confirmed after the required payment has been received, verified and acknowledged by Qimen Strategy Academy.",
      "The participant is responsible for selecting the correct course, batch and number of learners, and for providing accurate contact information.",
    ],
  },
  {
    title: "2. Payment Verification",
    body: [
      "PayNow payments should be made only after checking that the recipient is QIMING FENG SHUI WISDOM PTE. LTD. and the UEN is 202313112R.",
      "Please retain the payment record and provide the PayNow reference or payment note when requested. We do not ask participants to disclose banking passwords, one-time passwords or full account credentials.",
    ],
  },
  {
    title: "3. Weekly Batches and Course Confirmation",
    body: [
      "The Qi Men Dun Jia Foundation Course is planned as a Saturday–Sunday programme with regular weekly batch options. The selected batch remains subject to instructor availability, venue capacity and final confirmation.",
      "Where a batch cannot proceed, participants may choose an available replacement batch or receive a refund of the course fee paid for the affected batch.",
    ],
  },
  {
    title: "4. Participant Transfer or Rescheduling",
    body: [
      "A participant who gives at least 7 calendar days' notice before the course start date may request one transfer to another available batch within 6 months, subject to availability.",
      "Requests made less than 7 calendar days before the course start date are not automatically eligible for transfer or refund. A replacement participant may be nominated before the course begins, subject to confirmation and updated registration details.",
    ],
  },
  {
    title: "5. Cancellation and Non-Attendance",
    body: [
      "Unless required by applicable law or caused by organiser cancellation, confirmed course fees are not refundable for participant cancellation, late arrival, partial attendance or non-attendance.",
      "Exceptional circumstances may be reviewed individually. Supporting information may be requested, and any transfer, credit or refund remains subject to written confirmation.",
    ],
  },
  {
    title: "6. Course Conduct",
    body: [
      "Participants are expected to attend respectfully, protect the privacy of classmates and avoid disruptive, discriminatory, threatening or unlawful conduct.",
      "The organiser may remove a participant whose behaviour creates material disruption, safety risk, harassment or misuse of confidential class information. Course fees may not be refundable in such circumstances.",
    ],
  },
  {
    title: "7. Recording and Course Materials",
    body: [
      "Audio recording, video recording, live streaming, photographing confidential case material and unauthorised reproduction of course content are not permitted unless written permission is given.",
      "Course notes, slides, diagrams, frameworks and teaching materials are for the registered participant's personal learning. They may not be copied, sold, published, redistributed or used to teach others without written permission.",
    ],
  },
  {
    title: "8. Educational Scope and Responsible Use",
    body: [
      "The course is educational and does not certify a participant as a licensed professional or guarantee commercial competence, income or specific outcomes.",
      "Qi Men Dun Jia should be applied responsibly as a supplementary framework. It does not replace medical, legal, financial, psychological or other regulated professional advice.",
    ],
  },
  {
    title: "9. Privacy and Communications",
    body: [
      "Registration information is used to administer the course, verify payment, communicate class arrangements, maintain records and provide relevant course support in accordance with our Privacy Policy.",
      "Service messages about the selected course may be sent by WhatsApp or email. Promotional communication is handled separately and may be declined.",
    ],
  },
  {
    title: "10. Contact",
    body: [
      "For batch changes, replacement participants or course questions, contact Qimen Strategy Academy through WhatsApp at +65 8959 3499.",
      "Last updated: 20 July 2026.",
    ],
  },
];

export default function CoursePolicyPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main className="px-4 pb-24 pt-32 md:pt-40">
          <div className="container mx-auto max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Qimen Strategy Academy</p>
            <h1 className="mt-5 text-4xl font-semibold text-[#f4dfb0] md:text-6xl">Course Registration Policy</h1>
            <p className="mt-5 text-xl font-semibold text-[#d6ad63]">课程报名、转班与取消政策</p>
            <p className="mt-7 text-base leading-8 text-white/66">
              Please read this policy before registering or making payment. It should be read together with our <Link href="/privacy" className="text-[#d6ad63] underline underline-offset-4">Privacy Policy</Link> and <Link href="/terms" className="text-[#d6ad63] underline underline-offset-4">Terms of Service</Link>.
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
