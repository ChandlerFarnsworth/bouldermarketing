"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  label: string;
  title: string;
  description: string;
}

export default function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center gradient-overlay text-white text-center overflow-hidden pt-24 pb-32">
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
            {label}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/90"
          >
            {description}
          </motion.p>
        </motion.div>
      </div>

      {/* Wave SVG */}
      <div className="absolute bottom-0 left-0 w-full h-20 z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0,0 C300,60 600,60 900,20 L1200,40 L1200,120 L0,120 Z"
            fill="#e7decf"
          />
        </svg>
      </div>
    </section>
  );
}