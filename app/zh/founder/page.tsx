import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";
import FounderProfileContent from "@/components/founder-profile-content";

export const metadata: Metadata = {
  title: "黄启明｜启明遁甲创始人",
  description:
    "黄启明是启明遁甲Qimen Strategy创始人，拥有16年以上奇门遁甲实战经验及18年企业运营与管理经验。",
  alternates: {
    canonical: "https://www.qmfeng.com/zh/founder",
    languages: {
      "en-SG": "https://www.qmfeng.com/en/founder",
      "zh-SG": "https://www.qmfeng.com/zh/founder",
    },
  },
};

export default function ChineseFounderPage() {
  return (
    <LanguageProvider initialLang="zh">
      <div className="min-h-screen bg-[#050403]">
        <Navbar />
        <FounderProfileContent />
        <Footer />
        <FloatingActions />
      </div>
    </LanguageProvider>
  );
}
