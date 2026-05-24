import * as React from "react";
import { Minus, Plus, ShoppingCart, CheckCircle2, Trash2 } from "lucide-react";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart";

export function ProductCard({ product }: { product: Product }) {
  const { add, remove } = useCart();
  const [qty, setQty] = React.useState(1);
  const [added, setAdded] = React.useState(false);
  const [selectedVariant, setSelectedVariant] = React.useState(product.variants?.[product.variants.length - 1]?.weight || product.unit);

  const currentPrice = product.variants
    ? product.variants.find((v) => v.weight === selectedVariant)?.price || product.price
    : product.price;

  const currentWeight = selectedVariant;

  const handleAdd = () => {
    add(product, qty);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1400);
  };

  const handleRemove = () => {
    remove(product.id);
    setAdded(false);
  };

  return (
    <article className="group relative rounded-3xl bg-white border border-[#e7b649]/30 shadow-[0_8px_30px_-12px_rgba(120,30,20,0.2)] overflow-hidden hover:shadow-[0_20px_50px_-12px_rgba(138,26,20,0.45)] hover:-translate-y-1 transition-all duration-500">
      <div className="relative aspect-square overflow-hidden bg-[#fff2cc]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={800}
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
        <span className="absolute top-3 left-3 inline-flex items-center text-[10px] font-bold uppercase tracking-wider bg-[#fff2cc]/95 backdrop-blur text-[#8a1a14] px-3 py-1 rounded-full ring-1 ring-[#e7b649]/60">
          {product.category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-bebas text-2xl tracking-wide text-[#3b2415]">{product.name}</h3>
        <p className="text-xs text-[#3b2415]/60 mb-3">Homemade</p>
        
        {product.variants && product.variants.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {product.variants.map((v) => (
                <button
                  key={v.weight}
                  onClick={() => setSelectedVariant(v.weight)}
                  className={`px-4 py-2 rounded-full font-semibold text-sm transition-all ${
                    selectedVariant === v.weight
                      ? "bg-red-600 text-white"
                      : "bg-white border-2 border-[#e7b649]/40 text-[#3b2415] hover:border-[#8a1a14]"
                  }`}
                >
                  {v.weight}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-baseline gap-1 mb-4">
          <span className="font-bebas text-3xl text-red-600">₹{currentPrice}</span>
          <span className="text-xs text-[#3b2415]/60">/ {currentWeight}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center rounded-full border border-[#e7b649]/60 bg-[#fff2cc]">
            <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="h-9 w-9 grid place-items-center text-[#8a1a14]"><Minus className="h-3.5 w-3.5" /></button>
            <span className="px-2 text-sm font-semibold w-8 text-center">{qty}</span>
            <button onClick={() => setQty((q) => q + 1)} className="h-9 w-9 grid place-items-center text-[#8a1a14]"><Plus className="h-3.5 w-3.5" /></button>
          </div>
          <button
            onClick={handleAdd}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-green-100 text-green-700 px-4 h-9 text-sm font-semibold hover:bg-green-200 transition"
          >
            {added ? (
              <>
                <CheckCircle2 className="h-4 w-4" /> In Cart
              </>
            ) : (
              <>
                <ShoppingCart className="h-4 w-4" /> Add
              </>
            )}
          </button>
          {added && (
            <button
              onClick={handleRemove}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-100 text-orange-700 px-4 h-9 text-sm font-semibold hover:bg-orange-200 transition"
            >
              <Trash2 className="h-4 w-4" /> Remove
            </button>
          )}
        </div>
      </div>
    </article>
  );
}