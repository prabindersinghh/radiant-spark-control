import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import { Link } from "react-router-dom";
import { Droplets, Mountain, Car, Truck, UtensilsCrossed, Zap, Fuel, Factory } from "lucide-react";

const industries: Record<string, { icon: any; title: string; desc: string }> = {
  wastewater: {
    icon: Droplets,
    title: "Lift Station Controls",
    desc: "In order to provide us safe and sanitary conditions, wastewater systems depend heavily on reliable lift station operation including pump control. Radiant Control Systems provides comprehensive automation solutions for wastewater treatment facilities, ensuring reliable operation of pumps, valves, and monitoring systems.",
  },
  aggregate: {
    icon: Mountain,
    title: "Aggregate",
    desc: "Radiant Control Systems is an Industrial Electrical OEM Contractor here to serve you! We have history developing products and systems derived from production. Our expertise in aggregate production automation helps quarries and material processing plants maximize throughput while maintaining safety standards.",
  },
  automobiles: {
    icon: Car,
    title: "Automobiles",
    desc: "Radiant Control Systems has a long history in the automotive industry, with numerous customers over our 25+ year history. We help our clients realize opportunities through strategic automation, robotics integration, and production line optimization.",
  },
  logistics: {
    icon: Truck,
    title: "Logistics",
    desc: "Radiant Control Systems boasts a distinguished record in revolutionizing supply chain and logistics. Through strategic optimization of warehouse control systems, conveyor automation, and sortation solutions, we help logistics companies achieve peak efficiency.",
  },
  "food-beverage": {
    icon: UtensilsCrossed,
    title: "Food & Beverage",
    desc: "Radiant delivers software and hardware applications that help Food and Beverage companies meet ever-changing consumer and market demand. Our solutions ensure compliance with food safety standards while optimizing production throughput.",
  },
  "power-plant": {
    icon: Zap,
    title: "Power Plant",
    desc: "Changes in consumer demand and new opportunities in renewable energy production are leading energy companies to invest in alternative sources. Radiant provides control system solutions for both traditional and renewable energy generation facilities.",
  },
  "oil-gas": {
    icon: Fuel,
    title: "Oil & Gas",
    desc: "Radiant provides turnkey automation solutions, project management & technical services for Upstream, Midstream, and Downstream sectors of the Oil & Gas Industry. Our solutions enhance safety, efficiency, and regulatory compliance.",
  },
  manufacturing: {
    icon: Factory,
    title: "Manufacturing",
    desc: "Drawing upon a wealth of experience, Radiant excels in transforming manufacturing processes through strategic automation and control system solutions. From discrete manufacturing to continuous process operations, we deliver results.",
  },
};

const IndustryPage = ({ slug }: { slug: string }) => {
  const industry = industries[slug];

  if (!industry) return null;

  const Icon = industry.icon;

  return (
    <PageLayout>
      <PageBanner title={industry.title} breadcrumb={industry.title} />
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="w-16 h-16 rounded-md gradient-navy flex items-center justify-center mb-8">
            <Icon className="w-8 h-8 text-gold" />
          </div>
          <p className="text-muted-foreground leading-relaxed text-lg mb-8">{industry.desc}</p>
          <Link
            to="/contact-us"
            className="inline-block gradient-gold text-secondary-foreground px-8 py-4 rounded-md font-heading font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default IndustryPage;
