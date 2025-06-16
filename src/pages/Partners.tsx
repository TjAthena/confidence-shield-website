
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Shield, PiggyBank, CreditCard } from "lucide-react";

const Partners = () => {
  const insuranceProviders = [
    { name: "ICICI Prudential", logo: "/placeholder.svg", description: "Comprehensive life insurance solutions" },
    { name: "HDFC Life", logo: "/placeholder.svg", description: "Trusted life insurance partner" },
    { name: "Max Life Insurance", logo: "/placeholder.svg", description: "Innovative insurance products" },
    { name: "SBI Life", logo: "/placeholder.svg", description: "India's most trusted life insurer" },
    { name: "Bajaj Allianz Life", logo: "/placeholder.svg", description: "Digital-first insurance solutions" },
    { name: "LIC", logo: "/placeholder.svg", description: "Life Insurance Corporation of India" }
  ];

  const savingsProviders = [
    { name: "Bajaj Finance", logo: "/placeholder.svg", description: "Leading financial services company" },
    { name: "Shiram Finance", logo: "/placeholder.svg", description: "Comprehensive financial solutions" },
    { name: "Sundaram Finance", logo: "/placeholder.svg", description: "Trusted investment partner" }
  ];

  const loanProviders = [
    { name: "HDFC Bank", logo: "/placeholder.svg", description: "Leading private sector bank" },
    { name: "ICICI Bank", logo: "/placeholder.svg", description: "India's largest private bank" },
    { name: "SBI", logo: "/placeholder.svg", description: "State Bank of India" },
    { name: "Axis Bank", logo: "/placeholder.svg", description: "Third largest private sector bank" },
    { name: "Kotak Mahindra Bank", logo: "/placeholder.svg", description: "Leading Indian bank" },
    { name: "IndusInd Bank", logo: "/placeholder.svg", description: "New generation private bank" },
    { name: "Yes Bank", logo: "/placeholder.svg", description: "Digital banking solutions" },
    { name: "IDFC FIRST Bank", logo: "/placeholder.svg", description: "Customer-centric banking" },
    { name: "RBL Bank", logo: "/placeholder.svg", description: "Specialized banking services" },
    { name: "Bank of Baroda", logo: "/placeholder.svg", description: "Leading public sector bank" },
    { name: "Punjab National Bank", logo: "/placeholder.svg", description: "India's second largest public sector bank" },
    { name: "Bajaj Finserv", logo: "/placeholder.svg", description: "Diversified financial services" },
    { name: "Tata Capital", logo: "/placeholder.svg", description: "Comprehensive financial solutions" },
    { name: "L&T Finance", logo: "/placeholder.svg", description: "Infrastructure financing specialist" },
    { name: "Indiabulls", logo: "/placeholder.svg", description: "Leading housing finance company" },
    { name: "Mahindra Finance", logo: "/placeholder.svg", description: "Vehicle and tractor financing" },
    { name: "Muthoot Finance", logo: "/placeholder.svg", description: "Gold loan specialists" },
    { name: "Manappuram Finance", logo: "/placeholder.svg", description: "Leading gold financing company" }
  ];

  const ProviderCard = ({ provider }: { provider: { name: string; logo: string; description: string } }) => (
    <Card className="group hover:shadow-turquoise transition-all duration-300 border-turquoise-light/30 hover:border-turquoise-teal bg-white/80 backdrop-blur-sm h-full">
      <CardContent className="p-6 flex flex-col items-center text-center h-full">
        <div className="w-20 h-20 mb-4 bg-gradient-to-br from-turquoise-light/20 to-turquoise-pale/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-turquoise-light/30">
          <img 
            src={provider.logo} 
            alt={provider.name} 
            className="w-12 h-12 object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.nextElementSibling!.textContent = provider.name.slice(0, 2).toUpperCase();
            }}
          />
          <span className="text-lg font-bold text-turquoise-dark hidden"></span>
        </div>
        <h4 className="font-semibold text-turquoise-dark mb-2 text-lg">{provider.name}</h4>
        <p className="text-sm text-gray-600 leading-relaxed">{provider.description}</p>
      </CardContent>
    </Card>
  );

  const ProviderGrid = ({ providers }: { providers: typeof insuranceProviders }) => {
    if (providers.length <= 8) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {providers.map((provider, index) => (
            <ProviderCard key={index} provider={provider} />
          ))}
        </div>
      );
    }

    return (
      <Carousel className="w-full max-w-6xl mx-auto">
        <CarouselContent className="-ml-2 md:-ml-4">
          {providers.map((provider, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <ProviderCard provider={provider} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-12" />
        <CarouselNext className="hidden md:flex -right-12" />
      </Carousel>
    );
  };

  return (
    <div className="font-['Calibri'] bg-gradient-to-br from-turquoise-pale via-white to-turquoise-light/30 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-turquoise-dark via-turquoise-teal to-turquoise-medium relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-turquoise-light/30 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-turquoise-pale/30 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-5xl font-bold text-white drop-shadow-2xl">
              Our <span className="text-turquoise-light glow-effect">Partners</span>
            </h1>
            <p className="mb-8 text-xl text-white/80 leading-relaxed">
              We collaborate with India's most trusted financial institutions to bring you the best products and services.
            </p>
          </div>
        </div>
      </section>

      {/* Insurance Partners */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-turquoise-dark to-turquoise-teal rounded-full flex items-center justify-center shadow-lg">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-turquoise-dark mb-4">Insurance Partners</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Leading insurance providers offering comprehensive life, health, and general insurance solutions.
              </p>
            </div>
            <ProviderGrid providers={insuranceProviders} />
          </div>
        </div>
      </section>

      {/* Savings Partners */}
      <section className="py-20 bg-gradient-to-br from-turquoise-pale/50 to-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-turquoise-teal to-turquoise-medium rounded-full flex items-center justify-center shadow-lg">
                <PiggyBank className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-turquoise-dark mb-4">Savings & Investment Partners</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Trusted financial institutions for your savings, fixed deposits, and investment needs.
              </p>
            </div>
            <ProviderGrid providers={savingsProviders} />
          </div>
        </div>
      </section>

      {/* Loans & Credit Partners */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-turquoise-medium to-turquoise-light rounded-full flex items-center justify-center shadow-lg">
                <CreditCard className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-turquoise-dark mb-4">Loans & Credit Partners</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Premier banking and financial institutions providing personal loans, home loans, business loans, and credit solutions.
              </p>
            </div>
            <ProviderGrid providers={loanProviders} />
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-gradient-to-r from-turquoise-dark via-turquoise-teal to-turquoise-medium relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-turquoise-light/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-turquoise-pale/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-8 text-4xl font-bold text-white">Why Our Partnerships Matter</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Best Rates</h3>
                <p className="text-white/80">Access to competitive rates and exclusive offers from top financial institutions.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Trusted Quality</h3>
                <p className="text-white/80">Products and services from India's most reliable and established financial partners.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Comprehensive Support</h3>
                <p className="text-white/80">End-to-end assistance from application to claim settlement across all products.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .glow-effect {
          text-shadow: 0 0 20px rgba(183, 225, 215, 0.7);
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default Partners;
