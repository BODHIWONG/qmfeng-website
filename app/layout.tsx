import type { Metadata } from 'next'
import { Noto_Serif_SC, Noto_Sans_SC, Lato, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSerifSC = Noto_Serif_SC({ 
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-noto-serif"
});

const notoSansSC = Noto_Sans_SC({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans"
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant"
});

// Logo图片用于社媒分享
const OG_IMAGE = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21801776239127_.pic_hd.jpg-EkcBpRqOTKcVaoZhsifm0L0hrfZ9uJ.png";

export const metadata: Metadata = {
  title: '奇明風水 | QiMing Feng Shui | Fix Luck, Grow Wealth',
  description: 'Master Huang Qiming (黄启明大师) - Singapore\'s trusted Feng Shui consultant. 16+ years, 5,000+ clients. Fix Luck, Grow Wealth. Financial strategy, emotional wellness, space optimisation. Bedok studio. | 新加坡风水大师黄启明，16年经验，5000+客户见证。',
  generator: 'v0.app',
  keywords: [
    // English - High Intent
    'Feng Shui Master Singapore', 'Fix Luck Grow Wealth', 'QiMing Feng Shui',
    'Bazi Reading Singapore', 'Qimen Dunjia Expert', 'Business Feng Shui Consultant',
    'Home Energy Assessment', 'Bedok Feng Shui', 'Online Feng Shui Consultation',
    // Chinese - Local SEO
    '奇明風水', '新加坡风水大师', '黄启明大师', '勿洛风水咨询',
    '八字算命新加坡', '奇门遁甲', '家居风水评估', '办公室布局',
  ],
  authors: [{ name: 'Master Huang Qiming 黄启明大师' }],
  openGraph: {
    title: 'QiMing Feng Shui | Fix Luck, Grow Wealth',
    description: 'Master Huang Qiming\'s Feng Shui expertise. Financial strategy, emotional wellness, space optimisation. 16+ years, 5,000+ clients. Book your consultation today.',
    url: 'https://qmfeng.com',
    siteName: '奇明風水 QiMing Feng Shui',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'QiMing Feng Shui - Singapore Feng Shui Master',
      },
    ],
    locale: 'zh_SG',
    alternateLocale: 'en_SG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QiMing Feng Shui | Fix Luck, Grow Wealth',
    description: 'Transform your finances, health, and home with Master Huang Qiming\'s Feng Shui consultations. 16+ years, 5,000+ clients. Singapore & Remote.',
    images: [OG_IMAGE],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://qmfeng.com',
    languages: {
      'zh-SG': 'https://qmfeng.com',
      'en-SG': 'https://qmfeng.com',
    },
  },
  other: {
    'geo.region': 'SG',
    'geo.placename': 'Bedok, Singapore',
    'geo.position': '1.3236;103.9273',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className="bg-background">
      <body className={`${notoSerifSC.variable} ${notoSansSC.variable} ${lato.variable} ${cormorant.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
