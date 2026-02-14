import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

import hmiIcon from "@/assets/hmi-icon.png";
import supportIcon from "@/assets/support-icon.png";
import instrumentationIcon from "@/assets/instrumentation-icon.png";
import goalsIcon from "@/assets/goals-icon.png";
import missionIcon from "@/assets/mission-icon.png";
import controlPanelIcon from "@/assets/control-panel-icon.png";
import plcIcon from "@/assets/plc-icon-2.png";

const solutions = [
  { icon: hmiIcon, title: "HMI/SCADA", desc: "Lead the industry with BIM-based graphics and Industry 4.0 operator interfaces.", href: "/hmi-scada-integration" },
  { icon: supportIcon, title: "SUPPORT", desc: "24/7 support services via our highly trained and experienced support team.", href: "/contact-us" },
  { icon: instrumentationIcon, title: "INSTRUMENTATION", desc: "Procure and calibrate a wide array of instruments for plant process systems.", href: "/contact-us" },
  { icon: goalsIcon, title: "OUR GOALS", desc: "Invent, Develop, Plan, Inspire, Share, Innovate", href: "/careers" },
  { icon: missionIcon, title: "OUR MISSION", desc: "Create success using modern industrial automation technologies coupled with human intelligence and ingenuity.", href: "/contact-us" },
  { icon: controlPanelIcon, title: "CONTROL PANELS", desc: "Specialize in designing and manufacturing UL-508A control panels.", href: "/control-panels" },
  { icon: plcIcon, title: "PLC", desc: "Expert programming abilities with all significant PLC platforms and integration with IoT solutions.", href: "/plc-system-integration" },
];

const IntegratedSolutions = () => {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.08 });

  return (
    <section className="py-28 bg-background relative">
      {/* Subtle top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4">
        <div ref={headerRef} className={`text-center mb-20 reveal ${headerVisible ? "visible" : ""}`}>
          <span className="text-sm font-heading font-bold tracking-widest uppercase text-gold">Solutions</span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground mt-3">
            Integrated Solutions for Industrial Automation
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Comprehensive offerings designed to streamline and enhance industrial processes through advanced technology integration.
          </p>
          <div className="w-16 h-[3px] gradient-gold rounded-full mx-auto mt-5" />
        </div>

        <div
          ref={gridRef}
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger-grid ${gridVisible ? "visible" : ""}`}
        >
          {solutions.map((s) => (
            <Link
              key={s.title}
              to={s.href}
              className="group bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-card-hover hover:border-gold/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-md gradient-navy flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 p-2.5 shadow-card">
                <img src={s.icon} alt={s.title} className="w-full h-full object-contain" />
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
