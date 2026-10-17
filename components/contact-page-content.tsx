"use client";

import { MessageCircle } from "lucide-react";
import Footer from "@/components/footer";
import { useLanguage } from "@/contexts/language-context";

export default function ContactPageContent() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#070604] text-white">
      <main className="flex min-h-[58vh] items-center justify-center px-4 py-16 md:min-h-[64vh] md:py-24">
        <section className="w-full max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">
            {t("联系启明遁甲", "Contact Qimen Strategy")}
          </p>
          <a
            href="https://wa.me/6589909257?text=你好，启明遁甲，我想咨询服务。"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-8 inline-flex w-full max-w-md items-center justify-center gap-3 bg-[#d6ad63] px-6 py-4 text-sm font-bold text-[#070604] transition hover:bg-[#f0d49b] md:text-base"
          >
            <MessageCircle size={20} />
            {t("通过 WhatsApp 立即咨询", "Enquire on WhatsApp")}
          </a>
          <p className="mt-5 text-sm text-white/55">
            {t("WhatsApp：+65 8990 9257", "WhatsApp: +65 8990 9257")}
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
