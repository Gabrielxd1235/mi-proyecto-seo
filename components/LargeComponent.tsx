"use client";

import { useState } from "react";

// Simula un componente "pesado" que no hace falta en la carga inicial.
export default function LargeComponent() {
  const [open, setOpen] = useState(false);

  return (
    <section className="mt-8 rounded-lg border border-zinc-300 p-6 dark:border-zinc-700">
      <h2 className="text-2xl font-semibold">Componente cargado con lazy loading</h2>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Este código se descargó en un chunk aparte, solo después de cargar la página.
      </p>
      <button
        onClick={() => setOpen(!open)}
        className="mt-4 rounded bg-black px-4 py-2 text-white dark:bg-white dark:text-black"
      >
        {open ? "Ocultar detalles" : "Ver detalles"}
      </button>
      {open && (
        <ul className="mt-4 list-disc pl-6">
          <li>Se carga con next/dynamic.</li>
          <li>ssr: false evita renderizarlo en el servidor.</li>
          <li>Reduce el JavaScript inicial de la página.</li>
        </ul>
      )}
    </section>
  );
}
