
import { Card, CardContent } from "@/components/ui/card";

const TrustSection = () => {
  const partners = [
    "HDFC Life",
    "Axis Bank",
    "ICICI Prudential",
    "Bajaj Allianz",
    "LIC",
    "SBI Life",
    "Star Health",
    "Navi Insurance"
  ];

  const testimonials = [
    {
      id: 1,
      content: "Confidence Financial helped me choose the right term insurance for my family. The advisors were patient and explained everything in detail.",
      name: "Rajesh Kumar",
      title: "IT Professional",
    },
    {
      id: 2,
      content: "After comparing multiple health insurance plans with their help, I found the perfect coverage for my parents at an affordable premium.",
      name: "Priya Sharma",
      title: "Business Owner",
    },
    {
      id: 3,
      content: "Their investment advice helped me create a diversified portfolio that aligns with my long-term financial goals.",
      name: "Amit Patel",
      title: "Marketing Manager",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#001F3F]">Trusted By Thousands</h2>
          <p className="text-gray-600">
            We partner with India's leading financial institutions to provide you with the best protection and investment options.
          </p>
        </div>

        <div className="mb-16">
          <div className="p-8 bg-white rounded-lg shadow-sm">
            <h3 className="mb-6 text-xl font-semibold text-center">Our Partners</h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4">
              {partners.map((partner, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center p-4 bg-gray-50 rounded h-14"
                >
                  <span className="font-medium text-gray-500">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-8 text-2xl font-semibold text-center">Customer Testimonials</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-none shadow-md">
                <CardContent className="p-6">
                  <p className="mb-4 italic text-gray-600">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-[#001F3F]">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
