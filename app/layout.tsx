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
      "Qimen Strategy Singapore｜Qi Men Dun Jia Strategic Decision Advisory",
    template: "%s | Qimen Strategy Singapore",
  },
  description:
    "Qimen Strategy Singapore provides Qi Men Dun Jia strategic decision advisory, Feng Shui alignment and space energy consulting for business owners, founders, professionals and major life decisions.",
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
    title: "Qimen Strategy Singapore｜Qi Men Dun Jia Strategic Decision Advisory",
    description:
      "Environment shapes state, state shapes decisions, and decisions shape outcomes. Qimen Strategy helps clients review timing, environment, people dynamics and risk before major action.",
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
    title: "Qimen Strategy Singapore | Qi Men Dun Jia Advisory",
    description:
      "Qi Men Dun Jia strategic decision advisory, Feng Shui alignment and space energy consulting in Singapore.",
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
