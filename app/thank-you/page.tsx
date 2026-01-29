"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ThankYou() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center py-20 bg-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-24 h-24 gradient-primary rounded-full mb-8"
          >
            <CheckCircle size={48} className="text-white" />
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Thank You!</h1>

          <p className="text-xl text-text-medium mb-8">
            Your message has been sent successfully. We&apos;ll be in touch with you shortly.
          </p>

          <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-display font-bold mb-4">What&apos;s Next?</h3>
            <p className="text-text-medium">
              We&apos;ll review your information and reach out within 1-2 business days to discuss
              how we can help your business grow.
            </p>
          </div>

          <Button href="/" variant="primary" size="lg" icon>
            Return to Homepage
          </Button>
        </motion.div>
      </div>
    </section>
  );
}