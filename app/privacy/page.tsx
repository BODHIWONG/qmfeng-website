import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy｜隐私政策",
  description: "Privacy and personal data policy for Qimen Strategy and Qiming Feng Shui Wisdom Pte. Ltd. in Singapore.",
  alternates: { canonical: "https://www.qmfeng.com/privacy" },
};

const sections = [
  ["1. Information We Collect", "1. 我们收集的资料", "We may collect your name, contact details, WhatsApp number, email address, professional or business background, course registration information, payment reference, enquiry details and other information you choose to provide.", "我们可能收集你的姓名、联系方式、WhatsApp、Email、职业或企业背景、课程报名资料、付款参考、咨询问题，以及你主动提供的其他资料。"],
  ["2. How We Use Information", "2. 资料用途", "Information is used to respond to enquiries, assess the appropriate advisory or course pathway, manage appointments and course registration, verify payment, provide services, maintain records and improve the website and client experience.", "资料用于回复咨询、判断适合的顾问或课程路径、管理预约与课程报名、核实付款、提供服务、保存必要记录，以及改善网站与客户体验。"],
  ["3. Communication", "3. 联络方式", "By submitting an enquiry or registration form, you consent to being contacted through WhatsApp, phone or email about that enquiry, booking or course. You may ask us to stop non-essential messages.", "提交咨询或报名表后，即表示同意我们通过WhatsApp、电话或Email就该咨询、预约或课程与你联系。你可以要求停止非必要信息。"],
  ["4. Disclosure and Service Providers", "4. 资料披露与服务供应商", "We do not sell personal data. Information may be processed through service providers used for website hosting, analytics, forms, spreadsheets, CRM, payment verification or communication, subject to appropriate access controls.", "我们不会出售个人资料。资料可能通过网站托管、分析、表单、电子表格、CRM、付款核实或通讯服务供应商处理，并会尽量采用适当的访问控制。"],
  ["5. Retention and Security", "5. 保存与安全", "Information is retained only for as long as reasonably required for service delivery, business records, dispute handling, legal obligations and legitimate operational needs. Reasonable safeguards are used, but no online system can be guaranteed completely secure.", "资料只会在提供服务、保存业务记录、处理争议、履行法律义务及合理营运需要的期间内保留。我们会采取合理措施，但任何线上系统都无法保证绝对安全。"],
  ["6. Access, Correction and Withdrawal", "6. 查阅、更正与撤回同意", "You may contact us to request access to or correction of your personal data, or to withdraw consent where applicable. Some information may still need to be retained for legal, accounting or dispute purposes.", "你可以联系我们申请查阅或更正个人资料，或在适用情况下撤回同意。若法律、会计或争议处理需要，部分资料仍可能必须保留。"],
];

export default function PrivacyPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main className="px-4 pb-24 pt-32 md:pt-40">
          <div className="container mx-auto max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Qiming Feng Shui Wisdom Pte. Ltd.</p>
            <h1 className="mt-5 text-4xl font-semibold text-[#f4dfb0] md:text-6xl">Privacy Policy｜隐私政策</h1>
            <p className="mt-6 text-sm leading-7 text-white/58">Last updated: 20 July 2026</p>
            <p className="mt-8 text-base leading-8 text-white/72">This policy explains how Qimen Strategy｜启明遁甲决策智库 handles personal data in connection with enquiries, advisory services, course registration and website use in Singapore.</p>
            <div className="mt-12 space-y-6">
              {sections.map(([title, zh, body, bodyZh]) => (
                <section key={title} className="border border-[#d6ad63]/20 bg-white/[0.035] p-7">
                  <h2 className="text-2xl font-semibold text-[#f4dfb0]">{title}</h2>
                  <h3 className="mt-2 text-lg font-semibold text-[#d6ad63]">{zh}</h3>
                  <p className="mt-5 text-sm leading-7 text-white/70">{body}</p>
                  <p className="mt-3 text-sm leading-7 text-white/52">{bodyZh}</p>
                </section>
              ))}
            </div>
            <div className="mt-10 border border-[#d6ad63]/30 bg-[#d6ad63]/10 p-7">
              <h2 className="text-xl font-semibold text-[#f4dfb0]">Contact｜联络</h2>
              <p className="mt-4 text-sm leading-7 text-white/70">WhatsApp: +65 8959 3499<br />Address: Blk 210 New Upper Changi Road #01-729, Singapore 460210</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
