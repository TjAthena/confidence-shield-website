
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SimpleCalculator = () => {
  const [age, setAge] = useState([30]);
  const [coverage, setCoverage] = useState([1000000]); // 10 Lakhs
  
  const formatAmount = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${amount / 10000000} Cr`;
    }
    if (amount >= 100000) {
      return `₹${amount / 100000} Lakhs`;
    }
    return `₹${amount}`;
  };
  
  // Simple estimation formula (purely illustrative)
  const estimateMonthlyPremium = () => {
    const baseRate = 0.5;
    const ageFactor = age[0] / 25;
    const coverageFactor = coverage[0] / 1000000;
    
    return Math.round(baseRate * ageFactor * coverageFactor * 100);
  };
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-[#001F3F]">Quick Premium Estimator</h2>
          <p className="text-gray-600">
            Get a rough idea of what your life insurance premium might look like.
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Term Insurance Estimator</CardTitle>
              <CardDescription>Adjust the sliders to see how your premium changes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Your Age</span>
                  <span className="text-sm font-medium">{age[0]} years</span>
                </div>
                <Slider
                  min={18}
                  max={65}
                  step={1}
                  value={age}
                  onValueChange={setAge}
                  className="bg-blue-100"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>18</span>
                  <span>65</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Cover Amount</span>
                  <span className="text-sm font-medium">{formatAmount(coverage[0])}</span>
                </div>
                <Slider
                  min={500000}
                  max={10000000}
                  step={100000}
                  value={coverage}
                  onValueChange={setCoverage}
                  className="bg-blue-100"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>5 Lakhs</span>
                  <span>1 Cr</span>
                </div>
              </div>
              
              <div className="p-4 mt-4 rounded-lg bg-blue-50">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Estimated Monthly Premium:</span>
                  <span className="text-xl font-bold text-[#001F3F]">₹{estimateMonthlyPremium()}</span>
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  This is just an estimate. Actual premiums may vary based on health, lifestyle, and other factors.
                </p>
              </div>
              
              <Link to="/term-insurance" className="w-full block">
                <Button className="w-full bg-[#00BFFF] hover:bg-[#00BFFF]/90">
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
