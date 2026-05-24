import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ShoppingCart, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { useCart } from "@/lib/cart";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const { count, setOpen } = useCart();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobile, setMobile] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => { setMobile(false); }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#fff8ee]/85 backdrop-blur-xl shadow-[0_4px_20px_-8px_rgba(120,30,20,0.25)]"
          : "bg-gradient-to-b from-[#fff8ee] to-[#fff8ee]/70 backdrop-blur-md"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-[#e7b649] shadow-md group-hover:scale-105 transition">
              <img src={logo} alt="RedByte Pickles" className="h-full w-full object-cover" />
            </div>
            <div className="leading-tight">
              <div className="font-bebas tracking-wider text-2xl text-[#8a1a14]">REDBYTE</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#a86a1d] font-semibold">Pickles</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const active = location.pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={cn(
                    "relative px-4 py-2 rounded-full text-sm font-semibold transition-all",
                    active ? "text-[#8a1a14]" : "text-[#3b2415] hover:text-[#8a1a14]"
                  )}
                >
                  <span>{l.label}</span>
                  <span
                    className={cn(
                      "absolute left-1/2 -bottom-0.5 h-0.5 -translate-x-1/2 rounded bg-gradient-to-r from-[#c9a14a] to-[#8a1a14] transition-all",
                      active ? "w-6" : "w-0 group-hover:w-6"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setOpen(true)}
              aria-label="Open cart"
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#8a1a14] to-[#5b0f0a] text-[#fff2cc] shadow-lg hover:shadow-[0_8px_24px_-6px_rgba(138,26,20,0.6)] hover:scale-105 transition"
            >
              <ShoppingCart className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-[#e7b649] text-[#3b2415] text-[11px] font-bold flex items-center justify-center ring-2 ring-[#fff8ee]">
                  {count}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobile((v) => !v)}
              aria-label="Toggle menu"
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#fff2cc] text-[#8a1a14] border border-[#e7b649]/50"
            >
              {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-500 bg-[#fff8ee] border-t border-[#e7b649]/30",
          mobile ? "max-h-96" : "max-h-0"
        )}
      >
        <nav className="px-6 py-4 flex flex-col">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              className="py-3 border-b border-[#e7b649]/20 text-[#3b2415] font-semibold hover:text-[#8a1a14] hover:translate-x-1 transition-all"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}