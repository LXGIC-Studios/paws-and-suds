"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services & Pricing" },
    { href: "/gallery", label: "Gallery" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 pt-6 pb-4">
        {/* Centered logo */}
        <div className="text-center">
          <Link href="/">
            <h1 className="font-[family-name:var(--font-nunito)] text-3xl font-bold text-dark tracking-tight">
              Paws & Suds
            </h1>
            <p className="text-sm text-dark/50 tracking-widest uppercase mt-0.5">
              Pet Spa
            </p>
          </Link>
        </div>

        {/* Desktop nav - centered row below logo */}
        <nav className="hidden md:flex justify-center items-center gap-8 mt-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide text-dark/60 hover:text-dark transition-colors duration-300"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="text-sm font-medium px-5 py-2 bg-coral text-white rounded-full hover:opacity-90 transition-opacity duration-300"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile - hamburger + Book Now pill */}
        <div className="md:hidden flex justify-center items-center gap-4 mt-3">
          <button
            onClick={() => setOpen(!open)}
            className="text-dark/60"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
          <Link
            href="/book"
            className="text-sm font-medium px-5 py-2 bg-coral text-white rounded-full hover:opacity-90 transition-opacity duration-300"
          >
            Book Now
          </Link>
        </div>

        {open && (
          <nav className="md:hidden flex flex-col items-center gap-3 mt-3 pb-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-wide text-dark/60 hover:text-dark transition-colors duration-300"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
