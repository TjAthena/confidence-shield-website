
import { Shield, Users, Award, TrendingUp, Phone, FileText } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Comprehensive Plans to Suit Your Family Security and Your best Choice",
      description: "Discover tailored insurance solutions designed to protect what matters most to your family."
    },
    {
      icon: Users,
      title: "Utilize Our Calculators to Find your Proposition Plans",
      description: "Use our advanced calculators to determine the best financial plans suited for your needs."
    },
    {
      icon: Award,
      title: "Unique Our Calculators to Find your Proposition Plans",
      description: "Experience our unique approach to financial planning with industry-leading tools and expertise."
    }
  ];

  const services = [
    { title: "Term Insurance Calculator", description: "Calculate premium for life insurance plans and benefits." },
    { title: "Health Premium Calculator", description: "Calculate health insurance premium and coverage options." },
    { title: "PIFMC Mutual Calculator", description: "Calculate returns on mutual fund investments and plans." }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container px-4 mx-auto">
        {/* Main Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-8 text-center">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Select a Calculator to Begin</h3>
              <div className="bg-white rounded-2xl p-6 mb-6">
                <TrendingUp className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-blue-800 mb-2">Term Insurance Calculator</h4>
                <p className="text-gray-600 text-sm">Calculate your insurance needs and premiums</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-blue-800 font-medium">Financial Planning</span>
                  <Phone className="w-5 h-5 text-blue-500" />
                </div>
                <div className="flex items-center justify-between p-3 bg-cyan-50 rounded-lg">
                  <span className="text-cyan-800 font-medium">Quick Assistance</span>
                  <FileText className="w-5 h-5 text-cyan-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300">
                Calculate Now
              </button>
            </div>
          ))}
        </div>

        {/* What Makes Us Unique */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">What makes Gocfs Unique</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            What you need know is how we use different kinds of financial data to view your goal and consider all
            other optimal insurance into finding companies that deliver most relevant data to get you the most useful
            optimal data being sourced for you while blueprint your need.
          </p>
        </div>

        {/* Service Icons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          {[
            { icon: Users, title: "See all in One Pack", subtitle: "Tax Return" },
            { icon: FileText, title: "Unlimited Advice", subtitle: "Budget & Cost Control" },
            { icon: Shield, title: "100% Reliability", subtitle: "Security & Safety" },
            { icon: Phone, title: "Expert Support", subtitle: "24/7 assistance" },
            { icon: Award, title: "Happy to grow", subtitle: "Every Service" }
          ].map((item, index) => (
            <div key={index} className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-blue-900 mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
