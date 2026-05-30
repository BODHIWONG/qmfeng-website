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
      "QIMEN STRATEGY｜Enterprise Strategic Decision Advisory Singapore｜启明遁甲",
    template: "%s | Qimen Strategy Singapore",
  },
  description:
    "QIMEN STRATEGY｜启明遁甲 provides Enterprise Strategic Decision Advisory for business owners, founders and key decision-makers in Singapore, covering annual strategic forecasting, business and personal Feng Shui alignment, people and partnership assessment, and major decision advisory.",
  keywords: [
    "Qimen Strategy Singapore",
    "Enterprise Strategic Decision Advisory Singapore",
    "Enterprise Decision Advisory Singapore",
    "Founder Strategic Advisory Singapore",
    "Annual Strategic Forecast",
    "Business Feng Shui Singapore",
    "Feng Shui Alignment Singapore",
    "People and Partnership Assessment",
    "Qi Men Dun Jia Business Strategy",
    "Strategic Decision Consultant Singapore",
    "Master Huang Qiming",
    "Huang Qiming Singapore",
    "启明遁甲",
    "企业战略决策顾问",
    "企业战略顾问",
    "年度战略预判",
    "企业风水布局",
    "人事合作关系判断",
    "企业主战略陪跑",
    "黄启明大师",
    "奇门遁甲"
  ],
  authors: [{ name: "Master Huang Qiming 黄启明大师" }],
  alternates: {
    canonical: "https://www.qmfeng.com",
  },
  openGraph: {
    title: "QIMEN STRATEGY｜Enterprise Strategic Decision Advisory Singapore｜启明遁甲",
    description:
      "Enterprise Strategic Decision Advisory for business owners, founders and key decision-makers: annual strategy, Feng Shui alignment, people assessment and founder advisory.",
    url: "https://www.qmfeng.com",
    siteName: "Qimen Strategy Singapore",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "QIMEN STRATEGY Enterprise Strategic Decision Advisory Singapore by Master Huang Qiming",
      },
    ],
    locale: "zh_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QIMEN STRATEGY | Enterprise Strategic Decision Advisory Singapore",
    description:
      "QIMEN STRATEGY helps business owners and founders see timing, direction, people and environment before important decisions.",
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
