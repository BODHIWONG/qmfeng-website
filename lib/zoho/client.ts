type ZohoAccessToken = {
  accessToken: string;
  apiDomain: string;
  expiresAt: number;
};

type ZohoTokenResponse = {
  access_token?: string;
  api_domain?: string;
  expires_in?: number;
  error?: string;
};

type ZohoRuntimeConfig = {
  accountsUrl: string;
  clientId: string;
  clientSecret: string;
  refreshToken: string;
  moduleApiName: string;
  apiVersion: string;
};

type ZohoGlobalCache = typeof globalThis & {
  __qimenZohoAccessToken?: ZohoAccessToken;
  __qimenZohoTokenPromise?: Promise<ZohoAccessToken>;
};

const globalCache = globalThis as ZohoGlobalCache;

function cleanEnv(value: string | undefined) {
  return value?.trim() || "";
}

export function getZohoRuntimeConfig(): ZohoRuntimeConfig | null {
  const clientId = cleanEnv(process.env.ZOHO_CLIENT_ID);
  const clientSecret = cleanEnv(process.env.ZOHO_CLIENT_SECRET);
  const refreshToken = cleanEnv(process.env.ZOHO_REFRESH_TOKEN);
  const moduleApiName = cleanEnv(process.env.ZOHO_CRM_MODULE_API_NAME);

  if (!clientId || !clientSecret || !refreshToken || !moduleApiName) return null;

  return {
    accountsUrl: cleanEnv(process.env.ZOHO_ACCOUNTS_URL) || "https://accounts.zoho.com",
    clientId,
    clientSecret,
    refreshToken,
    moduleApiName,
    apiVersion: cleanEnv(process.env.ZOHO_CRM_API_VERSION) || "v8",
  };
}

export function isZohoConfigured() {
  return getZohoRuntimeConfig() !== null;
}

async function refreshAccessToken(config: ZohoRuntimeConfig): Promise<ZohoAccessToken> {
  const endpoint = new URL("/oauth/v2/token", config.accountsUrl);
  const body = new URLSearchParams({
    grant_type: "refresh_token",
    client_id: config.clientId,
    client_secret: config.clientSecret,
    refresh_token: config.refreshToken,
  });

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body,
    cache: "no-store",
  });
  const payload = (await response.json().catch(() => ({}))) as ZohoTokenResponse;

  if (!response.ok || !payload.access_token) {
    throw new Error(`ZOHO_OAUTH_FAILED:${payload.error || response.status}`);
  }

  const token: ZohoAccessToken = {
    accessToken: payload.access_token,
    apiDomain: payload.api_domain || cleanEnv(process.env.ZOHO_API_DOMAIN) || "https://www.zohoapis.com",
    expiresAt: Date.now() + Math.max((payload.expires_in || 3600) - 300, 60) * 1000,
  };
  globalCache.__qimenZohoAccessToken = token;
  return token;
}

async function getAccessToken(config: ZohoRuntimeConfig) {
  const cached = globalCache.__qimenZohoAccessToken;
  if (cached && cached.expiresAt > Date.now()) return cached;

  if (!globalCache.__qimenZohoTokenPromise) {
    globalCache.__qimenZohoTokenPromise = refreshAccessToken(config).finally(() => {
      globalCache.__qimenZohoTokenPromise = undefined;
    });
  }

  return globalCache.__qimenZohoTokenPromise;
}

export async function zohoCrmRequest<T>(
  path: string,
  init: RequestInit = {}
): Promise<{ status: number; data: T | null }> {
  const config = getZohoRuntimeConfig();
  if (!config) throw new Error("ZOHO_NOT_CONFIGURED");

  const token = await getAccessToken(config);
  const endpoint = new URL(`/crm/${config.apiVersion}/${path.replace(/^\//, "")}`, token.apiDomain);
  const response = await fetch(endpoint, {
    ...init,
    headers: {
      authorization: `Zoho-oauthtoken ${token.accessToken}`,
      "content-type": "application/json",
      ...(init.headers || {}),
    },
    cache: "no-store",
  });

  const data = response.status === 204
    ? null
    : ((await response.json().catch(() => null)) as T | null);

  if (!response.ok && response.status !== 204) {
    const code =
      data && typeof data === "object" && "code" in data
        ? String((data as { code?: unknown }).code || "UNKNOWN")
        : "UNKNOWN";
    throw new Error(`ZOHO_CRM_REQUEST_FAILED:${response.status}:${code}`);
  }

  return { status: response.status, data };
}
