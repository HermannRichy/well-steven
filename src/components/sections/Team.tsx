"use client";
import Image from 'next/image';

const EquipePage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Enock DEKENOU",
      role: "Directeur Général",
      description: "Avec plus de 10 années d'expérience professionnelle, Enock DEKENOU, Spécialiste en gestion comptable, fiscale et organisationnelle, assure la direction stratégique et opérationnelle du cabinet. Il intervient dans la supervision des missions comptables et fiscales, la validation des dossiers à fort enjeu et l'accompagnement stratégique des entreprises, ONG et institutions. Son leadership repose sur la rigueur professionnelle, la conformité réglementaire et la recherche permanente de l'excellence."
    },
    {
      id: 2,
      name: "Expert Fiscaliste",
      role: "Fiscaliste",
      description: "Professionnel expérimenté de plus de 07 ans en fiscalité et législation sociale, dispose d'une solide expertise dans la gestion des obligations fiscales des entreprises. Il accompagne les clients dans l'établissement des déclarations fiscales et sociales, l'optimisation fiscale légale et l'assistance lors des contrôles fiscaux, en garantissant la conformité aux textes en vigueur et la sécurisation des dossiers."
    },
    {
      id: 3,
      name: "Responsable de Comptes",
      role: "Responsable de Comptes",
      description: "Avec une expérience avérée de plus de 05 ans en gestion comptable et financière, le Responsable de Comptes assure le suivi opérationnel des dossiers clients. Il coordonne la tenue comptable, supervise les travaux de fin d'exercice, participe à l'élaboration des états financiers et veille au respect strict des délais comptables, fiscaux et sociaux, tout en assurant un conseil de proximité aux clients."
    },
    {
      id: 4,
      name: "Assistant Comptable",
      role: "Assistant Comptable",
      description: "Avec plus de trois ans d'expérience professionnelle, il intervient dans l'exécution quotidienne des travaux comptables sous la supervision du Responsable de Comptes."
    }
    // Supprimé les membres 5 et 6
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-momo sm:text-4xl font-bold text-slate-900 mb-4">
            Notre équipe de formateurs experts
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Des professionnels expérimentés qui partagent leur savoir-faire avec passion
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Première ligne : 2 membres */}
          {teamMembers.slice(0, 2).map((member, index) => (
            <div 
              key={member.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200"
            >
              <div className="relative h-72 overflow-hidden">
                {/* Image du membre */}
                {index === 0 && (
                  <Image
                    src="/DIRECTEUR GENERAL/EnockDEKENOU.jpg"
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  />
                )}
                {index === 1 && (
                  <Image
                    src="/LE FISCALISTE/1765898254284.jpg"
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  />
                )}
                
                {/* Overlay avec description qui apparaît au survol */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-[#ff5c00] font-medium text-sm">
                  {member.role}
                </p>
              </div>
            </div>
          ))}

          {/* Deuxième ligne : 2 membres */}
          {teamMembers.slice(2, 4).map((member, index) => (
            <div 
              key={member.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200"
            >
              <div className="relative h-72 overflow-hidden">
                {/* Image du membre */}
                {index === 0 && (
                  <Image
                    src="/RESPONSABLE DE COMPTE/1765897974580.jpg"
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  />
                )}
                {index === 1 && (
                  <Image
                    src="/ASSISTANT COMPTABLE/IMG-20251216-WA0067.jpg"
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  />
                )}
                
                {/* Overlay avec description qui apparaît au survol */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-[#ff5c00] font-medium text-sm">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipePage;