import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Lato, Noto_Sans_SC, Noto_Serif_SC } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import SiteStructuredData from "@/components/site-structured-data";
import WhatsAppConversionTracker from "@/components/whatsapp-conversion-tracker";
import "./globals.css";

const openAiAdsPixelInit = [
  '(function(w,d,s,u){if(w.oaiq)return;var q=function(){q.q.push(arguments)};q.q=[];w.oaiq=q;var j=d.createElement(s);j.async=1;j.src=u;var f=d.getElementsByTagName(s)[0];f.parentNode.insertBefore(j,f)})(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");',
  'oaiq("init",{pixelId:"Etg829rh4oDyxewp7qa3gn"});',
].join("\n");

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
    default: "Qimen Strategy Singapore | Qimen Decisions, Feng Shui & Business Advisory",
    template: "%s",
  },
  description:
    "Singapore-based Qimen Dunjia decision analysis for individuals and businesses, personal and commercial Feng Shui planning, and long-term business advisory for owners and leadership teams.",
  keywords: [
    "Qimen Dunjia decision analysis Singapore",
    "Personal Feng Shui Singapore",
    "Business Feng Shui Singapore",
    "Long-term business advisory Singapore",
    "Strategic decision advisory Singapore",
    "Business strategic advisory Singapore",
    "Chairman advisor Singapore",
    "Founder advisory Singapore",
    "Family business succession Singapore",
    "Decision consultation Singapore",
    "Qi Men Dun Jia decision consultation Singapore",
    "Qimen Strategy Singapore",
    "企业战略顾问新加坡",
    "董事长顾问",
    "创始人顾问",
    "家族企业传承",
    "重大决策咨询",
    "奇门遁甲决策咨询",
    "住宅风水布局",
    "企业风水布局",
    "企业长期陪跑",
    "启明遁甲",
  ],
  authors: [{ name: "Huang Qiming" }],
  alternates: {
    canonical: "https://www.qmfeng.com/en",
    languages: {
      "en-SG": "https://www.qmfeng.com/en",
      "zh-SG": "https://www.qmfeng.com/zh",
      "x-default": "https://www.qmfeng.com/en",
    },
  },
  openGraph: {
    title: "Qimen Strategy Singapore | Qimen Decisions, Feng Shui & Business Advisory",
    description:
      "Qimen Dunjia decision analysis, personal and commercial Feng Shui planning, and long-term business advisory in Singapore.",
    url: "https://www.qmfeng.com/en",
    siteName: "Qimen Strategy｜启明遁甲",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Qimen Strategy Singapore — Qimen Decisions, Feng Shui and Business Advisory",
      },
    ],
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qimen Strategy Singapore | Qimen Decisions, Feng Shui & Business Advisory",
    description:
      "Qimen Dunjia decision analysis, personal and business Feng Shui, and long-term business advisory in Singapore and online.",
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
        <Script id="openai-ads-pixel" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: openAiAdsPixelInit }} />\n        <Script async src={googleAdsLoader} strategy="afterInteractive" />
        <Script id="google-ads-init" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: googleAdsInit }} />
        <SiteStructuredData />
        <WhatsAppConversionTracker />
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
