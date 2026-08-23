"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { persistBrowserAttribution } from "@/lib/consultation/attribution";

export default function AttributionTracker() {
  const pathname = usePathname();

  useEffect(() => {
    persistBrowserAttribution();
  }, [pathname]);

  return null;
}
