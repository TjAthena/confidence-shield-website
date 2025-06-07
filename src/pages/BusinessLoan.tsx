
import { Briefcase, TrendingUp, Building, CheckCircle, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProviderList from "@/components/products/ProviderList";
import FAQ from "@/components/products/FAQ";

const BusinessLoan = () => {
  const providers = [
    {
      name: "SBI",
      description: "Leading bank offering comprehensive business loan solutions for SMEs and large enterprises."
    },
    {
      name: "HDFC Bank",
      description: "Quick business loans with minimal documentation and competitive interest rates."
    },
    {
      name: "ICICI Bank",
      description: "Digital business lending solutions with flexible repayment options."
    },
    {
      name: "Axis Bank",
      description: "Customized business loan products for various industry verticals and business needs."
    },
    {
      name: "Bajaj Finserv",
      description: "Fast business loans with instant approval and quick disbursement for urgent needs."
    },
    {
      name: "Tata Capital",
      description: "Flexible business financing options with collateral and unsecured loan variants."
    }
  ];

  const faqs = [
    {
      question: "What is a Business Loan?",
      answer: "A business loan is financing provided to businesses for various operational needs like working capital, equipment purchase, expansion, inventory, or debt consolidation. It can be secured or unsecured depending on the loan amount and business profile."
    },
    {
      question: "What can I use a business loan for?",
      answer: "Business loans can be used for working capital, purchasing equipment/machinery, business expansion, inventory financing, debt consolidation, office setup, marketing campaigns, or any other legitimate business purpose."
    },
    {
      question: "What documents are required for business loan?",
      answer: "Required documents include business registration certificate, GST registration, ITR for 2-3 years, bank statements, financial statements, business plan, KYC documents of directors/partners, and collateral documents if applicable."
    },
    {
      question: "How is business loan eligibility determined?",
      answer: "Eligibility depends on business vintage (minimum 2-3 years), annual turnover, credit score of business and promoters, cash flow, debt-to-income ratio, and the purpose of the loan. Profitability and growth trends are also considered."
    }
  ];

  return (
    <div>
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 mx-auto">
          <div className="flex items-center mb-4 text-sm">
            <Link to="/" className="text-gray-500 hover:text-[#00BFFF]">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Business Loan</span>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
            <div>
              <h1 className="mb-4 text-3xl font-bold md:text-4xl text-[#001F3F]">Business Loan</h1>
              <p className="text-lg text-gray-600">
                Fuel your business growth with flexible business loans tailored to your needs. Get working capital, equipment financing, or expansion funds with competitive rates and quick approval process.
              </p>
              <div className="mt-6 flex space-x-4">
                <Button className="bg-gradient-to-r from-[#00C853] to-[#00BFFF] hover:from-[#00C853]/90 hover:to-[#00BFFF]/90">
                  Apply Now
                </Button>
                <Button variant="outline" className="border-[#00C853] text-[#00C853] hover:bg-[#00C853]/10">
                  Check Eligibility
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80" 
                alt="Business growth and expansion" 
                className="rounded-lg shadow-lg w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-sm font-semibold text-[#00C853]">From 9.5% p.a.</p>
                <p className="text-xs text-gray-500">Interest rates starting</p>
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
                <h2 className="mb-6 text-2xl font-semibold">Understanding Business Loans</h2>
                <div className="space-y-4 text-gray-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <img 
                      src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=600&q=80" 
                      alt="Business meeting and planning" 
                      className="rounded-lg shadow-md w-full h-[240px] object-cover"
                    />
                    <div>
                      <p>
                        Business loans provide the necessary capital to start, run, or expand your business operations. Whether you need working capital for daily operations or funds for major expansion, business loans offer flexible solutions.
                      </p>
                      <p className="mt-4">
                        With various types of business loans available - from traditional term loans to modern fintech solutions - businesses can access the right financing option that matches their specific requirements and repayment capacity.
                      </p>
                    </div>
                  </div>
                  <p>
                    Our business loan experts understand different industry needs and help you identify the most suitable financing option, negotiate better terms, and streamline the application process for faster approval.
                  </p>
                </div>

                <div className="mt-8 p-5 bg-gradient-to-r from-violet-50 to-purple-100 rounded-lg border border-violet-200">
                  <h3 className="text-lg font-semibold mb-3 text-[#001F3F]">Types of Business Loans</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-violet-200 text-violet-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">1</span>
                      <div>
                        <strong>Working Capital Loan:</strong> Short-term financing for daily operations, inventory, and cash flow needs.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-violet-200 text-violet-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">2</span>
                      <div>
                        <strong>Term Loan:</strong> Long-term financing for equipment purchase, expansion, or major capital investments.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-violet-200 text-violet-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">3</span>
                      <div>
                        <strong>MSME Loan:</strong> Special loans for micro, small, and medium enterprises with government backing.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <ProviderList providers={providers} />
              
              <div className="py-10">
                <h2 className="mb-6 text-2xl font-semibold">Key Benefits</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="p-5 bg-gradient-to-br from-white to-violet-50 border border-violet-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Flexible Usage</h3>
                    <p className="text-gray-600">
                      Use funds for working capital, equipment, expansion, inventory, or any business need.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80" 
                      alt="Flexible usage" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-violet-50 border border-violet-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Quick Processing</h3>
                    <p className="text-gray-600">
                      Fast approval process with minimal documentation for established businesses.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=400&q=80" 
                      alt="Quick processing" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-violet-50 border border-violet-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Competitive Rates</h3>
                    <p className="text-gray-600">
                      Attractive interest rates based on business profile and credit history.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=400&q=80" 
                      alt="Competitive rates" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-violet-50 border border-violet-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Flexible Repayment</h3>
                    <p className="text-gray-600">
                      Choose repayment tenure that aligns with your business cash flow cycle.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=400&q=80" 
                      alt="Flexible repayment" 
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
                    Our business loan specialists can help you find the right financing solution for your business growth needs.
                  </p>
                  <Link to="/contact">
                    <Button className="w-full bg-gradient-to-r from-[#00C853] to-[#00BFFF] hover:from-[#00C853]/90 hover:to-[#00BFFF]/90">
                      Get Business Loan
                    </Button>
                  </Link>
                  <div className="mt-4 p-3 bg-violet-50 border border-violet-100 rounded-md">
                    <p className="text-sm text-violet-800">
                      "Got the working capital loan quickly and it helped scale our business to the next level!" - Rohit B.
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

export default BusinessLoan;
