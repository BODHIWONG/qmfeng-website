import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.qmfeng.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/qimen-strategy-business`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/decision`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/founder`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/insights/qimen-strategy-modern-decision-making`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/insights/qi-men-strategy-not-fortune-telling`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/insights/qimen-dunjia-decision-making`,
      lastModified: new Date(),
    },
  ];
}
