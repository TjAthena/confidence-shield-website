
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "+919840021477"; // Company WhatsApp number
  
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello! I'm interested in learning more about your financial services. Can you help me?");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
          aria-label="WhatsApp Chat"
        >
          <MessageCircle className="w-8 h-8 text-white" />
        </button>
      </div>

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-green-500 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">Confidence Financial Services</h3>
                <p className="text-sm opacity-90">Typically replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-4">
            <div className="bg-gray-100 rounded-lg p-3 mb-4">
              <p className="text-sm text-gray-700">
                👋 Hi there! Welcome to Confidence Financial Services.
              </p>
              <p className="text-sm text-gray-700 mt-2">
                How can we help you today? We're here to assist with:
              </p>
              <ul className="text-sm text-gray-600 mt-2 space-y-1">
                <li>• Insurance Plans</li>
                <li>• Investment Options</li>
                <li>• Loan Services</li>
                <li>• Financial Planning</li>
              </ul>
            </div>
            
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">Start Chat on WhatsApp</span>
            </button>
            
            <p className="text-xs text-gray-500 text-center mt-3">
              Click to continue the conversation on WhatsApp
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppChat;
