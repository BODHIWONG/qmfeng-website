import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.qmfeng.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/wealth`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/healing`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/decision`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/space-clearing`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/insights/feng-shui-wealth-improvement`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/insights/qimen-dunjia-decision-making`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/insights/space-energy-clearing`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/insights/singapore-qiming-feng-shui`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/insights/sleep-quality-energy-field`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/insights/why-successful-women-still-feel-empty-in-love`,
      lastModified: new Date(),
    },
  ];
}
