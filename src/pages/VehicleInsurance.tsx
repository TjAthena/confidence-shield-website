
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProviderList from "@/components/products/ProviderList";
import FAQ from "@/components/products/FAQ";

const VehicleInsurance = () => {
  const providers = [
    {
      name: "HDFC ERGO",
      description: "Digital-first vehicle insurance with quick claim processing."
    },
    {
      name: "ICICI Lombard",
      description: "Comprehensive vehicle coverage with add-on benefits."
    },
    {
      name: "Bajaj Allianz",
      description: "Trusted vehicle insurance with extensive garage network."
    },
    {
      name: "Reliance General",
      description: "Customer-friendly vehicle policies with competitive rates."
    }
  ];
  
  const faqs = [
    {
      question: "What is Vehicle Insurance?",
      answer: "Vehicle insurance protects against financial loss due to damage, theft, or third-party liability related to your vehicle. It provides peace of mind and compliance with legal requirements."
    },
    {
      question: "What types of Vehicle Insurance are available?",
      answer: "There are primarily two types: Third Party insurance (mandatory by law, covers damages to third parties) and Comprehensive insurance (covers both third-party damages and damages to your own vehicle)."
    },
    {
      question: "Is Vehicle Insurance mandatory in India?",
      answer: "Yes, at least Third Party insurance is mandatory for all vehicles plying on Indian roads as per the Motor Vehicles Act, 1988."
    },
    {
      question: "What factors affect Vehicle Insurance premiums?",
      answer: "Several factors impact your premium including the type and age of vehicle, cubic capacity, geographical zone, previous claim history, insured declared value (IDV), and any additional coverage options or riders selected."
    }
  ];

  return (
    <div>
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="flex items-center mb-4 text-sm">
            <Link to="/" className="text-gray-500 hover:text-[#00BFFF]">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Vehicle Insurance</span>
          </div>
          
          <h1 className="mb-4 text-3xl font-bold md:text-4xl text-[#001F3F]">Vehicle Insurance</h1>
          <p className="max-w-3xl text-lg text-gray-600">
            Vehicle insurance protects against financial loss due to damage, theft, or third-party liability related to your vehicle. It provides peace of mind and compliance with legal requirements.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="mb-12">
                <h2 className="mb-6 text-2xl font-semibold">Understanding Vehicle Insurance</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Vehicle Insurance is a form of financial protection that covers your vehicle against damage, theft, accidents, and third-party liabilities. With the increasing number of vehicles on the road, having proper insurance is not just a legal requirement but a financial necessity.
                  </p>
                  <p>
                    Whether you own a car, motorcycle, or commercial vehicle, the right insurance policy ensures you're protected from unexpected expenses and legal complications following an accident.
                  </p>
                  <p>
                    At Confidence Financial, we partner with leading vehicle insurance providers to offer you comprehensive coverage options tailored to your specific vehicle and usage patterns. Our expert advisors help you navigate the complexities of vehicle insurance to find the most suitable policy.
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
                      Coverage against damage to your vehicle and third-party liabilities.
                    </p>
                  </div>
                  <div className="p-5 border border-gray-200 rounded-lg">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Legal Compliance</h3>
                    <p className="text-gray-600">
                      Meet mandatory insurance requirements for vehicles in India.
                    </p>
                  </div>
                  <div className="p-5 border border-gray-200 rounded-lg">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Add-on Benefits</h3>
                    <p className="text-gray-600">
                      Options for roadside assistance, zero depreciation, and more.
                    </p>
                  </div>
                  <div className="p-5 border border-gray-200 rounded-lg">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Cashless Claims</h3>
                    <p className="text-gray-600">
                      Hassle-free repairs at network garages without upfront payment.
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
                    Our financial advisors can help you choose the right plan based on your vehicle type and usage.
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

export default VehicleInsurance;
