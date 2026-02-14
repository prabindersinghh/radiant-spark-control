import clientLogo1 from "@/assets/client-logo1.jpg";
import clientLogo2 from "@/assets/client-logo2.jpg";
import clientLogo3 from "@/assets/client-logo3.jpg";
import clientLogo4 from "@/assets/client-logo4.jpg";
import clientLogo5 from "@/assets/client-logo5.jpg";

const logos = [clientLogo1, clientLogo2, clientLogo3, clientLogo4, clientLogo5];

const ClientsSection = () => {
  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-sm font-heading font-bold tracking-widest uppercase text-gold">Trusted By</span>
          <h2 className="text-2xl md:text-3xl font-heading font-black text-foreground mt-2">Our Clients</h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {logos.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`Client logo ${i + 1}`}
              className="h-14 md:h-18 object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
