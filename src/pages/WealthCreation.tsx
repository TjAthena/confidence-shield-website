
import { TrendingUp, BarChart3, PiggyBank, CheckCircle, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProviderList from "@/components/products/ProviderList";
import FAQ from "@/components/products/FAQ";

const WealthCreation = () => {
  const providers = [
    {
      name: "HDFC AMC",
      description: "Leading mutual fund house with diversified equity and hybrid schemes for wealth creation."
    },
    {
      name: "SBI Mutual Fund",
      description: "Trusted fund house offering systematic investment plans across various asset classes."
    },
    {
      name: "ICICI Prudential AMC",
      description: "Comprehensive mutual fund solutions for long-term wealth building and financial goals."
    },
    {
      name: "Axis Mutual Fund",
      description: "Dynamic investment strategies with focus on growth and wealth multiplication."
    },
    {
      name: "Nippon India MF",
      description: "Japanese expertise in fund management with consistent wealth creation track record."
    },
    {
      name: "Kotak Mutual Fund",
      description: "Innovative mutual fund products with strong research-backed investment approach."
    }
  ];

  const faqs = [
    {
      question: "What is Wealth Creation?",
      answer: "Wealth creation involves systematically building assets over time through strategic investments that grow faster than inflation. It focuses on long-term financial goals like buying a house, children's education, or achieving financial freedom."
    },
    {
      question: "What are the best wealth creation instruments?",
      answer: "Equity mutual funds, ELSS, index funds, and systematic investment plans (SIPs) are popular wealth creation tools. For higher risk tolerance, direct equity investments and real estate can also contribute to wealth building."
    },
    {
      question: "How much should I invest for wealth creation?",
      answer: "Follow the 50-30-20 rule: 50% for needs, 30% for wants, and 20% for investments. Start with at least 10-15% of income for wealth creation and gradually increase with salary increments."
    },
    {
      question: "What is the power of compounding in wealth creation?",
      answer: "Compounding is earning returns on your returns. A ₹10,000 monthly SIP for 20 years at 12% return creates ₹1 crore corpus, where you invest only ₹24 lakhs but earn ₹76 lakhs through compounding."
    }
  ];

  return (
    <div>
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 mx-auto">
          <div className="flex items-center mb-4 text-sm">
            <Link to="/" className="text-gray-500 hover:text-[#00BFFF]">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Wealth Creation</span>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
            <div>
              <h1 className="mb-4 text-3xl font-bold md:text-4xl text-[#001F3F]">Wealth Creation</h1>
              <p className="text-lg text-gray-600">
                Build long-term wealth through systematic investments in mutual funds, SIPs, and market-linked instruments. Achieve your financial goals with professionally managed portfolios and the power of compounding.
              </p>
              <div className="mt-6 flex space-x-4">
                <Button className="bg-gradient-to-r from-[#00C853] to-[#00BFFF] hover:from-[#00C853]/90 hover:to-[#00BFFF]/90">
                  Start SIP
                </Button>
                <Button variant="outline" className="border-[#00C853] text-[#00C853] hover:bg-[#00C853]/10">
                  Calculate Returns
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80" 
                alt="Wealth creation and investment growth" 
                className="rounded-lg shadow-lg w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-sm font-semibold text-[#00C853]">From ₹1,000/month</p>
                <p className="text-xs text-gray-500">Start building wealth</p>
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
                <h2 className="mb-6 text-2xl font-semibold">Understanding Wealth Creation</h2>
                <div className="space-y-4 text-gray-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" 
                      alt="Investment growth chart" 
                      className="rounded-lg shadow-md w-full h-[240px] object-cover"
                    />
                    <div>
                      <p>
                        Wealth creation is the process of building financial assets over time through strategic investments. It goes beyond just saving money - it's about making your money work for you to generate returns that outpace inflation.
                      </p>
                      <p className="mt-4">
                        The key to successful wealth creation lies in starting early, investing consistently, diversifying across asset classes, and staying invested for the long term to harness the power of compounding.
                      </p>
                    </div>
                  </div>
                  <p>
                    Our wealth creation experts help you design a systematic investment strategy using mutual funds, SIPs, and other market-linked instruments to achieve your long-term financial aspirations.
                  </p>
                </div>

                <div className="mt-8 p-5 bg-gradient-to-r from-emerald-50 to-teal-100 rounded-lg border border-emerald-200">
                  <h3 className="text-lg font-semibold mb-3 text-[#001F3F]">Wealth Creation Strategy</h3>
                  <p className="mb-4 text-gray-700">Essential elements for building wealth:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-emerald-200 text-emerald-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">1</span>
                      <span><strong>Start Early:</strong> Time is your biggest asset in wealth creation due to compounding.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-emerald-200 text-emerald-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">2</span>
                      <span><strong>Systematic Investment:</strong> Regular SIPs create discipline and average out market volatility.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-emerald-200 text-emerald-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">3</span>
                      <span><strong>Diversification:</strong> Spread investments across equity, debt, and hybrid funds.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-emerald-200 text-emerald-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">4</span>
                      <span><strong>Long-term Focus:</strong> Stay invested for 7+ years to ride out market cycles.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <ProviderList providers={providers} />
              
              <div className="py-10">
                <h2 className="mb-6 text-2xl font-semibold">Key Benefits</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="p-5 bg-gradient-to-br from-white to-emerald-50 border border-emerald-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Power of Compounding</h3>
                    <p className="text-gray-600">
                      Earn returns on your returns - small regular investments grow into substantial wealth over time.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=400&q=80" 
                      alt="Compounding growth" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-emerald-50 border border-emerald-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Professional Management</h3>
                    <p className="text-gray-600">
                      Expert fund managers research and manage your investments for optimal returns.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80" 
                      alt="Professional management" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-emerald-50 border border-emerald-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Systematic Approach</h3>
                    <p className="text-gray-600">
                      SIPs automate investments and help maintain discipline while averaging market volatility.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=400&q=80" 
                      alt="Systematic investment" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-emerald-50 border border-emerald-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Tax Efficiency</h3>
                    <p className="text-gray-600">
                      ELSS funds provide tax benefits under Section 80C along with wealth creation potential.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1586486942853-511cec38552a?auto=format&fit=crop&w=400&q=80" 
                      alt="Tax efficiency" 
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
                    Our wealth creation specialists can help you design a systematic investment strategy to achieve your financial goals.
                  </p>
                  <Link to="/contact">
                    <Button className="w-full bg-gradient-to-r from-[#00C853] to-[#00BFFF] hover:from-[#00C853]/90 hover:to-[#00BFFF]/90">
                      Start Wealth Building
                    </Button>
                  </Link>
                  <div className="mt-4 p-3 bg-emerald-50 border border-emerald-100 rounded-md">
                    <p className="text-sm text-emerald-800">
                      "Started with ₹2000 SIP 10 years ago, now my portfolio is worth ₹8 lakhs!" - Priya M.
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

export default WealthCreation;
