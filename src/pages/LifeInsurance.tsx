
import { Shield, Heart, Users, Award, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LifeInsurance = () => {
  const benefits = [
    "Financial protection for your family",
    "Tax benefits under Section 80C",
    "Flexible premium payment options",
    "High coverage at affordable premiums",
    "Quick claim settlement process"
  ];

  const plans = [
    {
      title: "Term Insurance",
      description: "Pure protection plan with maximum coverage at minimum premium",
      features: ["High sum assured", "Low premium", "Online application", "Instant approval"],
      image: "https://images.unsplash.com/photo-1559526324-593bc2ace6a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Savings Plans",
      description: "Life insurance with investment returns for wealth creation",
      features: ["Life cover + savings", "Guaranteed returns", "Maturity benefits", "Flexible options"],
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-turquoise-dark via-turquoise-teal to-turquoise-medium text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1559526324-593bc2ace6a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Life Insurance"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container px-4 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 glow-effect">
                Life Insurance
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Secure your family's financial future with comprehensive life insurance solutions. 
                Get maximum coverage at affordable premiums with flexible payment options.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-turquoise-dark hover:bg-turquoise-light hover:text-turquoise-dark transition-all duration-300 font-semibold px-8 py-3">
                  Get Quote Now
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-turquoise-dark transition-all duration-300 font-semibold px-8 py-3">
                  Compare Plans
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559526324-593bc2ace6a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Family Protection"
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-white to-turquoise-pale/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-turquoise-dark mb-4">
              Why Choose Life Insurance?
            </h2>
            <p className="text-lg text-turquoise-dark/80 max-w-3xl mx-auto">
              Life insurance provides financial security and peace of mind for you and your loved ones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-turquoise border border-turquoise-light/30 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-turquoise-teal flex-shrink-0" />
                  <p className="text-turquoise-dark font-medium">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 bg-gradient-to-br from-turquoise-pale via-white to-turquoise-light/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-turquoise-dark mb-4">
              Our Life Insurance Plans
            </h2>
            <p className="text-lg text-turquoise-dark/80 max-w-3xl mx-auto">
              Choose from our comprehensive range of life insurance products
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-turquoise border border-turquoise-light/30 hover:shadow-2xl transition-all duration-500">
                <img 
                  src={plan.image} 
                  alt={plan.title}
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                
                <h3 className="text-2xl font-bold text-turquoise-dark mb-4">
                  {plan.title}
                </h3>
                
                <p className="text-turquoise-dark/80 mb-6">
                  {plan.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-turquoise-teal" />
                      <span className="text-sm text-turquoise-dark">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full gradient-turquoise hover:scale-105 transition-all duration-300 shadow-lg text-white font-semibold">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-turquoise-dark to-turquoise-teal text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 glow-effect">
            Ready to Secure Your Family's Future?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get personalized life insurance quotes from top insurers in just minutes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-turquoise-dark hover:bg-turquoise-light hover:text-turquoise-dark transition-all duration-300 font-semibold px-8 py-3">
              Get Free Quote
            </Button>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-turquoise-dark transition-all duration-300 font-semibold px-8 py-3">
                Contact Expert
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LifeInsurance;
