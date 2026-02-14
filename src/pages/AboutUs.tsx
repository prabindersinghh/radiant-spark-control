import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import { CheckCircle } from "lucide-react";
import aboutImg from "@/assets/about-img.jpg";

const AboutUs = () => {
  return (
    <PageLayout>
      <PageBanner title="About Us" />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-heading font-bold tracking-widest uppercase text-gold">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground mt-3 mb-6">
                Empowering Industry with Radiant Control Systems
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Welcome to Radiant Control Systems, your trusted partner in Industrial Automation since 2005. With a commitment to excellence, we deliver a wide range of services tailored to meet your needs. Our reliable and cost-effective solutions are designed to increase productivity through Automation, Systems Integration, Information Services, Validation, and Consultancy.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Backed by a skilled and experienced team of professionals, we strive to exceed your expectations at every step. Experience the difference with Radiant Control Systems – where innovation meets reliability.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {["DBE & MBE Certified", "UL-508A Certified", "24/7 Field Support", "Since 2005"].map((h) => (
                  <div key={h} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{h}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src={aboutImg} alt="Control systems" className="rounded-lg shadow-2xl w-full" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 gradient-gold rounded-lg hidden lg:flex items-center justify-center">
                <div className="text-center">
                  <span className="block text-3xl font-heading font-black text-secondary-foreground">20+</span>
                  <span className="text-xs font-heading font-bold uppercase text-secondary-foreground/80">Years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 gradient-navy">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-heading font-bold tracking-widest uppercase text-gold">Certifications</span>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-primary-foreground mt-3 mb-8">DBE & MBE Certified</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
              {[
                { label: "GDOT Vendor ID Code", value: "19325" },
                { label: "NAICS", value: "541511, 541512, 541330" },
                { label: "GMDC", value: "AT249607" },
                { label: "NIGP", value: "69031, 69032, 03125, 92040" },
                { label: "CAGE", value: "10NB0" },
                { label: "UEI #", value: "S5L4B99AGYX3" },
              ].map((c) => (
                <div key={c.label} className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-4">
                  <span className="text-xs font-heading font-bold text-gold uppercase tracking-wider">{c.label}</span>
                  <p className="text-primary-foreground font-heading font-bold mt-1">{c.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutUs;
