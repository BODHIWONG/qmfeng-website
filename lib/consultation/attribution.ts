import { LEAD_SOURCES, type ConsultationAttribution, type LeadSource } from "@/lib/consultation/types";

const SEARCH_HOSTS = ["google.", "bing.com", "search.yahoo.", "duckduckgo.com", "baidu.com"];

function lower(value: string) {
  return value.trim().toLowerCase();
}

function hostFromUrl(value: string) {
  try {
    return new URL(value).hostname.toLowerCase();
  } catch {
    return "";
  }
}

function exactSupportedSource(value: string): LeadSource | null {
  const normalised = lower(value).replace(/[_-]+/g, " ");
  return (
    LEAD_SOURCES.find((source) => lower(source) === normalised) ||
    null
  );
}

export function deriveLeadSource(attribution: ConsultationAttribution): LeadSource {
  const override = exactSupportedSource(attribution.sourceOverride);
  if (override) return override;

  const source = lower(attribution.utmSource);
  const medium = lower(attribution.utmMedium);
  const referrerHost = hostFromUrl(attribution.referrer);
  const hasGoogleClickId = Boolean(attribution.gclid || attribution.gbraid || attribution.wbraid);
  const isPaidMedium = ["cpc", "ppc", "paid", "paidsearch", "display", "remarketing"].some((item) =>
    medium.includes(item)
  );

  if (hasGoogleClickId || ((source.includes("google") || referrerHost.includes("google.")) && isPaidMedium)) {
    return "Google Ads";
  }
  if (source.includes("facebook") || source === "fb" || referrerHost.includes("facebook.com")) return "Facebook";
  if (source.includes("instagram") || source === "ig" || referrerHost.includes("instagram.com")) return "Instagram";
  if (source.includes("tiktok") || referrerHost.includes("tiktok.com")) return "TikTok";
  if (source.includes("linkedin") || referrerHost.includes("linkedin.com")) return "LinkedIn";
  if (source.includes("referral") || medium.includes("referral")) return "Referral";
  if (SEARCH_HOSTS.some((host) => referrerHost.includes(host))) return "Organic Search";
  if (source) return exactSupportedSource(source) || "Other";
  return "Website";
}

export function collectBrowserAttribution(): ConsultationAttribution {
  if (typeof window === "undefined") {
    return {
      pageUrl: "",
      pagePath: "",
      referrer: "",
      utmSource: "",
      utmMedium: "",
      utmCampaign: "",
      utmTerm: "",
      utmContent: "",
      gclid: "",
      gbraid: "",
      wbraid: "",
      sourceOverride: "",
    };
  }

  const params = new URLSearchParams(window.location.search);
  return {
    pageUrl: window.location.href,
    pagePath: window.location.pathname,
    referrer: document.referrer,
    utmSource: params.get("utm_source") || "",
    utmMedium: params.get("utm_medium") || "",
    utmCampaign: params.get("utm_campaign") || "",
    utmTerm: params.get("utm_term") || "",
    utmContent: params.get("utm_content") || "",
    gclid: params.get("gclid") || "",
    gbraid: params.get("gbraid") || "",
    wbraid: params.get("wbraid") || "",
    sourceOverride: params.get("lead_source") || "",
  };
}
