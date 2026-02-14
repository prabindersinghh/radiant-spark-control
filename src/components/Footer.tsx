import logo from "@/assets/logo.png";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="gradient-navy pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img src={logo} alt="Radiant Control Systems" className="h-10 mb-4" />
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Your trusted partner in Industrial Automation since 2005. Delivering reliable and cost-effective solutions.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-primary-foreground mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {["Home", "About Us", "Services", "Industries", "Careers", "Contact"].map((l) => (
                <a key={l} href={`#${l.toLowerCase().replace(/\s/g, "")}`} className="text-primary-foreground/60 text-sm hover:text-gold transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-primary-foreground mb-4 uppercase text-sm tracking-wider">Contact Info</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/60 text-sm">6340 Sugarloaf Parkway, Suite # 200, Duluth, GA 30097</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="tel:+14709150965" className="text-primary-foreground/60 text-sm hover:text-gold transition-colors">(470) 915-0965</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="mailto:info@radiantcontrolsystems.com" className="text-primary-foreground/60 text-sm hover:text-gold transition-colors">info@radiantcontrolsystems.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-primary-foreground/40 text-xs">
            © 2026 Radiant Control Systems. All rights reserved. | DBE & MBE Certified
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
