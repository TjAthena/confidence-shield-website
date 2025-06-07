
import { Home, Calculator, TrendingDown, CheckCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProviderList from "@/components/products/ProviderList";
import FAQ from "@/components/products/FAQ";

const HousingLoan = () => {
  const providers = [
    {
      name: "SBI",
      description: "India's largest bank offering competitive home loan rates with flexible tenure options."
    },
    {
      name: "HDFC Bank",
      description: "Leading private bank with quick processing and attractive interest rates for home loans."
    },
    {
      name: "ICICI Bank",
      description: "Digital home loan solutions with pre-approved offers and instant processing."
    },
    {
      name: "Axis Bank",
      description: "Flexible home loan products with minimal documentation and quick disbursement."
    },
    {
      name: "LIC Housing Finance",
      description: "Specialized housing finance company with competitive rates and customer-friendly policies."
    },
    {
      name: "HDFC Ltd",
      description: "Pioneer in housing finance with decades of experience and nationwide presence."
    }
  ];

  const faqs = [
    {
      question: "What is a Home Loan?",
      answer: "A home loan is a secured loan provided by banks and financial institutions to help you purchase, construct, or renovate residential property. The property serves as collateral, and you repay the loan through EMIs over a chosen tenure."
    },
    {
      question: "What is the maximum loan amount I can get?",
      answer: "Most lenders offer up to 80-90% of the property value as loan. The exact amount depends on your income, credit score, existing obligations, and the lender's policy. High-value properties may have different LTV ratios."
    },
    {
      question: "What documents are required for home loan?",
      answer: "Essential documents include identity proof, address proof, income documents (salary slips/ITR), bank statements, property documents, and passport-size photographs. Self-employed individuals may need additional business documents."
    },
    {
      question: "What are the tax benefits on home loans?",
      answer: "You can claim deduction up to ₹2 lakhs on principal repayment under Section 80C and up to ₹2 lakhs on interest payment under Section 24(b). First-time homebuyers get additional ₹1.5 lakh deduction under Section 80EE/80EEA."
    }
  ];

  return (
    <div>
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 mx-auto">
          <div className="flex items-center mb-4 text-sm">
            <Link to="/" className="text-gray-500 hover:text-[#00BFFF]">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Housing Loan</span>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
            <div>
              <h1 className="mb-4 text-3xl font-bold md:text-4xl text-[#001F3F]">Housing Loan</h1>
              <p className="text-lg text-gray-600">
                Make your dream home a reality with competitive home loan interest rates, flexible tenure options, and quick processing. Get up to 90% financing with attractive EMI options and substantial tax benefits.
              </p>
              <div className="mt-6 flex space-x-4">
                <Button className="bg-gradient-to-r from-[#00C853] to-[#00BFFF] hover:from-[#00C853]/90 hover:to-[#00BFFF]/90">
                  Apply Now
                </Button>
                <Button variant="outline" className="border-[#00C853] text-[#00C853] hover:bg-[#00C853]/10">
                  Calculate EMI
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80" 
                alt="Dream house and home loan" 
                className="rounded-lg shadow-lg w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-sm font-semibold text-[#00C853]">From 8.5% p.a.</p>
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
                <h2 className="mb-6 text-2xl font-semibold">Understanding Home Loans</h2>
                <div className="space-y-4 text-gray-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <img 
                      src="https://images.unsplash.com/photo-1493663284031-b7e3aaa4cab7?auto=format&fit=crop&w=600&q=80" 
                      alt="Modern house exterior" 
                      className="rounded-lg shadow-md w-full h-[240px] object-cover"
                    />
                    <div>
                      <p>
                        A home loan enables you to purchase your dream home without depleting your savings. With competitive interest rates and long tenure options, home loans make homeownership affordable through manageable EMIs.
                      </p>
                      <p className="mt-4">
                        Home loans also offer significant tax benefits, making them one of the most tax-efficient ways to build wealth while owning a tangible asset that appreciates over time.
                      </p>
                    </div>
                  </div>
                  <p>
                    Our home loan experts help you compare offers from multiple lenders, negotiate better rates, and guide you through the entire loan process from application to disbursement.
                  </p>
                </div>

                <div className="mt-8 p-5 bg-gradient-to-r from-cyan-50 to-blue-100 rounded-lg border border-cyan-200">
                  <h3 className="text-lg font-semibold mb-3 text-[#001F3F]">Home Loan Eligibility Factors</h3>
                  <p className="mb-4 text-gray-700">Key factors affecting your home loan approval:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-cyan-200 text-cyan-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">1</span>
                      <span><strong>Monthly Income:</strong> EMI should not exceed 40-50% of your monthly income.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-cyan-200 text-cyan-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">2</span>
                      <span><strong>Credit Score:</strong> A score above 750 gets you better interest rates and higher eligibility.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-cyan-200 text-cyan-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">3</span>
                      <span><strong>Employment Stability:</strong> Minimum 2-3 years of work experience in current job.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-cyan-200 text-cyan-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">4</span>
                      <span><strong>Existing Obligations:</strong> Lower existing EMIs improve your loan eligibility amount.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <ProviderList providers={providers} />
              
              <div className="py-10">
                <h2 className="mb-6 text-2xl font-semibold">Key Benefits</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="p-5 bg-gradient-to-br from-white to-cyan-50 border border-cyan-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">High Loan-to-Value Ratio</h3>
                    <p className="text-gray-600">
                      Get up to 90% financing of property value, requiring minimal down payment from your side.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=400&q=80" 
                      alt="High financing" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-cyan-50 border border-cyan-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Long Tenure Options</h3>
                    <p className="text-gray-600">
                      Flexible repayment tenure up to 30 years, keeping your EMIs affordable and manageable.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=400&q=80" 
                      alt="Long tenure" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-cyan-50 border border-cyan-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Substantial Tax Benefits</h3>
                    <p className="text-gray-600">
                      Save up to ₹4 lakhs annually in taxes through principal and interest deductions.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1586486942853-511cec38552a?auto=format&fit=crop&w=400&q=80" 
                      alt="Tax benefits" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-cyan-50 border border-cyan-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Quick Processing</h3>
                    <p className="text-gray-600">
                      Fast approval and disbursement process with minimal documentation requirements.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=400&q=80" 
                      alt="Quick processing" 
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
                    Our home loan specialists can help you get the best rates and guide you through the entire home buying process.
                  </p>
                  <Link to="/contact">
                    <Button className="w-full bg-gradient-to-r from-[#00C853] to-[#00BFFF] hover:from-[#00C853]/90 hover:to-[#00BFFF]/90">
                      Get Home Loan
                    </Button>
                  </Link>
                  <div className="mt-4 p-3 bg-cyan-50 border border-cyan-100 rounded-md">
                    <p className="text-sm text-cyan-800">
                      "Got my dream home with the best interest rate and smooth processing. Highly recommend!" - Arjun T.
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

export default HousingLoan;
