"use client";

import type React from "react";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { AnimatedSection } from "@/components/animated-section";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    services: [] as string[],
    message: "",
  });

  const services = [
    "Web Design",
    "UI UX Design",
    "Web Development",
    "SEO Optimization",
    "E-commerce Solutions",
  ];

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        services: [...prev.services, service],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        services: prev.services.filter((s) => s !== service),
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-12 w-18 h-18 border-2 border-purple-500/20 transform rotate-45 animate-spin-slow"></div>
        <div className="absolute top-1/4 right-16 w-14 h-14 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-10 h-10 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 transform rotate-12 animate-bounce-slow"></div>
        <div className="absolute top-2/3 right-1/3 w-8 h-8 bg-purple-400/30 rounded-full animate-float"></div>
        <div className="absolute bottom-24 right-12 w-12 h-12 border border-purple-500/30 transform rotate-45 animate-ping"></div>
        <div className="absolute top-1/2 left-16 w-6 h-6 bg-indigo-500/40 transform rotate-45 animate-pulse"></div>
      </div>

      <Navigation />

      <AnimatedSection>
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              I'd <span className="text-purple-400">Love to here</span> from
              you.
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Let's connect and collaborate - drop me a line and let's turn ideas
              into reality!
            </p>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="space-y-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Company Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        className="bg-gray-900 border-gray-700 text-white placeholder-gray-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Company Name
                      </label>
                      <Input
                        placeholder="Your Name"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            company: e.target.value,
                          }))
                        }
                        className="bg-gray-900 border-gray-700 text-white placeholder-gray-500"
                      />
                    </div>
                  </div>

                  {/* Email & Phone Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        className="bg-gray-900 border-gray-700 text-white placeholder-gray-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            phone: e.target.value,
                          }))
                        }
                        className="bg-gray-900 border-gray-700 text-white placeholder-gray-500"
                      />
                    </div>
                  </div>

                  {/* Services Required */}
                  <div>
                    <label className="block text-sm font-medium mb-4">
                      Services Required
                    </label>
                    <div className="grid md:grid-cols-2 gap-4">
                      {services.map((service) => (
                        <div
                          key={service}
                          className="flex items-center space-x-3"
                        >
                          <Checkbox
                            id={service}
                            checked={formData.services.includes(service)}
                            onCheckedChange={(checked) =>
                              handleServiceChange(service, checked as boolean)
                            }
                            className="border-gray-600 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                          />
                          <label
                            htmlFor={service}
                            className="text-sm text-gray-300 cursor-pointer"
                          >
                            {service}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Your Message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          message: e.target.value,
                        }))
                      }
                      className="bg-gray-900 border-gray-700 text-white placeholder-gray-500 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg font-medium transition-colors duration-300"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send a Message
                  </Button>
                </form>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-6">
                {/* Email Card */}
                <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-purple-500 transition-colors duration-300 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        You can Email Me Here
                      </h3>
                      <p className="text-gray-400">mikiyasbutu@gmail.com</p>
                    </div>
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-purple-500 transition-colors duration-300 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Give Me a Call on
                      </h3>
                      <p className="text-gray-400">+251 967 991 617</p>
                    </div>
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Location Card */}
                <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-purple-500 transition-colors duration-300 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Location</h3>
                      <p className="text-gray-400">Addis Ababa, Ethiopia</p>
                    </div>
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <FAQSection />
      </AnimatedSection>

      <Footer />
    </div>
  );
}
