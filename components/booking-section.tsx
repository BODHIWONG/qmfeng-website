"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { Calendar, Clock, MapPin, MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/6589418791?text=Hello%20Master%20Huang%2C%20I%27d%20like%20to%20book%20a%20consultation.";

const timeSlots = [
  { time: "10:00 AM", available: true },
  { time: "11:30 AM", available: true },
  { time: "2:00 PM", available: false },
  { time: "3:30 PM", available: true },
  { time: "5:00 PM", available: true },
  { time: "7:00 PM", available: false },
];

export default function BookingSection() {
  const { t } = useLanguage();

  return (
    <section id="booking" className="py-16 md:py-24 bg-[oklch(0.95_0.012_75)]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Booking Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-xs tracking-[0.25em] uppercase mb-3"
              style={{
                fontFamily: "var(--font-lato), sans-serif",
                color: "oklch(0.60 0.08 65)",
              }}
            >
              {t("预约咨询", "Book a Consultation")}
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{
                fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
                color: "oklch(0.15 0.02 60)",
              }}
            >
              {t("选择您方便的时间", "Choose Your Preferred Time")}
            </h2>
            <p
              className="text-base mb-8"
              style={{
                fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
                color: "oklch(0.45 0.02 60)",
              }}
            >
              {t(
                "可选择到店面对面咨询或远程视频咨询。预约后，大师会在24小时内通过WhatsApp确认时间。",
                "Choose between in-person consultation at our Bedok studio or remote video session. Master Huang will confirm your booking via WhatsApp within 24 hours."
              )}
            </p>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 border border-[oklch(0.88_0.018_70)] bg-white">
                <MapPin size={20} className="text-[oklch(0.60_0.08_65)] mt-0.5" />
                <div>
                  <p className="font-semibold text-sm" style={{ fontFamily: "var(--font-lato), sans-serif", color: "oklch(0.20 0.02 60)" }}>
                    {t("Bedok实体工作室", "Bedok Studio")}
                  </p>
                  <p className="text-xs" style={{ fontFamily: "var(--font-lato), sans-serif", color: "oklch(0.50 0.02 60)" }}>
                    Blk 210 New Upper Changi Road #01-729
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 border border-[oklch(0.88_0.018_70)] bg-white">
                <Clock size={20} className="text-[oklch(0.60_0.08_65)] mt-0.5" />
                <div>
                  <p className="font-semibold text-sm" style={{ fontFamily: "var(--font-lato), sans-serif", color: "oklch(0.20 0.02 60)" }}>
                    {t("营业时间", "Operating Hours")}
                  </p>
                  <p className="text-xs" style={{ fontFamily: "var(--font-lato), sans-serif", color: "oklch(0.50 0.02 60)" }}>
                    {t("每日 10:00 — 20:00", "Daily 10:00 AM — 8:00 PM")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Time Slots */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 md:p-8 border border-[oklch(0.88_0.018_70)] bg-white"
          >
            <div className="flex items-center gap-2 mb-6">
              <Calendar size={18} className="text-[oklch(0.60_0.08_65)]" />
              <p
                className="text-sm font-semibold"
                style={{
                  fontFamily: "var(--font-lato), sans-serif",
                  color: "oklch(0.20 0.02 60)",
                }}
              >
                {t("今日可预约时段", "Available Slots Today")}
              </p>
            </div>

            {/* Time Slot Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {timeSlots.map((slot, i) => (
                <a
                  key={i}
                  href={slot.available ? `${WA_LINK}%20for%20${encodeURIComponent(slot.time)}` : undefined}
                  target={slot.available ? "_blank" : undefined}
                  rel={slot.available ? "noopener noreferrer" : undefined}
                  className={`py-3 px-4 text-center text-sm font-semibold transition-all duration-300 ${
                    slot.available
                      ? "border border-[oklch(0.60_0.08_65)] text-[oklch(0.60_0.08_65)] hover:bg-[oklch(0.60_0.08_65)] hover:text-white cursor-pointer"
                      : "border border-[oklch(0.88_0.018_70)] text-[oklch(0.70_0.02_60)] bg-[oklch(0.95_0.01_70)] cursor-not-allowed line-through"
                  }`}
                  style={{ fontFamily: "var(--font-lato), sans-serif" }}
                >
                  {slot.time}
                </a>
              ))}
            </div>

            <p
              className="text-xs text-center mb-6"
              style={{
                fontFamily: "var(--font-lato), sans-serif",
                color: "oklch(0.55 0.02 60)",
              }}
            >
              {t("点击时段直接WhatsApp预约", "Click a slot to book via WhatsApp")}
            </p>

            {/* Direct WhatsApp */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:opacity-90"
              style={{
                fontFamily: "var(--font-lato), sans-serif",
                background: "oklch(0.72 0.10 70)",
                color: "oklch(0.08 0.02 60)",
              }}
            >
              <MessageCircle size={18} />
              {t("或直接WhatsApp咨询", "Or Chat Directly on WhatsApp")}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
