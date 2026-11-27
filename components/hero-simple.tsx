"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { useLocalizedHref } from "@/hooks/use-localized-href";

export default function HeroSimple() {
  const { t } = useLanguage();
  const localizeHref = useLocalizedHref();
  return (
    <section className="bg-[#202124] text-[#F5F2EC]">
      <div className="mx-auto grid max-w-[1600px] lg:min-h-[720px] lg:grid-cols-[1fr_0.9fr]">
        <div className="flex flex-col justify-center px-6 py-20 sm:px-12 lg:px-20 lg:py-28">
          <p className="text-xs tracking-[0.24em] text-[#C9B58D]">QIMING DUNJIA · SINGAPORE</p>
          <h1 className="mt-8 text-4xl font-medium leading-[1.15] sm:text-5xl xl:text-7xl" style={{fontFamily:"var(--font-cormorant), var(--font-noto-serif), serif"}}>
            <span className="block">{t("观势明局，","Strategic decisions.")}</span>
            <span className="mt-2 block">{t("谋定而行。","Thoughtful spatial planning.")}</span>
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-relaxed text-[#DAD6CE]">{t("奇门遁甲决策咨询与风水空间规划","Qimen Dunjia Decision Advisory & Feng Shui Planning")}</p>
          <p className="mt-4 max-w-lg text-sm leading-7 text-[#DAD6CE]">{t("以东方传统智慧结合现实情境，为个人与企业的重要选择提供新的观察视角。","Eastern wisdom and real-world perspectives for important personal and business decisions.")}</p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link href={localizeHref("/contact")} className="inline-flex items-center gap-4 bg-[#B9A37A] px-6 py-4 text-sm font-semibold text-[#202124] hover:bg-[#DAD6CE] focus-visible:outline focus-visible:outline-2">{t("预约私人咨询","Private consultation")}<ArrowRight size={16}/></Link>
            <a href="#services" className="border-b border-[#B9A37A] py-2 text-sm hover:text-[#C9B58D]">{t("探索专业服务","Explore our services")}</a>
          </div>
        </div>
        <div className="relative min-h-[340px] overflow-hidden sm:min-h-[460px] lg:min-h-full">
          <img src="/master-home-hero.png" alt={t("启明遁甲创始人","Founder of Qiming Dunjia")} className="absolute inset-0 h-full w-full object-cover object-[30%_center]" loading="eager" fetchPriority="high"/>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 to-transparent"/>
        </div>
      </div>
    </section>
  );
}
