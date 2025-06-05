
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, Building, User, Briefcase } from "lucide-react";

const Loans = () => {
  const loanProducts = [
    {
      id: "housing-loan",
      title: "Housing Loan",
      icon: <Home className="h-8 w-8 text-green-600" />,
      description: "Competitive interest rates for your dream home purchase or construction.",
      providers: ["SBI", "HDFC Bank", "ICICI Bank", "Axis Bank"],
      link: "/housing-loan",
    },
    {
      id: "equity-mortgage",
      title: "Equity and Mortgage",
      icon: <Building className="h-8 w-8 text-blue-600" />,
      description: "Leverage your property value for additional funding needs.",
      providers: ["HDFC Ltd", "LIC Housing", "PNB Housing", "Bajaj Finserv"],
      link: "/equity-mortgage",
    },
    {
      id: "personal-loan",
      title: "Personal Loan",
      icon: <User className="h-8 w-8 text-purple-600" />,
      description: "Quick and hassle-free personal loans for your immediate needs.",
      providers: ["Bajaj Finserv", "HDFC Bank", "ICICI Bank", "Kotak Mahindra"],
      link: "/personal-loan",
    },
    {
      id: "business-loan",
      title: "Business Loan",
      icon: <Briefcase className="h-8 w-8 text-orange-600" />,
      description: "Fuel your business growth with flexible business financing options.",
      providers: ["SBI", "HDFC Bank", "ICICI Bank", "Axis Bank"],
      link: "/business-loan",
    },
  ];

  return (
    <div>
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4 text-4xl font-bold text-green-900">Loan Products</h1>
            <p className="mb-6 text-lg text-gray-600">
              Access competitive loan products tailored to meet your personal and business financial needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {loanProducts.map((product) => (
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
                    <h4 className="mb-2 text-sm font-medium text-gray-600">Top Lenders</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.providers.map((provider, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 text-xs bg-green-100 text-green-800 rounded-full"
                        >
                          {provider}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link to={product.link} className="w-full">
                    <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                      Apply Now
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

export default Loans;
