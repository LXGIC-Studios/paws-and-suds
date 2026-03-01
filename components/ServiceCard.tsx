interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  price?: string;
}

export default function ServiceCard({ icon, title, description, price }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-8 text-center border border-lavender/30">
      <div className="w-16 h-16 rounded-2xl bg-lavender-light text-2xl flex items-center justify-center mx-auto mb-5">{icon}</div>
      <h3 className="font-heading text-xl font-bold mb-3">{title}</h3>
      <p className="text-dark/60 mb-4 leading-relaxed">{description}</p>
      {price && <p className="font-heading font-extrabold text-coral text-xl">{price}</p>}
    </div>
  );
}
