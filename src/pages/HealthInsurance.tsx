
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import InsuranceCalculator from "@/components/products/InsuranceCalculator";
import ProviderList from "@/components/products/ProviderList";
import FAQ from "@/components/products/FAQ";

const HealthInsurance = () => {
  const providers = [
    {
      name: "Navi",
      description: "Tech-first health insurance with quick claims and affordable premiums."
    },
    {
      name: "Reliance Health",
      description: "Comprehensive health coverage with an extensive hospital network."
    },
    {
      name: "HDFC ERGO",
      description: "Innovative health insurance solutions with digital-first approach."
    },
    {
      name: "ICICI Lombard",
      description: "Customer-focused health plans with quick claim settlement."
    },
    {
      name: "Star Health",
      description: "Specialized health insurance provider with customized plans."
    }
  ];
  
  const faqs = [
    {
      question: "What is Health Insurance?",
      answer: "Health insurance covers medical expenses incurred during hospitalization, treatments, and procedures. It provides financial protection against rising healthcare costs and ensures access to quality medical care."
    },
    {
      question: "Why do I need Health Insurance?",
      answer: "Health Insurance protects you financially against unexpected medical expenses, gives you access to quality healthcare, and ensures peace of mind knowing you won't have to compromise on medical treatment due to cost concerns."
    },
    {
      question: "What does Health Insurance typically cover?",
      answer: "Health insurance typically covers hospitalization expenses, pre and post hospitalization costs, daycare procedures, ambulance charges, and sometimes outpatient department (OPD) expenses, depending on the policy."
    },
    {
      question: "How do I choose the right Health Insurance plan?",
      answer: "Consider factors like coverage amount, network hospitals, sub-limits, waiting periods for pre-existing conditions, claim settlement ratio, and additional benefits. Our advisors can help you navigate these options based on your specific health needs and budget."
    }
  ];

  return (
    <div>
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="flex items-center mb-4 text-sm">
            <Link to="/" className="text-gray-500 hover:text-[#00BFFF]">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Health Insurance</span>
          </div>
          
          <h1 className="mb-4 text-3xl font-bold md:text-4xl text-[#001F3F]">Health Insurance</h1>
          <p className="max-w-3xl text-lg text-gray-600">
            Health insurance covers medical expenses incurred during hospitalization, treatments, and procedures. It provides financial protection against rising healthcare costs and ensures access to quality medical care.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="mb-12">
                <h2 className="mb-6 text-2xl font-semibold">Understanding Health Insurance</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Health Insurance is a crucial financial protection that covers medical expenses, ensuring you receive quality healthcare without financial strain. With rising medical costs, health insurance has become an essential part of financial planning.
                  </p>
                  <p>
                    Modern health insurance plans offer comprehensive coverage including hospitalization, daycare procedures, pre and post hospitalization expenses, and sometimes outpatient care.
                  </p>
                  <p>
                    At Confidence Financial, we partner with leading health insurance providers to help you find the most suitable coverage for your and your family's healthcare needs. Our expert advisors guide you through the selection process, ensuring you understand all aspects of your policy.
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
                      Safeguard against high medical expenses and hospitalization costs.
                    </p>
                  </div>
                  <div className="p-5 border border-gray-200 rounded-lg">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Quality Healthcare</h3>
                    <p className="text-gray-600">
                      Access to the best hospitals and medical facilities in the network.
                    </p>
                  </div>
                  <div className="p-5 border border-gray-200 rounded-lg">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Tax Benefits</h3>
                    <p className="text-gray-600">
                      Enjoy tax deductions on premiums paid under Section 80D.
                    </p>
                  </div>
                  <div className="p-5 border border-gray-200 rounded-lg">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Cashless Treatment</h3>
                    <p className="text-gray-600">
                      Convenient cashless treatment at network hospitals.
                    </p>
                  </div>
                </div>
              </div>
              
              <FAQ faqs={faqs} />
            </div>
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <InsuranceCalculator type="health" />
                
                <div className="p-6 mt-6 bg-gray-50 rounded-lg">
                  <h3 className="mb-4 text-lg font-semibold">Need Expert Advice?</h3>
                  <p className="mb-4 text-gray-600">
                    Our financial advisors can help you choose the right plan based on your specific health needs and budget.
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

export default HealthInsurance;
