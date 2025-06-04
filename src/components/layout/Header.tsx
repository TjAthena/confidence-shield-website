
import { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openSubCategory, setOpenSubCategory] = useState<string | null>(null);
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

  const navigationItems = {
    lifeInsurance: {
      title: "Life Insurance",
      items: [
        { 
          name: "Term", 
          path: "/term-insurance",
          subItems: []
        },
        { 
          name: "Savings", 
          path: "/savings-insurance",
          subItems: [
            { name: "Kids Education", path: "/kids-education" },
            { name: "Retirement Planning", path: "/retirement-planning" },
            { name: "Wealth Creation", path: "/wealth-creation" }
          ]
        }
      ]
    },
    generalInsurance: {
      title: "General Insurance",
      items: [
        { 
          name: "Health", 
          path: "/health-insurance",
          subItems: [
            { name: "Individual", path: "/health-individual" },
            { name: "Family", path: "/health-family" },
            { name: "Group", path: "/health-group" }
          ]
        }
      ]
    },
    savings: {
      title: "Savings",
      items: [
        { name: "FD/RD", path: "/fixed-deposits", subItems: [] },
        { name: "Mutual Funds", path: "/mutual-funds", subItems: [] },
        { name: "Bonds", path: "/bonds", subItems: [] }
      ]
    },
    loans: {
      title: "Loans",
      items: [
        { name: "Housing Loan", path: "/housing-loan", subItems: [] },
        { name: "Equity and Mortgage", path: "/equity-mortgage", subItems: [] },
        { name: "Personal Loan", path: "/personal-loan", subItems: [] },
        { name: "Business Loan", path: "/business-loan", subItems: [] }
      ]
    },
    creditCards: {
      title: "Credit Cards",
      items: [
        { name: "Credit Cards", path: "/credit-cards", subItems: [] }
      ]
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-blue-200/50 shadow-lg sticky top-0 z-50">
      <div className="container flex items-center justify-between h-20 px-4 mx-auto">
        <Link to="/" className="flex items-center space-x-3 group">
          <img 
            src="/lovable-uploads/859ee56a-8840-4a48-88c5-7b14a44e14d6.png" 
            alt="Confidence Financial Services" 
            className="h-12 w-auto group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {!isMobile ? (
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-blue-900 hover:text-blue-600 transition-colors duration-300 font-semibold relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/about" className="text-blue-900 hover:text-blue-600 transition-colors duration-300 font-semibold relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <div className="relative group">
              <button className="flex items-center text-blue-900 hover:text-blue-600 transition-colors duration-300 font-semibold gap-1 group">
                Our Products
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              
              <div className="hidden group-hover:block absolute top-full left-0 w-80 bg-white/98 backdrop-blur-md shadow-2xl rounded-xl border border-blue-200/50 z-50 overflow-hidden">
                {Object.values(navigationItems).map((category) => (
                  <div key={category.title} className="border-b border-blue-100/50 last:border-none">
                    <div className="p-4 font-bold text-blue-900 bg-gradient-to-r from-blue-50 to-cyan-50">
                      {category.title}
                    </div>
                    {category.items.map((item) => (
                      <div key={item.name} className="relative group/item">
                        <Link 
                          to={item.path}
                          className="flex items-center justify-between p-3 pl-6 text-sm text-blue-800 hover:bg-gradient-to-r hover:from-blue-100/50 hover:to-cyan-100/30 hover:text-blue-900 transition-all duration-300"
                        >
                          {item.name}
                          {item.subItems.length > 0 && <ChevronRight size={14} />}
                        </Link>
                        {item.subItems.length > 0 && (
                          <div className="hidden group-hover/item:block absolute left-full top-0 w-56 bg-white/98 backdrop-blur-md shadow-xl rounded-lg border border-blue-200/50 ml-1">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.path}
                                className="block p-3 text-sm text-blue-700 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 hover:text-blue-900 transition-all duration-300 first:rounded-t-lg last:rounded-b-lg"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            
            <Link to="/contact" className="text-blue-900 hover:text-blue-600 transition-colors duration-300 font-semibold relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 hover:scale-105 transition-all duration-300 shadow-lg text-white font-semibold px-8 py-2">
              Get a Quote
            </Button>
          </nav>
        ) : (
          <button onClick={toggleMenu} className="p-2 lg:hidden rounded-lg hover:bg-blue-100/50 transition-colors">
            {isMenuOpen ? <X size={24} className="text-blue-900" /> : <Menu size={24} className="text-blue-900" />}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-b border-blue-200/50 shadow-2xl lg:hidden max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col py-4">
            <Link
              to="/"
              className="px-6 py-3 text-blue-900 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 text-blue-900 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            
            {/* Mobile Products Menu */}
            <div>
              <button 
                className="flex items-center justify-between w-full px-6 py-3 text-blue-900 hover:bg-blue-50 transition-all duration-300 font-semibold"
                onClick={() => toggleCategory("products")}
              >
                <span>Our Products</span>
                {openCategory === "products" ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </button>
              
              {openCategory === "products" && (
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50/50">
                  {Object.entries(navigationItems).map(([key, category]) => (
                    <div key={key}>
                      <div className="px-8 py-2 text-sm font-bold text-blue-800 border-t border-blue-200/30">
                        {category.title}
                      </div>
                      {category.items.map((item) => (
                        <div key={item.name}>
                          <button
                            className="flex items-center justify-between w-full px-10 py-2 text-sm text-blue-700 hover:bg-blue-100/50 transition-all duration-300"
                            onClick={() => item.subItems.length > 0 ? toggleSubCategory(item.name) : undefined}
                          >
                            <Link 
                              to={item.path} 
                              className="flex-1 text-left"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                            {item.subItems.length > 0 && (
                              openSubCategory === item.name ? <ChevronDown size={14} /> : <ChevronRight size={14} />
                            )}
                          </button>
                          {item.subItems.length > 0 && openSubCategory === item.name && (
                            <div className="bg-cyan-50/50">
                              {item.subItems.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.path}
                                  className="block px-14 py-2 text-sm text-blue-600 hover:bg-cyan-100/50 hover:text-blue-800 transition-all duration-300"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <Link
              to="/contact"
              className="px-6 py-3 text-blue-900 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="px-6 py-3">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg text-white font-semibold">
                Get a Quote
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
