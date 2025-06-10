
import { Shield, Heart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProductCards = () => {
  const products = [
    {
      title: "Financial Protection",
      description: "Ensure your family’s financial stability during life’s most challenging moments. Term insurance offers a safety net against unforeseen events such as critical illness or loss of life-protecting your loved ones from financial risks and securing their future.",
      icon: Shield,
      image: "/assets/Term-insu.jpeg",
      products: ["Term Insurance", "Return of Premium"],
      color: "from-turquoise-dark to-turquoise-teal"
    },
    {
      title: "Financial Security",
      description: "Protect your well-being and valuable assets with comprehensive insurance coverage. Be prepared for medical emergencies, vehicle-related risks, and unforeseen expenses-ensuring a secure lifestyle, financial stability, and peace of mind for the future.",
      icon: Heart,
      image: "/assets/hiandmi.jpeg",
      products: ["Health Insurance", "Motor Insurance"],
      color: "from-turquoise-teal to-turquoise-medium"
    },
    {
      title: "Financial Freedom",
      description: "Gain control over your finances and live life on your terms. With the right balance of savings, smart investments, and access to tailored loans, you can build wealth, reduce dependency on a fixed income, and enjoy the freedom to make choices that truly matter to you.",
      icon: TrendingUp,
      image: "/assets/finan-free.jpg",
      products: ["FD/ RD", "Mutual Funds"],
      color: "from-turquoise-medium to-turquoise-light"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-turquoise-pale via-white to-turquoise-light/30">
      <div className="container px-5 mx-auto h-350">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-turquoise border border-turquoise-light/30 hover:shadow-2xl transition-all duration-500 hover:scale-105"
            >

              {/* Title */}
              <h3 className="text-2xl font-bold text-turquoise-dark text-center mb-6">
                {product.title}
              </h3>

              {/* Image */}
              <div className="relative mb-6 rounded-l overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-60 object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-20`}></div>
              </div>

              {/* Description */}
              <p className="text-turquoise-dark/80 text-center mb-2 leading-relaxed">
                {product.description}
              </p>

              {/* Products List */}
              <div className="space-y-2 mb-6 h-24">
                {product.products.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className="p-3 bg-gradient-to-r from-turquoise-pale/50 to-turquoise-light/30 rounded-lg text-center font-semibold text-turquoise-dark"
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* Learn More Button */}
              <div className="text-center">
                <Button 
                  className={`bg-gradient-to-r ${product.color} hover:scale-105 transition-all duration-300 shadow-lg text-white font-semibold px-6 py-2`}
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCards;
