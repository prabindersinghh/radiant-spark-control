import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import CEODesk from "./pages/CEODesk";
import ServicePage from "./pages/ServicePage";
import IndustryPage from "./pages/IndustryPage";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/ceo-desk" element={<CEODesk />} />
          <Route path="/control-panels" element={<ServicePage slug="control-panels" />} />
          <Route path="/plc-system-integration" element={<ServicePage slug="plc-system-integration" />} />
          <Route path="/hmi-scada-integration" element={<ServicePage slug="hmi-scada-integration" />} />
          <Route path="/field-service" element={<ServicePage slug="field-service" />} />
          <Route path="/wastewater" element={<IndustryPage slug="wastewater" />} />
          <Route path="/aggregate" element={<IndustryPage slug="aggregate" />} />
          <Route path="/automobiles" element={<IndustryPage slug="automobiles" />} />
          <Route path="/logistics" element={<IndustryPage slug="logistics" />} />
          <Route path="/food-beverage" element={<IndustryPage slug="food-beverage" />} />
          <Route path="/power-plant" element={<IndustryPage slug="power-plant" />} />
          <Route path="/oil-gas" element={<IndustryPage slug="oil-gas" />} />
          <Route path="/manufacturing" element={<IndustryPage slug="manufacturing" />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
