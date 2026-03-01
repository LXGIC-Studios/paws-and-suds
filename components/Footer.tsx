import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-20 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-heading text-2xl font-extrabold text-coral mb-4">Paws & Suds</p>
            <p className="text-white/60 text-sm leading-relaxed">
              Premium pet grooming in a stress-free, loving environment. Your pup deserves the best.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-white/40 mb-5">Navigate</h4>
            <div className="space-y-3">
              <Link href="/" className="block text-white/70 hover:text-coral transition-colors text-sm">Home</Link>
              <Link href="/services" className="block text-white/70 hover:text-coral transition-colors text-sm">Services & Pricing</Link>
              <Link href="/gallery" className="block text-white/70 hover:text-coral transition-colors text-sm">Gallery</Link>
              <Link href="/book" className="block text-white/70 hover:text-coral transition-colors text-sm">Book Now</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-white/40 mb-5">Services</h4>
            <div className="space-y-3 text-sm text-white/70">
              <p>Bath & Brush</p>
              <p>Full Groom</p>
              <p>Nail Trim</p>
              <p>De-shedding</p>
              <p>Puppy&apos;s First Groom</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-white/40 mb-5">Contact</h4>
            <div className="space-y-3 text-sm text-white/70">
              <p>123 Bark Avenue<br />Pawsville, TX 75001</p>
              <p>(555) PAW-WASH<br />(555) 729-9274</p>
              <p className="pt-2">
                <span className="text-white/40">Mon–Fri:</span> 8am – 6pm<br />
                <span className="text-white/40">Saturday:</span> 9am – 5pm<br />
                <span className="text-white/40">Sunday:</span> Closed
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Paws & Suds Pet Spa. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Built by{" "}
            <a href="https://lxgicstudios.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-coral transition-colors">
              LXGIC Studios
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
