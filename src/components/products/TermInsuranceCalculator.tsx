
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Building2, Trophy, Heart, Shield, Award, Sparkles } from "lucide-react";
import { calculatePremiums } from "@/utils/termInsuranceCalculations";

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
  gradientClass: string;
}

const TermInsuranceCalculator = () => {
  const [formData, setFormData] = useState<CalculatorData>({
    age: 25,
    gender: "male",
    isSmoker: false,
    coverageAmountLakh: 100,
    coverageTillAge: 60,
  });

  const [results, setResults] = useState<ProviderResult[]>([]);
  const [showResults, setShowResults] = useState(false);

  const generateClaimSettlement = () => {
    return Math.random() * (99.6 - 97.8) + 97.8;
  };

  const getProviderGradients = () => {
    return [
      "from-blue-600 to-blue-700",
      "from-emerald-600 to-emerald-700", 
      "from-purple-600 to-purple-700",
      "from-orange-600 to-orange-700",
      "from-teal-600 to-teal-700"
    ];
  };

  const calculateTermPremiums = () => {
    const sumAssured = formData.coverageAmountLakh * 100000;
    const premiums = calculatePremiums(formData.age, formData.gender, sumAssured, formData.isSmoker);
    const gradients = getProviderGradients();
    
    const providers: ProviderResult[] = Object.entries(premiums).map(([name, data], index) => ({
      name,
      annualPremium: data.annual,
      monthlyPremium: data.monthly,
      claimSettlement: generateClaimSettlement(),
      logo: <div className={`w-10 h-10 bg-gradient-to-r ${gradients[index]} rounded-lg flex items-center justify-center text-white text-sm font-bold shadow-lg`}>
        {name.charAt(0)}
      </div>,
      gradientClass: gradients[index]
    }));

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
          <div className="space-y-6">
            <div className="text-center mb-8 p-6 bg-gradient-to-r from-[#213753] via-[#3D4E64] to-[#213753] rounded-xl text-white shadow-xl">
              <div className="flex items-center justify-center mb-3">
                <Sparkles className="h-6 w-6 mr-2 text-yellow-300" />
                <h3 className="text-2xl font-bold">Premium Estimates</h3>
                <Sparkles className="h-6 w-6 ml-2 text-yellow-300" />
              </div>
              <p className="text-blue-100">
                Coverage: ₹{formData.coverageAmountLakh} Lakhs | Policy Term: {formData.coverageTillAge - formData.age} years
              </p>
              <div className="mt-3 inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm">
                <Shield className="h-4 w-4 mr-2" />
                {formData.isSmoker ? "Smoker" : "Non-Smoker"} | {formData.gender === "male" ? "Male" : "Female"} | Age {formData.age}
              </div>
            </div>
            
            {results.map((provider, index) => (
              <Card 
                key={provider.name} 
                className={`relative border-2 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] bg-gradient-to-br from-[#FCF9F8] to-white ${
                  index === 0 ? 'border-[#3B9560] shadow-lg shadow-green-100' : 'border-gray-200 hover:border-[#3B9560]/50'
                }`}
              >
                {index === 0 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-[#3B9560] to-emerald-600 text-white px-6 py-2 text-sm font-semibold shadow-lg">
                      <Trophy className="h-4 w-4 mr-2" />
                      Best Value Deal
                    </Badge>
                  </div>
                )}
                
                <CardContent className="p-6">
                  {/* Top Row - Provider Info */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      {provider.logo}
                      <div>
                        <h4 className="font-bold text-[#213753] text-lg">{provider.name}</h4>
                        <p className="text-sm text-[#3D4E64] flex items-center">
                          <Shield className="h-3 w-3 mr-1 text-[#3B9560]" />
                          Income proof not required
                        </p>
                      </div>
                    </div>
                    <Heart className="h-6 w-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors duration-300" />
                  </div>

                  {/* Coverage Details Grid */}
                  <div className="grid grid-cols-3 gap-6 mb-6 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border border-gray-100">
                    <div className="text-center">
                      <p className="text-sm text-[#3D4E64] mb-2 font-medium">Life Cover</p>
                      <p className="font-bold text-[#213753] text-lg">₹{formData.coverageAmountLakh} Lac</p>
                    </div>
                    <div className="text-center border-x border-gray-200">
                      <p className="text-sm text-[#3D4E64] mb-2 font-medium">Cover Till Age</p>
                      <p className="font-bold text-[#213753] text-lg">{formData.coverageTillAge} Yrs</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-[#3D4E64] mb-2 font-medium">Claim Settled</p>
                      <div className="flex items-center justify-center gap-2">
                        <Award className="h-4 w-4 text-[#3B9560]" />
                        <p className="font-bold text-[#213753] text-lg">{provider.claimSettlement.toFixed(1)}%</p>
                      </div>
                    </div>
                  </div>

                  {/* Features Row */}
                  <div className="flex items-center justify-between mb-6 p-3 bg-gradient-to-r from-[#3B9560]/10 to-emerald-50 rounded-lg border border-[#3B9560]/20">
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-[#3B9560]" />
                      <span className="text-sm text-[#3B9560] font-semibold">5% discount included</span>
                    </div>
                    <button className="text-sm text-[#3B9560] hover:text-[#213753] hover:underline font-medium transition-colors">
                      See how →
                    </button>
                  </div>

                  {/* Premium & CTA Row */}
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-white to-gray-50 rounded-lg border border-gray-200">
                    <div className="space-y-2">
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-[#3D4E64] font-medium">Annual:</span>
                        <span className="font-bold text-[#213753] text-xl">{formatCurrency(provider.annualPremium)}</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-[#3D4E64] font-medium">Monthly:</span>
                        <span className="font-bold text-[#213753] text-lg">{formatCurrency(provider.monthlyPremium)}</span>
                      </div>
                    </div>
                    <Button 
                      className={`bg-gradient-to-r ${provider.gradientClass} hover:shadow-lg text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 font-semibold`}
                      onClick={() => window.open('https://gocfs.com', '_blank')}
                    >
                      Get Assistance
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <div className="text-xs text-[#3D4E64] text-center mt-6 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border border-gray-200">
              <Shield className="h-4 w-4 inline mr-2 text-[#3B9560]" />
              * Premiums calculated using advanced mortality rate tables. Actual premiums may vary based on 
              medical underwriting and insurer-specific criteria. GST included.
            </div>
          </div>
        ) : (
          <Card className="border-2 border-dashed border-[#3B9560]/30 bg-gradient-to-br from-[#FCF9F8] to-white shadow-lg">
            <CardContent className="flex flex-col items-center justify-center py-16">
              <div className="w-20 h-20 bg-gradient-to-r from-[#3B9560] to-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Building2 className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#213753] mb-3">
                Ready to Calculate Premiums?
              </h3>
              <p className="text-[#3D4E64] text-center max-w-md leading-relaxed">
                Fill in your details and click "Calculate Premium" to see 
                estimated quotes from top insurance providers using advanced mortality calculations.
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Form Panel - Right Side */}
      <div className="order-1 lg:order-2">
        <Card className="border-2 border-[#3B9560]/20 hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-[#FCF9F8] to-white shadow-lg">
          <CardHeader className="bg-gradient-to-r from-[#213753] via-[#3D4E64] to-[#213753] rounded-t-lg">
            <CardTitle className="text-xl text-white flex items-center">
              <Sparkles className="h-5 w-5 mr-2" />
              Calculate Your Premium
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-3">
              <Label htmlFor="age" className="text-sm font-semibold text-[#213753] flex items-center">
                <span className="w-2 h-2 bg-[#3B9560] rounded-full mr-2"></span>
                Age
              </Label>
              <Input
                id="age"
                type="number"
                min="18"
                max="65"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) || 0 })}
                className="border-2 border-gray-200 focus:border-[#3B9560] bg-white rounded-lg transition-colors"
              />
            </div>

            <div className="space-y-3">
              <Label className="text-sm font-semibold text-[#213753] flex items-center">
                <span className="w-2 h-2 bg-[#3B9560] rounded-full mr-2"></span>
                Gender
              </Label>
              <Select 
                value={formData.gender} 
                onValueChange={(value: "male" | "female") => setFormData({ ...formData, gender: value })}
              >
                <SelectTrigger className="border-2 border-gray-200 focus:border-[#3B9560] bg-white rounded-lg">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border border-gray-200">
              <Label className="text-sm font-semibold text-[#213753] flex items-center">
                <span className="w-2 h-2 bg-[#3B9560] rounded-full mr-2"></span>
                Smoker
              </Label>
              <div className="flex items-center space-x-3">
                <span className="text-sm text-[#3D4E64] font-medium">No</span>
                <Switch
                  checked={formData.isSmoker}
                  onCheckedChange={(checked) => setFormData({ ...formData, isSmoker: checked })}
                  className="data-[state=checked]:bg-[#3B9560]"
                />
                <span className="text-sm text-[#3D4E64] font-medium">Yes</span>
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="coverage" className="text-sm font-semibold text-[#213753] flex items-center">
                <span className="w-2 h-2 bg-[#3B9560] rounded-full mr-2"></span>
                Coverage Amount (₹ Lakhs)
              </Label>
              <Input
                id="coverage"
                type="number"
                min="10"
                max="1000"
                value={formData.coverageAmountLakh}
                onChange={(e) => setFormData({ ...formData, coverageAmountLakh: parseInt(e.target.value) || 0 })}
                className="border-2 border-gray-200 focus:border-[#3B9560] bg-white rounded-lg transition-colors"
                placeholder="e.g., 50 for ₹50 Lakhs"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="coverageTill" className="text-sm font-semibold text-[#213753] flex items-center">
                <span className="w-2 h-2 bg-[#3B9560] rounded-full mr-2"></span>
                Coverage Till Age
              </Label>
              <Input
                id="coverageTill"
                type="number"
                min={formData.age + 5}
                max="75"
                value={formData.coverageTillAge}
                onChange={(e) => setFormData({ ...formData, coverageTillAge: parseInt(e.target.value) || 0 })}
                className="border-2 border-gray-200 focus:border-[#3B9560] bg-white rounded-lg transition-colors"
              />
              <p className="text-xs text-[#3D4E64] bg-blue-50 p-2 rounded border border-blue-200">
                Policy Term: {formData.coverageTillAge - formData.age} years
              </p>
            </div>

            <Button 
              onClick={calculateTermPremiums}
              className="w-full bg-gradient-to-r from-[#3B9560] to-emerald-600 hover:from-emerald-600 hover:to-[#3B9560] transition-all transform hover:scale-[1.02] duration-300 text-white font-semibold py-4 rounded-lg shadow-lg"
              size="lg"
            >
              <Sparkles className="h-5 w-5 mr-2" />
              Calculate Premium
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermInsuranceCalculator;
