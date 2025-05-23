
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import InsuranceCalculator from "@/components/products/InsuranceCalculator";
import ProviderList from "@/components/products/ProviderList";
import FAQ from "@/components/products/FAQ";

const HealthInsurance = () => {
  const providers = [
    {
      name: "Navi",
      description: "Tech-first health insurance with quick claims and affordable premiums."
    },
    {
      name: "Reliance Health",
      description: "Comprehensive health coverage with an extensive hospital network."
    },
    {
      name: "HDFC ERGO",
      description: "Innovative health insurance solutions with digital-first approach."
    },
    {
      name: "ICICI Lombard",
      description: "Customer-focused health plans with quick claim settlement."
    },
    {
      name: "Star Health",
      description: "Specialized health insurance provider with customized plans."
    }
  ];
  
  const faqs = [
    {
      question: "What is Health Insurance?",
      answer: "Health insurance covers medical expenses incurred during hospitalization, treatments, and procedures. It provides financial protection against rising healthcare costs and ensures access to quality medical care."
    },
    {
      question: "Why do I need Health Insurance?",
      answer: "Health Insurance protects you financially against unexpected medical expenses, gives you access to quality healthcare, and ensures peace of mind knowing you won't have to compromise on medical treatment due to cost concerns."
    },
    {
      question: "What does Health Insurance typically cover?",
      answer: "Health insurance typically covers hospitalization expenses, pre and post hospitalization costs, daycare procedures, ambulance charges, and sometimes outpatient department (OPD) expenses, depending on the policy."
    },
    {
      question: "How do I choose the right Health Insurance plan?",
      answer: "Consider factors like coverage amount, network hospitals, sub-limits, waiting periods for pre-existing conditions, claim settlement ratio, and additional benefits. Our advisors can help you navigate these options based on your specific health needs and budget."
    }
  ];

  return (
    <div>
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 mx-auto">
          <div className="flex items-center mb-4 text-sm">
            <Link to="/" className="text-gray-500 hover:text-[#00BFFF]">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Health Insurance</span>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
            <div>
              <h1 className="mb-4 text-3xl font-bold md:text-4xl text-[#001F3F]">Health Insurance</h1>
              <p className="text-lg text-gray-600">
                Health insurance covers medical expenses incurred during hospitalization, treatments, and procedures. It provides financial protection against rising healthcare costs and ensures access to quality medical care.
              </p>
              <div className="mt-6 flex space-x-4">
                <Button className="bg-gradient-to-r from-[#00C853] to-[#00BFFF] hover:from-[#00C853]/90 hover:to-[#00BFFF]/90">
                  Get a Quote
                </Button>
                <Button variant="outline" className="border-[#00C853] text-[#00C853] hover:bg-[#00C853]/10">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80" 
                alt="Doctor with patient" 
                className="rounded-lg shadow-lg w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-sm font-semibold text-[#00C853]">From ₹600/month</p>
                <p className="text-xs text-gray-500">For quality healthcare access</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="mb-12">
                <h2 className="mb-6 text-2xl font-semibold">Understanding Health Insurance</h2>
                <div className="space-y-4 text-gray-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <img 
                      src="https://images.unsplash.com/photo-1631815588090-d1bcbe9a8545?auto=format&fit=crop&w=600&q=80" 
                      alt="Healthcare services" 
                      className="rounded-lg shadow-md w-full h-[240px] object-cover"
                    />
                    <div>
                      <p>
                        Health Insurance is a crucial financial protection that covers medical expenses, ensuring you receive quality healthcare without financial strain. With rising medical costs, health insurance has become an essential part of financial planning.
                      </p>
                      <p className="mt-4">
                        Modern health insurance plans offer comprehensive coverage including hospitalization, daycare procedures, pre and post hospitalization expenses, and sometimes outpatient care.
                      </p>
                    </div>
                  </div>
                  <p>
                    At Confidence Financial, we partner with leading health insurance providers to help you find the most suitable coverage for your and your family's healthcare needs. Our expert advisors guide you through the selection process, ensuring you understand all aspects of your policy.
                  </p>
                </div>

                <div className="mt-8 p-5 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200">
                  <h3 className="text-lg font-semibold mb-3 text-[#001F3F]">How Health Insurance Premiums are Calculated</h3>
                  <p className="mb-4 text-gray-700">Health insurance premiums are primarily based on:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-green-200 text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">1</span>
                      <span><strong>Age:</strong> The single most important factor. Premiums rise steeply with age, as older individuals face higher health risks.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-200 text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">2</span>
                      <span><strong>Sum Insured:</strong> Premium scales roughly linearly with coverage amount. Higher coverage means higher premiums.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-200 text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">3</span>
                      <span><strong>City/Zone:</strong> Metro city residents typically pay 10-20% more than those in smaller cities due to higher healthcare costs.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-200 text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">4</span>
                      <span><strong>Lifestyle:</strong> Smokers face premium loadings of 10-30% due to increased health risks.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <ProviderList providers={providers} />
              
              <div className="py-10">
                <h2 className="mb-6 text-2xl font-semibold">Key Benefits</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="p-5 bg-gradient-to-br from-white to-green-50 border border-green-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Financial Protection</h3>
                    <p className="text-gray-600">
                      Safeguard against high medical expenses and hospitalization costs.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=400&q=80" 
                      alt="Financial protection" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-green-50 border border-green-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Quality Healthcare</h3>
                    <p className="text-gray-600">
                      Access to the best hospitals and medical facilities in the network.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=400&q=80" 
                      alt="Quality healthcare" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-green-50 border border-green-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Tax Benefits</h3>
                    <p className="text-gray-600">
                      Enjoy tax deductions on premiums paid under Section 80D.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1586486942853-511cec38552a?auto=format&fit=crop&w=400&q=80" 
                      alt="Tax benefits" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-green-50 border border-green-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Cashless Treatment</h3>
                    <p className="text-gray-600">
                      Convenient cashless treatment at network hospitals.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=400&q=80" 
                      alt="Cashless treatment" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                </div>
              </div>
              
              <FAQ faqs={faqs} />
            </div>
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <InsuranceCalculator type="health" />
                
                <div className="p-6 mt-6 bg-gradient-to-br from-white to-gray-50 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="mb-4 text-lg font-semibold">Need Expert Advice?</h3>
                  <p className="mb-4 text-gray-600">
                    Our financial advisors can help you choose the right plan based on your specific health needs and budget.
                  </p>
                  <Link to="/contact">
                    <Button className="w-full bg-gradient-to-r from-[#00C853] to-[#00BFFF] hover:from-[#00C853]/90 hover:to-[#00BFFF]/90">
                      Talk to an Advisor
                    </Button>
                  </Link>
                  <div className="mt-4 p-3 bg-green-50 border border-green-100 rounded-md">
                    <p className="text-sm text-green-800">
                      "My health insurance saved us from a financial crisis during an unexpected hospitalization. So thankful we had it!" - Priya M.
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

export default HealthInsurance;
