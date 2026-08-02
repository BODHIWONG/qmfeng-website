export const redirectedInsightSlugs = new Set([
  "qi-men-dun-jia-relationship-reading-singapore-clarity-in-love",
  "relationship-clarity-consultation-singapore-continue-wait-repair-let-go",
  "qi-men-dun-jia-love-relationship-decisions-singapore",
  "why-did-the-relationship-change-qi-men-reading-singapore",
  "is-this-relationship-worth-continuing-qi-men-perspective-singapore",
  "first-time-relationship-clarity-reading-singapore-what-to-expect",
  "qi-men-dun-jia-consultation-singapore-decision-making",
  "strategic-decision-consulting-qi-men-dun-jia-singapore",
  "first-time-qi-men-consultation-singapore-what-to-expect",
  "qi-men-dun-jia-career-wealth-business-singapore",
  "business-stuck-qimen-strategy-singapore",
  "qi-men-dun-jia-singapore-what-can-it-help-with",
  "qi-men-dun-jia-ancient-strategic-wisdom-qiming-feng-shui",
]);

export function isRedirectedInsightSlug(slug: string) {
  return redirectedInsightSlugs.has(slug);
}
