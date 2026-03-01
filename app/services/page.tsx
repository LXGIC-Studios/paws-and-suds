import Link from "next/link";
import PricingTable from "@/components/PricingTable";
import { Smile, Shield, Sparkles, Hand, Flower } from "lucide-react";

const addons = [
  { name: "Teeth Brushing", price: "$10", Icon: Smile },
  { name: "Flea Treatment", price: "$15", Icon: Shield },
  { name: "Blueberry Facial", price: "$12", Icon: Sparkles },
  { name: "Nail Grinding", price: "$8", Icon: Hand },
  { name: "Cologne Spritz", price: "$5", Icon: Flower },
];

const packages = [
  { name: "The Pampered Pup", description: "Full Groom + Teeth Brushing + Cologne Spritz", savings: "Save $5", price: "From $65", featured: false },
  { name: "The Royal Treatment", description: "Full Groom + Blueberry Facial + Nail Grinding + Cologne Spritz", savings: "Save $10", price: "From $75", featured: true },
  { name: "Shed-Free Bundle", description: "De-shedding Treatment + Bath & Brush + Cologne Spritz", savings: "Save $8", price: "From $72", featured: false },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-lavender-light py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="section-label mb-3">Our Menu</p>
          <h1 className="font-heading text-5xl md:text-6xl font-extrabold mb-5">Services & Pricing</h1>
          <p className="text-dark/60 text-lg max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Every service includes love, belly rubs, and treats!
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-28">
        <div className="text-center mb-12">
          <p className="section-label mb-3">Price List</p>
          <h2 className="font-heading text-4xl font-extrabold">Grooming Services</h2>
        </div>
        <PricingTable />
      </section>

      <section className="bg-lavender-light py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Extras</p>
            <h2 className="font-heading text-4xl font-extrabold">Add-Ons</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {addons.map((a) => (
              <div key={a.name} className="bg-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-lavender-light flex items-center justify-center flex-shrink-0">
                  <a.Icon className="w-6 h-6 text-coral" />
                </div>
                <div>
                  <p className="font-heading font-bold text-lg">{a.name}</p>
                  <p className="text-coral font-extrabold text-lg">{a.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-28">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Best Value</p>
          <h2 className="font-heading text-4xl font-extrabold">Package Deals</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((p) => (
            <div key={p.name} className={`bg-white rounded-2xl p-8 text-center relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${p.featured ? "shadow-xl ring-2 ring-coral scale-[1.04]" : "shadow-md border border-lavender/40"}`}>
              <div className="absolute top-4 right-4 bg-yellow-pop text-dark text-xs font-bold px-3 py-1.5 rounded-full">{p.savings}</div>
              {p.featured && <div className="absolute top-0 left-0 right-0 h-1 bg-coral" />}
              <h3 className="font-heading text-xl font-bold mb-3 mt-6">{p.name}</h3>
              <p className="text-sm text-dark/50 mb-6 leading-relaxed">{p.description}</p>
              <p className="font-heading text-3xl font-extrabold text-coral">{p.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-coral py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl font-extrabold text-white mb-6">Ready to book?</h2>
          <Link href="/book" className="bg-white text-coral font-heading font-bold px-12 py-4 rounded-2xl hover:bg-lavender-light hover:scale-[1.03] transition-all text-lg inline-block shadow-lg">
            Book an Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
