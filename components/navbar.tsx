"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/language-context";

const LOCALIZED_PATHS = new Set([
  "/",
  "/enterprise-strategic-advisory",
  "/family-business-succession",
  "/chairman-founder-advisory",
  "/personal-advisory",
  "/insights",
  "/founder",
  "/contact",
]);

const links = [
  { href: "/enterprise-strategic-advisory", zh: "战略顾问", en: "Advisory" },
  { href: "/family-business-succession", zh: "家族企业", en: "Family Business" },
  { href: "/insights", zh: "洞察", en: "Insights" },
  { href: "/founder", zh: "关于", en: "About" },
];

function stripLocale(pathname: string) {
  const stripped = pathname.replace(/^\/(en|zh)(?=\/|$)/, "");
  return stripped || "/";
}

function BrandMark({ light }: { light: boolean }) {
  return (
    <div className={`grid h-10 w-10 grid-cols-3 gap-[2px] border p-[5px] ${light ? "border-[#d6ad63]/55" : "border-[#9d733c]/55"}`} aria-hidden="true">
      {Array.from({ length: 9 }).map((_, index) => (
        <span key={index} className={index === 4 ? "bg-[#d6ad63]" : light ? "bg-white/18" : "bg-[#241b14]/16"} />
      ))}
    </div>
  );
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
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const localizeHref = (href: string) => {
    if (!routeLocale || !LOCALIZED_PATHS.has(href)) return href;
    return href === "/" ? `/${routeLocale}` : `/${routeLocale}${href}`;
  };

  const toggleLanguage = () => {
    const next = lang === "zh" ? "en" : "zh";
    if (LOCALIZED_PATHS.has(currentBasePath)) {
      router.push(currentBasePath === "/" ? `/${next}` : `/${next}${currentBasePath}`);
    } else {
      setLang(next);
    }
  };

  return (
    <nav className={`fixed top-0 z-50 w-full border-b transition-all ${scrolled ? "border-white/10 bg-black/95" : "border-[#d7c4ad]/25 bg-[#f7f1e7]/92"}`}>
      <div className="container flex items-center justify-between py-3 md:py-4">
        <Link href={localizeHref("/")} className="flex items-center gap-3" aria-label="Qimen Strategy home">
          <BrandMark light={scrolled} />
          <div>
            <div className={`text-sm font-semibold tracking-[0.14em] ${scrolled ? "text-white" : "text-[#241b14]"}`}>QIMEN STRATEGY</div>
            <div className="mt-1 text-[0.62rem] tracking-[0.14em] text-[#b58743]">STRATEGIC DECISION ADVISORY</div>
          </div>
        </Link>

        <div className="hidden items-center gap-5 xl:flex">
          <Link href={localizeHref("/")} className={`text-sm ${scrolled ? "text-white/78 hover:text-[#e2bd6b]" : "text-[#2a2118]/75 hover:text-[#9d733c]"}`}>{lang === "zh" ? "首页" : "Home"}</Link>
          {links.map((item) => (
            <Link key={item.href} href={localizeHref(item.href)} className={`text-sm ${scrolled ? "text-white/78 hover:text-[#e2bd6b]" : "text-[#2a2118]/75 hover:text-[#9d733c]"}`}>
              {lang === "zh" ? item.zh : item.en}
            </Link>
          ))}
          <Link href={localizeHref("/personal-advisory")} className={`text-sm ${scrolled ? "text-white/78 hover:text-[#e2bd6b]" : "text-[#2a2118]/75 hover:text-[#9d733c]"}`}>
            {lang === "zh" ? "决策咨询" : "Decision Consultation"}
          </Link>
          <button onClick={toggleLanguage} className={`border px-3 py-2 text-xs font-semibold tracking-[0.14em] ${scrolled ? "border-white/20 text-white/75" : "border-[#c5ad91]/60 text-[#4a3a2a]/70"}`}>{lang === "zh" ? "EN" : "中文"}</button>
          <Link href={localizeHref("/contact")} className="bg-[#d0a14a] px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] text-black hover:bg-[#e2bd6b]">
            {lang === "zh" ? "预约私密沟通" : "Request a Private Conversation"}
          </Link>
        </div>

        <div className="flex items-center gap-3 xl:hidden">
          <button onClick={toggleLanguage} className={`border px-2.5 py-1.5 text-xs ${scrolled ? "border-white/20 text-white" : "border-[#c5ad91]/60 text-[#4a3a2a]"}`}>{lang === "zh" ? "EN" : "中"}</button>
          <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? "text-white" : "text-[#241b14]"}>{isOpen ? <X size={24} /> : <Menu size={24} />}</button>
        </div>
      </div>

      {isOpen && (
        <div className="bg-black px-6 pb-6 xl:hidden">
          {[{ href: "/", zh: "首页", en: "Home" }, ...links, { href: "/personal-advisory", zh: "决策咨询", en: "Decision Consultation" }].map((item) => (
            <Link key={item.href} href={localizeHref(item.href)} onClick={() => setIsOpen(false)} className="block border-b border-white/10 py-4 text-sm text-white/85">
              {lang === "zh" ? item.zh : item.en}
            </Link>
          ))}
          <Link href={localizeHref("/contact")} onClick={() => setIsOpen(false)} className="mt-5 block bg-[#d0a14a] px-5 py-4 text-center text-sm font-bold text-black">
            {lang === "zh" ? "预约私密沟通" : "Request a Private Conversation"}
          </Link>
        </div>
      )}
    </nav>
  );
}
