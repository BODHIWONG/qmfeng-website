"use client";

import { usePathname } from "next/navigation";

const LOCALIZED_PATHS = new Set([
  "/",
  "/personal-advisory",
  "/decision",
  "/relationship-clarity-reading-singapore",
  "/enterprise-strategic-advisory",
  "/courses",
  "/insights",
  "/founder",
]);

export function useLocalizedHref() {
  const pathname = usePathname();
  const locale = pathname.startsWith("/zh") ? "zh" : pathname.startsWith("/en") ? "en" : null;

  return (href: string) => {
    if (!locale || !href.startsWith("/") || href.startsWith("/course-registration")) return href;

    const [pathPart, hashPart] = href.split("#");
    if (!LOCALIZED_PATHS.has(pathPart || "/")) return href;

    const localizedPath = pathPart === "/" ? `/${locale}` : `/${locale}${pathPart}`;
    return hashPart ? `${localizedPath}#${hashPart}` : localizedPath;
  };
}
