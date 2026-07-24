"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "E-commerce, business, and personal sites — responsive, SEO-ready, and yours to keep.",
    href: "/services#website-development",
  },
  {
    number: "02",
    title: "App Development",
    description:
      "Custom apps designed, built, and deployed — from idea to launch.",
    href: "/services#app-development",
  },
  {
    number: "03",
    title: "AI Social Automation",
    description:
      "AI drafts, you approve, it publishes. A consistent presence with zero busywork.",
    href: "/services#ai-automation",
  },
];

const stats = [
  { number: "7+", label: "businesses transformed" },
  { number: "100%", label: "client satisfaction" },
  { number: "2+", label: "years building" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-bg pt-44 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="eyebrow mb-4">Web · Apps · AI Marketing</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6">
              Marketing built
              <br />
              on the <span className="text-primary">rock</span>.
            </h1>
            <p className="text-lg md:text-xl text-text-medium max-w-xl mb-8">
              Apps, websites, and AI-powered marketing for small businesses —
              built solid, built to last.
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
              <Button href="/contact" size="lg">
                Start your project
              </Button>
              <Button href="/portfolio" variant="outline" size="lg">
                See our work
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-2">
                  <span className="text-2xl font-display font-bold text-text-dark">
                    {stat.number}
                  </span>
                  <span className="text-sm text-text-light">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-espresso text-bg py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="eyebrow mb-3 text-primary-light">What we build</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">
              Three things, done properly.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={service.href}
                  className="block h-full bg-espresso-card rounded-3xl p-8 hover:bg-primary group transition-colors duration-300"
                >
                  <p className="font-display text-primary-light group-hover:text-espresso mb-6 transition-colors">
                    {service.number}
                  </p>
                  <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sand/70 group-hover:text-white/90 leading-relaxed transition-colors">
                    {service.description}
                  </p>
                  <p className="mt-6 text-primary-light group-hover:text-white transition-colors" aria-hidden>
                    →
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Offer Strip */}
      <section id="founder-offer" className="bg-bg py-16 scroll-mt-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-line rounded-3xl p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10"
          >
            <div className="flex-1">
              <p className="eyebrow mb-3">Founder offer — 10 spots</p>
              <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight mb-3">
                Your personal website for{" "}
                <span className="text-primary">$100</span>
              </h2>
              <p className="text-text-medium mb-2">
                First 10 clients. One-time payment, no recurring fees. Custom,
                mobile-friendly, and you own everything — site, code, and
                domain.
              </p>
              <p className="text-sm text-text-light">
                Domain registration paid separately by you (typically
                $10–20/year).
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button href="/contact" size="lg" icon>
                Claim your spot
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-bg pb-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-t border-line pt-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
              Ready to grow your business?
            </h2>
            <p className="text-lg text-text-medium mb-8">
              Let&apos;s build something that lasts.
            </p>
            <Button href="/contact" size="lg" icon>
              Get started
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
