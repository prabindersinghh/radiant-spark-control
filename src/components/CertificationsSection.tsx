import certNmsdc from "@/assets/cert-nmsdc.png";
import certMbeNmsdc from "@/assets/cert-mbe-nmsdc.png";
import certSbsd from "@/assets/cert-sbsd.png";
import certDbe from "@/assets/cert-dbe.png";
import certMbe from "@/assets/cert-mbe.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const credentials = [
  { label: "GDOT Vendor ID Code", value: "19325" },
  { label: "NAICS", value: "541511, 541512" },
  { label: "GMDC", value: "AT249607" },
  { label: "NAICS", value: "541330" },
  { label: "NIGP", value: "69031, 69032, 03125, 92040" },
  { label: "CAGE", value: "10NB0" },
];

const badges = [
  { src: certNmsdc, alt: "NMSDC Certified 2024" },
  { src: certMbeNmsdc, alt: "Minority Business Enterprise (MBE) NMSDC" },
  { src: certSbsd, alt: "Georgia SBSD Certified Small Minority-Owned" },
  { src: certDbe, alt: "DBE Certified Disadvantaged Business Enterprise" },
  { src: certMbe, alt: "MBE Certified Minority Business Enterprise" },
];

const CertificationsSection = () => {
  const [ref, visible] = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-20 bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
          <h3 className="text-2xl font-heading font-bold text-gold mb-8">
            DBE &amp; MBE Certified
          </h3>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Credentials List */}
            <div>
              <div className="flex flex-col gap-3 mb-8">
                {credentials.map((c, i) => (
                  <p key={i} className="text-sm text-foreground">
                    <span className="font-bold">{c.label}:</span>{" "}
                    <span className="text-muted-foreground">{c.value}</span>
                  </p>
                ))}
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-6 mb-8">
                {badges.map((b) => (
                  <img
                    key={b.alt}
                    src={b.src}
                    alt={b.alt}
                    className="h-20 w-20 object-contain"
                  />
                ))}
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-sm text-foreground">
                  <span className="font-bold">UEI #</span>{" "}
                  <span className="text-muted-foreground">S5L4B99AGYX3</span>
                </p>
                <p className="text-sm text-foreground">
                  <span className="font-bold">E Verify #</span>{" "}
                  <span className="text-muted-foreground">2293567</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
