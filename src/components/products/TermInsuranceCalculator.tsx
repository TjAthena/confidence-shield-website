
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Building2, Trophy, Shield, Sparkles, Calculator, Star, Crown } from "lucide-react";
import { calculatePremiums, PremiumResult } from "@/utils/termInsuranceCalculations";

interface CalculatorData {
  age: number;
  gender: "male" | "female";
  isSmoker: boolean;
  sumAssured: number;
  termYears: number;
}

const TermInsuranceCalculator = () => {
  const [formData, setFormData] = useState<CalculatorData>({
    age: 25,
    gender: "male",
    isSmoker: false,
    sumAssured: 5000000,
    termYears: 30,
  });

  const [results, setResults] = useState<PremiumResult[]>([]);
  const [showResults, setShowResults] = useState(false);

  const calculateTermPremiums = () => {
    const premiumResults = calculatePremiums(
      formData.age,
      formData.gender,
      formData.sumAssured,
      formData.termYears,
      formData.isSmoker
    );
    
    setResults(premiumResults);
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

  const getProviderLogo = (provider: string) => {
    const colors = {
      "ICICI Prudential": "from-orange-500 to-red-500",
      "HDFC Life": "from-blue-500 to-indigo-500",
      "Max Life": "from-red-500 to-pink-500",
      "SBI Life": "from-green-500 to-emerald-500",
      "LIC": "from-purple-500 to-violet-500"
    };

    return (
      <div className={`w-12 h-12 bg-gradient-to-br ${colors[provider as keyof typeof colors]} rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-2xl border border-white/20 backdrop-blur-sm`}>
        {provider.charAt(0)}
      </div>
    );
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
                    <Calculator className="h-8 w-8 text-yellow-300 animate-pulse" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Premium Comparison Table
                </h3>
                <p className="text-blue-100 text-lg font-medium">
                  Coverage: ₹{(formData.sumAssured / 100000).toFixed(0)} Lakhs | Term: {formData.termYears} years
                </p>
                <div className="mt-4 inline-flex items-center px-6 py-3 bg-white/20 rounded-full text-sm backdrop-blur-sm border border-white/30 shadow-lg">
                  <Shield className="h-5 w-5 mr-3 text-emerald-300" />
                  {formData.isSmoker ? "Smoker" : "Non-Smoker"} | {formData.gender === "male" ? "Male" : "Female"} | Age {formData.age}
                </div>
              </div>
            </div>
            
            <Card className="border-2 border-purple-200/50 hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white/95 via-purple-50/30 to-white/95 shadow-xl backdrop-blur-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/10 via-purple-100/10 to-pink-100/10"></div>
              
              <CardHeader className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-t-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 animate-pulse"></div>
                <CardTitle className="text-2xl text-white flex items-center relative z-10">
                  <Crown className="h-6 w-6 mr-3" />
                  Premium Comparison
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-6 relative z-10">
                <div className="overflow-x-auto rounded-xl border border-gray-200/50 shadow-lg backdrop-blur-sm">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gradient-to-r from-gray-50/80 via-blue-50/60 to-purple-50/80 hover:bg-gradient-to-r hover:from-gray-100/80 hover:via-blue-100/60 hover:to-purple-100/80 transition-all duration-300">
                        <TableHead className="font-bold text-gray-700 text-center py-4">
                          <div className="flex items-center justify-center gap-2">
                            <Building2 className="h-5 w-5 text-purple-600" />
                            Provider
                          </div>
                        </TableHead>
                        <TableHead className="font-bold text-gray-700 text-center py-4">
                          <div className="flex items-center justify-center gap-2">
                            <Star className="h-5 w-5 text-emerald-600" />
                            Annual Premium
                          </div>
                        </TableHead>
                        <TableHead className="font-bold text-gray-700 text-center py-4">
                          <div className="flex items-center justify-center gap-2">
                            <Sparkles className="h-5 w-5 text-blue-600" />
                            Monthly Premium
                          </div>
                        </TableHead>
                        <TableHead className="font-bold text-gray-700 text-center py-4">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {results.map((result, index) => (
                        <TableRow 
                          key={result.provider} 
                          className={`transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-50/50 hover:via-blue-50/30 hover:to-pink-50/50 hover:shadow-lg ${
                            index === 0 ? 'bg-gradient-to-r from-emerald-50/80 via-teal-50/60 to-cyan-50/80 border-l-4 border-emerald-400' : ''
                          }`}
                        >
                          <TableCell className="py-6">
                            <div className="flex items-center gap-4">
                              {index === 0 && (
                                <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1 text-xs font-bold shadow-lg animate-pulse">
                                  <Trophy className="h-3 w-3 mr-1" />
                                  BEST
                                </Badge>
                              )}
                              <div className="flex items-center gap-3">
                                {getProviderLogo(result.provider)}
                                <span className="font-semibold text-gray-800 text-lg">{result.provider}</span>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="text-center py-6">
                            <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                              {formatCurrency(result.annualPremium)}
                            </div>
                          </TableCell>
                          <TableCell className="text-center py-6">
                            <div className="font-bold text-lg bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                              {formatCurrency(result.monthlyPremium)}
                            </div>
                          </TableCell>
                          <TableCell className="text-center py-6">
                            <Button 
                              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-red-500 text-white px-6 py-2 rounded-xl transition-all duration-300 transform hover:scale-105 font-bold shadow-lg border border-white/20 backdrop-blur-sm"
                              onClick={() => window.open('https://gocfs.com', '_blank')}
                            >
                              Get Assistance
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                
                <div className="mt-6 text-xs text-gray-600 text-center p-4 bg-gradient-to-r from-gray-50/80 via-blue-50/60 to-purple-50/80 rounded-lg border border-gray-200/50 backdrop-blur-sm">
                  <div className="flex items-center justify-center mb-2">
                    <Shield className="h-4 w-4 mr-2 text-emerald-500" />
                    <span className="font-semibold text-gray-700">Calculation Methodology</span>
                  </div>
                  <p className="leading-relaxed">
                    Premiums calculated using standard mortality tables with provider-specific factors. 
                    Smoker loading: 20% additional. Actual premiums may vary based on medical underwriting.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <Card className="border-2 border-dashed border-purple-300/50 bg-gradient-to-br from-white/95 via-purple-50/30 to-white/95 shadow-2xl backdrop-blur-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/20 via-purple-100/20 to-pink-100/20 animate-pulse"></div>
            <CardContent className="flex flex-col items-center justify-center py-20 relative z-10">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-full flex items-center justify-center shadow-2xl border border-white/30 backdrop-blur-sm">
                  <Calculator className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-xl animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Ready to Compare Premiums?
              </h3>
              <p className="text-gray-600 text-center max-w-md leading-relaxed font-medium">
                Fill in your details and click "Calculate Premium" to see 
                a detailed comparison table of term insurance premiums from top providers.
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
              Term Insurance Calculator
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

            <div className="space-y-4">
              <Label htmlFor="sumAssured" className="text-sm font-bold text-gray-700 flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-3 shadow-lg"></span>
                Sum Assured (₹)
              </Label>
              <Input
                id="sumAssured"
                type="number"
                min="100000"
                max="50000000"
                value={formData.sumAssured}
                onChange={(e) => setFormData({ ...formData, sumAssured: parseInt(e.target.value) || 0 })}
                className="border-2 border-gray-200 focus:border-purple-400 bg-white/90 rounded-xl transition-all duration-300 shadow-lg backdrop-blur-sm h-12 text-lg font-semibold"
                placeholder="e.g., 5000000 for ₹50 Lakhs"
              />
              <p className="text-xs text-gray-600 bg-gradient-to-r from-blue-50/80 to-purple-50/80 p-3 rounded-lg border border-blue-200/50 font-medium backdrop-blur-sm">
                Coverage: ₹{(formData.sumAssured / 100000).toFixed(1)} Lakhs
              </p>
            </div>

            <div className="space-y-4">
              <Label htmlFor="termYears" className="text-sm font-bold text-gray-700 flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3 shadow-lg"></span>
                Term (Years)
              </Label>
              <Input
                id="termYears"
                type="number"
                min="10"
                max="40"
                value={formData.termYears}
                onChange={(e) => setFormData({ ...formData, termYears: parseInt(e.target.value) || 0 })}
                className="border-2 border-gray-200 focus:border-purple-400 bg-white/90 rounded-xl transition-all duration-300 shadow-lg backdrop-blur-sm h-12 text-lg font-semibold"
              />
              <p className="text-xs text-gray-600 bg-gradient-to-r from-blue-50/80 to-purple-50/80 p-3 rounded-lg border border-blue-200/50 font-medium backdrop-blur-sm">
                Coverage till age: {formData.age + formData.termYears} years
              </p>
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

            <Button 
              onClick={calculateTermPremiums}
              className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-pink-600 hover:via-red-600 hover:to-orange-600 transition-all transform hover:scale-[1.02] duration-300 text-white font-bold py-6 rounded-xl shadow-2xl text-lg relative overflow-hidden group border border-white/20 backdrop-blur-sm"
              size="lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Calculator className="h-6 w-6 mr-3 relative z-10 animate-pulse" />
              <span className="relative z-10">Calculate Premium</span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermInsuranceCalculator;
