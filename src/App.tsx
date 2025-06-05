
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navItems } from "./nav-items";
import MainLayout from "@/components/layout/MainLayout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Products from "@/pages/Products";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
import TermInsurance from "@/pages/TermInsurance";
import HealthInsurance from "@/pages/HealthInsurance";
import VehicleInsurance from "@/pages/VehicleInsurance";
import FixedDeposits from "@/pages/FixedDeposits";
import MutualFunds from "@/pages/MutualFunds";
import ReturnOfPremium from "@/pages/ReturnOfPremium";
import LifeInsurance from "@/pages/LifeInsurance";
import GeneralInsurance from "@/pages/GeneralInsurance";
import Savings from "@/pages/Savings";
import Loans from "@/pages/Loans";
import CreditCards from "@/pages/CreditCards";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/term-insurance" element={<TermInsurance />} />
            <Route path="/health-insurance" element={<HealthInsurance />} />
            <Route path="/vehicle-insurance" element={<VehicleInsurance />} />
            <Route path="/fixed-deposits" element={<FixedDeposits />} />
            <Route path="/mutual-funds" element={<MutualFunds />} />
            <Route path="/return-of-premium" element={<ReturnOfPremium />} />
            <Route path="/life-insurance" element={<LifeInsurance />} />
            <Route path="/general-insurance" element={<GeneralInsurance />} />
            <Route path="/savings" element={<Savings />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/credit-cards" element={<CreditCards />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
