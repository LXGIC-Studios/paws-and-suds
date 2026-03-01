const services = [
  { name: "Bath & Brush", small: "$35", medium: "$50", large: "$65" },
  { name: "Full Groom", small: "$55", medium: "$70", large: "$90" },
  { name: "Nail Trim", small: "$15", medium: "$15", large: "$20" },
  { name: "De-shedding Treatment", small: "$45", medium: "$60", large: "$75" },
  { name: "Puppy's First Groom", small: "$30", medium: "$40", large: "—" },
];

export default function PricingTable() {
  return (
    <div className="overflow-x-auto rounded-2xl shadow-lg border border-lavender/40">
      <table className="w-full text-left">
        <thead className="bg-coral text-white font-heading">
          <tr>
            <th className="px-8 py-5 text-sm uppercase tracking-wider">Service</th>
            <th className="px-8 py-5 text-center text-sm uppercase tracking-wider">Small<br /><span className="text-xs font-normal opacity-80 normal-case">Under 25lbs</span></th>
            <th className="px-8 py-5 text-center text-sm uppercase tracking-wider">Medium<br /><span className="text-xs font-normal opacity-80 normal-case">25–50lbs</span></th>
            <th className="px-8 py-5 text-center text-sm uppercase tracking-wider">Large<br /><span className="text-xs font-normal opacity-80 normal-case">50lbs+</span></th>
          </tr>
        </thead>
        <tbody>
          {services.map((s, i) => (
            <tr key={s.name} className={`${i % 2 === 0 ? "bg-lavender-light/50" : "bg-white"} transition-colors hover:bg-lavender/30`}>
              <td className="px-8 py-5 font-heading font-bold">{s.name}</td>
              <td className="px-8 py-5 text-center font-semibold">{s.small}</td>
              <td className="px-8 py-5 text-center font-semibold">{s.medium}</td>
              <td className="px-8 py-5 text-center font-semibold">{s.large}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
