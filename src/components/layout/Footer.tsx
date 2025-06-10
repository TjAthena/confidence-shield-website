
import { Link } from "react-router-dom";
import { Sparkles, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-turquoise-dark via-turquoise-teal to-turquoise-dark text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-turquoise-light rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-turquoise-medium rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-turquoise-pale rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container px-4 py-16 mx-auto relative z-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <Link to="/" className="flex items-center space-x-2 group">
                <img
                  style={{ width: '100px', height: '100px' }}
                  src="/lovable-uploads/6c404703-9ca2-4fa0-891a-ad4b2a8ec18c.png"
                  alt="Confidence Financial Services"
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </Link>
            </div>
            <p className="text-turquoise-light/90 leading-relaxed mb-6">
              Providing reliable financial protection and security solutions for individuals and families across Tamil Nadu.
            </p>
            <div className="flex items-center space-x-2 text-turquoise-light">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Chennai, Tamil Nadu</span>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 text-turquoise-light glow-effect">Our Products</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/term-insurance" className="text-white/80 hover:text-turquoise-light transition-colors duration-300 flex items-center space-x-2 group">
                  <span className="w-1.5 h-1.5 bg-turquoise-light rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                  <span>Term Insurance</span>
                </Link>
              </li>
              <li>
                <Link to="/health-insurance" className="text-white/80 hover:text-turquoise-light transition-colors duration-300 flex items-center space-x-2 group">
                  <span className="w-1.5 h-1.5 bg-turquoise-light rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                  <span>Health Insurance</span>
                </Link>
              </li>
              <li>
                <Link to="/vehicle-insurance" className="text-white/80 hover:text-turquoise-light transition-colors duration-300 flex items-center space-x-2 group">
                  <span className="w-1.5 h-1.5 bg-turquoise-light rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                  <span>Vehicle Insurance</span>
                </Link>
              </li>
              <li>
                <Link to="/mutual-funds" className="text-white/80 hover:text-turquoise-light transition-colors duration-300 flex items-center space-x-2 group">
                  <span className="w-1.5 h-1.5 bg-turquoise-light rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                  <span>Mutual Funds</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 text-turquoise-light glow-effect">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/80 hover:text-turquoise-light transition-colors duration-300 flex items-center space-x-2 group">
                  <span className="w-1.5 h-1.5 bg-turquoise-light rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-turquoise-light transition-colors duration-300 flex items-center space-x-2 group">
                  <span className="w-1.5 h-1.5 bg-turquoise-light rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/80 hover:text-turquoise-light transition-colors duration-300 flex items-center space-x-2 group">
                  <span className="w-1.5 h-1.5 bg-turquoise-light rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                  <span>Our Products</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-turquoise-light transition-colors duration-300 flex items-center space-x-2 group">
                  <span className="w-1.5 h-1.5 bg-turquoise-light rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 text-turquoise-light glow-effect">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-turquoise-light mt-0.5 flex-shrink-0" />
                <div className="text-white/80">
                  <p className="text-sm">+91 44 4586 7799</p>
                  <p className="text-sm">+91 98400 21477</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-turquoise-light mt-0.5 flex-shrink-0" />
                <div className="text-white/80">
                  <p className="text-sm">help@gocfs.in</p>
                  <p className="text-sm">admin@gocfs.in</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-turquoise-light mt-0.5 flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                  <p>Sat: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-12 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-turquoise-light/80 text-center md:text-left">
              © {new Date().getFullYear()} Confidence Financial Services. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-turquoise-light/60 text-sm">Follow us:</span>
              <div className="flex space-x-3">
                {['Facebook', 'Instagram', 'LinkedIn', 'YouTube'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
                    aria-label={social}
                  >
                    <span className="text-xs font-bold text-turquoise-light">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
