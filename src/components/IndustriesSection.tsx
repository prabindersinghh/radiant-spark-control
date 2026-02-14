import { Droplets, Mountain, Car, Truck, UtensilsCrossed, Zap, Fuel, Factory } from "lucide-react";

const industries = [
  { icon: Droplets, title: "Wastewater", desc: "Reliable lift station operation including pump control for safe and sanitary conditions." },
  { icon: Mountain, title: "Aggregate", desc: "Developing products and systems derived from production for aggregate industries." },
  { icon: Car, title: "Automobiles", desc: "25+ years helping automotive clients realize opportunities through automation." },
  { icon: Truck, title: "Logistics", desc: "Strategic optimization of warehouse control systems for supply chain excellence." },
  { icon: UtensilsCrossed, title: "Food & Beverage", desc: "Software and hardware applications meeting ever-changing consumer and market demand." },
  { icon: Zap, title: "Power Plant", desc: "Supporting energy companies investing in alternative and renewable energy sources." },
  { icon: Fuel, title: "Oil & Gas", desc: "Turnkey automation solutions for Upstream, Midstream, and Downstream sectors." },
  { icon: Factory, title: "Manufacturing", desc: "Transforming manufacturing processes through strategic automation solutions." },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-24 gradient-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-heading font-bold tracking-widest uppercase text-gold">Sectors</span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-primary-foreground mt-3">
            Industries We Serve
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="group relative bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-6 hover:bg-primary-foreground/10 hover:border-gold/30 transition-all duration-300 cursor-pointer"
            >
              <ind.icon className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-heading font-bold text-primary-foreground mb-2">{ind.title}</h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
