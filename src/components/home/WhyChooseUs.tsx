
import { Button } from "@/components/ui/button";

const WhyChooseUs = () => {
  const features = [
    {
      title: "One of the best Prices",
      subtitle: "Guaranteed",
      image: "/assets/icons/the_best.png"
    },
    {
      title: "Unbiased Advice",
      subtitle: "Keeping customers first",
      image: "/assets/icons/un_bias.png"
    },
    {
      title: "100% Reliable",
      subtitle: "Regulated by IRDAI",
      image: "/assets/icons/real.png"
    },
    {
      title: "Claims Support",
      subtitle: "Made stress-free",
      image: "/assets/icons/support.png"
    },
    {
      title: "Happy to Help",
      subtitle: "Every day of the week",
      image: "/assets/icons/care.png"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-turquoise-pale via-white to-turquoise-light/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-turquoise-dark mb-6">
            What makes Gocfs Unique
          </h2>
          <p className="text-lg text-turquoise-dark/80 max-w-4xl mx-auto leading-relaxed mb-8">
            When you buy insurance from us, you get more than just financial safety. You also get: our promise of 
            simplifying complex insurance terms and conditions, quick stress-free claims, instant quotes from top 
            insurers and being present for you in the toughest of times.
          </p>
          <Button className="gradient-turquoise hover:scale-105 transition-all duration-300 shadow-turquoise text-white font-semibold px-8 py-3">
            Know More
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className=""></div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-turquoise-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-turquoise-dark/70">
                {feature.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
