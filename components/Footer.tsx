import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-dark/10 mt-20">
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="font-[family-name:var(--font-nunito)] text-2xl font-bold text-dark">
          Paws & Suds
        </h2>
        <p className="text-sm text-dark/50 tracking-widest uppercase mt-1">
          Pet Spa
        </p>

        <div className="mt-6 space-y-1 text-sm text-dark/60">
          <p>123 Bark Avenue</p>
          <p>(555) PAW-WASH</p>
          <p>Mon-Sat 8am-6pm</p>
        </div>

        <div className="mt-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-dark/40 hover:text-coral transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
        </div>

        <div className="border-t border-dark/10 mt-8 pt-6">
          <p className="text-xs text-dark/40">
            Built by{" "}
            <Link
              href="https://lxgicstudios.com"
              target="_blank"
              className="hover:text-coral transition-colors duration-300"
            >
              LXGIC Studios
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
