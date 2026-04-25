import { notFound } from "next/navigation";
import { insightPosts, getInsightPost } from "@/lib/insights-data";
import {
  qimenSingaporeBilingualPosts,
  getQimenSingaporeBilingualPost,
} from "@/lib/qimen-singapore-bilingual-posts";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

type InsightDetailProps = {
  params: Promise<{ slug: string }>;
};

const allDynamicPosts = [...qimenSingaporeBilingualPosts, ...insightPosts];

export function generateStaticParams() {
  return allDynamicPosts.map((post) => ({ slug: post.slug }));
}

export default async function InsightDetail({ params }: InsightDetailProps) {
  const { slug } = await params;
  const post =
    getQimenSingaporeBilingualPost(slug) ?? getInsightPost(slug);

  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-[oklch(0.08_0.02_60)] text-white">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <div className="mb-4 inline-block bg-[oklch(0.60_0.08_65)] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[oklch(0.08_0.02_60)]">
          {post.category}
        </div>

        <h1 className="text-3xl font-bold mb-4 leading-tight md:text-4xl">{post.title}</h1>
        <div className="text-sm text-gray-400 mb-8">{post.date} · {post.readTime}</div>

        <div className="mb-10 flex flex-wrap gap-2">
          {post.keywords.map((keyword) => (
            <span
              key={keyword}
              className="border border-[oklch(0.25_0.02_60)] px-2 py-1 text-[0.58rem] uppercase tracking-[0.08em] text-[oklch(0.55_0.02_70)]"
            >
              {keyword}
            </span>
          ))}
        </div>

        <div className="space-y-5 text-[15px] leading-relaxed text-gray-300 md:text-base">
          {post.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
