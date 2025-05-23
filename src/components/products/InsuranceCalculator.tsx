
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface CalculatorProps {
  type: "term" | "health" | "vehicle" | "investment";
}

const InsuranceCalculator = ({ type }: CalculatorProps) => {
  // Term Insurance State
  const [termData, setTermData] = useState({
    age: 30,
    gender: "male",
    coverAmount: 50,
    term: 20,
    isSmoker: false,
    paymentFrequency: "annual",
  });

  // Health Insurance State
  const [healthData, setHealthData] = useState({
    age: 30,
    gender: "male",
    familyMembers: 2,
    sumInsured: 5,
    city: "metro",
    isSmoker: false,
    paymentFrequency: "annual",
  });

  // Vehicle Insurance State
  const [vehicleData, setVehicleData] = useState({
    vehicleType: "car",
    vehicleAge: 2,
    coverageType: "comprehensive",
  });

  // Investment State
  const [investmentData, setInvestmentData] = useState({
    amount: 10000,
    period: 5,
    frequency: "monthly",
  });

  // Term Insurance Mortality Rate Table (per 1,000 sum assured)
  const getMortalityRate = (age: number, gender: string, isSmoker: boolean) => {
    // Base mortality rates for non-smoking males
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
    
    // Find closest age key
    const ages = Object.keys(maleRates).map(Number);
    const closest = ages.reduce((prev, curr) => {
      return (Math.abs(curr - age) < Math.abs(prev - age) ? curr : prev);
    });
    
    let rate = maleRates[closest];
    
    // Apply gender discount for females (15% lower rate)
    if (gender === "female") {
      rate *= 0.85;
    }
    
    // Apply smoker surcharge (35% higher rate)
    if (isSmoker) {
      rate *= 1.35;
    }
    
    return rate;
  };

  const calculateTermPremium = () => {
    // Get base mortality rate
    const mortalityRate = getMortalityRate(termData.age, termData.gender, termData.isSmoker);
    
    // Calculate base premium (Sum Assured / 1000) * Mortality Rate
    const basePremium = (termData.coverAmount * 1000) * mortalityRate / 1000;
    
    // Add GST (18%)
    const gst = basePremium * 0.18;
    const annualPremium = basePremium + gst;
    
    // If monthly payment, apply 2.5% modal loading and divide by 12
    if (termData.paymentFrequency === "monthly") {
      return (annualPremium / 12) * 1.025;
    }
    
    // Return annual premium without rounding
    return annualPremium;
  };

  const calculateHealthPremium = () => {
    // Base rate by age (monthly rate per lakh of coverage)
    const baseRates: {[key: number]: number} = {
      20: 60,
      25: 70,
      30: 85,
      35: 110,
      40: 150,
      45: 220,
      50: 350,
      55: 550,
      60: 800
    };
    
    // Find closest age key
    const ages = Object.keys(baseRates).map(Number);
    const closest = ages.reduce((prev, curr) => {
      return (Math.abs(curr - healthData.age) < Math.abs(prev - healthData.age) ? curr : prev);
    });
    
    let baseRate = baseRates[closest];
    
    // City factor
    const cityFactors = {
      "metro": 1.2,
      "tier1": 1.1,
      "tier2": 1.0
    };
    const cityFactor = cityFactors[healthData.city as keyof typeof cityFactors] || 1;
    
    // Gender factor
    const genderFactor = healthData.gender === "female" ? 0.95 : 1;
    
    // Smoker factor
    const smokerFactor = healthData.isSmoker ? 1.2 : 1;
    
    // Family member factor
    const familyFactor = 1 + ((healthData.familyMembers - 1) * 0.8);
    
    // Calculate monthly premium
    let monthlyPremium = baseRate * healthData.sumInsured * cityFactor * genderFactor * smokerFactor;
    
    // Apply family discount
    if (healthData.familyMembers > 1) {
      monthlyPremium *= familyFactor;
    }
    
    // Apply GST
    monthlyPremium *= 1.18;
    
    // Convert to payment frequency
    if (healthData.paymentFrequency === "annual") {
      return monthlyPremium * 11.5; // Annual is ~11.5 times monthly (discount)
    }
    
    return monthlyPremium;
  };

  const calculateVehiclePremium = () => {
    // Simple estimation logic for demo purposes
    let basePremium = vehicleData.vehicleType === "car" ? 5000 : 2000;
    if (vehicleData.vehicleAge > 5) basePremium *= 1.2;
    if (vehicleData.coverageType === "comprehensive") basePremium *= 1.5;
    return basePremium;
  };

  const calculateInvestmentReturns = () => {
    // Simple estimation logic for demo purposes
    const monthlyAmount = investmentData.frequency === "monthly" 
      ? investmentData.amount 
      : investmentData.amount / 12;
    const totalInvestment = monthlyAmount * 12 * investmentData.period;
    const estimatedReturns = totalInvestment * 1.08 ** investmentData.period;
    return estimatedReturns;
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount).replace('₹', '₹ ');
  };

  const renderCalculator = () => {
    switch (type) {
      case "term":
        return (
          <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="mb-4 text-lg font-medium text-gray-800 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Term Insurance Calculator</h3>
            
            <div className="mb-4">
              <Label>Age</Label>
              <div className="flex items-center gap-2">
                <Slider
                  value={[termData.age]}
                  min={18}
                  max={65}
                  step={1}
                  onValueChange={(value) => setTermData({ ...termData, age: value[0] })}
                  className="flex-1"
                />
                <span className="w-12 text-center bg-gray-100 px-2 py-1 rounded">{termData.age}</span>
              </div>
            </div>
            
            <div className="mb-4">
              <Label>Gender</Label>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <button 
                  className={`py-1 px-2 rounded-md text-sm font-medium border transition-all ${
                    termData.gender === "male" 
                      ? "bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 text-blue-700" 
                      : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setTermData({ ...termData, gender: "male" })}
                >
                  Male
                </button>
                <button 
                  className={`py-1 px-2 rounded-md text-sm font-medium border transition-all ${
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
            
            <div className="mb-4">
              <Label>Cover Amount (₹ Lakh)</Label>
              <div className="flex items-center gap-2">
                <Slider
                  value={[termData.coverAmount]}
                  min={10}
                  max={200}
                  step={5}
                  onValueChange={(value) => setTermData({ ...termData, coverAmount: value[0] })}
                  className="flex-1"
                />
                <span className="w-16 text-center bg-gray-100 px-2 py-1 rounded">₹{termData.coverAmount}L</span>
              </div>
            </div>
            
            <div className="mb-4">
              <Label>Policy Term</Label>
              <div className="flex items-center gap-2">
                <Slider
                  value={[termData.term]}
                  min={5}
                  max={40}
                  step={5}
                  onValueChange={(value) => setTermData({ ...termData, term: value[0] })}
                  className="flex-1"
                />
                <span className="w-12 text-center bg-gray-100 px-2 py-1 rounded">{termData.term}y</span>
              </div>
            </div>
            
            <div className="mb-4">
              <Label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={termData.isSmoker}
                  onChange={(e) => setTermData({ ...termData, isSmoker: e.target.checked })}
                  className="rounded text-blue-600 focus:ring-blue-500"
                />
                Smoker
              </Label>
            </div>

            <div className="mb-4">
              <Label>Payment Frequency</Label>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <button 
                  className={`py-1 px-2 rounded-md text-sm font-medium border transition-all ${
                    termData.paymentFrequency === "annual" 
                      ? "bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 text-blue-700" 
                      : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setTermData({ ...termData, paymentFrequency: "annual" })}
                >
                  Annual
                </button>
                <button 
                  className={`py-1 px-2 rounded-md text-sm font-medium border transition-all ${
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
            
            <div className="p-3 mb-4 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-md hover:shadow-sm transition-all">
              <div className="flex items-center justify-between">
                <span>Premium:</span>
                <span className="text-lg font-medium text-gray-800">
                  {formatCurrency(calculateTermPremium())}
                  <span className="text-sm text-gray-600">
                    {termData.paymentFrequency === "monthly" ? "/month" : "/year"}
                  </span>
                </span>
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Includes 18% GST. Actual premium may vary.
              </p>
            </div>
            
            <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all">
              Get Personalized Quote
            </Button>
          </div>
        );
        
      case "health":
        return (
          <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="mb-4 text-lg font-medium text-gray-800 bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">Health Insurance Calculator</h3>
            
            {/* Simplified health calculator UI */}
            <div className="mb-4">
              <Label>Age</Label>
              <div className="flex items-center gap-2">
                <Slider
                  value={[healthData.age]}
                  min={18}
                  max={70}
                  step={1}
                  onValueChange={(value) => setHealthData({ ...healthData, age: value[0] })}
                  className="flex-1"
                />
                <span className="w-12 text-center bg-gray-100 px-2 py-1 rounded">{healthData.age}</span>
              </div>
            </div>

            {/* Basic health inputs */}
            <div className="mb-4">
              <Label>Sum Insured</Label>
              <div className="flex items-center gap-2">
                <Slider
                  value={[healthData.sumInsured]}
                  min={2}
                  max={50}
                  step={1}
                  onValueChange={(value) => setHealthData({ ...healthData, sumInsured: value[0] })}
                  className="flex-1"
                />
                <span className="w-16 text-center bg-gray-100 px-2 py-1 rounded">₹{healthData.sumInsured}L</span>
              </div>
            </div>
            
            <div className="p-3 mb-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 rounded-md hover:shadow-sm transition-all">
              <div className="flex items-center justify-between">
                <span>Premium:</span>
                <span className="text-lg font-medium text-gray-800">
                  {formatCurrency(calculateHealthPremium())}
                  <span className="text-sm text-gray-600">
                    {healthData.paymentFrequency === "monthly" ? "/month" : "/year"}
                  </span>
                </span>
              </div>
            </div>
            
            <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 transition-all">
              Get Quote
            </Button>
          </div>
        );
        
      case "vehicle":
        return (
          <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="mb-4 text-lg font-medium text-gray-800 bg-gradient-to-r from-amber-500 to-yellow-400 bg-clip-text text-transparent">Vehicle Insurance</h3>
            
            {/* Simplified vehicle calculator UI */}
            <div className="mb-4">
              <Label>Vehicle Type</Label>
              <select
                className="w-full p-2 mt-1 border border-gray-300 rounded-md hover:border-amber-300 transition-colors"
                value={vehicleData.vehicleType}
                onChange={(e) => setVehicleData({ ...vehicleData, vehicleType: e.target.value })}
              >
                <option value="car">Car</option>
                <option value="two-wheeler">Two Wheeler</option>
              </select>
            </div>
            
            <div className="p-3 mb-4 bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-100 rounded-md hover:shadow-sm transition-all">
              <div className="flex items-center justify-between">
                <span>Premium:</span>
                <span className="text-lg font-medium text-gray-800">
                  {formatCurrency(calculateVehiclePremium())}
                  <span className="text-sm text-gray-600">/year</span>
                </span>
              </div>
            </div>
            
            <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 transition-all">
              Get Quote
            </Button>
          </div>
        );
        
      case "investment":
        return (
          <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="mb-4 text-lg font-medium text-gray-800 bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">Investment Calculator</h3>
            
            {/* Simplified investment calculator UI */}
            <div className="mb-4">
              <Label>Monthly Investment</Label>
              <div className="flex items-center mt-1">
                <span className="p-1 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">₹</span>
                <Input
                  type="number"
                  min="1000"
                  value={investmentData.amount}
                  onChange={(e) => setInvestmentData({ ...investmentData, amount: Number(e.target.value) })}
                  className="rounded-l-none hover:border-purple-300 transition-colors"
                />
              </div>
            </div>
            
            <div className="p-3 mb-4 bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-100 rounded-md hover:shadow-sm transition-all">
              <div className="flex items-center justify-between">
                <span>Estimated Returns:</span>
                <span className="text-lg font-medium text-gray-800">
                  {formatCurrency(calculateInvestmentReturns())}
                </span>
              </div>
            </div>
            
            <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 transition-all">
              Calculate Returns
            </Button>
          </div>
        );

      default:
        return null;
    }
  };

  return renderCalculator();
};

export default InsuranceCalculator;
