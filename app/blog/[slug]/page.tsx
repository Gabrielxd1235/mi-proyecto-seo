import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getPosts } from "@/lib/posts";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

// Meta tags realmente dinámicos: dependen del post que se visita.
export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: "article",
      modifiedTime: post.updatedAt,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: post.title }],
    },
  };
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">{post.title}</h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">{post.description}</p>
      <p className="mt-8 text-sm text-zinc-500">Actualizado: {post.updatedAt}</p>
    </main>
  );
}
