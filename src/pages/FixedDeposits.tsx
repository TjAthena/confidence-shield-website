
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProviderList from "@/components/products/ProviderList";
import FAQ from "@/components/products/FAQ";

const FixedDeposits = () => {
  const providers = [
    {
      name: "Bajaj Finance",
      description: "High-interest fixed deposits with flexible tenures and special rates for senior citizens."
    },
    {
      name: "Shriram Finance",
      description: "Competitive interest rates with options for regular income through periodic payouts."
    },
    {
      name: "Sundaram Finance",
      description: "Trusted fixed deposit schemes with stable returns and excellent credit ratings."
    }
  ];
  
  const faqs = [
    {
      question: "What are Fixed Deposits?",
      answer: "Fixed deposits are low-risk investment options that offer guaranteed returns over a fixed tenure. They provide stability and predictability to your investment portfolio."
    },
    {
      question: "How do Fixed Deposits work?",
      answer: "You deposit a lump sum amount with a financial institution for a fixed period at an agreed interest rate. At maturity, you receive your principal amount plus the interest earned based on the tenure and interest rate."
    },
    {
      question: "What are Recurring Deposits?",
      answer: "Recurring Deposits allow you to invest a fixed amount regularly (monthly) for a predetermined period. They help inculcate a savings habit while earning interest on your investments."
    },
    {
      question: "Are Fixed Deposits taxable?",
      answer: "Yes, the interest earned on fixed deposits is taxable under 'Income from Other Sources'. TDS is applicable if the interest earned exceeds ₹40,000 per annum (₹50,000 for senior citizens)."
    }
  ];

  return (
    <div>
      <section className="py-12 bg-gradient-to-b from-[#FCF9F8] to-white">
        <div className="container px-4 mx-auto">
          <div className="flex items-center mb-4 text-sm">
            <Link to="/" className="text-[#3D4E64] hover:text-[#3B9560]">Home</Link>
            <span className="mx-2 text-[#3D4E64]">/</span>
            <span className="text-[#213753]">Fixed Deposits</span>
          </div>
          
          <h1 className="mb-4 text-3xl font-bold md:text-4xl text-[#213753]">Fixed & Recurring Deposits</h1>
          <p className="max-w-3xl text-lg text-[#3D4E64]">
            Fixed and recurring deposits are low-risk investment options that offer guaranteed returns over a fixed tenure. They provide stability and predictability to your investment portfolio.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-b from-white to-[#FCF9F8]">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="mb-12">
                <h2 className="mb-6 text-2xl font-semibold text-[#213753]">Understanding Fixed & Recurring Deposits</h2>
                <div className="space-y-4 text-[#3D4E64]">
                  <p>
                    Fixed Deposits (FDs) and Recurring Deposits (RDs) are popular investment avenues in India, known for their safety and assured returns. While FDs involve a one-time lump sum investment, RDs allow you to invest a fixed amount regularly over a period.
                  </p>
                  <p>
                    These deposit schemes are ideal for conservative investors who prioritize capital protection over high returns. They offer predictable returns without the volatility associated with market-linked investments.
                  </p>
                  <p>
                    At Confidence Financial, we partner with reputable financial institutions to offer you the most competitive deposit schemes. Our expert advisors help you choose the right FD or RD based on your investment goals, time horizon, and liquidity needs.
                  </p>
                </div>
              </div>
              
              <ProviderList providers={providers} />
              
              <div className="py-10">
                <h2 className="mb-6 text-2xl font-semibold text-[#213753]">Key Benefits</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="p-5 bg-gradient-to-br from-white to-[#FCF9F8] border border-[#3B9560]/20 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#3B9560]">Guaranteed Returns</h3>
                    <p className="text-[#3D4E64]">
                      Fixed interest rates ensure predictable returns regardless of market conditions.
                    </p>
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-[#FCF9F8] border border-[#3B9560]/20 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#3B9560]">Capital Safety</h3>
                    <p className="text-[#3D4E64]">
                      Your principal amount is secure with minimal risk of capital loss.
                    </p>
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-[#FCF9F8] border border-[#3B9560]/20 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#3B9560]">Flexible Tenures</h3>
                    <p className="text-[#3D4E64]">
                      Choose from short-term to long-term deposit options based on your needs.
                    </p>
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-[#FCF9F8] border border-[#3B9560]/20 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#3B9560]">Loan Facility</h3>
                    <p className="text-[#3D4E64]">
                      Option to take loans against your deposits for emergency needs.
                    </p>
                  </div>
                </div>
              </div>
              
              <FAQ faqs={faqs} />
            </div>
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <div className="p-6 mt-6 bg-gradient-to-br from-white to-[#FCF9F8] rounded-lg border border-[#3B9560]/20 shadow-sm">
                  <h3 className="mb-4 text-lg font-semibold text-[#213753]">Need Expert Advice?</h3>
                  <p className="mb-4 text-[#3D4E64]">
                    Our financial advisors can help you choose the right deposit scheme based on your financial goals and time horizon.
                  </p>
                  <Link to="/contact">
                    <Button className="w-full bg-gradient-to-r from-[#3B9560] to-green-600 hover:from-green-600 hover:to-green-700">
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

export default FixedDeposits;
