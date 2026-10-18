"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import {
  ChevronUp,
  MessageCircle,
  X,
  Sparkles,
  UserRound,
  Briefcase,
  Building2,
  GraduationCap,
} from "lucide-react";

const WA_LINK = "https://wa.me/6589909257";

const quickLinks = [
  {
    icon: UserRound,
    labelZh: "个人专题咨询",
    labelEn: "Personal Consultation",
    message: "你好，启明遁甲，我想咨询个人专题问题。我的情况是：",
  },
  {
    icon: Sparkles,
    labelZh: "商业专题咨询",
    labelEn: "Business Consultation",
    message: "你好，启明遁甲，我想咨询商业专题问题。我的情况是：",
  },
  {
    icon: Briefcase,
    labelZh: "综合决策咨询",
    labelEn: "Complex Decision Consultation",
    message: "你好，启明遁甲，我想咨询复杂或综合决策问题。我的情况是：",
  },
  {
    icon: Building2,
    labelZh: "个人与企业风水布局",
    labelEn: "Personal & Business Feng Shui",
    message: "你好，启明遁甲，我想咨询个人或企业风水布局。我的情况是：",
  },
  {
    icon: GraduationCap,
    labelZh: "了解奇门课程",
    labelEn: "Qi Men Courses",
    message: "你好，启明遁甲，请介绍奇门课程详情。",
  },
];

export default function FloatingActions() {
  const { t } = useLanguage();
  const [showTop, setShowTop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex h-10 w-10 items-center justify-center border border-[oklch(0.88_0.018_70)] bg-[oklch(0.97_0.012_75)] text-[oklch(0.50_0.02_65)] shadow-md transition-all duration-300 hover:border-[oklch(0.60_0.08_65)] hover:text-[oklch(0.60_0.08_65)]"
          >
            <ChevronUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="w-72 border border-[oklch(0.25_0.02_60)] bg-[oklch(0.10_0.02_60)] p-4 shadow-2xl"
          >
            <p
              className="mb-3 text-xs font-semibold uppercase tracking-widest text-[oklch(0.60_0.08_65)]"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              {t("快速咨询", "Quick Enquiry")}
            </p>
            <p className="mb-3 text-xs text-[oklch(0.72_0.02_70)]">
              {t("WhatsApp：+65 8990 9257", "WhatsApp: +65 8990 9257")}
            </p>
            <div className="space-y-2">
              {quickLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <a
                    key={i}
                    href={`${WA_LINK}?text=${encodeURIComponent(link.message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center gap-3 border border-[oklch(0.22_0.02_60)] bg-[oklch(0.14_0.02_60)] p-3 transition-all duration-200 hover:bg-[oklch(0.18_0.02_60)]"
                  >
                    <Icon size={16} className="flex-shrink-0 text-[oklch(0.60_0.08_65)]" />
                    <span
                      className="text-sm text-[oklch(0.85_0.02_70)] group-hover:text-[oklch(0.95_0.01_75)]"
                      style={{ fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif" }}
                    >
                      {t(link.labelZh, link.labelEn)}
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative flex items-center gap-2 px-5 py-3.5 shadow-xl transition-all duration-300"
        style={{
          background: isOpen ? "oklch(0.50 0.07 60)" : "oklch(0.60 0.08 65)",
          color: "oklch(0.98 0.005 75)",
        }}
      >
        {!isOpen && (
          <motion.span
            className="absolute inset-0"
            style={{ background: "oklch(0.60 0.08 65)" }}
            animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        )}

        <span className="relative z-10">
          {isOpen ? <X size={18} /> : <MessageCircle size={18} />}
        </span>
        <span
          className="relative z-10 text-sm font-bold uppercase tracking-wider"
          style={{ fontFamily: "var(--font-lato), sans-serif" }}
        >
          {isOpen ? t("关闭", "Close") : t("从这里开始", "Start Here")}
        </span>
      </motion.button>
    </div>
  );
}
