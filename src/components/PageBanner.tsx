import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface PageBannerProps {
  title: string;
  breadcrumb?: string;
}

const PageBanner = ({ title, breadcrumb }: PageBannerProps) => {
  return (
    <section className="gradient-navy py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 text-sm text-primary-foreground/50 mb-4">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <ArrowRight className="w-3 h-3" />
          <span className="text-gold">{breadcrumb || title}</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-heading font-black text-primary-foreground">{title}</h1>
      </div>
    </section>
  );
};

export default PageBanner;
