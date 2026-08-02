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
const GTAG_WAIT_MS = 5_000;
const GTAG_RETRY_MS = 250;

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
    try {
      if (sessionStorage.getItem(onceKey)) return;
    } catch {
      // Analytics storage is best-effort and must not affect submission success.
    }

    const consultationType = stored.consultationType || "Unknown";
    const startedAt = Date.now();

    const finish = () => {
      try {
        sessionStorage.setItem(onceKey, "1");
        sessionStorage.removeItem("qimen-contact-success");
      } catch {
        // Analytics storage is best-effort.
      }
    };

    const sendConversion = () => {
      if (typeof window.gtag !== "function") return false;

      try {
        window.gtag("event", "generate_lead", {
          consultation_type: consultationType,
          page_path: window.location.pathname,
          lead_reference: reference,
        });

        const conversionTarget = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONTACT_CONVERSION_SEND_TO;
        if (conversionTarget) {
          window.gtag("event", "conversion", {
            send_to: conversionTarget,
            transaction_id: reference,
            event_category: "contact",
            event_label: consultationType,
          });
        }
      } catch {
        return false;
      }

      finish();
      return true;
    };

    if (sendConversion()) return;

    const timer = window.setInterval(() => {
      if (sendConversion()) {
        window.clearInterval(timer);
        return;
      }

      if (Date.now() - startedAt >= GTAG_WAIT_MS) {
        window.clearInterval(timer);
        // Keep the pending marker so a later refresh can retry analytics.
      }
    }, GTAG_RETRY_MS);

    return () => window.clearInterval(timer);
  }, []);

  return null;
}
