import type { Metadata } from "next";
import {
  Noto_Serif_SC,
  Noto_Sans_SC,
  Lato,
  Cormorant_Garamond,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-noto-serif",
});

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const OG_IMAGE =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21801776239127_.pic_hd.jpg-EkcBpRqOTKcVaoZhsifm0L0hrfZ9uJ.png";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.qmfeng.com"),
  title: {
    default:
      "Qimen Strategy Singapore｜Strategic Insight for Business｜启明遁甲",
    template: "%s | Qimen Strategy Singapore",
  },
  description:
    "启明遁甲 Qimen Strategy 由黄启明大师主理，专注新加坡高端奇门决策、战略咨询、风水布局与能量疗愈。帮助企业主与个人在关键时刻看清时机、方向、人事关系与环境格局，做出更稳、更清晰的决策。",
  keywords: [
    "Qimen Strategy Singapore",
    "Strategic Insight for Business",
    "Qimen Strategy in Modern Business",
    "Qi Men Strategy Singapore",
    "Qimen Decision Consultation",
    "Qi Men Dun Jia Singapore",
    "business decision consultant Singapore",
    "business timing consultation Singapore",
    "Master Huang Qiming",
    "Huang Qiming Singapore",
    "Qiming Feng Shui",
    "Singapore Feng Shui",
    "启明遁甲",
    "黄启明大师",
    "奇门决策",
    "战略咨询",
    "奇门遁甲",
    "新加坡奇门遁甲",
    "新加坡风水",
    "风水布局",
    "能量疗愈"
  ],
  authors: [{ name: "Master Huang Qiming 黄启明大师" }],
  alternates: {
    canonical: "https://www.qmfeng.com",
  },
  openGraph: {
    title: "Qimen Strategy Singapore | Strategic Insight for Business",
    description:
      "High-end Qimen Strategy consultation in Singapore for business decisions, timing, direction and Feng Shui alignment.",
    url: "https://www.qmfeng.com",
    siteName: "Qimen Strategy Singapore",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Qimen Strategy Singapore by Master Huang Qiming",
      },
    ],
    locale: "zh_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qimen Strategy Singapore | Strategic Insight for Business",
    description:
      "Qimen Strategy helps business owners and individuals see timing, direction, people and environment before making important decisions.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-SG" className="bg-background">
      <body
        className={`${notoSerifSC.variable} ${notoSansSC.variable} ${lato.variable} ${cormorant.variable} font-sans antialiased`}
      >
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
