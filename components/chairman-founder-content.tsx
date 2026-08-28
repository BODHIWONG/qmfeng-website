"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useLanguage } from "@/contexts/language-context";
import { useLocalizedHref } from "@/hooks/use-localized-href";

const topics = [
  ["重大方向", "Major strategic direction"],
  ["投资与扩张", "Investment & expansion"],
  ["合作伙伴", "Partnership decisions"],
  ["关键高管", "Key executive appointments"],
  ["业务重组", "Business restructuring"],
  ["家族与传承", "Family business & succession"],
  ["关键谈判", "Critical negotiations"],
  ["重大行动时机", "Timing of major commitments"],
];

export default function ChairmanFounderContent() {
  const { t } = useLanguage();
  const localizeHref = useLocalizedHref();

  return (
    <div className="min-h-screen bg-[#0e0c0a] text-white">
      <Navbar />
      <main>
        <section className="px-4 pb-20 pt-36 md:pb-28 md:pt-44">
          <div className="container mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Chairman & Founder Advisory</p>
            <h1 className="mt-6 max-w-5xl text-4xl font-semibold leading-tight text-[#f4dfb0] md:text-6xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
              {t("有些决定，不适合和所有人讨论。", "Some Decisions Cannot Be Discussed With Everyone.")}
            </h1>
            <p className="mt-7 max-w-4xl text-base leading-8 text-white/70 md:text-lg">
              {t("责任越大，真正可以无保留讨论重大决定的人往往越少。启明遁甲为创始人、企业主与资深决策者提供独立、私密的决策支持，在重大承诺作出之前，多看一层。", "As responsibility grows, the number of people with whom a leader can examine a difficult decision openly often becomes smaller. Qimen Strategy provides founders, business owners and senior decision-makers with an independent and confidential perspective before major commitments are made.")}
            </p>
            <Link href={localizeHref("/contact")} className="mt-9 inline-flex items-center gap-3 bg-[#d6ad63] px-7 py-4 text-sm font-bold uppercase tracking-[0.1em] text-black">
              {t("申请私密沟通", "Request a Confidential Conversation")}<ArrowRight size={17} />
            </Link>
          </div>
        </section>

        <section className="bg-[#f6f0e7] px-4 py-20 text-[#241b14] md:py-28">
          <div className="container mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#956b32]">{t("一个独立的思考空间", "A Private Space to Think")}</p>
                <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
                  {t("我们的角色不是告诉领导者如何经营公司。", "Our Role Is Not to Tell Leaders How to Run Their Companies.")}
                </h2>
                <p className="mt-6 text-base leading-8 text-[#5e4c39]">
                  {t("员工有职位，伙伴有利益，家人有情感，专业顾问各有专业视角。我们的价值，是在答案并不明显的时候，提供一重独立的决策视角。", "Employees have positions, partners have interests, family members have emotions, and professional advisers each see the situation through their own discipline. Our role is to add an independent decision perspective when the answer is not obvious.")}
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {topics.map(([zh,en]) => <div key={en} className="flex items-start gap-3 border border-[#dac8ae] bg-white p-5 text-sm font-semibold leading-6"><CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[#a57939]" />{t(zh,en)}</div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 md:py-28">
          <div className="container mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d6ad63]">{t("介入决策链的位置不同", "A Different Point in the Decision Chain")}</p>
            <h2 className="mt-4 max-w-5xl text-3xl font-semibold leading-tight text-[#f4dfb0] md:text-5xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
              {t("很多专业顾问在决定之后介入。我们的工作，可能从决定之前开始。", "Many Professional Advisers Enter After a Decision. Our Work May Begin Before It Is Made.")}
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-4">
              {[
                [t("律师", "Lawyers"), t("设计法律结构", "Structure the legal framework")],
                [t("会计师", "Accountants"), t("审视数字与财务影响", "Examine numbers and financial implications")],
                [t("银行与融资顾问", "Bankers & Finance"), t("安排资金与融资", "Arrange capital and financing")],
                [t("启明遁甲", "Qimen Strategy"), t("在承诺之前审视是否、何时以及如何推进", "Examine whether, when and how to proceed before commitment")],
              ].map(([title,body], i) => <div key={title} className={`border p-6 ${i === 3 ? "border-[#d6ad63] bg-[#1a1510]" : "border-white/10 bg-white/5"}`}><p className="font-bold text-[#f4dfb0]">{title}</p><p className="mt-3 text-sm leading-7 text-white/60">{body}</p></div>)}
            </div>
            <p className="mt-10 max-w-4xl text-lg font-semibold leading-8 text-white/82">
              {t("我们不取代律师、会计师、银行家或管理团队。我们关注的是：在行动之前，这个决定本身是否值得做。", "We do not replace lawyers, accountants, bankers or management teams. We focus on an earlier question: before execution begins, is this decision itself worth making?")}
            </p>
          </div>
        </section>

        <section className="border-t border-white/10 bg-[#17130f] px-4 py-20">
          <div className="container mx-auto max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d6ad63]">{t("持续顾问关系", "Ongoing Advisory")}</p>
            <h2 className="mt-4 text-3xl font-semibold text-[#f4dfb0] md:text-4xl">{t("对于持续面对高影响决策的领导者，可建立年度或长期顾问关系。", "For leaders facing recurring high-stakes decisions, an ongoing advisory relationship may be appropriate.")}</h2>
            <p className="mt-5 text-base leading-8 text-white/65">{t("合作范围根据决策复杂度、频率与实际需求定制，不在官网公开固定价目表。所有董事长与创始人顾问合作均以私密方式进行。", "Engagements are structured around the complexity, frequency and nature of the decisions involved rather than a public rate card. Chairman & Founder Advisory is handled privately.")}</p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link href={localizeHref("/contact")} className="inline-flex items-center gap-3 bg-[#d6ad63] px-7 py-4 text-sm font-bold text-black">{t("申请私密咨询", "Request a Private Consultation")}<ArrowRight size={17} /></Link>
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-white/45">We advise. You decide.</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
