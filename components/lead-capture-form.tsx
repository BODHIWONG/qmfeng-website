"use client";

import { motion } from "framer-motion";
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
              {t("私密沟通", "Private Conversation")}
            </p>
            <h2
              className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
            >
              {t(
                "先说明你正在面对的决定，再判断最适合的顾问方式。",
                "Start with the decision. Then determine the right advisory pathway."
              )}
            </h2>
            <p className="max-w-xl text-base leading-8 text-white/72 md:text-lg">
              {t(
                "首次沟通只需要姓名、联系方式、咨询方向和简要情况。我们会先了解决策背景、涉及人员与时间节点，再判断适合单次决策咨询、企业专项顾问，或长期顾问关系。",
                "The first conversation only requires your contact details and a brief description of the situation. We first understand the decision context, people involved and timing, then determine whether a focused decision consultation, enterprise engagement or ongoing advisory relationship is appropriate."
              )}
            </p>
            <div className="mt-7 space-y-3 border-l-2 border-[#d6ad63] pl-5 text-sm leading-7 text-white/62">
              <p>{t("企业、董事长与家族企业需求均按实际范围私密评估。", "Enterprise, Chairman and Family Business engagements are scoped privately.")}</p>
              <p>{t("个人决策咨询采用 S$398 / S$698 / S$998 三档。", "Decision Consultation is available at S$398 / S$698 / S$998.")}</p>
              <p>{t("如事项紧急，可直接通过 WhatsApp 联系。", "For urgent matters, you may contact us directly on WhatsApp.")}</p>
            </div>
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
