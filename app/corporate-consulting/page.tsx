"use client";

import { LanguageProvider, useLanguage } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";

function CorporateConsultingContent() {
  const { t } = useLanguage();

  const services = [
    {
      title: "Office Energy Alignment",
      desc: t(
        "优化办公室与商业空间能量流动，改善团队状态、专注力与空间稳定感。",
        "Optimise office and commercial environments to support focus, stability and team performance."
      ),
    },
    {
      title: "Executive Decision Clarity",
      desc: t(
        "结合奇门战略分析，帮助企业主与管理层更清晰地看待关键决策。",
        "Use Qi Men strategic analysis to support founders and executives in high-level decision making."
      ),
    },
    {
      title: "Retail Flow Analysis",
      desc: t(
        "分析店铺动线、空间压力与客户停留感受，优化商业场域体验。",
        "Study customer flow, spatial pressure and retail environment experience for commercial optimisation."
      ),
    },
    {
      title: "Workspace Optimisation",
      desc: t(
        "针对高密度城市办公环境，改善疲劳感、混乱感与空间消耗。",
        "Improve modern high-density workspaces to reduce mental fatigue and environmental overwhelm."
      ),
    },
  ];

  return (
    <main className="bg-[oklch(0.97_0.012_75)] text-[oklch(0.18_0.02_70)]">
      <section className="border-b border-[oklch(0.84_0.03_75)] px-4 py-24 md:py-32">
        <div className="container mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-[oklch(0.55_0.08_65)]">
            CORPORATE CONSULTING · SINGAPORE
          </p>

          <h1
            className="text-4xl font-semibold leading-tight md:text-6xl"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
          >
            {t(
              "企业空间与战略顾问",
              "Strategic Spatial Consulting"
            )}
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-9 text-[oklch(0.38_0.02_70)]">
            {t(
              "天乙合会文化不仅服务个人，也为新加坡企业、创业者与高压团队提供空间调和、奇门决策与环境优化支持。重点不在传统风水，而在于帮助企业建立更稳定、更清晰、更适合长期发展的工作场域。",
              "Tian Yi Harmony Culture supports Singapore businesses, founders and professional teams through strategic spatial consulting, Qi Men decision clarity and workspace optimisation. The focus is not traditional Feng Shui superstition, but helping organisations build environments that support clarity, stability and sustainable performance."
            )}
          </p>
        </div>
      </section>

      <section className="px-4 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="border border-[oklch(0.82_0.03_75)] bg-white/70 p-8"
              >
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[oklch(0.55_0.08_65)]">
                  {service.title}
                </p>
                <p className="mt-5 text-base leading-8 text-[oklch(0.38_0.02_70)]">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[oklch(0.84_0.03_75)] px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[oklch(0.55_0.08_65)]">
            SEE THE WHOLE GAME
          </p>
          <h2
            className="mt-5 text-3xl font-semibold leading-tight md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
          >
            {t(
              "空间会影响人的状态，而人的状态会影响企业的未来。",
              "Environment influences human state — and human state influences business outcomes."
            )}
          </h2>
        </div>
      </section>
    </main>
  );
}

export default function CorporateConsultingPage() {
  return (
    <LanguageProvider>
      <Navbar />
      <CorporateConsultingContent />
      <Footer />
      <FloatingActions />
    </LanguageProvider>
  );
}
