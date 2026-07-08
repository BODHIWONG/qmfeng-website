import type { InsightPost } from "@/lib/insights-data";

const relationshipCta =
  "Qimen Strategy offers Relationship Decision Clarity in Singapore as a specialised advisory area within major life decision consulting. For a private consultation, contact the official WhatsApp: +65 8959 3499. See the situation clearly before you decide.";

export const qimenRelationshipCaseReflectionPosts: InsightPost[] = [
  {
    slug: "relationship-decision-clarity-singapore-uncertain-love",
    title: "Relationship Decision Clarity Singapore | When Love Becomes Uncertain",
    excerpt:
      "A Qimen Strategy reflection on relationship uncertainty and how Qi Men Dun Jia helps people gain clarity before making an important relationship decision.",
    date: "2026-07-08",
    readTime: "5 min",
    category: "Relationship Decision Clarity",
    keywords: [
      "Relationship Decision Clarity Singapore",
      "Relationship consultation Singapore",
      "Qi Men Dun Jia relationship reading Singapore",
      "Relationship uncertainty Singapore",
      "Qimen Strategy relationship advisory"
    ],
    paragraphs: [
      `Recently, a relationship consultation at Qimen Strategy reminded me that the real issue is not always whether there is feeling.`,
      `Very often, the deeper issue is uncertainty.`,
      `A person may want to continue, but the future is unclear. A person may want to let go, but the attachment is still there. A person may want to trust the situation, but the heart does not feel steady.`,
      `In an unclear relationship, the most exhausting part is often not separation itself. It is the waiting.`,
      `Waiting without certainty. Waiting without a clear position. Waiting without knowing whether the relationship is truly moving forward.`,
      `Over time, this kind of uncertainty can affect sleep, emotions, work focus, confidence, and overall direction in life.`,
      `Many relationship problems may appear to be about two people. But eventually, they often become one person’s life decision.`,
      `At Qimen Strategy, the purpose is not to judge, promise a fixed result, or tell someone only what they want to hear.`,
      `The purpose is to help the person step back and see the situation more clearly: the current structure, the timing, the other person’s position, the real blockage, the risk, and the next responsible step.`,
      `Sometimes, the most important question is not: “Will this person choose me?”`,
      `But: “Should I continue placing my time, emotions, and life inside this uncertainty?”`,
      `Love needs sincerity. But life also needs clarity.`,
      `When a relationship keeps draining energy and making direction unclear, the first step may not be to make a decision immediately. The first step is to see the situation clearly.`,
      relationshipCta
    ],
  },
];

export function getQimenRelationshipCaseReflectionPost(slug: string) {
  return qimenRelationshipCaseReflectionPosts.find((post) => post.slug === slug);
}
