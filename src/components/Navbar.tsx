import { useState, useRef, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about-us",
    children: [{ label: "CEO Desk", href: "/ceo-desk" }],
  },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "Control Panels", href: "/control-panels" },
      { label: "PLC System Integration", href: "/plc-system-integration" },
      { label: "HMI/SCADA Integration", href: "/hmi-scada-integration" },
      { label: "Field Service", href: "/field-service" },
    ],
  },
  {
    label: "Industries",
    href: "#",
    children: [
      { label: "Wastewater", href: "/wastewater" },
      { label: "Aggregate", href: "/aggregate" },
      { label: "Automobiles", href: "/automobiles" },
      { label: "Logistics", href: "/logistics" },
      { label: "Food & Beverage", href: "/food-beverage" },
      { label: "Power Plant", href: "/power-plant" },
      { label: "Oil & Gas", href: "/oil-gas" },
      { label: "Manufacturing", href: "/manufacturing" },
    ],
  },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact-us" },
];

const DropdownMenu = ({ item }: { item: NavItem }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(true)}
        className="flex items-center gap-1 text-sm font-medium text-primary-foreground/80 hover:text-gold transition-colors tracking-wide uppercase"
      >
        {item.label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div
          onMouseLeave={() => setOpen(false)}
          className="absolute top-full left-0 mt-2 w-56 gradient-navy border border-navy-light/20 rounded-md shadow-xl py-2 z-50"
        >
          {item.children!.map((child) => (
            <Link
              key={child.label}
              to={child.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-sm text-primary-foreground/70 hover:text-gold hover:bg-primary-foreground/5 transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 gradient-navy border-b border-navy-light/20">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Radiant Control Systems" className="h-12" />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) =>
            item.children ? (
              <DropdownMenu key={item.label} item={item} />
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className="text-sm font-medium text-primary-foreground/80 hover:text-gold transition-colors tracking-wide uppercase"
              >
                {item.label}
              </Link>
            )
          )}
          <a
            href="tel:+14709150965"
            className="flex items-center gap-2 gradient-gold text-secondary-foreground px-5 py-2.5 rounded-md font-heading font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            (470) 915-0965
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-primary-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden gradient-navy border-t border-navy-light/20 pb-6 max-h-[80vh] overflow-y-auto">
          <div className="container mx-auto px-4 flex flex-col gap-2 pt-4">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    className="flex items-center justify-between w-full py-2 text-sm font-medium text-primary-foreground/80 hover:text-gold transition-colors uppercase tracking-wide"
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="pl-4 flex flex-col gap-2 pb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          onClick={() => setOpen(false)}
                          className="text-sm text-primary-foreground/60 hover:text-gold transition-colors py-1"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm font-medium text-primary-foreground/80 hover:text-gold transition-colors uppercase tracking-wide"
                >
                  {item.label}
                </Link>
              )
            )}
            <a
              href="tel:+14709150965"
              className="flex items-center gap-2 gradient-gold text-secondary-foreground px-5 py-2.5 rounded-md font-heading font-semibold text-sm w-fit mt-2"
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
