"use client";

import { motion } from "framer-motion";
import Button from "./Button";

interface CtaSectionProps {
  title: string;
  description: string;
  cta?: string;
}

export default function CtaSection({
  title,
  description,
  cta = "Get started",
}: CtaSectionProps) {
  return (
    <section className="bg-bg py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-line pt-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-lg text-text-medium mb-8">{description}</p>
          <Button href="/contact" size="lg" icon>
            {cta}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
