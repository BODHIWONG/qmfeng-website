"use client";

import { Clock3, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import ConsultationForm from "@/components/consultation-form";
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
              {t("提交你的咨询情况", "Submit Your Consultation Enquiry")}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/68 md:text-lg">
              {t(
                "请填写最基本的联系资料和当前情况。我们会先了解你的需求，再说明适合的咨询方式。首次提交不需要填写出生资料。",
                "Share only the essential contact information and a brief description of your situation. We will review the enquiry and explain the suitable consultation pathway. Birth details are not required at this stage."
              )}
            </p>

            <div className="mt-9 space-y-4">
              <div className="flex items-start gap-4 border-b border-white/10 pb-4">
                <Clock3 className="mt-1 shrink-0 text-[#d6ad63]" size={20} />
                <div>
                  <p className="font-semibold text-[#f4dfb0]">{t("回复时间", "Response Time")}</p>
                  <p className="mt-1 text-sm leading-6 text-white/55">
                    {t("一般会在一个工作日内联系。", "We normally respond within one business day.")}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 border-b border-white/10 pb-4">
                <MapPin className="mt-1 shrink-0 text-[#d6ad63]" size={20} />
                <div>
                  <p className="font-semibold text-[#f4dfb0]">{t("咨询方式", "Consultation Mode")}</p>
                  <p className="mt-1 text-sm leading-6 text-white/55">
                    {t("可安排新加坡Bedok面谈或线上咨询。", "Consultations are available in Bedok, Singapore or online.")}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 border-b border-white/10 pb-4">
                <ShieldCheck className="mt-1 shrink-0 text-[#d6ad63]" size={20} />
                <div>
                  <p className="font-semibold text-[#f4dfb0]">{t("资料保护", "Data Protection")}</p>
                  <p className="mt-1 text-sm leading-6 text-white/55">
                    {t("资料仅用于处理本次咨询，不会要求你在首次表格提供过多敏感信息。", "Your information is used to process this enquiry. Excessive sensitive information is not requested in the first form.")}
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/6589593499?text=Hello%20Qimen%20Strategy%2C%20I%20have%20an%20urgent%20enquiry.%20My%20situation%20is%3A"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 border border-[#d6ad63]/60 px-6 py-3.5 text-sm font-bold text-[#f4dfb0] hover:bg-[#d6ad63]/10"
            >
              <MessageCircle size={18} />
              {t("紧急事项：WhatsApp联系", "Urgent Enquiry: Contact on WhatsApp")}
            </a>
          </section>

          <ConsultationForm />
        </div>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
