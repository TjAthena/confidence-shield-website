
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/sonner";
import { Phone, Mail, MapPin, Clock, MessageSquare, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast.success("Your message has been sent. We'll get back to you soon!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "+91 - 44 - 4586 7799",
        "+91 - 98400 21477",
        "+91 - 98411 41541"
      ],
      gradient: "from-turquoise-dark to-turquoise-teal"
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "help@gocfs.in",
        "admin@gocfs.in"
      ],
      gradient: "from-turquoise-teal to-turquoise-medium"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday – Friday: 9:00 AM – 6:00 PM",
        "Saturday: 10:00 AM – 2:00 PM",
        "Sunday: Closed"
      ],
      gradient: "from-turquoise-medium to-turquoise-light"
    }
  ];

  const socialMedia = [
    { icon: MessageSquare, name: "WhatsApp", gradient: "from-green-500 to-green-600" },
    { icon: Facebook, name: "Facebook", gradient: "from-blue-500 to-blue-600" },
    { icon: Instagram, name: "Instagram", gradient: "from-purple-500 to-pink-500" },
    { icon: Linkedin, name: "LinkedIn", gradient: "from-blue-600 to-blue-700" },
    { icon: Youtube, name: "YouTube", gradient: "from-red-500 to-red-600" }
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
              <span className="text-turquoise-light glow-effect">Contact Us</span>
            </h1>
            <h2 className="mb-6 text-3xl font-semibold text-white/90">We're Here to Help!</h2>
            <p className="mb-8 text-xl text-white/80 leading-relaxed">
              Have questions or need assistance? Reach out to us—we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Office Address Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-turquoise-dark mb-4">Get in Touch</h2>
              <p className="text-lg text-gray-700">We're available to answer your questions and provide guidance on all financial matters.</p>
            </div>
            
            <Card className="mb-12 bg-gradient-to-br from-turquoise-light/20 to-turquoise-pale/20 border-turquoise-light/30 hover:shadow-turquoise transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-turquoise-teal to-turquoise-medium rounded-full flex items-center justify-center mr-6 shadow-lg">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-turquoise-dark">Office Address</h3>
                    <p className="text-turquoise-teal font-semibold">Confidence Financial Services</p>
                  </div>
                </div>
                <div className="ml-22">
                  <address className="not-italic text-gray-700 text-lg leading-relaxed">
                    <p className="font-semibold text-turquoise-dark">118, Karuneegar Street, Adambakkam</p>
                    <p>Chennai, Tamilnadu, 600 088, India</p>
                  </address>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="group hover:shadow-turquoise transition-all duration-300 border-turquoise-light/30 hover:border-turquoise-teal bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${info.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="mb-4 text-xl font-bold text-center text-turquoise-dark">{info.title}</h3>
                    <div className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-700 text-center font-medium">{detail}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Social Media */}
      <section className="py-16 bg-gradient-to-br from-turquoise-pale/50 to-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="bg-white/90 backdrop-blur-sm border-turquoise-light/30 shadow-turquoise">
                  <CardContent className="p-8">
                    <h2 className="mb-6 text-3xl font-bold text-turquoise-dark">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div>
                          <Label htmlFor="name" className="text-turquoise-dark font-semibold">Full Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="mt-2 border-turquoise-light/50 focus:border-turquoise-teal bg-white/80"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-turquoise-dark font-semibold">Email Address</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="mt-2 border-turquoise-light/50 focus:border-turquoise-teal bg-white/80"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div>
                          <Label htmlFor="phone" className="text-turquoise-dark font-semibold">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Your Phone Number"
                            className="mt-2 border-turquoise-light/50 focus:border-turquoise-teal bg-white/80"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="subject" className="text-turquoise-dark font-semibold">Subject</Label>
                          <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-3 py-2 mt-2 bg-white/80 border border-turquoise-light/50 rounded-md focus:border-turquoise-teal focus:outline-none focus:ring-2 focus:ring-turquoise-light/20"
                            required
                          >
                            <option value="" disabled>Select a subject</option>
                            <option value="Term Insurance">Term Insurance</option>
                            <option value="Health Insurance">Health Insurance</option>
                            <option value="Vehicle Insurance">Vehicle Insurance</option>
                            <option value="Investment">Investments</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="message" className="text-turquoise-dark font-semibold">Your Message</Label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="How can we help you?"
                          rows={5}
                          className="w-full px-3 py-2 mt-2 bg-white/80 border border-turquoise-light/50 rounded-md focus:border-turquoise-teal focus:outline-none focus:ring-2 focus:ring-turquoise-light/20"
                          required
                        ></textarea>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full py-3 text-lg bg-gradient-to-r from-turquoise-teal to-turquoise-medium hover:from-turquoise-medium hover:to-turquoise-teal text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" 
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
              
              {/* Social Media */}
              <div className="lg:col-span-1">
                <Card className="bg-white/90 backdrop-blur-sm border-turquoise-light/30 shadow-turquoise">
                  <CardContent className="p-8">
                    <h3 className="mb-6 text-2xl font-bold text-turquoise-dark">Connect With Us</h3>
                    <p className="mb-8 text-gray-700">Follow us on social media for updates and financial tips.</p>
                    
                    <div className="space-y-4">
                      {socialMedia.map((social, index) => (
                        <a 
                          key={index}
                          href="#" 
                          className="flex items-center p-4 bg-gradient-to-r from-white to-turquoise-pale/30 rounded-lg border border-turquoise-light/30 hover:border-turquoise-teal transition-all duration-300 hover:shadow-lg group"
                        >
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 bg-gradient-to-br ${social.gradient} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                            <social.icon className="w-6 h-6 text-white" />
                          </div>
                          <span className="font-semibold text-turquoise-dark group-hover:text-turquoise-teal">{social.name}</span>
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="mb-8 text-3xl font-bold text-turquoise-dark">Find Us Here</h2>
            <Card className="overflow-hidden border-turquoise-light/30 shadow-turquoise">
              <div className="w-full h-96 bg-gradient-to-br from-turquoise-light/20 to-turquoise-pale/20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-turquoise-teal" />
                    <p className="text-xl text-turquoise-dark font-semibold">Interactive Map Coming Soon</p>
                    <p className="text-gray-600 mt-2">118, Karuneegar Street, Adambakkam, Chennai</p>
                  </div>
                </div>
              </div>
            </Card>
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

export default Contact;
