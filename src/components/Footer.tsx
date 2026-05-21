import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Clock, Heart } from "lucide-react";
import logo from "@/assets/logo.png";
import { ADDRESS, EMAIL, PHONE, PHONE_ALT } from "@/lib/products";

export function Footer() {
  return (
    <footer className="relative mt-24 text-[#fff2cc] overflow-hidden">
      {/* spice gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3b0c08] via-[#5b0f0a] to-[#2a0805]" />
      <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{
        backgroundImage: "radial-gradient(circle at 20% 20%, #e7b649 0, transparent 40%), radial-gradient(circle at 80% 80%, #c9421a 0, transparent 40%)"
      }} />

      {/* decorative top wave */}
      <div className="relative h-4 bg-gradient-to-r from-[#c9a14a] via-[#e7b649] to-[#c9a14a]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-16 pb-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-14 w-14 rounded-full overflow-hidden ring-2 ring-[#e7b649] shadow-lg">
                <img src={logo} alt="RedByte Pickles" className="h-full w-full object-cover" />
              </div>
              <div>
                <div className="font-bebas tracking-wider text-2xl text-[#e7b649]">REDBYTE</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#fff2cc]/80">Pickles</div>
              </div>
            </div>
            <p className="text-sm text-[#fff2cc]/80 leading-relaxed">
              Authentic Andhra homemade pickles, powders, and traditional sweets — crafted
              with time-honored recipes, premium ingredients, and a whole lot of love.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/share/14ZnQC4rTzv/" target="_blank" rel="noreferrer"
                 className="h-10 w-10 grid place-items-center rounded-full bg-[#fff2cc]/10 hover:bg-[#e7b649] hover:text-[#3b0c08] transition-all hover:-translate-y-0.5">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=sea1ebf" target="_blank" rel="noreferrer"
                 className="h-10 w-10 grid place-items-center rounded-full bg-[#fff2cc]/10 hover:bg-[#e7b649] hover:text-[#3b0c08] transition-all hover:-translate-y-0.5">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bebas text-xl tracking-widest text-[#e7b649] mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[["/","Home"],["/products","Products"],["/gallery","Gallery"],["/about","About"],["/contact","Contact"]].map(([to,label]) => (
                <li key={to}>
                  <Link to={to} className="text-[#fff2cc]/80 hover:text-[#e7b649] hover:pl-2 transition-all inline-flex">
                    → {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bebas text-xl tracking-widest text-[#e7b649] mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-[#fff2cc]/85">
              <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-[#e7b649] shrink-0" />
                <span>{PHONE}<br />{PHONE_ALT}</span>
              </li>
              <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-[#e7b649] shrink-0" />
                <a href={`mailto:${EMAIL}`} className="hover:text-[#e7b649]">{EMAIL}</a>
              </li>
              <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-[#e7b649] shrink-0" />
                <span className="leading-relaxed">{ADDRESS}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bebas text-xl tracking-widest text-[#e7b649] mb-4">Business Hours</h4>
            <ul className="space-y-2 text-sm text-[#fff2cc]/85">
              <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-[#e7b649]" /> Mon – Fri: 9 AM – 10 PM</li>
              <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-[#e7b649]" /> Saturday: 9 AM – 10 PM</li>
              <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-[#e7b649]" /> Sunday: 9 AM – 10 PM</li>
            </ul>
            <div className="mt-4 p-3 rounded-xl bg-[#fff2cc]/10 border border-[#e7b649]/30 text-xs">
              🚚 Free delivery within 5km of Nellore
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#fff2cc]/15 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-[#fff2cc]/70">
          <div>© {new Date().getFullYear()} RedByte Pickles. All rights reserved.</div>
          <div className="flex items-center justify-center gap-1">
            Made with <Heart className="inline h-4 w-4 mx-1 fill-red-500 text-red-500" /> by
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-orange-400 hover:underline"
            >
              <img
                src="https://www.staffarc.in/images/Staffarc-logo.png"
                alt="StaffArc logo"
                className="h-5 w-5 object-contain"
              />
              StaffArc
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}