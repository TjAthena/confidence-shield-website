
import { Link, useParams } from "react-router-dom";
import ProviderList from "@/components/products/ProviderList";
import FAQ from "@/components/products/FAQ";
import { Button } from "@/components/ui/button";

const ProductDetail = () => {
  const { category, product } = useParams();
  
  let productTitle = "";
  let productDescription = "";
  
  // Determine product information based on URL parameters
  if (category === "life-protection") {
    if (product === "term-insurance") {
      productTitle = "Term Insurance";
      productDescription = "Term insurance provides pure life coverage for a specified period. In the event of the policyholder's death during the policy term, the nominee receives the sum assured. It offers high coverage at affordable premiums.";
    } else if (product === "return-of-premium") {
      productTitle = "Return of Premium Plans";
      productDescription = "Return of Premium (ROP) insurance provides life coverage and returns all paid premiums at the end of the policy term if the policyholder survives. It combines protection with savings.";
    }
  } else if (category === "financial-security") {
    if (product === "health-insurance") {
      productTitle = "Health Insurance";
      productDescription = "Health insurance covers medical expenses incurred during hospitalization, treatments, and procedures. It provides financial protection against rising healthcare costs and ensures access to quality medical care.";
    } else if (product === "vehicle-insurance") {
      productTitle = "Vehicle Insurance";
      productDescription = "Vehicle insurance protects against financial loss due to damage, theft, or third-party liability related to your vehicle. It provides peace of mind and compliance with legal requirements.";
    }
  } else if (category === "financial-freedom") {
    if (product === "fixed-deposits") {
      productTitle = "Fixed Deposits & Recurring Deposits";
      productDescription = "Fixed and recurring deposits are low-risk investment options that offer guaranteed returns over a fixed tenure. They provide stability and predictability to your investment portfolio.";
    } else if (product === "mutual-funds") {
      productTitle = "Mutual Funds";
      productDescription = "Mutual funds are professionally managed investment vehicles that pool money from multiple investors to invest in various securities. They offer diversification, liquidity, and potential for higher returns.";
    }
  }
  
  const providers = [
    {
      name: "HDFC Life",
      description: "One of India's leading life insurance providers with comprehensive coverage options."
    },
    {
      name: "Max Life Insurance",
      description: "Known for customer-centric policies and excellent claim settlement ratio."
    },
    {
      name: "ICICI Prudential",
      description: "Offers innovative insurance products with flexible options and benefits."
    },
    {
      name: "Bajaj Allianz",
      description: "Provides competitive premiums with extensive coverage and add-on benefits."
    }
  ];
  
  const faqs = [
    {
      question: `What is ${productTitle}?`,
      answer: productDescription
    },
    {
      question: `Why do I need ${productTitle}?`,
      answer: `${productTitle} provides essential financial protection against unforeseen circumstances, ensuring peace of mind for you and your loved ones.`
    },
    {
      question: `How much ${productTitle} coverage do I need?`,
      answer: "The ideal coverage amount depends on your income, liabilities, dependents, and financial goals. Our advisors can help you determine the right coverage based on your specific situation."
    },
    {
      question: "How do I choose the best provider?",
      answer: "Consider factors like claim settlement ratio, premium rates, coverage options, company reputation, and customer service. Our experts can guide you through these considerations to help you make an informed choice."
    }
  ];
  
  return (
    <div>
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="flex items-center mb-4 text-sm">
            <Link to="/" className="text-gray-500 hover:text-[#00BFFF]">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/products" className="text-gray-500 hover:text-[#00BFFF]">Products</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to={`/products/${category}`} className="text-gray-500 hover:text-[#00BFFF]">
              {category?.replace('-', ' ')}
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">{product?.replace('-', ' ')}</span>
          </div>
          
          <h1 className="mb-4 text-3xl font-bold md:text-4xl text-[#001F3F]">{productTitle}</h1>
          <p className="max-w-3xl text-lg text-gray-600">
            {productDescription}
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="mb-12">
                <h2 className="mb-6 text-2xl font-semibold">Understanding {productTitle}</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    {productTitle} is designed to provide financial {category === "life-protection" ? "protection" : "security"} against unexpected events, ensuring that you and your loved ones remain financially stable during difficult times.
                  </p>
                  <p>
                    With the rising costs of {category === "financial-security" && product === "health-insurance" ? "healthcare" : category === "financial-security" && product === "vehicle-insurance" ? "vehicle repairs" : "living"}, having adequate {productTitle.toLowerCase()} is essential for long-term financial planning and peace of mind.
                  </p>
                  <p>
                    At Confidence Financial, we help you compare plans from leading providers to find the best coverage at competitive rates. Our expert advisors guide you through the selection process, ensuring you make an informed decision.
                  </p>
                </div>
              </div>
              
              <ProviderList providers={providers} />
              
              <div className="py-10">
                <h2 className="mb-6 text-2xl font-semibold">Key Benefits</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="p-5 border border-gray-200 rounded-lg">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Financial Protection</h3>
                    <p className="text-gray-600">
                      Provides financial security to your family in case of unfortunate events.
                    </p>
                  </div>
                  <div className="p-5 border border-gray-200 rounded-lg">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Affordable Premiums</h3>
                    <p className="text-gray-600">
                      Get high coverage at competitive rates that fit within your budget.
                    </p>
                  </div>
                  <div className="p-5 border border-gray-200 rounded-lg">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Tax Benefits</h3>
                    <p className="text-gray-600">
                      Enjoy tax deductions on premiums paid under Section 80C and 80D.
                    </p>
                  </div>
                  <div className="p-5 border border-gray-200 rounded-lg">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Peace of Mind</h3>
                    <p className="text-gray-600">
                      Rest assured knowing you have financial protection for unforeseen circumstances.
                    </p>
                  </div>
                </div>
              </div>
              
              <FAQ faqs={faqs} />
            </div>
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <div className="p-6 mt-6 bg-gray-50 rounded-lg">
                  <h3 className="mb-4 text-lg font-semibold">Need Expert Advice?</h3>
                  <p className="mb-4 text-gray-600">
                    Our financial advisors can help you choose the right plan based on your specific needs and budget.
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

export default ProductDetail;
