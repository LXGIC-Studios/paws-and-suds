import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-lavender/40 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-4">
        <p className="font-heading text-xl font-bold text-coral">Paws & Suds Pet Spa</p>
        <p className="text-sm text-dark/70">123 Bark Avenue, Pawsville, TX 75001</p>
        <p className="text-sm text-dark/70">(555) PAW-WASH &middot; (555) 729-9274</p>
        <div className="flex justify-center gap-6 text-sm font-semibold">
          <Link href="/" className="hover:text-coral transition-colors">Home</Link>
          <Link href="/services" className="hover:text-coral transition-colors">Services</Link>
          <Link href="/gallery" className="hover:text-coral transition-colors">Gallery</Link>
          <Link href="/book" className="hover:text-coral transition-colors">Book</Link>
        </div>
        <p className="text-xs text-dark/50 pt-4">
          Built by{" "}
          <a href="https://lxgicstudios.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-coral">
            LXGIC Studios
          </a>
        </p>
      </div>
    </footer>
  );
}
