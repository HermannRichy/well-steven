"use client";
import { Check, Award, Briefcase, Building, Users, Globe, FileText, TrendingUp } from 'lucide-react';
import { InteractiveHoverButton } from '../ui/interactive-hover-button';

const ProgrammeIncubation = () => {
  const generateWhatsAppMessage = () => {
    const message = `Bonjour WELL STEVEN !

Je suis intéressé(e) par votre Programme Expérience & Incubation Professionnelle.

Pourriez-vous me donner plus d'informations sur les modalités d'inscription ?

Merci !`;
    return encodeURIComponent(message);
  };

  const redirectToWhatsApp = () => {
    const phoneNumber = "2290190479512";
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-15">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-2xl mb-6">
              <Award className="text-amber-600" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Programme <span className="text-amber-600">Expérience & Incubation</span> Professionnelle
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Une immersion réelle dans la pratique comptable et fiscale
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm border border-slate-200">
            <p className="text-slate-700 text-lg leading-relaxed">
              Vous êtes étudiant, jeune diplômé ou professionnel en comptabilité et vous souhaitez acquérir une véritable expérience pratique, concrète et valorisable sur le marché du travail ?
              <br /><br />
              <span className="text-amber-600 font-semibold">👉 Ce programme est conçu pour vous.</span>
            </p>
          </div>

          {/* Présentation */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm border border-slate-200">
            <p className="text-slate-700 text-lg leading-relaxed">
              Le cabinet <span className="font-bold text-slate-900">WELL STEVEN SARL</span> lance un programme d'accompagnement professionnel rigoureux, fondé sur une immersion totale dans la pratique réelle du métier de comptable et fiscaliste, exactement comme dans un cabinet professionnel.
            </p>
          </div>

          {/* Points clés en grille */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { 
                icon: <Briefcase className="text-amber-600" />,
                title: "Approche 100% pratique",
                desc: "Structures progressive et opérationnelle"
              },
              { 
                icon: <Building className="text-amber-600" />,
                title: "Maîtrise sectorielle",
                desc: "Spécificités du Bénin"
              },
              { 
                icon: <Users className="text-amber-600" />,
                title: "Contact administratif",
                desc: "Réalités du terrain"
              },
              { 
                icon: <Award className="text-amber-600" />,
                title: "Entreprise réelle",
                desc: "Point clé du programme"
              },
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-amber-200 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-slate-900 font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Section 1 */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Une approche 100 % pratique et orientée terrain
                </h3>
              </div>
              
              <p className="text-slate-700 mb-6">
                Le programme est structuré de manière progressive, concrète et opérationnelle :
              </p>
              
              <div className="space-y-4 mb-6">
                {[
                  "Une séance de formation pratique chaque semaine, principalement en ligne ou en présentiel",
                  "Au moins une rencontre en présentiel par mois",
                  "Travail sur des cas pratiques réels, issus d'entreprises existantes",
                  "Traitement des dossiers dans les conditions réelles d'un cabinet comptable"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-amber-600" />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-slate-50 rounded-xl p-5 border-l-4 border-amber-400">
                <p className="text-slate-700 italic">
                  Chaque séance vous place dans la posture d'un professionnel en activité, avec des situations réelles à analyser, traiter et justifier.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Une maîtrise sectorielle complète (spécificités du Bénin)
                </h3>
              </div>
              
              <p className="text-slate-700 mb-6">
                Le programme intègre une approche par secteur d'activité, indispensable pour être réellement opérationnel au Bénin, notamment :
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {[
                  "🏥 Cliniques et structures de santé",
                  "🏗️ Entreprises de BTP",
                  "🤝 ONG et associations",
                  "🏢 Sociétés commerciales",
                  "📦 Prestataires de services",
                  "✨ ... et bien d'autres secteurs"
                ].map((sector, index) => (
                  <span 
                    key={index}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full text-slate-700 border border-slate-200 text-sm"
                  >
                    {sector}
                  </span>
                ))}
              </div>
              
              <p className="text-slate-700">
                Vous apprenez à gérer les spécificités comptables, fiscales et sociales propres à chaque type de structure.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Un contact direct avec les réalités administratives
                </h3>
              </div>
              
              <p className="text-slate-700 mb-6">
                Pour aller au-delà de la théorie :
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  "Rencontres périodiques avec des inspecteurs des impôts",
                  "Échanges avec des agents de la CNSS",
                  "Compréhension claire des attentes de l'administration fiscale et sociale"
                ].map((item, index) => (
                  <div key={index} className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mb-3">
                      <Check size={16} className="text-emerald-600" />
                    </div>
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
              
              <p className="text-slate-700 mt-6">
                Ces sessions vous permettent de maîtriser les réalités du terrain, les contrôles, les pratiques et les exigences réelles.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center font-bold text-lg">
                  ⭐
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Une entreprise réelle confiée à chaque participant (point clé du programme)
                </h3>
              </div>
              
              <p className="text-slate-700 mb-6">
                <span className="font-bold text-amber-600">C'est l'élément central et différenciateur du programme.</span>
                <br /><br />
                Chaque participant se voit confier une entreprise réelle, dont il assure la gestion comptable et fiscale de A à Z, notamment :
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {[
                  "Tenue comptable complète",
                  "Déclarations fiscales",
                  "Suivi des obligations légales et sociales"
                ].map((item, index) => (
                  <div key={index} className="p-5 bg-amber-50 rounded-xl border border-amber-200">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                      <span className="text-slate-800 font-medium">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-amber-50 rounded-xl p-5 border-l-4 border-amber-400">
                <p className="text-slate-800">
                  👉 Le tout sous l'encadrement, le contrôle et la validation du cabinet WELL STEVEN SARL, garantissant rigueur, conformité et montée en compétence progressive.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-yellow-100 text-yellow-800 rounded-full flex items-center justify-center font-bold text-lg">
                  5
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Une attestation professionnelle valorisable
                </h3>
              </div>
              
              <p className="text-slate-700 mb-6">
                À l'issue du programme :
              </p>
              
              <div className="space-y-4">
                {[
                  "L'entreprise pour laquelle vous avez tenu la comptabilité vous délivre une attestation de travail d'une durée d'un an",
                  "Une expérience réelle, prouvée et valorisable sur le plan professionnel",
                  "Un avantage décisif pour l'emploi, les cabinets et les missions indépendantes"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                    <Check className="text-amber-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-purple-100 text-purple-800 rounded-full flex items-center justify-center font-bold text-lg">
                  6
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Contenu du programme
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <FileText className="text-blue-600" />
                  </div>
                  <h4 className="text-slate-900 font-bold mb-3 text-lg">Projet annuel</h4>
                  <p className="text-slate-600 text-sm">
                    Tenue complète de la comptabilité et de la fiscalité d'une entreprise réelle confiée à chaque participant.
                  </p>
                </div>
                
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                    <Award className="text-emerald-600" />
                  </div>
                  <h4 className="text-slate-900 font-bold mb-3 text-lg">Moments de formation</h4>
                  <p className="text-slate-600 text-sm">
                    Séances techniques régulières pour renforcer les compétences comptables, la fiscalité, la pratique professionnelle.
                  </p>
                </div>
                
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <Users className="text-purple-600" />
                  </div>
                  <h4 className="text-slate-900 font-bold mb-3 text-lg">Ateliers mensuels</h4>
                  <p className="text-slate-600 text-sm">
                    Sessions pratiques avec des professionnels, inspecteurs des impôts et acteurs du secteur.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 p-5 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-slate-700">
                  ➡️ Et d'autres modules complémentaires pour enrichir l'expérience.
                </p>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-teal-100 text-teal-800 rounded-full flex items-center justify-center font-bold text-lg">
                  7
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Informations pratiques
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-teal-50 rounded-xl border border-teal-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">💼</span>
                    </div>
                    <div>
                      <p className="text-teal-800 text-sm font-medium">Frais d'inscription</p>
                      <p className="text-slate-900 text-2xl font-bold">10 000 F</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-amber-50 rounded-xl border border-amber-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">💰</span>
                    </div>
                    <div>
                      <p className="text-amber-800 text-sm font-medium">Frais de participation</p>
                      <p className="text-slate-900 text-2xl font-bold">100 000 F</p>
                      <p className="text-amber-700 text-sm mt-1 font-medium">(payable par tranche)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 8 */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center font-bold text-lg">
                  8
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Un programme accessible même à distance
                </h3>
              </div>
              
              <p className="text-slate-700 mb-6">
                Le Programme Expérience & Incubation Professionnelle est entièrement accessible aux participants résidant hors de Cotonou ou hors du Bénin.
                <br /><br />
                <span className="text-blue-600 font-medium">👉 Grâce à une organisation flexible et des outils numériques professionnels :</span>
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  "Les séances hebdomadaires peuvent être suivies 100 % en ligne",
                  "Les cas pratiques, dossiers comptables et travaux sont transmis et suivis à distance",
                  "Le suivi personnalisé, les corrections et validations se font en ligne par le cabinet",
                  "Les participants à distance bénéficient du même encadrement, des mêmes exigences et de la même rigueur professionnelle",
                  "Les rencontres en présentiel sont recommandées mais non bloquantes pour les participants éloignés",
                  "Des solutions alternatives sont prévues pour garantir une expérience complète et équitable"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                    <Check className="text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-blue-50 rounded-xl p-5 border-l-4 border-blue-400">
                <p className="text-slate-800">
                  👉 Que vous soyez à Cotonou, à l'intérieur du pays ou à l'étranger, vous pouvez suivre le programme et acquérir une véritable expérience professionnelle.
                </p>
              </div>
            </div>
          </div>

          {/* Appel final */}
          <div className="text-center">
            <div className="mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Passez à la pratique. <span className="text-amber-600">Construisez une vraie expérience.</span>
              </h3>
              
              <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
                Ne laissez plus le manque d'expérience freiner votre évolution professionnelle.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
                {[
                  "Intégrez un programme exigeant, concret et professionnalisant",
                  "Développez une expérience comptable réelle",
                  "Positionnez-vous comme un professionnel crédible et opérationnel"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-amber-600"></div>
                    </div>
                    <span className="text-slate-700 text-left">{item}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-xl font-medium text-slate-800 mb-8">
                WELL STEVEN SARL — L'excellence comptable au service de votre avenir professionnel.
              </p>
            </div>

            {/* Bouton d'action */}
            <InteractiveHoverButton 
              onClick={redirectToWhatsApp}
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 text-lg font-medium rounded-lg"
            >
              <div className="flex items-center gap-3">
                <span>Intégrer le programme maintenant</span>
                <TrendingUp size={20} />
              </div>
            </InteractiveHoverButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgrammeIncubation;