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
    default: "奇明風水｜新加坡奇门决策与奇门风水布局｜Qi Men Strategy Singapore",
    template: "%s | QiMing Feng Shui",
  },
  description:
    "奇门决策不是算命，是帮你看清现在为什么卡住，以及下一步该怎么走。奇明風水由黄启明大师主理，结合16+年奇门遁甲、奇门风水布局、空间能量与积极心理学经验，为新加坡客户提供事业财富、合作判断、人生选择与风水布局咨询。",
  keywords: [
    "QiMing Feng Shui",
    "Master Huang Qiming",
    "Qi Men Strategy Singapore",
    "Qi Men decision consultation",
    "Qi Men Dun Jia Singapore",
    "Singapore Feng Shui",
    "Feng Shui consultation Singapore",
    "Qi Men Feng Shui",
    "Feng Shui alignment",
    "space energy clearing",
    "strategic decision consultation",
    "奇明風水",
    "黄启明大师",
    "奇门决策",
    "奇门风水",
    "新加坡奇门遁甲",
    "新加坡风水",
    "奇门遁甲",
    "风水布局",
    "空间能量净化",
  ],
  authors: [{ name: "Master Huang Qiming 黄启明大师" }],
  alternates: {
    canonical: "https://www.qmfeng.com",
  },
  openGraph: {
    title: "奇门决策不是算命 | QiMing Feng Shui Singapore",
    description:
      "Qi Men Strategy helps you see why you are stuck now and what your next move should be. Led by Master Huang Qiming in Singapore.",
    url: "https://www.qmfeng.com",
    siteName: "QiMing Feng Shui",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "QiMing Feng Shui Qi Men Strategy Singapore",
      },
    ],
    locale: "zh_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qi Men Strategy Singapore | Master Huang Qiming",
    description:
      "Qi Men Strategy is not fortune telling. It helps you see why you are stuck and what your next move should be.",
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
