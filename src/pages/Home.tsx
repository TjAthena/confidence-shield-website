
import HeroCarousel from "@/components/home/HeroCarousel";
import ProductCards from "@/components/home/ProductCards";
import ProductFeatures from "@/components/home/ProductFeatures";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TrustSection from "@/components/home/TrustSection";
import FAQSection from "@/components/home/FAQSection";
import LeadCaptureForm from "@/components/home/LeadCaptureForm";

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <ProductCards />
      <ProductFeatures />
      <WhyChooseUs />
      <TrustSection />
      <FAQSection />
      <LeadCaptureForm />
    </>
  );
};

export default Home;
