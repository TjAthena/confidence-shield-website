
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Anand Sharma",
      role: "Founder & CEO",
      bio: "With over 15 years of experience in the financial services industry, Anand leads our mission to make financial protection accessible to all.",
    },
    {
      id: 2,
      name: "Priya Mehta",
      role: "Head of Insurance Advisory",
      bio: "Priya specializes in life and health insurance products and has helped thousands of families secure their financial future.",
    },
    {
      id: 3,
      name: "Rahul Patel",
      role: "Investment Specialist",
      bio: "Rahul is dedicated to creating personalized investment strategies that align with clients' long-term financial goals.",
    },
  ];

  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4 text-4xl font-bold text-[#001F3F]">About Confidence Financial</h1>
            <p className="mb-6 text-lg text-gray-600">
              We empower individuals and families to make informed financial decisions that secure their future.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-3xl font-semibold text-[#001F3F]">Our Story</h2>
            <div className="mb-10 space-y-6 text-gray-700">
              <p>
                Founded in 2012, Confidence Financial Services began with a simple mission: to help people navigate the complex world of insurance and investments with confidence and clarity.
              </p>
              <p>
                We recognized that many individuals and families struggle to find the right financial protection plans due to complicated jargon, overwhelming options, and lack of personalized guidance.
              </p>
              <p>
                Today, we have helped over 10,000 clients secure their financial future through tailored insurance solutions and investment strategies. Our team of experienced advisors is committed to understanding your unique needs and providing honest, transparent advice.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="mb-8 text-3xl font-semibold text-[#001F3F]">Our Values</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-3 text-xl font-semibold text-[#00BFFF]">Trust</h3>
                    <p className="text-gray-600">
                      We build long-term relationships based on transparency and integrity.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-3 text-xl font-semibold text-[#00BFFF]">Education</h3>
                    <p className="text-gray-600">
                      We empower clients with knowledge to make informed financial decisions.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-3 text-xl font-semibold text-[#00BFFF]">Protection</h3>
                    <p className="text-gray-600">
                      We ensure your financial future is secure with the right coverage.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="mb-8 text-3xl font-semibold text-[#001F3F]">Our Team</h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {teamMembers.map(member => (
                  <Card key={member.id}>
                    <CardContent className="p-6">
                      <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full"></div>
                      <h3 className="mb-1 text-xl font-semibold text-center">{member.name}</h3>
                      <p className="mb-4 text-sm text-center text-gray-500">{member.role}</p>
                      <p className="text-gray-600">{member.bio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="py-10 text-center bg-gray-50 rounded-lg">
              <h2 className="mb-6 text-2xl font-semibold">Why Choose Confidence Financial?</h2>
              <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-3">
                <div className="p-4">
                  <div className="flex justify-center mb-4">
                    <div className="flex items-center justify-center w-12 h-12 text-white rounded-full bg-[#001F3F]">1</div>
                  </div>
                  <h3 className="mb-2 text-lg font-medium">Personalized Approach</h3>
                  <p className="text-gray-600">Tailored solutions based on your unique financial situation and goals.</p>
                </div>
                <div className="p-4">
                  <div className="flex justify-center mb-4">
                    <div className="flex items-center justify-center w-12 h-12 text-white rounded-full bg-[#001F3F]">2</div>
                  </div>
                  <h3 className="mb-2 text-lg font-medium">Unbiased Advice</h3>
                  <p className="text-gray-600">We compare products across multiple providers to find what's best for you.</p>
                </div>
                <div className="p-4">
                  <div className="flex justify-center mb-4">
                    <div className="flex items-center justify-center w-12 h-12 text-white rounded-full bg-[#001F3F]">3</div>
                  </div>
                  <h3 className="mb-2 text-lg font-medium">Ongoing Support</h3>
                  <p className="text-gray-600">Our relationship doesn't end after you purchase a policy or plan.</p>
                </div>
              </div>
              <Link to="/contact">
                <Button className="bg-[#00C853] hover:bg-[#00C853]/90">Contact Us Today</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
