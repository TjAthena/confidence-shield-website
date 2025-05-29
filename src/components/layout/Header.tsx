
import { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCategory = (category: string) => {
    if (openCategory === category) {
      setOpenCategory(null);
    } else {
      setOpenCategory(category);
    }
  };

  const financialProducts = [
    {
      title: "Life Protection",
      items: [
        { name: "Term Insurance", path: "/term-insurance" },
        { name: "Return of Premium", path: "/return-of-premium" },
      ]
    },
    {
      title: "Financial Security",
      items: [
        { name: "Health Insurance", path: "/health-insurance" },
        { name: "Vehicle Insurance", path: "/vehicle-insurance" },
      ]
    },
    {
      title: "Financial Freedom",
      items: [
        { name: "Fixed Deposits & RD", path: "/fixed-deposits" },
        { name: "Mutual Funds", path: "/mutual-funds" },
      ]
    }
  ];

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-turquoise-light/30 shadow-turquoise sticky top-0 z-50">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 rounded-full gradient-turquoise flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold">
            <span className="text-turquoise-dark">Confidence</span>
            <span className="text-turquoise-teal">Financial</span>
          </span>
        </Link>

        {!isMobile ? (
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-turquoise-dark hover:text-turquoise-teal transition-colors duration-300 font-medium relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-turquoise-teal to-turquoise-medium group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/about" className="text-turquoise-dark hover:text-turquoise-teal transition-colors duration-300 font-medium relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-turquoise-teal to-turquoise-medium group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <div className="relative group">
              <button 
                className="flex items-center text-turquoise-dark hover:text-turquoise-teal transition-colors duration-300 font-medium gap-1 group"
                onClick={() => toggleCategory("products")}
              >
                Products
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-turquoise-teal to-turquoise-medium group-hover:w-full transition-all duration-300"></span>
              </button>
              
              <div className="hidden group-hover:block absolute top-full left-0 w-64 bg-white/95 backdrop-blur-md shadow-turquoise rounded-xl border border-turquoise-light/30 z-50 overflow-hidden">
                {financialProducts.map((category) => (
                  <div key={category.title} className="border-b border-turquoise-light/20 last:border-none">
                    <div className="p-4 font-semibold text-turquoise-dark bg-gradient-to-r from-turquoise-pale to-turquoise-light/30">
                      {category.title}
                    </div>
                    {category.items.map((item) => (
                      <Link 
                        key={item.name}
                        to={item.path}
                        className="block p-3 pl-6 text-sm text-turquoise-dark hover:bg-gradient-to-r hover:from-turquoise-light/20 hover:to-turquoise-pale/30 hover:text-turquoise-teal transition-all duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            
            <Link to="/contact" className="text-turquoise-dark hover:text-turquoise-teal transition-colors duration-300 font-medium relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-turquoise-teal to-turquoise-medium group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Button className="gradient-turquoise hover:scale-105 transition-all duration-300 shadow-turquoise text-white font-semibold px-6">
              Get Started
            </Button>
          </nav>
        ) : (
          <button onClick={toggleMenu} className="p-2 md:hidden rounded-lg hover:bg-turquoise-light/20 transition-colors">
            {isMenuOpen ? <X size={24} className="text-turquoise-dark" /> : <Menu size={24} className="text-turquoise-dark" />}
          </button>
        )}
      </div>

      {isMobile && isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-turquoise-light/30 shadow-turquoise md:hidden">
          <nav className="flex flex-col py-4">
            <Link
              to="/"
              className="px-6 py-3 text-turquoise-dark hover:bg-turquoise-light/20 hover:text-turquoise-teal transition-all duration-300 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 text-turquoise-dark hover:bg-turquoise-light/20 hover:text-turquoise-teal transition-all duration-300 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            
            <div>
              <button 
                className="flex items-center justify-between w-full px-6 py-3 text-turquoise-dark hover:bg-turquoise-light/20 transition-all duration-300 font-medium"
                onClick={() => toggleCategory("products")}
              >
                <span>Products</span>
                {openCategory === "products" ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </button>
              
              {openCategory === "products" && (
                <div className="bg-gradient-to-r from-turquoise-pale to-turquoise-light/30">
                  {financialProducts.map((category) => (
                    <div key={category.title} className="border-t border-turquoise-light/30">
                      <div className="px-6 py-2 text-sm font-semibold text-turquoise-teal">{category.title}</div>
                      {category.items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-8 py-2 text-sm text-turquoise-dark hover:bg-turquoise-light/30 hover:text-turquoise-teal transition-all duration-300"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <Link
              to="/contact"
              className="px-6 py-3 text-turquoise-dark hover:bg-turquoise-light/20 hover:text-turquoise-teal transition-all duration-300 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="px-6 py-3">
              <Button className="w-full gradient-turquoise hover:scale-105 transition-all duration-300 shadow-turquoise text-white font-semibold">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
