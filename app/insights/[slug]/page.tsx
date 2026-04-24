import { notFound } from "next/navigation";
import { insightPosts, getInsightPost } from "@/lib/insights-data";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export function generateStaticParams() {
  return insightPosts.map((post) => ({ slug: post.slug }));
}

export default function InsightDetail({ params }: { params: { slug: string } }) {
  const post = getInsightPost(params.slug);

  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-[oklch(0.08_0.02_60)] text-white">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div className="text-sm text-gray-400 mb-6">{post.date} · {post.readTime}</div>

        <div className="space-y-5 text-[15px] leading-relaxed text-gray-300">
          {post.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
