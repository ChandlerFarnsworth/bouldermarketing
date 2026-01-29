"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-xl"
          : "bg-white/90 backdrop-blur-md shadow-md"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-85 transition-opacity"
          >
            <img 
              src="/images/logo.svg" 
              alt="Boulder Marketing Logo" 
              className="h-10 w-auto"
            />
            <span className="font-display font-bold text-xl text-text-dark">
              Boulder Marketing
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              const isContact = item.name === "Contact";

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative font-semibold transition-colors ${
                    isContact
                      ? "px-6 py-2.5 gradient-primary text-white rounded-2xl hover:shadow-lg hover:-translate-y-0.5 transition-all"
                      : isActive
                      ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                      : "text-text-dark hover:text-primary after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
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
        style={{ 
          zIndex: 9998,
          top: '73px'
        }}
        onClick={() => setIsOpen(false)}
      />
    )}

    {/* Mobile Navigation */}
    {isOpen && (
      <div
        className="fixed bg-white shadow-2xl"
        style={{
          zIndex: 9999,
          top: '73px',
          right: 0,
          bottom: 0,
          width: '320px',
          maxWidth: '90vw'
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
                className={`text-lg font-semibold py-4 px-6 rounded-2xl transition-all ${
                  isActive 
                    ? "bg-primary text-white shadow-md" 
                    : "text-text-dark hover:bg-primary/10 hover:text-primary border-2 border-primary/20 hover:border-primary"
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