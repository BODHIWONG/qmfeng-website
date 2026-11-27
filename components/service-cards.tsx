"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { useLocalizedHref } from "@/hooks/use-localized-href";

import styles from "./service-cards.module.css";

const services = [
  {
    title: ["奇门遁甲决策咨询", "Qimen Dunjia Decision Advisory"],
    description: ["为重要决定，看清可选的方向。", "For decisions that matter."],
    action: ["了解决策咨询", "Explore decision advisory"],
    image: "/services/decision-light.jpg",
    href: "/personal-advisory",
  },
  {
    title: ["风水与空间规划", "Feng Shui & Spatial Planning"],
    description: ["空间影响我们如何生活、工作与相处。", "Space influences how we live, work and interact."],
    action: ["了解空间规划", "Explore spatial planning"],
    image: "/services/spatial-light.jpg",
    href: "/feng-shui-planning",
  },
] as const;

export default function ServiceCards() {
  const { t } = useLanguage();
  const localizeHref = useLocalizedHref();

  return (
    <section id="services" aria-labelledby="services-heading" className={styles.section}>
      <div className={styles.heading}>
        <h2 id="services-heading">{t("核心服务", "Our services")}</h2>
        <span aria-hidden="true" />
      </div>
      <div className={styles.pair}>
        {services.map((service) => (
          <Link key={service.href} href={localizeHref(service.href)} className={styles.card}>
            <Image src={service.image} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className={styles.photo} />
            <div className={styles.caption}>
              <h3>{t(service.title[0], service.title[1])}</h3>
              <p>{t(service.description[0], service.description[1])}</p>
              <span className={styles.action}>{t(service.action[0], service.action[1])}<ArrowRight aria-hidden="true" size={18} /></span>
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.footer}>
        <Link href={localizeHref("/enterprise-strategic-advisory")}>
          {t("企业长期顾问服务", "Long-term business advisory")} <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </div>
    </section>
  );
}
