"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { useLocalizedHref } from "@/hooks/use-localized-href";

const services = [
  { number:"01", label:"DECISION", image:"/Strategic.png", titleZh:"奇门遁甲决策咨询", titleEn:"Qimen Dunjia Decision Advisory", bodyZh:"审视重要选择的时机、方向、关系与现实约束。", bodyEn:"A considered perspective on timing, direction, relationships and real-world constraints.", href:"/decision" },
  { number:"02", label:"SPACE", image:"/Space.png", titleZh:"风水空间规划", titleEn:"Feng Shui & Spatial Planning", bodyZh:"从建筑环境、空间动线与实际使用需求出发，探索布局优化方向。", bodyEn:"Explore spatial alignment through architecture, movement and practical needs.", href:"/feng-shui-planning" },
];

export default function ServiceCards(){
  const {t}=useLanguage();
  const localizeHref=useLocalizedHref();
  return (
    <section id="services" className="bg-[#F5F2EC] text-[#202124]">
      <header className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <p className="text-xs tracking-[0.24em] text-[#756344]">OUR EXPERTISE / 01—02</p>
        <h2 className="mt-5 max-w-4xl text-4xl leading-tight md:text-6xl" style={{fontFamily:"var(--font-cormorant), var(--font-noto-serif), serif"}}>{t("两大专业领域，一个战略视角。","Two disciplines. One thoughtful approach.")}</h2>
      </header>
      <div className="grid gap-px bg-[#F5F2EC] md:grid-cols-2">
        {services.map(s=>(
          <Link key={s.number} href={localizeHref(s.href)} className="group relative isolate flex min-h-[480px] flex-col justify-end overflow-hidden bg-[#202124] p-8 text-[#F5F2EC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] md:min-h-[620px] md:p-12">
            <img src={s.image} alt="" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"/>
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/95 via-black/55 to-black/15"/>
            <p className="text-xs tracking-[0.24em] text-[#D9C7A4]">{s.number} / {s.label}</p>
            <h3 className="mt-4 max-w-lg text-3xl leading-tight md:text-5xl" style={{fontFamily:"var(--font-cormorant), var(--font-noto-serif), serif"}}>{t(s.titleZh,s.titleEn)}</h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-[#F5F2EC]">{t(s.bodyZh,s.bodyEn)}</p>
            <span className="mt-7 inline-flex items-center gap-3 text-sm">{t("了解更多","Explore service")}<ArrowRight size={16}/></span>
          </Link>
        ))}
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div><p className="text-xs tracking-[0.2em] text-[#756344]">ONGOING ADVISORY</p><h3 className="mt-2 text-xl">{t("企业长期顾问服务","Long-term business advisory")}</h3></div>
        <Link href={localizeHref("/enterprise-strategic-advisory")} className="inline-flex items-center gap-3 self-start border-b border-[#B9A37A] py-2 text-sm">{t("探索长期合作","Explore ongoing support")}<ArrowRight size={16}/></Link>
      </div>
    </section>
  );
}
