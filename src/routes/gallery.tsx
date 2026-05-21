import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { Reveal } from "@/components/Reveal";
import { X } from "lucide-react";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import g7 from "@/assets/g7.jpg";
import g8 from "@/assets/g8.jpg";
import { products } from "@/lib/products";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Gallery — RedByte Pickles" },
      { name: "description", content: "A visual journey through our homemade Andhra pickles, powders and traditional preparations." },
    ],
  }),
});

function GalleryPage() {
  const productImages = products.slice(0, 12).map((p) => p.image);
  const all = [g1, g3, g5, g8, g2, g4, g6, g7, ...productImages];

  const [active, setActive] = React.useState<string | null>(null);

  return (
    <>
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#3b0c08] via-[#5b0f0a] to-[#3b0c08] text-[#fff2cc]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#e7b649] font-bold">Visual Stories</p>
            <h1 className="font-bebas text-6xl lg:text-7xl mt-2">Our Gallery</h1>
            <p className="text-[#fff2cc]/80 mt-3 max-w-2xl mx-auto">
              Behind the scenes — traditional preparation, vibrant spices, and the soul of Andhra cuisine.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 bg-[#fff8ee]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
            {all.map((src, i) => (
              <Reveal key={i} delay={(i % 6) * 60} variant="fade" className="mb-4 break-inside-avoid">
                <button onClick={() => setActive(src)} className="block w-full group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all">
                  <img src={src} alt="" loading="lazy" className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3b0c08]/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {active && (
        <div onClick={() => setActive(null)} className="fixed inset-0 z-[80] bg-black/85 backdrop-blur-md grid place-items-center p-6 animate-in fade-in">
          <button onClick={() => setActive(null)} aria-label="Close" className="absolute top-6 right-6 h-11 w-11 grid place-items-center rounded-full bg-white/10 text-white hover:bg-white/20">
            <X className="h-5 w-5" />
          </button>
          <img src={active} alt="" className="max-h-[88vh] max-w-[92vw] rounded-2xl shadow-2xl" />
        </div>
      )}
    </>
  );
}