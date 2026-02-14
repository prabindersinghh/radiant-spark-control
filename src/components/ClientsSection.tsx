import { useScrollReveal } from "@/hooks/useScrollReveal";

import clientLogo1 from "@/assets/client-logo1.jpg";
import clientLogo2 from "@/assets/client-logo2.jpg";
import clientLogo3 from "@/assets/client-logo3.jpg";
import clientLogo4 from "@/assets/client-logo4.jpg";
import clientLogo5 from "@/assets/client-logo5.jpg";

const logos = [clientLogo1, clientLogo2, clientLogo3, clientLogo4, clientLogo5];

const ClientsSection = () => {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4">
        <div ref={headerRef} className={`text-center mb-12 reveal ${headerVisible ? "visible" : ""}`}>
          <span className="text-sm font-heading font-bold tracking-widest uppercase text-gold">Trusted By</span>
          <h2 className="text-2xl md:text-3xl font-heading font-black text-foreground mt-2">Our Clients</h2>
          <div className="w-12 h-[3px] gradient-gold rounded-full mx-auto mt-4" />
        </div>

        {/* Infinite scroll carousel */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="flex logo-scroll" style={{ width: 'max-content' }}>
            {[...logos, ...logos, ...logos].map((logo, i) => (
              <div key={i} className="flex-shrink-0 mx-8 md:mx-12">
                <img
                  src={logo}
                  alt={`Client logo ${(i % logos.length) + 1}`}
                  className="h-14 md:h-16 object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-400"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
