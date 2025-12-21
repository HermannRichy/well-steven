import { ArrowUpRight } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    "Conseils financiers experts",
    "Support client dédié",
    "Rapports précis et en temps voulu"
  ];

  return (
    <section className="bg-[#0a192f] text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image illustrative */}
        <div className="rounded-2xl overflow-hidden h-[500px]">
          <img 
           src="/images/Graphiques1.jpg" 
            className="w-full h-full object-cover" 
            alt="Graphiques financiers" 
          />
        </div>
        
        {/* Texte et points forts */}
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">POURQUOI NOUS CHOISIR</p>
          <h2 className="text-4xl font-bold mb-6">
            Des comptables experts qui prennent soin de votre parcours financier
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            WELL STEVEN vous accompagne avec rigueur et expertise pour structurer votre gestion financière et sécuriser vos obligations comptables et fiscales.
          </p>
          
          <ul className="space-y-4">
            {points.map((p, i) => (
              <li 
                key={i} 
                className="flex justify-between items-center border-b border-gray-700 pb-4 group cursor-pointer hover:text-orange-400 transition"
              >
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