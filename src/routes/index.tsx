import { Link } from "react-router-dom";
import { Heart, Leaf, ChefHat, Package, Truck, Star, ArrowRight, Sparkles, Globe } from "lucide-react";
import hero from "@/assets/hero.jpg";
import logo from "@/assets/logo.png";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { products, categories } from "@/lib/products";
import * as React from "react";

export default function Index() {
  const [scrollY, setScrollY] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const featured = products.filter((p) => ["mango","gongura","chicken","karam","ariselu","boondiladdu","prawns","garlic"].includes(p.id));

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[88vh] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ transform: `translateY(${scrollY * 0.25}px) scale(1.1)` }}
        >
          <img src={hero} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#3b0c08]/80 via-[#5b0f0a]/60 to-[#3b0c08]/85" />

        {/* floating chilies */}
        <div className="absolute top-24 left-8 text-5xl animate-float opacity-70" style={{animationDelay:"0s"}}>🌶️</div>
        <div className="absolute top-40 right-16 text-4xl animate-float opacity-60" style={{animationDelay:"1s"}}>🥭</div>
        <div className="absolute bottom-32 left-20 text-4xl animate-float opacity-60" style={{animationDelay:"2s"}}>🧄</div>
        <div className="absolute bottom-20 right-24 text-5xl animate-float opacity-70" style={{animationDelay:"1.5s"}}>🌿</div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 min-h-[88vh] flex items-center">
          <div className="max-w-2xl text-[#fff2cc]">
            <Reveal variant="zoom">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fff2cc]/15 backdrop-blur border border-[#e7b649]/40 mb-6">
                <Sparkles className="h-4 w-4 text-[#e7b649]" />
                <span className="text-xs uppercase tracking-[0.25em] font-semibold">Homemade with Love</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="font-bebas text-6xl sm:text-7xl lg:text-8xl leading-[0.9] mb-4">
                Authentic <br />
                <span className="bg-gradient-to-r from-[#e7b649] via-[#f7d27a] to-[#e7b649] bg-clip-text text-transparent">Homemade Taste</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-lg text-[#fff2cc]/85 leading-relaxed max-w-xl mb-8">
                Traditional Andhra pickles, podis, and sweets crafted with time-honored
                recipes, premium ingredients, and zero preservatives. Straight from our
                kitchen in Nellore to your table.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-wrap gap-3">
                <Link to="/products" className="group inline-flex items-center gap-2 rounded-full bg-[#e7b649] text-[#3b0c08] px-7 py-3.5 font-bold tracking-wide hover:bg-[#f7d27a] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(231,182,73,0.6)] transition-all">
                  Shop Now <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                </Link>
                <Link to="/gallery" className="inline-flex items-center gap-2 rounded-full border-2 border-[#fff2cc]/40 text-[#fff2cc] px-7 py-3.5 font-bold tracking-wide hover:bg-[#fff2cc]/10 backdrop-blur transition-all">
                  Explore Products
                </Link>
              </div>
            </Reveal>
            <Reveal delay={500}>
              <div className="mt-10 flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.2em] text-[#fff2cc]/70">
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#e7b649]" /> Fresh</span>
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#e7b649]" /> Hygienic</span>
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#e7b649]" /> No Preservatives</span>
              </div>
            </Reveal>
          </div>
        </div>

        {/* decorative divider */}
        <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-[#fff8ee] to-transparent" />
      </section>

      {/* HOMEMADE WITH LOVE HIGHLIGHT */}
      <section className="py-16 lg:py-20 bg-[#fff8ee]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="rounded-3xl bg-gradient-to-br from-[#8a1a14] to-[#5b0f0a] p-8 lg:p-12 text-[#fff2cc] shadow-[0_20px_50px_-12px_rgba(138,26,20,0.4)]">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="h-24 w-24 rounded-3xl bg-[#fff2cc]/20 grid place-items-center">
                    <Heart className="h-12 w-12 text-[#e7b649]" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-bebas text-4xl lg:text-5xl tracking-wide mb-3">Homemade with Love</h3>
                  <p className="text-lg text-[#fff2cc]/85 leading-relaxed">Hand-crafted in small batches by traditional cooks using time-honored recipes and premium ingredients.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 lg:py-28 bg-[#fff8ee]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8a1a14] font-bold">Why Choose Us</p>
            <h2 className="font-bebas text-5xl lg:text-6xl text-[#3b2415] mt-2">The RedByte Promise</h2>
            <div className="mt-3 h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-[#c9a14a] to-[#8a1a14]" />
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              { Icon: Leaf, title: "No Preservatives", desc: "100% natural — only spices, oil and salt." },
              { Icon: ChefHat, title: "Traditional Recipes", desc: "Time-honored Andhra recipes from grandma's kitchen." },
              { Icon: Package, title: "Freshly Packed", desc: "Sealed fresh, packed with care, shipped quickly." },
              { Icon: Truck, title: "Free Delivery 5km", desc: "Complimentary delivery within 5km of Nellore." },
              { Icon: Globe, title: "International Couriers Available", desc: "Worldwide delivery — reach your door anywhere." },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 80} className="group">
                <div className="h-full rounded-3xl bg-white p-6 border border-[#e7b649]/30 shadow-[0_8px_30px_-12px_rgba(120,30,20,0.18)] hover:shadow-[0_20px_50px_-15px_rgba(138,26,20,0.4)] hover:-translate-y-1 transition-all duration-500">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#8a1a14] to-[#5b0f0a] text-[#fff2cc] grid place-items-center mb-4 group-hover:rotate-6 group-hover:scale-110 transition">
                    <f.Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-bebas text-2xl text-[#3b2415] tracking-wide">{f.title}</h3>
                  <p className="text-sm text-[#3b2415]/70 mt-2 leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#fff8ee] to-[#fff2cc]/50 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#e7b649]/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#8a1a14]/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8a1a14] font-bold">Our Collections</p>
            <h2 className="font-bebas text-5xl lg:text-6xl text-[#3b2415] mt-2">Explore Categories</h2>
            <div className="mt-3 h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-[#c9a14a] to-[#8a1a14]" />
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((c, i) => {
              const first = products.find((p) => p.category === c)!;
              return (
                <Reveal key={c} delay={i * 100} variant="zoom">
                  <Link to="/products"
                    className="group block relative aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-[#e7b649]/40 shadow-xl">
                    <img src={first.image} alt={c} loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3b0c08]/95 via-[#3b0c08]/40 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 text-[#fff2cc]">
                      <h3 className="font-bebas text-3xl tracking-wide">{c}</h3>
                      <div className="mt-2 inline-flex items-center gap-2 text-sm text-[#e7b649] font-semibold opacity-90 group-hover:gap-3 transition-all">
                        Browse <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-20 lg:py-28 bg-[#fff8ee]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8a1a14] font-bold">Bestsellers</p>
            <h2 className="font-bebas text-5xl lg:text-6xl text-[#3b2415] mt-2">Featured Favourites</h2>
            <div className="mt-3 h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-[#c9a14a] to-[#8a1a14]" />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}><ProductCard product={p} /></Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/products" className="inline-flex items-center gap-2 rounded-full bg-[#8a1a14] text-[#fff2cc] px-8 py-3.5 font-bold tracking-wide hover:bg-[#5b0f0a] hover:-translate-y-0.5 transition-all">
              View All Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#3b0c08] via-[#5b0f0a] to-[#3b0c08] text-[#fff2cc] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle at 20% 30%, #e7b649 0, transparent 50%), radial-gradient(circle at 80% 70%, #c9421a 0, transparent 50%)"
        }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-[#e7b649] font-bold">Loved By Foodies</p>
            <h2 className="font-bebas text-5xl lg:text-6xl mt-2">What Our Customers Say</h2>
            <div className="mt-3 h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-[#c9a14a] to-[#e7b649]" />
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "Lakshmi P.", t: "The avakaya tastes exactly like my grandmother's. Pure nostalgia in every bite!" },
              { n: "Ravi Teja", t: "Chicken pickle is fire 🔥. Hygienic packing and lightning fast delivery in Nellore." },
              { n: "Anitha S.", t: "Karivepaku podi and bellam sunnundalu are absolute must-buys. Quality is top-notch." },
            ].map((r, i) => (
              <Reveal key={r.n} delay={i * 100}>
                <div className="h-full rounded-3xl p-6 bg-[#fff2cc]/10 backdrop-blur border border-[#e7b649]/30 hover:bg-[#fff2cc]/15 transition">
                  <div className="flex gap-1 mb-3 text-[#e7b649]">
                    {Array.from({length:5}).map((_,k)=><Star key={k} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="text-[#fff2cc]/90 leading-relaxed italic">"{r.t}"</p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#e7b649] to-[#c9a14a] grid place-items-center font-bold text-[#3b0c08]">{r.n[0]}</div>
                    <div>
                      <div className="font-semibold">{r.n}</div>
                      <div className="text-xs text-[#fff2cc]/60">Verified Customer</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#fff8ee]">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <Reveal variant="zoom">
            <div className="relative overflow-hidden rounded-3xl p-10 lg:p-16 bg-gradient-to-br from-[#e7b649] via-[#f7d27a] to-[#c9a14a] shadow-2xl">
              <div className="absolute -right-10 -bottom-10 opacity-30 text-[200px] leading-none">🥭</div>
              <div className="relative max-w-2xl">
                <p className="text-xs uppercase tracking-[0.3em] text-[#5b0f0a] font-bold">Book Your Preorder</p>
                <h3 className="font-bebas text-5xl lg:text-6xl text-[#3b0c08] mt-2">Get 10% Off Your First Order</h3>
                <p className="text-[#3b0c08]/80 mt-3">Order now via WhatsApp and enjoy authentic Andhra flavors delivered fresh.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link to="/products" className="inline-flex items-center gap-2 rounded-full bg-[#3b0c08] text-[#fff2cc] px-7 py-3 font-bold hover:bg-[#5b0f0a] transition">
                    Order Now <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border-2 border-[#3b0c08]/30 text-[#3b0c08] px-7 py-3 font-bold hover:bg-[#3b0c08]/10 transition">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
