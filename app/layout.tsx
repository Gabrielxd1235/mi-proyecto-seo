import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BASE_URL, SITE_NAME } from "@/lib/site";

// Fuente de Google optimizada: se descarga en build y se sirve desde el mismo dominio.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: "Aprende sobre optimización SEO y rendimiento en Next.js.",
  // Verificación de propiedad en Google Search Console (etiqueta HTML).
  verification: {
    google: "6O2hMAfKyH_XXBWXw2k6qSTDWv8MCZ0N2m5AQ9gQlnc",
  },
  openGraph: {
    siteName: SITE_NAME,
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className={`${inter.className} min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}
