const services = [
  { name: "Bath & Brush", small: "$35", medium: "$50", large: "$65" },
  { name: "Full Groom", small: "$55", medium: "$70", large: "$90" },
  { name: "Nail Trim", small: "$15", medium: "$15", large: "$20" },
  { name: "De-shedding Treatment", small: "$45", medium: "$60", large: "$75" },
  { name: "Puppy's First Groom", small: "$30", medium: "$40", large: "—" },
];

export default function PricingTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left rounded-2xl overflow-hidden shadow-md">
        <thead className="bg-coral text-white font-heading">
          <tr>
            <th className="px-6 py-4">Service</th>
            <th className="px-6 py-4 text-center">Small<br /><span className="text-xs font-normal opacity-80">Under 25lbs</span></th>
            <th className="px-6 py-4 text-center">Medium<br /><span className="text-xs font-normal opacity-80">25–50lbs</span></th>
            <th className="px-6 py-4 text-center">Large<br /><span className="text-xs font-normal opacity-80">50lbs+</span></th>
          </tr>
        </thead>
        <tbody>
          {services.map((s, i) => (
            <tr key={s.name} className={i % 2 === 0 ? "bg-lavender/10" : "bg-white"}>
              <td className="px-6 py-4 font-semibold">{s.name}</td>
              <td className="px-6 py-4 text-center">{s.small}</td>
              <td className="px-6 py-4 text-center">{s.medium}</td>
              <td className="px-6 py-4 text-center">{s.large}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
