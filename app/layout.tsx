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
    default: "奇明風水｜新加坡奇门遁甲风水师｜旺财布局 · 空间能量净化",
    template: "%s | QiMing Feng Shui",
  },
  description:
    "奇明風水由黄启明大师主理，结合16+年奇门遁甲、风水布局、八字命理与空间能量净化经验，为新加坡客户提供事业财运、情感疗愈、战略决策与住宅办公风水咨询。",
  keywords: [
    "QiMing Feng Shui",
    "Master Huang Qiming",
    "Singapore Feng Shui",
    "Feng Shui consultation Singapore",
    "Qi Men Dun Jia Singapore",
    "space energy clearing",
    "wealth Feng Shui",
    "relationship healing",
    "strategic decision consultation",
    "奇明風水",
    "黄启明大师",
    "新加坡风水",
    "奇门遁甲",
    "空间能量净化",
    "财运风水",
    "情感疗愈",
  ],
  authors: [{ name: "Master Huang Qiming 黄启明大师" }],
  alternates: {
    canonical: "https://www.qmfeng.com",
  },
  openGraph: {
    title: "奇明風水 | QiMing Feng Shui",
    description:
      "Singapore-based Feng Shui, Qi Men Dun Jia, emotional healing, and space energy clearing by Master Huang Qiming.",
    url: "https://www.qmfeng.com",
    siteName: "QiMing Feng Shui",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "QiMing Feng Shui",
      },
    ],
    locale: "zh_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QiMing Feng Shui | Master Huang Qiming",
    description:
      "Singapore-based Feng Shui, Qi Men Dun Jia, emotional healing, and space energy clearing.",
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
    <html lang="zh-CN" className="bg-background">
      <body
        className={`${notoSerifSC.variable} ${notoSansSC.variable} ${lato.variable} ${cormorant.variable} font-sans antialiased`}
      >
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
