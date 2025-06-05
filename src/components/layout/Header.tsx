import { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openSubCategory, setOpenSubCategory] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCategory = (category: string) => {
    if (openCategory === category) {
      setOpenCategory(null);
      setOpenSubCategory(null);
    } else {
      setOpenCategory(category);
      setOpenSubCategory(null);
    }
  };

  const toggleSubCategory = (subCategory: string) => {
    if (openSubCategory === subCategory) {
      setOpenSubCategory(null);
    } else {
      setOpenSubCategory(subCategory);
    }
  };

  const productCategories = [
    {
      title: "Insurance",
      path: "/",
      subcategories: [
        {
          title: "Term Insurance",
          path: "/term-insurance",
          items: []
        },
        {
          title: "Health Insurance",
          path: "/health-insurance",
          items: []
        },
        {
          title: "Motor Insurance",
          path: "/motor-insurance",
          items: []
        }
      ]
    },
    {
      title: "Savings",
      path: "/",
      subcategories: [
        {
          title: "Fixed Deposit / Recurring Deposit (FD / RD)",
          path: "/health-insurance",
          items: [ ]
        },
        {
          title: "Kids Education",
          path: "/kids_education",
          items: [ ]
        },
        {
          title: "Retirement Plans",
          path: "/Retirement Plans",
          items: [ ]
        },
        {
          title: "Wealth Creation",
          path: "/Wealth Creation",
          items: [ ]
        },
        {
          title: "Security bond",
          path: "/security bond",
          items: [ ]
        }
        
      ]
    },
    {
      title: "Loans & Cards",
      path: "/",
      subcategories: [
        {
          title: "Housing Loan",
          path: "/",
          items: []
        },
        {
          title: "Personal Loan",
          path: "/",
          items: []
        },
        {
          title: "Mortgage Loan",
          path: "/",
          items: []
        },
        {
          title: "Business Loan",
          path: "/",
          items: []
        },
        {
          title: "Credit Cards",
          path: "/",
          items: []
        }
      ]
    },
  ];

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-turquoise-light/30 shadow-turquoise sticky top-30 z-50">
      <div className="container flex items-center justify-between h-25 px-4 mx-auto">
        <Link to="/" className="flex items-center space-x-2 group">
          <img 
          style={{ width: '100px', height: '100px' }}
            src="/lovable-uploads/6c404703-9ca2-4fa0-891a-ad4b2a8ec18c.png" 
            alt="Confidence Financial Services" 
            className="group-hover:scale-110 transition-transform duration-300"
          />
        </Link>

        {!isMobile ? (
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-turquoise-dark hover:text-turquoise-teal transition-colors duration-300 font-medium relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-turquoise-teal to-turquoise-medium group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/about" className="text-turquoise-dark hover:text-turquoise-teal transition-colors duration-300 font-medium relative group">
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-turquoise-teal to-turquoise-medium group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <div 
              className="relative group"
              onMouseEnter={() => setHoveredCategory("products")}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <button className="flex items-center text-turquoise-dark hover:text-turquoise-teal transition-colors duration-300 font-medium gap-1 group">
                Our Products
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-turquoise-teal to-turquoise-medium group-hover:w-full transition-all duration-300"></span>
              </button>
              
              {hoveredCategory === "products" && (
                <div className="absolute top-full left-0 w-80 bg-white/95 backdrop-blur-md shadow-turquoise rounded-xl border border-turquoise-light/30 z-50 overflow-hidden">
                  {productCategories.map((category) => (
                    <div key={category.title} className="border-b border-turquoise-light/20 last:border-none">
                      <div 
                        className="p-4 font-semibold text-turquoise-dark bg-gradient-to-r from-turquoise-pale to-turquoise-light/30 hover:from-turquoise-light/40 hover:to-turquoise-pale/50 transition-all duration-300 cursor-pointer flex items-center justify-between"
                        onClick={() => toggleCategory(category.title)}
                      >
                        <Link to={category.path} className="flex-1">
                          {category.title}
                        </Link>
                        {category.subcategories.length > 0 && (
                          <ChevronRight 
                            size={16} 
                            className={`transition-transform duration-300 ${
                              openCategory === category.title ? 'rotate-90' : ''
                            }`}
                          />
                        )}
                      </div>
                      {openCategory === category.title && category.subcategories.map((subcategory) => (
                        <div key={subcategory.title}>
                          <Link 
                            to={subcategory.path}
                            className="block p-3 pl-6 text-sm text-turquoise-dark hover:bg-gradient-to-r hover:from-turquoise-light/20 hover:to-turquoise-pale/30 hover:text-turquoise-teal transition-all duration-300"
                          >
                            {subcategory.title}
                          </Link>
                          {subcategory.items.map((item) => (
                            <Link 
                              key={item.name}
                              to={item.path}
                              className="block p-2 pl-12 text-xs text-turquoise-dark/80 hover:bg-gradient-to-r hover:from-turquoise-light/10 hover:to-turquoise-pale/20 hover:text-turquoise-teal transition-all duration-300"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link to="/partners" className="text-turquoise-dark hover:text-turquoise-teal transition-colors duration-300 font-medium relative group">
              Our Partners
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-turquoise-teal to-turquoise-medium group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <Link to="/contact" className="text-turquoise-dark hover:text-turquoise-teal transition-colors duration-300 font-medium relative group">
              Contact Us
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
        <div className="absolute top-16 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-turquoise-light/30 shadow-turquoise md:hidden max-h-96 overflow-y-auto">
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
              About Us
            </Link>
            
            <div>
              <button 
                className="flex items-center justify-between w-full px-6 py-3 text-turquoise-dark hover:bg-turquoise-light/20 transition-all duration-300 font-medium"
                onClick={() => toggleCategory("products")}
              >
                <span>Our Products</span>
                {openCategory === "products" ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </button>
              
              {openCategory === "products" && (
                <div className="bg-gradient-to-r from-turquoise-pale to-turquoise-light/30">
                  {productCategories.map((category) => (
                    <div key={category.title} className="border-t border-turquoise-light/30">
                      <button
                        className="flex items-center justify-between w-full px-8 py-2 text-sm font-semibold text-turquoise-teal hover:bg-turquoise-light/30 transition-all duration-300"
                        onClick={() => toggleSubCategory(category.title)}
                      >
                        {category.title}
                        {category.subcategories.length > 0 && (
                          openSubCategory === category.title ? <ChevronDown size={14} /> : <ChevronRight size={14} />
                        )}
                      </button>
                      {openSubCategory === category.title && category.subcategories.map((subcategory) => (
                        <div key={subcategory.title}>
                          <Link
                            to={subcategory.path}
                            className="block px-12 py-2 text-xs text-turquoise-dark hover:bg-turquoise-light/30 hover:text-turquoise-teal transition-all duration-300"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subcategory.title}
                          </Link>
                          {subcategory.items.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="block px-16 py-1 text-xs text-turquoise-dark/80 hover:bg-turquoise-light/30 hover:text-turquoise-teal transition-all duration-300"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/partners"
              className="px-6 py-3 text-turquoise-dark hover:bg-turquoise-light/20 hover:text-turquoise-teal transition-all duration-300 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Partners
            </Link>
            
            <Link
              to="/contact"
              className="px-6 py-3 text-turquoise-dark hover:bg-turquoise-light/20 hover:text-turquoise-teal transition-all duration-300 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
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
