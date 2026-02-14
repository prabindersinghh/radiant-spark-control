import { useEffect, useRef, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.bottom > 0) {
          setOffsetY(window.scrollY * 0.25);
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0" style={{ transform: `translateY(${offsetY}px)` }}>
        <img src={heroBg} alt="" className="w-full h-[120%] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy/85 to-navy-deep/70" />
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-20">
        <div className="max-w-3xl">
          <div className="inline-block gradient-gold px-4 py-1.5 rounded-sm mb-6 animate-fade-in-up shadow-elevated">
            <span className="text-sm font-heading font-bold tracking-widest uppercase text-secondary-foreground">
              Industrial Automation Since 2005
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black leading-[1.1] text-primary-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Empowering Industry with{" "}
            <span className="text-gradient-gold">Intelligent Control</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-xl mb-10 font-body leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Reliable and cost-effective automation solutions designed to increase productivity through Systems Integration, PLC Programming, and SCADA solutions.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
            <a
              href="#contact"
              className="btn-interact gradient-gold text-secondary-foreground px-8 py-4 rounded-md font-heading font-bold text-sm uppercase tracking-wider flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#services"
              className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-md font-heading font-bold text-sm uppercase tracking-wider hover:border-gold hover:text-gold transition-all duration-300"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>

      {/* Bottom decorative bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 gradient-gold" />
    </section>
  );
};

export default HeroSection;
