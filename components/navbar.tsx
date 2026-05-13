"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const LOGO_URL = "/logo-qimen-strategy.jpg";
const WA_LINK = "https://wa.me/6589418791";

const serviceLinks = [
  { href: "/decision", label: "Qimen Strategy" },
  { href: "/wealth", label: "Wealth & Career" },
  { href: "/healing", label: "Relationship Alignment" },
  { href: "/space-clearing", label: "Space Alignment" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4">

        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src={LOGO_URL}
            alt="Qimen Strategy Singapore Logo"
            className="h-11 w-auto object-contain"
          />
          <div className="hidden sm:block leading-tight">
            <div className="text-sm font-semibold tracking-wider text-white">
              QIMEN STRATEGY
            </div>
            <div className="text-[0.65rem] tracking-[0.25em] text-gold-400">
              启明遁甲
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {serviceLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/80 hover:text-yellow-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 border border-yellow-500 text-yellow-500 text-sm hover:bg-yellow-500 hover:text-black transition-all"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 pb-6">
          {serviceLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-white/80"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 text-yellow-500"
          >
            WhatsApp Consultation
          </a>
        </div>
      )}
    </nav>
  );
}
