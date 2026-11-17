import { getPosts } from "@/lib/posts";
import { BASE_URL } from "@/lib/site";

// Rutas estáticas del sitio. Las rutas de los posts se leen de la "base de datos".
const STATIC_ROUTES = ["/", "/blog", "/contacto"];

const escapeXml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

export async function GET() {
  const posts = await getPosts(); // BD / CMS

  const staticUrls = STATIC_ROUTES.map(
    (path) => `<url><loc>${escapeXml(BASE_URL + path)}</loc></url>`,
  );

  const postUrls = posts.map(
    (post) =>
      `<url><loc>${escapeXml(`${BASE_URL}/blog/${post.slug}`)}</loc>` +
      `<lastmod>${post.updatedAt}</lastmod></url>`,
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticUrls, ...postUrls].join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: { "Content-Type": "text/xml; charset=utf-8" },
  });
}
