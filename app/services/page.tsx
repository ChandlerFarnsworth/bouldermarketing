"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Bot, Hash, Palette, Check, Sparkles } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";

const services = [
  {
    id: "website-development",
    icon: Code,
    title: "Website Development",
    description: "Modern, fast websites built to convert.",
    features: [
      "E-commerce stores with secure checkout",
      "Business & portfolio websites",
      "Personal websites & landing pages",
      "Responsive, SEO-optimized, easy to manage",
    ],
  },
  {
    id: "app-development",
    icon: Smartphone,
    title: "App Development",
    description: "Custom apps from idea to launch.",
    features: [
      "Custom design & build",
      "Deployment handled for you",
      "Clean code you own",
      "Ongoing support available",
    ],
  },
  {
    id: "ai-automation",
    icon: Bot,
    title: "AI Social Automation",
    description: "You approve, we publish.",
    features: [
      "AI-drafted posts from your ideas",
      "One-tap approval workflow",
      "Auto-publishing to your platforms",
      "Consistent presence, zero busywork",
    ],
  },
  {
    id: "social-media",
    icon: Hash,
    title: "Social Media Management",
    description: "Purposeful content that grows your presence.",
    features: [
      "Content strategy",
      "Regular posting schedule",
      "Audience engagement",
      "Performance analytics",
    ],
  },
  {
    id: "brand-identity",
    icon: Palette,
    title: "Brand Identity",
    description: "Visuals that communicate with clarity.",
    features: [
      "Logo design & refinement",
      "Color & typography",
      "Brand usage guidelines",
    ],
  },
  {
    id: "founder-offer",
    icon: Sparkles,
    title: "Founder Offer",
    description: "First 10 personal websites — $100 flat.",
    features: [
      "One-time payment, no recurring fees",
      "You own the site, code & domain",
      "Only 10 spots available",
    ],
    highlight: true,
  },
];

const pricing = [
  {
    title: "Project-Based",
    subtitle: "Perfect for specific needs",
    price: null,
    features: [
      "Defined scope and timeline",
      "One-time investment",
      "Focused deliverables",
    ],
    cta: "Get a Quote",
    featured: false,
  },
  {
    title: "Personal Website",
    subtitle: "Founder offer — first 10 clients",
    price: "$100",
    features: [
      "Custom, mobile-friendly site",
      "One-time payment — no recurring fees",
      "You own the site, code & domain",
      "Domain registration paid by you (~$10–20/yr)",
    ],
    cta: "Claim Your Spot",
    featured: true,
  },
  {
    title: "Monthly Retainer",
    subtitle: "Ongoing marketing support",
    price: null,
    features: [
      "Consistent brand presence",
      "AI-powered content pipeline",
      "Performance analytics",
    ],
    cta: "Start a Conversation",
    featured: false,
  },
];

export default function Services() {
  return (
    <>
      <PageHero
        label="What We Offer"
        title="Apps, Websites & Marketing"
        description="Development and marketing services built solid — and priced for small businesses."
      />

      {/* Services Grid */}
      <section className="py-16 bg-bg">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={`rounded-3xl p-6 border transition-all scroll-mt-32 hover:-translate-y-1 ${
                  service.highlight
                    ? "bg-white border-primary"
                    : "bg-white border-line hover:border-primary"
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 gradient-primary rounded-xl">
                    <service.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold leading-tight">{service.title}</h3>
                    <p className="text-text-medium text-sm">{service.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-baseline gap-2.5 text-sm text-text-dark">
                      <Check size={14} className="text-primary flex-shrink-0 translate-y-0.5" />
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">Flexible Solutions</h2>
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
                    ? "border-2 border-primary pt-12"
                    : "border border-line hover:-translate-y-1"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap px-6 py-2 gradient-primary text-white text-xs font-semibold uppercase tracking-wider rounded-full">
                    Founder Offer — 10 Spots
                  </div>
                )}

                <h3 className="text-2xl font-display font-bold mb-2 mt-2">{plan.title}</h3>
                {plan.price && (
                  <div className="text-5xl font-display font-bold text-primary mb-2">
                    {plan.price}
                  </div>
                )}
                <p className="text-text-medium text-sm mb-6">{plan.subtitle}</p>

                <ul className="space-y-4 mb-8 text-left border-t border-b border-line py-6">
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
                className="bg-white border-2 border-white text-primary hover:bg-white/90 hover:border-white font-semibold px-8 py-3 rounded-full transition-all inline-flex items-center justify-center gap-2"
              >
                Get in Touch
                <span>→</span>
              </Button>
              <Button 
                href="/portfolio" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-text-dark hover:border-white font-semibold px-8 py-3 rounded-full transition-all inline-flex items-center justify-center"
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