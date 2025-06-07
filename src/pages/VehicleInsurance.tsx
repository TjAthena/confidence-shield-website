
import { Car, Shield, CheckCircle, ArrowRight, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProviderList from "@/components/products/ProviderList";
import FAQ from "@/components/products/FAQ";

const VehicleInsurance = () => {
  const providers = [
    {
      name: "HDFC ERGO",
      description: "Leading general insurer with comprehensive motor insurance and quick claim settlement."
    },
    {
      name: "ICICI Lombard",
      description: "Innovative motor insurance solutions with cashless garage network."
    },
    {
      name: "Bajaj Allianz General",
      description: "Trusted motor insurance provider with 24/7 roadside assistance."
    },
    {
      name: "Reliance General",
      description: "Comprehensive vehicle insurance with competitive premiums."
    },
    {
      name: "Tata AIG",
      description: "Motor insurance with add-on covers and easy claim process."
    },
    {
      name: "New India Assurance",
      description: "Government-backed insurer with extensive service network."
    }
  ];

  const faqs = [
    {
      question: "What is Motor Insurance?",
      answer: "Motor insurance is a contract between you and the insurance company that protects against financial losses from vehicle damage, theft, or third-party liabilities. It's mandatory by law in India."
    },
    {
      question: "What's the difference between Third-party and Comprehensive insurance?",
      answer: "Third-party insurance covers only damages to others and is mandatory by law. Comprehensive insurance covers your own vehicle damage, theft, plus third-party liabilities - offering complete protection."
    },
    {
      question: "What factors affect my motor insurance premium?",
      answer: "Premium depends on vehicle type, age, model, engine capacity, your location, driving history, No Claim Bonus, and the type of coverage chosen (third-party vs comprehensive)."
    },
    {
      question: "What is No Claim Bonus (NCB)?",
      answer: "NCB is a discount on your premium for every claim-free year. It can go up to 50% discount and is transferable when you change insurers or vehicles."
    }
  ];

  return (
    <div>
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 mx-auto">
          <div className="flex items-center mb-4 text-sm">
            <Link to="/" className="text-gray-500 hover:text-[#00BFFF]">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Motor Insurance</span>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
            <div>
              <h1 className="mb-4 text-3xl font-bold md:text-4xl text-[#001F3F]">Motor Insurance</h1>
              <p className="text-lg text-gray-600">
                Protect your vehicle against damage, theft, and third-party liabilities with comprehensive motor insurance. Get instant quotes, cashless claims, and 24/7 roadside assistance.
              </p>
              <div className="mt-6 flex space-x-4">
                <Button className="bg-gradient-to-r from-[#00C853] to-[#00BFFF] hover:from-[#00C853]/90 hover:to-[#00BFFF]/90">
                  Get Quote
                </Button>
                <Button variant="outline" className="border-[#00C853] text-[#00C853] hover:bg-[#00C853]/10">
                  Renew Policy
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80" 
                alt="Car insurance" 
                className="rounded-lg shadow-lg w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-sm font-semibold text-[#00C853]">From ₹2,400/year</p>
                <p className="text-xs text-gray-500">For comprehensive coverage</p>
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
                <h2 className="mb-6 text-2xl font-semibold">Understanding Motor Insurance</h2>
                <div className="space-y-4 text-gray-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <img 
                      src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=600&q=80" 
                      alt="Vehicle protection" 
                      className="rounded-lg shadow-md w-full h-[240px] object-cover"
                    />
                    <div>
                      <p>
                        Motor insurance is mandatory by law and protects you financially from vehicle damages, theft, and legal liabilities. It ensures you're covered against unexpected expenses and legal complications.
                      </p>
                      <p className="mt-4">
                        Comprehensive motor insurance goes beyond legal requirements, covering your own vehicle damage, natural disasters, and providing additional benefits like roadside assistance.
                      </p>
                    </div>
                  </div>
                  <p>
                    At Confidence Financial, we help you find the best motor insurance deals from top insurers, ensuring you get comprehensive coverage at competitive rates with excellent claim support.
                  </p>
                </div>

                <div className="mt-8 p-5 bg-gradient-to-r from-orange-50 to-red-100 rounded-lg border border-orange-200">
                  <h3 className="text-lg font-semibold mb-3 text-[#001F3F]">Types of Motor Insurance Coverage</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-orange-200 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">1</span>
                      <div>
                        <strong>Third-Party Insurance:</strong> Mandatory by law, covers damages to other people and property.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-orange-200 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">2</span>
                      <div>
                        <strong>Comprehensive Insurance:</strong> Covers own damage + third-party liabilities + theft protection.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-orange-200 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">3</span>
                      <div>
                        <strong>Add-on Covers:</strong> Engine protection, zero depreciation, roadside assistance, etc.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <ProviderList providers={providers} />
              
              <div className="py-10">
                <h2 className="mb-6 text-2xl font-semibold">Key Benefits</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="p-5 bg-gradient-to-br from-white to-orange-50 border border-orange-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Cashless Claims</h3>
                    <p className="text-gray-600">
                      Get your vehicle repaired at network garages without paying from your pocket.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1486754735734-325b5831c3ad?auto=format&fit=crop&w=400&q=80" 
                      alt="Cashless repair" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-orange-50 border border-orange-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">24/7 Roadside Assistance</h3>
                    <p className="text-gray-600">
                      Round-the-clock support for towing, battery jump-start, and emergency repairs.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80" 
                      alt="Roadside assistance" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-orange-50 border border-orange-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">No Claim Bonus</h3>
                    <p className="text-gray-600">
                      Earn up to 50% discount on renewal for every claim-free year.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80" 
                      alt="Bonus rewards" 
                      className="mt-4 w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-br from-white to-orange-50 border border-orange-200 rounded-lg hover:shadow-md transition-all">
                    <h3 className="mb-3 text-lg font-medium text-[#00BFFF]">Legal Protection</h3>
                    <p className="text-gray-600">
                      Protection against legal liabilities and compliance with mandatory insurance laws.
                    </p>
                    <img 
                      src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=400&q=80" 
                      alt="Legal protection" 
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
                    Our insurance experts can help you choose the right motor insurance with optimal coverage and competitive rates.
                  </p>
                  <Link to="/contact">
                    <Button className="w-full bg-gradient-to-r from-[#00C853] to-[#00BFFF] hover:from-[#00C853]/90 hover:to-[#00BFFF]/90">
                      Talk to an Expert
                    </Button>
                  </Link>
                  <div className="mt-4 p-3 bg-orange-50 border border-orange-100 rounded-md">
                    <p className="text-sm text-orange-800">
                      "Quick claim settlement and excellent service. My car was back on road in just 2 days!" - Amit S.
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

export default VehicleInsurance;
