import aboutImg from "@/assets/about-real.jpg";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const highlights = [
  "Industrial Automation since 2005",
  "DBE & MBE Certified",
  "UL-508A Certified Panel Shop",
  "24/7 Field Support",
];

const AboutSection = () => {
  const [imgRef, imgVisible] = useScrollReveal<HTMLDivElement>();
  const [textRef, textVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-28 bg-background relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={imgRef} className={`relative reveal ${imgVisible ? "visible" : ""}`}>
            <img
              src={aboutImg}
              alt="Radiant Control Systems team at work"
              className="rounded-lg w-full shadow-elevated"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 gradient-gold rounded-lg hidden lg:flex items-center justify-center shadow-card-hover">
              <div className="text-center">
                <span className="block text-3xl font-heading font-black text-secondary-foreground">20+</span>
                <span className="text-xs font-heading font-bold uppercase text-secondary-foreground/80">Years</span>
              </div>
            </div>
          </div>

          <div ref={textRef} className={`reveal ${textVisible ? "visible" : ""}`} style={{ transitionDelay: "0.15s" }}>
            <span className="text-sm font-heading font-bold tracking-widest uppercase text-gold">About Us</span>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground mt-3 mb-6">
              Your Trusted Partner in Industrial Automation
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Welcome to Radiant Control Systems. With a commitment to excellence, we deliver a wide range of services tailored to meet your needs. Our reliable and cost-effective solutions are designed to increase productivity through Automation, Systems Integration, Information Services, Validation, and Consultancy.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-3 group">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-foreground">{h}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about-us"
              className="btn-interact inline-block gradient-gold text-secondary-foreground px-8 py-4 rounded-md font-heading font-bold text-sm uppercase tracking-wider"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
