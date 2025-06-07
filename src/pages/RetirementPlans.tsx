
import { Users, TrendingUp, Shield, CheckCircle, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProviderList from "@/components/products/ProviderList";
import FAQ from "@/components/products/FAQ";

const RetirementPlans = () => {
  const providers = [
    {
      name: "SBI Life",
      description: "Comprehensive retirement plans with guaranteed pension and annuity options."
    },
    {
      name: "HDFC Life",
      description: "Flexible retirement solutions with market-linked and guaranteed return options."
    },
    {
      name: "ICICI Prudential",
      description: "Systematic retirement planning with ULIP and traditional pension products."
    },
    {
      name: "LIC",
      description: "Traditional pension and retirement plans with lifetime income guarantee."
    },
    {
      name: "Max Life Insurance",
      description: "Modern retirement plans with flexible payout and investment choices."
    },
    {
      name: "Bajaj Allianz",
      description: "Retirement planning with immediate and deferred annuity options."
    }
  ];

  const faqs = [
    {
      question: "What are Retirement Plans?",
      answer: "Retirement plans are long-term savings and investment products designed to provide regular income after retirement. They help build a corpus during your working years and convert it into a steady pension for your golden years."
    },
    {
      question: "When should I start retirement planning?",
      answer: "The ideal time to start is in your 20s or 30s. Starting early allows you to benefit from compounding and build a larger retirement corpus with smaller monthly contributions. However, it's never too late to start."
    },
    {
      question: "How much should I save for retirement?",
      answer: "Financial experts recommend saving 10-15% of your income for retirement. The final corpus should be 25-30 times your annual expenses to maintain your lifestyle post-retirement through systematic withdrawals."
    },
    {
      question: "What are the different types of retirement products?",
      answer: "Main types include National Pension System (NPS), Employee Provident Fund (EPF), Public Provident Fund (PPF), pension plans from insurance companies, and market-linked retirement funds (ULIPs)."
    }
  ];

  return (
    <div>
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 mx-auto">
          <div className="flex items-center mb-4 text-sm">
            <Link to="/" className="text-gray-500 hover:text-[#00BFFF]">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Retirement Plans</span>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
            <div>
              <h1 className="mb-4 text-3xl font-bold md:text-4xl text-[#001F3F]">Retirement Plans</h1>
              <p className="text-lg text-gray-600">
                Secure your golden years with systematic retirement planning. Build a substantial corpus during your working years and enjoy a steady income stream post-retirement with our comprehensive retirement solutions.
              </p>
              <div className="mt-6 flex space-x-4">
                <Button className="bg-gradient-to-r from-[#00C853] to-[#00BFFF] hover:from-[#00C853]/90 hover:to-[#00BFFF]/90">
                  Calculate Retirement Corpus
                </Button>
                <Button variant="outline" className="border-[#00C853] text-[#00C853] hover:bg-[#00C853]/10">
                  Compare Plans
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80" 
                alt="Retirement planning and golden years" 
                className="rounded-lg shadow-lg w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-sm font-semibold text-[#00C853]">From ₹3,000/month</p>
                <p className="text-xs text-gray-500">Build ₹1 Cr+ retirement fund</p>
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
                <h2 className="mb-6 text-2xl font-semibold">Planning for Your Golden Years</h2>
                <div className="space-y-4 text-gray-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <img 
                      src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=600&q=80" 
                      alt="Peaceful retirement" 
                      className="rounded-lg shadow-md w-full h-[240px] object-cover"
                    />
                    <div>
                      <p>
                        Retirement planning is about maintaining financial independence and lifestyle dignity after you stop earning. With increasing life expectancy and inflation, systematic retirement planning has become more crucial than ever.
                      </p>
                      <p className="mt-4">
                        The power of compounding makes early retirement planning extremely effective. Starting in your 20s vs 40s can result in 3-4 times larger retirement corpus with the same monthly investment.
                      </p>
                    </div>
                  </div>
                  <p>
                    Our retirement planning experts help you create a comprehensive strategy that considers your current age, income, lifestyle expectations, and risk tolerance to build an optimal retirement portfolio.
                  </p>
                </div>

                <div className="mt-8 p-5 bg-gradient-to-r from-amber-50 to-orange-100 rounded-lg border border-amber-200">
                  <h3 className="text-lg font-semibold mb-3 text-[#001F3F]">Retirement Corpus Calculation</h3>
                  <p className="mb-4 text-gray-700">Key factors in retirement planning:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-amber-200 text-amber-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">1</span>
                      <span><strong>Current Age:</strong> More working years = smaller monthly investment needed.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-amber-200 text-amber-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">2</span>
                      <span><strong>Retirement Age:</strong> Standard is 60, but many plan for 55 or extend to 65.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-amber-200 text-amber-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">3</span>
                      <span><strong>Life Expectancy:</strong> Plan for 20-25 years of post-retirement life.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-amber-200 text-amber-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">4</span>
                      <span><strong>Inflation:</strong> Your corpus should beat 6-7% annual inflation rate.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <ProviderList providers={providers} />
              
              <div className="py-10">
                <h2 className="mb-6 text-2xl font-semibold">Key Benefits</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="p-5 bg-gradient-to-br from-white to-amber-50 border border-amber-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Systematic Wealth Building</h3>
                    <p className="text-gray-600">
                      Regular investments with compounding create substantial retirement corpus over time.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=400&q=80" 
                      alt="Wealth building" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-amber-50 border border-amber-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Regular Pension Income</h3>
                    <p className="text-gray-600">
                      Convert your corpus into steady monthly pension for lifetime financial security.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=400&q=80" 
                      alt="Regular income" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-amber-50 border border-amber-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Tax Benefits</h3>
                    <p className="text-gray-600">
                      Retirement investments offer tax deductions under Section 80C and 80CCD.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1586486942853-511cec38552a?auto=format&fit=crop&w=400&q=80" 
                      alt="Tax benefits" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-amber-50 border border-amber-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Inflation Protection</h3>
                    <p className="text-gray-600">
                      Market-linked options help your retirement corpus grow above inflation rate.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80" 
                      alt="Inflation protection" 
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
                    Our retirement planning specialists can help you build a comprehensive retirement strategy tailored to your goals.
                  </p>
                  <Link to="/contact">
                    <Button className="w-full bg-gradient-to-r from-[#00C853] to-[#00BFFF] hover:from-[#00C853]/90 hover:to-[#00BFFF]/90">
                      Plan My Retirement
                    </Button>
                  </Link>
                  <div className="mt-4 p-3 bg-amber-50 border border-amber-100 rounded-md">
                    <p className="text-sm text-amber-800">
                      "Started retirement planning at 25, now at 55 I have a comfortable pension income!" - Vikram R.
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

export default RetirementPlans;
