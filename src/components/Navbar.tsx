"use client";

import { useState, useEffect } from "react";
import { Menu, X, Leaf, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#video-reviews", label: "Member Review" },
    { href: "#sessions", label: "Live Sessions" },
    { href: "#about", label: "About" },
    { href: "#events", label: "Events" },
    { href: "#contact", label: "Book Session" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-sm py-3 sm:py-4" : "bg-transparent py-5 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Brand Logo & Profile Avatar */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-emerald-300 shadow-sm group-hover:scale-105 transition-transform flex-shrink-0">
              <img
                src="/images/dr-priyanka-srivastava.jpg"
                alt="Dr. Priyanka Srivastava"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <span className="font-outfit text-xl sm:text-2xl font-bold text-dark-green block leading-none">
                Healing Harmony
              </span>
              <span className="text-[10px] text-gray-500 font-semibold tracking-wider uppercase block mt-0.5">
                Wellness Club • Dr. Priyanka Srivastava
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-7 items-center font-medium text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-dark-green hover:text-primary-pink transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Direct WhatsApp Callout Button */}
            <a
              href="https://wa.me/919214426091"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition-all shadow-sm flex items-center gap-1.5 text-xs font-bold"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>

            {/* Book Consultation */}
            <a 
              href="#contact" 
              className="bg-primary-pink text-white px-5 py-2.5 rounded-full hover:bg-pink-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-bold text-xs"
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="https://wa.me/919214426091"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white p-2 rounded-full text-xs font-bold"
              aria-label="WhatsApp Dr. Priyanka"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark-green p-2 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-gray-200/50 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2 flex flex-col items-center">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-dark-green font-medium text-sm hover:text-primary-pink"
                >
                  {link.label}
                </a>
              ))}
              <div className="w-full pt-3 flex flex-col gap-2">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center py-3 bg-primary-pink text-white font-bold text-sm rounded-xl shadow"
                >
                  Book Online Session
                </a>
                <a
                  href="https://wa.me/919214426091"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center py-2.5 bg-emerald-600 text-white font-bold text-sm rounded-xl shadow flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp (9214426091)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
