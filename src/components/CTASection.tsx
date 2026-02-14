import { Phone, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CTASection = () => {
  const [ref, visible] = useScrollReveal();

  return (
    <section className="py-24 gradient-gold relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary-foreground rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary-foreground rounded-full translate-x-1/3 translate-y-1/3" />
      </div>
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--navy-deep)) 1px, transparent 0)', backgroundSize: '28px 28px' }} />

      <div ref={ref} className={`container mx-auto px-4 relative text-center reveal ${visible ? "visible" : ""}`}>
        <h2 className="text-3xl md:text-5xl font-heading font-black text-secondary-foreground mb-4">
          Get Started on Your Journey Today
        </h2>
        <p className="text-secondary-foreground/80 max-w-xl mx-auto mb-10">
          Take the first step towards achieving your automation goals. Contact us for a consultation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="bg-navy text-primary-foreground px-8 py-4 rounded-md font-heading font-bold text-sm uppercase tracking-wider hover:bg-navy-deep transition-all duration-300 hover:-translate-y-0.5 hover:shadow-elevated flex items-center gap-2"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="tel:+14709150965"
            className="border-2 border-secondary-foreground/30 text-secondary-foreground px-8 py-4 rounded-md font-heading font-bold text-sm uppercase tracking-wider hover:border-secondary-foreground transition-all duration-300 flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            (470) 915-0965
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
