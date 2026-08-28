"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useLanguage } from "@/contexts/language-context";
import { useLocalizedHref } from "@/hooks/use-localized-href";

const tiers = [
  {
    nameZh: "核心决策咨询",
    nameEn: "Essential Decision Consultation",
    price: "S$398",
    labelZh: "一个明确的核心决策",
    labelEn: "One Focused Decision",
    bodyZh: "适合一个清晰、边界明确的问题，例如工作机会、合作选择、感情去留、行动时机或单一方向判断。",
    bodyEn: "For one clearly defined decision such as a job offer, partnership choice, relationship direction, timing or a single strategic question.",
  },
  {
    nameZh: "综合决策咨询",
    nameEn: "Comprehensive Decision Consultation",
    price: "S$698",
    labelZh: "多个相互关联的问题",
    labelEn: "Connected Decisions",
    bodyZh: "适合多个问题彼此牵动的情况，例如事业、创业、关系、迁移或家庭选择需要放在同一局势中综合判断。",
    bodyEn: "For interconnected decisions where business, career, relationships, relocation or family choices need to be examined together.",
    featured: true,
  },
  {
    nameZh: "战略决策咨询",
    nameEn: "Strategic Decision Consultation",
    price: "S$998",
    labelZh: "高影响、高复杂度决策",
    labelEn: "High-Stakes Decision",
    bodyZh: "适合企业主、高管、创业者及重大人生转折，涉及多变量、较高影响与更深入的综合决策分析。",
    bodyEn: "For entrepreneurs, senior professionals and major turning points involving multiple variables, higher stakes and deeper strategic analysis.",
  },
];

export default function PersonalAdvisoryContent() {
  const { t } = useLanguage();
  const localizeHref = useLocalizedHref();

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
                <article key={tier.price} className={`flex flex-col border p-8 ${tier.featured ? "border-[#b88943] bg-[#17130f] text-white shadow-2xl" : "border-[#d8c6aa] bg-white"}`}>
                  <p className={`text-xs font-bold uppercase tracking-[0.2em] ${tier.featured ? "text-[#d6ad63]" : "text-[#9c7238]"}`}>{t(tier.labelZh, tier.labelEn)}</p>
                  <h2 className={`mt-4 text-2xl font-bold ${tier.featured ? "text-[#f4dfb0]" : "text-[#241b14]"}`}>{t(tier.nameZh, tier.nameEn)}</h2>
                  <div className={`mt-6 text-4xl font-semibold ${tier.featured ? "text-[#f4dfb0]" : "text-[#7f5a28]"}`}>{tier.price}</div>
                  <p className={`mt-6 text-sm leading-7 ${tier.featured ? "text-white/68" : "text-[#5d4d3c]"}`}>{t(tier.bodyZh, tier.bodyEn)}</p>
                  <div className={`mt-7 border-t pt-6 ${tier.featured ? "border-white/10" : "border-[#eadfce]"}`}>
                    {[t("私密预约", "Private appointment"), t("线上或Bedok面谈", "Online or Bedok"), t("以决策复杂度匹配服务", "Matched to decision complexity")].map((item) => (
                      <p key={item} className="mb-3 flex items-start gap-2 text-sm"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#b88943]" />{item}</p>
                    ))}
                  </div>
                  <Link href={localizeHref("/contact")} className={`mt-auto inline-flex items-center justify-between px-5 py-4 text-sm font-bold ${tier.featured ? "bg-[#d6ad63] text-black" : "border border-[#9c7238] text-[#7f5a28]"}`}>
                    {t("预约咨询", "Book Consultation")}<ArrowRight size={16} />
                  </Link>
                </article>
              ))}
            </div>
            <div className="mt-12 border-l-2 border-[#b88943] bg-white px-6 py-5 text-sm leading-7 text-[#5d4d3c]">
              {t("S$168 八字入门服务已从官网咨询体系中取消。企业、董事长与家族企业需求不采用公开价目表，请申请私密咨询后按项目范围评估。", "The former S$168 entry Bazi service has been removed from the consultation structure. Enterprise, Chairman and Family Business engagements are scoped privately rather than listed on a public rate card.")}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
