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
    default: "Qimen Strategy Singapore｜Qi Men Courses, Business & Personal Advisory",
    template: "%s | Qimen Strategy Singapore",
  },
  description:
    "启明遁甲决策智库立足新加坡，提供奇门遁甲实战课程、企业战略陪跑与个人咨询服务，涵盖企业重大决策、感情婚姻、择日、手机号码、居家风水与空间净化。",
  keywords: [
    "Qi Men Dun Jia course Singapore",
    "Practical Qi Men course Singapore",
    "Qimen Strategy Academy Singapore",
    "奇门遁甲课程新加坡",
    "新加坡奇门课程",
    "Qimen Strategy Singapore",
    "Founder business advisory Singapore",
    "Entrepreneur strategic advisory Singapore",
    "Investment decision support Singapore",
    "Executive career transition Singapore",
    "Personal advisory Singapore",
    "Relationship marriage consultation Singapore",
    "Auspicious date selection Singapore",
    "Mobile number selection Singapore",
    "Residential Feng Shui Singapore",
    "Space clearing Singapore",
    "创业老板事业陪跑",
    "企业主战略顾问",
    "个人重大决策",
    "感情婚姻咨询",
    "择日服务",
    "吉祥手机号码",
    "居家风水布局",
    "空间能量净化",
    "启明遁甲决策智库",
  ],
  authors: [{ name: "Huang Qiming 黄启明" }],
  alternates: { canonical: "https://www.qmfeng.com" },
  openGraph: {
    title: "Qimen Strategy Singapore｜Qi Men Courses, Business & Personal Advisory",
    description:
      "Practical Qi Men Dun Jia education, strategic advisory for business owners, and private personal consultation in Singapore.",
    url: "https://www.qmfeng.com",
    siteName: "Qimen Strategy｜启明遁甲决策智库",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Qimen Strategy Singapore: Qi Men courses, business strategic advisory and personal advisory",
      },
    ],
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qimen Strategy Singapore | Qi Men Courses, Business & Personal Advisory",
    description:
      "Three core pathways in Singapore: practical Qi Men education, business strategic advisory and private personal consultation.",
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
