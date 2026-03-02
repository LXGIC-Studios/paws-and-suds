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
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/book", label: "Book" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 pt-6 pb-4">
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

        {/* Desktop nav */}
        <nav className="hidden md:flex justify-center gap-8 mt-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide text-dark/70 hover:text-coral transition-colors duration-300"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden flex justify-center mt-3">
          <button
            onClick={() => setOpen(!open)}
            className="text-dark/60"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <nav className="md:hidden flex flex-col items-center gap-3 mt-3 pb-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-wide text-dark/70 hover:text-coral transition-colors duration-300"
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
