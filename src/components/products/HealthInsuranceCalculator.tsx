
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Building2, Trophy, Heart, Shield, Award } from "lucide-react";

interface CalculatorData {
  age: number;
  sumInsured: number;
  isSmoker: boolean;
}

interface ProviderResult {
  name: string;
  annualPremium: number;
  monthlyPremium: number;
  claimSettlement: number;
  logo: React.ReactNode;
}

const HealthInsuranceCalculator = () => {
  const [formData, setFormData] = useState<CalculatorData>({
    age: 30,
    sumInsured: 5,
    isSmoker: false,
  });

  const [results, setResults] = useState<ProviderResult[]>([]);
  const [showResults, setShowResults] = useState(false);

  const generateClaimSettlement = () => {
    return Math.random() * (99.6 - 97.8) + 97.8;
  };

  const calculatePremiums = () => {
    const providers: ProviderResult[] = [];

    // Provider data with their specific parameters
    const providerData = [
      { name: "Navi", baseRate: 1300, ageFactor: 1.05, smokerFactor: 1.20 },
      { name: "Reliance Health", baseRate: 1100, ageFactor: 1.10, smokerFactor: 1.20 },
      { name: "HDFC ERGO", baseRate: 1400, ageFactor: 1.05, smokerFactor: 1.25 },
      { name: "ICICI Lombard", baseRate: 1500, ageFactor: 1.10, smokerFactor: 1.30 },
      { name: "Star Health", baseRate: 1250, ageFactor: 1.05, smokerFactor: 1.20 }
    ];

    providerData.forEach((provider, index) => {
      let basePremium = provider.baseRate * provider.ageFactor * formData.sumInsured;
      
      if (formData.isSmoker) {
        basePremium *= provider.smokerFactor;
      }

      const annual = basePremium;
      const monthly = basePremium / 12;

      const logoColors = ['from-blue-500 to-blue-600', 'from-red-500 to-red-600', 'from-orange-500 to-orange-600', 'from-purple-500 to-purple-600', 'from-green-500 to-green-600'];
      const logoLetters = ['N', 'R', 'H', 'I', 'S'];

      providers.push({
        name: provider.name,
        annualPremium: annual,
        monthlyPremium: monthly,
        claimSettlement: generateClaimSettlement(),
        logo: <div className={`w-8 h-8 bg-gradient-to-r ${logoColors[index]} rounded flex items-center justify-center text-white text-xs font-bold`}>{logoLetters[index]}</div>
      });
    });

    // Sort by annual premium (lowest first)
    providers.sort((a, b) => a.annualPremium - b.annualPremium);

    setResults(providers);
    setShowResults(true);
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Results Panel - Left Side */}
      <div className="order-2 lg:order-1">
        {showResults ? (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2 text-[#213753]">
                Health Insurance Premium Estimates
              </h3>
              <p className="text-[#3D4E64]">
                Coverage: ₹{formData.sumInsured} Lakhs | Age: {formData.age} years
              </p>
            </div>
            
            {results.map((provider, index) => (
              <Card 
                key={provider.name} 
                className={`relative border transition-all duration-300 hover:shadow-lg border-gray-200 bg-[#FCF9F8] ${
                  index === 0 ? 'ring-2 ring-[#3B9560]' : ''
                }`}
              >
                {index === 0 && (
                  <div className="absolute -top-3 left-4">
                    <Badge className="bg-gradient-to-r from-[#3B9560] to-green-600 text-white px-3 py-1 flex items-center gap-1">
                      <Trophy className="h-3 w-3" />
                      Best Value
                    </Badge>
                  </div>
                )}
                
                <CardContent className="p-6">
                  {/* Top Row - Provider Info */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {provider.logo}
                      <div>
                        <h4 className="font-semibold text-[#213753]">{provider.name}</h4>
                        <p className="text-sm text-[#3D4E64]">Cashless hospitals available</p>
                      </div>
                    </div>
                    <Heart className="h-5 w-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
                  </div>

                  {/* Middle Row - Coverage Details */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <p className="text-sm text-[#3D4E64] mb-1">Sum Insured</p>
                      <p className="font-bold text-[#213753]">₹{formData.sumInsured} Lac</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-[#3D4E64] mb-1">Age covered</p>
                      <p className="font-bold text-[#213753]">{formData.age} Yrs</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-[#3D4E64] mb-1">Claim settled</p>
                      <div className="flex items-center justify-center gap-1">
                        <Award className="h-3 w-3 text-[#3B9560]" />
                        <p className="font-bold text-[#213753]">{provider.claimSettlement.toFixed(1)}%</p>
                      </div>
                    </div>
                  </div>

                  {/* Features Row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <Shield className="h-4 w-4 text-[#3B9560]" />
                      <span className="text-sm text-[#3B9560] font-medium">Cashless treatment</span>
                    </div>
                    <button className="text-sm text-[#3B9560] hover:underline">See benefits</button>
                  </div>

                  {/* Premium Row */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-[#3D4E64] mb-1">
                        Annual: <span className="font-bold text-[#213753]">{formatCurrency(provider.annualPremium)}</span>
                      </div>
                      <div className="text-sm text-[#3D4E64]">
                        Monthly: <span className="font-bold text-[#213753]">{formatCurrency(provider.monthlyPremium)}</span>
                      </div>
                    </div>
                    <Button 
                      className="bg-gradient-to-r from-[#3B9560] to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-2 rounded-lg transition-all"
                      onClick={() => window.open('https://gocfs.com', '_blank')}
                    >
                      Get Assistance
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <div className="text-xs text-[#3D4E64] text-center mt-4">
              * Premiums are estimates based on standard rates. Actual premiums may vary based on 
              medical underwriting and insurer-specific criteria. No GST included.
            </div>
          </div>
        ) : (
          <Card className="border-2 border-dashed border-gray-300 bg-[#FCF9F8]">
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Building2 className="h-12 w-12 text-[#3D4E64] mb-4" />
              <h3 className="text-lg font-medium text-[#213753] mb-2">
                Ready to Calculate Premiums?
              </h3>
              <p className="text-[#3D4E64] text-center">
                Fill in your details in the form and click "Calculate Premium" to see 
                estimated quotes from top health insurance providers.
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Form Panel - Right Side */}
      <div className="order-1 lg:order-2">
        <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300 bg-[#FCF9F8]">
          <CardHeader className="bg-gradient-to-r from-[#213753] to-[#3D4E64]">
            <CardTitle className="text-xl text-white">
              Calculate Your Premium
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-2">
              <Label htmlFor="age" className="text-sm font-medium text-[#213753]">Age</Label>
              <Input
                id="age"
                type="number"
                min="18"
                max="70"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) || 0 })}
                className="border-gray-300 focus:border-[#3B9560] bg-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="sumInsured" className="text-sm font-medium text-[#213753]">Sum Insured (₹ Lakhs)</Label>
              <Input
                id="sumInsured"
                type="number"
                min="2"
                max="50"
                value={formData.sumInsured}
                onChange={(e) => setFormData({ ...formData, sumInsured: parseInt(e.target.value) || 0 })}
                className="border-gray-300 focus:border-[#3B9560] bg-white"
                placeholder="e.g., 5 for ₹5 Lakhs"
              />
            </div>

            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium text-[#213753]">Smoker</Label>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-[#3D4E64]">No</span>
                <Switch
                  checked={formData.isSmoker}
                  onCheckedChange={(checked) => setFormData({ ...formData, isSmoker: checked })}
                />
                <span className="text-sm text-[#3D4E64]">Yes</span>
              </div>
            </div>

            <Button 
              onClick={calculatePremiums}
              className="w-full bg-gradient-to-r from-[#3B9560] to-green-600 hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-[1.02] duration-200 text-white"
              size="lg"
            >
              Calculate Premium
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HealthInsuranceCalculator;
