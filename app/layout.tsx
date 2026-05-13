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
    default: "启明遁甲｜Qimen Strategy Singapore｜奇门决策与风水布局",
    template: "%s | Qimen Strategy Singapore",
  },
  description:
    "启明遁甲 Qimen Strategy 由黄启明大师主理，专注新加坡高端奇门决策、事业财富判断、商业合作时机、人生方向与风水布局。不是简单算命，而是看清局势、时机、方向、人与环境，帮助你做出更稳、更清晰的关键决策。",
  keywords: [
    "Qimen Strategy Singapore",
    "Qi Men Strategy Singapore",
    "Qimen Decision Consultation",
    "Qi Men decision consultation",
    "Qi Men Dun Jia Singapore",
    "Master Huang Qiming",
    "Huang Qiming Singapore",
    "Qiming Feng Shui",
    "Singapore Feng Shui",
    "Feng Shui alignment",
    "strategic decision consultation",
    "business timing consultation Singapore",
    "启明遁甲",
    "黄启明大师",
    "奇门决策",
    "奇门战略",
    "奇门遁甲",
    "新加坡奇门遁甲",
    "新加坡风水",
    "风水布局",
    "空间能量净化",
  ],
  authors: [{ name: "Master Huang Qiming 黄启明大师" }],
  alternates: {
    canonical: "https://www.qmfeng.com",
  },
  openGraph: {
    title: "启明遁甲 | Qimen Strategy Singapore",
    description:
      "High-end Qi Men Strategy consultation in Singapore for business, wealth, timing, direction and Feng Shui alignment. Led by Master Huang Qiming.",
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
    title: "Qimen Strategy Singapore | Master Huang Qiming",
    description:
      "Qi Men Strategy helps you see timing, direction, people and environment before making important decisions.",
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
