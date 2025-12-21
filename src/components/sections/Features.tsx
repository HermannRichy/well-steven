import { Check, ArrowUpRight } from "lucide-react";

export default function Features() {
  return (
    <section className="py-20 px-6 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          {/* En-tête de la section */}
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">NOS AVANTAGES</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            La comptabilité simplifiée, la croissance facilitée
          </h2>
          <p className="text-gray-600 mb-8">
            WELL STEVEN vous accompagne avec des solutions comptables fiables et adaptées, pour vous permettre de structurer votre gestion et développer vos compétences.
          </p>
          
          {/* Liste des points forts */}
          <div className="space-y-6 mb-10">
            <div className="flex gap-4">
              <div className="bg-blue-100 p-1 rounded h-fit">
                <Check size={16} className="text-blue-900"/>
              </div>
              <div>
                <h4 className="font-bold">Gestion financière précise</h4>
                <p className="text-sm text-gray-500">
                  Assurez la fiabilité de vos chiffres et la conformité de vos opérations comptables.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-blue-100 p-1 rounded h-fit">
                <Check size={16} className="text-blue-900"/>
              </div>
              <div>
                <h4 className="font-bold">Optimisation des performances financières</h4>
                <p className="text-sm text-gray-500">
                  Maximisez vos investissements et prenez des décisions éclairées pour votre entreprise.
                </p>
              </div>
            </div>
          </div>

          {/* Bouton d'appel à l'action */}
          <button className="bg-orange-400 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-orange-500 transition font-medium">
            Planifier une consultation <ArrowUpRight size={18}/>
          </button>
        </div>

        {/* Image illustrative */}
        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover" 
            alt="Bureau de travail"
          />
        </div>
      </div>
    </section>
  );
}