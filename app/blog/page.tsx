import type { Metadata } from "next";
import Link from "next/link";
import { getPosts } from "@/lib/posts";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog de SEO y Next.js: guías y tutoriales",
  description:
    "Artículos prácticos sobre SEO, meta tags, sitemaps y optimización de rendimiento con Next.js.",
  keywords: ["blog SEO", "Next.js", "tutoriales", "optimización web"],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog de SEO y Next.js",
    description: "Guías y tutoriales de SEO y rendimiento web.",
    url: "/blog",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Blog de SEO y Next.js" }],
  },
};

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Blog</h1>
      <ul className="mt-8 space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="text-xl font-medium underline">
              {post.title}
            </Link>
            <p className="text-zinc-600 dark:text-zinc-400">{post.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
