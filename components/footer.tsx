"use client";

import { useLanguage } from "@/contexts/language-context";
import { Instagram, Facebook } from "lucide-react";
import Link from "next/link";

const LOGO_URL =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/753F2E3C-3CDB-4A85-BD6A-5DB0F9999C73-u3LzeIs3PNKVhlm4etlkSSvG0hJqKT.png";

const serviceLinks = [
  { href: "/wealth", zh: "事业不顺 · 财运不稳", en: "Wealth & Career" },
  { href: "/healing", zh: "感情不顺 · 情感疗愈", en: "Healing & Relationships" },
  { href: "/decision", zh: "战略决策 · 关键判断", en: "Strategy & Decisions" },
  { href: "/space-clearing", zh: "空间能量净化", en: "Space Clearing" },
];

const siteLinks = [
  { href: "/", zh: "首页", en: "Home" },
  { href: "/insights", zh: "洞察", en: "Insights" },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-[oklch(0.20_0.02_60)] bg-[oklch(0.10_0.015_60)]">
      <div className="container py-12 md:py-16">
        <div className="mb-12 grid gap-10 md:grid-cols-4">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <img
                src={LOGO_URL}
                alt="QiMing Feng Shui"
                className="h-14 w-14 object-contain"
              />
              <div>
                <p
                  className="text-lg font-bold"
                  style={{
                    fontFamily:
                      "var(--font-cormorant), var(--font-noto-serif), serif",
                    color: "oklch(0.95 0.01 75)",
                  }}
                >
                  {t("奇明風水", "QiMing Feng Shui")}
                </p>
                <p className="text-[0.55rem] uppercase tracking-[0.22em] text-[oklch(0.60_0.08_65)]">
                  Feng Shui · Singapore
                </p>
              </div>
            </div>

            <p
              className="text-xs leading-relaxed text-[oklch(0.50_0.01_75)]"
              style={{
                fontFamily:
                  "var(--font-lato), var(--font-noto-sans), sans-serif",
              }}
            >
              {t(
                "我们不是在卖风水。我们提供的是更清晰的判断、更稳的布局，以及更适合当下阶段的方向。",
                "We do not simply sell Feng Shui. We offer clearer judgment, steadier alignment, and more suitable direction for your current stage."
              )}
            </p>

            <div className="mt-5 flex gap-3">
              <a
                href="https://www.instagram.com/qimingfengshui?igsh=MWlqODFyNDFzcHhuMQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center border border-[oklch(0.25_0.02_60)] text-[oklch(0.45_0.01_75)] transition-all duration-300 hover:border-[oklch(0.60_0.08_65)] hover:text-[oklch(0.60_0.08_65)]"
              >
                <Instagram size={13} />
              </a>
              <a
                href="https://www.facebook.com/share/1NVEn7nJDu/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center border border-[oklch(0.25_0.02_60)] text-[oklch(0.45_0.01_75)] transition-all duration-300 hover:border-[oklch(0.60_0.08_65)] hover:text-[oklch(0.60_0.08_65)]"
              >
                <Facebook size={13} />
              </a>
              <a
                href="https://www.tiktok.com/@qmfengshui?_r=1&_t=ZS-95YDlWw9C1F"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center border border-[oklch(0.25_0.02_60)] text-[0.6rem] font-bold text-[oklch(0.45_0.01_75)] transition-all duration-300 hover:border-[oklch(0.60_0.08_65)] hover:text-[oklch(0.60_0.08_65)]"
                style={{ fontFamily: "var(--font-lato), sans-serif" }}
              >
                TK
              </a>
            </div>
          </div>

          <div>
            <p
              className="mb-4 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[oklch(0.60_0.08_65)]"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              {t("网站导航", "Site Navigation")}
            </p>

            <div className="space-y-2.5">
              {siteLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-xs text-[oklch(0.50_0.01_75)] transition-colors duration-300 hover:text-[oklch(0.60_0.08_65)]"
                  style={{
                    fontFamily:
                      "var(--font-lato), var(--font-noto-sans), sans-serif",
                  }}
                >
                  {t(link.zh, link.en)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p
              className="mb-4 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[oklch(0.60_0.08_65)]"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              {t("核心服务", "Core Services")}
            </p>

            <div className="space-y-2.5">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-xs text-[oklch(0.50_0.01_75)] transition-colors duration-300 hover:text-[oklch(0.60_0.08_65)]"
                  style={{
                    fontFamily:
                      "var(--font-lato), var(--font-noto-sans), sans-serif",
                  }}
                >
                  {t(link.zh, link.en)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p
              className="mb-4 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[oklch(0.60_0.08_65)]"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              {t("联系方式", "Contact")}
            </p>

            <div
              className="space-y-3 text-xs text-[oklch(0.50_0.01_75)]"
              style={{
                fontFamily:
                  "var(--font-lato), var(--font-noto-sans), sans-serif",
              }}
            >
              <a
                href="https://www.google.com/maps/place/Blk+210+New+Upper+Changi+Road,+%2301-729,+Singapore+460210"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-[oklch(0.60_0.08_65)]"
              >
                Blk 210 New Upper Changi Road #01-729
                <br />
                Singapore 460210
              </a>

              <p>{t("营业时间：每日 10:00 — 20:00", "Hours: Daily 10:00 — 20:00")}</p>

              <a
                href="https://wa.me/6589418791?text=Hello%20Master%20Qiming%2C%20I%20would%20like%20to%20enquire."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-semibold text-[oklch(0.60_0.08_65)] transition-colors duration-300 hover:text-[oklch(0.75_0.06_65)]"
              >
                WhatsApp {t("咨询", "Consultation")} →
              </a>
            </div>
          </div>
        </div>

        <div className="gold-line mb-8" />

        <div className="mb-8 py-6 text-center">
          <p
            className="text-sm italic leading-relaxed text-[oklch(0.65_0.02_70)]"
            style={{
              fontFamily:
                "var(--font-lato), var(--font-noto-sans), sans-serif",
            }}
          >
            {t(
              '"先看清问题，再决定如何布局。"',
              '"See the real problem first, then decide how to re-align."'
            )}
          </p>
        </div>

        <div className="gold-line mb-6" />

        <div
          className="flex flex-col items-center justify-between gap-3 text-[0.65rem] text-[oklch(0.35_0.01_75)] md:flex-row"
          style={{ fontFamily: "var(--font-lato), sans-serif" }}
        >
          <p>© {new Date().getFullYear()} {t("奇明風水 · 版权所有", "QiMing Feng Shui · All Rights Reserved")}</p>
          <p>
            {t(
              "本网站内容仅供参考，不构成任何专业建议。最终判断与决定由您自己作出。",
              "Content on this website is for reference only and does not constitute professional advice. Final judgment and decisions remain your own."
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
