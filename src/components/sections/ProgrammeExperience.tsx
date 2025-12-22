"use client";

import { 
  ArrowUpRight, 
  CheckCircle2, 
  Building2, 
  Users2, 
  FileText, 
  GraduationCap, 
  Globe, 
  Briefcase, 
  ShieldCheck, 
  Stethoscope, 
  Construction, 
  Handshake, 
  ShoppingBag, 
  Settings,
  CreditCard,
  Target
} from "lucide-react";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";

export default function ProgrammeExperience() {
  const generateWhatsAppMessage = () => {
    const message = `Bonjour WELL STEVEN !
Je suis intéressé(e) par votre Programme Expérience & Incubation Professionnelle.
Je souhaiterais intégrer ce programme. Pourriez-vous me donner plus d'informations sur les modalités d'inscription et le début des sessions ?`;
    return encodeURIComponent(message);
  };

  const redirectToWhatsApp = () => {
    const phoneNumber = "2290190479512"; 
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="bg-[#fcfcfc] py-8 md:py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold font-momo text-black mb-6 leading-tight">
            Programme Expérience & <br />
            <span className="text-orange-600">Incubation Professionnelle</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-gray-800 mb-4">
            Une immersion réelle dans la pratique comptable et fiscale
          </p>
          <div className="max-w-3xl mx-auto bg-gray-50 border border-gray-100 p-6 rounded-2xl">
            <p className="text-gray-600 text-lg leading-relaxed">
              Vous êtes étudiant, jeune diplômé ou professionnel en comptabilité et vous souhaitez acquérir une véritable expérience pratique, concrète et valorisable sur le marché du travail ? <br />
              <strong className="text-black">Ce programme est conçu pour vous.</strong>
            </p>
          </div>
        </div>

        {/* INTRO DU CABINET */}
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <ShieldCheck className="text-orange-600" /> Le Cabinet WELL STEVEN SARL
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Le cabinet <strong>WELL STEVEN SARL</strong> lance un programme d’accompagnement professionnel rigoureux, fondé sur une immersion totale dans la pratique réelle du métier de comptable et fiscaliste, exactement comme dans un cabinet professionnel.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Target, text: "Approche 100% terrain" },
              { icon: Briefcase, text: "Immersion Totale" },
              { icon: GraduationCap, text: "Montée en compétence" },
              { icon: Globe, text: "Accessible à distance" },
            ].map((item, i) => (
              <div key={i} className="p-4 bg-white shadow-sm border border-gray-100 rounded-xl flex flex-col items-center text-center gap-2">
                <item.icon className="text-orange-600" size={24} />
                <span className="text-sm font-semibold">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CONTENU DU PROGRAMME - GRILLE PRINCIPALE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* 1 - APPROCHE PRATIQUE */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
              Approche 100% pratique & terrain
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex gap-3"><CheckCircle2 className="text-green-500 shrink-0" size={20} /> Une séance de formation pratique chaque semaine (en ligne ou présentiel)</li>
              <li className="flex gap-3"><CheckCircle2 className="text-green-500 shrink-0" size={20} /> Au moins une rencontre en présentiel par mois</li>
              <li className="flex gap-3"><CheckCircle2 className="text-green-500 shrink-0" size={20} /> Travail sur des cas pratiques réels (entreprises existantes)</li>
              <li className="flex gap-3"><CheckCircle2 className="text-green-500 shrink-0" size={20} /> Traitement des dossiers dans les conditions réelles d’un cabinet</li>
            </ul>
          </div>

          {/* 2 - MAITRISE SECTORIELLE */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
              Maîtrise sectorielle complète (Bénin)
            </h3>
            <p className="mb-4 text-gray-500 text-sm italic">Vous apprenez à gérer les spécificités propres à chaque structure :</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-gray-700"><Stethoscope size={18} /> Cliniques & Santé</div>
              <div className="flex items-center gap-2 text-gray-700"><Construction size={18} /> Entreprises de BTP</div>
              <div className="flex items-center gap-2 text-gray-700"><Handshake size={18} /> ONG & Associations</div>
              <div className="flex items-center gap-2 text-gray-700"><Building2 size={18} /> Sociétés commerciales</div>
              <div className="flex items-center gap-2 text-gray-700"><Settings size={18} /> Prestataires de services</div>
            </div>
          </div>

          {/* 3 - REALITES ADMINISTRATIVES */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
              Contact direct réalités administratives
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-600 font-medium italic">Pour aller au-delà de la théorie :</li>
              <li className="flex gap-3"><CheckCircle2 className="text-orange-500 shrink-0" size={20} /> Rencontres périodiques avec des inspecteurs des impôts</li>
              <li className="flex gap-3"><CheckCircle2 className="text-orange-500 shrink-0" size={20} /> Échanges avec des agents de la CNSS</li>
              <li className="flex gap-3"><CheckCircle2 className="text-orange-500 shrink-0" size={20} /> Compréhension des attentes de l’administration</li>
            </ul>
          </div>

          {/* 6 - CONTENU COMPLEMENTAIRE */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">6</span>
              Contenu détaillé du programme
            </h3>
            <div className="space-y-4">
              <div className="p-3 bg-gray-50 rounded-xl">
                <p className="font-bold text-sm uppercase text-orange-600">Projet annuel</p>
                <p className="text-sm text-gray-600">Tenue complète de la comptabilité et fiscalité d’une entreprise réelle.</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-xl">
                <p className="font-bold text-sm uppercase text-orange-600">Moments de formation</p>
                <p className="text-sm text-gray-600">Séances techniques : compétences comptables, fiscalité et pratique pro.</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-xl">
                <p className="font-bold text-sm uppercase text-orange-600">Ateliers mensuels</p>
                <p className="text-sm text-gray-600">Sessions pratiques avec inspecteurs et acteurs du secteur.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 - POINT CLÉ : L'ENTREPRISE RÉELLE */}
        <div className="bg-black text-white p-8 md:p-12 rounded-[2rem] mb-16 relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-block px-4 py-1 bg-orange-600 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
              Élément central & Différenciateur
            </div>
            <h3 className="text-3xl font-bold mb-6">4 - Une entreprise réelle confiée à chaque participant</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-gray-300 text-lg">
                  Chaque participant se voit confier une entreprise réelle, dont il assure la gestion de A à Z :
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3"><CheckCircle2 className="text-orange-500" /> Tenue comptable complète</li>
                  <li className="flex gap-3"><CheckCircle2 className="text-orange-500" /> Déclarations fiscales</li>
                  <li className="flex gap-3"><CheckCircle2 className="text-orange-500" /> Suivi des obligations légales et sociales</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                <p className="text-orange-400 font-bold mb-2 italic"> L&apos;engagement WELL STEVEN :</p>
                <p className="text-sm leading-relaxed text-gray-200">
                  Le tout sous l’encadrement, le contrôle et la validation du cabinet WELL STEVEN SARL, garantissant rigueur, conformité et montée en compétence progressive.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 5 - ATTESTATION */}
        <div className="bg-orange-50 border border-orange-100 p-8 rounded-3xl mb-16 flex flex-col md:flex-row items-center gap-8">
          <div className="bg-orange-600 p-4 rounded-2xl text-white">
            <FileText size={40} />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2 text-black text-center md:text-left">5 - Une attestation professionnelle valorisable</h3>
            <p className="text-gray-700 leading-relaxed text-center md:text-left">
              À l’issue du programme, l’entreprise pour laquelle vous avez tenu la comptabilité vous délivre une <strong>attestation de travail d’une durée d’un an</strong>. 
              Une expérience réelle, prouvée et valorisable qui constitue un avantage décisif pour l’emploi.
            </p>
          </div>
        </div>

        {/* 7 & 8 - INFOS PRATIQUES & DISTANCE */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* PRICING */}
          <div className="lg:col-span-1 bg-white p-8 rounded-3xl border-2 border-black shadow-xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><CreditCard /> Informations financières</h3>
            <div className="space-y-6">
              <div>
                <span className="block text-sm text-gray-500 uppercase font-bold tracking-wider">Frais d&apos;inscription</span>
                <span className="text-3xl font-black text-black">10 000 F</span>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <span className="block text-sm text-gray-500 uppercase font-bold tracking-wider">Frais de participation</span>
                <span className="text-4xl font-black text-orange-600">100 000 F</span>
                <p className="text-xs text-gray-500 mt-2 italic">* Payable par tranche</p>
              </div>
            </div>
          </div>

          {/* DISTANCE */}
          <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Globe className="text-blue-600" /> 8 - Accessible même à distance</h3>
            <p className="text-gray-600 mb-6">
              Le Programme est entièrement accessible aux participants résidant hors de Cotonou ou hors du Bénin grâce à des outils numériques professionnels :
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-green-500 mt-1" /> Séances hebdomadaires 100% en ligne</div>
              <div className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-green-500 mt-1" /> Cas pratiques transmis à distance</div>
              <div className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-green-500 mt-1" /> Suivi personnalisé & validations en ligne</div>
              <div className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-green-500 mt-1" /> Même encadrement et mêmes exigences</div>
            </div>
            <p className="mt-6 text-xs text-gray-400 bg-gray-50 p-3 rounded-lg">
              Les rencontres en présentiel sont recommandées mais non bloquantes pour les participants éloignés.
            </p>
          </div>
        </div>

        {/* CALL TO ACTION FINAL */}
        <div className="text-center space-y-8 bg-gray-900 text-white p-12 rounded-[3rem]">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Passez à la pratique. Construisez une vraie expérience.</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ne laissez plus le manque d’expérience freiner votre évolution professionnelle. Intégrez un programme exigeant, concret et professionnalisant.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <InteractiveHoverButton 
                              onClick={() => redirectToWhatsApp}
                              className="bg-secondary text-slate-900 text-sm py-3 font-bold w-fit"
                            >
                              Intégrez le programme 
                            </InteractiveHoverButton>
            <p className="text-sm font-medium text-orange-500 uppercase tracking-widest">
              WELL STEVEN SARL — L’excellence comptable au service de votre avenir professionnel.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}