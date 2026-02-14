import logo from "@/assets/logo.png";
import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="gradient-navy pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/"><img src={logo} alt="Radiant Control Systems" className="h-10 mb-4" /></Link>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-4">
              Your trusted partner in Industrial Automation since 2005. Delivering reliable and cost-effective solutions.
            </p>
            <div className="flex gap-4">
              {[
                { label: "Facebook", href: "https://www.facebook.com/" },
                { label: "Instagram", href: "https://www.instagram.com/" },
                { label: "LinkedIn", href: "https://www.linkedin.com/company/radiant-control-systems-llc" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 text-xs hover:text-gold transition-colors">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-primary-foreground mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about-us" },
                { label: "Careers", href: "/careers" },
                { label: "Contact Us", href: "/contact-us" },
              ].map((l) => (
                <Link key={l.label} to={l.href} className="text-primary-foreground/60 text-sm hover:text-gold transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-primary-foreground mb-4 uppercase text-sm tracking-wider">Services</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Control Panels", href: "/control-panels" },
                { label: "PLC Integration", href: "/plc-system-integration" },
                { label: "HMI/SCADA", href: "/hmi-scada-integration" },
                { label: "Field Service", href: "/field-service" },
              ].map((l) => (
                <Link key={l.label} to={l.href} className="text-primary-foreground/60 text-sm hover:text-gold transition-colors">{l.label}</Link>
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

        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/40 text-xs">
              © 2026 Radiant Control Systems. All rights reserved. | DBE & MBE Certified
            </p>
            <div className="text-primary-foreground/30 text-xs flex gap-4">
              <span>GDOT: 19325</span>
              <span>CAGE: 10NB0</span>
              <span>UEI: S5L4B99AGYX3</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
