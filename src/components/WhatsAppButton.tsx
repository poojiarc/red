import { MessageCircle } from "lucide-react";
import { WHATSAPP } from "@/lib/products";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi RedByte Pickles, I'd like to place an order.")}`}
      target="_blank" rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 grid place-items-center rounded-full bg-[#25d366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.7)] hover:scale-110 transition animate-float"
    >
      <span className="absolute inset-0 rounded-full bg-[#25d366]/40 animate-ping" />
      <MessageCircle className="relative h-7 w-7" />
    </a>
  );
}