"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services & Pricing" },
    { href: "/gallery", label: "Gallery" },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-lavender/40">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="font-heading text-2xl font-extrabold text-coral tracking-tight">
          Paws &amp; Suds
        </Link>
        <button
          className="md:hidden text-2xl text-dark"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "\u2715" : "\u2630"}
        </button>
        <div className={`${open ? "flex" : "hidden"} md:flex flex-col md:flex-row items-center absolute md:static top-full left-0 w-full md:w-auto bg-white/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none gap-1 md:gap-8 p-6 md:p-0 shadow-lg md:shadow-none border-b md:border-0 border-lavender/40`}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-heading font-semibold text-dark/70 hover:text-coral transition-colors py-2 md:py-0"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/book"
            onClick={() => setOpen(false)}
            className="bg-coral text-white font-heading font-bold px-6 py-2.5 rounded-xl hover:bg-coral-dark transition-all text-sm mt-2 md:mt-0"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
