
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Trophy } from "lucide-react";

interface CalculatorData {
  age: number;
  gender: "male" | "female";
  isSmoker: boolean;
  coverAmount: number; // in lakhs
  coverTillAge: number;
}

interface ProviderQuote {
  name: string;
  annualPremium: number;
  monthlyPremium: number;
  features: string[];
  color: string;
}

const ComparativeTermCalculator = () => {
  const [data, setData] = useState<CalculatorData>({
    age: 30,
    gender: "male",
    isSmoker: false,
    coverAmount: 100, // ₹1 Cr
    coverTillAge: 60,
  });

  const calculateHDFCPremium = (data: CalculatorData): number => {
    const policyTerm = data.coverTillAge - data.age;
    let baseRate = 1.2; // Base rate per lakh
    
    // Age factor
    if (data.age <= 30) baseRate *= 0.9;
    else if (data.age <= 40) baseRate *= 1.1;
    else if (data.age <= 50) baseRate *= 1.4;
    else baseRate *= 2.0;
    
    // Gender factor
    if (data.gender === "female") baseRate *= 0.85;
    
    // Smoker factor
    if (data.isSmoker) baseRate *= 1.35;
    
    // Policy term factor
    if (policyTerm >= 30) baseRate *= 1.1;
    
    const basePremium = data.coverAmount * baseRate;
    return basePremium * 1.18; // Include GST
  };

  const calculateMaxLifePremium = (data: CalculatorData): number => {
    let baseRate = 1.1; // Competitive base rate
    
    // Age-based multiplier
    if (data.age <= 30) baseRate *= 0.85;
    else if (data.age <= 40) baseRate *= 1.05;
    else if (data.age <= 50) baseRate *= 1.35;
    else baseRate *= 1.9;
    
    // Gender discount
    if (data.gender === "female") baseRate *= 0.82;
    
    // Smoker surcharge
    if (data.isSmoker) baseRate *= 1.32;
    
    const basePremium = data.coverAmount * baseRate;
    return basePremium * 1.18;
  };

  const calculateICICIPremium = (data: CalculatorData): number => {
    let baseRate = 1.15;
    
    // Age factor
    if (data.age <= 30) baseRate *= 0.88;
    else if (data.age <= 40) baseRate *= 1.08;
    else if (data.age <= 50) baseRate *= 1.38;
    else baseRate *= 1.95;
    
    // Gender factor (15% discount for females)
    if (data.gender === "female") baseRate *= 0.85;
    
    // Smoker factor (30-35% surcharge)
    if (data.isSmoker) baseRate *= 1.33;
    
    const basePremium = data.coverAmount * baseRate;
    return basePremium * 1.18;
  };

  const calculateLICPremium = (data: CalculatorData): number => {
    let baseRate = 1.3; // Conservative pricing
    
    // Age factor
    if (data.age <= 30) baseRate *= 0.95;
    else if (data.age <= 40) baseRate *= 1.15;
    else if (data.age <= 50) baseRate *= 1.45;
    else baseRate *= 2.1;
    
    // Lower gender discount
    if (data.gender === "female") baseRate *= 0.88;
    
    // Heavy smoker surcharge
    if (data.isSmoker) baseRate *= 1.4;
    
    const basePremium = data.coverAmount * baseRate;
    return basePremium * 1.18;
  };

  const calculateSBILifePremium = (data: CalculatorData): number => {
    let baseRate = 1.12;
    
    // Age-sensitive pricing
    if (data.age <= 30) baseRate *= 0.87;
    else if (data.age <= 35) baseRate *= 1.0;
    else if (data.age <= 45) baseRate *= 1.25; // Sharp increase after 35
    else if (data.age <= 50) baseRate *= 1.55;
    else baseRate *= 2.2;
    
    // Gender factor
    if (data.gender === "female") baseRate *= 0.84;
    
    // Smoker factor
    if (data.isSmoker) baseRate *= 1.34;
    
    const basePremium = data.coverAmount * baseRate;
    return basePremium * 1.18;
  };

  const getProviderQuotes = (): ProviderQuote[] => {
    const quotes: ProviderQuote[] = [
      {
        name: "HDFC Life",
        annualPremium: calculateHDFCPremium(data),
        monthlyPremium: (calculateHDFCPremium(data) / 12) * 1.025,
        features: ["Comprehensive coverage", "Quick claim settlement", "Online policy management"],
        color: "bg-gradient-to-r from-blue-500 to-blue-600"
      },
      {
        name: "Max Life Insurance",
        annualPremium: calculateMaxLifePremium(data),
        monthlyPremium: (calculateMaxLifePremium(data) / 12) * 1.025,
        features: ["Excellent claim ratio", "Flexible premium payment", "Health benefits"],
        color: "bg-gradient-to-r from-red-500 to-red-600"
      },
      {
        name: "ICICI Prudential",
        annualPremium: calculateICICIPremium(data),
        monthlyPremium: (calculateICICIPremium(data) / 12) * 1.025,
        features: ["iProtect Smart engine", "Digital-first approach", "Rider options"],
        color: "bg-gradient-to-r from-orange-500 to-orange-600"
      },
      {
        name: "LIC",
        annualPremium: calculateLICPremium(data),
        monthlyPremium: (calculateLICPremium(data) / 12) * 1.025,
        features: ["Most trusted brand", "Wide network", "Guaranteed claim settlement"],
        color: "bg-gradient-to-r from-green-500 to-green-600"
      },
      {
        name: "SBI Life",
        annualPremium: calculateSBILifePremium(data),
        monthlyPremium: (calculateSBILifePremium(data) / 12) * 1.025,
        features: ["Banking network support", "Competitive rates", "Easy documentation"],
        color: "bg-gradient-to-r from-purple-500 to-purple-600"
      }
    ];

    return quotes.sort((a, b) => a.annualPremium - b.annualPremium);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount).replace('₹', '₹ ');
  };

  const quotes = getProviderQuotes();
  const lowestPremium = quotes[0];

  return (
    <div className="space-y-6">
      <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
          <CardTitle className="text-xl bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Compare Term Insurance Quotes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label className="text-sm font-medium">Your Age</Label>
                  <span className="text-sm font-medium">{data.age} years</span>
                </div>
                <Slider
                  min={18}
                  max={65}
                  step={1}
                  value={[data.age]}
                  onValueChange={(value) => setData({ ...data, age: value[0] })}
                  className="bg-blue-100"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">Gender</Label>
                <div className="grid grid-cols-2 gap-2">
                  <button 
                    className={`py-2 px-3 rounded-md text-sm font-medium border transition-all ${
                      data.gender === "male" 
                        ? "bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 text-blue-700" 
                        : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                    onClick={() => setData({ ...data, gender: "male" })}
                  >
                    Male
                  </button>
                  <button 
                    className={`py-2 px-3 rounded-md text-sm font-medium border transition-all ${
                      data.gender === "female" 
                        ? "bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 text-blue-700" 
                        : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                    onClick={() => setData({ ...data, gender: "female" })}
                  >
                    Female
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={data.isSmoker}
                    onChange={(e) => setData({ ...data, isSmoker: e.target.checked })}
                    className="rounded text-blue-600 focus:ring-blue-500 mr-2"
                  />
                  Smoker
                </label>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label className="text-sm font-medium">Cover Amount</Label>
                  <span className="text-sm font-medium">₹{data.coverAmount} Lakhs</span>
                </div>
                <Slider
                  min={50}
                  max={500}
                  step={10}
                  value={[data.coverAmount]}
                  onValueChange={(value) => setData({ ...data, coverAmount: value[0] })}
                  className="bg-blue-100"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label className="text-sm font-medium">Cover Till Age</Label>
                  <span className="text-sm font-medium">{data.coverTillAge} years</span>
                </div>
                <Slider
                  min={data.age + 5}
                  max={75}
                  step={5}
                  value={[data.coverTillAge]}
                  onValueChange={(value) => setData({ ...data, coverTillAge: value[0] })}
                  className="bg-blue-100"
                />
                <div className="text-xs text-gray-500">
                  Policy Term: {data.coverTillAge - data.age} years
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {quotes.map((quote, index) => (
          <Card 
            key={quote.name} 
            className={`relative border transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${
              index === 0 ? 'border-yellow-300 bg-gradient-to-b from-yellow-50 to-white' : 'border-gray-200 hover:border-blue-200'
            }`}
          >
            {index === 0 && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 flex items-center gap-1">
                  <Trophy className="h-3 w-3" />
                  Best Price
                </Badge>
              </div>
            )}
            
            <CardHeader className={`${quote.color} text-white rounded-t-lg`}>
              <CardTitle className="text-lg">{quote.name}</CardTitle>
            </CardHeader>
            
            <CardContent className="p-4 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Annual Premium:</span>
                  <span className="font-bold text-lg">{formatCurrency(quote.annualPremium)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Monthly Premium:</span>
                  <span className="font-medium">{formatCurrency(quote.monthlyPremium)}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-700">Key Features:</h4>
                <ul className="space-y-1">
                  {quote.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-gray-600 flex items-start">
                      <span className="mr-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                className={`w-full ${quote.color} hover:opacity-90 transition-all transform hover:scale-[1.02] text-white`}
              >
                Get Quote <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-xs text-gray-500 text-center">
        * Premiums are estimates based on standard rates. Actual premiums may vary based on medical underwriting, 
        lifestyle factors, and insurer-specific criteria. GST included.
      </div>
    </div>
  );
};

export default ComparativeTermCalculator;
