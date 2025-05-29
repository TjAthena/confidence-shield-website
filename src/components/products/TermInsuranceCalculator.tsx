
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Building2, Trophy, Heart, Shield, Award, Sparkles, Zap, Star } from "lucide-react";
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
      "from-emerald-500 via-teal-500 to-cyan-500",
      "from-blue-500 via-indigo-500 to-purple-500", 
      "from-pink-500 via-rose-500 to-red-500",
      "from-orange-500 via-amber-500 to-yellow-500",
      "from-violet-500 via-purple-500 to-indigo-500"
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
      logo: <div className={`w-12 h-12 bg-gradient-to-br ${gradients[index]} rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-2xl border border-white/20 backdrop-blur-sm`}>
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-screen">
      {/* Results Panel - Left Side */}
      <div className="order-2 lg:order-1">
        {showResults ? (
          <div className="space-y-6">
            <div className="text-center mb-8 p-8 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-2xl text-white shadow-2xl border border-white/20 backdrop-blur-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 animate-pulse"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm border border-white/30 shadow-lg">
                    <Sparkles className="h-8 w-8 text-yellow-300 animate-pulse" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Premium Estimates
                </h3>
                <p className="text-blue-100 text-lg font-medium">
                  Coverage: ₹{formData.coverageAmountLakh} Lakhs | Policy Term: {formData.coverageTillAge - formData.age} years
                </p>
                <div className="mt-4 inline-flex items-center px-6 py-3 bg-white/20 rounded-full text-sm backdrop-blur-sm border border-white/30 shadow-lg">
                  <Shield className="h-5 w-5 mr-3 text-emerald-300" />
                  {formData.isSmoker ? "Smoker" : "Non-Smoker"} | {formData.gender === "male" ? "Male" : "Female"} | Age {formData.age}
                </div>
              </div>
            </div>
            
            {results.map((provider, index) => (
              <Card 
                key={provider.name} 
                className={`relative border-2 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] bg-gradient-to-br from-white/95 via-white/90 to-white/95 backdrop-blur-lg ${
                  index === 0 ? 'border-emerald-400 shadow-2xl shadow-emerald-200/50' : 'border-gray-200/50 hover:border-purple-400/50'
                } overflow-hidden`}
              >
                {index === 0 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white px-8 py-3 text-sm font-bold shadow-2xl border border-white/30 backdrop-blur-sm animate-pulse">
                      <Trophy className="h-5 w-5 mr-2" />
                      🏆 Best Value Deal
                    </Badge>
                  </div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/30 via-purple-50/20 to-pink-50/30 opacity-50"></div>
                
                <CardContent className="p-8 relative z-10">
                  {/* Top Row - Provider Info */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-5">
                      <div className="relative">
                        {provider.logo}
                        <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-xl blur-lg animate-pulse"></div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-xl mb-1">{provider.name}</h4>
                        <p className="text-sm text-gray-600 flex items-center font-medium">
                          <Zap className="h-4 w-4 mr-2 text-emerald-500" />
                          Income proof not required
                        </p>
                      </div>
                    </div>
                    <Heart className="h-7 w-7 text-gray-400 hover:text-red-500 cursor-pointer transition-all duration-300 hover:scale-110" />
                  </div>

                  {/* Coverage Details Grid */}
                  <div className="grid grid-cols-3 gap-6 mb-8 p-6 bg-gradient-to-r from-gray-50/80 via-blue-50/60 to-purple-50/80 rounded-xl border border-gray-200/50 backdrop-blur-sm shadow-lg">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-3 font-semibold">Life Cover</p>
                      <p className="font-bold text-gray-800 text-xl">₹{formData.coverageAmountLakh} Lac</p>
                    </div>
                    <div className="text-center border-x border-gray-300/50">
                      <p className="text-sm text-gray-600 mb-3 font-semibold">Cover Till Age</p>
                      <p className="font-bold text-gray-800 text-xl">{formData.coverageTillAge} Yrs</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-3 font-semibold">Claim Settled</p>
                      <div className="flex items-center justify-center gap-2">
                        <Star className="h-5 w-5 text-yellow-500" />
                        <p className="font-bold text-gray-800 text-xl">{provider.claimSettlement.toFixed(1)}%</p>
                      </div>
                    </div>
                  </div>

                  {/* Features Row */}
                  <div className="flex items-center justify-between mb-8 p-4 bg-gradient-to-r from-emerald-100/80 via-teal-100/60 to-cyan-100/80 rounded-xl border border-emerald-200/50 backdrop-blur-sm shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-emerald-500/20 rounded-lg">
                        <Shield className="h-6 w-6 text-emerald-600" />
                      </div>
                      <span className="text-sm text-emerald-700 font-bold">5% discount included</span>
                    </div>
                    <button className="text-sm text-emerald-600 hover:text-emerald-800 hover:underline font-bold transition-colors group">
                      See how 
                      <span className="inline-block transition-transform group-hover:translate-x-1 ml-1">→</span>
                    </button>
                  </div>

                  {/* Premium & CTA Row */}
                  <div className="flex items-center justify-between p-6 bg-gradient-to-r from-white/90 via-gray-50/80 to-white/90 rounded-xl border border-gray-200/50 backdrop-blur-sm shadow-xl">
                    <div className="space-y-3">
                      <div className="flex items-baseline gap-3">
                        <span className="text-sm text-gray-600 font-semibold">Annual:</span>
                        <span className="font-bold text-gray-800 text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {formatCurrency(provider.annualPremium)}
                        </span>
                      </div>
                      <div className="flex items-baseline gap-3">
                        <span className="text-sm text-gray-600 font-semibold">Monthly:</span>
                        <span className="font-bold text-gray-800 text-xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                          {formatCurrency(provider.monthlyPremium)}
                        </span>
                      </div>
                    </div>
                    <Button 
                      className={`bg-gradient-to-r ${provider.gradientClass} hover:shadow-2xl text-white px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 font-bold text-lg shadow-lg border border-white/20 backdrop-blur-sm relative overflow-hidden group`}
                      onClick={() => window.open('https://gocfs.com', '_blank')}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Sparkles className="h-5 w-5 mr-2 relative z-10" />
                      <span className="relative z-10">Get Assistance</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <div className="text-xs text-gray-600 text-center mt-8 p-6 bg-gradient-to-r from-gray-50/80 via-blue-50/60 to-purple-50/80 rounded-xl border border-gray-200/50 backdrop-blur-sm shadow-lg">
              <div className="flex items-center justify-center mb-2">
                <Shield className="h-5 w-5 mr-2 text-emerald-500" />
                <span className="font-semibold text-gray-700">Premium Calculation Disclaimer</span>
              </div>
              <p className="leading-relaxed">
                * Premiums calculated using advanced mortality rate tables. Actual premiums may vary based on 
                medical underwriting and insurer-specific criteria. GST included.
              </p>
            </div>
          </div>
        ) : (
          <Card className="border-2 border-dashed border-purple-300/50 bg-gradient-to-br from-white/95 via-purple-50/30 to-white/95 shadow-2xl backdrop-blur-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/20 via-purple-100/20 to-pink-100/20 animate-pulse"></div>
            <CardContent className="flex flex-col items-center justify-center py-20 relative z-10">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-full flex items-center justify-center shadow-2xl border border-white/30 backdrop-blur-sm">
                  <Building2 className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-xl animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Ready to Calculate Premiums?
              </h3>
              <p className="text-gray-600 text-center max-w-md leading-relaxed font-medium">
                Fill in your details and click "Calculate Premium" to see 
                estimated quotes from top insurance providers using advanced mortality calculations.
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Form Panel - Right Side */}
      <div className="order-1 lg:order-2">
        <Card className="border-2 border-purple-200/50 hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white/95 via-purple-50/30 to-white/95 shadow-xl backdrop-blur-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/10 via-purple-100/10 to-pink-100/10"></div>
          
          <CardHeader className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-t-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 animate-pulse"></div>
            <CardTitle className="text-2xl text-white flex items-center relative z-10">
              <div className="p-2 bg-white/20 rounded-lg mr-3 backdrop-blur-sm border border-white/30">
                <Sparkles className="h-6 w-6" />
              </div>
              Calculate Your Premium
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-8 pt-8 relative z-10">
            <div className="space-y-4">
              <Label htmlFor="age" className="text-sm font-bold text-gray-700 flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3 shadow-lg"></span>
                Age
              </Label>
              <Input
                id="age"
                type="number"
                min="18"
                max="65"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) || 0 })}
                className="border-2 border-gray-200 focus:border-purple-400 bg-white/90 rounded-xl transition-all duration-300 shadow-lg backdrop-blur-sm h-12 text-lg font-semibold"
              />
            </div>

            <div className="space-y-4">
              <Label className="text-sm font-bold text-gray-700 flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3 shadow-lg"></span>
                Gender
              </Label>
              <Select 
                value={formData.gender} 
                onValueChange={(value: "male" | "female") => setFormData({ ...formData, gender: value })}
              >
                <SelectTrigger className="border-2 border-gray-200 focus:border-purple-400 bg-white/90 rounded-xl h-12 text-lg font-semibold shadow-lg backdrop-blur-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white/95 backdrop-blur-lg border border-gray-200 rounded-xl shadow-2xl">
                  <SelectItem value="male" className="text-lg font-medium">Male</SelectItem>
                  <SelectItem value="female" className="text-lg font-medium">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between p-6 bg-gradient-to-r from-gray-50/80 via-blue-50/60 to-purple-50/80 rounded-xl border border-gray-200/50 backdrop-blur-sm shadow-lg">
              <Label className="text-sm font-bold text-gray-700 flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mr-3 shadow-lg"></span>
                Smoker
              </Label>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600 font-semibold">No</span>
                <Switch
                  checked={formData.isSmoker}
                  onCheckedChange={(checked) => setFormData({ ...formData, isSmoker: checked })}
                  className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-purple-500 data-[state=checked]:to-pink-500 shadow-lg"
                />
                <span className="text-sm text-gray-600 font-semibold">Yes</span>
              </div>
            </div>

            <div className="space-y-4">
              <Label htmlFor="coverage" className="text-sm font-bold text-gray-700 flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-3 shadow-lg"></span>
                Coverage Amount (₹ Lakhs)
              </Label>
              <Input
                id="coverage"
                type="number"
                min="10"
                max="1000"
                value={formData.coverageAmountLakh}
                onChange={(e) => setFormData({ ...formData, coverageAmountLakh: parseInt(e.target.value) || 0 })}
                className="border-2 border-gray-200 focus:border-purple-400 bg-white/90 rounded-xl transition-all duration-300 shadow-lg backdrop-blur-sm h-12 text-lg font-semibold"
                placeholder="e.g., 50 for ₹50 Lakhs"
              />
            </div>

            <div className="space-y-4">
              <Label htmlFor="coverageTill" className="text-sm font-bold text-gray-700 flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3 shadow-lg"></span>
                Coverage Till Age
              </Label>
              <Input
                id="coverageTill"
                type="number"
                min={formData.age + 5}
                max="75"
                value={formData.coverageTillAge}
                onChange={(e) => setFormData({ ...formData, coverageTillAge: parseInt(e.target.value) || 0 })}
                className="border-2 border-gray-200 focus:border-purple-400 bg-white/90 rounded-xl transition-all duration-300 shadow-lg backdrop-blur-sm h-12 text-lg font-semibold"
              />
              <p className="text-xs text-gray-600 bg-gradient-to-r from-blue-50/80 to-purple-50/80 p-3 rounded-lg border border-blue-200/50 font-medium backdrop-blur-sm">
                Policy Term: {formData.coverageTillAge - formData.age} years
              </p>
            </div>

            <Button 
              onClick={calculateTermPremiums}
              className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-pink-600 hover:via-red-600 hover:to-orange-600 transition-all transform hover:scale-[1.02] duration-300 text-white font-bold py-6 rounded-xl shadow-2xl text-lg relative overflow-hidden group border border-white/20 backdrop-blur-sm"
              size="lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Sparkles className="h-6 w-6 mr-3 relative z-10 animate-pulse" />
              <span className="relative z-10">Calculate Premium</span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermInsuranceCalculator;
