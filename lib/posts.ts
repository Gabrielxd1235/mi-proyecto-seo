// Simula una base de datos / CMS. Cada consulta es asíncrona, como lo sería
// una llamada real a una BD (Prisma, MongoDB, Strapi, Contentful, etc.).
export type Post = {
  slug: string;
  title: string;
  description: string;
  updatedAt: string; // ISO date
};

const POSTS: Post[] = [
  {
    slug: "que-es-seo",
    title: "Qué es el SEO y por qué importa en 2026",
    description:
      "Descubre cómo funciona el posicionamiento en buscadores y qué factores influyen en tu ranking.",
    updatedAt: "2026-03-10",
  },
  {
    slug: "meta-tags-nextjs",
    title: "Meta tags en Next.js: guía práctica",
    description:
      "Aprende a definir title, description y Open Graph con la Metadata API de Next.js.",
    updatedAt: "2026-04-02",
  },
  {
    slug: "optimizar-imagenes",
    title: "Optimiza imágenes con next/image y WebP",
    description:
      "Reduce el peso de tus imágenes y mejora el LCP usando el componente Image.",
    updatedAt: "2026-05-18",
  },
];

export async function getPosts(): Promise<Post[]> {
  return POSTS;
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  return POSTS.find((p) => p.slug === slug);
}
