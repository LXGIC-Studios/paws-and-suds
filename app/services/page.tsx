import Link from "next/link";
import PricingTable from "@/components/PricingTable";

const addons = [
  { name: "Teeth Brushing", price: "$10", icon: "🦷" },
  { name: "Flea Treatment", price: "$15", icon: "🛡️" },
  { name: "Blueberry Facial", price: "$12", icon: "🫐" },
  { name: "Nail Grinding", price: "$8", icon: "✨" },
  { name: "Cologne Spritz", price: "$5", icon: "🌸" },
];

const packages = [
  { name: "The Pampered Pup", description: "Full Groom + Teeth Brushing + Cologne Spritz", savings: "Save $5", price: "From $65" },
  { name: "The Royal Treatment", description: "Full Groom + Blueberry Facial + Nail Grinding + Cologne Spritz", savings: "Save $10", price: "From $75" },
  { name: "Shed-Free Bundle", description: "De-shedding Treatment + Bath & Brush + Cologne Spritz", savings: "Save $8", price: "From $72" },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-lavender/30 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Services & Pricing</h1>
          <p className="text-dark/60 text-lg max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Every service includes love, belly rubs, and treats! 🐾
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="font-heading text-3xl font-bold mb-8 text-center">Grooming Services</h2>
        <PricingTable />
      </section>

      <section className="bg-lavender/20 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">Add-Ons</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {addons.map((a) => (
              <div key={a.name} className="bg-white rounded-2xl shadow-sm p-5 flex items-center gap-4 border border-lavender/30">
                <span className="text-3xl">{a.icon}</span>
                <div>
                  <p className="font-heading font-bold">{a.name}</p>
                  <p className="text-coral font-bold">{a.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="font-heading text-3xl font-bold mb-8 text-center">Package Deals 🎁</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((p) => (
            <div key={p.name} className="bg-white rounded-2xl shadow-md p-6 border-2 border-lavender/50 text-center relative overflow-hidden">
              <div className="absolute top-3 right-3 bg-yellow-pop text-dark text-xs font-bold px-3 py-1 rounded-full">{p.savings}</div>
              <h3 className="font-heading text-xl font-bold mb-2 mt-4">{p.name}</h3>
              <p className="text-sm text-dark/60 mb-4">{p.description}</p>
              <p className="font-heading text-2xl font-bold text-coral">{p.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-coral/10 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl font-bold mb-4">Ready to book?</h2>
          <Link href="/book" className="bg-coral text-white font-heading font-bold px-10 py-3 rounded-xl hover:bg-coral/90 transition-colors text-lg inline-block">
            Book an Appointment 🐾
          </Link>
        </div>
      </section>
    </>
  );
}
