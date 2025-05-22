
import { Shield, Home, Car, HeartPulse, TrendingUp, Wallet } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const IllustrationsSection = () => {
  const illustrations = [
    {
      icon: <Shield className="h-12 w-12 text-[#001F3F]" />,
      title: "Life Protection",
      description: "Secure your family's future with comprehensive coverage for life's uncertainties.",
    },
    {
      icon: <HeartPulse className="h-12 w-12 text-[#00BFFF]" />,
      title: "Health Protection",
      description: "Protect yourself and your loved ones with quality healthcare coverage.",
    },
    {
      icon: <Car className="h-12 w-12 text-[#00C853]" />,
      title: "Asset Protection",
      description: "Safeguard your valuable assets with comprehensive insurance coverage.",
    },
    {
      icon: <Home className="h-12 w-12 text-[#001F3F]" />,
      title: "Secure Investment",
      description: "Grow your wealth with safe and reliable investment options.",
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-[#00BFFF]" />,
      title: "Financial Growth",
      description: "Build your financial portfolio with expert-guided investment solutions.",
    },
    {
      icon: <Wallet className="h-12 w-12 text-[#00C853]" />,
      title: "Retirement Planning",
      description: "Plan for a comfortable retirement with systematic savings and investments.",
    }
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-[#001F3F]">
            Financial Protection For Every Need
          </h2>
          <p className="text-gray-600">
            We offer a wide range of financial products to help you protect what matters most and build a secure future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {illustrations.map((item, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-md transition-all">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <CardTitle className="text-xl text-center">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IllustrationsSection;
