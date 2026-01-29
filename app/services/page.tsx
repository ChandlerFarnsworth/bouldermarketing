"use client";

import { motion } from "framer-motion";
import { Code, Hash, Palette, TrendingUp, Camera, Check } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionBadge from "@/components/ui/SectionBadge";
import Button from "@/components/ui/Button";

const services = [
  {
    icon: Code,
    title: "Website Design",
    description: "Clean, modern, and easy to manage websites built to convert visitors into customers.",
    features: [
      "Responsive design for all devices",
      "SEO-optimized structure",
      "Easy content management",
      "Brand-aligned user experience",
    ],
  },
  {
    icon: Hash,
    title: "Social Media Management",
    description: "Consistent, purposeful content that engages your audience and grows your online presence.",
    features: [
      "Content strategy development",
      "Regular posting schedule",
      "Audience engagement",
      "Performance analytics",
    ],
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Logos, colors, and visuals that communicate your mission with clarity and purpose.",
    features: [
      "Logo design & refinement",
      "Color palette selection",
      "Typography guidance",
      "Brand usage guidelines",
    ],
  },
  {
    icon: TrendingUp,
    title: "Marketing Strategy",
    description: "Clarity on your audience, message, and growth path to achieve meaningful business results.",
    features: [
      "Audience identification",
      "Competitive analysis",
      "Channel optimization",
      "ROI-focused planning",
    ],
  },
  {
    icon: Camera,
    title: "Content Creation",
    description: "Photo, video, and copywriting tailored to your brand voice and audience preferences.",
    features: [
      "Professional photography",
      "Engaging video content",
      "Conversion-focused copy",
      "Multi-platform optimization",
    ],
  },
];

const pricing = [
  {
    title: "Project-Based",
    subtitle: "Perfect for specific needs",
    features: [
      "Defined scope and timeline",
      "One-time investment",
      "Focused deliverables",
    ],
    cta: "Get a Quote",
    featured: false,
  },
  {
    title: "Monthly Retainer",
    subtitle: "Ongoing marketing support",
    features: [
      "Consistent brand presence",
      "Regular content creation",
      "Performance analytics",
    ],
    cta: "Start a Conversation",
    featured: true,
  },
  {
    title: "Consultation",
    subtitle: "Expert guidance",
    features: [
      "Strategic direction",
      "Implementation guidance",
      "Action-oriented advice",
    ],
    cta: "Book a Session",
    featured: false,
  },
];

export default function Services() {
  return (
    <>
      <PageHero
        label="What We Offer"
        title="Strategic Marketing Solutions"
        description="Simple, affordable marketing services — done with purpose."
      />

      {/* Services Grid */}
      <section className="py-16 bg-bg">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 border-2 border-primary/20 hover:border-primary hover:-translate-y-2 hover:shadow-xl transition-all"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 gradient-primary rounded-2xl mb-6 shadow-lg">
                  <service.icon size={36} className="text-white" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
                <p className="text-text-medium mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-text-dark">
                      <Check size={16} className="text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom 2 services - centered */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
            {services.slice(3).map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 border-2 border-primary/20 hover:border-primary hover:-translate-y-2 hover:shadow-xl transition-all"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 gradient-primary rounded-2xl mb-6 shadow-lg">
                  <service.icon size={36} className="text-white" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
                <p className="text-text-medium mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-text-dark">
                      <Check size={16} className="text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-b from-white to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Flexible Solutions</h2>
            <p className="text-lg text-text-medium max-w-2xl mx-auto">
              Choose the approach that best fits your business needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white rounded-3xl p-8 text-center transition-all ${
                  plan.featured
                    ? "border-2 border-primary shadow-2xl scale-105"
                    : "border-2 border-primary/10 shadow-md hover:-translate-y-2 hover:shadow-xl"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 gradient-primary text-white text-sm font-bold uppercase tracking-wider rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-display font-bold mb-2 mt-2">{plan.title}</h3>
                <p className="text-text-medium text-sm mb-6">{plan.subtitle}</p>

                <ul className="space-y-4 mb-8 text-left border-t border-b border-primary/10 py-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-text-dark">
                      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                        <Check size={14} className="text-primary" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="/contact"
                  variant={plan.featured ? "primary" : "outline"}
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 gradient-overlay text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-[20%] left-[20%] w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-[20%] right-[20%] w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Transform Your Online Presence?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let&apos;s build something meaningful together that brings your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/contact" 
                className="bg-white border-2 border-white text-primary hover:bg-white/90 hover:border-white font-semibold px-8 py-3 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all inline-flex items-center justify-center gap-2"
              >
                Get in Touch
                <span>→</span>
              </Button>
              <Button 
                href="/portfolio" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-text-dark hover:border-white font-semibold px-8 py-3 rounded-2xl transition-all inline-flex items-center justify-center"
              >
                View Our Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}