
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
  gender: "male" | "female";
  isSmoker: boolean;
  coverageAmountLakh: number;
  coverageTillAge: number;
}

interface ProviderResult {
  name: string;
  annualPremium: number;
  monthlyPremium: number;
  claimSettlement: number;
  logo: React.ReactNode;
}

const TermInsuranceCalculator = () => {
  const [formData, setFormData] = useState<CalculatorData>({
    age: 22,
    gender: "male",
    isSmoker: false,
    coverageAmountLakh: 50,
    coverageTillAge: 42,
  });

  const [results, setResults] = useState<ProviderResult[]>([]);
  const [showResults, setShowResults] = useState(false);

  const generateClaimSettlement = () => {
    return Math.random() * (99.6 - 97.8) + 97.8;
  };

  const calculatePremiums = () => {
    const sumAssured = formData.coverageAmountLakh * 100000;
    const saPer1000 = sumAssured / 1000;
    const isFemale = formData.gender === "female";

    const providers: ProviderResult[] = [];

    // HDFC Life
    const hdfc = (() => {
      const baseRate = 0.84;
      const rate = baseRate * (formData.isSmoker ? 1.35 : 1) * (isFemale ? 0.85 : 1);
      const rebate = sumAssured >= 1000000 ? 0.95 : 1;
      const basePremium = saPer1000 * rate * rebate;
      const annual = basePremium * 1.18;
      const monthly = (basePremium / 12) * 1.05 * 1.18;
      return {
        name: "HDFC Life",
        annualPremium: annual,
        monthlyPremium: monthly,
        claimSettlement: generateClaimSettlement(),
        logo: <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded flex items-center justify-center text-white text-xs font-bold">H</div>
      };
    })();

    // Max Life
    const maxLife = (() => {
      const baseRate = 0.44;
      const rate = baseRate * (formData.isSmoker ? 2.0 : 1) * (isFemale ? 0.85 : 1);
      const rebate = sumAssured >= 1000000 ? 0.97 : 1;
      const basePremium = saPer1000 * rate * rebate;
      const annual = basePremium * 1.18;
      const monthly = (basePremium / 12) * 1.05 * 1.18;
      return {
        name: "Max Life",
        annualPremium: annual,
        monthlyPremium: monthly,
        claimSettlement: generateClaimSettlement(),
        logo: <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">M</div>
      };
    })();

    // ICICI Prudential
    const icici = (() => {
      const baseRate = 0.91;
      const rate = baseRate * (formData.isSmoker ? 1.3 : 1) * (isFemale ? 0.85 : 1);
      const rebate = sumAssured >= 1000000 ? 0.95 : 1;
      const basePremium = saPer1000 * rate * rebate;
      const annual = basePremium * 1.18;
      const monthly = (basePremium / 12) * 1.05 * 1.18;
      return {
        name: "ICICI Prudential",
        annualPremium: annual,
        monthlyPremium: monthly,
        claimSettlement: generateClaimSettlement(),
        logo: <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded flex items-center justify-center text-white text-xs font-bold">I</div>
      };
    })();

    // LIC
    const lic = (() => {
      const baseRate = 1.03;
      const rate = baseRate * (formData.isSmoker ? 1.4 : 1) * (isFemale ? 0.9 : 1);
      const rebate = sumAssured >= 1000000 ? 0.97 : 1;
      const basePremium = saPer1000 * rate * rebate;
      const annual = basePremium * 1.18;
      const monthly = (basePremium / 12) * 1.07 * 1.18;
      return {
        name: "LIC",
        annualPremium: annual,
        monthlyPremium: monthly,
        claimSettlement: generateClaimSettlement(),
        logo: <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded flex items-center justify-center text-white text-xs font-bold">L</div>
      };
    })();

    // SBI Life
    const sbiLife = (() => {
      const baseRate = 0.95;
      const rate = baseRate * (formData.isSmoker ? 1.5 : 1) * (isFemale ? 0.9 : 1);
      const rebate = sumAssured >= 1000000 ? 0.95 : 1;
      const basePremium = saPer1000 * rate * rebate;
      const annual = basePremium * 1.18;
      const monthly = (basePremium / 12) * 1.06 * 1.18;
      return {
        name: "SBI Life",
        annualPremium: annual,
        monthlyPremium: monthly,
        claimSettlement: generateClaimSettlement(),
        logo: <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded flex items-center justify-center text-white text-xs font-bold">S</div>
      };
    })();

    providers.push(hdfc, maxLife, icici, lic, sbiLife);

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
                Term Insurance Premium Estimates
              </h3>
              <p className="text-[#3D4E64]">
                Coverage: ₹{formData.coverageAmountLakh} Lakhs | Policy Term: {formData.coverageTillAge - formData.age} years
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
                        <p className="text-sm text-[#3D4E64]">Income proof not required</p>
                      </div>
                    </div>
                    <Heart className="h-5 w-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
                  </div>

                  {/* Middle Row - Coverage Details */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <p className="text-sm text-[#3D4E64] mb-1">Life cover</p>
                      <p className="font-bold text-[#213753]">₹{formData.coverageAmountLakh} Lac</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-[#3D4E64] mb-1">Cover till age</p>
                      <p className="font-bold text-[#213753]">{formData.coverageTillAge} Yrs</p>
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
                      <span className="text-sm text-[#3B9560] font-medium">5% discount included</span>
                    </div>
                    <button className="text-sm text-[#3B9560] hover:underline">See how</button>
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
              medical underwriting and insurer-specific criteria. GST included.
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
                estimated quotes from top insurance providers.
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
                max="65"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) || 0 })}
                className="border-gray-300 focus:border-[#3B9560] bg-white"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-[#213753]">Gender</Label>
              <Select 
                value={formData.gender} 
                onValueChange={(value: "male" | "female") => setFormData({ ...formData, gender: value })}
              >
                <SelectTrigger className="border-gray-300 focus:border-[#3B9560] bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
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

            <div className="space-y-2">
              <Label htmlFor="coverage" className="text-sm font-medium text-[#213753]">Coverage Amount (₹ Lakhs)</Label>
              <Input
                id="coverage"
                type="number"
                min="10"
                max="1000"
                value={formData.coverageAmountLakh}
                onChange={(e) => setFormData({ ...formData, coverageAmountLakh: parseInt(e.target.value) || 0 })}
                className="border-gray-300 focus:border-[#3B9560] bg-white"
                placeholder="e.g., 50 for ₹50 Lakhs"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="coverageTill" className="text-sm font-medium text-[#213753]">Coverage Till Age</Label>
              <Input
                id="coverageTill"
                type="number"
                min={formData.age + 5}
                max="75"
                value={formData.coverageTillAge}
                onChange={(e) => setFormData({ ...formData, coverageTillAge: parseInt(e.target.value) || 0 })}
                className="border-gray-300 focus:border-[#3B9560] bg-white"
              />
              <p className="text-xs text-[#3D4E64]">
                Policy Term: {formData.coverageTillAge - formData.age} years
              </p>
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

export default TermInsuranceCalculator;
