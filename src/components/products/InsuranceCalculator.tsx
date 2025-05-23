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
  const getMortalityRate = (age: number, gender: string) => {
    const maleRates: {[key: number]: number} = {
      25: 1.43,
      30: 1.46,
      35: 1.85,
      40: 2.48,
      45: 3.80,
      50: 5.91,
      55: 8.75,
      60: 13.2
    };
    
    const femaleRates: {[key: number]: number} = {
      25: 1.22,
      30: 1.24,
      35: 1.57,
      40: 2.11,
      45: 3.23,
      50: 5.02,
      55: 7.44,
      60: 11.22
    };

    // Find closest age key
    const rates = gender === "female" ? femaleRates : maleRates;
    const ages = Object.keys(rates).map(Number);
    const closest = ages.reduce((prev, curr) => {
      return (Math.abs(curr - age) < Math.abs(prev - age) ? curr : prev);
    });
    
    return rates[closest];
  };

  const calculateTermPremium = () => {
    // Base calculation using mortality rate
    const baseRate = getMortalityRate(termData.age, termData.gender);
    let premium = (termData.coverAmount * baseRate) / 10; // Cover in lakhs, rate per 1000
    
    // Apply gender discount
    if (termData.gender === "female") {
      premium *= 0.85; // 15% discount for women
    }
    
    // Apply smoker surcharge
    if (termData.isSmoker) {
      premium *= 1.35; // 35% surcharge for smokers
    }
    
    // Apply policy term adjustment
    const termFactor = 1 + ((termData.term - 20) * 0.015); // +/-1.5% per year from 20
    premium *= Math.max(0.7, Math.min(1.5, termFactor));
    
    // Add GST
    const withGST = premium * 1.18; // 18% GST
    
    // Monthly payment frequency adjustment
    if (termData.paymentFrequency === "monthly") {
      return Math.round((withGST / 12) * 1.025); // 2.5% loading for monthly payments
    }
    
    return Math.round(withGST);
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
      return Math.round(monthlyPremium * 11.5); // Annual is ~11.5 times monthly (discount)
    }
    
    return Math.round(monthlyPremium);
  };

  const calculateVehiclePremium = () => {
    // Simple estimation logic for demo purposes
    let basePremium = vehicleData.vehicleType === "car" ? 5000 : 2000;
    if (vehicleData.vehicleAge > 5) basePremium *= 1.2;
    if (vehicleData.coverageType === "comprehensive") basePremium *= 1.5;
    return Math.round(basePremium);
  };

  const calculateInvestmentReturns = () => {
    // Simple estimation logic for demo purposes
    const monthlyAmount = investmentData.frequency === "monthly" 
      ? investmentData.amount 
      : investmentData.amount / 12;
    const totalInvestment = monthlyAmount * 12 * investmentData.period;
    const estimatedReturns = totalInvestment * 1.08 ** investmentData.period;
    return Math.round(estimatedReturns);
  };

  const renderCalculator = () => {
    switch (type) {
      case "term":
        return (
          <div className="p-6 bg-gradient-to-br from-white to-blue-50 rounded-lg shadow-md border border-blue-100">
            <h3 className="mb-6 text-xl font-semibold text-[#001F3F]">Term Insurance Calculator</h3>
            
            <div className="mb-5">
              <Label>Your Age</Label>
              <div className="flex items-center gap-4">
                <Slider
                  value={[termData.age]}
                  min={18}
                  max={65}
                  step={1}
                  onValueChange={(value) => setTermData({ ...termData, age: value[0] })}
                  className="flex-1"
                />
                <span className="w-16 text-center bg-blue-50 px-2 py-1 rounded">{termData.age} yrs</span>
              </div>
            </div>
            
            <div className="mb-4">
              <Label>Gender</Label>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <button 
                  className={`py-2 px-3 rounded-md text-sm font-medium border transition-colors ${
                    termData.gender === "male" 
                      ? "bg-blue-100 border-blue-200 text-blue-800" 
                      : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setTermData({ ...termData, gender: "male" })}
                >
                  Male
                </button>
                <button 
                  className={`py-2 px-3 rounded-md text-sm font-medium border transition-colors ${
                    termData.gender === "female" 
                      ? "bg-blue-100 border-blue-200 text-blue-800" 
                      : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setTermData({ ...termData, gender: "female" })}
                >
                  Female
                </button>
              </div>
            </div>
            
            <div className="mb-4">
              <Label>Cover Amount</Label>
              <div className="flex items-center gap-4">
                <Slider
                  value={[termData.coverAmount]}
                  min={10}
                  max={200}
                  step={5}
                  onValueChange={(value) => setTermData({ ...termData, coverAmount: value[0] })}
                  className="flex-1"
                />
                <span className="w-20 text-center bg-blue-50 px-2 py-1 rounded">₹{termData.coverAmount} Lakh</span>
              </div>
            </div>
            
            <div className="mb-4">
              <Label>Policy Term</Label>
              <div className="flex items-center gap-4">
                <Slider
                  value={[termData.term]}
                  min={5}
                  max={40}
                  step={5}
                  onValueChange={(value) => setTermData({ ...termData, term: value[0] })}
                  className="flex-1"
                />
                <span className="w-16 text-center bg-blue-50 px-2 py-1 rounded">{termData.term} yrs</span>
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
                Smoker / Tobacco User
              </Label>
            </div>

            <div className="mb-5">
              <Label>Payment Frequency</Label>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <button 
                  className={`py-2 px-3 rounded-md text-sm font-medium border transition-colors ${
                    termData.paymentFrequency === "annual" 
                      ? "bg-blue-100 border-blue-200 text-blue-800" 
                      : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setTermData({ ...termData, paymentFrequency: "annual" })}
                >
                  Annual
                </button>
                <button 
                  className={`py-2 px-3 rounded-md text-sm font-medium border transition-colors ${
                    termData.paymentFrequency === "monthly" 
                      ? "bg-blue-100 border-blue-200 text-blue-800" 
                      : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setTermData({ ...termData, paymentFrequency: "monthly" })}
                >
                  Monthly
                </button>
              </div>
            </div>
            
            <div className="p-4 mb-6 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-md">
              <div className="flex items-center justify-between">
                <span>Estimated {termData.paymentFrequency === "monthly" ? "Monthly" : "Annual"} Premium:</span>
                <span className="text-lg font-semibold text-[#001F3F]">
                  ₹{calculateTermPremium()}
                  {termData.paymentFrequency === "monthly" ? "/month" : "/year"}
                </span>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Includes 18% GST. Final premium may vary based on medical examination and underwriting.
              </p>
            </div>
            
            <Button className="w-full bg-gradient-to-r from-[#001F3F] to-[#00BFFF] hover:from-[#001F3F]/90 hover:to-[#00BFFF]/90">
              Get Personalized Quote
            </Button>
          </div>
        );
        
      case "health":
        return (
          <div className="p-6 bg-gradient-to-br from-white to-green-50 rounded-lg shadow-md border border-green-100">
            <h3 className="mb-6 text-xl font-semibold text-[#001F3F]">Health Insurance Calculator</h3>
            
            <div className="mb-4">
              <Label>Your Age</Label>
              <div className="flex items-center gap-4">
                <Slider
                  value={[healthData.age]}
                  min={18}
                  max={70}
                  step={1}
                  onValueChange={(value) => setHealthData({ ...healthData, age: value[0] })}
                  className="flex-1"
                />
                <span className="w-16 text-center bg-green-50 px-2 py-1 rounded">{healthData.age} yrs</span>
              </div>
            </div>

            <div className="mb-4">
              <Label>Gender</Label>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <button 
                  className={`py-2 px-3 rounded-md text-sm font-medium border transition-colors ${
                    healthData.gender === "male" 
                      ? "bg-green-100 border-green-200 text-green-800" 
                      : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setHealthData({ ...healthData, gender: "male" })}
                >
                  Male
                </button>
                <button 
                  className={`py-2 px-3 rounded-md text-sm font-medium border transition-colors ${
                    healthData.gender === "female" 
                      ? "bg-green-100 border-green-200 text-green-800" 
                      : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setHealthData({ ...healthData, gender: "female" })}
                >
                  Female
                </button>
              </div>
            </div>
            
            <div className="mb-4">
              <Label>Number of Family Members</Label>
              <div className="flex items-center gap-4">
                <Slider
                  value={[healthData.familyMembers]}
                  min={1}
                  max={6}
                  step={1}
                  onValueChange={(value) => setHealthData({ ...healthData, familyMembers: value[0] })}
                  className="flex-1"
                />
                <span className="w-16 text-center bg-green-50 px-2 py-1 rounded">{healthData.familyMembers}</span>
              </div>
            </div>
            
            <div className="mb-4">
              <Label>City Type</Label>
              <select
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                value={healthData.city}
                onChange={(e) => setHealthData({ ...healthData, city: e.target.value })}
              >
                <option value="metro">Metro City</option>
                <option value="tier1">Tier 1 City</option>
                <option value="tier2">Tier 2 & Other Cities</option>
              </select>
            </div>

            <div className="mb-4">
              <Label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={healthData.isSmoker}
                  onChange={(e) => setHealthData({ ...healthData, isSmoker: e.target.checked })}
                  className="rounded text-green-600 focus:ring-green-500"
                />
                Smoker / Tobacco User
              </Label>
            </div>
            
            <div className="mb-5">
              <Label>Sum Insured</Label>
              <div className="flex items-center gap-4">
                <Slider
                  value={[healthData.sumInsured]}
                  min={2}
                  max={50}
                  step={1}
                  onValueChange={(value) => setHealthData({ ...healthData, sumInsured: value[0] })}
                  className="flex-1"
                />
                <span className="w-20 text-center bg-green-50 px-2 py-1 rounded">₹{healthData.sumInsured} Lakh</span>
              </div>
            </div>

            <div className="mb-5">
              <Label>Payment Frequency</Label>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <button 
                  className={`py-2 px-3 rounded-md text-sm font-medium border transition-colors ${
                    healthData.paymentFrequency === "annual" 
                      ? "bg-green-100 border-green-200 text-green-800" 
                      : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setHealthData({ ...healthData, paymentFrequency: "annual" })}
                >
                  Annual
                </button>
                <button 
                  className={`py-2 px-3 rounded-md text-sm font-medium border transition-colors ${
                    healthData.paymentFrequency === "monthly" 
                      ? "bg-green-100 border-green-200 text-green-800" 
                      : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setHealthData({ ...healthData, paymentFrequency: "monthly" })}
                >
                  Monthly
                </button>
              </div>
            </div>
            
            <div className="p-4 mb-6 bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-md">
              <div className="flex items-center justify-between">
                <span>Estimated {healthData.paymentFrequency === "monthly" ? "Monthly" : "Annual"} Premium:</span>
                <span className="text-lg font-semibold text-[#001F3F]">
                  ₹{calculateHealthPremium()}
                  {healthData.paymentFrequency === "monthly" ? "/month" : "/year"}
                </span>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Includes 18% GST. Final premium may vary based on medical history and coverage options.
              </p>
            </div>
            
            <Button className="w-full bg-gradient-to-r from-[#00C853] to-[#00BFFF] hover:from-[#00C853]/90 hover:to-[#00BFFF]/90">
              Get Personalized Quote
            </Button>
          </div>
        );
        
      case "vehicle":
        return (
          <div className="p-6 bg-gradient-to-br from-white to-amber-50 rounded-lg shadow-md border border-amber-100">
            <h3 className="mb-6 text-xl font-semibold text-[#001F3F]">Vehicle Insurance Calculator</h3>
            
            <div className="mb-4">
              <Label>Vehicle Type</Label>
              <select
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                value={vehicleData.vehicleType}
                onChange={(e) => setVehicleData({ ...vehicleData, vehicleType: e.target.value })}
              >
                <option value="car">Car</option>
                <option value="two-wheeler">Two Wheeler</option>
              </select>
            </div>
            
            <div className="mb-4">
              <Label>Vehicle Age</Label>
              <div className="flex items-center gap-4">
                <Slider
                  value={[vehicleData.vehicleAge]}
                  min={0}
                  max={15}
                  step={1}
                  onValueChange={(value) => setVehicleData({ ...vehicleData, vehicleAge: value[0] })}
                  className="flex-1"
                />
                <span className="w-16 text-center bg-amber-50 px-2 py-1 rounded">{vehicleData.vehicleAge} yrs</span>
              </div>
            </div>
            
            <div className="mb-6">
              <Label>Coverage Type</Label>
              <select
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                value={vehicleData.coverageType}
                onChange={(e) => setVehicleData({ ...vehicleData, coverageType: e.target.value })}
              >
                <option value="third-party">Third Party</option>
                <option value="comprehensive">Comprehensive</option>
              </select>
            </div>
            
            <div className="p-4 mb-6 bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 rounded-md">
              <div className="flex items-center justify-between">
                <span>Estimated Annual Premium:</span>
                <span className="text-lg font-semibold text-[#001F3F]">₹{calculateVehiclePremium()}</span>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Includes 18% GST. Final premium may vary based on vehicle make, model and additional coverage options.
              </p>
            </div>
            
            <Button className="w-full bg-gradient-to-r from-[#FF9800] to-[#F44336] hover:from-[#FF9800]/90 hover:to-[#F44336]/90">
              Get Personalized Quote
            </Button>
          </div>
        );
        
      case "investment":
        return (
          <div className="p-6 bg-gradient-to-br from-white to-purple-50 rounded-lg shadow-md border border-purple-100">
            <h3 className="mb-6 text-xl font-semibold text-[#001F3F]">Investment Calculator</h3>
            
            <div className="mb-4">
              <Label>Investment Amount</Label>
              <div className="flex items-center mt-1">
                <span className="p-2 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">₹</span>
                <Input
                  type="number"
                  min="1000"
                  value={investmentData.amount}
                  onChange={(e) => setInvestmentData({ ...investmentData, amount: Number(e.target.value) })}
                  className="rounded-l-none"
                />
              </div>
            </div>
            
            <div className="mb-4">
              <Label>Investment Frequency</Label>
              <select
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                value={investmentData.frequency}
                onChange={(e) => setInvestmentData({ ...investmentData, frequency: e.target.value })}
              >
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
            
            <div className="mb-6">
              <Label>Investment Period</Label>
              <div className="flex items-center gap-4">
                <Slider
                  value={[investmentData.period]}
                  min={1}
                  max={30}
                  step={1}
                  onValueChange={(value) => setInvestmentData({ ...investmentData, period: value[0] })}
                  className="flex-1"
                />
                <span className="w-16 text-center bg-purple-50 px-2 py-1 rounded">{investmentData.period} yrs</span>
              </div>
            </div>
            
            <div className="p-4 mb-6 bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-md">
              <div className="mb-2">
                <span className="text-sm text-gray-600">Total Investment:</span>
                <span className="block text-lg font-semibold text-[#001F3F]">
                  ₹{investmentData.amount * (investmentData.frequency === "monthly" ? 12 : 1) * investmentData.period}
                </span>
              </div>
              <div>
                <span className="text-sm text-gray-600">Estimated Returns:</span>
                <span className="block text-lg font-semibold text-[#00C853]">
                  ₹{calculateInvestmentReturns()}
                </span>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Returns are estimated at 8% p.a. compound interest. Actual returns may vary based on market conditions.
              </p>
            </div>
            
            <Button className="w-full bg-gradient-to-r from-[#673AB7] to-[#3F51B5] hover:from-[#673AB7]/90 hover:to-[#3F51B5]/90">
              Talk to an Advisor
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
