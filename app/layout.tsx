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
    default:
      "Qimen Strategy Singapore｜启明遁甲决策智库",
    template: "%s | Qimen Strategy Singapore",
  },
  description:
    "启明遁甲决策智库（Qimen Strategy）立足新加坡，为企业主、创始人、专业人士与个人重大决策提供奇门遁甲战略决策顾问、风水空间调衡与关系方向梳理。",
  keywords: [
    "Qimen Strategy Singapore",
    "Qi Men Dun Jia Singapore",
    "Singapore Qi Men Dun Jia",
    "Qi Men decision advisory",
    "Strategic Decision Advisory Singapore",
    "Strategic Feng Shui Singapore",
    "Business Feng Shui Singapore",
    "Feng Shui Alignment Singapore",
    "Huang Qiming Singapore",
    "启明遁甲决策智库",
    "启明遁甲",
    "新加坡奇门遁甲",
    "奇门遁甲新加坡",
    "企业战略决策顾问",
    "企业风水布局",
    "重大决策咨询"
  ],
  authors: [{ name: "Huang Qiming 黄启明" }],
  alternates: {
    canonical: "https://www.qmfeng.com",
  },
  openGraph: {
    title: "Qimen Strategy Singapore｜启明遁甲决策智库",
    description:
      "See the whole game before you decide. Qimen Strategy reviews timing, environment, people dynamics and risk before major action.",
    url: "https://www.qmfeng.com",
    siteName: "Qimen Strategy｜启明遁甲决策智库",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Qimen Strategy Singapore and 启明遁甲决策智库 by Huang Qiming",
      },
    ],
    locale: "zh_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qimen Strategy Singapore | Strategic Decision Advisory",
    description:
      "Qi Men Dun Jia strategic decision advisory, Feng Shui alignment and major decision consulting in Singapore.",
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
        <Script async src={googleAdsLoader} strategy="afterInteractive" />
        <Script
          id="google-ads-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: googleAdsInit }}
        />
        <SiteStructuredData />
        <WhatsAppConversionTracker />
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
