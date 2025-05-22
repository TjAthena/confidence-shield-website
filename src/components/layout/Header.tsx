
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-[#001F3F]">
            Confidence
            <span className="text-[#00BFFF]">Financial</span>
          </span>
        </Link>

        {!isMobile ? (
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-gray-700 hover:text-[#00BFFF]">
              Home
            </Link>
            <Link to="/about" className="font-medium text-gray-700 hover:text-[#00BFFF]">
              About Us
            </Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-medium text-gray-700 hover:text-[#00BFFF] bg-transparent">
                    Financial Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] grid-cols-3 gap-3 p-4">
                      {financialProducts.map((category) => (
                        <div key={category.title} className="space-y-2">
                          <h4 className="font-medium text-sm">{category.title}</h4>
                          <ul className="space-y-1">
                            {category.items.map((item) => (
                              <li key={item.name}>
                                <NavigationMenuLink asChild>
                                  <Link 
                                    to={item.path}
                                    className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    {item.name}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link to="/contact" className="font-medium text-gray-700 hover:text-[#00BFFF]">
              Contact Us
            </Link>
            <Button className="bg-[#00C853] hover:bg-[#00C853]/90">Get Started</Button>
          </nav>
        ) : (
          <button onClick={toggleMenu} className="p-2 md:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>

      {isMobile && isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-lg md:hidden">
          <nav className="flex flex-col py-4">
            <Link
              to="/"
              className="px-4 py-3 font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="px-4 py-3 font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            
            <div className="px-4 py-3 font-medium text-gray-700">
              <div className="flex items-center justify-between">
                <span>Financial Products</span>
                <ChevronDown size={16} />
              </div>
              <div className="pl-4 mt-2 space-y-2">
                {financialProducts.map((category) => (
                  <div key={category.title} className="mb-2">
                    <h4 className="mb-1 text-sm font-semibold text-gray-500">{category.title}</h4>
                    <ul className="space-y-1">
                      {category.items.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.path}
                            className="block py-1 text-gray-700"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            
            <Link
              to="/contact"
              className="px-4 py-3 font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <div className="px-4 py-3">
              <Button className="w-full bg-[#00C853] hover:bg-[#00C853]/90">Get Started</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
