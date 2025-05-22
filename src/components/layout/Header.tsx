
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
            <Link to="/products" className="font-medium text-gray-700 hover:text-[#00BFFF]">
              Our Products
            </Link>
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
            <Link
              to="/products"
              className="px-4 py-3 font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Products
            </Link>
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
