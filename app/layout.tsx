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
    default: "Qimen Strategy Singapore｜Personal & Business Decision Advisory",
    template: "%s",
  },
  description:
    "Qimen Strategy provides personal advisory, business strategic advisory and practical Qi Men Dun Jia courses in Singapore. Private consultations are available in Bedok or online.",
  keywords: [
    "Qi Men Dun Jia consultation Singapore",
    "Bazi analysis Singapore",
    "Major Decision Consultation Singapore",
    "Business strategic advisory Singapore",
    "Qi Men Dun Jia course Singapore",
    "Relationship consultation Singapore",
    "奇门遁甲咨询新加坡",
    "八字命理分析新加坡",
    "重大决策咨询",
    "企业战略顾问",
    "奇门遁甲课程新加坡",
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
    title: "Qimen Strategy Singapore｜Personal & Business Decision Advisory",
    description:
      "Personal advisory, business strategic advisory and practical Qi Men Dun Jia education in Singapore.",
    url: "https://www.qmfeng.com/en",
    siteName: "Qimen Strategy｜启明遁甲",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Qimen Strategy Singapore: personal advisory, business strategic advisory and Qi Men courses",
      },
    ],
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qimen Strategy Singapore | Personal & Business Decision Advisory",
    description:
      "Personal advisory, business strategic advisory and practical Qi Men education in Singapore.",
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
