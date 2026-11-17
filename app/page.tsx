import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LazySection from "@/components/LazySection";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

// Equivalente en App Router a <Head> de next/head (Pages Router).
export const metadata: Metadata = {
  title: { absolute: "Mi Sitio Optimizado - Home | SEO y rendimiento con Next.js" },
  description: "Aprende sobre optimización SEO y rendimiento en Next.js.",
  keywords: ["Next.js", "SEO", "optimización web"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Mi Sitio Optimizado",
    description: "Descubre técnicas avanzadas para mejorar tu web con Next.js.",
    url: "/",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Mi Sitio Optimizado" }],
  },
};

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">
        Bienvenido a mi página optimizada
      </h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        Aprende cómo mejorar el rendimiento y SEO en Next.js.
      </p>
      {/* next/image: sirve WebP, redimensiona y evita layout shift.
          En Next 16 `priority` está deprecado: `preload` hace lo mismo. */}
      <Image
        src="/images/seo-image.png"
        width={800}
        height={420}
        alt="Ejemplo de imagen optimizada"
        preload
        className="mt-8 h-auto w-full rounded-lg"
      />
      <LazySection />
      <nav className="mt-8 flex gap-4 font-medium underline">
        <Link href="/blog">Blog</Link>
        <Link href="/contacto">Contacto</Link>
      </nav>
    </main>
  );
}
