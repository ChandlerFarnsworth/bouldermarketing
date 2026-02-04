"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Quote } from "lucide-react";
import Button from "@/components/ui/Button";

const filters = ["all", "web", "brand", "social"];

const projects = [
  {
    title: "Map Mosaic",
    description: "Full-Stack Website Development, UI/UX Design, SEO Optimization, and Third-Party App Integration",
    category: "web",
    url: "https://mapmosaic.net/",
    image: "/images/portfolio/map-mosaic.png",
  },
  {
    title: "Highlander Pen",
    description: "E-commerce Website Development with Custom Product Showcase",
    category: "web",
    url: "https://highlanderpen.com",
    image: "/images/portfolio/highlander-pen.png",
  },
  {
    title: "BBIG Designs",
    description: "E-commerce Website for a Custom Belt Buckle Business",
    category: "web",
    url: "https://www.bbigdesigns.store/",
    image: "/images/portfolio/bbig-designs.jpg",
  },
  {
    title: "AGO Boulder",
    description: "End-to-End Social Media Content Production, Including Video Shoots, Graphics, and Shorts",
    category: "social",
    url: "https://www.youtube.com/@AGOBoulder",
    image: "/images/portfolio/ago-boulder.jpg",
  }
];

const testimonials = [
  {
    quote: "Working with Boulder Marketing gave our small business a huge online boost. Professional, kind, and truly understanding of our values. The results exceeded our expectations!",
    author: "Jane Smith",
    role: "Local Cafe Owner",
    initials: "JS",
  },
  {
    quote: "Their team created a brand that truly reflects our values and mission. The work they did helped us connect with our community in meaningful ways.",
    author: "Michael Johnson",
    role: "Non-Profit Director",
    initials: "MJ",
  },
  {
    quote: "Our social media presence has completely transformed since working with Boulder Marketing. They understand our audience and create content that truly resonates.",
    author: "Sarah Williams",
    role: "Boutique Owner",
    initials: "SW",
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Custom Portfolio Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center gradient-overlay text-white text-center overflow-hidden pt-24 pb-16">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-[20%] left-[20%] w-64 h-64 bg-white rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-[20%] right-[20%] w-48 h-48 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block px-5 py-2 bg-white/15 backdrop-blur-md border border-white/30 rounded-full text-sm font-semibold uppercase tracking-wider mb-4"
            >
              Our Work
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
            >
              Real Results. Real People.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-white/90"
            >
              See how we&apos;ve helped small businesses grow online with purpose-driven marketing.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[73px] bg-white shadow-sm py-6 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-xl font-semibold transition-all ${
                  activeFilter === filter
                    ? "gradient-primary text-white shadow-md"
                    : "bg-white border-2 border-primary text-primary hover:bg-primary/10"
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
                {filter === "all" ? " Projects" : ""}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-bg">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all group cursor-pointer"
              >
                <div className="relative h-64 bg-gradient-to-br from-primary/20 to-primary-dark/10 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-primary-dark/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center p-6">
                      <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-4">
                        {project.category === "web" ? "Website Design" : project.category === "brand" ? "Branding" : "Social Media"}
                      </span>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-xl font-semibold hover:scale-105 transition-transform"
                      >
                        View Live Site
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-display font-bold mb-2">{project.title}</h3>
                  <p className="text-text-medium text-sm">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-5 py-2 gradient-primary text-white rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              What Clients Say
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold">Client Testimonials</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all"
              >
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mb-6">
                  <Quote size={24} className="text-white" />
                </div>
                <p className="text-text-dark italic mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-primary/10">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 border-2 border-primary text-primary-dark font-bold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold">{testimonial.author}</h4>
                    <p className="text-text-medium text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
                Start Your Project
                <span>→</span>
              </Button>
              <Button 
                href="/services" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-text-dark hover:border-white font-semibold px-8 py-3 rounded-2xl transition-all inline-flex items-center justify-center"
              >
                View Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}