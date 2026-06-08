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
      "Singapore Qi Men Dun Jia Strategic Decision Advisory｜启明遁甲 Qimen Strategy",
    template: "%s | Qimen Strategy Singapore",
  },
  description:
    "启明遁甲 Qimen Strategy is a Singapore-based Qi Men Dun Jia strategic decision advisory brand for business owners, founders, executives, investors and individuals, covering business strategy, investment timing, partnership assessment, Feng Shui alignment and major decision advisory.",
  keywords: [
    "Singapore Qi Men Dun Jia",
    "Qi Men Dun Jia Singapore",
    "Qimen Dunjia Singapore",
    "Qimen Strategy Singapore",
    "新加坡奇门遁甲",
    "奇门遁甲新加坡",
    "启明遁甲",
    "Singapore Qimen Strategy",
    "Enterprise Strategic Decision Advisory Singapore",
    "Business Decision Consultant Singapore",
    "Investment Timing Analysis Singapore",
    "Partnership Assessment Singapore",
    "Founder Strategic Advisory Singapore",
    "Business Feng Shui Singapore",
    "Office Feng Shui Singapore",
    "Residential Feng Shui Singapore",
    "Feng Shui Alignment Singapore",
    "Huang Qiming Singapore",
    "企业战略决策顾问",
    "企业战略顾问",
    "商业决策",
    "投资判断",
    "人事合作关系判断",
    "企业主战略陪跑",
    "住宅风水调理",
    "办公室风水调理"
  ],
  authors: [{ name: "Huang Qiming 黄启明" }],
  alternates: {
    canonical: "https://www.qmfeng.com",
  },
  openGraph: {
    title: "Singapore Qi Men Dun Jia Strategic Decision Advisory｜启明遁甲 Qimen Strategy",
    description:
      "Qimen Strategy Singapore applies Qi Men Dun Jia, strategic decision analysis and Feng Shui alignment to support business owners, founders, executives and individuals before major decisions.",
    url: "https://www.qmfeng.com",
    siteName: "Qimen Strategy Singapore",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Qimen Strategy Singapore Qi Men Dun Jia Strategic Decision Advisory by Huang Qiming",
      },
    ],
    locale: "zh_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Singapore Qi Men Dun Jia Strategic Decision Advisory | Qimen Strategy",
    description:
      "Qimen Strategy helps business owners, founders and individuals see timing, direction, people dynamics and Feng Shui alignment before important decisions.",
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
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
