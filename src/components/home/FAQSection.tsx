
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What types of insurance do you offer?",
      answer: "We offer comprehensive insurance solutions including Life Insurance (Term & Savings), Health Insurance (Individual, Family & Group), Vehicle Insurance, and various investment products like Mutual Funds and Fixed Deposits."
    },
    {
      question: "How do I choose the right insurance plan?",
      answer: "Our expert advisors analyze your financial situation, family needs, and future goals to recommend the most suitable insurance plans. We provide personalized consultations to ensure you get the best coverage for your specific requirements."
    },
    {
      question: "What is the claim settlement process?",
      answer: "We have a streamlined claim settlement process with over 90% success rate. Our dedicated claims support team assists you throughout the process, ensuring quick and stress-free claim settlements with minimal documentation."
    },
    {
      question: "Do you provide investment advisory services?",
      answer: "Yes, we offer comprehensive investment advisory services including Mutual Funds, Fixed Deposits, Bonds, and retirement planning solutions. Our certified financial advisors help you build a diversified portfolio for long-term wealth creation."
    },
    {
      question: "How can I get a quote for insurance?",
      answer: "Getting a quote is simple! You can visit our website, call our helpline, or visit our office. We provide instant quotes from top insurers, allowing you to compare plans and choose the best option for your needs."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-turquoise-pale/30">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="FAQ Support"
              className="w-full h-96 object-cover rounded-3xl shadow-turquoise"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-turquoise-dark/20 to-transparent rounded-3xl"></div>
          </div>

          {/* Right Side - FAQs */}
          <div>
            <h2 className="text-4xl font-bold text-turquoise-dark mb-8">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white/80 backdrop-blur-md rounded-xl border border-turquoise-light/30 overflow-hidden shadow-lg"
                >
                  <button
                    className={`w-full p-6 text-left flex items-center justify-between transition-all duration-300 ${
                      activeIndex === index 
                        ? 'bg-gradient-to-r from-turquoise-light/20 to-turquoise-pale/40' 
                        : 'hover:bg-turquoise-light/10'
                    }`}
                    onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                  >
                    <h3 className="text-lg font-semibold text-turquoise-dark pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {activeIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-turquoise-teal" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-turquoise-teal" />
                      )}
                    </div>
                  </button>
                  
                  {activeIndex === index && (
                    <div className="px-6 pb-6">
                      <p className="text-turquoise-dark/80 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
