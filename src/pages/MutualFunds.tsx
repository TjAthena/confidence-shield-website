
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProviderList from "@/components/products/ProviderList";
import FAQ from "@/components/products/FAQ";

const MutualFunds = () => {
  const providers = [
    {
      name: "SBI Mutual Fund",
      description: "India's largest mutual fund house with diverse investment options across equity, debt, and hybrid funds."
    },
    {
      name: "HDFC Mutual Fund",
      description: "Leading fund house known for consistent performance and comprehensive portfolio management solutions."
    },
    {
      name: "ICICI Prudential Mutual Fund",
      description: "Innovative investment solutions with strong research capabilities and diverse fund offerings."
    },
    {
      name: "Axis Mutual Fund",
      description: "Dynamic fund management with focus on wealth creation through systematic investment planning."
    }
  ];
  
  const faqs = [
    {
      question: "What are Mutual Funds?",
      answer: "Mutual funds are investment vehicles that pool money from multiple investors to purchase a diversified portfolio of stocks, bonds, or other securities, managed by professional fund managers."
    },
    {
      question: "Why invest in Mutual Funds?",
      answer: "Mutual funds offer professional management, diversification, liquidity, and the potential for higher returns compared to traditional savings instruments. They're suitable for various investment goals and risk profiles."
    },
    {
      question: "What are the types of Mutual Funds?",
      answer: "Mutual funds are categorized into equity funds, debt funds, hybrid funds, and solution-oriented funds. Each category serves different investment objectives and risk appetites."
    },
    {
      question: "How do SIP investments work?",
      answer: "Systematic Investment Plans (SIP) allow you to invest a fixed amount regularly in mutual funds. This disciplined approach helps in rupee cost averaging and building wealth over time through the power of compounding."
    }
  ];

  return (
    <div>
      <section className="py-12 bg-gradient-to-b from-[#FCF9F8] to-white">
        <div className="container px-4 mx-auto">
          <div className="flex items-center mb-4 text-sm">
            <Link to="/" className="text-[#3D4E64] hover:text-[#3B9560]">Home</Link>
            <span className="mx-2 text-[#3D4E64]">/</span>
            <span className="text-[#213753]">Mutual Funds</span>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
            <div>
              <h1 className="mb-4 text-3xl font-bold md:text-4xl text-[#213753]">Mutual Funds</h1>
              <p className="text-lg text-[#3D4E64]">
                Mutual funds are investment vehicles that pool money from multiple investors to purchase a diversified portfolio of securities, managed by professional fund managers.
              </p>
              <div className="mt-6 flex space-x-4">
                <Button className="bg-gradient-to-r from-[#3B9560] to-green-600 hover:from-green-600 hover:to-green-700">
                  Start SIP
                </Button>
                <Button variant="outline" className="border-[#3B9560] text-[#3B9560] hover:bg-[#3B9560]/10">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80" 
                alt="Mutual fund investment" 
                className="rounded-lg shadow-lg w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-sm font-semibold text-[#3B9560]">From ₹500/month</p>
                <p className="text-xs text-[#3D4E64]">Start your SIP journey</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-b from-white to-[#FCF9F8]">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="mb-12">
                <h2 className="mb-6 text-2xl font-semibold text-[#213753]">Understanding Mutual Funds</h2>
                <div className="space-y-4 text-[#3D4E64]">
                  <p>
                    Mutual funds are one of the most popular investment options in India, offering professional portfolio management and diversification benefits. They allow individual investors to participate in professionally managed portfolios of stocks, bonds, and other securities.
                  </p>
                  <p>
                    Through Systematic Investment Plans (SIPs), you can start investing with as little as ₹500 per month, making wealth creation accessible to everyone. The power of compounding, combined with professional fund management, can help you achieve your long-term financial goals.
                  </p>
                  <p>
                    At Confidence Financial, we help you select the right mutual funds based on your investment goals, risk tolerance, and time horizon. Our expert advisors guide you through the entire investment journey, from fund selection to portfolio monitoring.
                  </p>
                </div>
              </div>
              
              <ProviderList providers={providers} />
              
              <div className="py-10">
                <h2 className="mb-6 text-2xl font-semibold text-[#213753]">Key Benefits</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="p-5 bg-gradient-to-br from-white to-[#FCF9F8] border border-[#3B9560]/20 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#3B9560]">Professional Management</h3>
                    <p className="text-[#3D4E64]">
                      Expert fund managers research and manage your investments for optimal returns.
                    </p>
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-[#FCF9F8] border border-[#3B9560]/20 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#3B9560]">Diversification</h3>
                    <p className="text-[#3D4E64]">
                      Spread your risk across multiple securities and asset classes.
                    </p>
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-[#FCF9F8] border border-[#3B9560]/20 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#3B9560]">Liquidity</h3>
                    <p className="text-[#3D4E64]">
                      Easy redemption with most funds offering same-day or next-day liquidity.
                    </p>
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-[#FCF9F8] border border-[#3B9560]/20 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#3B9560]">Tax Benefits</h3>
                    <p className="text-[#3D4E64]">
                      ELSS funds offer tax deductions under Section 80C with potential for growth.
                    </p>
                  </div>
                </div>
              </div>
              
              <FAQ faqs={faqs} />
            </div>
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <div className="p-6 mt-6 bg-gradient-to-br from-white to-[#FCF9F8] rounded-lg border border-[#3B9560]/20 shadow-sm">
                  <h3 className="mb-4 text-lg font-semibold text-[#213753]">Start Your Investment Journey</h3>
                  <p className="mb-4 text-[#3D4E64]">
                    Our financial advisors can help you choose the right mutual funds and create a systematic investment plan tailored to your goals.
                  </p>
                  <Link to="/contact">
                    <Button className="w-full bg-gradient-to-r from-[#3B9560] to-green-600 hover:from-green-600 hover:to-green-700">
                      Talk to an Advisor
                    </Button>
                  </Link>
                  <div className="mt-4 p-3 bg-[#3B9560]/10 border border-[#3B9560]/20 rounded-md">
                    <p className="text-sm text-[#213753]">
                      "SIP in mutual funds helped me build a corpus of ₹25 lakhs in just 7 years. The power of compounding is truly amazing!" - Rahul S.
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

export default MutualFunds;
