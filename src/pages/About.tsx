
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
      bio: "With over 23 years of accomplished leadership in Sales & Distribution, with a strong specialization in Insurance and investment products, Financial Planning, Strategic Planning, Business Development, and Client Relationship Management. His extensive experience spans across Insurance, Financial Services, Banking and E-Commerce, where he has consistently driven growth through innovative strategies and result-oriented execution and commitment to excellence.",
      experience: "23+ Years",
      imageSrc: "/images/kirubakaran.jpg"
    },
    {
      id: 2,
      name: "Allen Godfrey A",
      role: "Executive Director",
      bio: "Allen brings over 14 years of extensive experience in sales and marketing, with a strong specialization in insurance and investment products. His career is defined by a consistent ability to drive revenue growth through the development and execution of strategic sales initiatives and targeted marketing campaigns.",
      experience: "14+ Years",
      imageSrc: "/images/allen.jpg"

    }
  ];

  const advisoryTeam = [
    "CS S Suresh CA - Chartered Accountant",
    "TJ Pradeep - IT Consultants",
    "Adithya Ramani CA - Business Consultants",
    "SB Sabari Kishore - Interiors & Office Setups"
  ];

  const services = [
    {
      icon: DollarSign,
      title: "Financial Planning",
      description: "Personalized financial planning services including wealth management, retirement planning, and tax-saving strategies to help clients achieve long-term stability and growth."
    },
    {
      icon: Shield,
      title: "Life Insurance",
      description: "Protection plans, term insurance, endowment policies, and savings-linked life insurance solutions designed to secure your family's future and support long-term financial goals."
    },
    {
      icon: Heart,
      title: "Health Insurance",
      description: "Comprehensive medical insurance policies, including individual and family floater plans, critical illness coverage, and top-up options to safeguard against rising healthcare costs."
    },
    {
      icon: Car,
      title: "Motor Insurance",
      description: "Tailored two-wheeler and four-wheeler insurance plans, covering third-party liability, own damage, and add-on services for complete vehicle protection."
    },
    {
      icon: Home,
      title: "General Insurance",
      description: "A wide array of coverage solutions including travel insurance, home insurance, personal accident policies, and commercial insurance for businesses."
    },
    {
      icon: PiggyBank,
      title: "Mutual Funds",
      description: "Expertly curated mutual fund investment options across equity, debt, hybrid, and tax-saving categories, aligned with individual risk profiles and financial goals."
    }
  ];

  const coreValues = [
    {
      icon: Heart,
      title: "Respect",
      description: "We are committed to treating our employees, customers, and partners with dignity, fairness, and professionalism."
    },
    {
      icon: Award,
      title: "Integrity",
      description: "We conduct all business with honesty, transparency, and the highest ethical standards."
    },
    {
      icon: TrendingUp,
      title: "Empowerment",
      description: "We foster a culture of ownership, encouraging our team members to take initiative, lead with confidence, and grow."
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in giving back to society, supporting those in need, and upholding our corporate social responsibility."
    }
  ];

  const goals = [
    "Achieve Pan-India presence within two years",
    "Grow assets and investments in alignment with our business expansion",
    "Establish a reputation for fair practices and transparent processes",
    "Become a key and trusted player in the industry"
  ];

  return (
    <div className="font-['Calibri'] bg-gradient-to-br from-blue-50 via-cyan-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-[url(/public/assets/abt_bg.webp)] bg-cover bg-center bg-no-repeat relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-5xl font-bold text-white drop-shadow-2xl">
              About <span className="text-black-300 glow">Us</span>
            </h1>
            <p className="size-20px text-2xl text-blue-100 leading-relaxed">
              "Confidence in every moment, care in every plan </p>
            <p className="mb-8 size-20px text-2xl text-blue-100 leading-relaxed">
              We insure your dreams with clarity and commitment."
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="mb-8 text-4xl font-bold text-blue-900">About Confidence Financial Services</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-6 text-lg">
                  Confidence Financial Services is a Chennai-based financial solutions firm, established with a commitment to deliver reliable, customer-centric services across the banking and financial sector. Serving clients across Tamil Nadu - India, we specialize in Insurance Marketing, Mutual Fund Distribution, and the Sales & Service of a comprehensive range of Banking and Financial Products.

                  At Confidence Financial Services, our core belief is simple: to offer only the best, most suitable solutions tailored precisely to each customer's needs. Our product recommendations are based on value, reliability, and long-term benefits—never on availability alone.

                  With deep industry expertise and a commitment to ethical practices, we empower our clients to make confident, well-informed financial decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-12 text-4xl font-bold text-center text-blue-900">Our Service Offerings</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-cyan-200 hover:border-blue-400 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-center text-blue-900">{service.title}</h3>
                    <p className="text-gray-700 text-center leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Strategy */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-12 text-4xl font-bold text-center text-white">Company Strategy</h2>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              <Card className="bg-white/95 backdrop-blur-sm border-cyan-200 hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Target className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                  <h3 className="mb-4 text-2xl font-bold text-blue-900">Purpose</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To be a leader in Insurance, Financial Products Marketing and Distribution Services by delivering state-of-the-art solutions, fostering strong client relationships, and driving sustainable profitability.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur-sm border-cyan-200 hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Eye className="w-16 h-16 mx-auto mb-4 text-cyan-600" />
                  <h3 className="mb-4 text-2xl font-bold text-blue-900">Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To consistently provide top-notch services and best-in-class products that exceed customer expectations.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur-sm border-cyan-200 hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Award className="w-16 h-16 mx-auto mb-4 text-green-600" />
                  <h3 className="mb-4 text-2xl font-bold text-blue-900">Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To build lifelong relationships with our customers, offering exceptional service through continuous innovation, technology-driven solutions, and a customer-first approach.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1227px] px-4">
          <h2 className="mb-12 text-4xl font-bold text-center">Our Team</h2>

          <div className="flex flex-col gap-[60px]">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="flex flex-col md:flex-row items-start gap-10"
              >
                {/* Portrait Image Box */}
                <div className=" w-[250px] left-[50px] h-[320px] border-2 border-black flex items-center justify-center text-center font-semibold shrink-0">
                  <img
                    src={member.imageSrc}
                    alt={member.name}
                  />
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-md font-semibold text-gray-600 mb-1">
                    {member.role}
                  </p>
                  <span className="inline-block mb-4 px-3 py-1 bg-gray-200 text-gray-800 text-sm font-medium rounded-full">
                    {member.experience}
                  </span>
                  <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Team */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-4xl font-bold text-center text-blue-900">Advisory Team</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {advisoryTeam.map((advisor, index) => (
                <div key={index} className="p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-cyan-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg">
                  <p className="text-gray-700 font-medium text-center">{advisor}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-12 text-4xl font-bold text-center text-blue-900">Core Values</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {coreValues.map((value, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-cyan-200 hover:border-blue-400 bg-gradient-to-br from-white to-cyan-50">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-blue-900">{value.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-4xl font-bold text-center text-blue-900">Goals</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {goals.map((goal, index) => (
                <div key={index} className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border border-cyan-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 font-medium">{goal}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-white to-blue-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold text-blue-900">Ready to Start Your Financial Journey?</h2>
            <p className="mb-8 text-lg text-gray-700">
              Let us help you make confident, well-informed financial decisions for a secure future.
            </p>
            <Link to="/contact">
              <Button className="px-12 py-4 text-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .glow {
          text-shadow: 0 0 20px rgba(103, 232, 249, 0.5);
        }
      `}</style>
    </div>
  );
};

export default About;
