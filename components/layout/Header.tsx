"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Zap } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export const HEADER_OFFSET = 105;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-bg/95 backdrop-blur-md border-b border-line">
        {/* Announcement bar — above the nav */}
        <Link
          href="/#founder-offer"
          className="block bg-espresso text-sand text-xs text-center px-4 py-2 hover:text-white transition-colors"
        >
          <Zap size={12} className="inline -mt-0.5 mr-1.5 text-primary-light" aria-hidden />
          <span className="font-semibold">Founder offer:</span> first 10 personal
          websites, $100 flat — no recurring fees{" "}
          <span className="text-primary-light" aria-hidden>
            →
          </span>
        </Link>

        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            <Link
              href="/"
              className="flex items-center gap-3 hover:opacity-85 transition-opacity"
            >
              <img
                src="/images/logo-mark.png"
                alt="Boulder Marketing mountain logo"
                className="h-12 w-auto"
              />
              <span className="flex flex-col leading-none">
                <span className="font-display font-bold text-2xl tracking-wide text-primary">
                  BOULDER
                </span>
                <span className="font-display text-xs tracking-[0.45em] text-primary mt-1">
                  MARKETING
                </span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-7">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                const isContact = item.name === "Contact";

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-medium transition-colors ${
                      isContact
                        ? "px-5 py-2.5 bg-espresso text-bg rounded-full hover:bg-primary transition-all"
                        : isActive
                        ? "text-primary"
                        : "text-text-dark hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-text-dark hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70"
          style={{ zIndex: 9998, top: `${HEADER_OFFSET}px` }}
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          className="fixed bg-bg shadow-2xl"
          style={{
            zIndex: 9999,
            top: `${HEADER_OFFSET}px`,
            right: 0,
            bottom: 0,
            width: "320px",
            maxWidth: "90vw",
          }}
        >
          <nav className="flex flex-col p-6 gap-2 h-full overflow-y-auto">
            {navigation.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium py-3.5 px-6 rounded-full transition-all ${
                    isActive
                      ? "bg-espresso text-bg"
                      : "text-text-dark border border-line hover:border-primary hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}
