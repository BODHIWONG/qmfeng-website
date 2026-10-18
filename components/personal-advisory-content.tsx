"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useLanguage } from "@/contexts/language-context";

const tiers = [
  { nameZh: "个人专题咨询", nameEn: "Personal Consultation", labelZh: "个人问题与发展方向", labelEn: "Personal Matters & Direction", bodyZh: "适用于感情与关系、工作与职业发展、个人成长及发展方向等具体问题。", bodyEn: "For focused personal matters such as relationships, work, career development and personal direction.", messageZh: "你好，启明遁甲，我想咨询个人专题问题。我的情况是：", messageEn: "Hello Qimen Strategy, I would like to enquire about a personal matter. My situation is:" },
  { nameZh: "商业专题咨询", nameEn: "Business Consultation", labelZh: "经营、合作与项目判断", labelEn: "Business, Partnerships & Projects", bodyZh: "适用于生意经营、合作伙伴关系、项目选择、业务推进与商业发展等问题。", bodyEn: "For business operations, partnerships, project choices, business execution and commercial development.", messageZh: "你好，启明遁甲，我想咨询商业专题问题。我的情况是：", messageEn: "Hello Qimen Strategy, I would like to enquire about a business matter. My situation is:", featured: true },
  { nameZh: "综合决策咨询", nameEn: "Complex Decision Consultation", labelZh: "多因素交织的复杂问题", labelEn: "Complex, Interconnected Decisions", bodyZh: "适用于涉及多个因素、多个选项或较大影响范围，需要统筹分析的复杂决策。", bodyEn: "For complex decisions involving multiple factors, options or significant impact that require an integrated assessment.", messageZh: "你好，启明遁甲，我想咨询复杂或综合决策问题。我的情况是：", messageEn: "Hello Qimen Strategy, I would like to enquire about a complex decision. My situation is:" },
];

export default function PersonalAdvisoryContent() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#0e0c0a] text-white">
      <Navbar />
      <main>
        <section className="border-b border-[#d6ad63]/20 px-4 pb-20 pt-36 md:pb-28 md:pt-44">
          <div className="container mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">{t("决策咨询", "Decision Consultation")}</p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight text-[#f4dfb0] md:text-6xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
              {t("不是问题越多越贵，而是决策越复杂，需要的视角越完整。", "Choose the Depth by Decision Complexity — Not by the Clock.")}
            </h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-white/68 md:text-lg">
              {t("适用于事业、生意、合作、感情、迁移与重大人生选择。奇门是分析方法之一，最终决定始终由客户自己作出。", "For business, career, partnerships, relationships, relocation and major life decisions. Qimen is one analytical lens; the final decision always remains yours.")}
            </p>
          </div>
        </section>

        <section className="bg-[#f6f0e7] px-4 py-20 text-[#241b14] md:py-28">
          <div className="container mx-auto max-w-6xl">
            <div className="grid gap-6 lg:grid-cols-3">
              {tiers.map((tier) => (
                <article key={tier.nameEn} className={`flex flex-col border p-8 ${tier.featured ? "border-[#b88943] bg-[#17130f] text-white shadow-2xl" : "border-[#d8c6aa] bg-white"}`}>
                  <p className={`text-xs font-bold uppercase tracking-[0.2em] ${tier.featured ? "text-[#d6ad63]" : "text-[#9c7238]"}`}>{t(tier.labelZh, tier.labelEn)}</p>
                  <h2 className={`mt-4 text-2xl font-bold ${tier.featured ? "text-[#f4dfb0]" : "text-[#241b14]"}`}>{t(tier.nameZh, tier.nameEn)}</h2>
                  
                  <p className={`mt-6 text-sm leading-7 ${tier.featured ? "text-white/68" : "text-[#5d4d3c]"}`}>{t(tier.bodyZh, tier.bodyEn)}</p>
                  <div className={`mt-7 border-t pt-6 ${tier.featured ? "border-white/10" : "border-[#eadfce]"}`}>
                    {[t("私密预约", "Private appointment"), t("线上或 Bedok 面谈", "Online or in-person in Bedok"), t("先了解需求，再确认服务范围", "Scope confirmed after understanding your needs")].map((item) => (
                      <p key={item} className="mb-3 flex items-start gap-2 text-sm"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#b88943]" />{item}</p>
                    ))}
                  </div>
                  <Link
                    href={`https://wa.me/6589909257?text=${encodeURIComponent(t(tier.messageZh, tier.messageEn))}`}
                    data-conversion="personal_decision_consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-auto inline-flex items-center justify-between px-5 py-4 text-sm font-bold ${tier.featured ? "bg-[#d6ad63] text-black" : "border border-[#9c7238] text-[#7f5a28]"}`}
                  >
                    {t("WhatsApp 预约咨询", "Enquire on WhatsApp")}<ArrowRight size={16} />
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-12 grid gap-5 border-t border-[#d8c6aa] pt-8 md:grid-cols-2">
              <div className="bg-white px-6 py-5 text-sm leading-7 text-[#5d4d3c]">
                <p className="font-semibold text-[#7f5a28]">{t("咨询方式", "How It Works")}</p>
                <p className="mt-2">{t("先通过 WhatsApp 说明问题背景与目标，再根据实际需求确认适合的服务范围与费用。", "Share your context and objective on WhatsApp first. The appropriate scope and fee will then be confirmed based on your needs.")}</p>
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
