
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Landmark, TrendingUp, Shield } from "lucide-react";

const Savings = () => {
  const savingsProducts = [
    {
      id: "fixed-deposits",
      title: "Fixed Deposits / Recurring Deposits",
      icon: <Landmark className="h-8 w-8 text-blue-600" />,
      description: "Secure fixed returns with deposits from trusted financial institutions.",
      providers: ["Bajaj Finance", "Shriram Finance", "Sundaram Finance"],
      link: "/fixed-deposits",
    },
    {
      id: "mutual-funds",
      title: "Mutual Funds",
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      description: "Professionally managed investment portfolios across various asset classes.",
      providers: ["HDFC AMC", "SBI Mutual Fund", "Axis Mutual Fund", "ICICI Prudential AMC"],
      link: "/mutual-funds",
    },
    {
      id: "bonds",
      title: "Bonds",
      icon: <Shield className="h-8 w-8 text-indigo-600" />,
      description: "Government and corporate bonds for stable income generation.",
      providers: ["Government Bonds", "Corporate Bonds", "Tax Free Bonds"],
      link: "/bonds",
    },
  ];

  return (
    <div>
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4 text-4xl font-bold text-blue-900">Savings & Investment Products</h1>
            <p className="mb-6 text-lg text-gray-600">
              Build wealth and achieve your financial goals with our comprehensive savings and investment solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {savingsProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    {product.icon}
                    <CardTitle className="text-xl">{product.title}</CardTitle>
                  </div>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="mb-2 text-sm font-medium text-gray-600">Top Options</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.providers.map((provider, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 text-xs bg-blue-100 text-blue-800 rounded-full"
                        >
                          {provider}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link to={product.link} className="w-full">
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Savings;
