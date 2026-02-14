import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 gradient-navy border-b border-navy-light/20">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <a href="#" className="flex-shrink-0">
          <img src={logo} alt="Radiant Control Systems" className="h-12" />
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-primary-foreground/80 hover:text-gold transition-colors tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+14709150965"
            className="flex items-center gap-2 gradient-gold text-secondary-foreground px-5 py-2.5 rounded-md font-heading font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            (470) 915-0965
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-primary-foreground"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden gradient-navy border-t border-navy-light/20 pb-6">
          <div className="container mx-auto px-4 flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-primary-foreground/80 hover:text-gold transition-colors uppercase tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+14709150965"
              className="flex items-center gap-2 gradient-gold text-secondary-foreground px-5 py-2.5 rounded-md font-heading font-semibold text-sm w-fit"
            >
              <Phone className="w-4 h-4" />
              (470) 915-0965
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
