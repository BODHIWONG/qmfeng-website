"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useLanguage } from "@/contexts/language-context";
import { useLocalizedHref } from "@/hooks/use-localized-href";

const areas = [
  ["创始人准备", "Founder Readiness", "创始人真正愿意交出什么、保留什么，以及何时开始退出日常经营。", "Clarifying what the founder is truly ready to transfer, retain and step away from."],
  ["二代接班准备", "Successor Readiness", "判断接班人的责任感、商业判断、组织信用、决策能力与长期意愿。", "Examining responsibility, commercial judgement, organisational credibility, decision capability and long-term commitment."],
  ["两代人对齐", "Founder–Successor Alignment", "看见双方对企业未来、权责、节奏和变革方向的真实差异。", "Surfacing differences in expectations around direction, authority, pace and change."],
  ["角色与权责", "Roles & Authority", "设计渐进式交接，而不是等到退休当天一次性完成传承。", "Designing a staged transition rather than treating succession as a single retirement-day event."],
  ["时机与过渡", "Timing & Transition", "结合现实经营条件与奇门时机分析，审视何时推进关键交接。", "Considering practical business conditions alongside Qimen-based timing analysis for major transition decisions."],
];

export default function FamilyBusinessContent() {
  const { t } = useLanguage();
  const localizeHref = useLocalizedHref();

  return (
    <div className="min-h-screen bg-[#0e0c0a] text-white">
      <Navbar />
      <main>
        <section className="px-4 pb-20 pt-36 md:pb-28 md:pt-44">
          <div className="container mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Family Business & Succession Advisory</p>
            <h1 className="mt-6 max-w-5xl text-4xl font-semibold leading-tight text-[#f4dfb0] md:text-6xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
              {t("企业可以传承，领导力不能继承。", "The Business Can Be Inherited. Leadership Must Be Earned.")}
            </h1>
            <p className="mt-7 max-w-4xl text-base leading-8 text-white/70 md:text-lg">
              {t("家族企业传承不只是股权交接，而是责任、权力、信任、关系与决策能力的交接。启明遁甲协助创始人与下一代，在问题变得紧急之前，看清接班准备、角色、关系与时机。", "Succession is more than transferring ownership. It is the transfer of responsibility, authority, trust, relationships and decision capability. Qimen Strategy helps founders and next-generation successors examine readiness, roles, relationships and timing before succession becomes urgent.")}
            </p>
            <Link href={localizeHref("/contact")} className="mt-9 inline-flex items-center gap-3 bg-[#d6ad63] px-7 py-4 text-sm font-bold uppercase tracking-[0.1em] text-black">
              {t("申请私密沟通", "Request a Private Conversation")}<ArrowRight size={17} />
            </Link>
          </div>
        </section>

        <section className="bg-[#f6f0e7] px-4 py-20 text-[#241b14] md:py-28">
          <div className="container mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#956b32]">{t("创始人真正担心的问题", "What Founders Often Worry About")}</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
                {t("打下一份事业不容易，把它稳稳交到下一代手里，更难。", "Building a Business Is One Challenge. Passing It On Is Another.")}
              </h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {[
                t("“我辛苦建立的企业，他真的接得住吗？”", "“I built this business from nothing. Can they really carry it forward?”"),
                t("“如果我不退，他什么时候才能真正学会领导？”", "“If I don't step back, will they ever truly learn to lead?”"),
                t("“孩子有能力，但他的想法和我完全不同。”", "“My child is capable — but sees the future very differently.”"),
                t("“如果不止一个孩子，权责应该怎么分？”", "“If I have more than one child, how should responsibilities be divided?”"),
              ].map((q) => <div key={q} className="border border-[#dac8ae] bg-white p-6 text-lg font-semibold leading-8 text-[#3d3024]">{q}</div>)}
            </div>

            <div className="mt-16 grid gap-6 lg:grid-cols-2">
              {areas.map(([zh,en,bzh,ben], index) => (
                <article key={en} className="border border-[#dac8ae] bg-white p-7">
                  <p className="text-xs font-bold tracking-[0.18em] text-[#9a7137]">0{index + 1}</p>
                  <h3 className="mt-3 text-2xl font-bold">{t(zh,en)}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#62503d]">{t(bzh,ben)}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 md:py-28">
          <div className="container mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d6ad63]">{t("下一代", "Next Generation")}</p>
              <h2 className="mt-4 text-3xl font-semibold text-[#f4dfb0] md:text-5xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
                {t("你不需要成为父亲的复制品。", "You Are Not Here to Become Your Father.")}
              </h2>
              <p className="mt-6 text-base leading-8 text-white/68">{t("二代需要尊重上一代建立的基础，同时形成自己的判断力、组织信用和领导身份。我们提供一个独立于家庭期待与公司政治之外的思考空间。", "Next-generation successors need to respect what was built while developing their own judgement, credibility and leadership identity. We provide an independent space to think outside family expectations and organisational politics.")}</p>
            </div>
            <div className="space-y-4">
              {[t("领导与决策能力", "Leadership & decision capability"),t("与创始人的沟通与边界", "Communication and boundaries with the founder"),t("组织内部的信用与权威", "Credibility and authority inside the organisation"),t("是否真正愿意走家族企业这条路", "Whether the family business is truly the path they want")].map((item) => <p key={item} className="flex gap-3 border-b border-white/10 pb-4 text-sm leading-7 text-white/75"><CheckCircle2 size={17} className="mt-1 shrink-0 text-[#d6ad63]" />{item}</p>)}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-[#17130f] px-4 py-18">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-semibold text-[#f4dfb0] md:text-4xl">{t("传承不是从退休那一天开始，而是从准备开始。", "Succession Does Not Begin on the Day a Founder Retires. It Begins With Preparation.")}</h2>
            <Link href={localizeHref("/contact")} className="mt-8 inline-flex items-center gap-3 bg-[#d6ad63] px-7 py-4 text-sm font-bold text-black">{t("申请私密咨询", "Request a Private Consultation")}<ArrowRight size={17} /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
