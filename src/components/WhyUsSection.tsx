import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const WhyUsSection = () => {
  return (
    <section className="py-24 gradient-navy relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-sm font-heading font-bold tracking-widest uppercase text-gold">Why Us?</span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-primary-foreground mt-3 mb-6">
            We Conduct All Business with the Highest Standards
          </h2>
          <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-8">
            <Shield className="w-8 h-8 text-secondary-foreground" />
          </div>
          <p className="text-primary-foreground/70 leading-relaxed text-lg mb-8">
            Radiant creates value for its customers by providing cutting-edge technical solutions to automate, monitor, and secure their industrial systems while also anticipating future difficulties they may face. Our team members are personally invested in each customer's success since it is reflected in the long-term success of Radiant Control Systems.
          </p>
          <Link
            to="/contact-us"
            className="inline-block gradient-gold text-secondary-foreground px-8 py-4 rounded-md font-heading font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
