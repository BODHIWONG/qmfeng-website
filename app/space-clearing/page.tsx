import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/language-context";
import SpaceEnergyPurificationPage from "@/components/space-energy-purification-page";

export const metadata: Metadata = {
  title: "空间能量净化与生命场域调和 | QiMing Feng Shui Singapore",
  description:
    "Master Huang Qiming's space energy purification and life field harmonisation in Singapore. Helping clients restore clarity, steadiness, sleep quality, emotional calm and spatial support through Qi Men Dun Jia, Feng Shui, Bazi and energy alignment.",
  alternates: {
    canonical: "https://www.qmfeng.com/space-clearing",
  },
  openGraph: {
    title: "空间能量净化与生命场域调和 | QiMing Feng Shui Singapore",
    description:
      "A core capability of QiMing Feng Shui, led by Master Huang Qiming: space energy purification for heavy spaces, unstable sleep, emotional pressure and life field harmonisation.",
    url: "https://www.qmfeng.com/space-clearing",
    type: "website",
  },
};

export default function SpaceClearingPage() {
  return (
    <LanguageProvider>
      <SpaceEnergyPurificationPage />
    </LanguageProvider>
  );
}
