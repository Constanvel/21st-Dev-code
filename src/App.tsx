import { useState } from "react";
import CarouselStacked from "@/components/ui/carousel-07";
import { Component as VintageKeyboard } from "@/components/ui/vintage-keyboard";
import { FlipDiskMatrix } from "@/components/ui/flip-disk-matrix";
import CoverflowCarouselDemo from "@/components/coverflow-carousel-demo";

const PROJECTS = [
  { id: "carousel", label: "Carousel", render: () => <CarouselStacked /> },
  { id: "keyboard", label: "Keyboard", render: () => <VintageKeyboard /> },
  { id: "flipdisk", label: "Flip Disk", render: () => <FlipDiskMatrix /> },
  { id: "coverflow", label: "Coverflow", render: () => <CoverflowCarouselDemo /> },
];

export default function App() {
  const [active, setActive] = useState(PROJECTS[0].id);

  return (
    <>
      <nav className="fixed top-4 left-1/2 z-[100] -translate-x-1/2 rounded-full border border-black/10 bg-white/80 p-1 shadow-lg backdrop-blur-md">
        {PROJECTS.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setActive(p.id)}
            aria-current={active === p.id}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              active === p.id
                ? "bg-neutral-900 text-white"
                : "text-neutral-600 hover:text-neutral-900"
            }`}
          >
            {p.label}
          </button>
        ))}
      </nav>

      <main className="flex min-h-svh w-full items-center justify-center">
        {PROJECTS.find((p) => p.id === active)?.render()}
      </main>
    </>
  );
}
