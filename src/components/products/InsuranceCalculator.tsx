
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
    coverAmount: 50,
    term: 20,
    isSmoker: false,
  });

  // Health Insurance State
  const [healthData, setHealthData] = useState({
    age: 30,
    familyMembers: 2,
    sumInsured: 5,
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

  const calculateTermPremium = () => {
    // Simple estimation logic for demo purposes
    let basePremium = (termData.coverAmount * 0.5) / termData.term;
    if (termData.age > 40) basePremium *= 1.5;
    if (termData.isSmoker) basePremium *= 1.7;
    return Math.round(basePremium * 100) / 100;
  };

  const calculateHealthPremium = () => {
    // Simple estimation logic for demo purposes
    let basePremium = healthData.sumInsured * 2.5;
    if (healthData.age > 40) basePremium *= 1.3;
    basePremium *= Math.max(1, healthData.familyMembers * 0.8);
    return Math.round(basePremium * 100) / 100;
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
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="mb-6 text-xl font-semibold">Term Insurance Calculator</h3>
            
            <div className="mb-4">
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
                <span className="w-12 text-center">{termData.age} yrs</span>
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
                <span className="w-20 text-center">₹{termData.coverAmount} Lakh</span>
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
                <span className="w-12 text-center">{termData.term} yrs</span>
              </div>
            </div>
            
            <div className="mb-6">
              <Label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={termData.isSmoker}
                  onChange={(e) => setTermData({ ...termData, isSmoker: e.target.checked })}
                />
                Smoker
              </Label>
            </div>
            
            <div className="p-4 mb-6 bg-gray-50 rounded-md">
              <div className="flex items-center justify-between">
                <span>Estimated Monthly Premium:</span>
                <span className="text-lg font-semibold text-[#001F3F]">₹{calculateTermPremium()}</span>
              </div>
            </div>
            
            <Button className="w-full bg-[#00C853] hover:bg-[#00C853]/90">
              Get Personalized Quote
            </Button>
          </div>
        );
        
      case "health":
        return (
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="mb-6 text-xl font-semibold">Health Insurance Calculator</h3>
            
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
                <span className="w-12 text-center">{healthData.age} yrs</span>
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
                <span className="w-12 text-center">{healthData.familyMembers}</span>
              </div>
            </div>
            
            <div className="mb-6">
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
                <span className="w-20 text-center">₹{healthData.sumInsured} Lakh</span>
              </div>
            </div>
            
            <div className="p-4 mb-6 bg-gray-50 rounded-md">
              <div className="flex items-center justify-between">
                <span>Estimated Annual Premium:</span>
                <span className="text-lg font-semibold text-[#001F3F]">₹{calculateHealthPremium()}</span>
              </div>
            </div>
            
            <Button className="w-full bg-[#00C853] hover:bg-[#00C853]/90">
              Get Personalized Quote
            </Button>
          </div>
        );
        
      case "vehicle":
        return (
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="mb-6 text-xl font-semibold">Vehicle Insurance Calculator</h3>
            
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
                <span className="w-12 text-center">{vehicleData.vehicleAge} yrs</span>
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
            
            <div className="p-4 mb-6 bg-gray-50 rounded-md">
              <div className="flex items-center justify-between">
                <span>Estimated Annual Premium:</span>
                <span className="text-lg font-semibold text-[#001F3F]">₹{calculateVehiclePremium()}</span>
              </div>
            </div>
            
            <Button className="w-full bg-[#00C853] hover:bg-[#00C853]/90">
              Get Personalized Quote
            </Button>
          </div>
        );
        
      case "investment":
        return (
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="mb-6 text-xl font-semibold">Investment Calculator</h3>
            
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
                <span className="w-12 text-center">{investmentData.period} yrs</span>
              </div>
            </div>
            
            <div className="p-4 mb-6 bg-gray-50 rounded-md">
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
            </div>
            
            <Button className="w-full bg-[#00C853] hover:bg-[#00C853]/90">
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
