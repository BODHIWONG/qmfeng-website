"use client";

import { useEffect } from "react";

const WHATSAPP_CONVERSION_SEND_TO = "AW-17926881970/wGZiCKyN1sscELKFmuRC";

function isWhatsAppLink(href: string) {
  return (
    href.includes("wa.me/6589593499") ||
    href.includes("api.whatsapp.com/send") ||
    href.startsWith("whatsapp://")
  );
}

function inferServiceType(link: HTMLAnchorElement) {
  if (link.dataset.conversion) return link.dataset.conversion;

  const path = window.location.pathname;
  const href = decodeURIComponent(link.href).toLowerCase();

  if (path.includes("enterprise-strategic-advisory") || href.includes("founder business advisory")) {
    return "founder_business_advisory";
  }
  if (path.includes("founder-wealth-investment-advisory") || href.includes("wealth") || href.includes("investment")) {
    return "wealth_investment_decision";
  }
  if (path.includes("executive-career-transition-advisory") || href.includes("executive career")) {
    return "executive_career_transition";
  }
  if (path.includes("relationship-clarity") || href.includes("relationship")) {
    return "relationship_decision_advisory";
  }
  if (path.includes("course") || href.includes("course")) {
    return "course_enquiry";
  }
  if (path === "/" || path.includes("decision")) {
    return "general_strategic_advisory";
  }
  return "general_whatsapp_enquiry";
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

      const serviceType = inferServiceType(link);

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
        link.target === "_blank" ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        event.button !== 0;

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
