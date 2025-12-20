import { ArrowUpRight } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    "Expert financial guidance",
    "Dedicated client support",
    "Accurate & timely reporting"
  ];

  return (
    <section className="bg-[#0a192f] text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="rounded-2xl overflow-hidden h-[500px]">
          <img src="https://images.unsplash.com/photo-1551288049-bbda3ef66851?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Charts" />
        </div>
        
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">WHY CHOOSE US</p>
          <h2 className="text-4xl font-bold mb-6">Expert accountants who care about your financial journey</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Fringilla justo fames a donec. Suscipit sit sapien donec elementum nunc sit aliquam.
          </p>
          
          <ul className="space-y-4">
            {points.map((p, i) => (
              <li key={i} className="flex justify-between items-center border-b border-gray-700 pb-4 group cursor-pointer hover:text-orange-400 transition">
                <span className="font-medium">{p}</span>
                <ArrowUpRight size={20} className="text-gray-500 group-hover:text-orange-400"/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}