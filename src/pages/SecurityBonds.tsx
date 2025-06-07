
import { Shield, TrendingUp, Banknote, CheckCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProviderList from "@/components/products/ProviderList";
import FAQ from "@/components/products/FAQ";

const SecurityBonds = () => {
  const providers = [
    {
      name: "Government of India",
      description: "Sovereign Gold Bonds and Government Securities with highest safety ratings."
    },
    {
      name: "RBI (Reserve Bank of India)",
      description: "Central bank issued bonds and treasury bills with government backing."
    },
    {
      name: "HDFC Bank",
      description: "Corporate bonds and fixed income securities with regular interest payments."
    },
    {
      name: "SBI",
      description: "Government and corporate bond investments with competitive yields."
    },
    {
      name: "ICICI Bank",
      description: "Diversified bond portfolio options for conservative investors."
    },
    {
      name: "NSE/BSE",
      description: "Exchange-traded bonds and debentures for institutional and retail investors."
    }
  ];

  const faqs = [
    {
      question: "What are Security Bonds?",
      answer: "Security bonds are debt instruments issued by governments or corporations to raise funds. Investors loan money to the issuer in exchange for regular interest payments and return of principal at maturity. They offer predictable income with lower risk than equities."
    },
    {
      question: "What types of bonds are available?",
      answer: "Main types include Government Securities (G-Secs), Corporate Bonds, Municipal Bonds, Sovereign Gold Bonds (SGBs), and Treasury Bills. Each has different risk levels, tenure, and return characteristics."
    },
    {
      question: "Are bonds safer than fixed deposits?",
      answer: "Government bonds are considered as safe as FDs, while corporate bonds carry slightly higher risk but offer better returns. All bonds are generally safer than equity investments but returns may be affected by interest rate changes."
    },
    {
      question: "How are bond returns calculated?",
      answer: "Bond returns come from regular interest payments (coupon) and potential capital appreciation. Government bonds typically offer 6-8% annual returns, while corporate bonds may offer 8-12% depending on the credit rating of the issuer."
    }
  ];

  return (
    <div>
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 mx-auto">
          <div className="flex items-center mb-4 text-sm">
            <Link to="/" className="text-gray-500 hover:text-[#00BFFF]">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Security Bonds</span>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
            <div>
              <h1 className="mb-4 text-3xl font-bold md:text-4xl text-[#001F3F]">Security Bonds</h1>
              <p className="text-lg text-gray-600">
                Invest in government and corporate bonds for steady income and capital preservation. Get predictable returns with lower risk through debt securities backed by government guarantee or corporate creditworthiness.
              </p>
              <div className="mt-6 flex space-x-4">
                <Button className="bg-gradient-to-r from-[#00C853] to-[#00BFFF] hover:from-[#00C853]/90 hover:to-[#00BFFF]/90">
                  Explore Bonds
                </Button>
                <Button variant="outline" className="border-[#00C853] text-[#00C853] hover:bg-[#00C853]/10">
                  Compare Yields
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80" 
                alt="Government securities and bonds" 
                className="rounded-lg shadow-lg w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-sm font-semibold text-[#00C853]">6-12% p.a.</p>
                <p className="text-xs text-gray-500">Bond yields available</p>
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
                <h2 className="mb-6 text-2xl font-semibold">Understanding Security Bonds</h2>
                <div className="space-y-4 text-gray-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <img 
                      src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80" 
                      alt="Government securities" 
                      className="rounded-lg shadow-md w-full h-[240px] object-cover"
                    />
                    <div>
                      <p>
                        Security bonds are debt instruments that provide steady income through regular interest payments. They are considered safer than equity investments as they offer predictable returns and capital protection, especially government-backed securities.
                      </p>
                      <p className="mt-4">
                        Bonds play a crucial role in portfolio diversification, providing stability and regular income while balancing the volatility of equity investments in a well-rounded investment strategy.
                      </p>
                    </div>
                  </div>
                  <p>
                    Our bond investment specialists help you navigate different types of bonds, assess credit ratings, and build a diversified bond portfolio that matches your risk tolerance and income requirements.
                  </p>
                </div>

                <div className="mt-8 p-5 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold mb-3 text-[#001F3F]">Types of Security Bonds</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-blue-200 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">1</span>
                      <div>
                        <strong>Government Securities (G-Secs):</strong> Sovereign guarantee with 6-8% yields, safest option available.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-200 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">2</span>
                      <div>
                        <strong>Corporate Bonds:</strong> Higher yields 8-12% but carry credit risk based on company rating.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-200 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">3</span>
                      <div>
                        <strong>Sovereign Gold Bonds:</strong> Government-issued gold investments with 2.5% annual interest plus gold price appreciation.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <ProviderList providers={providers} />
              
              <div className="py-10">
                <h2 className="mb-6 text-2xl font-semibold">Key Benefits</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="p-5 bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Predictable Income</h3>
                    <p className="text-gray-600">
                      Regular interest payments provide steady income stream with known returns.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=400&q=80" 
                      alt="Predictable income" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Capital Safety</h3>
                    <p className="text-gray-600">
                      Government bonds offer sovereign guarantee while corporate bonds provide credit protection.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=400&q=80" 
                      alt="Capital safety" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Portfolio Diversification</h3>
                    <p className="text-gray-600">
                      Bonds provide stability and balance to equity-heavy portfolios reducing overall risk.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80" 
                      alt="Portfolio diversification" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Tax Benefits</h3>
                    <p className="text-gray-600">
                      Some bonds offer tax advantages and indexation benefits for long-term investors.
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
                    Our bond investment experts can help you select the right mix of government and corporate bonds for your portfolio.
                  </p>
                  <Link to="/contact">
                    <Button className="w-full bg-gradient-to-r from-[#00C853] to-[#00BFFF] hover:from-[#00C853]/90 hover:to-[#00BFFF]/90">
                      Invest in Bonds
                    </Button>
                  </Link>
                  <div className="mt-4 p-3 bg-blue-50 border border-blue-100 rounded-md">
                    <p className="text-sm text-blue-800">
                      "Government bonds provide me steady 7% income with complete safety of my capital!" - Mohan K.
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

export default SecurityBonds;
