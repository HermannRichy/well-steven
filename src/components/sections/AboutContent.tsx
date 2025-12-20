import { ArrowUpRight } from "lucide-react";

export default function AboutContent() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Surtitre */}
        <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
          À PROPOS DE WELL STEVEN
        </p>

        {/* Titre Principal */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0F172A] leading-tight mb-8">
          Sécuriser vos obligations. <br className="hidden md:block" />
          Structurer votre gestion. <br className="hidden md:block" />
          Développer vos compétences.
        </h2>

        {/* Présentation */}
        <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-3xl mx-auto mb-10">
          WELL STEVEN est un cabinet spécialisé en assistance comptable et fiscale et en formation professionnelle, dédié à l’accompagnement des entreprises, organisations et porteurs de projets à chaque étape de leur développement. Nous intervenons avec une approche pratique, rigoureuse et orientée résultats, afin de garantir la conformité réglementaire, la fiabilité décisionnelle et la montée en compétence durable de nos clients et apprenants.
        </p>

        {/* Positionnement */}
        <div className="mb-10 text-left md:text-center">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0F172A] mb-4">
            Notre positionnement
          </h3>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-3xl mx-auto mb-4">
            WELL STEVEN se positionne comme un partenaire technique de confiance, et non comme un simple prestataire. Nous aidons nos clients à :
          </p>
          <ul className="text-gray-500 text-sm md:text-base max-w-3xl mx-auto list-disc list-inside space-y-1 mb-6">
            <li>Sécuriser leurs obligations comptables et fiscales</li>
            <li>Structurer efficacement leur organisation financière</li>
            <li>Comprendre et maîtriser leurs chiffres</li>
            <li>Développer des compétences professionnelles immédiatement exploitables</li>
          </ul>
        </div>

        {/* Mission */}
        <div className="mb-10 text-left md:text-center">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0F172A] mb-4">
            Notre mission
          </h3>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-3xl mx-auto mb-6">
            Apporter une assistance comptable et fiscale fiable, tout en formant des professionnels compétents, capables de gérer efficacement les réalités financières et administratives des organisations.
          </p>
        </div>

        {/* Vision */}
        <div className="mb-10 text-left md:text-center">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0F172A] mb-4">
            Notre vision
          </h3>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-3xl mx-auto mb-4">
            Construire un cabinet de référence reconnu pour :
          </p>
          <ul className="text-gray-500 text-sm md:text-base max-w-3xl mx-auto list-disc list-inside space-y-1 mb-6">
            <li>La qualité et la fiabilité de ses services</li>
            <li>Le sérieux de ses méthodes</li>
            <li>La pertinence de ses formations professionnelles</li>
            <li>Sa contribution à la professionnalisation des entreprises et des ressources humaines</li>
          </ul>
        </div>

        {/* Bouton Orange */}
        <div className="flex justify-center">
          <button className="bg-[#F39200] hover:bg-[#D98200] text-white px-8 py-4 rounded-full flex items-center gap-2 transition-all duration-300 font-medium text-sm shadow-lg shadow-orange-100/50">
            Contactez-nous
            <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
