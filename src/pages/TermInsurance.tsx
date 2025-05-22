
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
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="flex items-center mb-4 text-sm">
            <Link to="/" className="text-gray-500 hover:text-[#00BFFF]">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Term Insurance</span>
          </div>
          
          <h1 className="mb-4 text-3xl font-bold md:text-4xl text-[#001F3F]">Term Insurance</h1>
          <p className="max-w-3xl text-lg text-gray-600">
            Term insurance provides pure life protection for a specified period. In the event of the policyholder's death during the policy term, the nominee receives the sum assured. It offers high coverage at affordable premiums.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="mb-12">
                <h2 className="mb-6 text-2xl font-semibold">Understanding Term Insurance</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Term Insurance is designed to provide financial protection against unexpected events, ensuring that you and your loved ones remain financially stable during difficult times.
                  </p>
                  <p>
                    With the rising costs of living, having adequate term insurance is essential for long-term financial planning and peace of mind.
                  </p>
                  <p>
                    At Confidence Financial, we help you compare plans from leading providers to find the best coverage at competitive rates. Our expert advisors guide you through the selection process, ensuring you make an informed decision.
                  </p>
                </div>
              </div>
              
              <ProviderList providers={providers} />
              
              <div className="py-10">
                <h2 className="mb-6 text-2xl font-semibold">Key Benefits</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="p-5 border border-gray-200 rounded-lg">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Financial Protection</h3>
                    <p className="text-gray-600">
                      Provides financial security to your family in case of unfortunate events.
                    </p>
                  </div>
                  <div className="p-5 border border-gray-200 rounded-lg">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Affordable Premiums</h3>
                    <p className="text-gray-600">
                      Get high coverage at competitive rates that fit within your budget.
                    </p>
                  </div>
                  <div className="p-5 border border-gray-200 rounded-lg">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Tax Benefits</h3>
                    <p className="text-gray-600">
                      Enjoy tax deductions on premiums paid under Section 80C.
                    </p>
                  </div>
                  <div className="p-5 border border-gray-200 rounded-lg">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Peace of Mind</h3>
                    <p className="text-gray-600">
                      Rest assured knowing you have financial protection for unforeseen circumstances.
                    </p>
                  </div>
                </div>
              </div>
              
              <FAQ faqs={faqs} />
            </div>
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <InsuranceCalculator type="term" />
                
                <div className="p-6 mt-6 bg-gray-50 rounded-lg">
                  <h3 className="mb-4 text-lg font-semibold">Need Expert Advice?</h3>
                  <p className="mb-4 text-gray-600">
                    Our financial advisors can help you choose the right plan based on your specific needs and budget.
                  </p>
                  <Link to="/contact">
                    <Button className="w-full bg-[#001F3F] hover:bg-[#001F3F]/90">
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
