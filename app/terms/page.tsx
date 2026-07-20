import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Terms of Service & Advisory Disclaimer｜服务条款与免责声明",
  description: "Terms, professional boundaries and advisory disclaimer for Qimen Strategy Singapore.",
  alternates: { canonical: "https://www.qmfeng.com/terms" },
};

const terms = [
  ["Advisory Nature", "顾问性质", "Qimen Strategy provides structured strategic insight and decision reference. It does not make decisions for clients and does not guarantee any specific result.", "启明遁甲决策智库提供结构化战略判断与决策参考，不替客户作决定，也不保证任何特定结果。"],
  ["Professional Advice", "专业意见", "Advisory services do not replace legal, accounting, tax, medical, psychological, regulated financial or other licensed professional advice.", "顾问服务不能替代法律、会计、税务、医疗、心理、持牌金融或其他专业意见。"],
  ["Client Responsibility", "客户责任", "Clients are responsible for verifying relevant facts, contracts, financial records, credentials and professional opinions before acting.", "客户在行动前应自行核实相关事实、合同、财务记录、资质与专业意见。"],
  ["Confidentiality", "保密", "Client information is handled privately and is not used in public case studies without permission. Where permission is given, identifying details may be removed or changed.", "客户资料将以私密方式处理。未经允许不会公开用于案例；如获授权，也会尽量删除或调整可识别信息。"],
  ["Fees and Scope", "费用与范围", "Fees, scope, number of sessions, response expectations, deliverables, payment schedule and any on-site work are confirmed before engagement. Additional work may require a separate quotation.", "费用、范围、咨询次数、响应方式、交付内容、付款安排及到场服务将在合作前确认。超出范围的工作可能需要另行报价。"],
  ["Scheduling and Changes", "预约与变更", "Appointments are subject to availability. Rescheduling, cancellation and refund arrangements follow the written confirmation provided for the specific service or course.", "预约视实际档期而定。改期、取消与退款安排以具体服务或课程的书面确认为准。"],
  ["Intellectual Property", "知识产权", "Course materials, frameworks, reports, slides, recordings and website content remain the intellectual property of Qimen Strategy or the relevant rights holder and may not be reproduced or distributed without written permission.", "课程资料、框架、报告、课件、录音录像与网站内容属于启明遁甲决策智库或相关权利人，未经书面允许不得复制或传播。"],
];

export default function TermsPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main className="px-4 pb-24 pt-32 md:pt-40">
          <div className="container mx-auto max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Professional Boundaries</p>
            <h1 className="mt-5 text-4xl font-semibold text-[#f4dfb0] md:text-6xl">Terms of Service & Advisory Disclaimer</h1>
            <h2 className="mt-4 text-2xl font-semibold text-[#e2bd6b] md:text-4xl">服务条款与免责声明</h2>
            <p className="mt-8 text-base leading-8 text-white/72">By booking, registering, paying for or participating in a Qimen Strategy service or course, you acknowledge the relevant scope, professional boundaries and written booking terms.</p>
            <div className="mt-12 space-y-5">
              {terms.map(([title, zh, body, bodyZh]) => (
                <section key={title} className="border border-[#d6ad63]/20 bg-white/[0.035] p-7">
                  <h3 className="text-xl font-semibold text-[#f4dfb0]">{title}｜{zh}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/70">{body}</p>
                  <p className="mt-3 text-sm leading-7 text-white/52">{bodyZh}</p>
                </section>
              ))}
            </div>
            <p className="mt-10 text-sm leading-7 text-white/50">Last updated: 20 July 2026. Where a signed agreement or written booking confirmation contains more specific terms, those specific terms take priority for that engagement.</p>
          </div>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
