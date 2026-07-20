"use client";

import { useLanguage } from "@/contexts/language-context";
import { ArrowRight, BookOpen, MessageCircle } from "lucide-react";
import Link from "next/link";

const WA_LINK =
  "https://wa.me/6589593499?text=Hello%20Qimen%20Strategy%2C%20I%20would%20like%20to%20submit%20a%20private%20advisory%20enquiry.";

export default function FinalCTA() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-[oklch(0.06_0.02_60)] py-20 md:py-28">
      <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at center, oklch(0.72 0.12 70 / 0.1) 0%, transparent 70%)" }} />
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-[oklch(0.72_0.12_70)]">
            {t("选择你的下一步", "Choose Your Next Step")}
          </p>
          <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
            {t("需要判断，进入顾问服务；希望学习，选择每周课程", "Need decision support? Choose advisory. Ready to learn? Join a weekly course.")}
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-base leading-8 text-white/76 md:text-lg">
            {t(
              "创业老板、高管与个人重大决策客户，可以先提交咨询背景；希望系统学习奇门遁甲的学员，可以直接查看未来每周六、周日班次。",
              "Founders, executives and individuals may submit the decision they are facing. Learners may view future Saturday–Sunday course batches and register directly."
            )}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <Link href="/advisory" className="inline-flex w-full items-center justify-center gap-3 bg-[oklch(0.72_0.12_70)] px-8 py-5 text-sm font-bold uppercase tracking-wider text-[oklch(0.06_0.02_60)] transition hover:scale-[1.02] sm:w-auto">
              {t("查看顾问服务", "Explore Advisory")}<ArrowRight size={18} />
            </Link>
            <Link href="/qi-men-dun-jia-course-singapore" className="inline-flex w-full items-center justify-center gap-3 border border-[oklch(0.72_0.12_70)] px-8 py-5 text-sm font-bold uppercase tracking-wider text-[oklch(0.72_0.12_70)] transition hover:bg-[oklch(0.72_0.12_70)] hover:text-black sm:w-auto">
              <BookOpen size={19} />{t("查看每周课程", "View Weekly Courses")}
            </Link>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-conversion="final_cta_private_enquiry" className="inline-flex w-full items-center justify-center gap-3 px-6 py-5 text-sm font-semibold text-white/70 transition hover:text-white sm:w-auto">
              <MessageCircle size={19} />WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
