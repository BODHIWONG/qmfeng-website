"use client";

import { useEffect } from "react";

const WHATSAPP_CONVERSION_SEND_TO = "AW-17926881970/wGZiCKyN1sscELKFmuRC";

function isWhatsAppLink(href: string) {
  return href.includes("wa.me/6589593499") || href.includes("api.whatsapp.com/send") || href.startsWith("whatsapp://");
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function WhatsAppConversionTracker() {
  useEffect(() => {
    const handleWhatsAppClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link || !isWhatsAppLink(link.href)) return;

      const serviceType = link.dataset.conversion || "general_whatsapp_enquiry";

      if (typeof window.gtag === "function") {
        window.gtag("event", "whatsapp_click", {
          service_type: serviceType,
          page_path: window.location.pathname,
          link_url: link.href,
        });
      }

      const fireConversion = (callback?: () => void) => {
        if (typeof window.gtag !== "function") {
          callback?.();
          return;
        }
        window.gtag("event", "conversion", {
          send_to: WHATSAPP_CONVERSION_SEND_TO,
          event_category: "contact",
          event_label: serviceType,
          page_path: window.location.pathname,
          event_callback: callback,
          event_timeout: 1000,
        });
      };

      const opensNewContext =
        link.target === "_blank" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;

      if (opensNewContext) {
        fireConversion();
        return;
      }

      event.preventDefault();
      let didNavigate = false;
      const navigate = () => {
        if (didNavigate) return;
        didNavigate = true;
        window.location.href = link.href;
      };

      fireConversion(navigate);
      window.setTimeout(navigate, 1000);
    };

    document.addEventListener("click", handleWhatsAppClick, true);
    return () => document.removeEventListener("click", handleWhatsAppClick, true);
  }, []);

  return null;
}
