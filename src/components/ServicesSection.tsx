import controlPanelIcon from "@/assets/control-panel-icon.png";
import plcIcon from "@/assets/plc-icon.png";
import hmiIcon from "@/assets/hmi-icon.png";
import fieldServiceIcon from "@/assets/field-service-icon.png";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  { icon: controlPanelIcon, title: "Control Panels", href: "/control-panels", desc: "Specializing in designing and manufacturing UL-508A control panels for diverse industrial applications." },
  { icon: plcIcon, title: "PLC System Integration", href: "/plc-system-integration", desc: "Expert programming with all significant PLC platforms and seamless integration with IoT solutions." },
  { icon: hmiIcon, title: "HMI/SCADA Integration", href: "/hmi-scada-integration", desc: "Leading the industry with BIM-based graphics and Industry 4.0 operator interfaces." },
  { icon: fieldServiceIcon, title: "Field Service", href: "/field-service", desc: "24/7 support services via our highly trained and experienced support team." },
];

const ServicesSection = () => {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="services" className="py-28 bg-background relative">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className={`text-center mb-20 reveal ${headerVisible ? "visible" : ""}`}>
          <span className="text-sm font-heading font-bold tracking-widest uppercase text-gold">What We Do</span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground mt-3">
            Our Core Services
          </h2>
          <div className="w-16 h-[3px] gradient-gold rounded-full mx-auto mt-5" />
        </div>

        <div
          ref={gridRef}
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-grid ${gridVisible ? "visible" : ""}`}
        >
          {services.map((s) => (
            <Link
              key={s.title}
              to={s.href}
              className="group bg-card border border-border rounded-lg p-8 shadow-card hover:shadow-card-hover hover:border-gold/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-md gradient-navy flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 p-3 shadow-card">
                <img src={s.icon} alt={s.title} className="w-full h-full object-contain brightness-0 invert" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
