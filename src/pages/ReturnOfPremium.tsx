
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
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 mx-auto">
          <div className="flex items-center mb-4 text-sm">
            <Link to="/" className="text-gray-500 hover:text-[#00BFFF]">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Return of Premium Plans</span>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
            <div>
              <h1 className="mb-4 text-3xl font-bold md:text-4xl text-[#001F3F]">Return of Premium Plans</h1>
              <p className="text-lg text-gray-600">
                Return of Premium (ROP) insurance provides life protection and returns all paid premiums at the end of the policy term if the policyholder survives. It combines protection with savings.
              </p>
              <div className="mt-6 flex space-x-4">
                <Button className="bg-gradient-to-r from-[#001F3F] to-[#FFA000] hover:from-[#001F3F]/90 hover:to-[#FFA000]/90">
                  Get a Quote
                </Button>
                <Button variant="outline" className="border-[#001F3F] text-[#001F3F] hover:bg-[#001F3F]/10">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80" 
                alt="Financial planning for family" 
                className="rounded-lg shadow-lg w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-sm font-semibold text-[#FFA000]">Premium Returned</p>
                <p className="text-xs text-gray-500">If you survive the policy term</p>
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
                <h2 className="mb-6 text-2xl font-semibold">Understanding Return of Premium Plans</h2>
                <div className="space-y-4 text-gray-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <img 
                      src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=600&q=80" 
                      alt="Financial planning" 
                      className="rounded-lg shadow-md w-full h-[240px] object-cover"
                    />
                    <div>
                      <p>
                        Return of Premium Plans offer a unique combination of life protection and savings. Unlike traditional term insurance, these plans return all premiums paid if you survive the policy term.
                      </p>
                      <p className="mt-4">
                        This type of insurance appeals to those who want financial protection for their loved ones but are hesitant about "losing" their premium payments if they outlive the policy term.
                      </p>
                    </div>
                  </div>
                  <p>
                    At Confidence Financial, we partner with leading insurance providers to offer you the most competitive Return of Premium plans tailored to your specific needs and budget.
                  </p>
                </div>

                <div className="mt-8 p-5 bg-gradient-to-r from-amber-50 to-amber-100 rounded-lg border border-amber-200">
                  <h3 className="text-lg font-semibold mb-3 text-[#001F3F]">How Return of Premium Works</h3>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <div className="bg-white p-4 rounded-md shadow-sm mb-4">
                        <h4 className="font-semibold text-amber-700 mb-2">If You Outlive The Policy</h4>
                        <p className="text-gray-700">You receive back all premiums paid during the policy term, making it a zero-cost insurance coverage in retrospect.</p>
                      </div>
                      <div className="bg-white p-4 rounded-md shadow-sm">
                        <h4 className="font-semibold text-amber-700 mb-2">If The Unfortunate Happens</h4>
                        <p className="text-gray-700">Your nominees receive the full sum assured amount, providing them financial security in your absence.</p>
                      </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <img 
                        src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80" 
                        alt="Insurance concept" 
                        className="rounded-lg max-h-[200px] object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <ProviderList providers={providers} />
              
              <div className="py-10">
                <h2 className="mb-6 text-2xl font-semibold">Key Benefits</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="p-5 bg-gradient-to-br from-white to-amber-50 border border-amber-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#FFA000]">Premium Return</h3>
                    <p className="text-gray-600">
                      Get back all your premium payments if you survive the policy term.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=400&q=80" 
                      alt="Premium return" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-amber-50 border border-amber-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#FFA000]">Life Protection</h3>
                    <p className="text-gray-600">
                      Provides financial security to your family in case of unfortunate events.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=400&q=80" 
                      alt="Life protection" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-amber-50 border border-amber-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#FFA000]">Tax Benefits</h3>
                    <p className="text-gray-600">
                      Enjoy tax deductions on premiums paid under Section 80C.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=400&q=80" 
                      alt="Tax benefits" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-amber-50 border border-amber-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#FFA000]">Forced Savings</h3>
                    <p className="text-gray-600">
                      Acts as a disciplined savings mechanism over the policy term.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=400&q=80" 
                      alt="Forced savings" 
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
                    <Button className="w-full bg-gradient-to-r from-[#001F3F] to-[#FFA000] hover:from-[#001F3F]/90 hover:to-[#FFA000]/90">
                      Talk to an Advisor
                    </Button>
                  </Link>
                  <div className="mt-4 p-3 bg-amber-50 border border-amber-100 rounded-md">
                    <p className="text-sm text-amber-800">
                      "I love knowing that I get protection now and my money back later if all goes well. Perfect peace of mind." - Anjali K.
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

export default ReturnOfPremium;
