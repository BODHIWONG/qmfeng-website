/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    const insightRedirects = [
      ["qi-men-dun-jia-relationship-reading-singapore-clarity-in-love", "/relationship-clarity-reading-singapore"],
      ["relationship-clarity-consultation-singapore-continue-wait-repair-let-go", "/relationship-clarity-reading-singapore"],
      ["qi-men-dun-jia-love-relationship-decisions-singapore", "/relationship-clarity-reading-singapore"],
      ["why-did-the-relationship-change-qi-men-reading-singapore", "/relationship-clarity-reading-singapore"],
      ["is-this-relationship-worth-continuing-qi-men-perspective-singapore", "/relationship-clarity-reading-singapore"],
      ["first-time-relationship-clarity-reading-singapore-what-to-expect", "/relationship-clarity-reading-singapore"],
      ["qi-men-dun-jia-consultation-singapore-decision-making", "/decision"],
      ["strategic-decision-consulting-qi-men-dun-jia-singapore", "/decision"],
      ["first-time-qi-men-consultation-singapore-what-to-expect", "/decision"],
      ["qi-men-dun-jia-career-wealth-business-singapore", "/decision"],
      ["business-stuck-qimen-strategy-singapore", "/enterprise-strategic-advisory"],
      ["qi-men-dun-jia-singapore-what-can-it-help-with", "/insights/what-is-qi-men-dun-jia-singapore"],
      ["qi-men-dun-jia-ancient-strategic-wisdom-qiming-feng-shui", "/insights/what-is-qi-men-dun-jia-singapore"],
    ];

    return [
      {
        source: "/appointment",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/appointment/thank-you",
        destination: "/contact-success",
        permanent: true,
      },
      ...insightRedirects.map(([slug, destination]) => ({
        source: `/insights/${slug}`,
        destination,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
