"use client";

import { motion } from "framer-motion";
import { GraduationCap, Sprout, HandHeart, Check } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionBadge from "@/components/ui/SectionBadge";
import Button from "@/components/ui/Button";

const stats = [
  { number: "100%", label: "Client Focused" },
  { number: "24+", label: "Businesses Transformed" },
  { number: "5★", label: "Client Satisfaction" },
];

const values = [
  {
    icon: GraduationCap,
    title: "Fresh Perspectives",
    description: "Modern strategies with innovative approaches.",
    features: [
      "Current digital techniques",
      "Data-driven decisions",
      "Creative problem solving",
    ],
  },
  {
    icon: Sprout,
    title: "Vision Focused",
    description: "Building your business with purpose.",
    features: [
      "Brand story development",
      "Authentic online presence",
      "Customer-centered strategy",
    ],
  },
  {
    icon: HandHeart,
    title: "Integrity Driven",
    description: "We don't just market — we mean it.",
    features: [
      "Transparent communication",
      "Ethics in every decision",
      "Long-term partnership focus",
    ],
  },
];

const process = [
  {
    number: "1",
    title: "Discover",
    description: "We start by understanding your business, values, and goals. This foundation shapes everything we do.",
  },
  {
    number: "2",
    title: "Create",
    description: "We develop a tailored strategy and begin building the assets that will bring your vision to life.",
  },
  {
    number: "3",
    title: "Implement",
    description: "We execute with excellence, ensuring every detail aligns with your brand and resonates with your audience.",
  },
  {
    number: "4",
    title: "Grow",
    description: "We measure results, refine approaches, and help your business thrive in the digital landscape.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        label="About Boulder Marketing"
        title="Purpose-Driven Marketing"
        description="We bring fresh perspectives and strategic thinking to help small businesses thrive online."
      />

      {/* Mission Section */}
      <section className="py-20 bg-bg">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionBadge>Who We Are</SectionBadge>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-text-dark font-medium mb-4 leading-relaxed">
                Boulder Marketing is dedicated to bringing life to small businesses online. We combine fresh perspectives with strategic thinking to create digital experiences that truly resonate.
              </p>
              <p className="text-text-medium mb-6 leading-relaxed">
                We believe marketing is more than metrics — it&apos;s about bringing your vision to life. Our work is rooted in purpose, driven by excellence, and focused on helping your business thrive in the digital landscape.
              </p>
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
                  className="bg-white rounded-3xl p-8 text-center border-2 border-primary/20 hover:border-primary hover:shadow-xl transition-all"
                >
                  <div className="text-5xl font-display font-extrabold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-text-medium font-semibold">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <SectionBadge>What Drives Us</SectionBadge>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Core Values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 text-center border-2 border-primary/20 hover:border-primary hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 gradient-primary rounded-2xl mb-6 shadow-lg">
                  <value.icon size={36} className="text-white" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{value.title}</h3>
                <p className="text-text-medium mb-6">{value.description}</p>
                <ul className="text-left space-y-3">
                  {value.features.map((feature) => (
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

      {/* Story & Process Section */}
      <section className="py-20 bg-bg">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/about/team.jpg" 
                  alt="Boulder Marketing Team"
                  className="w-full h-full object-cover aspect-video"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionBadge>Our Approach</SectionBadge>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Bringing Visions to Life</h2>
              <p className="text-text-medium mb-4 leading-relaxed">
                We specialize in transforming your business vision into digital reality. Our approach combines strategic thinking with creative execution, helping small businesses stand out in a crowded digital landscape.
              </p>
              <p className="text-text-medium leading-relaxed">
                Whether you need a compelling online presence or a complete digital strategy, we&apos;re dedicated to creating authentic marketing solutions that truly connect with your audience.
              </p>
            </motion.div>
          </div>

          {/* Process Steps */}
          <div className="border-t-2 border-primary/20 pt-16">
            <div className="text-center mb-12">
              <SectionBadge>How We Work</SectionBadge>
              <h2 className="text-3xl md:text-4xl font-display font-bold">Our Process</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 text-center hover:-translate-y-2 transition-all shadow-md hover:shadow-xl"
                >
                  <div className="w-16 h-16 mx-auto mb-4 gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-display font-extrabold shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3">{step.title}</h3>
                  <p className="text-text-medium text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-overlay text-white text-center relative overflow-hidden">
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
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-xl text-white/90 mb-8">Let&apos;s bring your vision to life with purpose-driven marketing.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/contact" 
                className="bg-white border-2 border-white text-primary hover:bg-white/90 hover:border-white font-semibold px-8 py-3 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all inline-flex items-center justify-center gap-2"
              >
                Get Started
                <span>→</span>
              </Button>
              <Button 
                href="/services" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-text-dark hover:border-white font-semibold px-8 py-3 rounded-2xl transition-all inline-flex items-center justify-center"
              >
                Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}