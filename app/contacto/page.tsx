import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto: escríbenos para consultas de SEO",
  description:
    "Ponte en contacto con nuestro equipo para recibir asesoría en SEO y optimización web con Next.js.",
  keywords: ["contacto", "asesoría SEO", "Next.js"],
  alternates: { canonical: "/contacto" },
  openGraph: {
    title: "Contacto | Mi Sitio Optimizado",
    description: "Escríbenos para recibir asesoría en SEO y rendimiento web.",
    url: "/contacto",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Contacto" }],
  },
};

export default function ContactoPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Contacto</h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        Escríbenos a contacto@mi-sitio.com y te responderemos pronto.
      </p>
    </main>
  );
}
