
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
    
    // Simulate form submission
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
      ]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "help@gocfs.in",
        "admin@gocfs.in"
      ]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday – Friday: 9:00 AM – 6:00 PM",
        "Saturday: 10:00 AM – 2:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  const socialMedia = [
    { icon: MessageSquare, name: "WhatsApp", color: "green" },
    { icon: Facebook, name: "Facebook", color: "blue" },
    { icon: Instagram, name: "Instagram", color: "cyan" },
    { icon: Linkedin, name: "LinkedIn", color: "blue" },
    { icon: Youtube, name: "YouTube", color: "green" }
  ];
  
  return (
    <div className="font-['Calibri'] bg-gradient-to-br from-blue-50 via-cyan-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-5xl font-bold text-white drop-shadow-2xl">
              <span className="text-cyan-300 glow">Contact Us</span>
            </h1>
            <h2 className="mb-6 text-3xl font-semibold text-blue-100">We're Here to Help!</h2>
            <p className="mb-8 text-xl text-blue-100 leading-relaxed">
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
              <h2 className="text-4xl font-bold text-blue-900 mb-4">Get in Touch</h2>
              <p className="text-lg text-gray-700">We're available to answer your questions and provide guidance on all financial matters.</p>
            </div>
            
            <Card className="mb-12 bg-gradient-to-br from-blue-50 to-cyan-50 border-cyan-200 hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mr-6 shadow-lg">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900">Office Address</h3>
                    <p className="text-cyan-600 font-semibold">Confidence Financial Services</p>
                  </div>
                </div>
                <div className="ml-22">
                  <address className="not-italic text-gray-700 text-lg leading-relaxed">
                    <p className="font-semibold text-blue-800">118, Karuneegar Street, Adambakkam</p>
                    <p>Chennai, Tamilnadu, 600 088, India</p>
                  </address>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-cyan-200 hover:border-blue-400 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="mb-4 text-xl font-bold text-center text-blue-900">{info.title}</h3>
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
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="bg-white/90 backdrop-blur-sm border-cyan-200 shadow-2xl">
                  <CardContent className="p-8">
                    <h2 className="mb-6 text-3xl font-bold text-blue-900">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div>
                          <Label htmlFor="name" className="text-blue-800 font-semibold">Full Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="mt-2 border-cyan-200 focus:border-blue-500 bg-white/80"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-blue-800 font-semibold">Email Address</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="mt-2 border-cyan-200 focus:border-blue-500 bg-white/80"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div>
                          <Label htmlFor="phone" className="text-blue-800 font-semibold">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Your Phone Number"
                            className="mt-2 border-cyan-200 focus:border-blue-500 bg-white/80"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="subject" className="text-blue-800 font-semibold">Subject</Label>
                          <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-3 py-2 mt-2 bg-white/80 border border-cyan-200 rounded-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
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
                        <Label htmlFor="message" className="text-blue-800 font-semibold">Your Message</Label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="How can we help you?"
                          rows={5}
                          className="w-full px-3 py-2 mt-2 bg-white/80 border border-cyan-200 rounded-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                          required
                        ></textarea>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full py-3 text-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" 
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
                <Card className="bg-white/90 backdrop-blur-sm border-cyan-200 shadow-2xl">
                  <CardContent className="p-8">
                    <h3 className="mb-6 text-2xl font-bold text-blue-900">Our Social Media Contacts and Pages</h3>
                    <p className="mb-8 text-gray-700">Follow us on social media for updates and financial tips.</p>
                    
                    <div className="space-y-4">
                      {socialMedia.map((social, index) => (
                        <a 
                          key={index}
                          href="#" 
                          className="flex items-center p-4 bg-gradient-to-r from-white to-blue-50 rounded-lg border border-cyan-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg group"
                        >
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                            social.color === 'green' ? 'bg-gradient-to-br from-green-500 to-green-600' :
                            social.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                            social.color === 'cyan' ? 'bg-gradient-to-br from-cyan-500 to-cyan-600' :
                            'bg-gradient-to-br from-blue-500 to-blue-600'
                          } group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                            <social.icon className="w-6 h-6 text-white" />
                          </div>
                          <span className="font-semibold text-blue-900 group-hover:text-blue-700">{social.name}</span>
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
            <h2 className="mb-8 text-3xl font-bold text-blue-900">Find Us Here</h2>
            <Card className="overflow-hidden border-cyan-200 shadow-2xl">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-cyan-100 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                    <p className="text-xl text-blue-800 font-semibold">Interactive Map Coming Soon</p>
                    <p className="text-gray-600 mt-2">118, Karuneegar Street, Adambakkam, Chennai</p>
                  </div>
                </div>
              </div>
            </Card>
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

export default Contact;
