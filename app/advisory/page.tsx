import type { Metadata } from "next";
import Link from "next/link";
import { Building2, LineChart, Briefcase, HeartHandshake, ArrowRight } from "lucide-react";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";

export const metadata: Metadata = {
  title: "Strategic Decision Advisory Singapore｜创业老板·高管·重大决策",
  description:
    "Qimen Strategy Singapore provides structured decision advisory for founders, entrepreneurs, executives and individuals facing business bottlenecks, investment decisions, career transitions, relationship uncertainty and major life choices.",
  keywords: [
    "strategic decision advisory Singapore",
    "founder business advisory Singapore",
    "business owner advisory Singapore",
    "investment decision support Singapore",
    "executive career transition Singapore",
    "relationship decision advisory Singapore",
    "创业老板事业陪跑",
    "高管事业转型",
    "重大决策咨询",
  ],
  alternates: { canonical: "https://www.qmfeng.com/advisory" },
};

const pathways = [
  {
    icon: Building2,
    title: "Founder Business Advisory",
    zh: "创业老板事业陪跑",
    body: "Ongoing strategic support for founders facing business bottlenecks, growth priorities, team issues, partnerships and major operating decisions.",
    bodyZh: "协助创业老板梳理经营瓶颈、增长重点、团队人事、合作风险与重大经营决策，适合90天试行或长期顾问合作。",
    href: "/founder-business-advisory",
    tag: "Core Advisory",
  },
  {
    icon: LineChart,
    title: "Wealth Cycle & Investment Decision Support",
    zh: "财富周期与投资决策辅助",
    body: "Review timing, capital commitment, people dynamics, downside risk and decision conditions before a major investment or expansion.",
    bodyZh: "在重大投资、扩张、项目投入或资产配置前，辅助判断时机、资金承载、人事关系与潜在风险。",
    href: "/wealth-cycle-investment-decision",
    tag: "Decision Support",
  },
  {
    icon: Briefcase,
    title: "Executive Career Transition Advisory",
    zh: "高管事业转型与关键关系规划",
    body: "For senior professionals deciding whether to stay, move, accept a role, change industry, start a business or rebuild strategic relationships.",
    bodyZh: "面向职场高管与专业人士，辅助判断留任、跳槽、转型、创业、平台选择及关键关系与资源布局。",
    href: "/executive-career-transition",
    tag: "Executive Advisory",
  },
  {
    icon: HeartHandshake,
    title: "Relationship & Major Life Decision Support",
    zh: "个人情感与重大决策支持",
    body: "Private decision clarity for relationship uncertainty, marriage direction, family pressure and important personal choices.",
    bodyZh: "在感情、婚姻、家庭与人生方向反复不清时，帮助客户看清局势、边界、时机与下一步选择。",
    href: "/relationship-clarity-reading-singapore",
    tag: "Private Advisory",
  },
];

export default function AdvisoryOverviewPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main>
          <section className="relative overflow-hidden px-4 pb-20 pt-32 md:pb-28 md:pt-40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(214,173,99,0.24),transparent_34%),linear-gradient(135deg,rgba(244,223,176,0.07),transparent_42%)]" />
            <div className="container relative mx-auto max-w-6xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">
                Qimen Strategy Advisory · Singapore
              </p>
              <h1 className="mt-5 max-w-5xl text-4xl font-semibold uppercase leading-[0.98] tracking-[0.03em] text-[#f4dfb0] md:text-7xl">
                Strategic Decision Advisory
              </h1>
              <h2 className="mt-5 max-w-5xl text-3xl font-semibold leading-tight text-[#e2bd6b] md:text-5xl">
                创业老板、高管与个人重大决策支持
              </h2>
              <p className="mt-8 max-w-4xl text-lg leading-8 text-white/80 md:text-xl">
                Qimen Strategy supports founders, entrepreneurs, executives and individuals before high-cost decisions involving business direction, investment, career transition, people dynamics, relationships and major life choices.
              </p>
              <p className="mt-4 max-w-4xl text-base leading-8 text-white/68 md:text-lg">
                启明遁甲决策智库不是替客户作决定，而是结合奇门遁甲、真实商业判断、人事关系与环境条件，帮助决策者在投入更多时间、资金和精力之前，看清时机、方向、关键人物与风险结构。
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/#enquiry"
                  className="inline-flex items-center justify-center bg-[#d6ad63] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-black transition hover:bg-[#f4dfb0]"
                >
                  Submit Advisory Enquiry
                </a>
                <Link
                  href="/qi-men-dun-jia-course-singapore"
                  className="inline-flex items-center justify-center border border-[#d6ad63]/70 px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#f4dfb0] transition hover:bg-[#d6ad63]/10"
                >
                  View Weekly Courses
                </Link>
              </div>
            </div>
          </section>

          <section className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-20 md:py-28">
            <div className="container mx-auto max-w-6xl">
              <div className="mb-12 max-w-4xl">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Four Advisory Pathways</p>
                <h2 className="mt-4 text-3xl font-semibold text-[#f4dfb0] md:text-5xl">
                  Choose the pathway that matches the decision you are facing.
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {pathways.map((pathway) => {
                  const Icon = pathway.icon;
                  return (
                    <Link key={pathway.href} href={pathway.href} className="group">
                      <article className="flex h-full flex-col border border-[#d6ad63]/25 bg-white/[0.035] p-7 transition group-hover:-translate-y-1 group-hover:border-[#d6ad63]/70">
                        <div className="flex items-center justify-between gap-5">
                          <div className="flex h-12 w-12 items-center justify-center border border-[#d6ad63]/55 text-[#d6ad63]">
                            <Icon size={23} />
                          </div>
                          <span className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#d6ad63]">{pathway.tag}</span>
                        </div>
                        <h3 className="mt-6 text-2xl font-semibold text-[#f4dfb0] md:text-3xl">{pathway.title}</h3>
                        <p className="mt-2 text-xl font-semibold text-[#d6ad63]">{pathway.zh}</p>
                        <p className="mt-5 text-sm leading-7 text-white/70">{pathway.body}</p>
                        <p className="mt-3 text-sm leading-7 text-white/52">{pathway.bodyZh}</p>
                        <span className="mt-auto inline-flex items-center gap-2 pt-8 text-xs font-bold uppercase tracking-[0.16em] text-[#f4dfb0]">
                          View Pathway <ArrowRight size={14} />
                        </span>
                      </article>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="px-4 py-20 md:py-28">
            <div className="container mx-auto max-w-6xl">
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  ["01", "Clarify the Decision", "明确真正需要解决的核心问题，而不是把所有问题混在一起。"],
                  ["02", "Review the Whole Situation", "从时机、方向、人事、环境、资源与风险结构进行判断。"],
                  ["03", "Define the Next Move", "形成推进、等待、调整、止损或进一步核实的行动方向。"],
                ].map(([no, title, body]) => (
                  <article key={no} className="border border-[#d6ad63]/20 bg-white/[0.025] p-7">
                    <p className="text-sm font-bold text-[#d6ad63]">{no}</p>
                    <h3 className="mt-4 text-2xl font-semibold text-[#f4dfb0]">{title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/62">{body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="border-t border-[#d6ad63]/20 bg-[#070707] px-4 py-20">
            <div className="container mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Confidential Application</p>
              <h2 className="mt-5 text-3xl font-semibold text-[#f4dfb0] md:text-5xl">Start with the decision that matters most now.</h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/68">
                简单说明你的身份、行业、团队规模、当前最重要的决定以及希望解决的时间节点，我们会先判断适合单次咨询、90天事业陪跑还是长期顾问支持。
              </p>
              <a href="/#enquiry" className="mt-8 inline-flex items-center justify-center bg-[#d6ad63] px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-black transition hover:bg-[#f4dfb0]">
                Submit Enquiry
              </a>
            </div>
          </section>
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </LanguageProvider>
  );
}
