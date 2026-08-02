import { LEAD_SOURCES, type ConsultationAttribution, type LeadSource } from "@/lib/consultation/types";

const SEARCH_HOSTS = ["google.", "bing.com", "search.yahoo.", "duckduckgo.com", "baidu.com"];
const ATTRIBUTION_STORAGE_KEY = "qimen-attribution-v1";
const PRIVILEGED_SOURCE_OVERRIDES = new Set<LeadSource>(["Walk-in", "Existing Client"]);

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
  return LEAD_SOURCES.find((source) => lower(source) === normalised) || null;
}

function safePublicSourceOverride(value: string) {
  const source = exactSupportedSource(value);
  return source && !PRIVILEGED_SOURCE_OVERRIDES.has(source) ? source : null;
}

export function deriveLeadSource(attribution: ConsultationAttribution): LeadSource {
  const override = safePublicSourceOverride(attribution.sourceOverride);
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

function emptyAttribution(): ConsultationAttribution {
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

function readStoredAttribution() {
  try {
    const stored = window.localStorage.getItem(ATTRIBUTION_STORAGE_KEY);
    if (!stored) return null;
    const parsed = JSON.parse(stored) as { first?: ConsultationAttribution; latest?: ConsultationAttribution };
    return parsed && typeof parsed === "object" ? parsed : null;
  } catch {
    return null;
  }
}

function hasCampaignSignal(attribution: ConsultationAttribution) {
  return Boolean(
    attribution.utmSource ||
      attribution.utmMedium ||
      attribution.utmCampaign ||
      attribution.gclid ||
      attribution.gbraid ||
      attribution.wbraid ||
      attribution.sourceOverride ||
      attribution.referrer
  );
}

export function collectBrowserAttribution(): ConsultationAttribution {
  if (typeof window === "undefined") return emptyAttribution();

  const params = new URLSearchParams(window.location.search);
  const current: ConsultationAttribution = {
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

  const stored = readStoredAttribution();
  const first = stored?.first || (hasCampaignSignal(current) ? current : null);
  const latest = hasCampaignSignal(current) ? current : stored?.latest || current;

  try {
    window.localStorage.setItem(
      ATTRIBUTION_STORAGE_KEY,
      JSON.stringify({ first: first || current, latest })
    );
  } catch {
    // Attribution storage is best-effort; form submission must continue if storage is blocked.
  }

  const sourceAttribution = first || latest;
  return {
    ...sourceAttribution,
    pageUrl: current.pageUrl,
    pagePath: current.pagePath,
    sourceOverride: safePublicSourceOverride(sourceAttribution.sourceOverride) || "",
  };
}
