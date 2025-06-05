
import { Shield, Heart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProductCards = () => {
  const products = [
    {
      title: "Financial Protection",
      description: "Protect your life and family and gives a Confident Life Style Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum fugiat enim ut repellat saepe distinctio quae ratione, eveniet delectus quibusdam.",
      icon: Shield,
      image: "/public/assets/Financial_Protection.webp",
      products: ["Term Insurance", "Return of Premium"],
      color: "from-turquoise-dark to-turquoise-teal"
    },
    {
      title: "Financial Security",
      description: "Secure your Fund for Health and Vehicle Protection Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum fugiat enim ut repellat saepe distinctio quae ratione, eveniet delectus quibusdam.",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      products: ["Health Insurance", "Motor Insurance"],
      color: "from-turquoise-teal to-turquoise-medium"
    },
    {
      title: "Financial Freedom",
      description: "Smart investments and savings lead to lifelong financial freedom goals. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum fugiat enim ut repellat saepe distinctio quae ratione, eveniet delectus quibusdam.",
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      products: ["FD/ RD", "Mutual Funds"],
      color: "from-turquoise-medium to-turquoise-light"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-turquoise-pale via-white to-turquoise-light/30">
      <div className="container px-4 mx-auto">
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
              <div className="relative mb-6 rounded-xl overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-20`}></div>
              </div>

              {/* Description */}
              <p className="text-turquoise-dark/80 text-center mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Products List */}
              <div className="space-y-2 mb-6">
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
