
import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What happens during the online Terms?",
      answer: "Exchange upon reasonable or receive exchange but value in your agreement by agreeing into our terms and policy they would need an clear agreement via current any acceptance. You can choose online payment option against bill.",
    },
    {
      question: "Is exchange upon payments to service a good instance be my best acceptable products?",
      answer: "Our payment services are designed to provide secure and reliable transactions for all our financial products and services.",
    },
    {
      question: "What is the online registration process?",
      answer: "The online registration process is simple and secure, allowing you to access our full range of financial services.",
    },
    {
      question: "How should claims processed be online?",
      answer: "Claims are processed efficiently through our online portal with dedicated support to ensure quick resolution.",
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* FAQ Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-blue-600 mb-2">Some Important FAQ's</h2>
              <h3 className="text-4xl font-bold text-blue-900 mb-6">Common Frequently Asked Questions</h3>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-blue-50 transition-colors duration-300"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="flex items-center space-x-3">
                      <HelpCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <span className="text-lg font-semibold text-blue-900">{faq.question}</span>
                    </span>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-6">
                      <div className="pl-8 border-l-2 border-blue-200">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-8 text-center">
              <div className="bg-white rounded-2xl p-8 mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <HelpCircle className="w-16 h-16 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-blue-900 mb-4">Need Help?</h4>
                <p className="text-gray-600 mb-6">Our support team is here to assist you with any questions you may have.</p>
                <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
