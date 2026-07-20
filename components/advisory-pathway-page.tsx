import Link from "next/link";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";

export type AdvisoryPathwayPageProps = {
  badge: string;
  title: string;
  titleZh: string;
  lead: string;
  leadZh: string;
  promise: string;
  promiseZh: string;
  scope: Array<{ title: string; titleZh: string; body: string; bodyZh: string }>;
  suitableFor: string[];
  suitableForZh: string[];
  process: Array<{ title: string; titleZh: string; body: string; bodyZh: string }>;
  boundaries: string[];
  boundariesZh: string[];
  whatsappText: string;
  conversionLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function AdvisoryPathwayPage({
  badge,
  title,
  titleZh,
  lead,
  leadZh,
  promise,
  promiseZh,
  scope,
  suitableFor,
  suitableForZh,
  process,
  boundaries,
  boundariesZh,
  whatsappText,
  conversionLabel,
  secondaryHref = "/advisory",
  secondaryLabel = "View All Advisory Pathways",
}: AdvisoryPathwayPageProps) {
  const waLink = `https://wa.me/6589593499?text=${encodeURIComponent(whatsappText)}`;

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main>
          <section className="relative overflow-hidden px-4 pb-20 pt-32 md:pb-28 md:pt-40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(214,173,99,0.24),transparent_34%),linear-gradient(135deg,rgba(244,223,176,0.07),transparent_42%)]" />
            <div className="container relative mx-auto max-w-6xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">{badge}</p>
              <h1 className="mt-5 max-w-5xl text-4xl font-semibold uppercase leading-[0.98] tracking-[0.03em] text-[#f4dfb0] md:text-7xl">
                {title}
              </h1>
              <h2 className="mt-5 max-w-5xl text-3xl font-semibold leading-tight text-[#e2bd6b] md:text-5xl">
                {titleZh}
              </h2>
              <p className="mt-8 max-w-4xl text-lg leading-8 text-white/80 md:text-xl">{lead}</p>
              <p className="mt-4 max-w-4xl text-base leading-8 text-white/68 md:text-lg">{leadZh}</p>
              <div className="mt-8 max-w-4xl border-l-2 border-[#d6ad63] bg-white/[0.035] px-6 py-5">
                <p className="text-base font-semibold leading-8 text-[#f4dfb0] md:text-lg">{promise}</p>
                <p className="mt-2 text-sm leading-7 text-white/62 md:text-base">{promiseZh}</p>
              </div>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-conversion={conversionLabel}
                  className="inline-flex items-center justify-center bg-[#d6ad63] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-black transition hover:bg-[#f4dfb0]"
                >
                  Apply for Private Advisory
                </a>
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center justify-center border border-[#d6ad63]/70 px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#f4dfb0] transition hover:bg-[#d6ad63]/10"
                >
                  {secondaryLabel}
                </Link>
              </div>
            </div>
          </section>

          <section className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-20 md:py-28">
            <div className="container mx-auto max-w-6xl">
              <div className="mb-12 max-w-4xl">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Advisory Scope · 服务范围</p>
                <h2 className="mt-4 text-3xl font-semibold text-[#f4dfb0] md:text-5xl">
                  Structured support before high-cost decisions.
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {scope.map((item, index) => (
                  <article key={item.title} className="border border-[#d6ad63]/20 bg-white/[0.035] p-7">
                    <p className="text-sm font-bold text-[#d6ad63]">{String(index + 1).padStart(2, "0")}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-[#f4dfb0]">{item.title}</h3>
                    <p className="mt-2 text-lg font-semibold text-[#d6ad63]">{item.titleZh}</p>
                    <p className="mt-5 text-sm leading-7 text-white/70">{item.body}</p>
                    <p className="mt-3 text-sm leading-7 text-white/55">{item.bodyZh}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 py-20 md:py-28">
            <div className="container mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Who This Is For · 适合对象</p>
                <h2 className="mt-4 text-3xl font-semibold text-[#f4dfb0] md:text-5xl">
                  For decision-makers who need clarity, not vague reassurance.
                </h2>
                <div className="mt-8 space-y-4">
                  {suitableFor.map((item, index) => (
                    <div key={item} className="border border-[#d6ad63]/20 bg-white/[0.025] p-5">
                      <p className="text-sm leading-7 text-white/75">• {item}</p>
                      <p className="mt-1 text-sm leading-7 text-white/52">• {suitableForZh[index]}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border border-[#d6ad63]/25 bg-[#070707] p-7 md:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">How It Works · 服务流程</p>
                <div className="mt-7 space-y-4">
                  {process.map((item, index) => (
                    <div key={item.title} className="border border-[#d6ad63]/15 bg-black/40 p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#d6ad63]">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-[#f4dfb0]">
                        {item.title}｜{item.titleZh}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-white/66">{item.body}</p>
                      <p className="mt-2 text-sm leading-7 text-white/48">{item.bodyZh}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="border-y border-[#d6ad63]/20 bg-[#070707] px-4 py-20">
            <div className="container mx-auto max-w-5xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Professional Boundaries · 专业边界</p>
              <h2 className="mt-4 text-3xl font-semibold text-[#f4dfb0] md:text-5xl">
                Decision support, not a promise of outcome.
              </h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {boundaries.map((item, index) => (
                  <div key={item} className="border border-[#d6ad63]/15 bg-black/35 p-5">
                    <p className="text-sm leading-7 text-white/72">{item}</p>
                    <p className="mt-2 text-sm leading-7 text-white/48">{boundariesZh[index]}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 py-20 md:py-24">
            <div className="container mx-auto max-w-4xl border border-[#d6ad63]/40 bg-[#d6ad63]/10 p-8 text-center md:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Confidential Advisory Application</p>
              <h2 className="mt-5 text-3xl font-semibold text-[#f4dfb0] md:text-5xl">
                Share the decision you are facing.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/68">
                Briefly describe your role, industry, current decision and preferred timeline. We will first assess the appropriate advisory pathway and scope.
              </p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                data-conversion={conversionLabel}
                className="mt-8 inline-flex items-center justify-center bg-[#d6ad63] px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-black transition hover:bg-[#f4dfb0]"
              >
                WhatsApp +65 8959 3499
              </a>
            </div>
          </section>
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </LanguageProvider>
  );
}
