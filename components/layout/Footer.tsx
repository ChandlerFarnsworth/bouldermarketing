import Link from "next/link";
import { Instagram, Linkedin, Mail } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-espresso text-sand/70">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10 pb-10 border-b border-white/10">
          {/* Brand Section */}
          <div className="lg:col-span-2 max-w-md">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/images/footer-logo.svg"
                alt="Boulder Marketing Logo"
                className="h-14 w-auto"
              />
              <span className="flex flex-col leading-none">
                <span className="font-display font-bold text-2xl tracking-wide text-primary-light">
                  BOULDER
                </span>
                <span className="font-display text-xs tracking-[0.45em] text-primary-light mt-1">
                  MARKETING
                </span>
              </span>
            </div>
            <p className="text-sand/60 text-sm">Marketing Built on the Rock</p>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-white font-display text-lg font-semibold mb-4">
              Get In Touch
            </h4>
            <a
              href="mailto:chandler@bouldermarketing.net"
              className="flex items-center gap-2 mb-4 hover:text-primary-light transition-colors"
            >
              <Mail size={18} />
              <span className="text-sm">chandler@bouldermarketing.net</span>
            </a>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.instagram.com/bouldermarketing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:-translate-y-1 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/bouldermarketing/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:-translate-y-1 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-primary-light hover:pl-1 transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-white/60 text-sm">
            &copy; Boulder Marketing 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}