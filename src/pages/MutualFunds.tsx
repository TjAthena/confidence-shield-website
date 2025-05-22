
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import InsuranceCalculator from "@/components/products/InsuranceCalculator";
import ProviderList from "@/components/products/ProviderList";
import FAQ from "@/components/products/FAQ";

const MutualFunds = () => {
  const providers = [
    {
      name: "HDFC AMC",
      description: "One of India's largest asset management companies with diverse fund offerings."
    },
    {
      name: "SBI Mutual Fund",
      description: "Trusted mutual fund house backed by India's largest bank."
    },
    {
      name: "Axis Mutual Fund",
      description: "Known for consistent performance across equity and debt categories."
    },
    {
      name: "ICICI Prudential AMC",
      description: "Wide range of funds catering to different investment objectives."
    }
  ];
  
  const faqs = [
    {
      question: "What are Mutual Funds?",
      answer: "Mutual funds are professionally managed investment vehicles that pool money from multiple investors to invest in various securities. They offer diversification, liquidity, and potential for higher returns."
    },
    {
      question: "What types of Mutual Funds are available?",
      answer: "Mutual funds are categorized as Equity Funds (investing in stocks), Debt Funds (investing in bonds and fixed income securities), Hybrid Funds (mix of equity and debt), and specialized funds like Index Funds, ELSS (tax-saving), and Sector Funds."
    },
    {
      question: "How do Mutual Funds generate returns?",
      answer: "Mutual funds generate returns through capital appreciation (increase in the value of underlying securities) and income (dividends from stocks, interest from bonds). The returns are passed on to investors in proportion to their investment."
    },
    {
      question: "What are the risks associated with Mutual Funds?",
      answer: "Risks vary depending on the fund type. Equity funds carry market risk, debt funds are subject to interest rate and credit risk, while hybrid funds have a combination of both. All mutual funds are also subject to fund manager risk and liquidity risk to varying degrees."
    }
  ];

  return (
    <div>
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="flex items-center mb-4 text-sm">
            <Link to="/" className="text-gray-500 hover:text-[#00BFFF]">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Mutual Funds</span>
          </div>
          
          <h1 className="mb-4 text-3xl font-bold md:text-4xl text-[#001F3F]">Mutual Funds</h1>
          <p className="max-w-3xl text-lg text-gray-600">
            Mutual funds are professionally managed investment vehicles that pool money from multiple investors to invest in various securities. They offer diversification, liquidity, and potential for higher returns.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="mb-12">
                <h2 className="mb-6 text-2xl font-semibold">Understanding Mutual Funds</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Mutual Funds offer a way to invest in a diversified portfolio of stocks, bonds, or other securities that might be difficult to create individually. They are managed by professional fund managers who make investment decisions on behalf of investors.
                  </p>
                  <p>
                    Whether you're saving for long-term goals like retirement or children's education, or looking for tax-efficient investment options, there's likely a mutual fund scheme suited to your needs.
                  </p>
                  <p>
                    At Confidence Financial, we help you navigate the complex world of mutual funds. Our expert advisors assess your risk profile, investment horizon, and financial goals to recommend suitable fund options from reputable asset management companies.
                  </p>
                </div>
              </div>
              
              <ProviderList providers={providers} />
              
              <div className="py-10">
                <h2 className="mb-6 text-2xl font-semibold">Key Benefits</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="p-5 border border-gray-200 rounded-lg">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Professional Management</h3>
                    <p className="text-gray-600">
                      Expert fund managers make informed investment decisions based on research.
                    </p>
                  </div>
                  <div className="p-5 border border-gray-200 rounded-lg">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Diversification</h3>
                    <p className="text-gray-600">
                      Spread investments across multiple securities to reduce risk.
                    </p>
                  </div>
                  <div className="p-5 border border-gray-200 rounded-lg">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Liquidity</h3>
                    <p className="text-gray-600">
                      Easy to buy and sell units with quick access to your funds.
                    </p>
                  </div>
                  <div className="p-5 border border-gray-200 rounded-lg">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Tax Efficiency</h3>
                    <p className="text-gray-600">
                      Certain mutual funds offer tax benefits under Section 80C.
                    </p>
                  </div>
                </div>
              </div>
              
              <FAQ faqs={faqs} />
            </div>
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <InsuranceCalculator type="investment" />
                
                <div className="p-6 mt-6 bg-gray-50 rounded-lg">
                  <h3 className="mb-4 text-lg font-semibold">Need Expert Advice?</h3>
                  <p className="mb-4 text-gray-600">
                    Our financial advisors can help you build a mutual fund portfolio aligned with your risk profile and goals.
                  </p>
                  <Link to="/contact">
                    <Button className="w-full bg-[#001F3F] hover:bg-[#001F3F]/90">
                      Talk to an Advisor
                    </Button>
                  </Link>
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
