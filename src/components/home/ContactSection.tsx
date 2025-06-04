
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-2">Have a Question?</h2>
            <h3 className="text-4xl font-bold text-blue-600 mb-8">Reach Us.</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our friendly business assistants team is glad to welcome calls from 8:00 AM to 06:00 PM. Please 
              feel free to get in touch with us and have direct connection, the experts will be happy to help you.
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-blue-900 font-semibold mb-2">Contact Name</label>
                  <input 
                    type="text" 
                    className="w-full p-4 border border-blue-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-blue-900 font-semibold mb-2">Contact Number</label>
                  <input 
                    type="tel" 
                    className="w-full p-4 border border-blue-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                    placeholder="Enter your phone"
                  />
                </div>
              </div>
              <div>
                <label className="block text-blue-900 font-semibold mb-2">Customer Requirement</label>
                <input 
                  type="text" 
                  className="w-full p-4 border border-blue-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                  placeholder="Describe your requirement"
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold py-4 rounded-xl transition-all duration-300">
                Submit Request
              </Button>
            </form>
          </div>

          {/* Contact Info & Illustration */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-8">
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Phone className="w-16 h-16 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-blue-900 mb-4">Get in Touch</h4>
                <p className="text-gray-600">We're here to help you with all your financial needs.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h5 className="font-bold text-blue-900 mb-2">Address</h5>
                <p className="text-gray-600 text-sm">Chennai, Tamil Nadu</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h5 className="font-bold text-blue-900 mb-2">Mail Us</h5>
                <p className="text-gray-600 text-sm">help@gocfs.in</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h5 className="font-bold text-blue-900 mb-2">Telephone</h5>
                <p className="text-gray-600 text-sm">+91 44 4586 7799</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h5 className="font-bold text-blue-900 mb-2">Working Time</h5>
                <p className="text-gray-600 text-sm">Mon-Fri: 9AM-6PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
