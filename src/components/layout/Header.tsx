
import { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
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
    <header className="bg-white border-b border-gray-100 shadow-sm">
      <div className="container flex items-center justify-between h-14 px-4 mx-auto">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-[#001F3F]">
            Confidence
            <span className="font-bold text-[#00BFFF]">Financial</span>
          </span>
        </Link>

        {!isMobile ? (
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-[#00BFFF]">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-[#00BFFF]">
              About
            </Link>
            
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-[#00BFFF] gap-1"
                onClick={() => toggleCategory("products")}
              >
                Products
                <ChevronDown size={16} />
              </button>
              
              <div className="hidden group-hover:block absolute top-full left-0 w-52 bg-white shadow-md rounded-md z-50">
                {financialProducts.map((category) => (
                  <div key={category.title} className="border-b border-gray-100 last:border-none">
                    <div className="p-3 font-medium text-[#001F3F]">{category.title}</div>
                    {category.items.map((item) => (
                      <Link 
                        key={item.name}
                        to={item.path}
                        className="block p-3 pl-5 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#00BFFF]"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            
            <Link to="/contact" className="text-gray-700 hover:text-[#00BFFF]">
              Contact
            </Link>
            <Button className="bg-[#00BFFF] hover:bg-[#00BFFF]/90">Get Started</Button>
          </nav>
        ) : (
          <button onClick={toggleMenu} className="p-2 md:hidden">
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        )}
      </div>

      {isMobile && isMenuOpen && (
        <div className="absolute top-14 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-md md:hidden">
          <nav className="flex flex-col py-2">
            <Link
              to="/"
              className="px-4 py-2 text-gray-700 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="px-4 py-2 text-gray-700 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            
            <div>
              <button 
                className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-gray-50"
                onClick={() => toggleCategory("products")}
              >
                <span>Products</span>
                {openCategory === "products" ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </button>
              
              {openCategory === "products" && (
                <div className="bg-gray-50">
                  {financialProducts.map((category) => (
                    <div key={category.title} className="border-t border-gray-100">
                      <div className="px-4 py-2 text-sm font-medium text-gray-700">{category.title}</div>
                      {category.items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-6 py-2 text-sm text-gray-600 hover:bg-gray-100"
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
              className="px-4 py-2 text-gray-700 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="px-4 py-2">
              <Button className="w-full bg-[#00BFFF] hover:bg-[#00BFFF]/90">Get Started</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
