
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, HeartPulse, Car, Landmark, BarChart3 } from "lucide-react";

const Products = () => {
  const categories = [
    {
      id: "life-protection",
      title: "1. Life Protection",
      icon: <Shield className="h-8 w-8 text-[#001F3F]" />,
      description: "Secure your family's financial future with comprehensive life insurance solutions.",
      subcategories: [
        {
          id: "term-insurance",
          title: "1.1 Term Insurance",
          description: "Pure life coverage at affordable premiums to protect your family's financial future.",
          providers: ["HDFC Life", "Max Life", "Bajaj Allianz", "ICICI Prudential", "LIC"],
          link: "/term-insurance",
        },
        {
          id: "return-of-premium",
          title: "1.2 Return of Premium Plans",
          description: "Life coverage with return of all premiums at the end of policy term.",
          providers: ["HDFC Life", "Max Life", "ICICI Prudential", "LIC", "SBI Life"],
          link: "/return-of-premium",
        },
      ],
    },
    {
      id: "financial-security",
      title: "2. Financial Security",
      icon: <HeartPulse className="h-8 w-8 text-[#00BFFF]" />,
      description: "Protect yourself against unexpected medical expenses and vehicle damages.",
      subcategories: [
        {
          id: "health-insurance",
          title: "2.1 Health Insurance",
          description: "Comprehensive coverage for hospitalization, treatments, and medical emergencies.",
          providers: ["Navi", "Reliance", "HDFC ERGO", "ICICI Lombard", "Star Health"],
          link: "/health-insurance",
        },
        {
          id: "vehicle-insurance",
          title: "2.2 Vehicle Insurance",
          description: "Protect your vehicle against damage, theft, and third-party liabilities.",
          providers: ["HDFC ERGO", "ICICI Lombard", "Bajaj Allianz", "Reliance General"],
          link: "/vehicle-insurance",
        },
      ],
    },
    {
      id: "financial-freedom",
      title: "3. Financial Freedom",
      icon: <BarChart3 className="h-8 w-8 text-[#00C853]" />,
      description: "Build wealth and achieve long-term financial goals with our investment solutions.",
      subcategories: [
        {
          id: "fixed-deposits",
          title: "3.1 Fixed Deposits",
          description: "Secure fixed returns with deposits from trusted financial institutions.",
          providers: ["Bajaj Finance", "Shriram Finance", "Sundaram Finance"],
          link: "/fixed-deposits",
        },
        {
          id: "mutual-funds",
          title: "3.2 Mutual Funds",
          description: "Professionally managed investment portfolios across various asset classes.",
          providers: ["HDFC AMC", "SBI Mutual Fund", "Axis Mutual Fund", "ICICI Prudential AMC"],
          link: "/mutual-funds",
        },
      ],
    },
  ];

  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4 text-4xl font-bold text-[#001F3F]">Our Financial Products</h1>
            <p className="mb-6 text-lg text-gray-600">
              Explore our comprehensive range of financial protection and investment solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          {categories.map((category) => (
            <div key={category.id} className="mb-16 border-b pb-8 last:border-b-0">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  {category.icon}
                  <h2 className="text-3xl font-semibold text-[#001F3F]">{category.title}</h2>
                </div>
                <p className="mt-2 text-gray-600">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {category.subcategories.map((subcategory) => (
                  <Card key={subcategory.id} className="overflow-hidden border border-gray-200 hover:shadow-md transition-all">
                    <CardHeader>
                      <CardTitle className="text-2xl">{subcategory.title}</CardTitle>
                      <CardDescription>{subcategory.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <h4 className="mb-2 text-sm font-medium text-gray-600">Top Providers</h4>
                        <div className="flex flex-wrap gap-2">
                          {subcategory.providers.map((provider, index) => (
                            <span 
                              key={index} 
                              className="px-3 py-1 text-xs bg-gray-100 rounded-full"
                            >
                              {provider}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link to={subcategory.link} className="w-full">
                        <Button className="w-full bg-[#00BFFF] hover:bg-[#00BFFF]/90">
                          View Details
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
