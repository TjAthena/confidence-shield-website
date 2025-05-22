
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/sonner";

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
  
  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4 text-4xl font-bold text-[#001F3F]">Contact Us</h1>
            <p className="mb-6 text-lg text-gray-600">
              Have questions or need personalized advice? We're here to help you make informed financial decisions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <div className="mb-10">
                  <h2 className="mb-6 text-2xl font-semibold">Get in Touch</h2>
                  <p className="mb-6 text-gray-600">
                    We're available to answer your questions and provide guidance on all financial protection and investment matters.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="p-5 border border-gray-200 rounded-lg">
                    <h3 className="mb-2 text-lg font-medium">Office Address</h3>
                    <address className="not-italic text-gray-600">
                      <p>123 Financial Street</p>
                      <p>Mumbai, Maharashtra, 400001</p>
                      <p>India</p>
                    </address>
                  </div>
                  
                  <div className="p-5 border border-gray-200 rounded-lg">
                    <h3 className="mb-2 text-lg font-medium">Contact Information</h3>
                    <div className="space-y-2 text-gray-600">
                      <p>
                        <strong>Phone:</strong> +91 98765 43210
                      </p>
                      <p>
                        <strong>Email:</strong> info@confidencefinancial.com
                      </p>
                      <p>
                        <strong>Working Hours:</strong> Mon-Sat: 9am - 6pm
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-5 border border-gray-200 rounded-lg">
                    <h3 className="mb-2 text-lg font-medium">Connect With Us</h3>
                    <div className="flex space-x-4">
                      <a 
                        href="#" 
                        className="flex items-center justify-center w-10 h-10 text-gray-600 transition-colors rounded-full bg-gray-50 hover:bg-[#00BFFF] hover:text-white"
                      >
                        F
                      </a>
                      <a 
                        href="#" 
                        className="flex items-center justify-center w-10 h-10 text-gray-600 transition-colors rounded-full bg-gray-50 hover:bg-[#00BFFF] hover:text-white"
                      >
                        I
                      </a>
                      <a 
                        href="#" 
                        className="flex items-center justify-center w-10 h-10 text-gray-600 transition-colors rounded-full bg-gray-50 hover:bg-[#00BFFF] hover:text-white"
                      >
                        T
                      </a>
                      <a 
                        href="#" 
                        className="flex items-center justify-center w-10 h-10 text-gray-600 transition-colors rounded-full bg-gray-50 hover:bg-[#00BFFF] hover:text-white"
                      >
                        L
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <div className="p-8 bg-white border border-gray-200 rounded-lg shadow-sm">
                  <h2 className="mb-6 text-2xl font-semibold">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          className="mt-1"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your Email"
                          className="mt-1"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your Phone Number"
                          className="mt-1"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject">Subject</Label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md"
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
                      <Label htmlFor="message">Your Message</Label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        rows={4}
                        className="w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md"
                        required
                      ></textarea>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="px-10 bg-[#00C853] hover:bg-[#00C853]/90" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="mb-6 text-2xl font-semibold">Find Us Here</h2>
            <div className="w-full h-64 bg-gray-300 rounded-lg">
              {/* Google Map would go here */}
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-600">Map Location Goes Here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
