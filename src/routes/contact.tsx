import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Send } from "lucide-react";
import { ADDRESS, EMAIL, PHONE, PHONE_ALT, WHATSAPP } from "@/lib/products";
import * as React from "react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — RedByte Pickles" },
      { name: "description", content: "Reach out to RedByte Pickles for orders, queries or bulk requests. Located in Nellore, Andhra Pradesh." },
    ],
  }),
});

function ContactPage() {
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(`Hi RedByte Pickles,\nName: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank");
  };

  return (
    <>
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#3b0c08] via-[#5b0f0a] to-[#3b0c08] text-[#fff2cc]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#e7b649] font-bold">Get In Touch</p>
            <h1 className="font-bebas text-6xl lg:text-7xl mt-2">Contact Us</h1>
            <p className="text-[#fff2cc]/80 mt-3 max-w-2xl mx-auto">We'd love to hear from you. Reach out for orders, bulk enquiries or just to say hi!</p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-[#fff8ee]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <Reveal variant="left" className="space-y-5">
            {[
              { Icon: Phone, t: "Call Us", lines: [PHONE, PHONE_ALT], href: `tel:${PHONE.replace(/\s/g,"")}` },
              { Icon: Mail, t: "Email", lines: [EMAIL], href: `mailto:${EMAIL}` },
              { Icon: MapPin, t: "Visit Us", lines: [ADDRESS] },
              { Icon: Clock, t: "Business Hours", lines: ["Mon – Sun: 9 AM – 10 PM"] },
            ].map((c) => (
              <a key={c.t} href={c.href ?? "#"} className="flex gap-4 p-5 rounded-2xl bg-white border border-[#e7b649]/30 shadow-md hover:-translate-y-0.5 hover:shadow-xl transition-all">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#8a1a14] to-[#5b0f0a] text-[#fff2cc] grid place-items-center shrink-0">
                  <c.Icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bebas text-xl tracking-wide text-[#3b2415]">{c.t}</h4>
                  {c.lines.map((l) => <p key={l} className="text-sm text-[#3b2415]/75 leading-relaxed">{l}</p>)}
                </div>
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <a href="https://www.facebook.com/share/14ZnQC4rTzv/" target="_blank" rel="noreferrer" className="h-11 w-11 grid place-items-center rounded-full bg-[#8a1a14] text-[#fff2cc] hover:bg-[#5b0f0a] hover:-translate-y-0.5 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=sea1ebf" target="_blank" rel="noreferrer" className="h-11 w-11 grid place-items-center rounded-full bg-[#8a1a14] text-[#fff2cc] hover:bg-[#5b0f0a] hover:-translate-y-0.5 transition">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </Reveal>

          <Reveal variant="right">
            <form onSubmit={onSubmit} className="rounded-3xl bg-white p-7 border border-[#e7b649]/30 shadow-xl space-y-4">
              <h3 className="font-bebas text-3xl text-[#3b2415] tracking-wide">Send a Message</h3>
              <p className="text-sm text-[#3b2415]/60 -mt-3">We'll respond via WhatsApp.</p>
              <input required value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} placeholder="Your name" className="w-full px-4 py-3 rounded-xl border border-[#e7b649]/40 bg-[#fff8ee] focus:outline-none focus:ring-2 focus:ring-[#8a1a14]/30" />
              <input required type="email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} placeholder="Email" className="w-full px-4 py-3 rounded-xl border border-[#e7b649]/40 bg-[#fff8ee] focus:outline-none focus:ring-2 focus:ring-[#8a1a14]/30" />
              <textarea required rows={5} value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})} placeholder="Your message..." className="w-full px-4 py-3 rounded-xl border border-[#e7b649]/40 bg-[#fff8ee] focus:outline-none focus:ring-2 focus:ring-[#8a1a14]/30 resize-none" />
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#8a1a14] to-[#5b0f0a] text-[#fff2cc] py-3.5 font-bold tracking-wide hover:shadow-[0_12px_30px_-8px_rgba(138,26,20,0.6)] hover:-translate-y-0.5 transition-all">
                <Send className="h-4 w-4" /> Send via WhatsApp
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}