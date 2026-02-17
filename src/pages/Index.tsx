import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import IndustriesSection from "@/components/IndustriesSection";
import IntegratedSolutions from "@/components/IntegratedSolutions";
import WhyUsSection from "@/components/WhyUsSection";
import ClientsSection from "@/components/ClientsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <IndustriesSection />
      <CTASection />
      <IntegratedSolutions />
      <WhyUsSection />
      <ClientsSection />
      <Footer />
    </div>
  );
};

export default Index;
