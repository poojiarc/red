import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { categories, products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/products")({
  component: ProductsPage,
  head: () => ({
    meta: [
      { title: "Shop Pickles, Powders & Sweets — RedByte Pickles" },
      { name: "description", content: "Browse our full range of authentic Andhra homemade pickles, podis, non-veg pickles and traditional sweets." },
    ],
  }),
});

function ProductsPage() {
  const [active, setActive] = React.useState<string>("All");
  const [query, setQuery] = React.useState("");

  const filtered = products.filter((p) =>
    (active === "All" || p.category === active) &&
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  const tabs = ["All", ...categories];

  return (
    <>
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#3b0c08] via-[#5b0f0a] to-[#3b0c08] text-[#fff2cc] overflow-hidden">
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage:"radial-gradient(circle at 30% 20%, #e7b649 0, transparent 40%), radial-gradient(circle at 70% 80%, #c9421a 0, transparent 40%)"
        }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#e7b649] font-bold">Our Shop</p>
            <h1 className="font-bebas text-6xl lg:text-7xl mt-2">Premium Homemade Range</h1>
            <p className="text-[#fff2cc]/80 mt-3 max-w-2xl mx-auto">From classic mango avakaya to non-veg pickles and traditional sweets — every jar made with love.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-[#fff8ee]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between mb-10">
            <div className="flex flex-wrap gap-2">
              {tabs.map((t) => (
                <button
                  key={t}
                  onClick={() => setActive(t)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-semibold border transition-all",
                    active === t
                      ? "bg-[#8a1a14] text-[#fff2cc] border-[#8a1a14] shadow-md"
                      : "bg-white text-[#3b2415] border-[#e7b649]/40 hover:border-[#8a1a14] hover:text-[#8a1a14]"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#3b2415]/50" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="pl-10 pr-4 py-2.5 w-full lg:w-72 rounded-full bg-white border border-[#e7b649]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#8a1a14]/30"
              />
            </div>
          </Reveal>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-[#3b2415]/60">No products match your search.</div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((p, i) => (
                <Reveal key={p.id} delay={(i % 8) * 60}><ProductCard product={p} /></Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}