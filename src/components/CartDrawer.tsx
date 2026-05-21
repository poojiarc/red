import { Minus, Plus, ShoppingBag, Trash2, X, User, Phone, MapPin } from "lucide-react";
import { useMemo, useState } from "react";
import { useCart } from "@/lib/cart";
import { WHATSAPP } from "@/lib/products";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";

export function CartDrawer() {
  const { items, open, setOpen, remove, setQty, total, clear } = useCart();
  const itemCount = useMemo(() => items.reduce((sum, i) => sum + i.quantity, 0), [items]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState<Partial<Record<'name'|'phone'|'address', string>>>({});
  

  const buildOrderText = () => {
    const lines = items.map((i) => `• ${i.product.name} (${i.product.unit}) × ${i.quantity} = ₹${i.product.price * i.quantity}`);
    const header = `🌶️ *New Order — RedByte Pickles* 🌶️\n\n`;
    const customer = `*Customer Details*\n👤 Name: ${name || "(not provided)"}\n📞 Phone: ${phone || "(not provided)"}\n📍 Address: ${address || "(not provided)"}\n\n`;
    const order = `*Order*\n${lines.join("\n")}\n\n*Total: ₹${total}*`;
    return encodeURIComponent(header + customer + order + "\n\nPlease confirm availability and delivery.");
  };

  const validate = () => {
    const next: Partial<Record<'name'|'phone'|'address', string>> = {};
    if (!name || name.trim().length < 2) next.name = "Enter your full name";
    if (!phone || !/^\+?[0-9()\-\s]{10,16}$/.test(phone)) next.phone = "Enter a valid phone number";
    if (!address || address.trim().length < 8) next.address = "Enter a delivery address";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const checkout = () => {
    if (items.length === 0) return toast.error("Your cart is empty.");
    if (!validate()) return toast.error("Please complete delivery details.");
    const text = buildOrderText();
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank");
  };

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity",
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      />
      <aside
        className={cn(
          "fixed top-0 right-0 z-[70] h-full w-full sm:w-[420px] bg-[#fff8ee] shadow-2xl transition-transform duration-500 flex flex-col",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="px-5 py-4 flex items-center justify-between bg-gradient-to-r from-[#8a1a14] to-[#5b0f0a] text-[#fff2cc]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            <div>
              <h3 className="font-bebas text-2xl tracking-wider">Your Cart</h3>
              <p className="text-xs text-[#fff2cc]/80">{itemCount} item{itemCount !== 1 ? "s" : ""}</p>
            </div>
            <span className="text-xs bg-[#e7b649] text-[#3b2415] px-2 py-0.5 rounded-full font-bold">{itemCount}</span>
          </div>
          <button onClick={() => setOpen(false)} aria-label="Close" className="h-9 w-9 grid place-items-center rounded-full hover:bg-white/10">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-[#3b2415]/70">
              <div className="h-20 w-20 rounded-full bg-[#fff2cc] grid place-items-center mb-4">
                <ShoppingBag className="h-10 w-10 text-[#8a1a14]" />
              </div>
              <p className="font-semibold">Your cart is empty</p>
              <p className="text-sm mt-1">Add some delicious pickles!</p>
              <Link to="/products" onClick={() => setOpen(false)}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#8a1a14] text-[#fff2cc] px-5 py-2.5 text-sm font-semibold hover:bg-[#5b0f0a] transition">
                Browse Products
              </Link>
            </div>
          ) : (
            <ul className="space-y-3">
              {items.map((i) => (
                <li key={i.product.id} className="flex gap-3 p-3 rounded-2xl bg-white border border-[#e7b649]/30 shadow-sm">
                  <img src={i.product.image} alt={i.product.name} loading="lazy" className="h-20 w-20 rounded-xl object-cover" />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-2">
                      <h4 className="font-semibold text-[#3b2415] truncate">{i.product.name}</h4>
                      <button onClick={() => remove(i.product.id)} className="text-[#8a1a14] hover:scale-110 transition" aria-label="Remove">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-xs text-[#3b2415]/60">{i.product.unit}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="inline-flex items-center rounded-full border border-[#e7b649]/60 bg-[#fff2cc]">
                        <button onClick={() => setQty(i.product.id, i.quantity - 1)} className="h-7 w-7 grid place-items-center text-[#8a1a14]"><Minus className="h-3 w-3" /></button>
                        <span className="px-2 text-sm font-semibold w-7 text-center">{i.quantity}</span>
                        <button onClick={() => setQty(i.product.id, i.quantity + 1)} className="h-7 w-7 grid place-items-center text-[#8a1a14]"><Plus className="h-3 w-3" /></button>
                      </div>
                      <span className="font-bebas text-xl text-[#8a1a14]">₹{i.product.price * i.quantity}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-[#e7b649]/30 px-5 py-4 bg-[#fff2cc]/60 space-y-3">
            <div className="rounded-2xl bg-white p-4 border border-[#e7b649]/30 shadow-sm space-y-3">
              <div className="text-sm text-[#3b2415]/80">Delivery details</div>
              <label className="text-sm">
                <div className="flex items-center gap-2 mb-1">
                  <User className="h-4 w-4 text-[#8a1a14]" />
                  <span className="text-xs text-[#3b2415]/80">Full name</span>
                </div>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full px-3 py-2 rounded-xl border border-[#e7b649]/30 bg-[#fff8ee] focus:outline-none"
                />
                {errors.name && <div className="text-[12px] text-destructive mt-1">{errors.name}</div>}
              </label>

              <label className="text-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Phone className="h-4 w-4 text-[#8a1a14]" />
                  <span className="text-xs text-[#3b2415]/80">Phone number</span>
                </div>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/[^0-9+()\-\s]/g, ""))}
                  placeholder="Phone number"
                  className="w-full px-3 py-2 rounded-xl border border-[#e7b649]/30 bg-[#fff8ee] focus:outline-none"
                />
                {errors.phone && <div className="text-[12px] text-destructive mt-1">{errors.phone}</div>}
              </label>

              <label className="text-sm">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="h-4 w-4 text-[#8a1a14]" />
                  <span className="text-xs text-[#3b2415]/80">Delivery address</span>
                </div>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  rows={3}
                  placeholder="House / street / area / landmark"
                  className="w-full px-3 py-2 rounded-xl border border-[#e7b649]/30 bg-[#fff8ee] focus:outline-none resize-none"
                />
                {errors.address && <div className="text-[12px] text-destructive mt-1">{errors.address}</div>}
              </label>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-[#3b2415]/70">Subtotal</span>
              <span className="font-bebas text-3xl text-[#8a1a14]">₹{total}</span>
            </div>
            <button
              onClick={checkout}
              className="block w-full text-center rounded-full bg-gradient-to-r from-[#8a1a14] to-[#5b0f0a] text-[#fff2cc] py-3 font-bold tracking-wide hover:shadow-[0_8px_24px_-6px_rgba(138,26,20,0.6)] hover:-translate-y-0.5 transition"
            >
              Checkout via WhatsApp
            </button>
            <button onClick={clear} className="w-full text-xs text-[#3b2415]/60 hover:text-[#8a1a14]">Clear cart</button>
          </div>
        )}
      </aside>
    </>
  );
}