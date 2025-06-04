
import NewHeroSection from "@/components/home/NewHeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import FAQSection from "@/components/home/FAQSection";
import ContactSection from "@/components/home/ContactSection";
import ProductCategories from "@/components/home/ProductCategories";
import TrustSection from "@/components/home/TrustSection";
import LeadCaptureForm from "@/components/home/LeadCaptureForm";
import IllustrationsSection from "@/components/home/IllustrationsSection";

const Home = () => {
  return (
    <>
      <NewHeroSection />
      <FeaturesSection />
      <IllustrationsSection />
      <ProductCategories />
      <TrustSection />
      <FAQSection />
      <ContactSection />
      <LeadCaptureForm />
    </>
  );
};

export default Home;
