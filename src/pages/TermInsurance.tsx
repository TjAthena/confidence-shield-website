import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import InsuranceCalculator from "@/components/products/InsuranceCalculator";
import ComparativeTermCalculator from "@/components/products/ComparativeTermCalculator";
import ProviderList from "@/components/products/ProviderList";
import FAQ from "@/components/products/FAQ";

const TermInsurance = () => {
  const providers = [
    {
      name: "HDFC Life",
      description: "One of India's leading life insurance providers with comprehensive coverage options."
    },
    {
      name: "Max Life Insurance",
      description: "Known for customer-centric policies and excellent claim settlement ratio."
    },
    {
      name: "ICICI Prudential",
      description: "Offers innovative insurance products with flexible options and benefits."
    },
    {
      name: "LIC",
      description: "India's largest and most trusted life insurance provider with wide coverage options."
    },
    {
      name: "SBI Life",
      description: "Reliable insurance solutions backed by India's largest banking network."
    }
  ];
  
  const faqs = [
    {
      question: "What is Term Insurance?",
      answer: "Term insurance provides pure life coverage for a specified period. In the event of the policyholder's death during the policy term, the nominee receives the sum assured. It offers high coverage at affordable premiums."
    },
    {
      question: "Why do I need Term Insurance?",
      answer: "Term Insurance provides essential financial protection for your family in case of your untimely demise, ensuring they can maintain their standard of living and meet financial obligations like loans, education expenses, and daily needs."
    },
    {
      question: "How much Term Insurance coverage do I need?",
      answer: "Financial experts recommend having term insurance coverage of at least 10-15 times your annual income. However, the ideal coverage depends on your specific circumstances including income, liabilities, dependents, and financial goals."
    },
    {
      question: "What factors affect Term Insurance premiums?",
      answer: "Several factors impact your premium including age, health condition, lifestyle habits (smoking/drinking), occupation, coverage amount, policy term, and any additional riders selected."
    }
  ];

  return (
    <div>
      <section className="py-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 mx-auto">
          <div className="flex items-center mb-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-blue-500 transition-colors">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Term Insurance</span>
          </div>
          
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 items-center">
            <div>
              <h1 className="mb-3 text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Term Insurance</h1>
              <p className="text-gray-600">
                Term insurance provides pure life protection for a specified period, offering high coverage at affordable premiums. If the insured passes away during the policy term, the nominee receives the sum assured.
              </p>
              <div className="mt-4 flex gap-3">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 duration-200">
                  Get a Quote
                </Button>
                <Button variant="outline" className="border-gray-400 text-gray-700 hover:bg-gray-100 hover:border-blue-300 transition-all transform hover:scale-105 duration-200">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hover:scale-[1.02] transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1560472355-109703aa3edc?auto=format&fit=crop&w=800&q=80" 
                alt="Family protected by insurance" 
                className="rounded-md shadow-md hover:shadow-lg w-full object-cover h-[300px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* New Comparative Calculator Section */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Compare Term Insurance Quotes
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get instant quotes from top insurance providers and find the best term insurance plan that suits your needs and budget.
              </p>
            </div>
            <ComparativeTermCalculator />
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="mb-4 text-xl font-medium bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Understanding Term Insurance</h2>
                <div className="text-gray-600">
                  <p className="mb-4">
                    Term Insurance is designed to provide financial protection against unexpected events, ensuring that you and your loved ones remain financially stable during difficult times.
                  </p>
                  <p>
                    With the rising costs of living, having adequate term insurance is essential for long-term financial planning and peace of mind.
                  </p>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded border border-gray-200 hover:shadow-md transition-all hover:bg-gradient-to-r hover:from-gray-100 hover:to-blue-100">
                  <h3 className="text-lg font-medium mb-2 text-gray-800">Premium Calculation Factors</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start hover:translate-x-1 transition-transform duration-200">
                      <span className="mr-2">•</span>
                      <span><strong>Age & Gender:</strong> Younger individuals and females typically pay lower premiums.</span>
                    </li>
                    <li className="flex items-start hover:translate-x-1 transition-transform duration-200">
                      <span className="mr-2">•</span>
                      <span><strong>Smoking Status:</strong> Smokers pay 30-40% higher premiums due to increased health risks.</span>
                    </li>
                    <li className="flex items-start hover:translate-x-1 transition-transform duration-200">
                      <span className="mr-2">•</span>
                      <span><strong>Sum Assured:</strong> Higher coverage amounts lead to higher premiums.</span>
                    </li>
                    <li className="flex items-start hover:translate-x-1 transition-transform duration-200">
                      <span className="mr-2">•</span>
                      <span><strong>Policy Term:</strong> Longer coverage periods result in higher premiums.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <ProviderList providers={providers} />
              <FAQ faqs={faqs} />
            </div>
            <div>
              <div className="sticky top-20">
                <InsuranceCalculator type="term" />
                
                <div className="p-4 mt-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded border border-gray-200 hover:shadow-md transition-all hover:from-blue-100 hover:to-blue-200">
                  <h3 className="mb-2 text-lg font-medium">Need Help?</h3>
                  <p className="mb-4 text-gray-600">
                    Our financial advisors can help you choose the right plan based on your needs.
                  </p>
                  <Link to="/contact">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-[1.02] duration-200">
                      Talk to an Advisor
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermInsurance;
