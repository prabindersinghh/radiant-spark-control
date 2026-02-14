import aboutImg from "@/assets/about-img.jpg";
import { CheckCircle } from "lucide-react";

const highlights = [
  "Industrial Automation since 2005",
  "DBE & MBE Certified",
  "UL-508A Certified Panel Shop",
  "24/7 Field Support",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src={aboutImg}
              alt="Industrial control systems"
              className="rounded-lg w-full shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 gradient-gold rounded-lg hidden lg:flex items-center justify-center">
              <div className="text-center">
                <span className="block text-3xl font-heading font-black text-secondary-foreground">20+</span>
                <span className="text-xs font-heading font-bold uppercase text-secondary-foreground/80">Years</span>
              </div>
            </div>
          </div>

          <div>
            <span className="text-sm font-heading font-bold tracking-widest uppercase text-gold">About Us</span>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground mt-3 mb-6">
              Your Trusted Partner in Industrial Automation
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Welcome to Radiant Control Systems. With a commitment to excellence, we deliver a wide range of services tailored to meet your needs. Our reliable and cost-effective solutions are designed to increase productivity through Automation, Systems Integration, Information Services, Validation, and Consultancy.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{h}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block gradient-gold text-secondary-foreground px-8 py-4 rounded-md font-heading font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
