
import HeroSection from "@/components/home/HeroSection";
import ProductCategories from "@/components/home/ProductCategories";
import TrustSection from "@/components/home/TrustSection";
import LeadCaptureForm from "@/components/home/LeadCaptureForm";
import SimpleCalculator from "@/components/home/SimpleCalculator";
import IllustrationsSection from "@/components/home/IllustrationsSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <IllustrationsSection />
      <ProductCategories />
      <SimpleCalculator />
      <TrustSection />
      <LeadCaptureForm />
    </>
  );
};

export default Home;
