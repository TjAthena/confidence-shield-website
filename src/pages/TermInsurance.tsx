
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import InsuranceCalculator from "@/components/products/InsuranceCalculator";
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
      name: "Bajaj Allianz",
      description: "Provides competitive premiums with extensive coverage and add-on benefits."
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
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 mx-auto">
          <div className="flex items-center mb-4 text-sm">
            <Link to="/" className="text-gray-500 hover:text-[#00BFFF]">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Term Insurance</span>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
            <div>
              <h1 className="mb-4 text-3xl font-bold md:text-4xl text-[#001F3F]">Term Insurance</h1>
              <p className="text-lg text-gray-600">
                Term insurance provides pure life protection for a specified period. In the event of the policyholder's death during the policy term, the nominee receives the sum assured. It offers high coverage at affordable premiums.
              </p>
              <div className="mt-6 flex space-x-4">
                <Button className="bg-gradient-to-r from-[#001F3F] to-[#00BFFF] hover:from-[#001F3F]/90 hover:to-[#00BFFF]/90">
                  Get a Quote
                </Button>
                <Button variant="outline" className="border-[#001F3F] text-[#001F3F] hover:bg-[#001F3F]/10">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560472355-109703aa3edc?auto=format&fit=crop&w=800&q=80" 
                alt="Family protected by insurance" 
                className="rounded-lg shadow-lg w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-sm font-semibold text-[#001F3F]">From ₹500/month</p>
                <p className="text-xs text-gray-500">Protect your family's future</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="mb-12">
                <h2 className="mb-6 text-2xl font-semibold">Understanding Term Insurance</h2>
                <div className="space-y-4 text-gray-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <img 
                      src="https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=600&q=80" 
                      alt="Financial planning" 
                      className="rounded-lg shadow-md w-full h-[240px] object-cover"
                    />
                    <div>
                      <p>
                        Term Insurance is designed to provide financial protection against unexpected events, ensuring that you and your loved ones remain financially stable during difficult times.
                      </p>
                      <p className="mt-4">
                        With the rising costs of living, having adequate term insurance is essential for long-term financial planning and peace of mind.
                      </p>
                    </div>
                  </div>
                  <p>
                    At Confidence Financial, we help you compare plans from leading providers to find the best coverage at competitive rates. Our expert advisors guide you through the selection process, ensuring you make an informed decision.
                  </p>
                </div>

                <div className="mt-8 p-5 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold mb-3 text-[#001F3F]">How Term Insurance Premiums are Calculated</h3>
                  <p className="mb-4 text-gray-700">Term insurance premiums are primarily based on:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-blue-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">1</span>
                      <span><strong>Age & Gender:</strong> Younger individuals and females typically pay lower premiums due to lower mortality risk.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">2</span>
                      <span><strong>Smoking Status:</strong> Smokers pay 30-40% higher premiums due to increased health risks.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">3</span>
                      <span><strong>Sum Assured:</strong> Higher coverage amounts lead to higher premiums, though per thousand rates may decrease for large sums.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">4</span>
                      <span><strong>Policy Term:</strong> Longer coverage periods result in higher premiums due to increased mortality risk over time.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <ProviderList providers={providers} />
              
              <div className="py-10">
                <h2 className="mb-6 text-2xl font-semibold">Key Benefits</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="p-5 bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Financial Protection</h3>
                    <p className="text-gray-600">
                      Provides financial security to your family in case of unfortunate events.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1565514020179-026b92b2d71b?auto=format&fit=crop&w=400&q=80" 
                      alt="Financial protection" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Affordable Premiums</h3>
                    <p className="text-gray-600">
                      Get high coverage at competitive rates that fit within your budget.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1518183214770-9cffbec72538?auto=format&fit=crop&w=400&q=80" 
                      alt="Affordable premiums" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Tax Benefits</h3>
                    <p className="text-gray-600">
                      Enjoy tax deductions on premiums paid under Section 80C.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1563986768817-257bf91c5e9e?auto=format&fit=crop&w=400&q=80" 
                      alt="Tax benefits" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Peace of Mind</h3>
                    <p className="text-gray-600">
                      Rest assured knowing you have financial protection for unforeseen circumstances.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=400&q=80" 
                      alt="Peace of mind" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                </div>
              </div>
              
              <FAQ faqs={faqs} />
            </div>
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <InsuranceCalculator type="term" />
                
                <div className="p-6 mt-6 bg-gradient-to-br from-white to-gray-50 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="mb-4 text-lg font-semibold">Need Expert Advice?</h3>
                  <p className="mb-4 text-gray-600">
                    Our financial advisors can help you choose the right plan based on your specific needs and budget.
                  </p>
                  <Link to="/contact">
                    <Button className="w-full bg-gradient-to-r from-[#001F3F] to-[#00BFFF] hover:from-[#001F3F]/90 hover:to-[#00BFFF]/90">
                      Talk to an Advisor
                    </Button>
                  </Link>
                  <div className="mt-4 p-3 bg-blue-50 border border-blue-100 rounded-md">
                    <p className="text-sm text-blue-800">
                      "I'm grateful for the term insurance recommendation. It gave my family financial security when we needed it most." - Rahul S.
                    </p>
                  </div>
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
