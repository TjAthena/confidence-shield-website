
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Target, Eye, Heart, Award, TrendingUp, Shield, DollarSign, Home, Car, Briefcase, PiggyBank } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "SB Kirubakaran",
      role: "Chief Executive Officer",
      bio: "With over 23 years of accomplished leadership in Sales & Distribution, with a strong specialization in Insurance and investment products, Financial Planning, Strategic Planning, Business Development, and Client Relationship Management.",
      experience: "23+ Years",
      imageSrc: "/images/kirubakaran.jpg"
    },
    {
      id: 2,
      name: "Allen Godfrey A",
      role: "Executive Director",
      bio: "Allen brings over 14 years of extensive experience in sales and marketing, with a strong specialization in insurance and investment products.",
      experience: "14+ Years",
      imageSrc: "/images/allen.jpg"
    }
  ];

  const services = [
    {
      icon: DollarSign,
      title: "Financial Planning",
      description: "Personalized financial planning services including wealth management, retirement planning, and tax-saving strategies.",
      gradient: "from-turquoise-dark to-turquoise-teal"
    },
    {
      icon: Shield,
      title: "Life Insurance",
      description: "Protection plans, term insurance, endowment policies, and savings-linked life insurance solutions.",
      gradient: "from-turquoise-teal to-turquoise-medium"
    },
    {
      icon: Heart,
      title: "Health Insurance",
      description: "Comprehensive medical insurance policies, including individual and family floater plans.",
      gradient: "from-turquoise-medium to-turquoise-light"
    },
    {
      icon: Car,
      title: "Motor Insurance",
      description: "Tailored two-wheeler and four-wheeler insurance plans with comprehensive coverage.",
      gradient: "from-turquoise-light to-turquoise-pale"
    },
    {
      icon: Home,
      title: "General Insurance",
      description: "Travel insurance, home insurance, personal accident policies, and commercial insurance.",
      gradient: "from-turquoise-pale to-turquoise-teal"
    },
    {
      icon: PiggyBank,
      title: "Mutual Funds",
      description: "Expertly curated mutual fund investment options across equity, debt, and hybrid categories.",
      gradient: "from-turquoise-teal to-turquoise-dark"
    }
  ];

  const coreValues = [
    {
      icon: Heart,
      title: "Respect",
      description: "We treat our employees, customers, and partners with dignity, fairness, and professionalism."
    },
    {
      icon: Award,
      title: "Integrity",
      description: "We conduct all business with honesty, transparency, and the highest ethical standards."
    },
    {
      icon: TrendingUp,
      title: "Empowerment",
      description: "We foster a culture of ownership, encouraging our team members to take initiative and grow."
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in giving back to society and upholding our corporate social responsibility."
    }
  ];

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
              About <span className="text-turquoise-light glow-effect">Us</span>
            </h1>
            <p className="text-2xl text-white/90 leading-relaxed mb-4">
              "Confidence in every moment, care in every plan"
            </p>
            <p className="text-2xl text-white/90 leading-relaxed">
              "We insure your dreams with clarity and commitment."
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="mb-8 text-4xl font-bold text-turquoise-dark">About Confidence Financial Services</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="bg-gradient-to-br from-turquoise-light/20 to-turquoise-pale/20 rounded-3xl p-8 backdrop-blur-sm border border-turquoise-light/30">
                    <img 
                      src="/assets/abt_bg.webp" 
                      alt="About Us" 
                      className="w-full h-80 object-cover rounded-2xl shadow-turquoise"
                    />
                  </div>
                </div>
                <div className="text-left">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Confidence Financial Services is a Chennai-based financial solutions firm, established with a commitment to deliver reliable, customer-centric services across the banking and financial sector.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Serving clients across Tamil Nadu, we specialize in Insurance Marketing, Mutual Fund Distribution, and comprehensive Banking and Financial Products.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our core belief is simple: to offer only the best, most suitable solutions tailored precisely to each customer's needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-turquoise-pale/50 to-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-16 text-4xl font-bold text-center text-turquoise-dark">Our Service Offerings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-turquoise transition-all duration-500 hover:scale-105 bg-white/80 backdrop-blur-sm border border-turquoise-light/30">
                  <CardContent className="p-8 text-center">
                    <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="mb-4 text-xl font-bold text-turquoise-dark">{service.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Strategy */}
      <section className="py-20 bg-gradient-to-r from-turquoise-dark via-turquoise-teal to-turquoise-medium relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-turquoise-light/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-turquoise-pale/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-16 text-4xl font-bold text-center text-white">Company Strategy</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="bg-white/95 backdrop-blur-sm border-turquoise-light/30 hover:shadow-turquoise transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Target className="w-16 h-16 mx-auto mb-6 text-turquoise-teal" />
                  <h3 className="mb-4 text-2xl font-bold text-turquoise-dark">Purpose</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To be a leader in Insurance, Financial Products Marketing and Distribution Services by delivering state-of-the-art solutions.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur-sm border-turquoise-light/30 hover:shadow-turquoise transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Eye className="w-16 h-16 mx-auto mb-6 text-turquoise-medium" />
                  <h3 className="mb-4 text-2xl font-bold text-turquoise-dark">Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To consistently provide top-notch services and best-in-class products that exceed customer expectations.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur-sm border-turquoise-light/30 hover:shadow-turquoise transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Award className="w-16 h-16 mx-auto mb-6 text-turquoise-teal" />
                  <h3 className="mb-4 text-2xl font-bold text-turquoise-dark">Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To build lifelong relationships with our customers through continuous innovation and customer-first approach.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto max-w-6xl">
          <h2 className="mb-16 text-4xl font-bold text-center text-turquoise-dark">Meet Our Leadership Team</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {teamMembers.map((member) => (
              <Card key={member.id} className="group hover:shadow-turquoise transition-all duration-300 bg-white/80 backdrop-blur-sm border border-turquoise-light/30">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-48 h-64 bg-gradient-to-br from-turquoise-light/20 to-turquoise-pale/20 rounded-2xl flex items-center justify-center border-2 border-turquoise-light/30 overflow-hidden">
                      <img
                        src={member.imageSrc}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-turquoise-dark mb-2">{member.name}</h3>
                      <p className="text-lg font-semibold text-turquoise-teal mb-2">{member.role}</p>
                      <span className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-turquoise-light/20 to-turquoise-pale/20 text-turquoise-dark text-sm font-medium rounded-full border border-turquoise-light/30">
                        {member.experience}
                      </span>
                      <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-turquoise-pale/50 to-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-16 text-4xl font-bold text-center text-turquoise-dark">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <Card key={index} className="group hover:shadow-turquoise transition-all duration-300 border-turquoise-light/30 hover:border-turquoise-teal bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-turquoise-teal to-turquoise-medium rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-turquoise-dark">{value.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-turquoise-dark via-turquoise-teal to-turquoise-medium relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-turquoise-light/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-turquoise-pale/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6 text-4xl font-bold text-white">Ready to Start Your Financial Journey?</h2>
            <p className="mb-8 text-xl text-white/90 leading-relaxed">
              Let us help you make confident, well-informed financial decisions for a secure future.
            </p>
            <Link to="/contact">
              <Button className="px-12 py-4 text-lg bg-gradient-to-r from-turquoise-light to-turquoise-pale hover:from-turquoise-pale hover:to-turquoise-light text-turquoise-dark font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Contact Us Today
              </Button>
            </Link>
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

export default About;
