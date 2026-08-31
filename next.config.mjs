/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    const legacyRouteRedirects = [
      ["/decision", "/personal-advisory"],
      ["/relationship-clarity-reading-singapore", "/personal-advisory"],
      ["/commercial-feng-shui", "/enterprise-strategic-advisory"],
      ["/corporate-consulting", "/enterprise-strategic-advisory"],
      ["/enterprise-strategic-health-diagnostic", "/enterprise-strategic-advisory"],
      ["/qimen-strategy-business", "/enterprise-strategic-advisory"],
      ["/business-decision-consultant-singapore", "/enterprise-strategic-advisory"],
      ["/founder-wealth-investment-advisory", "/chairman-founder-advisory"],
      ["/executive-career-transition-advisory", "/personal-advisory"],
      ["/personal-life-state-diagnostic", "/personal-advisory"],
      ["/singapore-qi-men-dun-jia-consultant", "/personal-advisory"],
      ["/qi-men-dun-jia-singapore", "/personal-advisory"],
      ["/healing", "/personal-advisory"],
      ["/space-clearing", "/personal-advisory"],
      ["/wealth", "/personal-advisory"],
      ["/products", "/"],
      ["/appointment", "/contact"],
      ["/appointment/thank-you", "/contact-success"],
    ];

    const insightRedirects = [
      ["qi-men-dun-jia-relationship-reading-singapore-clarity-in-love", "/personal-advisory"],
      ["relationship-clarity-consultation-singapore-continue-wait-repair-let-go", "/personal-advisory"],
      ["qi-men-dun-jia-love-relationship-decisions-singapore", "/personal-advisory"],
      ["why-did-the-relationship-change-qi-men-reading-singapore", "/personal-advisory"],
      ["is-this-relationship-worth-continuing-qi-men-perspective-singapore", "/personal-advisory"],
      ["first-time-relationship-clarity-reading-singapore-what-to-expect", "/personal-advisory"],
      ["qi-men-dun-jia-consultation-singapore-decision-making", "/personal-advisory"],
      ["strategic-decision-consulting-qi-men-dun-jia-singapore", "/personal-advisory"],
      ["first-time-qi-men-consultation-singapore-what-to-expect", "/personal-advisory"],
      ["qi-men-dun-jia-career-wealth-business-singapore", "/personal-advisory"],
      ["business-stuck-qimen-strategy-singapore", "/enterprise-strategic-advisory"],
      ["qi-men-dun-jia-singapore-what-can-it-help-with", "/insights/what-is-qi-men-dun-jia-singapore"],
      ["qi-men-dun-jia-ancient-strategic-wisdom-qiming-feng-shui", "/insights/what-is-qi-men-dun-jia-singapore"],
    ];

    return [
      ...legacyRouteRedirects.map(([source, destination]) => ({ source, destination, permanent: true })),
      ...insightRedirects.map(([slug, destination]) => ({
        source: `/insights/${slug}`,
        destination,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
