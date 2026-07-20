import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy｜Qimen Strategy Singapore",
  description: "Privacy and personal data policy for Qimen Strategy and Qiming Feng Shui Wisdom Pte. Ltd. in Singapore.",
  alternates: { canonical: "https://www.qmfeng.com/privacy" },
};

const sections = [
  {
    title: "1. Who We Are",
    body: [
      "This Privacy Policy applies to Qimen Strategy｜启明遁甲决策智库, operated by QIMING FENG SHUI WISDOM PTE. LTD. in Singapore.",
      "Business address: Blk 210 New Upper Changi Road #01-729, Singapore 460210. Official WhatsApp: +65 8959 3499.",
    ],
  },
  {
    title: "2. Personal Data We May Collect",
    body: [
      "Depending on your interaction with us, we may collect your name, WhatsApp number, email address, role, industry, company or team information, course registration details, payment reference, consultation background, decision deadline, meeting preference and messages you choose to provide.",
      "Please do not submit unnecessary identification numbers, passwords, complete banking credentials, highly sensitive documents or third-party personal data unless specifically requested and appropriately authorised.",
    ],
  },
  {
    title: "3. Purposes of Collection, Use and Disclosure",
    body: [
      "We may use personal data to respond to enquiries, assess service suitability, schedule consultations or courses, verify payments, deliver services, maintain business and accounting records, manage customer support, improve our website, measure advertising performance, prevent misuse and comply with legal or regulatory obligations.",
      "Where consent is required, we will use personal data only for purposes that have been notified and are reasonable in the circumstances. Separate consent may be requested for promotional messages or case sharing.",
    ],
  },
  {
    title: "4. Service Providers and Data Transfers",
    body: [
      "We may engage service providers for website hosting, forms, analytics, advertising measurement, messaging, email, customer records, payment verification and cloud storage. These providers may process data on our behalf according to their terms and applicable safeguards.",
      "Where personal data is transferred outside Singapore, we will take reasonable steps to ensure that the transfer is handled in accordance with applicable data protection requirements.",
    ],
  },
  {
    title: "5. Cookies, Analytics and Advertising Measurement",
    body: [
      "Our website may use essential cookies, Vercel Analytics, Google advertising measurement and similar technologies to understand website use, maintain performance and measure actions such as WhatsApp enquiries.",
      "You may manage cookies through your browser settings. Blocking certain technologies may affect website functionality or measurement accuracy.",
    ],
  },
  {
    title: "6. Marketing Communications",
    body: [
      "We do not treat a consultation or course enquiry as unlimited consent to receive unrelated promotional messages. Marketing messages will be sent only where there is a lawful basis, relevant ongoing relationship or appropriate consent.",
      "You may ask us to stop promotional communications through the same contact channel. Service messages, booking confirmations and payment-related communications may still be sent where necessary to fulfil your request.",
    ],
  },
  {
    title: "7. Protection and Retention",
    body: [
      "We take reasonable administrative and technical measures to protect personal data against unauthorised access, disclosure, loss or misuse. No internet transmission or storage system can be guaranteed to be completely secure.",
      "We retain personal data only for as long as reasonably required for service delivery, business, accounting, dispute-resolution, legal or regulatory purposes, after which it may be deleted, anonymised or securely disposed of.",
    ],
  },
  {
    title: "8. Access, Correction and Withdrawal of Consent",
    body: [
      "Subject to applicable law and exceptions, you may request access to personal data held by us, request correction of inaccurate data or withdraw consent for specific uses with reasonable notice.",
      "Withdrawal may affect our ability to continue a service, process an application or maintain certain communications. We will explain the practical consequences where relevant.",
    ],
  },
  {
    title: "9. Confidential Consultation and Case Materials",
    body: [
      "Consultation and application information is treated as private. We will not publish identifiable client stories, screenshots, photographs, business records or case details without permission.",
      "Where permission is granted for educational or marketing use, we may anonymise, blur or edit identifying details. Consent for case sharing can be separate from consent required to deliver the service.",
    ],
  },
  {
    title: "10. Contact and Updates",
    body: [
      "For privacy questions, access or correction requests, consent withdrawal or complaints, contact our Data Protection Contact through WhatsApp at +65 8959 3499 or write to the business address above.",
      "We may update this policy when our services, systems or legal obligations change. The current version will be published on this page.",
      "Last updated: 20 July 2026.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main className="px-4 pb-24 pt-32 md:pt-40">
          <div className="container mx-auto max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Qimen Strategy Singapore</p>
            <h1 className="mt-5 text-4xl font-semibold text-[#f4dfb0] md:text-6xl">Privacy Policy</h1>
            <p className="mt-5 text-xl font-semibold text-[#d6ad63]">隐私与个人资料政策</p>
            <p className="mt-7 text-base leading-8 text-white/66">
              This policy explains how personal data may be collected, used, disclosed, protected and retained when you use our website, submit an enquiry, register for a course or engage our services.
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
