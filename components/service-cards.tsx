"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { useLocalizedHref } from "@/hooks/use-localized-href";

const services = [
  {
    title: ["奇门遁甲决策咨询", "Qimen Dunjia Decision Advisory"],
    description: ["为重要决定，看清可选的方向。", "For decisions that matter."],
    action: ["了解决策咨询", "Explore decision advisory"],
    image: "/Strategic.png",
    href: "/personal-advisory",
  },
  {
    title: ["风水与空间规划", "Feng Shui & Spatial Planning"],
    description: ["空间影响我们如何生活、工作与相处。", "Space influences how we live, work and interact."],
    action: ["了解空间规划", "Explore spatial planning"],
    image: "/Space.png",
    href: "/feng-shui-planning",
  },
] as const;

export default function ServiceCards() {
  const { t } = useLanguage();
  const localizeHref = useLocalizedHref();

  return (
    <section id="services" aria-labelledby="services-heading" className="scroll-mt-20 bg-[#171c20] text-[#f4f0e8]">
      <h2 id="services-heading" className="sr-only">{t("核心服务", "Core services")}</h2>
      <div className="grid gap-px bg-[#b69a6d]/30 md:grid-cols-2">
        {services.map((service) => (
          <Link
            key={service.href}
            href={localizeHref(service.href)}
            className="group relative isolate flex min-h-[25rem] flex-col justify-end overflow-hidden bg-[#171c20] px-7 py-9 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white md:min-h-[32rem] md:px-10 lg:min-h-[38rem] lg:p-16"
          >
            <Image src={service.image} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="-z-20 object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-[1.03]" />
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/65 to-transparent" />
            <h3 className="max-w-md text-4xl font-semibold leading-tight lg:text-5xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
              {t(service.title[0], service.title[1])}
            </h3>
            <p className="mt-4 min-h-14 max-w-sm text-base leading-7 text-white/90">{t(service.description[0], service.description[1])}</p>
            <span className="mt-6 inline-flex items-center gap-3 self-start border-b border-[#b69a6d] pb-2 text-sm font-semibold">
              {t(service.action[0], service.action[1])} <ArrowRight aria-hidden="true" size={17} />
            </span>
          </Link>
        ))}
      </div>
      <div className="container flex justify-end py-4">
        <Link href={localizeHref("/enterprise-strategic-advisory")} className="inline-flex min-h-11 items-center gap-3 text-sm text-[#f4f0e8] underline-offset-4 hover:underline">
          {t("了解企业长期顾问服务", "Explore long-term business advisory")} <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </div>
    </section>
  );
}
