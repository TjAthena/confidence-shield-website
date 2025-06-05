
import { Shield, Heart, Building, TrendingUp, CreditCard, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductFeatures = () => {
  const leftProducts = [
    { name: "Term Insurance", icon: Shield },
    { name: "Health Insurance", icon: Heart },
    { name: "FD/RD", icon: Building },
    { name: "Mutual Funds", icon: TrendingUp },
    { name: "Loans", icon: Building },
    { name: "Credit Cards", icon: CreditCard }
  ];

  const rightFeatures = [
    { name: "Best in the market", icon: Gem },
    { name: "Above 90% Claims", icon: Shield },
    { name: "10K+ Policy", icon: Heart },
    { name: "Top 5% insurers", icon: TrendingUp },
    { name: "Premium Products", icon: Gem },
    { name: "Trusted Service", icon: Shield }
  ];

  return (
    <section className="py-8 bg-gradient-to-br from-blue-50 via-cyan-50 to-emerald-50 relative overflow-hidden font-calibri">
      {/* Background decorative elements */}
      <div className="absolute top-6 left-6 w-20 h-20 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-6 right-6 w-24 h-24 bg-gradient-to-r from-emerald-200/30 to-blue-200/30 rounded-full blur-xl"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Products */}
          <div>
            <div className="text-center lg:text-left mb-6">
              <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-3">
                Protection Plans For your Family Security and Your Self Confidence
              </h2>
            </div>
            <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0">
              {leftProducts.map((product, index) => (
                <div 
                  key={index}
                  className="group w-[140px] h-[140px] bg-gradient-to-br from-white via-blue-50/80 to-cyan-50/80 backdrop-blur-lg rounded-xl shadow-lg border border-blue-200/50 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer flex flex-col items-center justify-center p-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <product.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-xs text-center text-gray-800 mb-3 leading-tight">{product.name}</h4>
                  <Button 
                    className="w-full h-6 bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 transition-all duration-300 text-white font-medium text-xs rounded-md shadow-md hover:shadow-lg"
                    size="sm"
                  >
                    Know More
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Features */}
          <div>
            <div className="text-center lg:text-left mb-6">
              <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Financial Products Features
              </h3>
            </div>
            <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0">
              {rightFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="group w-[140px] h-[140px] bg-gradient-to-br from-emerald-50/80 via-cyan-50/80 to-blue-50/80 backdrop-blur-lg rounded-xl shadow-lg border border-emerald-200/50 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer flex flex-col items-center justify-center p-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-center text-xs text-gray-800 leading-tight">{feature.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
