import * as React from "react";
import { toast } from "sonner";
import type { Product } from "./products";

export type CartItem = { product: Product; quantity: number };

type CartCtx = {
  items: CartItem[];
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (p: Product, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  count: number;
  total: number;
};

const Ctx = React.createContext<CartCtx | null>(null);
const KEY = "redbyte_cart_v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = React.useState<CartItem[]>([]);
  const [open, setOpen] = React.useState(false);
  const loaded = React.useRef(false);

  React.useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
    loaded.current = true;
  }, []);

  React.useEffect(() => {
    if (!loaded.current) return;
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch {}
  }, [items]);

  const add = (p: Product, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === p.id);
      if (existing) {
        return prev.map((i) => i.product.id === p.id ? { ...i, quantity: i.quantity + qty } : i);
      }
      return [...prev, { product: p, quantity: qty }];
    });
    toast.success(`${p.name} added to cart`);
  };
  const remove = (id: string) => setItems((p) => p.filter((i) => i.product.id !== id));
  const setQty = (id: string, qty: number) =>
    setItems((p) => p.map((i) => i.product.id === id ? { ...i, quantity: Math.max(1, qty) } : i));
  const clear = () => setItems([]);
  const count = items.reduce((s, i) => s + i.quantity, 0);
  const total = items.reduce((s, i) => s + i.quantity * i.product.price, 0);

  return (
    <Ctx.Provider value={{ items, open, setOpen, add, remove, setQty, clear, count, total }}>
      {children}
    </Ctx.Provider>
  );
}

export function useCart() {
  const c = React.useContext(Ctx);
  if (!c) throw new Error("useCart must be used within CartProvider");
  return c;
}