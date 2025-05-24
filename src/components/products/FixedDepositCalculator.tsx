
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Building2, Trophy, TrendingUp, Calendar, Award } from "lucide-react";

interface CalculatorData {
  depositAmount: number;
  tenureMonths: number;
  interestPayout: "cumulative" | "monthly" | "quarterly" | "yearly";
}

interface ProviderResult {
  name: string;
  maturityAmount: number;
  interestEarned: number;
  interestRate: number;
  logo: React.ReactNode;
}

const FixedDepositCalculator = () => {
  const [formData, setFormData] = useState<CalculatorData>({
    depositAmount: 100000,
    tenureMonths: 12,
    interestPayout: "cumulative",
  });

  const [results, setResults] = useState<ProviderResult[]>([]);
  const [showResults, setShowResults] = useState(false);

  const calculateMaturity = () => {
    const tenureYears = formData.tenureMonths / 12;
    const providers: ProviderResult[] = [];

    // Provider data
    const providerData = [
      { name: "Bajaj Finance", rate: 0.074, compoundFreq: 4 },
      { name: "Shriram Finance", rate: 0.09, compoundFreq: 12 },
      { name: "Sundaram Finance", rate: 0.072, compoundFreq: 4 }
    ];

    providerData.forEach((provider, index) => {
      let maturityAmount: number;
      
      if (formData.interestPayout === "cumulative") {
        // Compound interest formula: M = P * (1 + r/n)^(n*t)
        maturityAmount = formData.depositAmount * Math.pow(1 + provider.rate / provider.compoundFreq, provider.compoundFreq * tenureYears);
      } else {
        // Simple interest formula: M = P + (P * r * t)
        maturityAmount = formData.depositAmount + (formData.depositAmount * provider.rate * tenureYears);
      }

      const interestEarned = maturityAmount - formData.depositAmount;

      const logoColors = ['from-orange-500 to-orange-600', 'from-blue-500 to-blue-600', 'from-green-500 to-green-600'];
      const logoLetters = ['B', 'S', 'S'];

      providers.push({
        name: provider.name,
        maturityAmount,
        interestEarned,
        interestRate: provider.rate * 100,
        logo: <div className={`w-8 h-8 bg-gradient-to-r ${logoColors[index]} rounded flex items-center justify-center text-white text-xs font-bold`}>{logoLetters[index]}</div>
      });
    });

    // Sort by maturity amount (highest first)
    providers.sort((a, b) => b.maturityAmount - a.maturityAmount);

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
                Fixed Deposit Maturity Estimates
              </h3>
              <p className="text-[#3D4E64]">
                Investment: {formatCurrency(formData.depositAmount)} | Tenure: {formData.tenureMonths} months
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
                      Best Returns
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
                        <p className="text-sm text-[#3D4E64]">Interest Rate: {provider.interestRate.toFixed(2)}% p.a.</p>
                      </div>
                    </div>
                    <TrendingUp className="h-5 w-5 text-[#3B9560]" />
                  </div>

                  {/* Middle Row - Investment Details */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <p className="text-sm text-[#3D4E64] mb-1">Principal</p>
                      <p className="font-bold text-[#213753]">{formatCurrency(formData.depositAmount)}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-[#3D4E64] mb-1">Tenure</p>
                      <p className="font-bold text-[#213753]">{formData.tenureMonths} months</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-[#3D4E64] mb-1">Payout</p>
                      <div className="flex items-center justify-center gap-1">
                        <Calendar className="h-3 w-3 text-[#3B9560]" />
                        <p className="font-bold text-[#213753] capitalize">{formData.interestPayout}</p>
                      </div>
                    </div>
                  </div>

                  {/* Features Row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <Award className="h-4 w-4 text-[#3B9560]" />
                      <span className="text-sm text-[#3B9560] font-medium">Guaranteed returns</span>
                    </div>
                    <button className="text-sm text-[#3B9560] hover:underline">View details</button>
                  </div>

                  {/* Returns Row */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-[#3D4E64] mb-1">
                        Maturity: <span className="font-bold text-[#213753]">{formatCurrency(provider.maturityAmount)}</span>
                      </div>
                      <div className="text-sm text-[#3D4E64]">
                        Interest: <span className="font-bold text-[#3B9560]">{formatCurrency(provider.interestEarned)}</span>
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
              * Returns are estimates based on current interest rates. Actual returns may vary. 
              Interest rates are subject to change by the respective institutions.
            </div>
          </div>
        ) : (
          <Card className="border-2 border-dashed border-gray-300 bg-[#FCF9F8]">
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Building2 className="h-12 w-12 text-[#3D4E64] mb-4" />
              <h3 className="text-lg font-medium text-[#213753] mb-2">
                Ready to Calculate Returns?
              </h3>
              <p className="text-[#3D4E64] text-center">
                Fill in your investment details and click "Calculate Returns" to see 
                estimated maturity amounts from top financial institutions.
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
              Calculate Your Returns
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-2">
              <Label htmlFor="depositAmount" className="text-sm font-medium text-[#213753]">Deposit Amount (₹)</Label>
              <Input
                id="depositAmount"
                type="number"
                min="5000"
                max="10000000"
                value={formData.depositAmount}
                onChange={(e) => setFormData({ ...formData, depositAmount: parseInt(e.target.value) || 0 })}
                className="border-gray-300 focus:border-[#3B9560] bg-white"
                placeholder="e.g., 100000"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tenure" className="text-sm font-medium text-[#213753]">Tenure (Months)</Label>
              <Input
                id="tenure"
                type="number"
                min="6"
                max="120"
                value={formData.tenureMonths}
                onChange={(e) => setFormData({ ...formData, tenureMonths: parseInt(e.target.value) || 0 })}
                className="border-gray-300 focus:border-[#3B9560] bg-white"
                placeholder="e.g., 12 for 1 year"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-[#213753]">Interest Payout</Label>
              <Select 
                value={formData.interestPayout} 
                onValueChange={(value: "cumulative" | "monthly" | "quarterly" | "yearly") => setFormData({ ...formData, interestPayout: value })}
              >
                <SelectTrigger className="border-gray-300 focus:border-[#3B9560] bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="cumulative">Cumulative (Compounded)</SelectItem>
                  <SelectItem value="monthly">Monthly Payout</SelectItem>
                  <SelectItem value="quarterly">Quarterly Payout</SelectItem>
                  <SelectItem value="yearly">Yearly Payout</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button 
              onClick={calculateMaturity}
              className="w-full bg-gradient-to-r from-[#3B9560] to-green-600 hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-[1.02] duration-200 text-white"
              size="lg"
            >
              Calculate Returns
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FixedDepositCalculator;
