
import { Shield, CheckCircle, ArrowRight, Users, Calculator, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProviderList from "@/components/products/ProviderList";
import FAQ from "@/components/products/FAQ";

const TermInsurance = () => {
  const providers = [
    {
      name: "HDFC Life",
      description: "Leading life insurer with comprehensive term plans and quick claim settlement."
    },
    {
      name: "Max Life Insurance",
      description: "Trusted provider offering flexible term insurance with high coverage options."
    },
    {
      name: "ICICI Prudential Life",
      description: "Innovative term insurance solutions with digital-first approach."
    },
    {
      name: "SBI Life",
      description: "Government-backed insurer with affordable term insurance plans."
    },
    {
      name: "LIC (Life Insurance Corporation)",
      description: "India's largest life insurer with traditional and modern term plans."
    },
    {
      name: "Bajaj Allianz Life",
      description: "Comprehensive term insurance with additional rider benefits."
    }
  ];

  const faqs = [
    {
      question: "What is Term Insurance?",
      answer: "Term insurance is a pure life insurance policy that provides financial protection to your family in case of your unfortunate demise during the policy term. It offers high coverage at affordable premiums."
    },
    {
      question: "Why do I need Term Insurance?",
      answer: "Term insurance ensures your family's financial security by replacing your income, paying off debts, and maintaining their lifestyle even in your absence. It's the most cost-effective way to get substantial life coverage."
    },
    {
      question: "How much Term Insurance coverage do I need?",
      answer: "A general rule is to have coverage of 10-15 times your annual income. Consider your family's expenses, outstanding loans, children's education, and future financial goals when determining the amount."
    },
    {
      question: "What are the tax benefits of Term Insurance?",
      answer: "Premiums paid for term insurance are eligible for tax deduction under Section 80C up to ₹1.5 lakh. The death benefit received by nominees is tax-free under Section 10(10D)."
    }
  ];

  return (
    <div>
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 mx-auto">
          <div className="flex items-center mb-4 text-sm">
            <Link to="/" className="text-gray-500 hover:text-[#00BFFF]">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Term Insurance</span>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
            <div>
              <h1 className="mb-4 text-3xl font-bold md:text-4xl text-[#001F3F]">Term Insurance</h1>
              <p className="text-lg text-gray-600">
                Term insurance is a pure life insurance policy that provides financial protection to your family in case of your unfortunate demise. Get high coverage at affordable premiums with flexible payment options.
              </p>
              <div className="mt-6 flex space-x-4">
                <Button className="bg-gradient-to-r from-[#00C853] to-[#00BFFF] hover:from-[#00C853]/90 hover:to-[#00BFFF]/90">
                  Calculate Premium
                </Button>
                <Button variant="outline" className="border-[#00C853] text-[#00C853] hover:bg-[#00C853]/10">
                  Compare Plans
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559526324-593bc2ace6a4?auto=format&fit=crop&w=800&q=80" 
                alt="Family protection" 
                className="rounded-lg shadow-lg w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-sm font-semibold text-[#00C853]">From ₹500/month</p>
                <p className="text-xs text-gray-500">For ₹1 Crore coverage</p>
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
                <h2 className="mb-6 text-2xl font-semibold">Understanding Term Insurance</h2>
                <div className="space-y-4 text-gray-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <img 
                      src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=600&q=80" 
                      alt="Life insurance concept" 
                      className="rounded-lg shadow-md w-full h-[240px] object-cover"
                    />
                    <div>
                      <p>
                        Term insurance is the purest form of life insurance that provides financial security to your loved ones at the most affordable cost. Unlike traditional life insurance policies, term insurance focuses solely on providing life coverage without any investment component.
                      </p>
                      <p className="mt-4">
                        With term insurance, you can secure substantial coverage for your family at a fraction of the cost compared to other life insurance products, making it an essential part of financial planning.
                      </p>
                    </div>
                  </div>
                  <p>
                    At Confidence Financial, we help you compare and choose the best term insurance plans from leading insurers. Our expert advisors guide you through the selection process, ensuring you get maximum coverage at the best possible rates.
                  </p>
                </div>

                <div className="mt-8 p-5 bg-gradient-to-r from-blue-50 to-green-100 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold mb-3 text-[#001F3F]">How Term Insurance Premiums are Calculated</h3>
                  <p className="mb-4 text-gray-700">Term insurance premiums are primarily based on:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-blue-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">1</span>
                      <span><strong>Age:</strong> Younger individuals get lower premiums as they have lower mortality risk.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">2</span>
                      <span><strong>Sum Assured:</strong> Higher coverage amount means higher premium.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">3</span>
                      <span><strong>Health Status:</strong> Medical tests and health declaration affect premium rates.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">4</span>
                      <span><strong>Lifestyle:</strong> Smoking, drinking, and high-risk activities increase premiums.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <ProviderList providers={providers} />
              
              <div className="py-10">
                <h2 className="mb-6 text-2xl font-semibold">Key Benefits</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="p-5 bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">High Coverage at Low Cost</h3>
                    <p className="text-gray-600">
                      Get maximum life coverage at minimal premium costs compared to other insurance products.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=400&q=80" 
                      alt="Financial protection" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Tax Benefits</h3>
                    <p className="text-gray-600">
                      Enjoy tax deductions on premiums under Section 80C and tax-free death benefits.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1586486942853-511cec38552a?auto=format&fit=crop&w=400&q=80" 
                      alt="Tax benefits" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Flexible Options</h3>
                    <p className="text-gray-600">
                      Choose from various policy terms, premium payment options, and additional riders.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=400&q=80" 
                      alt="Flexible options" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Quick Claim Settlement</h3>
                    <p className="text-gray-600">
                      Fast and hassle-free claim settlement process for your family's peace of mind.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=400&q=80" 
                      alt="Quick settlement" 
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
                    Our financial advisors can help you choose the right term insurance plan based on your specific needs and budget.
                  </p>
                  <Link to="/contact">
                    <Button className="w-full bg-gradient-to-r from-[#00C853] to-[#00BFFF] hover:from-[#00C853]/90 hover:to-[#00BFFF]/90">
                      Talk to an Advisor
                    </Button>
                  </Link>
                  <div className="mt-4 p-3 bg-blue-50 border border-blue-100 rounded-md">
                    <p className="text-sm text-blue-800">
                      "Term insurance gave me peace of mind knowing my family is financially secure. The premium is so affordable!" - Rajesh K.
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

export default TermInsurance;
