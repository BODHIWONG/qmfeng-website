"use client";

import { useLanguage } from "@/contexts/language-context";
import { Instagram, Facebook } from "lucide-react";

const LOGO_URL = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/753F2E3C-3CDB-4A85-BD6A-5DB0F9999C73-u3LzeIs3PNKVhlm4etlkSSvG0hJqKT.png";

export default function Footer() {
  const { t } = useLanguage();

 const navLinks = [
  { href: "/#services", zh: "核心服务", en: "Services" },
  { href: "/#clearing", zh: "能量净化", en: "Wellness" },
  { href: "/insights", zh: "洞察博客", en: "Insights" },
  { href: "/#products", zh: "能量载体", en: "Tools" },
  { href: "/#contact", zh: "联系我们", en: "Contact" },
  ];
  return (
    <footer className="bg-[oklch(0.10_0.015_60)] border-t border-[oklch(0.20_0.02_60)]">
      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <img
                src={LOGO_URL}
                alt="QiMing Feng Shui"
                className="h-14 w-14 object-contain"
              />
              <div>
                <p className="text-lg font-bold" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif", color: "oklch(0.95 0.01 75)" }}>
                  {t("奇明風水", "QiMing Feng Shui")}
                </p>
                <p className="text-[0.55rem] tracking-[0.22em] uppercase text-[oklch(0.60_0.08_65)]">
                  Feng Shui · Singapore
                </p>
              </div>
            </div>
            <p className="text-xs text-[oklch(0.50_0.01_75)] leading-relaxed" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}>
              {t(
                "我们不是在卖风水。我们给你的，是对人生方向的确定性。",
                "We don't sell Feng Shui. We provide clarity and direction for your life's success."
              )}
            </p>
            <div className="flex gap-3 mt-5">
              <a href="https://www.instagram.com/qimingfengshui?igsh=MWlqODFyNDFzcHhuMQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 border border-[oklch(0.25_0.02_60)] flex items-center justify-center text-[oklch(0.45_0.01_75)] hover:border-[oklch(0.60_0.08_65)] hover:text-[oklch(0.60_0.08_65)] transition-all duration-300">
                <Instagram size={13} />
              </a>
              <a href="https://www.facebook.com/share/1NVEn7nJDu/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 border border-[oklch(0.25_0.02_60)] flex items-center justify-center text-[oklch(0.45_0.01_75)] hover:border-[oklch(0.60_0.08_65)] hover:text-[oklch(0.60_0.08_65)] transition-all duration-300">
                <Facebook size={13} />
              </a>
              <a href="https://www.tiktok.com/@qmfengshui?_r=1&_t=ZS-95YDlWw9C1F" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 border border-[oklch(0.25_0.02_60)] flex items-center justify-center text-[oklch(0.45_0.01_75)] hover:border-[oklch(0.60_0.08_65)] hover:text-[oklch(0.60_0.08_65)] transition-all duration-300 text-[0.6rem] font-bold"
                style={{ fontFamily: "var(--font-lato), sans-serif" }}>
                TK
              </a>
            </div>
          </div>

          <div>
            <p className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-[oklch(0.60_0.08_65)] mb-4" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
              {t("快速导航", "Quick Links")}
            </p>
            <div className="space-y-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-xs text-[oklch(0.50_0.01_75)] hover:text-[oklch(0.60_0.08_65)] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}
                >
                  {t(link.zh, link.en)}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-[oklch(0.60_0.08_65)] mb-4" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
              {t("联系方式", "Contact")}
            </p>
            <div className="space-y-3 text-xs text-[oklch(0.50_0.01_75)]" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}>
              <a
                href="https://www.google.com/maps/place/Blk+210+New+Upper+Changi+Road,+%2301-729,+Singapore+460210"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[oklch(0.60_0.08_65)] transition-colors duration-300"
              >
                Blk 210 New Upper Changi Road #01-729<br />Singapore 460210
              </a>
              <p>{t("营业时间：每日 10:00 — 20:00", "Hours: Daily 10:00 — 20:00")}</p>
              <a
                href="https://wa.me/message/55HSHDNBMWPLA1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[oklch(0.60_0.08_65)] hover:text-[oklch(0.75_0.06_65)] transition-colors duration-300 font-semibold"
              >
                WhatsApp {t("预约", "Booking")} →
              </a>
            </div>
          </div>
        </div>

        <div className="gold-line mb-8" />
        <div className="text-center mb-8 py-6">
          <p className="text-sm italic leading-relaxed text-[oklch(0.65_0.02_70)]" style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}>
            {t(
              '"Where ancient wisdom meets modern lifestyle."',
              '"Where ancient wisdom meets modern lifestyle."'
            )}
          </p>
        </div>

        <div className="gold-line mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-[0.65rem] text-[oklch(0.35_0.01_75)]" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
          <p>© {new Date().getFullYear()} {t("奇明風水 · 版权所有", "QiMing Feng Shui · All Rights Reserved")}</p>
          <p>
            {t(
              "本网站所有内容仅供参考，不构成任何专业建议。最终决策权在您。",
              "All content on this website is for reference only and does not constitute professional advice. Final decision-making authority rests with you."
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
