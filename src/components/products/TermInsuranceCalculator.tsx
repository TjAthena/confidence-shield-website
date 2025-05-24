
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Building2, Trophy } from "lucide-react";

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
  color: string;
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
        color: "bg-gradient-to-r from-red-500 to-red-600"
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
        color: "bg-gradient-to-r from-blue-500 to-blue-600"
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
        color: "bg-gradient-to-r from-orange-500 to-orange-600"
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
        color: "bg-gradient-to-r from-green-500 to-green-600"
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
        color: "bg-gradient-to-r from-purple-500 to-purple-600"
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
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount).replace('₹', '₹ ');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Results Panel - Left Side */}
      <div className="order-2 lg:order-1">
        {showResults ? (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Term Insurance Premium Estimates
              </h3>
              <p className="text-gray-600">
                Coverage: ₹{formData.coverageAmountLakh} Lakhs | Policy Term: {formData.coverageTillAge - formData.age} years
              </p>
            </div>
            
            {results.map((provider, index) => (
              <Card 
                key={provider.name} 
                className={`relative border transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${
                  index === 0 ? 'border-yellow-300 bg-gradient-to-b from-yellow-50 to-white' : 'border-gray-200'
                }`}
              >
                {index === 0 && (
                  <div className="absolute -top-3 left-4">
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 flex items-center gap-1">
                      <Trophy className="h-3 w-3" />
                      Best Value
                    </Badge>
                  </div>
                )}
                
                <CardHeader className={`${provider.color} text-white rounded-t-lg`}>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5" />
                    {provider.name}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-1">Annual Premium</p>
                      <p className="text-xl font-bold text-gray-800">
                        {formatCurrency(provider.annualPremium)}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-1">Monthly Premium</p>
                      <p className="text-xl font-bold text-gray-800">
                        {formatCurrency(provider.monthlyPremium)}
                      </p>
                    </div>
                  </div>
                  
                  <Button className={`w-full mt-4 ${provider.color} hover:opacity-90 transition-all text-white`}>
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
            
            <div className="text-xs text-gray-500 text-center mt-4">
              * Premiums are estimates based on standard rates. Actual premiums may vary based on 
              medical underwriting and insurer-specific criteria. GST included.
            </div>
          </div>
        ) : (
          <Card className="border-2 border-dashed border-gray-300 bg-gray-50">
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Building2 className="h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-600 mb-2">
                Ready to Calculate Premiums?
              </h3>
              <p className="text-gray-500 text-center">
                Fill in your details in the form and click "Calculate Premium" to see 
                estimated quotes from top insurance providers.
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Form Panel - Right Side */}
      <div className="order-1 lg:order-2">
        <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
            <CardTitle className="text-xl bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Calculate Your Premium
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-2">
              <Label htmlFor="age" className="text-sm font-medium">Age</Label>
              <Input
                id="age"
                type="number"
                min="18"
                max="65"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) || 0 })}
                className="border-gray-300 focus:border-blue-500"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Gender</Label>
              <Select 
                value={formData.gender} 
                onValueChange={(value: "male" | "female") => setFormData({ ...formData, gender: value })}
              >
                <SelectTrigger className="border-gray-300 focus:border-blue-500">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium">Smoker</Label>
              <div className="flex items-center space-x-2">
                <span className="text-sm">No</span>
                <Switch
                  checked={formData.isSmoker}
                  onCheckedChange={(checked) => setFormData({ ...formData, isSmoker: checked })}
                />
                <span className="text-sm">Yes</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="coverage" className="text-sm font-medium">Coverage Amount (₹ Lakhs)</Label>
              <Input
                id="coverage"
                type="number"
                min="10"
                max="1000"
                value={formData.coverageAmountLakh}
                onChange={(e) => setFormData({ ...formData, coverageAmountLakh: parseInt(e.target.value) || 0 })}
                className="border-gray-300 focus:border-blue-500"
                placeholder="e.g., 50 for ₹50 Lakhs"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="coverageTill" className="text-sm font-medium">Coverage Till Age</Label>
              <Input
                id="coverageTill"
                type="number"
                min={formData.age + 5}
                max="75"
                value={formData.coverageTillAge}
                onChange={(e) => setFormData({ ...formData, coverageTillAge: parseInt(e.target.value) || 0 })}
                className="border-gray-300 focus:border-blue-500"
              />
              <p className="text-xs text-gray-500">
                Policy Term: {formData.coverageTillAge - formData.age} years
              </p>
            </div>

            <Button 
              onClick={calculatePremiums}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-[1.02] duration-200"
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
