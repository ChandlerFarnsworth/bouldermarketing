"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Calendar, Instagram, Linkedin } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    service: "",
    message: "",
    subscribe: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Formspree endpoint - you'll need to replace this with your actual endpoint
    const formspreeEndpoint = "https://formspree.io/f/xlglolrn";
    
    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Success! Redirect to thank you page
        window.location.href = "/thank-you";
      } else {
        alert("Something went wrong. Please try again.");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again.");
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <>
      <PageHero
        label="Get In Touch"
        title="Let's Build Something Together"
        description="Ready to transform your online presence? We're here to help bring your vision to life."
      />

      <section className="py-20 bg-bg">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-lg"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-display font-bold mb-2">Send Us a Message</h3>
                <p className="text-text-medium">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field - hidden from users, catches bots */}
                <input
                  type="text"
                  name="_gotcha"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-text-dark mb-2"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pl-10 border-2 border-primary/20 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-text-dark mb-2"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pl-10 border-2 border-primary/20 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="business"
                    className="block text-sm font-semibold text-text-dark mb-2"
                  >
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full px-4 py-3 pl-10 border-2 border-primary/20 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                    placeholder="Your business name (optional)"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-semibold text-text-dark mb-2"
                  >
                    What are you looking for? <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 pl-10 border-2 border-primary/20 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="website">Website Design</option>
                    <option value="social">Social Media Management</option>
                    <option value="branding">Brand Identity</option>
                    <option value="strategy">Marketing Strategy</option>
                    <option value="content">Content Creation</option>
                    <option value="other">Other/Not Sure Yet</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-text-dark mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-primary/20 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none"
                    placeholder="Tell us about your project or ask us a question..."
                  />
                </div>

                <div>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="subscribe"
                      checked={formData.subscribe}
                      onChange={handleChange}
                      className="w-5 h-5 text-primary border-2 border-primary/20 rounded focus:ring-4 focus:ring-primary/10"
                    />
                    <span className="text-text-medium text-sm">
                      Subscribe to our newsletter for marketing tips and updates
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white font-semibold px-8 py-4 rounded-2xl hover:bg-primary-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <span>→</span>}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-xl font-display font-bold mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center gradient-primary rounded-xl text-white">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email Us</h4>
                      <a
                        href="mailto:chandler@bouldermarketing.net"
                        className="text-primary hover:text-primary-dark text-sm"
                      >
                        chandler@bouldermarketing.net
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center gradient-primary rounded-xl text-white">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Response Time</h4>
                      <p className="text-text-medium text-sm">
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center gradient-primary rounded-xl text-white">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Location</h4>
                      <p className="text-text-medium text-sm">Boulder, Colorado</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-primary/10">
                  <h4 className="font-semibold mb-4">Connect With Us</h4>
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com/bouldermarketing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 flex items-center justify-center bg-primary/10 border-2 border-primary rounded-full text-primary hover:bg-primary hover:text-white hover:-translate-y-1 transition-all"
                      aria-label="Instagram"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="https://linkedin.com/company/boulder-marketing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 flex items-center justify-center bg-primary/10 border-2 border-primary rounded-full text-primary hover:bg-primary hover:text-white hover:-translate-y-1 transition-all"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}