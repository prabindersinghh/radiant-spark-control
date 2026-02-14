import { Link } from "react-router-dom";

import wastewaterThumb from "@/assets/wastewater-thumb.jpg";
import aggregateThumb from "@/assets/aggregate-thumb.jpg";
import automobilesThumb from "@/assets/automobiles-thumb.jpg";
import logisticsThumb from "@/assets/logistics-thumb.jpg";
import foodBeverageThumb from "@/assets/food-beverage-thumb.jpg";
import powerPlantThumb from "@/assets/power-plant-thumb.jpg";
import oilGasThumb from "@/assets/oil-gas-thumb.jpg";
import manufacturingThumb from "@/assets/manufacturing-thumb.jpg";

const industries = [
  { image: wastewaterThumb, title: "Lift Station Controls", href: "/wastewater", desc: "Reliable lift station operation including pump control for safe and sanitary conditions." },
  { image: aggregateThumb, title: "Aggregate", href: "/aggregate", desc: "Developing products and systems derived from production for aggregate industries." },
  { image: automobilesThumb, title: "Automobiles", href: "/automobiles", desc: "25+ years helping automotive clients realize opportunities through automation." },
  { image: logisticsThumb, title: "Logistics", href: "/logistics", desc: "Strategic optimization of warehouse control systems for supply chain excellence." },
  { image: foodBeverageThumb, title: "Food & Beverage", href: "/food-beverage", desc: "Software and hardware applications meeting ever-changing consumer and market demand." },
  { image: powerPlantThumb, title: "Power Plant", href: "/power-plant", desc: "Supporting energy companies investing in alternative and renewable energy sources." },
  { image: oilGasThumb, title: "Oil & Gas", href: "/oil-gas", desc: "Turnkey automation solutions for Upstream, Midstream, and Downstream sectors." },
  { image: manufacturingThumb, title: "Manufacturing", href: "/manufacturing", desc: "Transforming manufacturing processes through strategic automation solutions." },
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
            <Link
              key={ind.title}
              to={ind.href}
              className="group relative rounded-lg overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={ind.image}
                  alt={ind.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-lg font-heading font-bold text-primary-foreground mb-1">{ind.title}</h3>
                <p className="text-primary-foreground/60 text-xs leading-relaxed line-clamp-2">{ind.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
