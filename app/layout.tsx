import type { Metadata } from "next";
import Script from "next/script";
import {
  Noto_Serif_SC,
  Noto_Sans_SC,
  Lato,
  Cormorant_Garamond,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import SiteStructuredData from "@/components/site-structured-data";
import WhatsAppConversionTracker from "@/components/whatsapp-conversion-tracker";
import "./globals.css";

const googleAdsId = "AW" + "-" + "17926881970";
const googleAdsLoader = `https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`;
const googleAdsInit = [
  "window.dataLayer = window.dataLayer || [];",
  "window['g' + 'tag'] = function(){window.dataLayer.push(arguments);};",
  "window['g' + 'tag']('js', new Date());",
  `window['g' + 'tag']('config', '${googleAdsId}');`,
].join("\n");

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
    default: "Qimen Strategy Singapore｜战略决策顾问与每周奇门课程",
    template: "%s | Qimen Strategy Singapore",
  },
  description:
    "启明遁甲决策智库 Qimen Strategy 立足新加坡，为创业老板、高管与个人提供事业陪跑、财富与投资决策辅助、事业转型、情感及重大决策支持，并每周开设奇门遁甲基础课程。",
  keywords: [
    "Qimen Strategy Singapore",
    "strategic decision advisory Singapore",
    "founder business advisory Singapore",
    "investment decision support Singapore",
    "executive career transition Singapore",
    "relationship decision advisory Singapore",
    "Qi Men Dun Jia course Singapore",
    "weekly Qi Men Dun Jia course",
    "创业老板事业陪跑",
    "投资决策辅助",
    "高管事业转型",
    "重大决策咨询",
    "奇门遁甲课程新加坡",
    "启明遁甲决策智库",
  ],
  authors: [{ name: "Huang Qiming 黄启明" }],
  alternates: { canonical: "https://www.qmfeng.com" },
  openGraph: {
    title: "Qimen Strategy Singapore｜Strategic Advisory & Weekly Qi Men Courses",
    description:
      "Strategic decision advisory for founders, executives and major life decisions, plus weekly Qi Men Dun Jia foundation courses in Singapore.",
    url: "https://www.qmfeng.com",
    siteName: "Qimen Strategy｜启明遁甲决策智库",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Qimen Strategy Singapore strategic decision advisory and weekly Qi Men Dun Jia courses",
      },
    ],
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qimen Strategy Singapore | Advisory & Weekly Courses",
    description:
      "Founder advisory, investment decision support, executive transition, relationship clarity and weekly Qi Men Dun Jia courses in Singapore.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-SG" className="bg-background">
      <body className={`${notoSerifSC.variable} ${notoSansSC.variable} ${lato.variable} ${cormorant.variable} font-sans antialiased`}>
        <Script async src={googleAdsLoader} strategy="afterInteractive" />
        <Script id="google-ads-init" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: googleAdsInit }} />
        <SiteStructuredData />
        <WhatsAppConversionTracker />
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
