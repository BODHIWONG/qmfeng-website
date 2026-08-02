"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ConsultationForm from "@/components/consultation-form";
import { useLanguage } from "@/contexts/language-context";

export default function LeadCaptureForm() {
  const { t } = useLanguage();

  return (
    <section id="enquiry" className="relative overflow-hidden bg-[oklch(0.12_0.02_60)] py-20 md:py-28">
      <div
        className="absolute inset-0 opacity-25"
        style={{ background: "radial-gradient(circle at top, oklch(0.72 0.12 70 / 0.16), transparent 48%)" }}
      />
      <div className="container relative">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[oklch(0.72_0.12_70)]">
              {t("咨询申请", "Consultation Enquiry")}
            </p>
            <h2
              className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
            >
              {t(
                "先说明你的真实处境，再匹配适合的咨询入口。",
                "Share the real situation first, then match the appropriate consultation pathway."
              )}
            </h2>
            <p className="max-w-xl text-base leading-8 text-white/72 md:text-lg">
              {t(
                "首次咨询只需要姓名、联系方式、咨询类型和简要说明。出生资料或其他敏感信息，会在确认预约后按实际需要另行收集。",
                "The first enquiry only requires your name, contact details, consultation type and a brief message. Birth details or other sensitive information are requested only after booking confirmation when genuinely required."
              )}
            </p>
            <div className="mt-7 space-y-3 border-l-2 border-[#d6ad63] pl-5 text-sm leading-7 text-white/62">
              <p>{t("提交后，我们会在一个工作日内联系你。", "We will contact you within one business day after submission.")}</p>
              <p>{t("紧急事项可以直接通过WhatsApp联系。", "For urgent enquiries, contact us directly on WhatsApp.")}</p>
              <p>{t("课程正式报名仍使用独立课程报名页面。", "Formal course registration remains on the dedicated course registration page.")}</p>
            </div>
            <Link
              href="/course-registration?course=qimen-foundation&batch=2026-09-19"
              className="mt-7 inline-flex border border-[#d6ad63]/60 px-5 py-3 text-sm font-semibold text-[#f4dfb0] hover:bg-[#d6ad63]/10"
            >
              {t("奇门课程报名 →", "Qi Men Course Registration →")}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ConsultationForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
