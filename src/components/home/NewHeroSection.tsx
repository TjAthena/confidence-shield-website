
import { ArrowRight, Shield, Heart, TrendingUp, Users, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NewHeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 text-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-cyan-300/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-blue-300/15 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container px-4 py-20 mx-auto relative z-10">
        {/* Slide Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-white/50 rounded-full"></div>
            <div className="w-3 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 animate-fade-in">Slide 1</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Tailored Products for your needs
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Life Protection",
              description: "Ensure you and the family are place 3 generations why should we make safe plans here that we include defining complex needs as financial.",
              icon: Shield,
              link: "/term-insurance"
            },
            {
              title: "Financial Security",
              description: "Ensure you and the family are financial and improve secure we then that small and support health and become safety valuation complex needs as financial.",
              icon: Heart,
              link: "/health-insurance"
            },
            {
              title: "Financial Freedom",
              description: "Every secured should become as financial and improve health care we make safe plans here that we should wealth take care those keeping complex needs as financial.",
              icon: TrendingUp,
              link: "/mutual-funds"
            }
          ].map((card, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 text-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                <card.icon className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{card.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{card.description}</p>
              <Link to={card.link}>
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold px-8 py-3 rounded-full">
                  Read More
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { icon: Shield, title: "Customer Care", subtitle: "Trust & Support" },
            { icon: Heart, title: "Health Insurance", subtitle: "Complete Coverage" },
            { icon: Award, title: "Awards", subtitle: "Industry Recognition" },
            { icon: TrendingUp, title: "Above 95%", subtitle: "Client Claims Success" },
            { icon: Users, title: "10K+", subtitle: "Happy Clients" },
            { icon: Shield, title: "Confidential", subtitle: "Secure Process" },
            { icon: Clock, title: "Insurance Support", subtitle: "24/7 Service" },
            { icon: Award, title: "No 1 Rank India", subtitle: "Top Rated" }
          ].map((item, index) => (
            <div key={index} className="text-center animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="w-16 h-16 mx-auto mb-3 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-white mb-1">{item.title}</h4>
              <p className="text-blue-100 text-sm">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewHeroSection;
