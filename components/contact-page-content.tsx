"use client";

import { Clock3, MapPin, MessageCircle } from "lucide-react";
import FloatingActions from "@/components/floating-actions";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useLanguage } from "@/contexts/language-context";

export default function ContactPageContent() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#070604] text-white">
      <Navbar />
      <main className="px-4 pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="container mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <section>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">
              {t("联系启明遁甲", "Contact Qimen Strategy")}
            </p>
            <h1
              className="mt-5 text-4xl font-semibold leading-[1.05] text-[#f4dfb0] md:text-6xl"
              style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
            >
              {t("直接通过 WhatsApp 咨询", "Chat with Us on WhatsApp")}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/68 md:text-lg">
              {t(
                "无需填写表格。点击下方按钮，直接通过 WhatsApp 告诉我们你需要哪方面的帮助，我们会进一步了解你的情况并说明合适的咨询方式。",
                "No enquiry form is needed. Use the button to message us directly on WhatsApp. Tell us what you need help with, and we will learn more about your situation and explain the suitable consultation options."
              )}
            </p>

            <div className="mt-9 space-y-4">
              <div className="flex items-start gap-4 border-b border-white/10 pb-4">
                <Clock3 className="mt-1 shrink-0 text-[#d6ad63]" size={20} />
                <div>
                  <p className="font-semibold text-[#f4dfb0]">{t("回复时间", "Response Time")}</p>
                  <p className="mt-1 text-sm leading-6 text-white/55">
                    {t("一般会在一个工作日内回复。", "We normally respond within one business day.")}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 border-b border-white/10 pb-4">
                <MapPin className="mt-1 shrink-0 text-[#d6ad63]" size={20} />
                <div>
                  <p className="font-semibold text-[#f4dfb0]">{t("咨询方式", "Consultation Mode")}</p>
                  <p className="mt-1 text-sm leading-6 text-white/55">
                    {t("可安排新加坡 Bedok 面谈或线上咨询。", "Consultations are available in Bedok, Singapore or online.")}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="border border-[#d6ad63]/30 bg-white/[0.03] p-6 md:p-10">
            <div className="flex h-14 w-14 items-center justify-center border border-[#d6ad63]/40 text-[#d6ad63]">
              <MessageCircle size={28} />
            </div>
            <h2
              className="mt-6 text-2xl font-semibold text-[#f4dfb0] md:text-3xl"
              style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
            >
              {t("开始 WhatsApp 对话", "Start a WhatsApp Conversation")}
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/65 md:text-base">
              {t(
                "你可以先简单说明咨询方向，例如个人决策、个人或企业风水布局，或企业长期陪跑。无需一次准备好所有资料。",
                "You can briefly describe your enquiry, such as personal decision-making, personal or business Feng Shui planning, or long-term business advisory. You do not need to prepare every detail in advance."
              )}
            </p>
            <a
              href="https://wa.me/6589909257?text=你好，启明遁甲，我想咨询服务。"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex w-full items-center justify-center gap-3 bg-[#d6ad63] px-6 py-4 text-sm font-bold text-[#070604] transition hover:bg-[#f0d49b] md:text-base"
            >
              <MessageCircle size={20} />
              {t("通过 WhatsApp 立即咨询", "Enquire on WhatsApp")}
            </a>
            <p className="mt-4 text-center text-sm text-white/45">
              {t("WhatsApp：+65 8990 9257", "WhatsApp: +65 8990 9257")}
            </p>
          </section>
        </div>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
