
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
    <section className="py-20 bg-gradient-to-br from-white to-turquoise-pale/30">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Products */}
          <div>
            <div className="text-center lg:text-left mb-8">
              <h2 className="text-3xl font-bold text-turquoise-dark mb-4">
                Protection Plans For your Family Security and Your Self Confidence
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {leftProducts.map((product, index) => {
                // First row: 3 cards (items 0, 1, 2)
                // Second row: 2 cards aligned left (items 3, 4)
                // Third card: remaining card (item 5)
                const isSecondRow = index >= 3 && index <= 4;
                const isThirdRow = index === 5;
                
                return (
                  <div 
                    key={index}
                    className={`bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-turquoise border border-turquoise-light/30 hover:shadow-lg transition-all duration-300 hover:scale-105 ${
                      isThirdRow ? 'sm:col-span-1' : ''
                    }`}
                  >
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-turquoise-teal to-turquoise-medium flex items-center justify-center">
                        <product.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-turquoise-dark text-center mb-4">{product.name}</h4>
                    <Button 
                      className="w-full bg-turquoise-dark hover:bg-turquoise-teal transition-all duration-300 text-white font-medium"
                      size="sm"
                    >
                      Know More
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Features */}
          <div>
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-3xl font-bold text-turquoise-dark">
                Financial Products Features
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {rightFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-turquoise-light/20 to-turquoise-pale/40 rounded-xl p-6 border border-turquoise-light/30 hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-turquoise-medium to-turquoise-light flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-turquoise-dark" />
                    </div>
                  </div>
                  <h4 className="font-bold text-center text-turquoise-dark">{feature.name}</h4>
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
