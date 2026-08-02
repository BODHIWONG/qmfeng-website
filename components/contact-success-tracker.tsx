"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type StoredSuccess = {
  reference?: string;
  consultationType?: string;
  recordedAt?: number;
};

export default function ContactSuccessTracker() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const reference = params.get("ref") || "";
    const onceKey = reference ? `qimen-contact-conversion:${reference}` : "qimen-contact-conversion:unknown";
    if (sessionStorage.getItem(onceKey)) return;

    let stored: StoredSuccess = {};
    try {
      stored = JSON.parse(sessionStorage.getItem("qimen-contact-success") || "{}") as StoredSuccess;
    } catch {
      stored = {};
    }

    const consultationType = stored.consultationType || "Unknown";
    if (typeof window.gtag === "function") {
      window.gtag("event", "generate_lead", {
        currency: "SGD",
        value: 1,
        consultation_type: consultationType,
        page_path: window.location.pathname,
        lead_reference: reference || stored.reference || "unknown",
      });

      const conversionTarget = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONTACT_CONVERSION_SEND_TO;
      if (conversionTarget) {
        window.gtag("event", "conversion", {
          send_to: conversionTarget,
          currency: "SGD",
          value: 1,
          transaction_id: reference || stored.reference || "",
          event_category: "contact",
          event_label: consultationType,
        });
      }
    }

    sessionStorage.setItem(onceKey, "1");
    sessionStorage.removeItem("qimen-contact-success");
  }, []);

  return null;
}
