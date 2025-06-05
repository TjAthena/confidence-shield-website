
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Secure Your Family's Future",
      subtitle: "Comprehensive Life Insurance Solutions"
    },
    {
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Protect Your Health & Wealth",
      subtitle: "Complete Health Insurance Coverage"
    },
    {
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Smart Investment Solutions",
      subtitle: "Build Wealth for Tomorrow"
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Financial Freedom Awaits",
      subtitle: "Expert Financial Planning Services"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[480px] overflow-hidden bg-gradient-to-br from-turquoise-pale via-white to-turquoise-light/30">
      <div className="container px-4 mx-auto h-full flex flex-col justify-center">
        {/* Carousel Container */}
        <div className="relative w-full max-w-[1400px] h-64 mx-auto rounded-2xl overflow-hidden shadow-turquoise mb-8">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div
                className="relative w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-turquoise-dark/80 to-turquoise-teal/60"></div>
                <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2 glow-effect">
                      {slide.title}
                    </h2>
                    <p className="text-lg md:text-xl opacity-90">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 justify-center">
          <Link to="/products">
            <Button className="w-full sm:w-auto gradient-turquoise hover:scale-105 transition-all duration-300 shadow-turquoise text-white font-semibold px-8 py-3 text-lg">
              Explore Products
            </Button>
          </Link>
          <Link to="/contact">
            <Button 
              className="w-full sm:w-auto bg-white border-2 border-turquoise-teal text-turquoise-teal hover:bg-turquoise-teal hover:text-white transition-all duration-300 font-semibold px-8 py-3 text-lg"
              variant="outline"
            >
              Get Started
            </Button>
          </Link>
        </div>

        {/* Floating badges */}
        <div className="relative mt-8">
          <div className="absolute -top-4 right-[10%] w-16 h-16 bg-gradient-to-br from-turquoise-teal to-turquoise-medium rounded-full flex items-center justify-center shadow-turquoise animate-float">
            <span className="text-white font-bold text-xs text-center">Best<br/>Rates</span>
          </div>
          
          <div className="absolute -top-4 left-[10%] w-20 h-20 bg-gradient-to-br from-turquoise-medium to-turquoise-light rounded-full flex items-center justify-center shadow-turquoise animate-float" style={{animationDelay: '1s'}}>
            <span className="text-turquoise-dark font-bold text-xs text-center">24/7<br/>Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
