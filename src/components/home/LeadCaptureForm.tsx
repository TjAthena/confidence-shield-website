
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/sonner";

const LeadCaptureForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Thank you for your interest! Our advisor will contact you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: ""
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-16 bg-[#001F3F] text-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold">Ready to Secure Your Future?</h2>
              <p className="mb-6 text-gray-300">
                Get personalized guidance from our financial experts. Fill out the form, and we'll help you find the perfect financial protection plan for your needs.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-6 h-6 mr-2 text-center bg-[#00C853] rounded-full">✓</span>
                  <span>Free consultation with our experts</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-6 h-6 mr-2 text-center bg-[#00C853] rounded-full">✓</span>
                  <span>Compare multiple plans from top providers</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-6 h-6 mr-2 text-center bg-[#00C853] rounded-full">✓</span>
                  <span>Tailored recommendations for your needs</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-xl font-semibold text-[#001F3F]">Request a Callback</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-gray-700">Full Name</Label>
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
                  <Label htmlFor="email" className="text-gray-700">Email Address</Label>
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
                <div>
                  <Label htmlFor="phone" className="text-gray-700">Phone Number</Label>
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
                  <Label htmlFor="interest" className="text-gray-700">I'm interested in</Label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-3 py-2 mt-1 text-black bg-white border border-gray-300 rounded-md"
                    required
                  >
                    <option value="" disabled>Select your interest</option>
                    <option value="term-insurance">Term Insurance</option>
                    <option value="health-insurance">Health Insurance</option>
                    <option value="vehicle-insurance">Vehicle Insurance</option>
                    <option value="investments">Investments</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-[#00C853] hover:bg-[#00C853]/90 text-white" 
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting..." : "Request a Callback"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureForm;
