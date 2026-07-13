import type { InsightPost } from "@/lib/insights-data";

const relationshipCta =
  "Qimen Strategy offers Relationship Decision Clarity in Singapore as a specialised advisory area within major life decision consulting. For a private consultation, contact the official WhatsApp: +65 8959 3499. See the situation clearly before you decide.";

export const qimenRelationshipCaseReflectionPosts: InsightPost[] = [
  {
    slug: "does-he-still-love-you-relationship-clarity-singapore",
    title: "Does He Still Love You? Stop Guessing. Start Seeing the Whole Picture.",
    excerpt:
      "When words and actions no longer match, relationship clarity matters more than another promise. Learn how Qi Men Dun Jia can support a wiser relationship decision.",
    date: "2026-07-13",
    readTime: "8 min",
    category: "Relationship Decision Clarity",
    keywords: [
      "Does he still love me",
      "Relationship clarity Singapore",
      "Relationship consultation Singapore",
      "Qi Men Dun Jia relationship reading Singapore",
      "Relationship decision advisory",
      "Qimen Strategy Singapore"
    ],
    paragraphs: [
      `He says he loves you.`,
      `But his actions have already made the decision.`,
      `If you find yourself checking your phone every few minutes, rereading old WhatsApp conversations, or wondering why someone who says “I love you” makes you feel anxious instead of secure, this message is for you.`,
      `## A Story That Many Women Know Too Well`,
      `Emily (not her real name) came to Qimen Strategy after months of emotional exhaustion.`,
      `Every morning, the first thing she did was check whether he had replied.`,
      `Every night, she fell asleep wondering if she had said something wrong.`,
      `He still answered her messages. Sometimes he even said, “I miss you.”`,
      `But he never made time to see her.`,
      `He avoided important conversations.`,
      `Whenever she asked about the future, he changed the subject.`,
      `She wasn’t in a relationship anymore. She was trapped in uncertainty.`,
      `Like many women, Emily wasn’t searching for another opinion. She was searching for clarity.`,
      `## The Wrong Question`,
      `Most people ask: “Does he still love me?”`,
      `But that is often the wrong question.`,
      `The better question is: “Is this relationship bringing me peace, respect, trust, and emotional security?”`,
      `Love is not measured by beautiful words.`,
      `Love is revealed through consistent actions.`,
      `Someone who genuinely values you should not leave you constantly confused, anxious, and questioning your worth.`,
      `## Stop Looking at One Message. Look at the Whole Picture.`,
      `When emotions take over, our judgment becomes clouded.`,
      `One loving text can erase weeks of neglect.`,
      `One apology can make us ignore months of disappointment.`,
      `Major life decisions should never be based on one conversation, one argument, or one promise.`,
      `They should be based on the complete picture.`,
      `At Qimen Strategy, this is exactly what we help people do.`,
      `## How Qi Men Dun Jia Can Help`,
      `Qi Men Dun Jia is not about telling people what they want to hear.`,
      `It is a strategic decision-making system that helps reveal hidden influences, timing, relationship dynamics, and the overall energy surrounding an important decision.`,
      `Instead of asking only, “Does he still love me?”, we examine questions such as:`,
      `- What is the true direction of this relationship?`,
      `- What unseen factors are affecting the situation?`,
      `- Is reconciliation realistic, or is it time to move forward?`,
      `- What decision is most aligned with your long-term wellbeing?`,
      `When you understand the whole picture, fear becomes clarity.`,
      `And clarity leads to better decisions.`,
      `## Before You Decide, See the Whole Game.`,
      `Every major relationship becomes a decision.`,
      `Stay.`,
      `Wait.`,
      `Or walk away.`,
      `Whatever choice you make, make sure it is based on clarity rather than fear, hope, or uncertainty.`,
      `At Qimen Strategy Singapore, we help individuals navigate life’s most important decisions with greater confidence through Qi Men Dun Jia Strategic Decision Advisory.`,
      `See the Whole Game Before You Decide.`,
      `## A Gentle Note`,
      `Qi Men Dun Jia is not a replacement for communication, relationship counselling, or professional mental health support.`,
      `Its purpose is to provide an additional strategic perspective, helping you understand the bigger picture so you can make wiser and more informed decisions.`,
      `## Qimen Strategy Singapore`,
      `Helping people make clearer decisions in relationships, career, business, and life.`,
      `Because clarity today may save you years of regret.`,
      `📩 Message us to book your private consultation.`
    ],
  },
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
