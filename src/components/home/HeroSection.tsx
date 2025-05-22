
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative py-16 overflow-hidden bg-gray-50 md:py-24 lg:py-32">
      <div className="container px-4 mx-auto">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-[#001F3F]">
              Financial <span className="text-[#00BFFF]">Protection</span> With Confidence
            </h1>
            <p className="mb-8 text-lg text-gray-600 md:text-xl">
              We help individuals and families navigate the path to financial security through
              personalized insurance solutions and investment plans.
            </p>
            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
              <Link to="/products">
                <Button className="w-full md:w-auto bg-[#001F3F] hover:bg-[#001F3F]/90 text-white">
                  Explore Products
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  className="w-full md:w-auto bg-[#00C853] hover:bg-[#00C853]/90 text-white"
                  variant="default"
                >
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="p-4 bg-white rounded-lg shadow-xl">
              <h3 className="mb-4 text-xl font-semibold text-center">Estimate Your Plan</h3>
              <div className="p-4 mb-4 bg-gray-50 rounded">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-500">I am interested in:</span>
                </div>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                  <Link to="/products">
                    <Button variant="outline" className="w-full text-sm justify-start">
                      Life Protection
                    </Button>
                  </Link>
                  <Link to="/products">
                    <Button variant="outline" className="w-full text-sm justify-start">
                      Financial Security
                    </Button>
                  </Link>
                  <Link to="/products">
                    <Button variant="outline" className="w-full text-sm justify-start">
                      Financial Freedom
                    </Button>
                  </Link>
                </div>
              </div>
              <Link to="/products">
                <Button className="w-full bg-[#00BFFF] hover:bg-[#00BFFF]/90">
                  Compare All Plans
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
