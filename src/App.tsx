
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import TermInsurance from "./pages/TermInsurance";
import ReturnOfPremium from "./pages/ReturnOfPremium";
import HealthInsurance from "./pages/HealthInsurance";
import VehicleInsurance from "./pages/VehicleInsurance";
import FixedDeposits from "./pages/FixedDeposits";
import MutualFunds from "./pages/MutualFunds";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:category/:product" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Individual product pages */}
            <Route path="/term-insurance" element={<TermInsurance />} />
            <Route path="/return-of-premium" element={<ReturnOfPremium />} />
            <Route path="/health-insurance" element={<HealthInsurance />} />
            <Route path="/vehicle-insurance" element={<VehicleInsurance />} />
            <Route path="/fixed-deposits" element={<FixedDeposits />} />
            <Route path="/mutual-funds" element={<MutualFunds />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
