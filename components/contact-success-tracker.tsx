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

const SUCCESS_SESSION_MAX_AGE_MS = 30 * 60 * 1000;

export default function ContactSuccessTracker() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const reference = params.get("ref") || "";
    if (!reference) return;

    let stored: StoredSuccess = {};
    try {
      stored = JSON.parse(sessionStorage.getItem("qimen-contact-success") || "{}") as StoredSuccess;
    } catch {
      stored = {};
    }

    const recordedAt = typeof stored.recordedAt === "number" ? stored.recordedAt : 0;
    const isRecent = recordedAt > 0 && Date.now() - recordedAt <= SUCCESS_SESSION_MAX_AGE_MS;
    const isMatchingSubmission = Boolean(stored.reference && stored.reference === reference && isRecent);
    if (!isMatchingSubmission) return;

    const onceKey = `qimen-contact-conversion:${reference}`;
    if (sessionStorage.getItem(onceKey)) return;

    const consultationType = stored.consultationType || "Unknown";
    if (typeof window.gtag === "function") {
      window.gtag("event", "generate_lead", {
        currency: "SGD",
        value: 1,
        consultation_type: consultationType,
        page_path: window.location.pathname,
        lead_reference: reference,
      });

      const conversionTarget = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONTACT_CONVERSION_SEND_TO;
      if (conversionTarget) {
        window.gtag("event", "conversion", {
          send_to: conversionTarget,
          currency: "SGD",
          value: 1,
          transaction_id: reference,
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
