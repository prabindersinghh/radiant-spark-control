import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import controlPanelIcon from "@/assets/control-panel-icon.png";
import plcIcon from "@/assets/plc-icon.png";
import hmiIcon from "@/assets/hmi-icon.png";
import fieldServiceIcon from "@/assets/field-service-icon.png";

const services = [
  {
    icon: controlPanelIcon,
    title: "Control Panels",
    href: "/control-panels",
    desc: "Radiant Control Systems specializes in designing and manufacturing UL-508A control panels for diverse industrial applications. Our panels are built to the highest standards, ensuring reliability and safety in every installation.",
  },
  {
    icon: plcIcon,
    title: "PLC System Integration",
    href: "/plc-system-integration",
    desc: "Expert programming abilities with all significant PLC platforms and seamless integration with IoT solutions. We design, program, and commission PLC systems tailored to your specific process requirements.",
  },
  {
    icon: hmiIcon,
    title: "HMI/SCADA Integration",
    href: "/hmi-scada-integration",
    desc: "Lead the industry with BIM-based graphics and Industry 4.0 operator interfaces. Our SCADA solutions provide real-time monitoring and control of your industrial processes.",
  },
  {
    icon: fieldServiceIcon,
    title: "Field Service",
    href: "/field-service",
    desc: "24/7 support services via our highly trained and experienced support team. From installation to commissioning to ongoing maintenance, we're there when you need us.",
  },
];

const ServicePage = ({ slug }: { slug: string }) => {
  const service = services.find((s) => s.href === `/${slug}`);

  if (!service) {
    return (
      <PageLayout>
        <PageBanner title="Our Services" />
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-sm font-heading font-bold tracking-widest uppercase text-gold">What We Do</span>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground mt-3 mb-4">
                Industrial Automation and Controls Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Industrial automation and controls services streamline manufacturing processes through advanced technologies like PLC and SCADA, enhancing efficiency, reliability, and safety in industrial operations.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((s) => (
                <Link
                  key={s.title}
                  to={s.href}
                  className="group bg-card border border-border rounded-lg p-8 hover:border-gold/50 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-md gradient-navy flex items-center justify-center mb-6 group-hover:scale-110 transition-transform p-3">
                    <img src={s.icon} alt={s.title} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                  <span className="text-gold text-sm font-heading font-bold uppercase flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <PageBanner title={service.title} breadcrumb={service.title} />
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="w-20 h-20 rounded-md gradient-navy flex items-center justify-center mb-8 p-4">
            <img src={service.icon} alt={service.title} className="w-full h-full object-contain" />
          </div>
          <p className="text-muted-foreground leading-relaxed text-lg mb-8">{service.desc}</p>
          <Link
            to="/contact-us"
            className="inline-block gradient-gold text-secondary-foreground px-8 py-4 rounded-md font-heading font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default ServicePage;
