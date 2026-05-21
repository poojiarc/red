import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Heart, Leaf, Award, Users } from "lucide-react";
import g1 from "@/assets/g1.jpg";
import g3 from "@/assets/g3.jpg";
import g8 from "@/assets/g8.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — RedByte Pickles" },
      { name: "description", content: "RedByte Pickles is a premium Andhra brand offering authentic homemade pickles, powders and traditional sweets, made with time-honored recipes." },
    ],
  }),
});

function AboutPage() {
  return (
    <>
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#3b0c08] via-[#5b0f0a] to-[#3b0c08] text-[#fff2cc]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#e7b649] font-bold">Our Story</p>
            <h1 className="font-bebas text-6xl lg:text-7xl mt-2">About RedByte Pickles</h1>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-[#fff8ee]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal variant="left">
            <img src={g1} alt="Traditional pickle preparation" loading="lazy" className="rounded-3xl shadow-2xl ring-1 ring-[#e7b649]/30" />
          </Reveal>
          <Reveal variant="right">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8a1a14] font-bold">Crafted with Tradition</p>
            <h2 className="font-bebas text-5xl text-[#3b2415] mt-2">A Taste of Andhra in Every Jar</h2>
            <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-[#c9a14a] to-[#8a1a14]" />
            <p className="mt-5 text-[#3b2415]/80 leading-relaxed">
              RedByte Pickles is a premium pickle brand that provides a diverse selection of
              pickled vegetables, as well as non-vegetarian choices like meat and seafood.
              Our pickles are carefully prepared using time-honored recipes and top-quality
              ingredients, guaranteeing a delightful fusion of flavors and textures in every packet.
            </p>
            <p className="mt-4 text-[#3b2415]/80 leading-relaxed">
              From sun-dried red chilies to fresh-pressed mustard oil, every ingredient is
              hand-picked. Every batch is tasted, tested, and packed with care in our Nellore kitchen.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#fff8ee] to-[#fff2cc]/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-bebas text-5xl text-[#3b2415]">Our Values</h2>
            <div className="mt-3 h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-[#c9a14a] to-[#8a1a14]" />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { Icon: Heart, t: "Authenticity", d: "Time-honored recipes, no shortcuts." },
              { Icon: Leaf, t: "Pure & Natural", d: "Zero preservatives, only real spices." },
              { Icon: Award, t: "Premium Quality", d: "Top-grade ingredients, sealed fresh." },
              { Icon: Users, t: "Made With Love", d: "Small batches by traditional cooks." },
            ].map((v, i) => (
              <Reveal key={v.t} delay={i*80}>
                <div className="rounded-3xl bg-white p-6 border border-[#e7b649]/30 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-500 h-full">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#8a1a14] to-[#5b0f0a] text-[#fff2cc] grid place-items-center mb-3">
                    <v.Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bebas text-2xl tracking-wide text-[#3b2415]">{v.t}</h3>
                  <p className="text-sm text-[#3b2415]/70 mt-1">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#fff8ee]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal variant="left">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8a1a14] font-bold">Our Process</p>
            <h2 className="font-bebas text-5xl text-[#3b2415] mt-2">From Kitchen to Your Table</h2>
            <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-[#c9a14a] to-[#8a1a14]" />
            <ol className="mt-6 space-y-4">
              {[
                ["01", "Source", "We hand-pick fresh produce and premium spices from trusted local farms."],
                ["02", "Prepare", "Traditional cooks slow-cook each batch using grandma's age-old recipes."],
                ["03", "Cure & Mature", "Pickles rest in clay jars to develop deep, complex flavors."],
                ["04", "Pack & Deliver", "Sealed fresh, packed with care, and delivered to your doorstep."],
              ].map(([n,t,d], i) => (
                <li key={n} className="flex gap-4">
                  <div className="font-bebas text-3xl text-[#e7b649]" style={{textShadow:"0 2px 0 #8a1a14"}}>{n}</div>
                  <div>
                    <h4 className="font-bebas text-2xl text-[#3b2415] tracking-wide">{t}</h4>
                    <p className="text-sm text-[#3b2415]/70">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal variant="right" className="grid grid-cols-2 gap-4">
            <img src={g3} alt="" loading="lazy" className="rounded-3xl shadow-xl row-span-2 h-full object-cover" />
            <img src={g8} alt="" loading="lazy" className="rounded-3xl shadow-xl h-full object-cover" />
            <img src={g1} alt="" loading="lazy" className="rounded-3xl shadow-xl h-full object-cover" />
          </Reveal>
        </div>
      </section>
    </>
  );
}