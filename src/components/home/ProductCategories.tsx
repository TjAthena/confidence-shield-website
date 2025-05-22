
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProductCategories = () => {
  const categories = [
    {
      id: "life-protection",
      title: "Life Protection",
      description: "Secure your family's future with comprehensive life insurance solutions tailored to your needs.",
      features: ["Term Insurance", "Return of Premium Plans"],
      link: "/products/life-protection",
    },
    {
      id: "financial-security",
      title: "Financial Security",
      description: "Protect yourself against unexpected medical expenses and vehicle damages with our insurance plans.",
      features: ["Health Insurance", "Vehicle Insurance"],
      link: "/products/financial-security",
    },
    {
      id: "financial-freedom",
      title: "Financial Freedom",
      description: "Build wealth and achieve long-term financial goals with our investment solutions.",
      features: ["FD & RD", "Mutual Funds"],
      link: "/products/financial-freedom",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-[#001F3F]">Our Product Categories</h2>
          <p className="text-gray-600">
            We offer a comprehensive range of financial products to meet your protection and investment needs.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {categories.map((category) => (
            <Card key={category.id} className="overflow-hidden border border-gray-200 transition-all hover:shadow-md">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="pl-5 mb-4 space-y-2 list-disc">
                  {category.features.map((feature, index) => (
                    <li key={index} className="text-gray-700">{feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link to={category.link} className="w-full">
                  <Button className="w-full" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
