"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Bot, Layers, DollarSign, HandHeart, Check, Zap } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionBadge from "@/components/ui/SectionBadge";

const services = [
  {
    icon: Code,
    title: "Website Development",
    description: "E-commerce stores, business sites, and personal websites — built to convert.",
    href: "/services#website-development",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Custom apps designed, built, and deployed for your business.",
    href: "/services#app-development",
  },
  {
    icon: Bot,
    title: "AI Social Automation",
    description: "AI drafts your posts, you approve, and they publish to your platforms.",
    href: "/services#ai-automation",
  },
];

const features = [
  {
    icon: Layers,
    title: "Full-Stack Capability",
    description: "Websites and apps, from design to deployment",
  },
  {
    icon: DollarSign,
    title: "Fair Pricing",
    description: "Honest pricing, transparent process, no surprises",
  },
  {
    icon: HandHeart,
    title: "Built to Last",
    description: "Quality work with long-term value, rooted in integrity",
  },
];

const stats = [
  { number: "100%", label: "Client Satisfaction" },
  { number: "7+", label: "Businesses Transformed" },
  { number: "2+", label: "Years of Excellence" },
];

const offerTerms = [
  "$100 one-time payment — no recurring fees, ever",
  "Custom design, mobile-friendly, SEO-ready",
  "You own everything — site, code, and domain",
];

export default function Home() {
  return (
    <>
      {/* Announcement Bar (sits directly below the fixed nav) */}
      <div className="mt-[73px] gradient-primary text-white">
        <a
          href="#founder-offer"
          className="container mx-auto px-4 py-2.5 flex items-center justify-center gap-2 text-sm hover:opacity-85 transition-opacity"
        >
          <Zap size={16} className="text-yellow-200 flex-shrink-0" />
          <span>
            <strong>Founder Offer:</strong> First 10 personal websites for $100 flat — no recurring fees
          </span>
          <span aria-hidden>→</span>
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center gradient-overlay text-white overflow-hidden pt-12 pb-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-[20%] left-[20%] w-72 h-72 bg-white rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-[30%] right-[10%] w-48 h-48 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute top-[50%] right-[30%] w-36 h-36 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold mb-6 leading-tight">
                Marketing Built<br />
                on the <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">Rock</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/95">
                Apps, websites, and AI-powered marketing for small businesses — built solid, built to last.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  href="/contact" 
                  className="bg-white border-2 border-white text-primary hover:bg-white/90 hover:border-white font-semibold px-8 py-3 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all inline-flex items-center justify-center gap-2"
                >
                  Start Your Project
                  <span>→</span>
                </Button>
                <Button 
                  href="/services" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-text-dark hover:border-white font-semibold px-8 py-3 rounded-2xl transition-all inline-flex items-center justify-center"
                >
                  Explore Services
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative h-[400px] hidden lg:block"
            >
              <div className="absolute top-[10%] right-[10%] w-72 h-72 bg-white/20 backdrop-blur-md rounded-full animate-float" />
              <div className="absolute bottom-[5%] right-[30%] w-48 h-48 bg-white/15 backdrop-blur-md rounded-full animate-float" style={{ animationDelay: "2s" }} />
              <div className="absolute top-[40%] right-[5%] w-36 h-36 bg-white/10 backdrop-blur-md rounded-full animate-float" style={{ animationDelay: "4s" }} />
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-20 z-10">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,0 C300,60 600,60 900,20 L1200,40 L1200,120 L0,120 Z" fill="#e7decf" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <SectionBadge>What We Do</SectionBadge>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Services</h2>
            <p className="text-lg text-text-medium max-w-2xl mx-auto">
              Strategy-driven solutions for purpose-minded businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-transparent rounded-3xl p-8 text-center border-2 border-primary hover:bg-white hover:border-primary hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              >
                <div className="inline-flex items-center justify-center w-24 h-24 gradient-primary rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg group-hover:shadow-xl">
                  <service.icon size={40} className="text-white" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-text-medium mb-6">{service.description}</p>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 border-2 border-primary rounded-full text-primary font-bold group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all">
                  →
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/services" variant="outline" icon>
              View all services
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionBadge>Why Choose Us</SectionBadge>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Digital Foundations That Last</h2>
              <p className="text-lg text-text-medium mb-8 leading-relaxed">
                From apps to e-commerce stores, we combine modern technology with strategy that puts your business first—no cookie-cutter packages, just honest work tailored to your needs.
              </p>

              <div className="space-y-4 mb-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary/10 border-2 border-primary rounded-xl text-primary">
                      <feature.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold mb-1">{feature.title}</h4>
                      <p className="text-text-medium text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Button href="/about" variant="secondary" icon>
                Learn More About Us
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid gap-6"
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="glass-card p-6 text-center hover:-translate-y-2 transition-all bg-gradient-to-br from-primary/10 to-primary-dark/5 border-2 border-primary"
                >
                  <div className="text-4xl font-display font-extrabold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-text-medium font-semibold">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Offer Section */}
      <section id="founder-offer" className="py-16 bg-bg scroll-mt-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto bg-white rounded-3xl border-2 border-primary shadow-2xl p-8 md:p-12 text-center"
          >
            <div className="inline-block px-5 py-2 gradient-primary text-white text-sm font-bold uppercase tracking-wider rounded-full shadow-lg mb-6">
              Founder Offer — Limited to 10 Spots
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Your Personal Website for{" "}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">$100</span>
            </h2>
            <p className="text-lg text-text-medium mb-8 max-w-lg mx-auto">
              We&apos;re launching our website development service, and the first 10 clients get a professionally built personal website for a one-time flat fee.
            </p>
            <ul className="max-w-md mx-auto text-left space-y-3 mb-4">
              {offerTerms.map((term) => (
                <li key={term} className="flex items-baseline gap-3 text-text-dark">
                  <Check size={16} className="text-primary flex-shrink-0 translate-y-0.5" />
                  <span>{term}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-text-medium mb-8">
              Domain registration paid separately by you (typically $10–20/year).
            </p>
            <Button href="/contact" icon>
              Claim Your Spot
            </Button>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Ready to Grow Your Business?</h2>
            <p className="text-xl text-white/90 mb-8">Let&apos;s build something meaningful together.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/contact" 
                className="bg-white border-2 border-white text-primary hover:bg-white/90 hover:border-white font-semibold px-8 py-3 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all inline-flex items-center justify-center gap-2"
              >
                Get Started
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