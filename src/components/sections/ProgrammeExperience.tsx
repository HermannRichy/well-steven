"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";

export default function ProgrammeExperience() {
  const generateWhatsAppMessage = () => {
    const message = `Bonjour WELL STEVEN !

Je suis intéressé(e) par votre Programme Expérience & Incubation Professionnelle.

**Informations sur le programme :**
- Programme d'immersion réelle en comptabilité et fiscalité
- Approche 100% pratique et terrain
- Entreprise réelle confiée à chaque participant
- Attestation professionnelle d'un an

**Frais :**
- Frais d'inscription : 10 000 FCFA
- Frais de participation : 100 000 FCFA (payable par tranche)

Je souhaiterais intégrer ce programme. Pourriez-vous me donner plus d'informations sur les modalités d'inscription et le début des sessions ?

Merci d'avance !`;

    return encodeURIComponent(message);
  };

  const redirectToWhatsApp = () => {
    const phoneNumber = "2290190479512"; 
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="bg-[#fcfcfc] py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-15">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_1px_60%] gap-8 lg:gap-14 items-start">

          {/* GAUCHE */}
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-black">
              Programme <br />
              Expérience & <br />
              Incubation <br />
              Professionnelle
            </h2>

            <p className="text-gray-600 leading-relaxed max-w-md text-base md:text-lg">
              Une immersion réelle dans la pratique comptable et fiscale.
              <br /><br />
              Vous êtes étudiant, jeune diplômé ou professionnel en comptabilité
              et vous souhaitez acquérir une véritable expérience pratique,
              concrète et valorisable sur le marché du travail ?
              <br /><br />
              👉 Ce programme est conçu pour vous.
            </p>

            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-700">
              {[
                "Approche 100 % pratique et orientée terrain",
                "Maîtrise sectorielle complète (spécificités du Bénin)",
                "Contact direct avec les réalités administratives",
                "Entreprise réelle confiée à chaque participant",
                "Attestation professionnelle valorisable",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between hover:text-black transition py-2"
                >
                  <span className="pr-4">{item}</span>
                  <ArrowUpRight size={16} className="flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* LIGNE CENTRALE */}
          <div className="hidden lg:block w-px bg-gray-200 h-full" />

          {/* DROITE */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-end gap-4 sm:gap-6">
              <div className="flex items-end gap-2">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black">
                  100 000 F
                </span>
                <span className="text-gray-500 mb-1 text-xs sm:text-sm">
                  frais de participation
                </span>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black">
                  10 000 F
                </span>
                <span className="text-gray-500 mb-1 text-xs sm:text-sm">
                  frais d'inscription
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-500 italic">
              * Frais de participation payable par tranche
            </p>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg max-w-xl">
              Le cabinet <strong>WELL STEVEN SARL</strong> lance un programme
              d'accompagnement professionnel rigoureux, fondé sur une immersion
              totale dans la pratique réelle du métier de comptable et fiscaliste,
              exactement comme dans un cabinet professionnel.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3 md:space-y-4">
                {[
                  "Séance de formation pratique chaque semaine",
                  "Rencontre en présentiel au moins une fois par mois",
                  "Travail sur des cas pratiques réels",
                  "Traitement des dossiers en conditions réelles",
                  "Tenue comptable complète d'une entreprise réelle",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <Check className="text-black mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <ul className="space-y-3 md:space-y-4">
                {[
                  "Déclarations fiscales et sociales",
                  "Rencontres avec inspecteurs des impôts",
                  "Échanges avec agents de la CNSS",
                  "Gestion sectorielle (BTP, ONG, cliniques, services…)",
                  "Suivi et validation par WELL STEVEN SARL",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <Check className="text-black mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 md:p-6">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                ✔️ À l'issue du programme, chaque participant reçoit une{' '}
                <strong>attestation de travail d'une durée d'un an</strong>,
                délivrée par l'entreprise suivie.
                <br /><br />
                ✔️ Le programme est accessible à distance, même hors de Cotonou
                ou hors du Bénin, avec le même niveau d'exigence, de suivi et de rigueur.
              </p>
            </div>

            <div className="pt-2">
              <InteractiveHoverButton 
                onClick={redirectToWhatsApp}
                className="bg-secondary w-full sm:w-fit h-fit px-6 py-3 md:px-8 md:py-4"
              >
                <div className="flex items-center justify-center sm:justify-start gap-3">
                  <span className="text-sm md:text-base font-medium">Intégrer le programme</span>
                </div>
              </InteractiveHoverButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}