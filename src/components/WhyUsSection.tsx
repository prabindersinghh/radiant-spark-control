import { Link } from "react-router-dom";
import { Shield } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WhyUsSection = () => {
  const [ref, visible] = useScrollReveal();

  return (
    <section className="py-28 gradient-navy relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full border border-primary-foreground/5" />
      <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full border border-primary-foreground/5" />

      <div className="container mx-auto px-4 relative">
        <div ref={ref} className={`max-w-3xl mx-auto text-center reveal ${visible ? "visible" : ""}`}>
          <span className="text-sm font-heading font-bold tracking-widest uppercase text-gold">Why Us?</span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-primary-foreground mt-3 mb-6">
            We Conduct All Business with the Highest Standards
          </h2>
          <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-8 shadow-card-hover">
            <Shield className="w-8 h-8 text-secondary-foreground" />
          </div>
          <p className="text-primary-foreground/70 leading-relaxed text-lg mb-10">
            Radiant creates value for its customers by providing cutting-edge technical solutions to automate, monitor, and secure their industrial systems while also anticipating future difficulties they may face. Our team members are personally invested in each customer's success since it is reflected in the long-term success of Radiant Control Systems.
          </p>
          <Link
            to="/contact-us"
            className="btn-interact inline-block gradient-gold text-secondary-foreground px-8 py-4 rounded-md font-heading font-bold text-sm uppercase tracking-wider"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
