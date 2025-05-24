
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Building2, Trophy, TrendingUp, Calendar, Award } from "lucide-react";

interface CalculatorData {
  monthlyAmount: number;
  tenureMonths: number;
}

interface ProviderResult {
  name: string;
  maturityAmount: number;
  totalPrincipal: number;
  interestEarned: number;
  interestRate: number;
  logo: React.ReactNode;
}

const RDCalculator = () => {
  const [formData, setFormData] = useState<CalculatorData>({
    monthlyAmount: 5000,
    tenureMonths: 12,
  });

  const [results, setResults] = useState<ProviderResult[]>([]);
  const [showResults, setShowResults] = useState(false);

  const calculateRDMaturity = (P: number, r: number, n: number, t: number) => {
    const compoundFactor = Math.pow(1 + r / n, n * t);
    const denominator = 1 - Math.pow(1 + r / n, -1 / n);
    return P * ((compoundFactor - 1) / denominator);
  };

  const calculateMaturity = () => {
    const tenureYears = formData.tenureMonths / 12;
    const providers: ProviderResult[] = [];

    const providerData = [
      { name: "Bajaj Finance", rate: 0.074, compoundFreq: 4 },
      { name: "Shriram Finance", rate: 0.09, compoundFreq: 12 },
      { name: "Sundaram Finance", rate: 0.072, compoundFreq: 12 }
    ];

    providerData.forEach((provider, index) => {
      const maturityAmount = calculateRDMaturity(formData.monthlyAmount, provider.rate, provider.compoundFreq, tenureYears);
      const totalPrincipal = formData.monthlyAmount * formData.tenureMonths;
      const interestEarned = maturityAmount - totalPrincipal;

      const logoColors = ['from-orange-500 to-orange-600', 'from-blue-500 to-blue-600', 'from-green-500 to-green-600'];
      const logoLetters = ['B', 'S', 'S'];

      providers.push({
        name: provider.name,
        maturityAmount,
        totalPrincipal,
        interestEarned,
        interestRate: provider.rate * 100,
        logo: <div className={`w-8 h-8 bg-gradient-to-r ${logoColors[index]} rounded flex items-center justify-center text-white text-xs font-bold`}>{logoLetters[index]}</div>
      });
    });

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
      <div className="order-2 lg:order-1">
        {showResults ? (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2 text-[#213753]">
                Recurring Deposit Maturity Estimates
              </h3>
              <p className="text-[#3D4E64]">
                Monthly: {formatCurrency(formData.monthlyAmount)} | Tenure: {formData.tenureMonths} months
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
                  <div className="grid grid-cols-12 gap-4 items-center mb-4">
                    <div className="col-span-3 flex items-center gap-2">
                      {provider.logo}
                      <div>
                        <h4 className="font-semibold text-[#213753] text-sm">{provider.name}</h4>
                        <p className="text-xs text-[#3D4E64]">{provider.interestRate.toFixed(2)}% p.a.</p>
                      </div>
                    </div>
                    
                    <div className="col-span-3 text-center">
                      <p className="text-xs text-[#3D4E64] mb-1">Monthly</p>
                      <p className="font-bold text-[#213753] text-sm">{formatCurrency(formData.monthlyAmount)}</p>
                    </div>
                    
                    <div className="col-span-3 text-center">
                      <p className="text-xs text-[#3D4E64] mb-1">Tenure</p>
                      <div className="flex items-center justify-center gap-1">
                        <Calendar className="h-3 w-3 text-[#3B9560]" />
                        <p className="font-bold text-[#213753] text-sm">{formData.tenureMonths}M</p>
                      </div>
                    </div>
                    
                    <div className="col-span-3 text-center">
                      <p className="text-xs text-[#3D4E64] mb-1">Total Invested</p>
                      <div className="flex items-center justify-center gap-1">
                        <Award className="h-3 w-3 text-[#3B9560]" />
                        <p className="font-bold text-[#213753] text-sm">{formatCurrency(provider.totalPrincipal)}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
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
            </div>
          </div>
        ) : (
          <Card className="border-2 border-dashed border-[#3D4E64]/30 bg-[#FCF9F8]">
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Building2 className="h-12 w-12 text-[#3D4E64] mb-4" />
              <h3 className="text-lg font-medium text-[#213753] mb-2">
                Ready to Calculate Returns?
              </h3>
              <p className="text-[#3D4E64] text-center">
                Fill in your monthly investment details and click "Calculate Returns" to see 
                estimated maturity amounts from top financial institutions.
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      <div className="order-1 lg:order-2">
        <Card className="border border-[#3D4E64]/20 hover:shadow-lg transition-all duration-300 bg-[#FCF9F8]">
          <CardHeader className="bg-gradient-to-r from-[#213753] to-[#3D4E64]">
            <CardTitle className="text-xl text-white">
              Calculate Your RD Returns
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-2">
              <Label htmlFor="monthlyAmount" className="text-sm font-medium text-[#213753]">Monthly Amount (₹)</Label>
              <Input
                id="monthlyAmount"
                type="number"
                min="500"
                max="100000"
                value={formData.monthlyAmount}
                onChange={(e) => setFormData({ ...formData, monthlyAmount: parseInt(e.target.value) || 0 })}
                className="border-[#3D4E64]/30 focus:border-[#3B9560] bg-white"
                placeholder="e.g., 5000"
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
                className="border-[#3D4E64]/30 focus:border-[#3B9560] bg-white"
                placeholder="e.g., 12 for 1 year"
              />
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

export default RDCalculator;
