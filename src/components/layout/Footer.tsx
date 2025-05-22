
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#001F3F] text-white">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-xl font-bold">Confidence Financial</h3>
            <p className="mb-4 text-gray-300">
              Providing reliable financial protection and security solutions for individuals and families.
            </p>
          </div>
          <div>
            <h4 className="mb-6 text-lg font-semibold">Products</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/products/life-protection" className="text-gray-300 hover:text-white">
                  Life Protection
                </Link>
              </li>
              <li>
                <Link to="/products/financial-security" className="text-gray-300 hover:text-white">
                  Financial Security
                </Link>
              </li>
              <li>
                <Link to="/products/financial-freedom" className="text-gray-300 hover:text-white">
                  Financial Freedom
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white">Our Products</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-lg font-semibold">Contact Us</h4>
            <address className="not-italic text-gray-300">
              <p className="mb-3">123 Financial Street</p>
              <p className="mb-3">Mumbai, Maharashtra</p>
              <p className="mb-3">Email: info@confidencefinancial.com</p>
              <p className="mb-3">Phone: +91 98765 43210</p>
            </address>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-gray-700">
          <p className="text-center text-gray-300">
            © {new Date().getFullYear()} Confidence Financial Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
