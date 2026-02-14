import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import { Link } from "react-router-dom";

import wastewaterBanner from "@/assets/wastewater-banner.jpg";
import aggregateBanner from "@/assets/aggregate-banner.jpg";
import automobilesBanner from "@/assets/automobiles-banner.jpg";
import logisticsBanner from "@/assets/logistics-banner.jpg";
import foodBeverageBanner from "@/assets/food-beverage-banner.jpg";
import powerPlantBanner from "@/assets/power-plant-banner.jpg";
import oilGasBanner from "@/assets/oil-gas-banner.jpg";
import manufacturingBanner from "@/assets/manufacturing-banner.jpg";

const industries: Record<string, { image: string; title: string; desc: string }> = {
  wastewater: {
    image: wastewaterBanner,
    title: "Lift Station Controls",
    desc: "In order to provide us safe and sanitary conditions, wastewater systems depend heavily on reliable lift station operation including pump control. Radiant Control Systems provides comprehensive automation solutions for wastewater treatment facilities, ensuring reliable operation of pumps, valves, and monitoring systems.",
  },
  aggregate: {
    image: aggregateBanner,
    title: "Aggregate",
    desc: "Radiant Control Systems is an Industrial Electrical OEM Contractor here to serve you! We have history developing products and systems derived from production. Our expertise in aggregate production automation helps quarries and material processing plants maximize throughput while maintaining safety standards.",
  },
  automobiles: {
    image: automobilesBanner,
    title: "Automobiles",
    desc: "Radiant Control Systems has a long history in the automotive industry, with numerous customers over our 25+ year history. We help our clients realize opportunities through strategic automation, robotics integration, and production line optimization.",
  },
  logistics: {
    image: logisticsBanner,
    title: "Logistics",
    desc: "Radiant Control Systems boasts a distinguished record in revolutionizing supply chain and logistics. Through strategic optimization of warehouse control systems, conveyor automation, and sortation solutions, we help logistics companies achieve peak efficiency.",
  },
  "food-beverage": {
    image: foodBeverageBanner,
    title: "Food & Beverage",
    desc: "Radiant delivers software and hardware applications that help Food and Beverage companies meet ever-changing consumer and market demand. Our solutions ensure compliance with food safety standards while optimizing production throughput.",
  },
  "power-plant": {
    image: powerPlantBanner,
    title: "Power Plant",
    desc: "Changes in consumer demand and new opportunities in renewable energy production are leading energy companies to invest in alternative sources. Radiant provides control system solutions for both traditional and renewable energy generation facilities.",
  },
  "oil-gas": {
    image: oilGasBanner,
    title: "Oil & Gas",
    desc: "Radiant provides turnkey automation solutions, project management & technical services for Upstream, Midstream, and Downstream sectors of the Oil & Gas Industry. Our solutions enhance safety, efficiency, and regulatory compliance.",
  },
  manufacturing: {
    image: manufacturingBanner,
    title: "Manufacturing",
    desc: "Drawing upon a wealth of experience, Radiant excels in transforming manufacturing processes through strategic automation and control system solutions. From discrete manufacturing to continuous process operations, we deliver results.",
  },
};

const IndustryPage = ({ slug }: { slug: string }) => {
  const industry = industries[slug];

  if (!industry) return null;

  return (
    <PageLayout>
      <PageBanner title={industry.title} breadcrumb={industry.title} />
      
      {/* Banner image */}
      <div className="w-full h-64 md:h-96 overflow-hidden">
        <img src={industry.image} alt={industry.title} className="w-full h-full object-cover" />
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
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
