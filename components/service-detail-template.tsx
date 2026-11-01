"use client";

import { useLanguage } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const WA_LINK = "https://wa.me/6589418791";

export type ServiceStep = {
  titleZh: string;
  titleEn: string;
  descZh: string;
  descEn: string;
};

export type ServiceFaq = {
  qZh: string;
  qEn: string;
  aZh: string;
  aEn: string;
};

export type ServiceCase = {
  titleZh: string;
  titleEn: string;
  bodyZh: string;
  bodyEn: string;
};

export type ServicePageContent = {
  badgeZh: string;
  badgeEn: string;
  pageTitleZh: string;
  pageTitleEn: string;
  heroTitleZh: string;
  heroTitleEn: string;
  heroSubtitleZh: string;
  heroSubtitleEn: string;
  trustPointsZh: string[];
  trustPointsEn: string[];
  priceZh: string;
  priceEn: string;
  symptomsTitleZh: string;
  symptomsTitleEn: string;
  symptomsZh: string[];
  symptomsEn: string[];
  suitableTitleZh: string;
  suitableTitleEn: string;
  suitableZh: string[];
  suitableEn: string[];
  approachTitleZh: string;
  approachTitleEn: string;
  approachIntroZh: string;
  approachIntroEn: string;
  steps: ServiceStep[];
  casesTitleZh: string;
  casesTitleEn: string;
  cases: ServiceCase[];
  faqTitleZh: string;
  faqTitleEn: string;
  faqs: ServiceFaq[];
  ctaTitleZh: string;
  ctaTitleEn: string;
  ctaBodyZh: string;
  ctaBodyEn: string;
  waTextZh: string;
  waTextEn: string;
};

type Props = {
  content: ServicePageContent;
};

export default function ServiceDetailTemplate({ content }: Props) {
  const { lang, t } = useLanguage();

  const waHref = `${WA_LINK}?text=${encodeURIComponent(
    t(content.waTextZh, content.waTextEn)
  )}`;

  return (
    <div className="min-h-screen bg-[oklch(0.97_0.012_75)]">
      <Navbar />

      <main>
        <section className="border-b border-[oklch(0.88_0.018_70)] pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              <p
                className="mb-4 text-xs uppercase tracking-[0.25em]"
                style={{
                  fontFamily: "var(--font-lato), sans-serif",
                  color: "oklch(0.60 0.08 65)",
                }}
              >
                {t(content.badgeZh, content.badgeEn)}
              </p>

              <h1
                className="mb-6 text-4xl font-bold leading-tight md:text-6xl"
                style={{
                  fontFamily:
                    "var(--font-cormorant), var(--font-noto-serif), serif",
                  color: "oklch(0.15 0.02 60)",
                }}
              >
                {t(content.heroTitleZh, content.heroTitleEn)}
              </h1>

              <p
                className="mx-auto mb-8 max-w-3xl text-base leading-8 md:text-lg"
                style={{
                  fontFamily:
                    "var(--font-lato), var(--font-noto-sans), sans-serif",
                  color: "oklch(0.42 0.02 60)",
                }}
              >
                {t(content.heroSubtitleZh, content.heroSubtitleEn)}
              </p>

              <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
                {(lang === "zh"
                  ? content.trustPointsZh
                  : content.trustPointsEn
                ).map((item, index) => (
                  <span
                    key={index}
                    className="border border-[oklch(0.88_0.018_70)] bg-white px-4 py-2 text-xs uppercase tracking-[0.12em]"
                    style={{
                      fontFamily: "var(--font-lato), sans-serif",
                      color: "oklch(0.35 0.02 60)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] transition-all duration-300 hover:opacity-90"
                  style={{
                    fontFamily: "var(--font-lato), sans-serif",
                    background: "oklch(0.60 0.08 65)",
                    color: "oklch(0.98 0.005 75)",
                  }}
                >
                  {t("WhatsApp 立即咨询", "WhatsApp Consultation")}
                  <ArrowRight size={16} />
                </a>

                <div
                  className="text-sm font-semibold"
                  style={{
                    fontFamily: "var(--font-lato), sans-serif",
                    color: "oklch(0.35 0.02 60)",
                  }}
                >
                  {t(content.priceZh, content.priceEn)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <h2
                className="mb-8 text-3xl font-bold md:text-4xl"
                style={{
                  fontFamily:
                    "var(--font-cormorant), var(--font-noto-serif), serif",
                  color: "oklch(0.15 0.02 60)",
                }}
              >
                {t(content.symptomsTitleZh, content.symptomsTitleEn)}
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                {(lang === "zh" ? content.symptomsZh : content.symptomsEn).map(
                  (item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 border border-[oklch(0.88_0.018_70)] bg-white p-5"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-[oklch(0.60_0.08_65)]"
                      />
                      <p
                        className="text-sm leading-7 md:text-[15px]"
                        style={{
                          fontFamily:
                            "var(--font-lato), var(--font-noto-sans), sans-serif",
                          color: "oklch(0.42 0.02 60)",
                        }}
                      >
                        {item}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <h2
                className="mb-8 text-3xl font-bold md:text-4xl"
                style={{
                  fontFamily:
                    "var(--font-cormorant), var(--font-noto-serif), serif",
                  color: "oklch(0.15 0.02 60)",
                }}
              >
                {t(content.suitableTitleZh, content.suitableTitleEn)}
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                {(lang === "zh" ? content.suitableZh : content.suitableEn).map(
                  (item, index) => (
                    <div
                      key={index}
                      className="border border-[oklch(0.88_0.018_70)] p-5"
                    >
                      <p
                        className="text-sm leading-7 md:text-[15px]"
                        style={{
                          fontFamily:
                            "var(--font-lato), var(--font-noto-sans), sans-serif",
                          color: "oklch(0.42 0.02 60)",
                        }}
                      >
                        {item}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-5xl">
              <h2
                className="mb-4 text-3xl font-bold md:text-4xl"
                style={{
                  fontFamily:
                    "var(--font-cormorant), var(--font-noto-serif), serif",
                  color: "oklch(0.15 0.02 60)",
                }}
              >
                {t(content.approachTitleZh, content.approachTitleEn)}
              </h2>

              <p
                className="mb-10 max-w-3xl text-sm leading-8 md:text-base"
                style={{
                  fontFamily:
                    "var(--font-lato), var(--font-noto-sans), sans-serif",
                  color: "oklch(0.42 0.02 60)",
                }}
              >
                {t(content.approachIntroZh, content.approachIntroEn)}
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                {content.steps.map((step, index) => (
                  <div
                    key={index}
                    className="border border-[oklch(0.88_0.018_70)] bg-white p-6"
                  >
                    <div
                      className="mb-3 text-xs uppercase tracking-[0.14em]"
                      style={{
                        fontFamily: "var(--font-lato), sans-serif",
                        color: "oklch(0.60 0.08 65)",
                      }}
                    >
                      {`0${index + 1}`}
                    </div>

                    <h3
                      className="mb-3 text-2xl font-bold"
                      style={{
                        fontFamily:
                          "var(--font-cormorant), var(--font-noto-serif), serif",
                        color: "oklch(0.15 0.02 60)",
                      }}
                    >
                      {t(step.titleZh, step.titleEn)}
                    </h3>

                    <p
                      className="text-sm leading-7 md:text-[15px]"
                      style={{
                        fontFamily:
                          "var(--font-lato), var(--font-noto-sans), sans-serif",
                        color: "oklch(0.42 0.02 60)",
                      }}
                    >
                      {t(step.descZh, step.descEn)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-5xl">
              <h2
                className="mb-8 text-3xl font-bold md:text-4xl"
                style={{
                  fontFamily:
                    "var(--font-cormorant), var(--font-noto-serif), serif",
                  color: "oklch(0.15 0.02 60)",
                }}
              >
                {t(content.casesTitleZh, content.casesTitleEn)}
              </h2>

              <div className="grid gap-6 md:grid-cols-3">
                {content.cases.map((item, index) => (
                  <div
                    key={index}
                    className="border border-[oklch(0.88_0.018_70)] p-6"
                  >
                    <h3
                      className="mb-3 text-2xl font-bold"
                      style={{
                        fontFamily:
                          "var(--font-cormorant), var(--font-noto-serif), serif",
                        color: "oklch(0.15 0.02 60)",
                      }}
                    >
                      {t(item.titleZh, item.titleEn)}
                    </h3>

                    <p
                      className="text-sm leading-7 md:text-[15px]"
                      style={{
                        fontFamily:
                          "var(--font-lato), var(--font-noto-sans), sans-serif",
                        color: "oklch(0.42 0.02 60)",
                      }}
                    >
                      {t(item.bodyZh, item.bodyEn)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <h2
                className="mb-8 text-3xl font-bold md:text-4xl"
                style={{
                  fontFamily:
                    "var(--font-cormorant), var(--font-noto-serif), serif",
                  color: "oklch(0.15 0.02 60)",
                }}
              >
                {t(content.faqTitleZh, content.faqTitleEn)}
              </h2>

              <div className="space-y-4">
                {content.faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="border border-[oklch(0.88_0.018_70)] bg-white p-5"
                  >
                    <summary
                      className="cursor-pointer list-none text-base font-semibold"
                      style={{
                        fontFamily:
                          "var(--font-lato), var(--font-noto-sans), sans-serif",
                        color: "oklch(0.20 0.02 60)",
                      }}
                    >
                      {t(faq.qZh, faq.qEn)}
                    </summary>

                    <p
                      className="mt-4 text-sm leading-7 md:text-[15px]"
                      style={{
                        fontFamily:
                          "var(--font-lato), var(--font-noto-sans), sans-serif",
                        color: "oklch(0.42 0.02 60)",
                      }}
                    >
                      {t(faq.aZh, faq.aEn)}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[oklch(0.88_0.018_70)] py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              <h2
                className="mb-5 text-3xl font-bold md:text-5xl"
                style={{
                  fontFamily:
                    "var(--font-cormorant), var(--font-noto-serif), serif",
                  color: "oklch(0.15 0.02 60)",
                }}
              >
                {t(content.ctaTitleZh, content.ctaTitleEn)}
              </h2>

              <p
                className="mx-auto mb-8 max-w-2xl text-sm leading-8 md:text-base"
                style={{
                  fontFamily:
                    "var(--font-lato), var(--font-noto-sans), sans-serif",
                  color: "oklch(0.42 0.02 60)",
                }}
              >
                {t(content.ctaBodyZh, content.ctaBodyEn)}
              </p>

              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] transition-all duration-300 hover:opacity-90"
                style={{
                  fontFamily: "var(--font-lato), sans-serif",
                  background: "oklch(0.60 0.08 65)",
                  color: "oklch(0.98 0.005 75)",
                }}
              >
                {t("WhatsApp 立即咨询", "WhatsApp Consultation")}
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
