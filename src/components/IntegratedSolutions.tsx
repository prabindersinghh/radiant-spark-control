import { Monitor, Headphones, Gauge, Target, Lightbulb, Settings, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

const solutions = [
  { icon: Monitor, title: "HMI/SCADA", desc: "Lead the industry with BIM-based graphics and Industry 4.0 operator interfaces.", href: "/hmi-scada-integration" },
  { icon: Headphones, title: "SUPPORT", desc: "24/7 support services via our highly trained and experienced support team.", href: "/contact-us" },
  { icon: Gauge, title: "INSTRUMENTATION", desc: "Procure and calibrate a wide array of instruments for plant process systems.", href: "/contact-us" },
  { icon: Target, title: "OUR GOALS", desc: "Invent, Develop, Plan, Inspire, Share, Innovate", href: "/careers" },
  { icon: Lightbulb, title: "OUR MISSION", desc: "Create success using modern industrial automation technologies coupled with human intelligence and ingenuity.", href: "/contact-us" },
  { icon: Settings, title: "CONTROL PANELS", desc: "Specialize in designing and manufacturing UL-508A control panels.", href: "/control-panels" },
  { icon: Cpu, title: "PLC", desc: "Expert programming abilities with all significant PLC platforms and integration with IoT solutions.", href: "/plc-system-integration" },
];

const IntegratedSolutions = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-heading font-bold tracking-widest uppercase text-gold">Solutions</span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground mt-3">
            Integrated Solutions for Industrial Automation
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Comprehensive offerings designed to streamline and enhance industrial processes through advanced technology integration.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {solutions.map((s) => (
            <Link
              key={s.title}
              to={s.href}
              className="group bg-card border border-border rounded-lg p-6 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-md gradient-navy flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <s.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-base font-heading font-bold text-foreground mb-2 uppercase">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegratedSolutions;
