
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SimpleCalculator = () => {
  const [termData, setTermData] = useState({
    age: 30,
    gender: "male",
    coverAmount: 5000000, // ₹50 Lakhs
    policyTerm: 20,
    isSmoker: false,
    paymentFrequency: "annual",
  });
  
  // Term Insurance Mortality Rate Table (per 1,000 sum assured)
  const getMortalityRate = (age: number, gender: string, isSmoker: boolean): number => {
    const maleRates: {[key: number]: number} = {
      20: 1.39,
      23: 1.41,
      25: 1.43,
      30: 1.46,
      35: 1.85,
      40: 2.48,
      45: 3.80,
      50: 5.91,
      55: 8.75,
      60: 13.2
    };

    const ages = Object.keys(maleRates).map(Number);
    const closest = ages.reduce((prev, curr) => Math.abs(curr - age) < Math.abs(prev - age) ? curr : prev);
    let rate = maleRates[closest];

    if (gender === "female") {
      rate *= 0.85; // 15% lower rate
    }

    if (isSmoker) {
      rate *= 1.35; // 35% higher rate
    }

    return rate;
  };

  const calculateTermPremium = (): number => {
    const mortalityRate = getMortalityRate(termData.age, termData.gender, termData.isSmoker);

    // Correct calculation: divide rupees by 1000, then multiply by rate
    const basePremium = (termData.coverAmount / 1000) * mortalityRate;

    const gst = basePremium * 0.18;
    const annualPremium = basePremium + gst;

    if (termData.paymentFrequency === "monthly") {
      return (annualPremium / 12) * 1.025; // Monthly with modal loading
    }

    return annualPremium; // Annual premium
  };
  
  const formatAmount = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${amount / 10000000} Cr`;
    }
    if (amount >= 100000) {
      return `₹${amount / 100000} Lakhs`;
    }
    return `₹${amount}`;
  };
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount).replace('₹', '₹ ');
  };
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Quick Premium Estimator</h2>
          <p className="text-gray-600">
            Get a detailed estimate of what your term insurance premium might look like.
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
              <CardTitle className="text-xl bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Term Insurance Estimator</CardTitle>
              <CardDescription>Adjust the parameters to calculate your premium</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Your Age</span>
                  <span className="text-sm font-medium">{termData.age} years</span>
                </div>
                <Slider
                  min={18}
                  max={65}
                  step={1}
                  value={[termData.age]}
                  onValueChange={(value) => setTermData({ ...termData, age: value[0] })}
                  className="bg-blue-100"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>18</span>
                  <span>65</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Gender</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button 
                    className={`py-1 px-2 rounded-md text-sm font-medium border transition-all transform hover:scale-105 duration-200 ${
                      termData.gender === "male" 
                        ? "bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 text-blue-700" 
                        : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                    onClick={() => setTermData({ ...termData, gender: "male" })}
                  >
                    Male
                  </button>
                  <button 
                    className={`py-1 px-2 rounded-md text-sm font-medium border transition-all transform hover:scale-105 duration-200 ${
                      termData.gender === "female" 
                        ? "bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 text-blue-700" 
                        : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                    onClick={() => setTermData({ ...termData, gender: "female" })}
                  >
                    Female
                  </button>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Cover Amount</span>
                  <span className="text-sm font-medium">{formatAmount(termData.coverAmount)}</span>
                </div>
                <Slider
                  min={500000}
                  max={10000000}
                  step={100000}
                  value={[termData.coverAmount]}
                  onValueChange={(value) => setTermData({ ...termData, coverAmount: value[0] })}
                  className="bg-blue-100"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>5 Lakhs</span>
                  <span>1 Cr</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Policy Term</span>
                  <span className="text-sm font-medium">{termData.policyTerm} years</span>
                </div>
                <Slider
                  min={5}
                  max={40}
                  step={5}
                  value={[termData.policyTerm]}
                  onValueChange={(value) => setTermData({ ...termData, policyTerm: value[0] })}
                  className="bg-blue-100"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>5 yrs</span>
                  <span>40 yrs</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={termData.isSmoker}
                    onChange={(e) => setTermData({ ...termData, isSmoker: e.target.checked })}
                    className="rounded text-blue-600 focus:ring-blue-500 mr-2"
                  />
                  Smoker
                </label>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Payment Frequency</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button 
                    className={`py-1 px-2 rounded-md text-sm font-medium border transition-all transform hover:scale-105 duration-200 ${
                      termData.paymentFrequency === "annual" 
                        ? "bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 text-blue-700" 
                        : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                    onClick={() => setTermData({ ...termData, paymentFrequency: "annual" })}
                  >
                    Annual
                  </button>
                  <button 
                    className={`py-1 px-2 rounded-md text-sm font-medium border transition-all transform hover:scale-105 duration-200 ${
                      termData.paymentFrequency === "monthly" 
                        ? "bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 text-blue-700" 
                        : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                    onClick={() => setTermData({ ...termData, paymentFrequency: "monthly" })}
                  >
                    Monthly
                  </button>
                </div>
              </div>
              
              <div className="p-4 mt-2 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 hover:shadow-md hover:from-blue-100 hover:to-cyan-100 transition-all duration-300">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Premium:</span>
                  <span className="text-xl font-bold text-[#001F3F]">
                    {formatCurrency(calculateTermPremium())}
                    <span className="text-sm text-gray-600 ml-1">
                      {termData.paymentFrequency === "monthly" ? "/month" : "/year"}
                    </span>
                  </span>
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  This includes 18% GST. Actual premiums may vary based on health, lifestyle, and other factors.
                </p>
              </div>
              
              <Link to="/term-insurance" className="w-full block">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transform hover:scale-[1.02] transition-all duration-300">
                  Get Accurate Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SimpleCalculator;
