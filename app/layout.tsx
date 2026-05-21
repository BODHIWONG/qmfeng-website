import type { Metadata } from "next";
import Script from "next/script";
import {
  Noto_Serif_SC,
  Noto_Sans_SC,
  Lato,
  Cormorant_Garamond,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
      "Qimen Strategy Singapore｜启明遁甲｜战略智慧决策方法",
    template: "%s | Qimen Strategy Singapore",
  },
  description:
    "启明遁甲 Qimen Strategy 由黄启明大师主理，是一套以奇门遁甲为根基的战略智慧决策方法。帮助企业主、创始人、高管与个人在重要行动前看清时机、方向、人事关系与局势风险，做出更清醒的战略判断。",
  keywords: [
    "Qimen Strategy Singapore",
    "Qi Men Strategy Singapore",
    "Strategic Wisdom Decision Method",
    "Qimen Decision Consultation",
    "Qi Men Dun Jia Singapore",
    "Executive Decision Advisory Singapore",
    "business decision consultant Singapore",
    "business timing consultation Singapore",
    "Master Huang Qiming",
    "Huang Qiming Singapore",
    "启明遁甲",
    "黄启明大师",
    "奇门决策",
    "战略决策",
    "战略智慧决策方法",
    "企业主战略顾问",
    "奇门遁甲",
    "新加坡奇门遁甲"
  ],
  authors: [{ name: "Master Huang Qiming 黄启明大师" }],
  alternates: {
    canonical: "https://www.qmfeng.com",
  },
  openGraph: {
    title: "Qimen Strategy Singapore | 启明遁甲战略智慧决策方法",
    description:
      "Qimen Strategy helps business owners and decision makers see timing, direction, people and risk before important decisions.",
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
    title: "Qimen Strategy Singapore | Strategic Wisdom Decision Method",
    description:
      "Strategic wisdom decision advisory for timing, direction, people and risk.",
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
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
