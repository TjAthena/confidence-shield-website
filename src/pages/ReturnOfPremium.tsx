
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
      <section className="py-8 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="flex items-center mb-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-amber-500">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Return of Premium Plans</span>
          </div>
          
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 items-center">
            <div>
              <h1 className="mb-3 text-2xl font-bold text-gray-800">Return of Premium Plans</h1>
              <p className="text-gray-600">
                Return of Premium (ROP) insurance provides life protection and returns all paid premiums at the end of the policy term if the policyholder survives. It combines protection with savings.
              </p>
              <div className="mt-4 flex gap-3">
                <Button className="bg-amber-600 hover:bg-amber-700">
                  Get a Quote
                </Button>
                <Button variant="outline" className="border-gray-400 text-gray-700">
                  Learn More
                </Button>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80" 
                alt="Financial planning for family" 
                className="rounded-md shadow w-full object-cover h-[300px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="mb-4 text-xl font-medium text-gray-800">Understanding Return of Premium Plans</h2>
                <div className="text-gray-600">
                  <p className="mb-4">
                    Return of Premium Plans offer a unique combination of life protection and savings. Unlike traditional term insurance, these plans return all premiums paid if you survive the policy term.
                  </p>
                  <p>
                    This type of insurance appeals to those who want financial protection for their loved ones but are hesitant about "losing" their premium payments if they outlive the policy term.
                  </p>
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded border border-gray-200">
                  <h3 className="text-lg font-medium mb-2 text-gray-800">How Return of Premium Works</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 bg-white rounded border border-gray-200">
                      <h4 className="font-medium text-amber-700 mb-1">If You Outlive The Policy</h4>
                      <p className="text-gray-600">You receive back all premiums paid during the policy term, making it a zero-cost insurance coverage in retrospect.</p>
                    </div>
                    <div className="p-3 bg-white rounded border border-gray-200">
                      <h4 className="font-medium text-amber-700 mb-1">If The Unfortunate Happens</h4>
                      <p className="text-gray-600">Your nominees receive the full sum assured amount, providing them financial security in your absence.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <ProviderList providers={providers} />
              
              <div className="py-6">
                <h2 className="mb-4 text-xl font-medium text-gray-800">Key Benefits</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded">
                    <h3 className="mb-2 font-medium text-amber-700">Premium Return</h3>
                    <p className="text-gray-600">
                      Get back all your premium payments if you survive the policy term.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded">
                    <h3 className="mb-2 font-medium text-amber-700">Life Protection</h3>
                    <p className="text-gray-600">
                      Provides financial security to your family in case of unfortunate events.
                    </p>
                  </div>
                </div>
              </div>
              
              <FAQ faqs={faqs} />
            </div>
            <div>
              <div className="sticky top-20">
                <InsuranceCalculator type="term" />
                
                <div className="p-4 mt-6 bg-gray-50 rounded border border-gray-200">
                  <h3 className="mb-2 text-lg font-medium">Need Help?</h3>
                  <p className="mb-4 text-gray-600">
                    Our financial advisors can help you choose the right plan based on your needs.
                  </p>
                  <Link to="/contact">
                    <Button className="w-full bg-amber-600 hover:bg-amber-700">
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
