
import { Users, Calculator, TrendingDown, CheckCircle, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProviderList from "@/components/products/ProviderList";
import FAQ from "@/components/products/FAQ";

const PersonalLoan = () => {
  const providers = [
    {
      name: "Bajaj Finserv",
      description: "Quick personal loans with minimal documentation and instant approval process."
    },
    {
      name: "HDFC Bank",
      description: "Pre-approved personal loans for existing customers with competitive interest rates."
    },
    {
      name: "ICICI Bank",
      description: "Digital personal loan solutions with flexible tenure and EMI options."
    },
    {
      name: "Kotak Mahindra Bank",
      description: "Instant personal loans with quick disbursement and minimal paperwork."
    },
    {
      name: "Axis Bank",
      description: "Personal loans for various needs with attractive interest rates for salaried professionals."
    },
    {
      name: "Tata Capital",
      description: "Flexible personal loan products with customer-friendly terms and conditions."
    }
  ];

  const faqs = [
    {
      question: "What is a Personal Loan?",
      answer: "A personal loan is an unsecured loan that you can use for any personal financial need - medical emergencies, debt consolidation, travel, wedding, or any other expense. No collateral is required, and approval is based on your creditworthiness."
    },
    {
      question: "What is the maximum personal loan amount I can get?",
      answer: "Personal loan amounts typically range from ₹50,000 to ₹40 lakhs, depending on your monthly income, credit score, and lender policies. Generally, you can get 10-15 times your monthly salary as a personal loan."
    },
    {
      question: "How quickly can I get a personal loan?",
      answer: "With proper documentation and good credit score, personal loans can be approved and disbursed within 24-48 hours. Many lenders offer instant approvals for pre-qualified customers with immediate fund transfer."
    },
    {
      question: "What affects my personal loan interest rate?",
      answer: "Interest rates depend on your credit score, monthly income, employment stability, existing debt obligations, and the lender's risk assessment. Higher credit scores typically get lower interest rates."
    }
  ];

  return (
    <div>
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 mx-auto">
          <div className="flex items-center mb-4 text-sm">
            <Link to="/" className="text-gray-500 hover:text-[#00BFFF]">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Personal Loan</span>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
            <div>
              <h1 className="mb-4 text-3xl font-bold md:text-4xl text-[#001F3F]">Personal Loan</h1>
              <p className="text-lg text-gray-600">
                Meet your immediate financial needs with quick and hassle-free personal loans. No collateral required, instant approval, and flexible EMI options to suit your budget and repayment capacity.
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
                src="https://images.unsplash.com/photo-1559526324-593bc2ace6a4?auto=format&fit=crop&w=800&q=80" 
                alt="Personal financial needs" 
                className="rounded-lg shadow-lg w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-sm font-semibold text-[#00C853]">From 10.5% p.a.</p>
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
                <h2 className="mb-6 text-2xl font-semibold">Understanding Personal Loans</h2>
                <div className="space-y-4 text-gray-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <img 
                      src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80" 
                      alt="Personal financial planning" 
                      className="rounded-lg shadow-md w-full h-[240px] object-cover"
                    />
                    <div>
                      <p>
                        Personal loans provide quick access to funds for any personal financial need without requiring collateral. They offer the flexibility to use money for medical emergencies, debt consolidation, travel, education, or any other purpose.
                      </p>
                      <p className="mt-4">
                        With minimal documentation and quick processing, personal loans are ideal for urgent financial requirements where you need immediate access to funds.
                      </p>
                    </div>
                  </div>
                  <p>
                    Our personal loan experts help you compare offers from multiple lenders, ensuring you get the best interest rates and terms that fit your financial situation and repayment capability.
                  </p>
                </div>

                <div className="mt-8 p-5 bg-gradient-to-r from-rose-50 to-pink-100 rounded-lg border border-rose-200">
                  <h3 className="text-lg font-semibold mb-3 text-[#001F3F]">Personal Loan Eligibility Criteria</h3>
                  <p className="mb-4 text-gray-700">Key requirements for personal loan approval:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-rose-200 text-rose-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">1</span>
                      <span><strong>Minimum Age:</strong> 21-23 years at the time of application, maximum 58-65 years at maturity.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-rose-200 text-rose-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">2</span>
                      <span><strong>Monthly Income:</strong> Minimum ₹25,000-30,000 for salaried, ₹50,000+ for self-employed.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-rose-200 text-rose-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">3</span>
                      <span><strong>Credit Score:</strong> Minimum 650+, but 750+ gets you the best rates and higher amounts.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-rose-200 text-rose-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">4</span>
                      <span><strong>Work Experience:</strong> Minimum 2 years total experience, 6 months in current job.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <ProviderList providers={providers} />
              
              <div className="py-10">
                <h2 className="mb-6 text-2xl font-semibold">Key Benefits</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="p-5 bg-gradient-to-br from-white to-rose-50 border border-rose-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">No Collateral Required</h3>
                    <p className="text-gray-600">
                      Unsecured loan with no need to pledge any asset or property as security.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=400&q=80" 
                      alt="No collateral" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-rose-50 border border-rose-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Quick Disbursement</h3>
                    <p className="text-gray-600">
                      Fast approval and same-day disbursement for urgent financial requirements.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=400&q=80" 
                      alt="Quick disbursement" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-rose-50 border border-rose-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Flexible Usage</h3>
                    <p className="text-gray-600">
                      Use funds for any personal need - medical, travel, education, debt consolidation, etc.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80" 
                      alt="Flexible usage" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-rose-50 border border-rose-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Competitive Rates</h3>
                    <p className="text-gray-600">
                      Attractive interest rates for qualified borrowers with good credit profiles.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=400&q=80" 
                      alt="Competitive rates" 
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
                    Our personal loan specialists can help you find the best rates and get quick approval for your financial needs.
                  </p>
                  <Link to="/contact">
                    <Button className="w-full bg-gradient-to-r from-[#00C853] to-[#00BFFF] hover:from-[#00C853]/90 hover:to-[#00BFFF]/90">
                      Get Personal Loan
                    </Button>
                  </Link>
                  <div className="mt-4 p-3 bg-rose-50 border border-rose-100 rounded-md">
                    <p className="text-sm text-rose-800">
                      "Got instant approval and funds within 24 hours. Perfect for my emergency needs!" - Kavya S.
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

export default PersonalLoan;
