
import { Users, BookOpen, TrendingUp, CheckCircle, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProviderList from "@/components/products/ProviderList";
import FAQ from "@/components/products/FAQ";

const ChildEducation = () => {
  const providers = [
    {
      name: "SBI Life",
      description: "Comprehensive child education plans with guaranteed returns and life cover."
    },
    {
      name: "HDFC Life",
      description: "Flexible child plans with investment options and premium waiver benefits."
    },
    {
      name: "ICICI Prudential",
      description: "Market-linked child plans with systematic withdrawal options for education expenses."
    },
    {
      name: "Max Life Insurance",
      description: "Child education plans with guaranteed additions and maturity benefits."
    },
    {
      name: "LIC",
      description: "Traditional child endowment plans with bonus additions and assured returns."
    },
    {
      name: "Bajaj Allianz",
      description: "ULIP-based child plans with fund switching options and partial withdrawals."
    }
  ];

  const faqs = [
    {
      question: "What are Child Education Plans?",
      answer: "Child Education Plans are specialized insurance-cum-investment products designed to secure your child's educational future. They combine life insurance protection with systematic savings to create a corpus for higher education expenses."
    },
    {
      question: "When should I start a Child Education Plan?",
      answer: "The earlier you start, the better. Starting when your child is young allows more time for wealth creation through compounding. Even starting at birth gives you 18+ years to build a substantial education corpus."
    },
    {
      question: "What if something happens to me during the policy term?",
      answer: "Child education plans include premium waiver benefit. If the parent/policyholder passes away, future premiums are waived off, but the policy continues and the child receives the full maturity benefit as planned."
    },
    {
      question: "How much should I invest for my child's education?",
      answer: "Consider current education costs and inflation (8-10% annually). For professional courses abroad, you might need ₹50 lakhs to ₹1 crore. Our advisors can help calculate the exact amount based on your child's age and aspirations."
    }
  ];

  return (
    <div>
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 mx-auto">
          <div className="flex items-center mb-4 text-sm">
            <Link to="/" className="text-gray-500 hover:text-[#00BFFF]">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Child Education Plans</span>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
            <div>
              <h1 className="mb-4 text-3xl font-bold md:text-4xl text-[#001F3F]">Child Education Plans</h1>
              <p className="text-lg text-gray-600">
                Secure your child's educational dreams with specialized child education plans. Build a substantial corpus for higher education while ensuring financial protection through life insurance coverage.
              </p>
              <div className="mt-6 flex space-x-4">
                <Button className="bg-gradient-to-r from-[#00C853] to-[#00BFFF] hover:from-[#00C853]/90 hover:to-[#00BFFF]/90">
                  Calculate Education Cost
                </Button>
                <Button variant="outline" className="border-[#00C853] text-[#00C853] hover:bg-[#00C853]/10">
                  Compare Plans
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
                alt="Child education and learning" 
                className="rounded-lg shadow-lg w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-sm font-semibold text-[#00C853]">From ₹5,000/month</p>
                <p className="text-xs text-gray-500">Build ₹50 lakh corpus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="mb-12">
                <h2 className="mb-6 text-2xl font-semibold">Planning Your Child's Education</h2>
                <div className="space-y-4 text-gray-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <img 
                      src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80" 
                      alt="Students studying" 
                      className="rounded-lg shadow-md w-full h-[240px] object-cover"
                    />
                    <div>
                      <p>
                        Education costs are rising at 10-12% annually, making it crucial to start planning early. Child education plans combine the safety of insurance with the growth potential of investments to create a dedicated education fund.
                      </p>
                      <p className="mt-4">
                        These plans ensure that your child's educational aspirations are never compromised, whether they dream of studying medicine, engineering, or pursuing higher education abroad.
                      </p>
                    </div>
                  </div>
                  <p>
                    Our education planning experts help you estimate future education costs and design a systematic investment strategy that builds the required corpus while providing life cover protection.
                  </p>
                </div>

                <div className="mt-8 p-5 bg-gradient-to-r from-purple-50 to-pink-100 rounded-lg border border-purple-200">
                  <h3 className="text-lg font-semibold mb-3 text-[#001F3F]">Education Cost Planning</h3>
                  <p className="mb-4 text-gray-700">Key factors to consider:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-purple-200 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">1</span>
                      <span><strong>Current Age:</strong> Earlier you start, smaller the monthly investment needed.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-200 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">2</span>
                      <span><strong>Course Type:</strong> Professional courses cost ₹20-50 lakhs, abroad education ₹50L-1Cr.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-200 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">3</span>
                      <span><strong>Inflation Rate:</strong> Education inflation averages 10-12% annually in India.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-200 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">4</span>
                      <span><strong>Investment Horizon:</strong> Longer duration allows for higher equity allocation.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <ProviderList providers={providers} />
              
              <div className="py-10">
                <h2 className="mb-6 text-2xl font-semibold">Key Benefits</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="p-5 bg-gradient-to-br from-white to-purple-50 border border-purple-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Guaranteed Education Fund</h3>
                    <p className="text-gray-600">
                      Systematic wealth creation ensures your child's education fund is ready when needed.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80" 
                      alt="Education fund" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-purple-50 border border-purple-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Premium Waiver</h3>
                    <p className="text-gray-600">
                      If something happens to you, future premiums are waived but benefits continue.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1559526324-593bc2ace6a4?auto=format&fit=crop&w=400&q=80" 
                      alt="Premium waiver" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-purple-50 border border-purple-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Tax Benefits</h3>
                    <p className="text-gray-600">
                      Premiums qualify for tax deduction under Section 80C up to ₹1.5 lakhs annually.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1586486942853-511cec38552a?auto=format&fit=crop&w=400&q=80" 
                      alt="Tax benefits" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-purple-50 border border-purple-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Flexible Withdrawals</h3>
                    <p className="text-gray-600">
                      Partial withdrawals available for school fees and education milestones.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80" 
                      alt="Flexible withdrawals" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                </div>
              </div>
              
              <FAQ faqs={faqs} />
            </div>
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <div className="p-6 mt-6 bg-gradient-to-br from-white to-gray-50 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="mb-4 text-lg font-semibold">Need Expert Advice?</h3>
                  <p className="mb-4 text-gray-600">
                    Our education planning specialists can help you create a comprehensive strategy for your child's educational future.
                  </p>
                  <Link to="/contact">
                    <Button className="w-full bg-gradient-to-r from-[#00C853] to-[#00BFFF] hover:from-[#00C853]/90 hover:to-[#00BFFF]/90">
                      Plan My Child's Education
                    </Button>
                  </Link>
                  <div className="mt-4 p-3 bg-purple-50 border border-purple-100 rounded-md">
                    <p className="text-sm text-purple-800">
                      "Started when my daughter was 2, now she's graduating with a full education fund ready!" - Reena P.
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

export default ChildEducation;
