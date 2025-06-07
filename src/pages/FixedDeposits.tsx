
import { Banknote, TrendingUp, Shield, CheckCircle, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProviderList from "@/components/products/ProviderList";
import FAQ from "@/components/products/FAQ";

const FixedDeposits = () => {
  const providers = [
    {
      name: "Bajaj Finance",
      description: "High interest rates on fixed deposits with flexible tenure options and easy booking."
    },
    {
      name: "Shriram Finance",
      description: "Competitive FD rates with senior citizen benefits and systematic investment options."
    },
    {
      name: "Mahindra Finance",
      description: "Attractive fixed deposit schemes with guaranteed returns and tax-saving options."
    },
    {
      name: "Sundaram Finance",
      description: "Reliable fixed deposits with consistent returns and customer-friendly policies."
    },
    {
      name: "HDFC Bank",
      description: "Bank fixed deposits with high safety ratings and flexible withdrawal options."
    },
    {
      name: "ICICI Bank",
      description: "Digital FD booking with competitive rates and auto-renewal facilities."
    }
  ];

  const faqs = [
    {
      question: "What are Fixed Deposits (FD)?",
      answer: "Fixed Deposits are investment instruments where you deposit a lump sum for a fixed period at a predetermined interest rate. They offer guaranteed returns and capital protection, making them ideal for conservative investors."
    },
    {
      question: "What are Recurring Deposits (RD)?",
      answer: "Recurring Deposits allow you to invest a fixed amount every month for a predetermined period. It's perfect for systematic savings and helps build a substantial corpus through regular small investments."
    },
    {
      question: "Are FDs and RDs safe investments?",
      answer: "Yes, FDs and RDs are among the safest investment options. Bank deposits are insured up to ₹5 lakhs by DICGC, and reputable NBFCs have strong credit ratings ensuring capital safety."
    },
    {
      question: "What are the tax implications?",
      answer: "Interest earned on FDs/RDs is taxable as per your income tax slab. However, tax-saving FDs under Section 80C provide deduction up to ₹1.5 lakhs with a 5-year lock-in period."
    }
  ];

  return (
    <div>
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 mx-auto">
          <div className="flex items-center mb-4 text-sm">
            <Link to="/" className="text-gray-500 hover:text-[#00BFFF]">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Fixed Deposits & Recurring Deposits</span>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
            <div>
              <h1 className="mb-4 text-3xl font-bold md:text-4xl text-[#001F3F]">Fixed Deposits & Recurring Deposits</h1>
              <p className="text-lg text-gray-600">
                Secure your savings with guaranteed returns through Fixed Deposits and build wealth systematically with Recurring Deposits. Choose from top-rated banks and NBFCs offering competitive interest rates.
              </p>
              <div className="mt-6 flex space-x-4">
                <Button className="bg-gradient-to-r from-[#00C853] to-[#00BFFF] hover:from-[#00C853]/90 hover:to-[#00BFFF]/90">
                  Compare Rates
                </Button>
                <Button variant="outline" className="border-[#00C853] text-[#00C853] hover:bg-[#00C853]/10">
                  Calculate Returns
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80" 
                alt="Fixed deposits savings" 
                className="rounded-lg shadow-lg w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-sm font-semibold text-[#00C853]">Up to 8.5% p.a.</p>
                <p className="text-xs text-gray-500">Interest rates available</p>
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
                <h2 className="mb-6 text-2xl font-semibold">Understanding Fixed & Recurring Deposits</h2>
                <div className="space-y-4 text-gray-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <img 
                      src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80" 
                      alt="Savings and investment" 
                      className="rounded-lg shadow-md w-full h-[240px] object-cover"
                    />
                    <div>
                      <p>
                        Fixed Deposits and Recurring Deposits are traditional savings instruments that offer guaranteed returns with capital protection. They are ideal for conservative investors who prioritize safety over high returns.
                      </p>
                      <p className="mt-4">
                        While FDs require a lump sum investment, RDs allow systematic monthly investments, making them suitable for different investor profiles and financial goals.
                      </p>
                    </div>
                  </div>
                  <p>
                    At Confidence Financial, we help you compare interest rates across various banks and NBFCs, ensuring you get the best returns on your savings while maintaining complete safety of your capital.
                  </p>
                </div>

                <div className="mt-8 p-5 bg-gradient-to-r from-green-50 to-blue-100 rounded-lg border border-green-200">
                  <h3 className="text-lg font-semibold mb-3 text-[#001F3F]">Interest Rate Factors</h3>
                  <p className="mb-4 text-gray-700">FD and RD interest rates depend on:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-green-200 text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">1</span>
                      <span><strong>Deposit Amount:</strong> Higher amounts often get better rates in many schemes.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-200 text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">2</span>
                      <span><strong>Tenure Period:</strong> Longer tenure typically offers higher interest rates.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-200 text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">3</span>
                      <span><strong>Senior Citizen Status:</strong> Additional 0.25-0.50% extra interest for seniors.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-200 text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">4</span>
                      <span><strong>Institution Type:</strong> NBFCs often offer higher rates than banks.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <ProviderList providers={providers} />
              
              <div className="py-10">
                <h2 className="mb-6 text-2xl font-semibold">Key Benefits</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="p-5 bg-gradient-to-br from-white to-green-50 border border-green-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Guaranteed Returns</h3>
                    <p className="text-gray-600">
                      Fixed interest rates ensure predictable and guaranteed returns on your investment.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=400&q=80" 
                      alt="Guaranteed returns" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-green-50 border border-green-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Capital Safety</h3>
                    <p className="text-gray-600">
                      Your principal amount is completely safe with deposit insurance protection.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=400&q=80" 
                      alt="Capital safety" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-green-50 border border-green-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Flexible Tenure</h3>
                    <p className="text-gray-600">
                      Choose from 7 days to 10 years tenure based on your financial goals and needs.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1554224154-26032fced8bd?auto=format&fit=crop&w=400&q=80" 
                      alt="Flexible tenure" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-green-50 border border-green-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Tax Benefits</h3>
                    <p className="text-gray-600">
                      Tax-saving FDs offer deductions under Section 80C along with guaranteed returns.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1586486942853-511cec38552a?auto=format&fit=crop&w=400&q=80" 
                      alt="Tax benefits" 
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
                    Our investment advisors can help you choose the best FD/RD options with optimal returns and tenure.
                  </p>
                  <Link to="/contact">
                    <Button className="w-full bg-gradient-to-r from-[#00C853] to-[#00BFFF] hover:from-[#00C853]/90 hover:to-[#00BFFF]/90">
                      Talk to an Advisor
                    </Button>
                  </Link>
                  <div className="mt-4 p-3 bg-green-50 border border-green-100 rounded-md">
                    <p className="text-sm text-green-800">
                      "Consistent returns and complete safety of my savings. Perfect for my retirement planning!" - Sunita M.
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

export default FixedDeposits;
