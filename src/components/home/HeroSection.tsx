
import { ArrowRight, Shield, TrendingUp, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-turquoise-pale via-white to-turquoise-light/30">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-turquoise-medium/20 to-turquoise-teal/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-turquoise-light/30 to-turquoise-medium/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-turquoise-teal/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="animate-fade-in">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-turquoise-light/20 to-turquoise-pale/40 rounded-full text-turquoise-teal font-medium text-sm mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              <span>Trusted by 10,000+ families</span>
            </div>
            
            <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-6xl xl:text-7xl">
              <span className="text-turquoise-dark glow-effect">Financial</span>
              <br />
              <span className="text-gradient">Protection</span>
              <br />
              <span className="text-turquoise-teal">With Confidence</span>
            </h1>
            
            <p className="mb-8 text-xl text-turquoise-dark/80 leading-relaxed">
              We help individuals and families navigate the path to financial security through
              personalized insurance solutions and investment plans that protect what matters most.
            </p>
            
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
              <Link to="/products">
                <Button className="w-full sm:w-auto gradient-turquoise hover:scale-105 transition-all duration-300 shadow-turquoise text-white font-semibold px-8 py-3 text-lg">
                  <Shield className="mr-2 h-5 w-5" />
                  Explore Products
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  className="w-full sm:w-auto bg-white border-2 border-turquoise-teal text-turquoise-teal hover:bg-turquoise-teal hover:text-white transition-all duration-300 font-semibold px-8 py-3 text-lg"
                  variant="outline"
                >
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center space-x-8 mt-12 pt-8 border-t border-turquoise-light/30">
              <div className="text-center">
                <div className="text-2xl font-bold text-turquoise-dark">₹100Cr+</div>
                <div className="text-sm text-turquoise-dark/60">Coverage Provided</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-turquoise-dark">10K+</div>
                <div className="text-sm text-turquoise-dark/60">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-turquoise-dark">98%</div>
                <div className="text-sm text-turquoise-dark/60">Claim Success</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-up">
            <div className="relative">
              {/* Main card */}
              <div className="p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-turquoise border border-turquoise-light/30 hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-full gradient-turquoise flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-turquoise-dark">Plan Your Future</h3>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-gradient-to-r from-turquoise-pale/50 to-turquoise-light/30 rounded-xl border border-turquoise-light/40">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-turquoise-dark">I am interested in:</span>
                      <Heart className="w-4 h-4 text-turquoise-teal" />
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      <Link to="/term-insurance">
                        <Button variant="outline" className="w-full text-sm justify-start border-turquoise-light/40 text-turquoise-dark hover:bg-turquoise-light/20 hover:border-turquoise-teal transition-all duration-300">
                          <Shield className="mr-2 h-4 w-4" />
                          Life Protection
                        </Button>
                      </Link>
                      <Link to="/health-insurance">
                        <Button variant="outline" className="w-full text-sm justify-start border-turquoise-light/40 text-turquoise-dark hover:bg-turquoise-light/20 hover:border-turquoise-teal transition-all duration-300">
                          <Heart className="mr-2 h-4 w-4" />
                          Health Security
                        </Button>
                      </Link>
                      <Link to="/mutual-funds">
                        <Button variant="outline" className="w-full text-sm justify-start border-turquoise-light/40 text-turquoise-dark hover:bg-turquoise-light/20 hover:border-turquoise-teal transition-all duration-300">
                          <TrendingUp className="mr-2 h-4 w-4" />
                          Wealth Building
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
                
                <Link to="/products">
                  <Button className="w-full gradient-turquoise hover:scale-105 transition-all duration-300 shadow-lg text-white font-semibold py-3">
                    Compare All Plans
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-turquoise-teal to-turquoise-medium rounded-full flex items-center justify-center shadow-turquoise animate-float">
                <span className="text-white font-bold text-xs text-center">Best<br/>Rates</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-turquoise-medium to-turquoise-light rounded-full flex items-center justify-center shadow-turquoise animate-float" style={{animationDelay: '1s'}}>
                <span className="text-turquoise-dark font-bold text-xs text-center">24/7<br/>Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
