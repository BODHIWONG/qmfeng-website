"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/language-context";

const LOGO_URL = "/logo-qimen-strategy.jpg";
const COURSE_REGISTRATION_LINK = "/course-registration?course=qimen-foundation&batch=2026-09-19";

const LOCALIZED_PATHS = new Set([
  "/",
  "/personal-advisory",
  "/decision",
  "/relationship-clarity-reading-singapore",
  "/enterprise-strategic-advisory",
  "/commercial-feng-shui",
  "/courses",
  "/insights",
  "/founder",
  "/contact",
  "/contact-success",
]);

const businessLinks = [
  {
    href: "/enterprise-strategic-advisory",
    zh: "企业战略顾问与长期陪跑",
    en: "Business Strategic Advisory",
    descZh: "经营瓶颈、战略重点与长期决策支持",
    descEn: "Business bottlenecks, priorities and ongoing decision support",
  },
  {
    href: "/commercial-feng-shui",
    zh: "商业风水｜办公室风水",
    en: "Commercial Feng Shui",
    descZh: "Office布局、管理者位置、团队协作与客户动线",
    descEn: "Office layout, leadership position, team collaboration and client flow",
  },
  {
    href: "/founder-wealth-investment-advisory",
    zh: "财富周期与投资决策",
    en: "Wealth Cycle & Investment Decisions",
    descZh: "事业周期、投资时机与风险判断",
    descEn: "Business cycle, timing and risk review",
  },
  {
    href: "/executive-career-transition-advisory",
    zh: "高管事业转型",
    en: "Executive Career Transition",
    descZh: "转职、创业与关键关系规划",
    descEn: "Career moves, entrepreneurship and strategic networks",
  },
];

const personalLinks = [
  {
    href: "/personal-advisory",
    zh: "个人咨询总览",
    en: "Personal Advisory Overview",
    descZh: "查看个人服务与适合的咨询入口",
    descEn: "Compare personal services and consultation pathways",
  },
  {
    href: "/personal-advisory#bazi-analysis",
    zh: "八字命理分析",
    en: "Bazi Analysis",
    descZh: "S$168 · 新客户入门分析",
    descEn: "S$168 · Entry analysis for new clients",
  },
  {
    href: "/decision",
    zh: "奇门遁甲咨询",
    en: "Qi Men Dun Jia Consultation",
    descZh: "S$396 · 看清当前局势与方向",
    descEn: "S$396 · Clarity on the current situation and direction",
  },
  {
    href: "/relationship-clarity-reading-singapore",
    zh: "感情与婚姻咨询",
    en: "Relationship & Marriage Advisory",
    descZh: "关系局势与下一步方向",
    descEn: "Relationship situation and next-step direction",
  },
  {
    href: "/personal-advisory#date-selection",
    zh: "择日服务",
    en: "Auspicious Date Selection",
    descZh: "结婚、开业、搬家、签约与重要行动",
    descEn: "Marriage, opening, moving, signing and key actions",
  },
  {
    href: "/personal-advisory#mobile-number",
    zh: "吉祥手机号码选择",
    en: "Mobile Number Selection",
    descZh: "根据个人需要筛选适合的手机号码",
    descEn: "Personalised mobile number selection",
  },
  {
    href: "/personal-advisory#home-feng-shui",
    zh: "居家风水与空间净化",
    en: "Home Feng Shui & Space Clearing",
    descZh: "住宅布局、睡眠环境与空间调整",
    descEn: "Residential layout, sleep environment and space clearing",
  },
];

const primaryLinks = [
  { href: "/insights", zh: "案例与洞察", en: "Insights" },
  { href: "/founder", zh: "关于创始人", en: "About the Founder" },
];

function stripLocale(pathname: string) {
  const stripped = pathname.replace(/^\/(en|zh)(?=\/|$)/, "");
  return stripped || "/";
}

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const routeLocale = pathname.startsWith("/zh") ? "zh" : pathname.startsWith("/en") ? "en" : null;
  const currentBasePath = stripLocale(pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const localizeHref = (href: string) => {
    if (!routeLocale || !href.startsWith("/") || href.startsWith("/course-registration")) return href;
    const [pathPart, hashPart] = href.split("#");
    if (!LOCALIZED_PATHS.has(pathPart || "/")) return href;
    const localizedPath = pathPart === "/" ? `/${routeLocale}` : `/${routeLocale}${pathPart}`;
    return hashPart ? `${localizedPath}#${hashPart}` : localizedPath;
  };

  const homeHref = routeLocale ? `/${routeLocale}` : "/";

  const toggleLanguage = () => {
    const nextLang = lang === "zh" ? "en" : "zh";
    if (LOCALIZED_PATHS.has(currentBasePath)) {
      const nextPath = currentBasePath === "/" ? `/${nextLang}` : `/${nextLang}${currentBasePath}`;
      router.push(nextPath);
      return;
    }
    setLang(nextLang);
  };

  const navTextClass = scrolled
    ? "text-white/82 hover:text-yellow-400"
    : "text-[#2a2118]/78 hover:text-[#a8753f]";
  const brandTextClass = scrolled ? "text-white" : "text-[#241b14]";
  const mobileIconClass = scrolled ? "text-white" : "text-[#241b14]";

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-black/95 shadow-lg backdrop-blur-md"
          : "border-b border-[#d7c4ad]/25 bg-[#f7f1e7]/88 backdrop-blur-md"
      }`}
    >
      <div className="container flex items-center justify-between py-3 md:py-4">
        <Link href={homeHref} className="flex items-center gap-3">
          <img
            src={LOGO_URL}
            alt="Qimen Strategy Singapore logo"
            className="h-12 w-auto object-contain md:h-14"
          />
          <div className="hidden leading-tight sm:block">
            <div className={`text-sm font-semibold tracking-wider md:text-base ${brandTextClass}`}>
              QIMEN STRATEGY
            </div>
            <div className="mt-1 text-[0.62rem] tracking-[0.14em] text-yellow-600 md:text-[0.68rem]">
              启明遁甲决策智库
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-2 xl:flex 2xl:gap-4">
          <Link href={homeHref} className={`text-[0.78rem] transition-colors ${navTextClass}`}>
            {lang === "zh" ? "首页" : "Home"}
          </Link>

          <div className="group relative py-3">
            <button type="button" className={`inline-flex items-center gap-1 text-[0.78rem] font-semibold transition-colors ${navTextClass}`}>
              {lang === "zh" ? "个人咨询" : "Personal Advisory"}
              <ChevronDown size={14} />
            </button>
            <div className="invisible absolute left-1/2 top-full w-[430px] -translate-x-1/2 border border-[#d6ad63]/30 bg-black/98 p-3 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
              {personalLinks.map((link) => (
                <Link key={link.href} href={localizeHref(link.href)} className="block border-b border-white/8 px-4 py-3 last:border-b-0 hover:bg-[#d6ad63]/10">
                  <p className="text-sm font-semibold text-[#f4dfb0]">{lang === "zh" ? link.zh : link.en}</p>
                  <p className="mt-1 text-xs leading-5 text-white/48">{lang === "zh" ? link.descZh : link.descEn}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="group relative py-3">
            <button type="button" className={`inline-flex items-center gap-1 text-[0.78rem] transition-colors ${navTextClass}`}>
              {lang === "zh" ? "企业顾问" : "Business Advisory"}
              <ChevronDown size={14} />
            </button>
            <div className="invisible absolute left-1/2 top-full w-[430px] -translate-x-1/2 border border-[#d6ad63]/30 bg-black/98 p-3 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
              {businessLinks.map((link) => (
                <Link key={link.href} href={localizeHref(link.href)} className="block border-b border-white/8 px-4 py-3 last:border-b-0 hover:bg-[#d6ad63]/10">
                  <p className="text-sm font-semibold text-[#f4dfb0]">{lang === "zh" ? link.zh : link.en}</p>
                  <p className="mt-1 text-xs leading-5 text-white/48">{lang === "zh" ? link.descZh : link.descEn}</p>
                </Link>
              ))}
            </div>
          </div>

          <Link href={localizeHref("/courses")} className={`text-[0.78rem] transition-colors ${navTextClass}`}>
            {lang === "zh" ? "奇门课程" : "Qi Men Courses"}
          </Link>

          {primaryLinks.map((link) => (
            <Link key={link.href} href={localizeHref(link.href)} className={`text-[0.78rem] transition-colors ${navTextClass}`}>
              {lang === "zh" ? link.zh : link.en}
            </Link>
          ))}

          <button
            type="button"
            onClick={toggleLanguage}
            className={`border px-3 py-2 text-xs font-semibold tracking-[0.16em] transition-all ${
              scrolled
                ? "border-white/25 text-white/75 hover:border-yellow-500 hover:text-yellow-500"
                : "border-[#c5ad91]/55 text-[#4a3a2a]/70 hover:border-[#a8753f] hover:text-[#a8753f]"
            }`}
            aria-label="Switch language"
          >
            {lang === "zh" ? "EN" : "中文"}
          </button>

          <Link
            href={localizeHref("/contact")}
            className="bg-yellow-600 px-4 py-2.5 text-[0.78rem] font-semibold text-black transition-all hover:bg-yellow-500"
          >
            {lang === "zh" ? "提交咨询" : "Submit Enquiry"}
          </Link>
        </div>

        <div className="flex items-center gap-3 xl:hidden">
          <button
            type="button"
            onClick={toggleLanguage}
            className={`border px-2.5 py-1.5 text-[0.65rem] font-semibold tracking-[0.16em] ${
              scrolled ? "border-white/25 text-white/80" : "border-[#c5ad91]/55 text-[#4a3a2a]/75"
            }`}
            aria-label="Switch language"
          >
            {lang === "zh" ? "EN" : "中"}
          </button>
          <button className={mobileIconClass} aria-label={isOpen ? "Close menu" : "Open menu"} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="max-h-[calc(100vh-72px)] overflow-y-auto bg-black px-6 pb-7 xl:hidden">
          <Link href={homeHref} className="block border-b border-white/10 py-4 text-white/85" onClick={() => setIsOpen(false)}>
            {lang === "zh" ? "首页" : "Home"}
          </Link>

          <p className="pt-5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#d6ad63]">
            {lang === "zh" ? "个人咨询" : "Personal Advisory"}
          </p>
          {personalLinks.map((link) => (
            <Link key={link.href} href={localizeHref(link.href)} className="block border-b border-white/8 py-3" onClick={() => setIsOpen(false)}>
              <p className="text-sm font-semibold text-white/85">{lang === "zh" ? link.zh : link.en}</p>
              <p className="mt-1 text-xs text-white/45">{lang === "zh" ? link.descZh : link.descEn}</p>
            </Link>
          ))}

          <p className="pt-5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#d6ad63]">
            {lang === "zh" ? "企业顾问" : "Business Advisory"}
          </p>
          {businessLinks.map((link) => (
            <Link key={link.href} href={localizeHref(link.href)} className="block border-b border-white/8 py-3" onClick={() => setIsOpen(false)}>
              <p className="text-sm font-semibold text-white/85">{lang === "zh" ? link.zh : link.en}</p>
              <p className="mt-1 text-xs text-white/45">{lang === "zh" ? link.descZh : link.descEn}</p>
            </Link>
          ))}

          <Link href={localizeHref("/courses")} className="block border-b border-white/10 py-4 font-semibold text-[#f4dfb0]" onClick={() => setIsOpen(false)}>
            {lang === "zh" ? "奇门课程" : "Qi Men Courses"}
          </Link>
          <Link href={COURSE_REGISTRATION_LINK} className="block border-b border-white/10 py-4 text-[#d6ad63]" onClick={() => setIsOpen(false)}>
            {lang === "zh" ? "选择班次并报名" : "Select Batch & Register"}
          </Link>

          {primaryLinks.map((link) => (
            <Link key={link.href} href={localizeHref(link.href)} className="block border-b border-white/8 py-4 text-white/82" onClick={() => setIsOpen(false)}>
              {lang === "zh" ? link.zh : link.en}
            </Link>
          ))}
          <Link
            href={localizeHref("/contact")}
            className="mt-5 block bg-[#d6ad63] px-5 py-3 text-center font-semibold text-black"
            onClick={() => setIsOpen(false)}
          >
            {lang === "zh" ? "提交咨询" : "Submit Enquiry"}
          </Link>
        </div>
      )}
    </nav>
  );
}
