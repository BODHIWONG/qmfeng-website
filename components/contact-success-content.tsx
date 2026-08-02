"use client";

import { CheckCircle2, Home, MessageCircle } from "lucide-react";
import Link from "next/link";
import ContactSuccessTracker from "@/components/contact-success-tracker";
import FloatingActions from "@/components/floating-actions";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useLanguage } from "@/contexts/language-context";
import { useLocalizedHref } from "@/hooks/use-localized-href";

export default function ContactSuccessContent() {
  const { t } = useLanguage();
  const localizeHref = useLocalizedHref();

  return (
    <div className="min-h-screen bg-[#070604] text-white">
      <ContactSuccessTracker />
      <Navbar />
      <main className="flex min-h-[78vh] items-center px-4 pb-20 pt-32 md:pt-40">
        <section className="container mx-auto max-w-3xl border border-[#d6ad63]/30 bg-[#0d0b09] p-8 text-center shadow-2xl md:p-14">
          <CheckCircle2 className="mx-auto text-emerald-400" size={58} strokeWidth={1.5} />
          <p className="mt-7 text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">
            {t("咨询申请已收到", "Enquiry Received")}
          </p>
          <h1
            className="mt-4 text-4xl font-semibold text-[#f4dfb0] md:text-6xl"
            style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
          >
            {t("谢谢！", "Thank You!")}
          </h1>
          <div className="mx-auto mt-7 max-w-xl space-y-3 text-base leading-8 text-white/68 md:text-lg">
            <p>{t("感谢你联系启明遁甲。", "Thank you for contacting Qimen Strategy.")}</p>
            <p>{t("我们已经收到你的咨询。", "We have received your enquiry.")}</p>
            <p>{t("我们的团队会在一个工作日内联系你。", "Our team will contact you within one business day.")}</p>
            <p>{t("如果事情紧急，请直接通过WhatsApp联系我们。", "If your enquiry is urgent, please contact us directly via WhatsApp.")}</p>
          </div>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/6589593499?text=Hello%20Qimen%20Strategy%2C%20I%20have%20submitted%20the%20website%20enquiry%20form%20and%20my%20matter%20is%20urgent.%20My%20enquiry%20is%3A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#d6ad63] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black hover:bg-[#f4dfb0]"
            >
              <MessageCircle size={18} />
              {t("紧急事项WhatsApp联系", "Urgent WhatsApp Contact")}
            </a>
            <Link
              href={localizeHref("/")}
              className="inline-flex items-center justify-center gap-3 border border-[#d6ad63]/60 px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#f4dfb0] hover:bg-[#d6ad63]/10"
            >
              <Home size={18} />
              {t("返回首页", "Return Home")}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
