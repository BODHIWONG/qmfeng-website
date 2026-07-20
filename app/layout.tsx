import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Lato, Noto_Sans_SC, Noto_Serif_SC } from "next/font/google";
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
    default: "Qimen Strategy Singapore｜Weekly Qi Men Courses & Founder Advisory",
    template: "%s | Qimen Strategy Singapore",
  },
  description:
    "启明遁甲决策智库立足新加坡，以每周奇门遁甲课程为第一入口，并为创业老板提供事业陪跑、财富与投资决策辅助、高管转型及个人重大决策支持。",
  keywords: [
    "Qi Men Dun Jia course Singapore",
    "Weekly Qi Men course Singapore",
    "Qimen Strategy Academy Singapore",
    "奇门遁甲课程新加坡",
    "新加坡奇门课程",
    "Qimen Strategy Singapore",
    "Founder business advisory Singapore",
    "Entrepreneur strategic advisory Singapore",
    "Investment decision support Singapore",
    "Executive career transition Singapore",
    "Major decision consultation Singapore",
    "创业老板事业陪跑",
    "企业主战略顾问",
    "创业者财运周期",
    "投资决策辅助",
    "高管事业转型",
    "个人重大决策",
    "启明遁甲决策智库",
  ],
  authors: [{ name: "Huang Qiming 黄启明" }],
  alternates: { canonical: "https://www.qmfeng.com" },
  openGraph: {
    title: "Qimen Strategy Singapore｜Weekly Qi Men Courses & Founder Advisory",
    description:
      "Structured weekly Qi Men Dun Jia courses in Singapore, with founder business advisory as the advanced pathway for real business and major decisions.",
    url: "https://www.qmfeng.com",
    siteName: "Qimen Strategy｜启明遁甲决策智库",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Qimen Strategy Academy weekly Qi Men Dun Jia courses and founder advisory in Singapore",
      },
    ],
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qimen Strategy Singapore | Weekly Qi Men Courses & Founder Advisory",
    description:
      "Weekly Qi Men Dun Jia courses first, with founder business advisory for clients facing real strategic decisions.",
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
    <html lang="en-SG" className="bg-background">
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
