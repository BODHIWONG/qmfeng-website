"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, UserRound, ChartNoAxesCombined, Compass } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useLanguage } from "@/contexts/language-context";

const tiers = [
  {
    nameZh: "个人专题咨询", nameEn: "Personal Consultation",
    labelZh: "个人问题与发展方向", labelEn: "Personal Matters & Direction",
    bodyZh: "聚焦个人生活、关系与发展中的具体问题。", bodyEn: "Focused guidance for personal, relationship and development questions.",
    topicsZh: ["感情与关系", "工作与职业发展", "个人发展方向", "学业与人生选择"],
    topicsEn: ["Relationships", "Work & career development", "Personal direction", "Education & life choices"],
    messageZh: "你好，启明遁甲，我想咨询个人专题问题。我的情况是：", messageEn: "Hello Qimen Strategy, I would like to enquire about a personal matter. My situation is:",
  },
  {
    nameZh: "商业专题咨询", nameEn: "Business Consultation",
    labelZh: "经营、合作与项目判断", labelEn: "Business, Partnerships & Projects",
    bodyZh: "聚焦经营决策与商业发展中的关键问题。", bodyEn: "Focused guidance for key business and commercial decisions.",
    topicsZh: ["生意经营方向", "合作伙伴评估", "项目选择与投资", "业务发展与推进"],
    topicsEn: ["Business direction", "Partner assessment", "Project selection & investment", "Business growth & execution"],
    messageZh: "你好，启明遁甲，我想咨询商业专题问题。我的情况是：", messageEn: "Hello Qimen Strategy, I would like to enquire about a business matter. My situation is:",
    featured: true,
  },
  {
    nameZh: "综合决策咨询", nameEn: "Complex Decision Consultation",
    labelZh: "多因素交织的复杂问题", labelEn: "Complex, Interconnected Decisions",
    bodyZh: "适用于多个因素彼此影响、需要统筹分析的复杂决策。", bodyEn: "For complex decisions where multiple factors interact and require an integrated assessment.",
    topicsZh: ["多个方案的比较", "跨领域综合评估", "重大项目与人生转折", "关键选择与风险权衡"],
    topicsEn: ["Comparing multiple options", "Cross-domain assessment", "Major projects & life transitions", "Key choices & risk trade-offs"],
    messageZh: "你好，启明遁甲，我想咨询复杂或综合决策问题。我的情况是：", messageEn: "Hello Qimen Strategy, I would like to enquire about a complex decision. My situation is:",
  },
];

export default function PersonalAdvisoryContent() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#0e0c0a] text-white">
      <Navbar />
      <main>
        <section className="relative overflow-hidden border-b border-[#d6ad63]/20 px-4 pb-16 pt-32 md:pb-20 md:pt-36">
          <div className="container mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">{t("决策咨询", "Decision Consultation")}</p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight text-[#f4dfb0] md:text-6xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
              {t("根据决策复杂度选择深度，而不是按时间计价。", "Choose the depth by decision complexity, not by the clock.")}
            </h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-white/68 md:text-lg">
              {t("从个人发展到商业经营，再到多因素交织的重大选择。奇门提供分析视角，最终决定始终由你作出。", "From personal development to business and complex decisions. Qimen offers an analytical perspective; the final decision remains yours.")}
            </p>
          </div>
        </section>

        <section className="bg-[#f6f0e7] px-4 py-14 text-[#241b14] md:py-20">
          <div className="container mx-auto max-w-6xl">
            <div className="grid gap-6 lg:grid-cols-3">
              {tiers.map((tier, index) => (
                <article key={tier.nameEn} className={`flex flex-col border p-6 md:p-7 ${tier.featured ? "border-[#b88943] bg-[#17130f] text-white shadow-xl" : "border-[#d8c6aa] bg-white"}`}>
                  <div className="mb-5 flex items-center justify-between">
                    <span className={`flex size-12 items-center justify-center rounded-full ${tier.featured ? "border border-[#d6ad63]/50 bg-[#d6ad63]/10 text-[#d6ad63]" : "bg-[#f6f0e7] text-[#8c6127]"}`}>{index === 0 ? <UserRound size={22} /> : index === 1 ? <ChartNoAxesCombined size={22} /> : <Compass size={22} />}</span>
                    <span className={`text-sm tracking-widest ${tier.featured ? "text-[#d6ad63]" : "text-[#a77b35]"}`}>0{index + 1}</span>
                  </div>
                  <p className={`text-xs font-bold uppercase tracking-[0.2em] ${tier.featured ? "text-[#d6ad63]" : "text-[#9c7238]"}`}>{t(tier.labelZh, tier.labelEn)}</p>
                  <h2 className={`mt-4 text-2xl font-bold ${tier.featured ? "text-[#f4dfb0]" : "text-[#241b14]"}`}>{t(tier.nameZh, tier.nameEn)}</h2>
                  
                  <p className={`mt-4 text-sm leading-7 ${tier.featured ? "text-white/70" : "text-[#5d4d3c]"}`}>{t(tier.bodyZh, tier.bodyEn)}</p>
                  <div className={`mt-5 border-t pt-5 ${tier.featured ? "border-white/10" : "border-[#eadfce]"}`}>
                    <p className={`mb-4 text-xs font-semibold tracking-wider ${tier.featured ? "text-[#d6ad63]" : "text-[#8c6127]"}`}>{t("常见咨询主题", "TYPICAL TOPICS")}</p>
                    {(t(tier.topicsZh.join("|"), tier.topicsEn.join("|"))).split("|").map((item) => (
                      <p key={item} className="mb-3 flex items-start gap-2 text-sm"><CheckCircle2 size={16} className={`mt-0.5 shrink-0 ${tier.featured ? "text-[#d6ad63]" : "text-[#b88943]"}`} />{item}</p>
                    ))}
                  </div>
                  <Link
                    href={`https://wa.me/6589909257?text=${encodeURIComponent(t(tier.messageZh, tier.messageEn))}`}
                    data-conversion="personal_decision_consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-auto inline-flex items-center justify-between px-5 py-4 text-sm font-bold ${tier.featured ? "bg-[#d6ad63] text-black" : "border border-[#9c7238] text-[#7f5a28]"}`}
                  >
                    {t("在 WhatsApp 上咨询", "Enquire on WhatsApp")}<ArrowRight size={16} />
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-10 grid gap-5 border-t border-[#d8c6aa] pt-7 md:grid-cols-2">
              <div className="bg-white px-6 py-5 text-sm leading-7 text-[#5d4d3c]">
                <p className="font-semibold text-[#7f5a28]">{t("咨询原则", "Our Approach")}</p>
                <p className="mt-2">{t("先厘清问题与现实背景，再结合实际条件进行分析。奇门提供参考视角，不代替客户作出决定。", "We first clarify the question and real-world context, then assess the situation. Qimen offers a perspective; it does not make the decision for you.")}</p>
              </div>
              <div className="bg-[#17130f] px-6 py-5 text-sm leading-7 text-white/68">
                <p className="font-semibold text-[#d6ad63]">{t("企业与家族企业顾问", "Enterprise & Family Business Advisory")}</p>
                <p className="mt-2">{t("企业、董事长与家族企业项目根据实际决策范围、复杂度与合作深度进行私密评估。", "Enterprise, Chairman and Family Business engagements are scoped privately according to the decision context, complexity and depth of engagement.")}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
