"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  label: string;
  title: string;
  description: string;
}

export default function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="bg-espresso text-bg pt-40 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="eyebrow mb-3 text-primary-light">{label}</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">
            {title}
          </h1>
          <p className="text-lg text-sand/80">{description}</p>
        </motion.div>
      </div>
    </section>
  );
}
