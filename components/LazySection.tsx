"use client";

import dynamic from "next/dynamic";

// En App Router, `ssr: false` solo se permite dentro de un Client Component,
// por eso este wrapper existe entre page.tsx (Server Component) y LargeComponent.
const DynamicComponent = dynamic(() => import("./LargeComponent"), {
  ssr: false,
  loading: () => <p className="mt-8 text-zinc-500">Cargando componente…</p>,
});

export default function LazySection() {
  return <DynamicComponent />;
}
