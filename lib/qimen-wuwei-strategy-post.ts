import type { InsightPost } from "@/lib/insights-data";

export const qimenWuweiStrategyPosts: InsightPost[] = [
  {
    slug: "wuwei-mind-active-strategy-qimen-strategy",
    title: "以无为之心，行有为之事：Qimen Strategy 的战略心法",
    excerpt:
      "无为不是躺平，而是在看清规律、时机、方向与局势之后，以更通透、更稳的心态去做真正该做的事。",
    date: "2026-06-22",
    readTime: "4 min",
    category: "Strategic Thought",
    keywords: [
      "无为而无不为",
      "以无为之心行有为之事",
      "Qimen Strategy Singapore",
      "启明遁甲",
      "奇门决策",
      "strategic decision wisdom",
      "Eastern strategic intelligence",
      "business decision advisory",
      "Qi Men Dun Jia Singapore"
    ],
    paragraphs: [
      "以无为的心，去做有为的事。真正成就大事的人，并不是不作为，而是不执着、不强求、不被一时得失牵动。",
      "有为，往往是在具体事情上用功；无为，则是在更高的格局中顺势而行。小事靠有为，步步落实；大业靠无为，顺势而成。",
      "世间万事万物，自有其运行的规律。人力可以推动一部分，但无法强行改变全部。若不懂时机、不明趋势，只凭一腔执念硬做，往往只是虚耗心力，费力而功少。",
      "所谓无为，不是躺平，也不是什么都不做。无为，是看清规律之后的从容；是尽人事之后的放下；是有行动，但不被行动束缚；是做该做的事，但不强求不属于自己的结果。",
      "在企业经营、事业选择与人生重大决定中，很多人以为问题来自不够努力，于是不断加码、不断硬推、不断消耗自己。可是，当方向不对、时机未到、人事条件不稳、风险尚未看清时，越用力，反而越容易陷入被动。",
      "启明遁甲 Qimen Strategy 所重视的，不是让人逃避行动，而是在行动之前先看清局势。当前是否适合推进？哪个方向更顺？关键人物是否形成助力？环境是否支持下一步？隐藏风险在哪里？这些问题，决定了行动是否真正有承载。",
      "真正的高手，不是用蛮力改变世界，而是在看清大势之后，选择最合适的时机、方向和位置。该进时进，该守时守，该等时等，该转时转。心不被局势牵走，行动却能落在关键处。",
      "无为，是内心不被执念控制；有为，是现实中把该做的事做好。一个人若只有有为，容易陷入忙乱；若误解无为，又会变成逃避。真正的智慧，是外在有行动，内在无挂碍。",
      "这也是启明遁甲 Qimen Strategy 的战略心法：先看清局，再决定如何行动。不是盲目求快，不是被情绪推动，也不是用努力掩盖判断的缺失，而是在时机、方向、人事与风险更清楚之后，把力量放在真正有效的位置。",
      "心无挂碍，事有所为。以无为之心，行有为之事，才是无为而无不为。"
    ],
  },
];

export function getQimenWuweiStrategyPost(slug: string) {
  return qimenWuweiStrategyPosts.find((post) => post.slug === slug);
}
