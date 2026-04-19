"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { MapPin, Clock, ArrowRight } from "lucide-react";

const WA_INSIGHT = "https://wa.me/message/55HSHDNBMWPLA1";
const WA_EXCLUSIVE = "https://wa.me/message/55HSHDNBMWPLA1";
const WA_QR_CODE = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21901776249073_.pic_hd-jGn7S6Y6By7U2hSddw2bgXpKvUqd7R.jpg";

const STUDIO_LAT = 1.3236;
const STUDIO_LNG = 103.9273;

export default function ContactSection() {
  const { t } = useLanguage();

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" as const },
    }),
  };

  return (
    <section id="contact" className="py-24 md:py-32" style={{ background: "oklch(0.10 0.02 60)" }}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ background: "oklch(0.60 0.08 65)" }} />
            <span className="text-[0.6rem] tracking-[0.25em] uppercase font-semibold" style={{ fontFamily: "var(--font-lato), sans-serif", color: "oklch(0.60 0.08 65)" }}>
              {t("实体门店 · 新加坡", "Physical Studio · Singapore")}
            </span>
          </div>
          <h2
            className="font-bold leading-tight mb-4"
            style={{
              fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              color: "oklch(0.95 0.01 75)",
            }}
          >
            {t("到访我们的工作室", "Visit Our Studio")}
          </h2>
          <p className="text-sm max-w-lg leading-relaxed" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif", color: "oklch(0.60 0.03 65)" }}>
            {t(
              "有实体，有信任，有转化。亲临门店，感受能量的真实流动。",
              "Physical presence builds trust. Visit our studio and experience the real flow of energy in person."
            )}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Info + CTAs */}
          <div className="space-y-10">
            {/* Address Block */}
            <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 mt-0.5" style={{ border: "1px solid oklch(0.60 0.08 65)" }}>
                  <MapPin size={16} style={{ color: "oklch(0.60 0.08 65)" }} />
                </div>
                <div>
                  <p className="text-base font-semibold mb-1" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif", color: "oklch(0.90 0.01 75)" }}>
                    Blk 210 New Upper Changi Road
                  </p>
                  <p className="text-sm" style={{ fontFamily: "var(--font-lato), sans-serif", color: "oklch(0.60 0.03 65)" }}>
                    #01-729 Singapore 460210
                  </p>
                  <p className="text-xs mt-1" style={{ fontFamily: "var(--font-lato), sans-serif", color: "oklch(0.50 0.02 65)" }}>
                    {t("（Bedok MRT 步行约 8 分钟）", "(~8 min walk from Bedok MRT)")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 mt-0.5" style={{ border: "1px solid oklch(0.60 0.08 65)" }}>
                  <Clock size={16} style={{ color: "oklch(0.60 0.08 65)" }} />
                </div>
                <div>
                  <p className="text-base font-semibold mb-1" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif", color: "oklch(0.90 0.01 75)" }}>
                    {t("每日 10:00 — 20:00", "Daily 10:00 — 20:00")}
                  </p>
                  <p className="text-xs" style={{ fontFamily: "var(--font-lato), sans-serif", color: "oklch(0.50 0.02 65)" }}>
                    {t("线上咨询时间更灵活，请提前预约", "Online consultation hours more flexible — appointment required")}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Authentic Practice Module */}
            <motion.div custom={1.5} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="p-6 border border-[oklch(0.25_0.02_60)] bg-[oklch(0.12_0.02_60)]">
              <p className="text-[0.6rem] tracking-[0.2em] uppercase mb-3 font-semibold" style={{ fontFamily: "var(--font-lato), sans-serif", color: "oklch(0.60 0.08 65)" }}>
                {t("信心保证", "Authentic Presence")}
              </p>
              <h4 className="text-lg font-bold mb-2" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.90 0.01 75)" }}>
                {t("实体经营，真实可信", "Physical Studio — Real Presence, Real Trust")}
              </h4>
              <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif", color: "oklch(0.60 0.03 65)" }}>
                {t(
                  "不同于线上咨询，我们在新加坡Bedok拥有实体工作室。亲临其中，您可以感受到真实的能量流动，看到铜师傅艺术品的精妙工艺，与大师进行深度的面对面沟通。这是我们与众不同的承诺。",
                  "Unlike online-only services, we maintain a physical studio in Bedok, Singapore. Visit in person to experience real energy flow, see Tongshifu's exquisite craftsmanship, and engage in meaningful face-to-face consultation with Master Qiming."
                )}
              </p>
            </motion.div>
            <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <p className="text-[0.6rem] tracking-[0.2em] uppercase mb-4 font-semibold" style={{ fontFamily: "var(--font-lato), sans-serif", color: "oklch(0.60 0.08 65)" }}>
                {t("信任体系", "Trusted Presence")}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { zh: "16+ 年实战经验", en: "16+ Years Experience" },
                  { zh: "传统玄学传承", en: "Traditional Metaphysics Lineage" },
                  { zh: "真实案例见证", en: "Real Client Case Studies" },
                  { zh: "新加坡实体门店", en: "Bedok Physical Studio" },
                ].map((badge, i) => (
                  <div key={i} className="px-4 py-3 text-xs font-medium" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif", border: "1px solid oklch(0.25 0.02 60)", color: "oklch(0.75 0.02 65)" }}>
                    {t(badge.zh, badge.en)}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons + QR Code */}
            <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                {/* Buttons */}
                <div className="flex-1 space-y-3 w-full sm:w-auto">
                  <a
                    href={WA_INSIGHT}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-6 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:opacity-90"
                    style={{ fontFamily: "var(--font-lato), sans-serif", background: "oklch(0.60 0.08 65)", color: "oklch(0.10 0.02 60)", letterSpacing: "0.12em" }}
                  >
                    <span>{t("深度洞察", "Deep Insight")}</span>
                    <ArrowRight size={14} />
                  </a>
                  <a
                    href={WA_EXCLUSIVE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-6 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:bg-[oklch(0.60_0.08_65)] hover:text-[oklch(0.10_0.02_60)]"
                    style={{ fontFamily: "var(--font-lato), sans-serif", border: "1.5px solid oklch(0.60 0.08 65)", color: "oklch(0.75 0.04 65)", letterSpacing: "0.10em" }}
                  >
                    <span>{t("专属咨询", "Exclusive Consultation")}</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
                {/* QR Code */}
                <div className="flex-shrink-0 text-center">
                  <div className="inline-block p-2.5 bg-white">
                    <img src={WA_QR_CODE} alt="WhatsApp QR Code" className="w-24 h-24 object-contain" />
                  </div>
                  <p className="text-[0.55rem] tracking-[0.15em] uppercase mt-2 font-medium" style={{ fontFamily: "var(--font-lato), sans-serif", color: "oklch(0.50 0.03 65)" }}>
                    {t("扫码咨询", "Scan to Chat")}
                  </p>
                </div>
              </div>
            </motion.div>

            
          </div>

          {/* Right: Map */}
          <motion.div custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="relative">
            <div className="overflow-hidden" style={{ height: "420px", border: "1px solid oklch(0.25 0.02 60)" }}>
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7!2d${STUDIO_LNG}!3d${STUDIO_LAT}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTknMjUuMCJOIDEwM8KwNTUnMzguMyJF!5e0!3m2!1sen!2ssg!4v1600000000000!5m2!1sen!2ssg`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Qiming Feng Shui Location"
              />
            </div>

            {/* Studio address overlay */}
            <div className="absolute bottom-0 left-0 right-0 px-5 py-4" style={{ background: "oklch(0.10 0.02 60 / 0.95)" }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ fontFamily: "var(--font-lato), sans-serif", color: "oklch(0.60 0.08 65)" }}>
                {t("奇明風水工作室", "QiMing Feng Shui Studio")}
              </p>
              <p className="text-xs" style={{ fontFamily: "var(--font-lato), sans-serif", color: "oklch(0.65 0.02 65)" }}>
                Blk 210 New Upper Changi Road #01-729 · Singapore 460210
              </p>
            </div>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-12 pt-8"
          style={{ borderTop: "1px solid oklch(0.20 0.02 60)" }}
        >
          <p className="text-xs leading-relaxed italic text-center max-w-2xl mx-auto" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif", color: "oklch(0.45 0.02 60)" }}>
            {t(
              "启明大师坚持「互利共赢」原则：以真才实学服务社会，拒绝恐吓式营销与过度承诺。咨询结果仅供参考，最终决策权在您。",
              "Master Qiming upholds the principle of mutual benefit: serving society with genuine expertise, refusing fear-based marketing and over-promising. Consultation results are for reference only; final decision-making authority rests with you."
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
