"use client";

import { LanguageProvider } from "@/contexts/language-context";
import { useLanguage } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";
import ConsultationForm from "@/components/consultation-form";
import { MapPin, Clock, Mail, MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/6589418791?text=Hello%20Master%20Qiming%2C%20I%20would%20like%20to%20enquire.";

function ContactContent() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[oklch(0.08_0.02_60)] text-white">
      <Navbar />

      <main className="container pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mb-12 max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-8 bg-[oklch(0.60_0.08_65)]" />
            <span
              className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[oklch(0.60_0.08_65)]"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              {t("联系我们", "Contact")}
            </span>
          </div>

          <h1
            className="mb-5 text-4xl font-bold leading-tight md:text-6xl"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
          >
            {t("先留下问题，我们协助判断", "Leave Your Question for Initial Review")}
          </h1>

          <p
            className="text-base leading-relaxed text-[oklch(0.72_0.02_70)] md:text-lg"
            style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}
          >
            {t(
              "如果您正面对事业、财富、感情、睡眠、家宅或空间能量问题，可以先留下简单情况。我们会协助判断更适合奇门遁甲、风水布局、八字命理，还是空间能量净化。",
              "If you are facing career, wealth, relationship, sleep, home energy or space-related concerns, leave a short note. We will review your situation and suggest whether Qi Men Dun Jia, Feng Shui, Bazi or Space Energy Purification may be more suitable."
            )}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.4fr] lg:items-start">
          <aside className="border border-[oklch(0.22_0.025_60)] bg-[oklch(0.12_0.018_60)] p-6 md:p-8">
            <h2
              className="mb-6 text-2xl font-bold text-[oklch(0.95_0.01_75)]"
              style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
            >
              {t("联系奇明風水", "Contact QiMing Feng Shui")}
            </h2>

            <div
              className="space-y-5 text-sm leading-7 text-[oklch(0.68_0.02_70)]"
              style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}
            >
              <a
                href="https://wa.me/6589418791?text=Hello%20Master%20Qiming%2C%20I%20would%20like%20to%20enquire."
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 transition-colors hover:text-[oklch(0.72_0.10_70)]"
              >
                <MessageCircle className="mt-1 shrink-0 text-[oklch(0.60_0.08_65)]" size={18} />
                <span>
                  <strong className="block text-[oklch(0.90_0.02_75)]">WhatsApp</strong>
                  +65 8941 8791
                </span>
              </a>

              <a
                href="mailto:info@qmfeng.com"
                className="flex gap-3 transition-colors hover:text-[oklch(0.72_0.10_70)]"
              >
                <Mail className="mt-1 shrink-0 text-[oklch(0.60_0.08_65)]" size={18} />
                <span>
                  <strong className="block text-[oklch(0.90_0.02_75)]">Email</strong>
                  info@qmfeng.com
                </span>
              </a>

              <a
                href="https://www.google.com/maps/place/Blk+210+New+Upper+Changi+Road,+%2301-729,+Singapore+460210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 transition-colors hover:text-[oklch(0.72_0.10_70)]"
              >
                <MapPin className="mt-1 shrink-0 text-[oklch(0.60_0.08_65)]" size={18} />
                <span>
                  <strong className="block text-[oklch(0.90_0.02_75)]">Address</strong>
                  Blk 210 New Upper Changi Road #01-729<br />Singapore 460210
                </span>
              </a>

              <div className="flex gap-3">
                <Clock className="mt-1 shrink-0 text-[oklch(0.60_0.08_65)]" size={18} />
                <span>
                  <strong className="block text-[oklch(0.90_0.02_75)]">{t("营业时间", "Hours")}</strong>
                  {t("每日 10:00 — 20:00", "Daily 10:00 — 20:00")}
                </span>
              </div>
            </div>

            <div className="mt-8 border-t border-[oklch(0.24_0.025_60)] pt-6">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full justify-center bg-[oklch(0.72_0.12_70)] px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[oklch(0.08_0.02_60)] transition-opacity hover:opacity-90"
                style={{ fontFamily: "var(--font-lato), sans-serif" }}
              >
                {t("WhatsApp 立即咨询", "WhatsApp Consultation")}
              </a>
            </div>
          </aside>

          <ConsultationForm />
        </div>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}

export default function ContactPage() {
  return (
    <LanguageProvider>
      <ContactContent />
    </LanguageProvider>
  );
}
