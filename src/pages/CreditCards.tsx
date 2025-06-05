
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CreditCard, Gift, Plane, ShoppingBag } from "lucide-react";

const CreditCards = () => {
  const creditCardCategories = [
    {
      id: "rewards-cards",
      title: "Rewards Credit Cards",
      icon: <Gift className="h-8 w-8 text-purple-600" />,
      description: "Earn rewards points on every purchase and redeem for exciting benefits.",
      features: ["Cashback on purchases", "Reward points", "Welcome bonus", "No annual fee options"],
    },
    {
      id: "travel-cards",
      title: "Travel Credit Cards",
      icon: <Plane className="h-8 w-8 text-blue-600" />,
      description: "Perfect for frequent travelers with airline miles and travel benefits.",
      features: ["Air miles", "Airport lounge access", "Travel insurance", "Foreign exchange benefits"],
    },
    {
      id: "shopping-cards",
      title: "Shopping Credit Cards",
      icon: <ShoppingBag className="h-8 w-8 text-pink-600" />,
      description: "Maximize savings on your shopping with exclusive discounts and offers.",
      features: ["Shopping discounts", "EMI conversion", "Online offers", "Festival bonuses"],
    },
    {
      id: "premium-cards",
      title: "Premium Credit Cards",
      icon: <CreditCard className="h-8 w-8 text-gold-600" />,
      description: "Exclusive benefits and premium services for high-value customers.",
      features: ["Concierge services", "Premium dining", "Golf privileges", "Priority customer service"],
    },
  ];

  return (
    <div>
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4 text-4xl font-bold text-purple-900">Credit Cards</h1>
            <p className="mb-6 text-lg text-gray-600">
              Discover the perfect credit card for your lifestyle with exclusive benefits and rewards.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {creditCardCategories.map((category) => (
              <Card key={category.id} className="overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    {category.icon}
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="mb-2 text-sm font-medium text-gray-600">Key Features</h4>
                    <ul className="space-y-1">
                      {category.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-700 flex items-center">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link to="/contact" className="w-full">
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
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

export default CreditCards;
