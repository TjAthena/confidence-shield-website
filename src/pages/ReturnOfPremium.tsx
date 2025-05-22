
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import InsuranceCalculator from "@/components/products/InsuranceCalculator";
import ProviderList from "@/components/products/ProviderList";
import FAQ from "@/components/products/FAQ";

const ReturnOfPremium = () => {
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
      question: "What is Return of Premium Insurance?",
      answer: "Return of Premium (ROP) insurance provides life coverage and returns all paid premiums at the end of the policy term if the policyholder survives. It combines protection with savings."
    },
    {
      question: "Why choose Return of Premium Plans?",
      answer: "ROP plans offer the dual benefit of life protection and the return of all premiums paid if you survive the policy term, making it an attractive option for those who want both protection and guaranteed returns."
    },
    {
      question: "How is Return of Premium different from regular Term Insurance?",
      answer: "Unlike regular term insurance where premiums are forfeited at the end of the term, Return of Premium plans refund all premiums paid if the policyholder survives the policy term, though at a higher premium cost."
    },
    {
      question: "Are Return of Premium plans worth the higher premiums?",
      answer: "This depends on your financial priorities. ROP plans cost more than regular term insurance but offer a guaranteed return of premiums. If you value this certainty and the psychological benefit of getting back what you paid, it may be worth the higher cost."
    }
  ];

  return (
    <div>
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="flex items-center mb-4 text-sm">
            <Link to="/" className="text-gray-500 hover:text-[#00BFFF]">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Return of Premium Plans</span>
          </div>
          
          <h1 className="mb-4 text-3xl font-bold md:text-4xl text-[#001F3F]">Return of Premium Plans</h1>
          <p className="max-w-3xl text-lg text-gray-600">
            Return of Premium (ROP) insurance provides life protection and returns all paid premiums at the end of the policy term if the policyholder survives. It combines protection with savings.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="mb-12">
                <h2 className="mb-6 text-2xl font-semibold">Understanding Return of Premium Plans</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Return of Premium Plans offer a unique combination of life protection and savings. Unlike traditional term insurance, these plans return all premiums paid if you survive the policy term.
                  </p>
                  <p>
                    This type of insurance appeals to those who want financial protection for their loved ones but are hesitant about "losing" their premium payments if they outlive the policy term.
                  </p>
                  <p>
                    At Confidence Financial, we partner with leading insurance providers to offer you the most competitive Return of Premium plans tailored to your specific needs and budget.
                  </p>
                </div>
              </div>
              
              <ProviderList providers={providers} />
              
              <div className="py-10">
                <h2 className="mb-6 text-2xl font-semibold">Key Benefits</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="p-5 border border-gray-200 rounded-lg">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Premium Return</h3>
                    <p className="text-gray-600">
                      Get back all your premium payments if you survive the policy term.
                    </p>
                  </div>
                  <div className="p-5 border border-gray-200 rounded-lg">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Life Protection</h3>
                    <p className="text-gray-600">
                      Provides financial security to your family in case of unfortunate events.
                    </p>
                  </div>
                  <div className="p-5 border border-gray-200 rounded-lg">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Tax Benefits</h3>
                    <p className="text-gray-600">
                      Enjoy tax deductions on premiums paid under Section 80C.
                    </p>
                  </div>
                  <div className="p-5 border border-gray-200 rounded-lg">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Forced Savings</h3>
                    <p className="text-gray-600">
                      Acts as a disciplined savings mechanism over the policy term.
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

export default ReturnOfPremium;
