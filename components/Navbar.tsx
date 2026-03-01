"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services & Pricing" },
    { href: "/gallery", label: "Gallery" },
    { href: "/book", label: "Book Now" },
  ];

  return (
    <nav className="bg-white fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="font-heading text-2xl font-bold text-coral">
          Paws &amp; Suds
        </Link>
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "\u2715" : "\u2630"}
        </button>
        <div className={`${open ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent gap-1 md:gap-6 p-4 md:p-0 shadow-md md:shadow-none`}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-heading font-semibold text-dark hover:text-coral transition-colors py-2 md:py-0"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
